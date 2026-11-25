S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .1)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def note(tag, mood, text, lines, head, **o):
    s(tag, 'ELI', 'card', mood, text, lines=lines, head=head, **o)
P = .9
TENSE = 'quiet, tense storyteller voice, gripping'
SCARED = 'scared whisper, breathing fast'

# ================= HOOK =================
T = 'DAY 3'
s(T,'ELI','gym','night',"If you get locked in your school during an outbreak, never hide in the gym.", a=['eli@640!'], kids=1, style=TENSE, gap=.2)
s(T,'ELI','gym','night',"Thirty one of us hid there. I found out why that was a mistake on day three.", kids=1, a=['eli@640!'], z=0, gap=.2)
s(T,'ELI','gym','night',"At two in the morning, the emergency doors started to shake.", kids=1, doors='shake', sfx=['slam','slam'], shake=1, style=SCARED, gap=.4, hush=1)
s(T,'ELI','gym','night',"Then the glass in the roof cracked.", kids=1, skylight='crack', sfx=['glass'], cam='in', style=SCARED, gap=.9, hush=1)
s(T,'ELI','schoolext','night',"Thirty days. One school. And by day thirty, the bell was ringing by itself.", z=8, sfx=['bell'], style=TENSE, gap=.5)

# ================= DAY 1 =================
T = 'DAY 1 · 11:40 AM'
s(T,'ELI','class','day',"Day one. Third period. Math. Ms. Park was explaining fractions.", a=['park@1000<','eli@400s'], desks=1)
s(T,'PARK','class','day',"Eli. Eyes on the board, please.", a=['park@1000<','eli@400s'], desks=1, talk='park', style='strict but kind teacher')
s(T,'ELI','class','day',"Then every phone in the room buzzed at the same time.", a=['park@1000<','eli@400s!'], desks=1, sfx=['alarm'], cam='in')
s(T,'PA','office','day',"Attention. This is a lockdown. This is not a drill. Lock all doors. Stay away from windows.", mic=1, vfx='radio', style='serious school principal on an intercom')
s(T,'ELI','corr','day',"Kids ran past the lockers. Teachers slammed doors. Somebody dropped a trumpet.", a=['eli@300>>1100'], phys='books', sfx=['steps','crash'])
s(T,'ELI','schoolext','day',"Out the window, people were walking across the football field. Slowly. In a straight line. Toward us.", z=9, zm=-12)
s(T,'ELI','gym','day',"Coach Dunn waved everyone into the gym. Big room. Thick walls. Everyone in one place.", kids=1, a=['eli@500'])
s(T,'ELI','gym','day',"It felt like the safest room in the building. That was the problem.", kids=1, a=['eli@500'], cam='in', gap=.6, hush=1)

# ================= DAY 2 =================
T = 'DAY 2'
s(T,'ELI','cafe','day',"Day two. We counted the food in the cafeteria. Juice boxes. Crackers. Four hundred chocolate milks.", a=['eli@420','leni@700<'], trays=1)
s(T,'LENA','cafe','day',"Four hundred milks, and no cereal. This school is a crime scene.", a=['eli@420','leni@700<'], talk='leni', style='sarcastic, funny, quick')
s(T,'ELI','cafe','day',"That's Lena. She's in my science class. She is never scared. Or she's really good at pretending.", a=['eli@420','leni@700<'])
s(T,'ELI','card','day',"A person can live about three weeks without food. But only about three days without water.", lines=['3 WEEKS WITHOUT FOOD.','3 DAYS WITHOUT WATER.'], head='SURVIVAL NOTES')
s(T,'ELI','cafe','day',"The tap water stopped on day two. The power stayed on. For now.", a=['eli@420!','leni@700<'], tap=1, sfx=['drip'])
s(T,'ELI','gym','dusk',"Thirty one kids and three teachers slept on gym mats. Basketballs rolled every time someone moved.", kids=1, phys='balls', sfx=['tick'])

