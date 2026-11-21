S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .12)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def nb(text, lines, **o):
    s(o.pop('tag', ''), 'ELI', 'box', o.pop('mood', 'night'), text, lines=lines, **o)

# ================= HOOK =================
T = 'DAY 1 · 3:10 AM'
s(T,'ELI','whall','night',"Hospital doors do not lock. Ever. If there is a fire, nobody can be trapped inside. Tonight, that is the problem.", a=['eli@640'], dark=.7, cam='in', gap=.15)
s(T,'ELI','ward','night',"You wake up at three in the morning, in room four oh nine. Stitches in your stomach. A needle in your arm. And the call button does nothing.", a=['eli@620'], dark=.55, sfx=['ecg'], gap=.15)
s(T,'ELI','whall','night',"Out in the hallway, somebody is pushing a cart. Squeak. Squeak.", dark=.7, cart=-100, cartv=160, sfx=['squeak'], gap=.15)
s(T,'ELI','ward','night',"The squeak stops right outside your door. Under the door, two feet in white hospital shoes. They do not move. They do not knock. They just stand there.", a=['eli@620!'], dark=.55, feet=2, cam='in', gap=.15)
s(T,'ELI','ward','night',"Then you notice the whiteboard by your bed. Somebody wrote on it while you were asleep.", a=['eli@620!'], dark=.4, board=['DO NOT LEAVE YOUR ROOM.','I WILL COME BACK FOR YOU.','— NURSE J'], gap=.15)
s(T,'ELI','ward','night',"You will not leave this room for thirty days.", a=['eli@620'], dark=.55, board=['DO NOT LEAVE YOUR ROOM.','I WILL COME BACK FOR YOU.','— NURSE J'], cam='in', gap=.3)

# ================= PROBLEM 1: THE DOOR =================
T = 'DAY 1 · THE DOOR'
s(T,'ELI','ward','night',"First problem, the door. There is no lock. Just a handle, and a door that swings in.", a=['eli@860'], dark=.5)
s(T,'ELI','ward','night',"But hospital beds have brakes. Step on the pedal, and a four hundred pound bed will not roll an inch. You push it against the door, and lock every wheel.", a=['eli@300>>760'], dark=.5, bedx=760, sfx=['steps','slam'])
nb("Hospital rule one. The brakes stay on.", ['RULE 1:','THE BRAKES STAY ON.'], tag=T)

# ================= DAY 2 =================
T = 'DAY 2 · 6:00 AM'
s(T,'ELI','ward','dusk',"At six A M, the squeak comes back. The feet stop at your door. And something slides underneath it.", a=['eli@560!'], bedx=760, feet=2, envelope=1, sfx=['squeak'])
nb("An envelope. On the front, two words.", ['DAY 2'], tag=T, head='NURSE J', mood='dusk')
nb("Inside, a packet of crackers. And a note.", ['EAT SLOWLY.','DRINK FROM THE SINK','WHILE IT STILL RUNS.','— J'], tag=T, head='NURSE J', mood='dusk')
s(T,'ELI','ward','dusk',"When you look under the door again, the feet are gone. The squeak goes all the way down the hall.", a=['eli@560'], bedx=760, sfx=['squeak'], cam='in', gap=.3)

# ================= PROBLEM 2: WATER =================
T = 'DAY 4 · WATER'
s(T,'ELI','ward','night',"Second problem, water. On day four, the sink coughs, and stops.", a=['eli@560'], bedx=760, dark=.5, sfx=['drip'])
s('DAY 5 · 6:00 AM','ELI','ward','dusk',"Six A M. The squeak. The envelope.", a=['eli@560'], bedx=760, feet=2, envelope=1, sfx=['squeak'])
nb("Ice machine. Room four twelve. Ice is water.", ['DAY 5','ICE MACHINE. ROOM 412.','ICE IS WATER.','— J'], tag='DAY 5', head='NURSE J', mood='dusk')
s('DAY 5 · 12:00 PM','ELI','whall','day',"Room four twelve is a supply room, three doors down. Inside, an ice machine. Two hundred pounds of ice, melting slowly in the dark. Enough water for weeks.", a=['eli@200>>900'], nums=['409','410','411','412'], sfx=['steps'])
nb("Hospital rule two. Ice is water.", ['RULE 2:','ICE IS WATER.'], tag='DAY 5')

