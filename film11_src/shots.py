S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .1)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def nb(text, lines, **o):
    s(o.pop('tag', ''), 'ELI', 'box', o.pop('mood', 'night'), text, lines=lines, head=o.pop('head', "GRANDPA'S RULES"), **o)
P = .9
GA = 'grandpa@'

# ================= HOOK =================
T = '3:00 AM'
s(T,'ELI','woods','night',"Grandpa left me seven rules for one night. The longest night of the winter.", cold=1, gap=.25)
nb("Rule three said, after eleven, do not open the door.", ['RULE 3:','AFTER 11 PM,','DO NOT OPEN THE DOOR.'], tag=T, gap=.2)
nb("Not even for me.", ['NOT EVEN','FOR ME.'], tag=T, gap=P, hush=1)
s(T,'ELI','porch','night',"At three in the morning, someone knocked.", lit=0, sfx=['knock'], cam='in', gap=P, hush=1)
s(T,'MIMIC','cabin','night',"Open up, kiddo. It's me. I came back early.", a=['eli@760!'], clock=3, knock=1, fire=.6, vfx='mimic', gap=.5)
s(T,'ELI','cabin','night',"It was Grandpa's voice. But Grandpa's truck was stuck in the snow. Forty miles away.", a=['eli@760!'], clock=3, fire=.6, cam='in', gap=1.0, hush=1)

# ================= CH1: FROST LAKE =================
T = 'FROST LAKE · DAY'
s(T,'ELI','lake','day',"Every winter, I spend a week with Grandpa at his cabin on Frost Lake.", cold=1, a=['eli@420','grandpa@600'])
s(T,'ELI','woods','day',"No signal. No neighbors. Just pine trees, and snow up to your knees.", cold=1, a=['eli@500'])
s(T,'ELI','lake','day',"And one cabin on the far shore, where old Mr. Hale keeps a lamp in his window.", cold=1)
s(T,'GRANDPA','lake','day',"Hale's lamp has been on every night for forty years. Best lighthouse on the lake.", cold=1, a=['eli@420','grandpa@600<'], talk='grandpa')
s(T,'ELI','cabin','day',"Grandpa makes pancakes shaped like states. They all look like Ohio.", a=['eli@420','grandpa@680<'])
s(T,'GRANDPA','cabin','day',"That one's Texas.", a=['eli@420','grandpa@680<'], talk='grandpa')
s(T,'ELI','cabin','day',"It was Ohio.", a=['eli@420<','grandpa@680<'], gap=.3)
s(T,'ELI','lake','day',"He taught me how to read ice. Four inches of clear black ice can hold a person.", cold=1, a=['eli@500','grandpa@680<'])
s(T,'ELI','lake','day',"Gray, cloudy ice holds about half that. And never trust ice near the reeds.", cold=1, a=['eli@500>>700','grandpa@680<'], sfx=['crunch'])
s(T,'GRANDPA','lake','day',"If it cracks, lie flat. Spread your weight. Crawl back the way you came.", cold=1, a=['eli@500','grandpa@680<'], talk='grandpa', cam='in')
s('2:00 PM','ELI','cabin','day',"After lunch, we play cards. Grandpa cheats. Badly.", a=['eli@420s','grandpa@680s<'])
s('2:00 PM','ELI','cabin','day',"He hides aces in his sleeve, and then forgets which sleeve.", a=['eli@420s','grandpa@680s<^'], cam='in')
s('2:00 PM','GRANDPA','cabin','day',"Rule one of this cabin. Grandpa always wins.", a=['eli@420s','grandpa@680s<'], talk='grandpa')
s('2:01 PM','ELI','cabin','day',"Then why is there an ace on the floor?", a=['eli@420s^','grandpa@680s<'], gap=.3)
s('3:00 PM','ELI','woods','day',"We chop wood until our hands hurt.", cold=1, a=['eli@400','grandpa@700<^'], sfx=['slam','crunch'])
s('3:05 PM','GRANDPA','woods','day',"Dry pine burns hot and fast. Birch burns slow, even a little wet. Remember that.", cold=1, a=['eli@400','grandpa@700<'], talk='grandpa', cam='in')
s('3:30 PM','ELI','porch','day',"He stacks the logs by the door, in rows of four. He always counts them. Out loud. Every time.", cold=1, a=['grandpa@520'], lit=0)
s('4:10 PM','ELI','cabin','dusk',"At four, the radio said a storm was coming. The longest night of the year.", a=['eli@420','grandpa@680<'], clock=4)
s('4:12 PM','ELI','cabin','dusk',"And Grandpa's heart pills were in town. Forty miles there. Forty back.", a=['eli@420','grandpa@760'], clock=4)
s('4:15 PM','GRANDPA','porch','dusk',"Back by midnight. If I'm not, the rules are on the table.", cold=1, a=['eli@300','grandpa@560<'], talk='grandpa')
s('4:15 PM','HERO','porch','dusk',"What rules?", cold=1, a=['eli@300^','grandpa@560<'], talk='eli')
s('4:16 PM','GRANDPA','porch','dusk',"You'll know which one, when you need it.", cold=1, a=['eli@300','grandpa@560>>1400'], talk='grandpa', sfx=['crunch'], gap=.4)
s('4:20 PM','ELI','porch','dusk',"I watched his taillights disappear into the trees. Then the snow covered his tracks.", cold=1, a=['eli@300'], tracks=1, cam='out', gap=.4)
s('4:30 PM','ELI','cabin','dusk',"On the table, an envelope. Seven rules. Numbered. And one line at the top.", a=['eli@360'], note=1, clock=4)
nb("Read them in the order they happen. Not in the order I wrote them.", ['READ THEM IN THE ORDER','THEY HAPPEN.','NOT IN THE ORDER','I WROTE THEM.'], tag='4:30 PM', mood='dusk', gap=.6, hush=1)

