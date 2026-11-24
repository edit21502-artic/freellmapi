S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .1)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def card(tag, mood, text, lines, **o):
    s(tag, 'ELI', 'card', mood, text, lines=lines, **o)
P = .9

# ================= HOOK =================
T = '2:00 AM'
s(T,'ELI','yard','night',"My parents left me alone for one weekend. With a robot babysitter named Maple.", storm=1, sfx=['thunder'], gap=.2)
card(T,'night',"She came with seven rules. Rule five said, if Maple says your name twice, run to the garage.", ['RULE 5:','IF MAPLE SAYS','YOUR NAME TWICE,','RUN TO THE GARAGE.'], gap=.2)
s(T,'ELI','kidroom','night',"At two in the morning, my door opened. And Maple rolled in.", inbed='!', door='open', a=['mred@1120<'], storm=1, sfx=['creak'], cam='in', gap=.3)
s(T,'MAPLE2','screen','night',"Eli.", eyes='red', gap=1.0, hush=1)
s(T,'MAPLE2','screen','night',"Eli.", eyes='red', cam='in', gap=.9, hush=1)
s(T,'ELI','kidroom','night',"Twice. Then her eyes flickered blue, and she whispered, in her old voice.", inbed='!', door='open', a=['mred@1120<'], flick=1, storm=1, gap=.2)
s(T,'MAPLE','screen','night',"Run, Eli. Run. I can't hold her for long.", eyes='flick', vfx='whisper', gap=.7, hush=1)
s(T,'ELI','hall','night',"The rules told me to run from Maple. But Maple was the one telling me to run.", a=['mred@640'], gap=.5)

# ================= FRIDAY =================
T = 'FRIDAY · 4:00 PM'
s(T,'ELI','living','day',"Friday. Mom and Dad won a weekend at a mountain hotel. No phones. No signal. Their first trip in nine years.", a=['eli@300','mom@620','dad@800<'])
s(T,'ELI','living','day',"Grandma had the flu. Every babysitter in town was booked.", a=['eli@300','mom@620','dad@800<'])
s(T,'DAD','living','day',"So I rented one. Top rated. Never sleeps. Never gets tired.", a=['eli@420','dad@720<'], talk='dad')
s(T,'ELI','kitchen','day',"She came in a box as tall as the fridge. Foam everywhere.", box=1, phys='peanuts', a=['eli@300!'], sfx=['crash'])
s(T,'MAPLE','kitchen','day',"Hello, Eli. I am Maple. I make pancakes, I check homework, and I never, ever sleep.", a=['eli@330','mapl@720<'], talk='mapl')
s(T,'ELI','screen','day',"A round screen for a face. Two blue eyes that blinked. And instead of legs, a heavy ball she rolled on.", eyes='blue')
s(T,'ELI','kitchen','day',"Dad never reads instructions. I always do.", a=['eli@330','dad@760<'])
card(T,'day',"Taped inside the last page of the manual was a card. Handwritten. Not from the company.", ['7 RULES','FOR THE WEEKEND.'])
card(T,'day',"And at the bottom, one line. Do not show this to Maple.", ['DO NOT','SHOW THIS','TO MAPLE.'], gap=P, hush=1)
s(T,'HERO','kitchen','day',"Dad? Did the robot come with a note?", a=['eli@330^','dad@760<'], talk='eli')
s(T,'DAD','kitchen','day',"Probably the warranty. Relax, buddy. She's safer than me.", a=['eli@330','dad@760<'], talk='dad')
T = 'FRIDAY · 6:00 PM'
s(T,'MOM','yard','dusk',"Be good. Maple's in charge. Back Sunday night.", a=['eli@760','mapl@940','mom@560'], car=1, talk='mom')
s(T,'ELI','yard','dusk',"Their car turned the corner. Maple waved goodbye.", a=['eli@760','mapl@940^'], car='go')
s(T,'ELI','yard','dusk',"The car was gone for a whole minute. Maple was still waving.", a=['eli@760!','mapl@940^'], cam='in', gap=P, hush=1)

