import sys, numpy as np, soundfile as sf
sr=44100; dur=float(sys.argv[1]); bpm=100; beat=60/bpm
t=np.arange(int(sr*dur))/sr; out=np.zeros_like(t)
def note(m): return 440*2**((m-69)/12)
def saw(f,tt): return 2*((tt*f)%1)-1
prog=[(45,[57,60,64]),(41,[53,57,60]),(48,[55,60,64]),(43,[55,59,62])]  # Am F C G
bar=beat*4
for i in range(int(dur/bar)+1):
    root,ch=prog[i%4]; s=int(i*bar*sr); e=min(int((i+1)*bar*sr),len(t))
    if s>=len(t): break
    tt=t[s:e]-t[s]
    pad=sum(saw(note(m),tt)+saw(note(m)*1.004,tt) for m in ch)/6
    env=np.minimum(1,tt/0.4)*np.minimum(1,(bar-tt)/0.3)
    out[s:e]+=pad*env*0.13
    for k in range(8):  # 8th-note bass
        bs=s+int(k*beat/2*sr); be=min(bs+int(beat/2*sr*0.9),len(t))
        if bs>=len(t): break
        b=t[bs:be]-t[bs]; f=note(root-12+(12 if k%2 else 0))
        out[bs:be]+=np.sign(np.sin(2*np.pi*f*b))*np.exp(-b*6)*0.16
# simple lowpass on music so far
k=np.ones(12)/12; out=np.convolve(out,k,'same')
nb=int(dur/beat)+1
for j in range(nb):
    s=int(j*beat*sr)
    if s>=len(t): break
    n=min(int(0.35*sr),len(t)-s); b=np.arange(n)/sr
    out[s:s+n]+=np.sin(2*np.pi*(50+90*np.exp(-b*25))*b)*np.exp(-b*9)*0.55   # kick
    if j%2==1:
        out[s:s+n]+=np.random.randn(n)*np.exp(-b*14)*0.22   # snare
    for h in (0,0.5):
        hs=s+int(h*beat*sr); hn=min(int(0.05*sr),len(t)-hs)
        if hn>0: out[hs:hs+hn]+=np.random.randn(hn)*np.exp(-np.arange(hn)/sr*80)*0.07
fade=np.minimum(1,np.minimum(t/1.0,(dur-t)/2.0))
out*=fade; out/=np.abs(out).max()*1.2
sf.write(sys.argv[2],np.stack([out,out],1),sr)