s('DAY 6','ELI','ward','day',"You start counting days on the whiteboard. Little lines, under her message. Ice in the morning. Crackers at noon. Envelope at six. A whole life, in one room.", a=['eli@620'], bedx=760, board=['DO NOT LEAVE YOUR ROOM.','— NURSE J','|||| |'])
s('DAY 6','ELI','ward','night',"At night, you talk to the heart monitor. It is the only thing in the room with a pulse besides you.", a=['eli@620'], bedx=760, dark=.5, sfx=['ecg'], cam='in', gap=.3)
# ================= PROBLEM 3: THE STITCHES =================
T = 'DAY 9 · THE STITCHES'
s(T,'ELI','ward','day',"Third problem. On day nine, your stitches turn red. Hot. Your whole body aches.", a=['eli@560!'], bedx=760, sfx=['ecg'])
nb("The next envelope already knows.", ['DAY 9','RED STITCHES?','NURSES STATION, TOP DRAWER.','FOLLOW THE LABEL.','— J'], tag=T, head='NURSE J', mood='day')
s(T,'ELI','ward','day',"You stare at it for a long time. How did she know?", a=['eli@560'], bedx=760, cam='in')
s('DAY 9 · 12:00 PM','ELI','nstation','day',"The nurses station is at the end of the hall. You go at noon, when the hall is quiet. Top drawer. A bottle of antibiotics, with your name already on the label.", a=['eli@760'], drawer=1)
s('DAY 9 · 12:01 PM','ELI','nstation','day',"Your name. In her handwriting.", a=['eli@760!'], drawer=1, cam='in', gap=.3)
s('DAY 12','ELI','ward','day',"Three days later, the redness is gone.", a=['eli@560'], bedx=760)

# ================= THE NIGHT THE POWER CAME BACK =================
s('DAY 13 · 2:00 AM','ELI','ward','night',"On day thirteen, at two in the morning, the power comes back. For ten seconds.", a=['eli@560!'], bedx=760, dark=.2, sfx=['alarm','ecg'], shake=1)
s('DAY 13 · 2:00 AM','ELI','whall','night',"Every call light. Every heart monitor. Every alarm on the fourth floor, screaming at once. Then darkness again.", z=8, zm=40, zr=[0,900], dark=.3, sfx=['alarm','moans'], shake=1)
s('DAY 13 · 2:01 AM','ELI','ward','night',"And then they are at your door. Not one. Dozens. Pushing.", a=['eli@560!'], bedx=760, dark=.6, feet=6, sfx=['slam','growl','knock'], shake=1)
s('DAY 13 · 2:02 AM','ELI','ward','night',"The door bends. The bed shakes. But the wheels do not move one inch. Rule one. The brakes stay on.", a=['eli@560!'], bedx=760, dark=.6, feet=6, sfx=['slam'], shake=1, cam='in')
s('DAY 13 · 6:00 AM','ELI','ward','dusk',"By morning, they drift away. At six, the squeak comes back, like nothing happened.", a=['eli@560'], bedx=760, feet=2, envelope=1, sfx=['squeak'], gap=.3)
# ================= THE CART =================
T = 'DAY 16 · 6:00 AM'
s(T,'ELI','ward','dusk',"Every morning at six, the squeak. Every morning, an envelope. Day fourteen. Day fifteen. Day sixteen.", a=['eli@560'], bedx=760, feet=2, envelope=1, sfx=['squeak'])
nb("Then one that scares you.", ['DAY 16',"DON'T OPEN THE DOOR",'WHEN THE CART STOPS.','NOT EVEN FOR ME.','— J'], tag=T, head='NURSE J', mood='dusk')
s(T,'ELI','ward','dusk',"You start to wonder why she never knocks. Why she never says your name.", a=['eli@560'], bedx=760, cam='in')
s('DAY 17 · 5:59 AM','ELI','whall','dusk',"On day seventeen, you are awake at six. You look through the little window in your door.", dark=.4, cart=380)
s('DAY 17 · 6:00 AM','ELI','whall','dusk',"A nurse in blue scrubs. Gray skin. Hair in a bun. Pushing a medicine cart, one door at a time, the way she has done every morning for twenty years.", a=['zjune@560'], dark=.4, cart=380, cartv=20, sfx=['squeak','moans'], cam='in')
s('DAY 17 · 6:01 AM','ELI','ward','dusk',"She stops at your door. She reaches into the cart. And she slides an envelope underneath.", a=['eli@560!'], bedx=760, feet=2, envelope=1)
s('DAY 17 · 6:01 AM','ELI','ward','dusk',"She does not know why she does it. She just does.", a=['eli@560!'], bedx=760, cam='in', gap=.4)