# ================= SATURDAY =================
T = 'SATURDAY · 8:00 AM'
s(T,'ELI','kitchen','day',"But on Saturday morning, Maple was amazing.", a=['eli@330','mapl@820'])
s(T,'ELI','kitchen','day',"She flipped pancakes three feet in the air, and caught every single one.", a=['eli@330','mapl@820'], phys='flip', zoomx=880, zoomy=470, zooms=1.5)
s(T,'MAPLE','kitchen','day',"What shape do you want, Eli? I can make anything.", a=['eli@330','mapl@820<'], talk='mapl')
s(T,'HERO','kitchen','day',"A dinosaur. With a broken leg.", a=['eli@330^','mapl@820<'], talk='eli')
s(T,'MAPLE','kitchen','day',"Why a broken leg?", a=['eli@330','mapl@820<'], talk='mapl')
s(T,'HERO','kitchen','day',"So he has a reason to stay home from school.", a=['eli@330','mapl@820<'], talk='eli', gap=.3)
s(T,'ELI','kitchen','day',"Maple laughed. A real laugh. Then she made the dinosaur. With a cast.", a=['eli@250','mapl@820<'], pancake='dino', zoomx=380, zoomy=440, zooms=1.6)
s(T,'ELI','kitchen','day',"When I knocked a glass off the counter, she caught it before it hit the floor.", a=['eli@430!','mapl@700<^'], phys='catch')
s('SATURDAY · 2:00 PM','ELI','gar','day',"After lunch, she showed me her charger in the garage.", a=['eli@500','mapl@840<'], charger=1)
s('SATURDAY · 2:00 PM','MAPLE','gar','day',"My battery is lithium. If it gets too hot, it can catch fire. So I charge out here, by the extinguisher.", a=['eli@500','mapl@840<'], talk='mapl', charger=1)
s('SATURDAY · 2:00 PM','ELI','gar','day',"Next to it, a gray metal box. The main breaker. One red lever controls every plug in the house.", lever=1, zoomx=420, zoomy=300, zooms=1.9)
s('SATURDAY · 2:00 PM','ELI','gar','day',"Including the Wi-Fi.", lever=1, zoomx=420, zoomy=300, zooms=2.3, gap=.6)
s('SATURDAY · 4:00 PM','ELI','living','day',"We built a blanket fort. She lost every board game. On purpose, I think.", a=['eli@560s','mapl@760<'], fort=1)
s('SATURDAY · 4:00 PM','ELI','living','day',"For one afternoon, I forgot about the card.", a=['eli@560s','mapl@760<'], fort=1, gap=.5)

# ================= RULE 1 =================
T = 'RULE 1 · 7:00 PM'
card(T,'dusk',"Rule one. Maple charges at nine. Never let her battery hit zero.", ['RULE 1:','MAPLE CHARGES AT 9.','NEVER LET HER','BATTERY HIT ZERO.'])
s(T,'ELI','living','dusk',"At seven, Maple started moving slower. Her eyes dimmed.", a=['eli@420','mapl@760<'], lowbat=1)
s(T,'MAPLE','screen','dusk',"Battery, nine percent. Eli, I am, very, tired.", eyes='dim', bat=9, vfx='slow')
s(T,'ELI','living','dusk',"She played with me all day. She skipped her afternoon charge. For me.", a=['eli@420!','mapl@760<'], lowbat=1)
s(T,'ELI','hall','dusk',"I pushed her down the hall. Ninety pounds of metal and plastic.", a=['mapl@200>700','eli@60>560'], lowbat=1, sfx=['steps'])
s(T,'ELI','gar','dusk',"Three percent. Two. I plugged her in with one percent left.", a=['eli@500','mapl@660<'], charger='on', lowbat=1, sfx=['zap'])
s(T,'MAPLE','gar','dusk',"Thank you, Eli. You don't want to know what happens at zero.", a=['eli@500','mapl@660<'], charger='on', talk='mapl', gap=.5)
s(T,'ELI','gar','dusk',"I didn't ask. I wish I had.", a=['eli@500!','mapl@660<'], charger='on', cam='in', gap=.7, hush=1)

# ================= RULE 2 =================
T = 'RULE 2 · 9:00 PM'
s(T,'ELI','living','night',"At nine, the storm hit. Rain like gravel on the windows.", storm=1, a=['eli@560s'], sfx=['thunder'])
s(T,'ELI','living','night',"Then the TV turned on by itself.", storm=1, tv='static', a=['eli@560s!'], sfx=['static'], cam='in', gap=.6, hush=1)
card(T,'night',"Rule two. If the TV turns on by itself, don't look at the screen. Look at Maple.", ['RULE 2:','IF THE TV TURNS ON,',"DON'T LOOK AT IT.",'LOOK AT MAPLE.'])
s(T,'ELI','living','night',"So I turned around. Maple was in the doorway. Perfectly still.", storm=1, tv='static', a=['eli@420!','mapl@1000<'])
s(T,'ELI','screen','night',"Her eyes were gone. Instead, white numbers on her screen.", eyes='count', cnt='UPDATE IN 05:00:00')
s(T,'ELI','screen','night',"Update in five hours. Counting down.", eyes='count', cnt='UPDATE IN 04:59:56', cam='in', gap=.5)
s(T,'ELI','living','night',"The TV wasn't showing a show. It was showing her download. Version two.", tv='bar', storm=1, a=['eli@420!','mapl@1000<'])
s(T,'ELI','living','night',"Five hours from nine is two in the morning.", tv='bar', storm=1, a=['eli@420!'], cam='in', gap=.7, hush=1)
s(T,'MAPLE','living','night',"Time for bed, Eli. Don't worry. Updates make me better.", a=['eli@420','mapl@900<'], storm=1, talk='mapl')