# ================= RULE 1 =================
T = 'RULE 1 · 6:00 PM'
nb("Rule one. Keep the stove burning until dawn.", ['RULE 1:','KEEP THE STOVE BURNING','UNTIL DAWN.'], tag=T)
s(T,'ELI','cabin','night',"At thirty below, an empty cabin can drop below freezing in a few hours.", a=['eli@760'], clock=6)
s(T,'ELI','cabin','night',"The stove is the only thing keeping this room alive.", a=['eli@560s'], clock=6, cam='in')
s(T,'ELI','cabin','night',"But a stove in a sealed room makes carbon monoxide. No smell. No color.", a=['eli@420'], clock=6)
s(T,'ELI','cabin','night',"So Grandpa always leaves the chimney damper open, and one window cracked, one inch.", a=['eli@300^'], clock=6)
s(T,'ELI','porch','night',"I bring in exactly seven logs from the pile outside. I count them twice.", cold=1, a=['eli@500'], sfx=['crunch'])
s(T,'ELI','cabin','night',"Seven logs. Enough until morning, if I'm careful.", a=['eli@760s'], logs=7, clock=7, cam='in', gap=.4)

# ================= RULE 2 =================
T = 'RULE 2 · 11:00 PM'
s(T,'ELI','lake','night',"At eleven, I look across the lake. Mr. Hale's lamp is burning, like always.", cold=1, lamp=1, sfx=['gust'])
s(T,'ELI','lake','night',"And then it goes out.", lamp='out', cam='in', gap=P, hush=1)
nb("Rule two. If Mr. Hale's lamp goes out, close the shutters.", ['RULE 2:',"IF MR. HALE'S LAMP GOES OUT,",'CLOSE THE SHUTTERS.'], tag=T)
s(T,'ELI','cabin','night',"The shutters are outside. I run out in my socks. The wind takes my breath away.", a=['eli@300>>1100'], clock=11, sfx=['gust','steps'])
s(T,'ELI','lake','night',"Out on the ice, something is walking toward our cabin. Slowly. In a straight line.", lamp=0, walker=1, sfx=['crunch'])
s(T,'ELI','porch','night',"Wind at thirty below can freeze bare skin in under ten minutes. My fingers burn on the metal latch.", cold=1, a=['eli@200!'], lit=1, sfx=['gust'])
s(T,'ELI','cabin','night',"I close the shutters. I drop the bar on the door. And I do not look again.", a=['eli@760!'], shutters=1, bar=1, clock=11, sfx=['slam'], gap=.5)
s('11:20 PM','ELI','cabin','night',"I put my hands in my armpits until the feeling comes back.", a=['eli@560s'], shutters=1, bar=1, clock=11.3)
s('11:21 PM','ELI','box','night',"Never rub frozen skin. Never hold it to the fire. Warm it slowly.", lines=['NEVER RUB FROZEN SKIN.','NEVER HOLD IT TO THE FIRE.','WARM IT SLOWLY.'], head='FROSTBITE', gap=.4)