# ================= DAY 3 =================
T = 'DAY 3 · 2:00 AM'
s(T,'ELI','gym','night',"Day three. Two A M. Remember the emergency doors?", kids=1, doors=1, style=TENSE)
s(T,'ELI','card','night',"Gym doors open outward, with a push bar. So nobody gets trapped in a fire.", lines=['GYM DOORS','OPEN OUTWARD.'], head='SURVIVAL NOTES')
s(T,'ELI','gym','night',"Which also means you can't barricade a door that opens away from you.", kids=1, doors=1, cam='in')
s(T,'ELI','gym','night',"And a gym has six of them. Plus a glass roof. Plus an echo that carries every sound outside.", kids=1, doors='shake', sfx=['slam'])
s(T,'ELI','gym','night',"The doors shook. Then the first push bar clicked.", kids=1, doors='open', sfx=['slam'], shake=1, gap=.6, hush=1)
s(T,'OKAFOR','gym','night',"Everybody up! To the library! Now! Single line, hold hands!", a=['okafor@900<'], kids=1, doors='open', talk='okafor', style='loud, urgent, calm leader')
s(T,'ELI','corr','night',"Mr. Okafor, the janitor, ran in front with his keys. He knew every door in this building.", a=['okafor@200>>1200','eli@40>>1100','leni@-80>>1000'], sfx=['steps'], dark=.3)
s(T,'ELI','gym','night',"Behind us, the skylight gave way.", kids=0, skylight='fall', phys='glass', z=5, sfx=['glass','crash'], shake=1, gap=.6, hush=1)
s(T,'ELI','lib','night',"We made it to the library. Twenty two kids. Not thirty one.", a=['eli@500!','leni@700<','okafor@900<'], cam='in', gap=P, hush=1)
s(T,'ELI','lib','night',"Nine kids went the wrong way in the dark. Toward the front doors. We didn't know where they were.", a=['eli@500','leni@700<'], gap=.5)

# ================= DAY 4-5 =================
T = 'DAY 4'
s(T,'ELI','lib','day',"Day four. We built a wall out of bookshelves.", a=['eli@300^','okafor@800<^'], shelves=1, sfx=['slam'])
s(T,'ELI','card','day',"A full library shelf can weigh more than three hundred pounds. Nobody is pushing that over.", lines=['ONE FULL SHELF:','300+ POUNDS.'], head='SURVIVAL NOTES')
s(T,'ELI','lib','day',"The library had one door, and no windows on the ground floor.", a=['eli@400','okafor@800<'], shelves=1)
s(T,'ELI','lib','day',"Plus a fire exit, straight up to the roof. Mr. Okafor picked it on purpose.", a=['eli@400','okafor@800<'], shelves=1, cam='in')
T = 'DAY 5'
s(T,'ELI','boiler','day',"Day five. No water left. Mr. Okafor took me to the boiler room.", a=['eli@400','okafor@760<'])
s(T,'OKAFOR','boiler','day',"This water heater holds forty gallons. Clean water. Most people forget it's there.", a=['eli@400','okafor@760<'], talk='okafor', heater=1, style='warm, wise older man')
s(T,'ELI','boiler','day',"There's a drain valve at the bottom. Turn off the power first. Let it cool. Then fill your bottles.", a=['eli@560^','okafor@760<'], heater='drain', sfx=['drip'])
s(T,'ELI','card','day',"Forty gallons is about one hundred fifty liters. For twenty two kids, that's a week. If we were careful.", lines=['40 GALLONS.','22 KIDS.','7 DAYS.'], head='SURVIVAL NOTES')

# ================= DAY 7 =================
T = 'DAY 7'
s(T,'ELI','lab','day',"Day seven. Lena wanted to make a torch out of hand sanitizer.", a=['eli@400','leni@700<'], sanitizer=1)
s(T,'HERO','lab','day',"Lena, no. That stuff burns almost invisible. You won't even see the flame.", a=['eli@400^','leni@700<'], talk='eli', style='worried kid, fast')
s(T,'ELI','card','day',"Alcohol sanitizer burns with a pale blue flame you can barely see in daylight.", lines=['SANITIZER FIRE IS','ALMOST INVISIBLE.'], head='SURVIVAL NOTES')
s(T,'ELI','lab','day',"People get burned because they think the fire is already out.", a=['eli@400','leni@700<'], sanitizer=1)
s(T,'LENA','lab','day',"Fine. Then what do we use against a hallway full of them?", a=['eli@400','leni@700<'], talk='leni', style='frustrated, determined')
s(T,'ELI','lab','day',"I looked at the fire alarm on the wall. And I had a much worse idea.", a=['eli@560','leni@700<'], alarm=1, cam='in', gap=.5)