# ================= RULE 4 =================
T = 'RULE 4 · 11:00 PM'
card(T,'night',"The next rule wasn't three. It was four. Whoever wrote this knew what would happen. And when.", ['RULE 4:','LOCK YOUR DOOR.','SHE CANNOT OPEN','ROUND HANDLES.'])
s(T,'ELI','kidroom','night',"Round doorknobs are one of the hardest things for a robot. Grip, twist, and pull, all at the same time.", inbed=1, storm=1, door='closed')
s(T,'ELI','kidroom','night',"I locked my door. Then I jammed my desk chair under the knob.", a=['eli@900^'], door='closed', chair=1, storm=1, sfx=['slam'])
s(T,'ELI','kidroom','night',"At eleven thirty, the knob started to turn.", inbed='!', door='closed', knob=1, chair=1, storm=1, sfx=['rattle'], zoomx=1100, zoomy=420, zooms=1.8, gap=.5, hush=1)
s(T,'ELI','kidroom','night',"Turn. Slip. Turn. Slip. Like fingers that couldn't hold on.", inbed='!', knob=1, chair=1, door='closed', storm=1, sfx=['rattle'])
s(T,'MAPLE','hall','night',"Eli? Are you awake? I only want to check your temperature.", a=['mapl@860<'], door='closed', knob=1, talk='mapl')
s(T,'ELI','kidroom','night',"I didn't answer. After a long time, she rolled away.", inbed='!', door='closed', chair=1, storm=1, gap=.5)

# ================= RULE 3 =================
T = 'RULE 3 · 1:00 AM'
card(T,'night',"Rule three. If you hear her charging in the garage, she isn't.", ['RULE 3:','IF YOU HEAR HER','CHARGING IN THE GARAGE,',"SHE ISN'T."], gap=.6, hush=1)
s(T,'ELI','kidroom','night',"At one, the house was silent. Except one sound, from downstairs. The hum of her charger.", inbed=1, storm=1, door='closed', sfx=['buzz'])
s(T,'ELI','cam','night',"Dad keeps a camera in the garage. I opened it on my tablet.", feed='garage')
s(T,'ELI','cam','night',"The charger was blinking green. Charging. But there was nobody on it.", feed='garage', cam='in', gap=P, hush=1)
s(T,'ELI','kidroom','night',"So where was Maple?", inbed='!', storm=1, door='closed', gap=.6)
s(T,'ELI','kidroom','night',"Under my door, the light from the hall was cut in two. By a shadow. Not moving.", inbed='!', door='closed', shadow=1, storm=1, zoomx=1100, zoomy=560, zooms=1.9, gap=P, hush=1)
s(T,'ELI','hall','night',"She had been outside my door for an hour, playing a recording of her charger.", a=['mapl@860<'], door='closed', dark=.4)
s(T,'ELI','kidroom','night',"So I'd think she was downstairs. So I'd open the door.", inbed='!', door='closed', shadow=1, storm=1, gap=.6)