# ================= RULE 6 =================
T = 'RULE 6 · 12:40 AM'
s(T,'ELI','woods','night',"All night, the pines around the cabin creak in the wind. It is the loudest sound out here.", sfx=['creak','gust'])
s(T,'ELI','woods','night',"At twelve forty, they stop.", still=1, gap=1.1, hush=1)
s(T,'ELI','cabin','night',"No wind. No creaking. Just the fire. And something else. Breathing. Right outside the window.", a=['eli@560!'], shutters=1, bar=1, clock=12.6, frost=1, cam='in', gap=.6, hush=1)
nb("Rule six. When the trees stop creaking, do not look at the window.", ['RULE 6:','WHEN THE TREES STOP CREAKING,','DO NOT LOOK','AT THE WINDOW.'], tag=T)
s(T,'ELI','cabin','night',"Rule six. He skipped three, four, and five. Because this happens before them.", a=['eli@760s!'], shutters=1, bar=1, clock=12.7)
s(T,'ELI','cabin','night',"How did he know? How did he know the order?", a=['eli@760s'], shutters=1, bar=1, clock=12.8, cam='in', gap=.6)
s(T,'ELI','cabin','night',"Something taps the glass behind the shutters. Tap. Tap. Like a fingernail. Like it wants me to turn around.", a=['eli@760s!'], shutters=1, bar=1, clock=12.9, sfx=['knock'], gap=.6, hush=1)
s(T,'ELI','cabin','night',"I sit with my back to the window, and stare at the fire, for forty minutes.", a=['eli@760s'], shutters=1, bar=1, clock=1, gap=.4)
s(T,'ELI','woods','night',"At one twenty, the trees start creaking again. I have never loved a sound so much.", sfx=['creak'], gap=.4)

# ================= RULE 3 =================
T = 'RULE 3 · 3:00 AM'
s(T,'ELI','porch','night',"Three A M. Knock. Knock. Knock.", lit=0, sfx=['knock'], gap=.6, hush=1)
s(T,'MIMIC','cabin','night',"Open up, kiddo. It's me. I came back early.", a=['eli@760!'], shutters=1, bar=1, clock=3, knock=1, vfx='mimic')
nb("Rule three. After eleven, do not open the door. Not even for me.", ['RULE 3:','DO NOT OPEN THE DOOR.','NOT EVEN FOR ME.'], tag=T)
s(T,'ELI','cabin','night',"Grandpa never knocks three times. He knocks twice, and says, room service. Every single time.", a=['eli@560'], shutters=1, bar=1, clock=3)
s(T,'MIMIC','cabin','night',"My hands are freezing, kiddo. Please.", a=['eli@560!'], shutters=1, bar=1, clock=3, knock=1, vfx='mimic', gap=.4)
s(T,'ELI','cabin','night',"Frostbite starts in the fingers. Skin turns white, then numb, then hard as wax.", a=['eli@560!'], shutters=1, bar=1, clock=3, cam='in')
s(T,'ELI','porch','night',"If it really was him out there, he had maybe an hour.", cold=1, lit=0, gap=.4)
s(T,'ELI','cabin','night',"My hand was on the bar. Then I remembered. Grandpa wrote this rule. He knew this would happen.", a=['eli@960^'], shutters=1, bar=1, clock=3, gap=.5)
s(T,'MIMIC','cabin','night',"Kiddo? Why won't you let me in?", a=['eli@960!'], shutters=1, bar=1, clock=3.1, knock=1, vfx='mimic', gap=.7, hush=1)
s(T,'ELI','cabin','night',"I put both hands over my ears. I count the logs out loud, like Grandpa does. One. Two. Three.", a=['eli@560s!'], shutters=1, bar=1, clock=3.1)
s(T,'ELI','porch','night',"The knocking stopped. And I heard footsteps on the snow. Walking around the cabin. Toward the back.", lit=0, tracks=1, sfx=['crunch'], gap=.5)