# ================= DAY 9 =================
T = 'DAY 9 · 3:12 AM'
s(T,'ELI','lib','night',"Day nine. Three twelve in the morning. Everybody was asleep.", kids=1, shelves=1, style=TENSE)
s(T,'ELI','corr','night',"Then the school bell rang.", sfx=['bell'], dark=.4, cam='in', gap=1.0, hush=1)
s(T,'ELI','lib','night',"Nobody had touched it. The bell is controlled from one place. The main office.", a=['eli@500!','okafor@800<!'], kids=1, shelves=1)
s(T,'ELI','schoolext','night',"Outside, every one of them turned toward the sound. And started walking. Away from the library.", z=10, zm=14, sfx=['bell'])
s(T,'OKAFOR','lib','night',"Somebody is in the office. Somebody alive.", a=['eli@500','okafor@800<'], talk='okafor', style='low voice, amazed', gap=.6)

# ================= DAY 12 =================
T = 'DAY 12'
s(T,'ELI','corr','night',"Day twelve. The bell rang every night at three twelve. Always the same time. Always pulling them away from us.", sfx=['bell'], z=4, zm=40, dark=.3)
s(T,'ELI','corr','day',"So Lena and I went to find out who was ringing it.", a=['eli@200>800','leni@60>660'], sfx=['steps'])
s(T,'ELI','corr','day',"Locker hallway. Science wing. Then the main office. Door locked. Blinds closed.", a=['eli@400','leni@560'], office=1, cam='in')
s(T,'ELI','office','day',"Through the gap in the blinds, I saw a desk, a microphone, and a schedule taped to the wall.", mic=1, sched=1)
s(T,'ELI','card','day',"Three twelve. Every night. Written in red marker. Next to the words, keep them away from the kids.", lines=['3:12 AM — RING THE BELL.','KEEP THEM AWAY','FROM THE KIDS.'], head='OFFICE SCHEDULE', gap=P, hush=1)
s(T,'ELI','corr','day',"Somebody was protecting us. And they didn't want to be seen.", a=['eli@400!','leni@560'], office=1, gap=.5)

# ================= DAY 13 =================
T = 'DAY 13'
s(T,'ELI','corr','day',"Day thirteen. On the way back from the office, we heard it. Shuffling. Around the corner.", a=['eli@600!','leni@760!'], sfx=['steps'], style=SCARED)
s(T,'ELI','corr','day',"No time to run. Lena pulled me into a locker. She took the one next to it.", a=['eli@600>>760'], lockers='open', sfx=['slam'])
s(T,'ELI','corr','dusk',"Through the slots, I watched it walk past. A kid in a soccer jersey. Number nine.", slots=1, z=1, zm=-30, style=SCARED, gap=.5, hush=1)
s(T,'ELI','corr','dusk',"It stopped. Right outside my locker. And sniffed.", slots=1, z=1, zm=0, cam='in', gap=P, hush=1)
s(T,'ELI','corr','dusk',"Then the bell rang. In the middle of the day. And it walked away.", slots=1, z=1, zm=60, sfx=['bell'], gap=.5)
s(T,'ELI','corr','day',"Whoever was in that office was watching us. On the security cameras.", a=['eli@500!','leni@660<!'], cam='in', gap=.5)

