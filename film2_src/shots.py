S = []
def s(tm, sp, bg, pal, text, **o):
    S.append(dict(day=tm, sp=sp, bg=bg, pal=pal, text=text, o=o))

# ---------------- COLD OPEN (hook) ----------------
s('','HERO','corridor','day',"Go, go, go! Don't look back!", a=['ben@520>>1500','hero@380>>1380'], z=8, zm=150, zr=[-330,250], talk='hero', shake=1, speed=1, alarm=1, sfx=['growl','steps'], gap=.1, pre=.05)
s('','ELI','corridor','day',"That's me. Running from my entire accounting department.", a=['ben@300>>1300','hero@150>>1150'], z=9, zm=140, zr=[-420,120], speed=1, alarm=1, sfx=['growl'], gap=.15)
s('','ELI','corridor','day',"And that door? It is not going to hold.", a=['hero@900^','ben@780!'], props=['door'], alarm=1, shake=1, sfx=['slam','knock'], gap=.15)
s('','ELI','doorcu','day',"Because the thing behind it is my boss. And he is very hungry.", shake=1, alarm=1, sfx=['glass','growl'], cam='in', gap=.2)
s('','ELI','title','night',"To understand how a normal Monday turned into this, we have to go back. Forty minutes.", lines=['40 MINUTES','EARLIER'], rewind=1, sfx=['whoosh'], gap=.5)

# ---------------- 9:02 ----------------
s('9:02 AM','ELI','office','day',"Nine A M. Monday. My name is Eli. I make spreadsheets, for a company that sells spreadsheets.", a=['hero0@430t'], c=0)
s('9:02 AM','BEN','office','day',"Morning, Eli. Wow. You look terrible.", a=['hero0@430t','ben@200>620'], talk='ben')
s('9:03 AM','HERO','office','day',"Thanks, Ben. It's called a Monday.", a=['hero0@430<','ben@640<'], talk='hero0', cam='in')
s('9:05 AM','ELI','break','day',"Ben is my best friend at work. Mostly because he is the only one who refills the coffee.", a=['hero0@520:cup','ben@760<:cup'])
s('9:05 AM','BEN','break','day',"Hey. Did you see the boss today? He came back from that trip looking kind of gray.", a=['hero0@520:cup','ben@760<:cup'], talk='ben')
s('9:06 AM','HERO','break','day',"He always looks gray.", a=['hero0@520:cup','ben@760<:cup'], talk='hero0')
s('9:06 AM','BEN','break','day',"No, like, actually gray. And he has this bandage on his hand.", a=['hero0@520:cup','ben@760<:cup'], talk='ben', cam='in')
s('9:08 AM','ELI','corridor','day',"He was right. Mister Harris walked past us without a word. He was sweating, and he smelled like a wet basement.", a=['boss@1100>500<','hero0@250:cup','ben@150:cup'])
s('9:08 AM','BOSS','corridor','day',"Meeting. Now.", a=['boss@620<','hero0@300!','ben@190!'], talk='boss', cam='in', sfx=['cough'])

# ---------------- 9:31 ----------------
s('9:31 AM','ELI','meeting','day',"The meeting was about quarterly numbers. Nobody looked at the numbers. Everybody looked at him.", a=['boss@1040<','hero0@330','ben@210','leo@520'])
s('9:33 AM','LEO','meeting','day',"Um, Mister Harris? Sir? Are you okay?", a=['boss@1040<','hero0@330','ben@210','leo@560^'], talk='leo')
s('9:33 AM','ELI','meeting','day',"He was not okay. He dropped onto the table like a bag of laundry.", a=['boss@980<_','hero0@330!','ben@210!','leo@560!'], sfx=['slam'], shake=1)
s('9:34 AM','ELI','meeting','day',"Leo, the intern, did what any nice kid would do. He went to help.", a=['boss@980<_','hero0@330','ben@210','leo@560>860'])
s('9:34 AM','HERO','meeting','day',"Leo, wait. Maybe don't touch him.", a=['boss@980<_','hero0@360^','ben@230!','leo@870'], talk='hero0')
s('9:34 AM','ELI','meeting','day',"Too late. Mister Harris sat up, grabbed him, and bit him. Right on the shoulder.", a=['zboss@950<','leo@880!','hero0@330!','ben@210!'], sfx=['growl','scream'], shake=1, cam='in')
s('9:34 AM','BEN','meeting','day',"Did he just bite the intern?!", a=['zboss@950<','leo@880!','hero0@330!','ben@220!'], talk='ben')

# ---------------- 9:36 chaos ----------------
s('9:36 AM','ELI','office','day',"For three seconds, nobody moved. Then everybody moved.", a=['civ@300>>1400','civ@700>>-200','civ@980>>1500','civ@520>>-100','hero0@180!','ben@90!'], props=['mess'], alarm=1, sfx=['scream','bell'], shake=1)
s('9:36 AM','PA','office','day',"Attention. This is building security. Please remain calm, and stay at your desks.", a=['civ@900>>-200','civ@200>>1400','hero0@470!','ben@360!'], props=['mess'], alarm=1)
s('9:37 AM','HERO','office','day',"Stay at our desks? Is he serious?!", a=['hero0@470','ben@350!'], props=['mess'], alarm=1, talk='hero0', cam='in')
s('9:38 AM','ELI','office','day',"Then Leo stood back up. And Leo did not look like Leo anymore.", a=['zleo@880<','hero0@330!','ben@220!'], props=['mess'], alarm=1, cam='in', sfx=['growl'])
s('9:39 AM','ELI','office','day',"He bit Karen from H R. Karen bit Dave. Dave bit two guys from sales. It spread faster than office gossip.", a=['civ@500>>-300','civ@380>>-400'], z=6, zm=-120, zr=[700,1500], props=['mess'], alarm=1, shake=1, sfx=['scream','growl'])
s('9:40 AM','BEN','corridor','day',"Elevator! Come on, come on!", a=['ben@300>>1400','hero0@160>>1250'], talk='ben', alarm=1, speed=1, sfx=['steps'])