# ================= RULE 4 =================
T = 'RULE 4 · 3:30 AM'
s(T,'ELI','cabin','night',"Then, something heavy lands on the roof.", a=['eli@560!'], shutters=1, bar=1, clock=3.5, sfx=['slam'], shake=1, gap=.5)
s(T,'MIMIC','cabin','night',"Kiddo. Open the chimney. I'll come down like Santa.", a=['eli@600!'], shutters=1, bar=1, clock=3.5, vfx='mimic', cam='in')
nb("Rule four. Never answer a voice that comes from the roof.", ['RULE 4:','NEVER ANSWER A VOICE','THAT COMES FROM THE ROOF.'], tag=T)
s(T,'ELI','cabin','night',"So I do the opposite. I grab two birch logs, and feed the stove.", a=['eli@560^'], shutters=1, bar=1, clock=3.6, fire=1, logs=5)
s(T,'ELI','porch','night',"Hot air pours up the chimney. Hotter than anything could stand.", cold=1, lit=1, sfx=['crackle'])
s(T,'ELI','cabin','night',"On the roof, something scrambles. Slides. And drops into the snow.", a=['eli@560!'], shutters=1, bar=1, clock=3.7, sfx=['slam'], shake=1, gap=.5)
s('3:45 AM','ELI','porch','night',"Then, the footsteps again. Walking away. Toward the lake.", cold=1, lit=0, tracks=1, sfx=['crunch'])
s('3:50 AM','ELI','cabin','night',"I put my eye to a crack in the shutters.", a=['eli@300!'], shutters=1, bar=1, clock=3.8)
s('3:50 AM','ELI','lake','night',"There are more of them on the ice. Five. Six. All standing still. All facing our cabin.", many=6, lamp=0, sfx=['gust'], cam='in', gap=.5)

# ================= RULE 5 =================
T = 'RULE 5 · 4:15 AM'
s(T,'ELI','cabin','night',"Four fifteen. Four logs left. I count them again. And again.", a=['eli@760s'], shutters=1, bar=1, clock=4.2, logs=5, extra=4)
s(T,'ELI','cabin','night',"Five. There are five logs. I only had four.", a=['eli@760s!'], shutters=1, bar=1, clock=4.2, logs=5, extra=4, cam='in', gap=P, hush=1)
nb("Rule five. Count the logs. If there is one more than you brought in, do not put it in the stove.", ['RULE 5:','COUNT THE LOGS.','IF THERE IS ONE MORE,','DO NOT BURN IT.'], tag=T)
s(T,'ELI','cabin','night',"The extra log is cold. Wet. And when the fire flickers, it looks like it has fingers.", a=['eli@760!'], shutters=1, bar=1, clock=4.3, logs=5, extra=4)
s(T,'ELI','cabin','night',"I push the extra log into the corner with a broom. I do not touch it.", a=['eli@900!'], shutters=1, bar=1, clock=4.4, logs=5, extra=4)
s(T,'ELI','cabin','night',"When I look back a minute later, it has moved. Closer to the stove.", a=['eli@760!'], shutters=1, bar=1, clock=4.5, logs=5, extra=4, cam='in', gap=P, hush=1)
s(T,'ELI','cabin','night',"I burn the other four. Slowly. One every forty minutes.", a=['eli@560s'], shutters=1, bar=1, clock=5, logs=1, fire=.5)
s(T,'ELI','cabin','night',"By five, the fire is small, and I start shivering. Shivering is good. It means your body is still fighting.", a=['eli@560s'], shutters=1, bar=1, clock=5, logs=1, fire=.35)
s(T,'ELI','cabin','night',"When the shivering stops, that is when you worry.", a=['eli@560s!'], shutters=1, bar=1, clock=5.2, logs=1, fire=.3, cam='in', gap=.4)
s(T,'ELI','cabin','night',"I wrap myself in every blanket. Hat on. Socks on my hands. And I keep my eyes on the clock.", a=['eli@560s'], shutters=1, bar=1, clock=5.5, logs=1, fire=.3, gap=.4)