s('DAY 19 · 4:00 PM','ELI','ward','day',"On day nineteen, a helicopter flies over the city. Low and loud. You bang on the window until your hands hurt. It does not turn.", a=['eli@300^'], bedx=760, sfx=['engine','knock'])
s('DAY 20 · 6:00 AM','ELI','ward','dusk',"The next envelope has two words.", a=['eli@560'], bedx=760, feet=2, envelope=1, sfx=['squeak'])
nb("Not yet.", ['DAY 20','NOT YET.','— J'], tag='DAY 20', head='NURSE J', mood='dusk', gap=.3)
s('DAY 22','ELI','ward','day',"On day twenty two, you finally do something. You write a note of your own. Who are you? Why don't you knock? You slide it under the door, onto the cart.", a=['eli@760^'], bedx=900, sfx=['whoosh'])
s('DAY 23 · 6:00 AM','ELI','ward','dusk',"The next morning, the envelope is waiting. Like always.", a=['eli@560'], bedx=760, feet=2, envelope=1, sfx=['squeak'])
nb("I know you want to know who I am. Please don't look. Just eat. J.", ['DAY 23','I KNOW YOU WANT TO KNOW','WHO I AM.',"PLEASE DON'T LOOK. JUST EAT."], tag='DAY 23', head='NURSE J', mood='dusk')
s('DAY 23','ELI','ward','dusk',"She answered a question you asked yesterday. In an envelope that was already sealed.", a=['eli@560!'], bedx=760, cam='in', gap=.4)
# ================= PROBLEM 4: THE ROOF =================
T = 'DAY 28 · THE ROOF'
nb("On day twenty eight, the envelope is thicker.", ['DAY 28','HELICOPTER. ROOF.','DAY 30, 7 AM.','TAKE THE STAIRS AT 6,','WHILE I DO MY ROUNDS.'], tag=T, head='NURSE J', mood='day')
s(T,'ELI','whall','day',"Fourth problem. The stairs are at the end of the hall, past every room on the fourth floor. And the fourth floor is full.", a=['eli@1000!'], z=6, zm=0, zr=[80,800], sfx=['moans'])
s(T,'ELI','whall','day',"Patients. Visitors. A man in a hospital gown who has been walking into the same wall since day three.", z=7, zm=5, zr=[60,1100], cam='in')
s(T,'ELI','ward','night',"You cannot get past them. Not alone.", a=['eli@560'], bedx=760, dark=.5, gap=.3)

# ================= DAY 30 =================
s('DAY 30 · 6:00 AM','ELI','ward','dusk',"Day thirty. Six A M. You put on real clothes for the first time in a month. Then you hear it. Squeak.", a=['eli@560'], bedx=760, sfx=['squeak'])
s('DAY 30 · 6:01 AM','ELI','whall','dusk',"The cart rolls past room four oh one. Four oh two. And every one of them in the hall turns, and shuffles after the squeak. Like they always do.", a=['zjune@700'], cart=860, cartv=120, z=6, zm=90, zr=[0,600], sfx=['squeak','moans'])
s('DAY 30 · 6:03 AM','ELI','whall','dusk',"The west hall is empty. The stairwell door is open.", a=['eli@200>>1100'], nums=['413','414','415','416'], sfx=['steps'])
s('DAY 30 · 6:04 AM','ELI','whall','dusk',"Taped to the stairwell door is one last envelope.", a=['eli@1000'], nums=['413','414','415','416'], cam='in')
nb("Day thirty. I wrote all thirty of these on day one.", ['DAY 30','I WROTE ALL THIRTY','ON DAY ONE.'], tag='DAY 30', head='NURSE J', mood='dusk')
nb("I knew I would forget you. I knew I would still do my rounds.", ['I KNEW I WOULD FORGET YOU.','I KNEW I WOULD STILL','DO MY ROUNDS.'], tag='DAY 30', head='NURSE J', mood='dusk')
nb("Go home. June.", ['GO HOME.','— JUNE'], tag='DAY 30', head='NURSE J', mood='dusk', gap=.5)
s('DAY 30 · 7:00 AM','ELI','hroof','dusk',"On the roof, a helicopter is coming down. The pilot is waving. You climb in.", a=['eli@420^'], heli=1, sfx=['engine'])
s('DAY 30 · 7:02 AM','ELI','whall','dusk',"Below you, through the windows of the fourth floor, you can see her. Blue scrubs. A medicine cart. Room four ten. Four eleven. Four twelve.", a=['zjune@600'], cart=760, cartv=30, sfx=['squeak'], cam='in')
s('DAY 30','ELI','ward','dusk',"She wrote thirty envelopes on the day she was bitten. She knew she would forget your name. She knew she would never forget her rounds.", nobed=1, board=['DO NOT LEAVE YOUR ROOM.','I WILL COME BACK FOR YOU.','— NURSE J'], gap=.3)
nb("Inventory. One envelope. Thirty days. Three hospital rules. The brakes stay on. Ice is water. And the new one. Some promises outlive the people who make them.", ['THE BRAKES STAY ON.','ICE IS WATER.','SOME PROMISES','OUTLIVE US.'], tag='DAY 30', mood='dusk')
s('DAY 30','ELI','whall','dusk',"Hospital doors do not lock. She never needed them to.", a=['zjune@640'], cart=820, cartv=12, dark=.4, cam='in', sfx=['squeak'], gap=1.6)