# ================= DAY 18 =================
T = 'DAY 14'
s(T,'ELI','lib','day',"Day fourteen. Lena cut her hand on a broken window. Deep.", a=['eli@500!','leni@700<'], shelves=1)
s(T,'ELI','card','day',"Press a clean cloth on the cut. Hard. For ten full minutes. Don't peek, or it starts bleeding again.", lines=['PRESS HARD.','10 MINUTES.','DON\'T PEEK.'], head='SURVIVAL NOTES')
s(T,'LENA','lib','day',"This is the worst field trip ever.", a=['eli@500','leni@700<'], talk='leni', style='in pain but joking')
s(T,'ELI','lib','day',"Ms. Park would have been proud. I used fractions to split the last water. One twenty second each.", a=['eli@500','leni@700<'], kids=1, shelves=1)

# ================= DAY 15 =================
T = 'DAY 15'
s(T,'ELI','roof','day',"Day fifteen. We climbed to the roof. Nobody had seen the sky in two weeks.", a=['eli@400','leni@600','okafor@800<'])
s(T,'ELI','roof','day',"We spelled S O S in gravel. Letters ten feet tall.", a=['eli@400^','leni@700^'], sos=1)
s(T,'ELI','card','day',"Three of anything is a distress signal. Three fires. Three whistles. Three flashes of a mirror.", lines=['3 OF ANYTHING','= HELP.'], head='SURVIVAL NOTES')
s(T,'ELI','roof','day',"Lena used a mirror from the girls' bathroom. On a sunny day, a mirror flash can be seen for miles.", a=['eli@400','leni@600^'], flash=1, sos=1)
s(T,'ELI','roof','day',"Three flashes. Wait. Three flashes. For three hours.", a=['eli@400','leni@600^'], flash=1, sos=1, cam='in', gap=.5)
s(T,'ELI','roof','dusk',"Nobody answered. But across the street, a light in the hospital blinked back. Three times.", lights=1, a=['eli@400!','leni@600!'], gap=P, hush=1)

# ================= DAY 21 =================
T = 'DAY 21'
s(T,'ELI','lib','day',"Day twenty one. Water, two days left. Crackers, gone. Four hundred chocolate milks, also gone.", a=['eli@400','leni@600<'], kids=1, shelves=1)
s(T,'LENA','lib','day',"I never want to see a chocolate milk again. Ever.", a=['eli@400','leni@600<'], talk='leni', style='tired joke')
s(T,'ELI','lib','day',"Mr. Okafor got quiet. He kept looking at the door. Like he was deciding something.", a=['eli@400','okafor@800<'], kids=1, shelves=1, cam='in')
s(T,'OKAFOR','lib','night',"If I'm not back by morning, you go to the roof. And you wait for the helicopter.", a=['eli@400!','okafor@800<'], talk='okafor', style='calm, serious goodbye', gap=.4)
s(T,'HERO','lib','night',"What helicopter?", a=['eli@400^','okafor@800<'], talk='eli', style='confused kid', gap=.7, hush=1)
s(T,'ELI','corr','night',"He didn't answer. He took his keys, and walked into the dark hallway.", a=['okafor@500>1300'], dark=.5, sfx=['steps'], gap=.5)

# ================= DAY 24 =================
T = 'DAY 24 · 3:12 AM'
s(T,'ELI','lib','night',"Day twenty four. Three twelve. No bell.", kids=1, shelves=1, gap=P, hush=1)
s(T,'ELI','schoolext','night',"For the first time in two weeks, they didn't walk away. They turned around. Toward the library.", z=12, zm=-14, sfx=['moans'])
s(T,'ELI','lib','night',"Then someone knocked on the library door. Three times.", kids=1, shelves=1, sfx=['knock'], gap=.6, hush=1)
s(T,'PARK','lib','night',"Eli? It's Ms. Park. Please. Open the door.", kids=1, shelves=1, vfx='door', style='weak, tired, pleading through a door')
s(T,'ELI','lib','night',"Ms. Park. We hadn't seen her since day three. Since the gym.", a=['eli@560!','leni@760<!'], shelves=1, cam='in')
s(T,'LENA','lib','night',"Don't. We don't know if she's, you know. One of them.", a=['eli@560','leni@760<'], talk='leni', style='scared whisper')
s(T,'ELI','card','night',"So I asked her the one thing only the real Ms. Park would know.", lines=['WHAT DID WE','LEARN ON DAY 1?'], head='TEST')
s(T,'HERO','lib','night',"What were we learning, on day one?", a=['eli@560^'], shelves=1, talk='eli', style='brave, shaky voice', gap=.8, hush=1)
s(T,'PARK','lib','night',"Fractions. And you weren't paying attention, Eli.", vfx='door', style='tired but smiling', gap=.5)
s(T,'ELI','lib','night',"We moved one shelf. Just enough. Ms. Park came in with five of the missing kids.", a=['eli@400','park@700<','leni@560'], kids=1, shelves=1)
s(T,'PARK','lib','night',"We hid in the office for three weeks. Mr. Okafor brought us water. He rang the bell every night.", a=['eli@400','park@700<'], talk='park', style='tired teacher, emotional')
s(T,'ELI','lib','night',"Tonight, he never came.", a=['eli@400!','park@700<'], cam='in', gap=1.0, hush=1)