# ================= RULE 7 =================
T = 'RULE 7 · 6:00 AM'
nb("Rule seven. At six A M, open the door. Whoever is there.", ['RULE 7:','AT 6 AM, OPEN THE DOOR.','WHOEVER IS THERE.'], tag=T, gap=.4)
s(T,'ELI','cabin','dusk',"Six A M. The fire is almost out. Then, two knocks.", a=['eli@560s!'], shutters=1, bar=1, clock=6, fire=.2, sfx=['knock'], gap=.4)
s(T,'GRANDPA','porch','dusk',"Room service.", cold=1, lit=0, a=['grandpa@460'], gap=.9, hush=1)
s(T,'ELI','cabin','dusk',"Two knocks. Room service. Nobody else knows that. Nobody.", a=['eli@760'], shutters=1, bar=1, clock=6, fire=.2, cam='in', gap=.4)
s(T,'ELI','porch','dusk',"I lift the bar. I open the door. Grandpa. Ice in his beard. Alive.", cold=1, lit=0, a=['eli@560','grandpa@420'], cam='in')
s(T,'ELI','cabin','dusk',"His truck slid off the road at the bridge, around ten. So he walked. Across the lake.", a=['eli@560','grandpa@760<'], clock=6.2, fire=.7)
s(T,'HERO','cabin','dusk',"Mr. Hale's lamp went out at eleven. Was he okay?", a=['eli@560^','grandpa@760<'], clock=6.2, fire=.7, talk='eli')
s(T,'ELI','cabin','dusk',"Grandpa looks at the fire for a long time.", a=['eli@560','grandpa@760<'], clock=6.3, fire=.7, gap=P, hush=1)
s(T,'GRANDPA','cabin','dusk',"Hale passed away in October, kiddo.", a=['eli@560!','grandpa@760<'], clock=6.3, fire=.7, talk='grandpa', gap=.6)
s(T,'GRANDPA','cabin','dusk',"Every night since, I walk across the ice and light his lamp.", a=['eli@560!','grandpa@760<'], clock=6.4, fire=.7, talk='grandpa')
s(T,'GRANDPA','lake','dusk',"So whatever walks the lake watches his house. Not ours.", cold=1, lamp=0, walker=1)
s(T,'GRANDPA','cabin','dusk',"Last night, I didn't make it in time.", a=['eli@560','grandpa@760<'], clock=6.4, fire=.7, talk='grandpa', cam='in', gap=.6)
s(T,'ELI','porch','night',"Every night of every winter I spent here, he went out after I fell asleep.", cold=1, a=['grandpa@400>>1100'], sfx=['crunch'])
s(T,'ELI','cabin','dusk',"Forty years of lamps. And I never knew.", a=['eli@560','grandpa@760<'], clock=6.5, fire=.7, cam='in', gap=.5)

# ================= FINAL =================
T = '6:40 AM'
s(T,'ELI','lake','dusk',"Then I look out the window. Across the frozen lake.", cold=1, lamp=0, gap=.5)
s(T,'ELI','lake','dusk',"Mr. Hale's lamp is on.", cold=1, lamp=1, cam='in', gap=1.2, hush=1)
s(T,'ELI','cabin','dusk',"Grandpa is standing right next to me.", a=['eli@560!','grandpa@700!'], clock=6.7, fire=.7, gap=P, hush=1)
nb("Inventory. Four logs burned. One I never touched. Seven rules. And one he forgot to write.", ['7 RULES.','1 LOG I NEVER TOUCHED.'], tag=T, mood='dusk')
nb("When the lamp comes back on, close the shutters anyway.", ['RULE 8:','WHEN THE LAMP COMES BACK ON,','CLOSE THE SHUTTERS ANYWAY.'], tag=T, mood='dusk', gap=.5)
s(T,'ELI','woods','night',"Grandpa left me seven rules for one night.", gap=.5)
s(T,'ELI','lake','night',"It turns out, the longest night of the winter had eight.", lamp=1, cam='in', gap=1.8, hush=1)
s('','ELI','box','night',"Would you have opened the door at three A M? Tell me in the comments.", lines=['WOULD YOU','OPEN THE DOOR?'], head='3:00 AM', gap=1.4)

# ---- auto close-ups for consecutive same-background shots ----
import re as _re
_prev=None; _run=0
for _sh in S:
    _bg=_sh['bg']
    _run = _run+1 if _bg==_prev else 0
    _prev=_bg
    if _bg in ('cabin','porch','lake','woods') and _run % 2 == 1 and 'zoomx' not in _sh['o']:
        _a=_sh['o'].get('a',[])
        _xs=[int(_re.match(r'[a-z]+@(-?\d+)',x).group(1)) for x in _a if _re.match(r'[a-z]+@(-?\d+)',x)]
        _sh['o']['zoomx'] = sum(_xs)/len(_xs) if _xs else ({'cabin':600,'porch':460,'lake':860,'woods':640}[_bg])
        _sh['o']['zoomy'] = 520 if _xs else 420
        _sh['o']['zooms'] = 1.45 if _xs else 1.6
