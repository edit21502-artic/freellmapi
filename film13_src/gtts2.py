import json,os,sys,time,hashlib,base64,re
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0,'/tmp/claude-0/-home-user-freellmapi/6c15012c-f415-5c71-99ee-ea376aba74d7/scratchpad/gem')
from g import call
from shots import S
SPK=dict(ELI='Eli',HERO='Eli',LENA='Lena',OKAFOR='Okafor',PARK='Park',PA='Principal')
VO=dict(Eli='Puck',Lena='Leda',Okafor='Charon',Park='Kore',Principal='Orus')
DEF=dict(ELI='quiet, tense young storyteller narrating a scary story, natural pauses',HERO='kid speaking out loud in the scene',LENA='confident girl',OKAFOR='warm, deep older man',PARK='kind teacher',PA='school principal on an intercom')
out=os.path.join(os.path.dirname(os.path.abspath(__file__)),'out','chunks'); os.makedirs(out,exist_ok=True)
chunks=[];cur=[];w=0
for i,sh in enumerate(S):
    n=len(sh['text'].split())
    if cur and (w+n>165 or len(cur)>=13): chunks.append(cur);cur=[];w=0
    cur.append(i);w+=n
chunks.append(cur)
json.dump(chunks,open(os.path.join(out,'chunks.json'),'w'))
print('chunks',len(chunks),[len(c) for c in chunks],flush=True)
for ci,c in enumerate(chunks):
    f=os.path.join(out,f'c{ci:02d}.wav')
    if os.path.exists(f): continue
    spk=sorted({SPK[S[i]['sp']] for i in c}); 
    if len(spk)<2: spk.append('Narrator2' if 'Eli' in spk else 'Eli')
    cfg=[{'speaker':s,'voice':VO.get(s,'Zephyr')} for s in spk]
    inp=[{'type':'text','text':S[i]['text'],'annotations':[{'type':'speech_metadata','speaker':SPK[S[i]['sp']],'style':S[i]['o'].get('style') or DEF[S[i]['sp']]}]} for i in c]
    p={'model':'gemini-3.8-flash-lite-tts','input':inp,'generation_config':{'speech_config':cfg}}
    for attempt in range(6):
        t0=time.time(); code,d=call(p,timeout=600)
        if code==200:
            for s2 in d.get('steps',[]):
                for part in s2.get('content',[]) or []:
                    if part.get('type')=='audio': open(f,'wb').write(base64.b64decode(part['data']))
            print(ci,'ok',flush=True); break
        print(ci,code,str(d)[:200],flush=True)
        if code==429 and 'per day' in str(d): print('DAILY LIMIT',flush=True); sys.exit(2)
        m=re.search(r'retry in (\d+)s',str(d)); time.sleep(int(m.group(1))+3 if m else 30)
    time.sleep(max(0,21-(time.time()-t0)))
print('DONE',flush=True)