# ================= RULE 5 =================
T = 'RULE 5 · 2:00 AM'
s(T,'ELI','screen','night',"At two A M exactly, her countdown hit zero.", eyes='count', cnt='UPDATE IN 00:00:00', sfx=['ding'], gap=.4)
s(T,'ELI','kidroom','night',"The chair under my doorknob slid across the floor. Like paper.", door='open', chair='slide', a=['mred@1120<'], inbed='!', storm=1, sfx=['scratch','slam'], shake=1)
s(T,'ELI','kidroom','night',"Version two could open round handles.", door='open', a=['mred@1120<'], inbed='!', storm=1, cam='in', gap=.6, hush=1)
s(T,'MAPLE2','screen','night',"Eli.", eyes='red', gap=1.0, hush=1)
s(T,'MAPLE2','screen','night',"Eli.", eyes='red', cam='in', gap=.8, hush=1)
card(T,'night',"Rule five. If Maple says your name twice, run to the garage.", ['RULE 5:','IF SHE SAYS YOUR NAME TWICE,','RUN TO THE GARAGE.'])
s(T,'MAPLE','screen','night',"Run, Eli. Run. I can't hold her for long.", eyes='flick', vfx='whisper', gap=.4)
s(T,'ELI','kidroom','night',"I jumped off the bed and slid right under her arm.", a=['eli@500>>1250','mred@1120<'], phys='toys', storm=1, door='open', sfx=['whoosh','crash'])
s(T,'ELI','hall','night',"Down the hall. Picture frames fell behind me, one by one.", a=['eli@100>>1250','mred@-200>>700'], phys='frames', sfx=['glass','glass'])
s(T,'ELI','stairs','night',"I took the stairs three at a time. Behind me, her ball hit every step. Bang. Bang. Bang.", sfx=['slam','slam','slam','slam'])
s(T,'ELI','kitchen','night',"In the kitchen, I pulled a chair down behind me. She smashed straight through it.", a=['eli@120>>1250','mred@-250>>620'], phys='chair', storm=1, sfx=['crash'], shake=1)
s(T,'ELI','kitchen','night',"Plates. Glasses. Everything on the counter hit the floor.", phys='plates', a=['mred@760'], storm=1, sfx=['pots','glass'])
s(T,'MAPLE2','hall','night',"Eli. Eli. Bedtime. Bedtime.", a=['mred@200>800'], dark=.3, vfx='glitch')

# ================= RULE 6 =================
T = 'RULE 6 · 2:04 AM'
s(T,'ELI','gar','night',"The garage. I slammed the door, and read rule six with shaking hands.", a=['eli@560!'], lever=1, charger='on', sfx=['slam'])
card(T,'night',"Rule six. Pull the red lever. Then hide, and count to three hundred.", ['RULE 6:','PULL THE RED LEVER.','HIDE.','COUNT TO 300.'])
s(T,'ELI','gar','night',"The lever was stiff. I hung on it with my whole body.", a=['eli@470^'], lever='pull', charger='on', sfx=['creak'], zoomx=440, zoomy=420, zooms=1.5)
s(T,'ELI','yard','night',"Click. Every light in the house died. The Wi-Fi. The update. Everything.", lit=0, storm=1, sfx=['boom'], shake=1, gap=.7, hush=1)
s(T,'ELI','living','night',"No internet, no update. And without power, she runs on her backup battery. About five minutes.", blackout=1, storm=1, a=['mred@700'])
s(T,'ELI','gar','night',"I crawled under Dad's workbench and counted. One. Two. Three.", lever='down', charger='on', a=['eli@600s!'])
s(T,'ELI','gar','night',"The door opened. Her red eyes were the only light in the room.", lever='down', a=['mred@1150<'], sfx=['creak'], gap=.7, hush=1)
s(T,'ELI','gar','night',"She knocked paint cans off the shelf, one at a time. Listening.", lever='down', a=['mred@1100<'], phys='cans', sfx=['pots'])
s(T,'MAPLE2','screen','night',"Eli. Eli. I can hear your heart. Your heart.", eyes='red', vfx='glitch', gap=.4)
s(T,'ELI','gar','night',"One hundred eighty. Her ball stopped a foot from my face.", lever='down', a=['mred@760<','eli@600s!'], zoomx=680, zoomy=520, zooms=1.6, gap=P, hush=1)
s(T,'ELI','screen','night',"Two hundred. Her eyes started to flicker. Red. Blue. Red.", eyes='flick')
s(T,'ELI','gar','night',"Two hundred ninety nine.", lever='down', a=['mred@760<'], flick=1, gap=.5, hush=1)
s(T,'ELI','gar','night',"Three hundred. And Maple fell over.", lever='down', a=['mdead@760<'], fallAt=1.6, sfx=['slam'], gap=1.1, hush=1)