# ---------------- 9:42 elevator ----------------
s('9:42 AM','ELI','elevator','day',"We ran to the elevator. I pressed the button about forty times.", a=['hero0@930^','ben@1050!'], alarm=1, sfx=['ding'])
s('9:42 AM','ELI','elevator','day',"The doors opened. It was full. And nobody inside was going to the lobby.", a=['hero0@980!','ben@1090!'], open=1, alarm=1, shake=1, sfx=['ding','growl'], cam='in')
s('9:42 AM','HERO','elevator','day',"Nope! Stairs! Stairs!", a=['hero0@980>>1500','ben@1090>>1600'], open=1, zout=1, alarm=1, talk='hero0', sfx=['steps'])
s('9:43 AM','FRANK','stairs','day',"Lobby is gone! I repeat, the lobby is gone! Do not come down!", a=['frank@760<^:radio','hero0@300!','ben@200!'], talk='frank', dark=.2, alarm=1)
s('9:43 AM','ELI','stairs','day',"That was Frank, from security. If the lobby was gone, there was only one way left. Up.", a=['frank@700<:radio','hero0@330','ben@220'], dark=.2, alarm=1)
s('9:44 AM','ELI','break','day',"On the way, I ran through the break room, and grabbed the first helmet I could find.", a=['hero0@200>>470^'], alarm=1, sfx=['pots'], grab=1)
s('9:44 AM','BEN','break','day',"Is that a colander?", a=['hero@520','ben@780<'], talk='ben', alarm=1, nocol=1)
s('9:44 AM','HERO','break','day',"It's protection, Ben!", a=['hero@520^','ben@780<'], talk='hero', alarm=1, nocol=1, cam='in')

# ---------------- 9:47 back to the hook ----------------
s('9:47 AM','ELI','corridor','day',"And that is how I ended up here. Running down a hallway, from people I used to eat lunch with.", a=['frank@640>>1620','ben@500>>1480','hero@360>>1340'], z=9, zm=150, zr=[-380,230], speed=1, alarm=1, shake=1, sfx=['growl','steps'])
s('9:47 AM','ELI','corridor','day',"We slammed the door. And Mister Harris put his hand right through it.", a=['hero@880!','ben@760!','frank@640!'], props=['door','hand'], alarm=1, shake=1, sfx=['slam','glass'])
s('9:47 AM','BEN','corridor','day',"Eli! Do something!", a=['hero@880!','ben@760!','frank@640!'], props=['door','hand'], alarm=1, talk='ben')
s('9:47 AM','ELI','corridor','day',"I looked around. A plant. A printer. And a fire extinguisher.", a=['hero@560^','ben@760!','frank@660!'], props=['door','hand'], alarm=1, cam='in')
s('9:48 AM','HERO','corridor','day',"Sorry, sir. I quit.", a=['hero@800:ext','ben@560!','frank@450!'], props=['door','hand'], alarm=1, talk='hero', spray=1, sfx=['spray'], pre=.3)
s('9:48 AM','ELI','stairs','day',"It bought us ten seconds. We ran for the roof.", a=['hero@200>>900','ben@100>>800','frank@0>>700'], dark=.2, alarm=1, sfx=['steps'])

# ---------------- roof ----------------
s('9:51 AM','ELI','roof','day',"Frank jammed the roof door with his flashlight. And for the first time in forty minutes, it was quiet.", a=['frank@330<','hero@620','ben@760'], props=['rdoor'])
s('9:52 AM','ELI','city','day',"Then we looked at the city. Smoke. Sirens. Fire on every block. It was not just our office.", cam='in', sfx=['moans'])
s('9:52 AM','FRANK','roof','day',"It's everywhere. The whole city.", a=['frank@450','hero@620','ben@760'], talk='frank', props=['rdoor'])
s('9:53 AM','BEN','roof','day',"So, do we still have to come in tomorrow?", a=['frank@450','hero@620','ben@780<'], talk='ben', props=['rdoor'], cam='in')
s('9:53 AM','HERO','roof','day',"Ben.", a=['frank@450','hero@620','ben@780<'], talk='hero', props=['rdoor'])
s('9:53 AM','BEN','roof','day',"What? I'm just asking.", a=['frank@450','hero@620','ben@780<'], talk='ben', props=['rdoor'])
s('9:55 AM','ELI','roof','dusk',"That was the first hour. I had no food, no plan, and a colander on my head.", a=['hero@620'], props=['rdoor'], cam='in')
s('9:55 AM','ELI','roof','dusk',"And behind that door, forty two coworkers were learning how to climb stairs.", a=['hero@700<!','ben@840<!','frank@560<!'], props=['rdoor'], shake=1, sfx=['knock','growl'])
s('','ELI','title','night',"This was only day one.", lines=['DAY ONE'], gap=1.2)
