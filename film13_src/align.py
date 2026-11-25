import json,os,sys,re,difflib,numpy as np,soundfile as sf
os.environ['HF_HUB_DISABLE_XET']='1'
D=os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0,D)
from shots import S
from faster_whisper import WhisperModel
C=json.load(open(D+'/out/chunks/chunks.json')); od=D+'/out/shotvo'; os.makedirs(od,exist_ok=True)
m=WhisperModel('base.en',device='cpu',compute_type='int8')
def norm(w): return re.sub(r'[^a-z0-9]','',w.lower())
def toks(text): return [t for t in (norm(x) for x in re.split(r"[\s\-—]+",text)) if t]
NUM={'31':'thirtyone','400':'fourhundred','40':'forty','3':'three','300':'threehundred','10':'ten','9':'nine','22':'twentytwo','7':'seven','15':'fifteen','12':'twelve'}
WT={}
for ci,ids in enumerate(C):
    a,sr=sf.read(D+f'/out/chunks/c{ci:02d}.wav',dtype='float32')
    a16=np.interp(np.arange(0,len(a),sr/16000),np.arange(len(a)),a).astype(np.float32)
    segs,_=m.transcribe(a16,word_timestamps=True,language='en')
    hw=[]
    for s in segs:
        for w in s.words:
            for t in toks(w.word): hw.append((NUM.get(t,t),w.start,w.end))
    exp=[];own=[]
    for k,i in enumerate(ids):
        for t in toks(S[i]['text']): exp.append(t); own.append(k)
    sm=difflib.SequenceMatcher(None,exp,[h[0] for h in hw],autojunk=False)
    mp={}
    for bl in sm.get_matching_blocks():
        for j in range(bl.size): mp[bl.a+j]=bl.b+j
    print(ci,'match',round(len(mp)/len(exp),2),flush=True)
    # per shot first/last matched heard word
    span=[]
    for k in range(len(ids)):
        idx=[mp[e] for e in range(len(exp)) if own[e]==k and e in mp]
        span.append((hw[min(idx)][1],hw[max(idx)][2]) if idx else None)
    # fill missing by neighbors
    for k in range(len(span)):
        if span[k] is None:
            p=span[k-1][1] if k and span[k-1] else 0; n=next((x[0] for x in span[k+1:] if x),len(a)/sr); span[k]=(p+.05,n-.05)
    cuts=[0]+[ (span[k][1]+span[k+1][0])/2 for k in range(len(ids)-1)]+[len(a)/sr]
    for k,i in enumerate(ids):
        s0=max(cuts[k],span[k][0]-.12); s1=min(cuts[k+1],span[k][1]+.25)
        sf.write(f'{od}/{i:03d}.wav',a[int(s0*sr):int(s1*sr)],sr)
        # word timings relative to segment start, mapped onto script words
        words=S[i]['text'].split(); wt=[]
        hidx=[(e,mp[e]) for e in range(len(exp)) if own[e]==k and e in mp]
        WT[i]=dict(off=s0,dur=s1-s0,heard=[(hw[h][1]-s0,hw[h][2]-s0) for e,h in hidx])
json.dump(WT,open(D+'/out/wordtimes.json','w'))
print('ALIGNED',flush=True)