# ================= DAY 27-30 =================
T = 'DAY 27'
s(T,'ELI','lib','day',"Day twenty seven. We could hear them in the hallway now. Scratching at the shelves.", a=['eli@400!','leni@600'], shelves='shake', sfx=['scratch'], shake=1)
s(T,'ELI','lib','day',"So I did my worse idea. I pulled the fire alarm in the science wing. And ran.", a=['eli@200>>1200'], alarm=1, sfx=['alarm'])
s(T,'ELI','corr','day',"Sprinklers. Sirens. Every door in the school unlocked. Every zombie in the school followed the noise. Toward the lab.", z=6, zm=50, rain=1, sfx=['alarm'], phys='books')
s(T,'ELI','roof','day',"And twenty seven kids climbed to the roof.", a=['eli@300','leni@500','park@700<'], kids=1, sos=1)
T = 'DAY 30'
s(T,'ELI','roof','day',"Day thirty. We heard it before we saw it. A helicopter. Coming from the hospital.", a=['eli@400^','leni@600^'], heli=1, sfx=['engine'], cam='out')
s(T,'ELI','roof','day',"The pilot said they'd been watching our school for two weeks.", heli=1, a=['eli@400','leni@600'])
s(T,'ELI','office','night',"Because every night at three twelve, someone flashed a light from the office window. Three times.", mic=1, flash=1)
s(T,'ELI','schoolext','day',"Mr. Okafor. He was ringing the bell for us. And signaling for help. Every single night.", z=0, office=1)
s(T,'ELI','roof','day',"We waited for him on the roof as long as they'd let us.", heli=1, a=['eli@400','leni@600'], gap=P, hush=1)
s(T,'ELI','schoolext','dusk',"As the helicopter lifted off, the school bell rang one more time.", sfx=['bell'], heli='up', cam='out', gap=1.2, hush=1)
s(T,'ELI','gym','night',"If you get locked in your school during an outbreak, don't hide in the gym.", kids=0, doors='open', gap=.3)
s(T,'ELI','corr','day',"Find the janitor.", cam='in', gap=1.6, hush=1)
s('','ELI','card','night',"What would you do on day one? Gym, library, or roof? Tell me in the comments.", lines=['GYM, LIBRARY,','OR ROOF?'], head='YOUR CHOICE', gap=1.4)

# ---- auto close-ups for consecutive same-background shots ----
import re as _re
_prev=None; _run=0
for _sh in S:
    _bg=_sh['bg']
    _run = _run+1 if _bg==_prev else 0
    _prev=_bg
    if _bg in ('class','corr','gym','cafe','lib','boiler','lab','roof','office','schoolext') and _run % 2 == 1 and 'zoomx' not in _sh['o']:
        _a=_sh['o'].get('a',[])
        _xs=[int(_re.match(r'[a-z]+@(-?\d+)',x).group(1)) for x in _a if _re.match(r'[a-z]+@(-?\d+)',x) and '>' not in x]
        _sh['o']['zoomx'] = sum(_xs)/len(_xs) if _xs else 640
        _sh['o']['zoomy'] = 470 if _xs else 400
        _sh['o']['zooms'] = 1.4
for _sh in S:
    if _sh['o'].get('z'): _sh['o'].setdefault('zk','pax')