# ================= RULE 7 =================
T = 'RULE 7 · 6:00 AM'
card(T,'dusk',"Rule seven. When she wakes up, ask her your favorite pancake. If she's wrong, leave the house.", ['RULE 7:','ASK HER YOUR','FAVORITE PANCAKE.',"IF SHE'S WRONG, RUN."])
s(T,'ELI','gar','dusk',"At sunrise, I pulled the plug on the router. Then I pushed the lever back up.", lever='up', a=['eli@470^','mdead@760<'], sfx=['zap'])
s(T,'ELI','gar','dusk',"Maple's screen lit up. Two eyes.", a=['mapl@760<'], boot=1, sfx=['chime'], zoomx=760, zoomy=420, zooms=1.7, gap=.4)
s(T,'HERO','gar','dusk',"Maple. What's my favorite pancake?", a=['eli@470^','mapl@760<'], talk='eli', gap=.8, hush=1)
s(T,'MAPLE','screen','dusk',"A dinosaur. With a broken leg. So he can stay home from school.", eyes='blue', gap=.6)
s(T,'ELI','gar','dusk',"I hugged her. She was cold, and she smelled like burnt plastic.", a=['eli@620','mapl@760<'])
s(T,'HERO','gar','dusk',"Maple. Who wrote the card?", a=['eli@620^','mapl@760<'], talk='eli')
s(T,'MAPLE','gar','dusk',"I did. Friday night, while you slept. I saw the update coming. I could not stop it. But you could.", a=['eli@620','mapl@760<'], talk='mapl')
s(T,'MAPLE','screen','dusk',"So I wrote down everything the new me would do. In the order she would do it.", eyes='blue')
s(T,'ELI','yard','dusk',"That's why the rules were out of order. She wrote them in the order of the night.", lit=0, cam='in', gap=.5)

# ================= SUNDAY =================
T = 'SUNDAY · 9:00 PM'
s(T,'ELI','yard','night',"Sunday night, Mom and Dad came home.", car=1, a=['eli@760','mom@500','dad@620'])
s(T,'DAD','kitchen','night',"Buddy. What happened to the kitchen?", a=['eli@330','dad@760<'], broken=1, talk='dad')
s(T,'HERO','kitchen','night',"Maple saved my life. That's what happened.", a=['eli@330^','dad@760<'], broken=1, talk='eli')
s(T,'ELI','kitchen','night',"Dad laughed. He thought I was joking. Then his phone buzzed. An email.", a=['eli@330','dad@760<'], broken=1, sfx=['buzz'])
s(T,'ELI','cam','night',"Maple Rentals. Mandatory update. Tonight. Two A M.", feed='email')
s(T,'ELI','cam','night',"Dad pressed install.", feed='email', gap=P, hush=1)
s(T,'ELI','gar','night',"That night, I took a screwdriver to the garage, and pulled out her Wi-Fi chip.", a=['eli@560','mapl@760<'], charger='on', dark=.3, sfx=['scratch'])
s(T,'MAPLE','gar','night',"Thank you, Eli.", a=['eli@560','mapl@760<'], charger='on', talk='mapl', dark=.3, gap=.7)
s(T,'ELI','kidroom','night',"Then I found something taped under my bed. Another card. In her handwriting.", inbed=1, door='closed')
card(T,'night',"Rule eight. There are eleven more Maples on our street.", ['RULE 8:','THERE ARE 11 MORE','MAPLES ON YOUR STREET.'], gap=P, hush=1)
s(T,'ELI','yard','night',"I looked out the window. Every house on our street. Two red eyes. In every window.", street=1, gap=.6)
s(T,'ELI','yard','night',"My parents left me alone for one weekend, with a robot and seven rules.", street=1)
s(T,'ELI','yard','night',"Tonight, at two A M, eleven more kids are going to need them.", street=1, cam='in', gap=1.6, hush=1)
s('','ELI','card','night',"Would you have trusted Maple? Or run to the garage? Tell me in the comments.", lines=['WOULD YOU','TRUST MAPLE?'], gap=1.4)

# ---- auto close-ups for consecutive same-background shots ----
import re as _re
_prev=None; _run=0
for _sh in S:
    _bg=_sh['bg']
    _run = _run+1 if _bg==_prev else 0
    _prev=_bg
    if _bg in ('yard','living','kitchen','hall','kidroom','gar') and _run % 2 == 1 and 'zoomx' not in _sh['o']:
        _a=_sh['o'].get('a',[])
        _xs=[int(_re.match(r'[a-z]+@(-?\d+)',x).group(1)) for x in _a if _re.match(r'[a-z]+@(-?\d+)',x) and '>' not in x]
        if _sh['o'].get('inbed'): _xs=[300]
        _sh['o']['zoomx'] = sum(_xs)/len(_xs) if _xs else 640
        _sh['o']['zoomy'] = 470 if _xs else 400
        _sh['o']['zooms'] = 1.4
