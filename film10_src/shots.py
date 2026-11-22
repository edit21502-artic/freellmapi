S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .1)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def nb(text, lines, **o):
    s(o.pop('tag', ''), 'ELI', 'box', o.pop('mood', 'night'), text, lines=lines, head=o.pop('head', 'APT 6A'), **o)
P = .85  # dramatic pause

# ================= HOOK (mystery by 0:20) =================
T = 'DAY 1 · 3:12 AM'
s(T,'ELI','elev','night',"The elevator in your building has been broken for two years.", dark=.5, gap=.25)
s(T,'ELI','elev','night',"Tonight, at three twelve in the morning, it dings.", dark=.4, ding=1, sfx=['ding'], cam='in', gap=P, hush=1)
s(T,'ELI','elev','night',"Sixth floor. Your floor.", dark=.4, ding=1, floor='6', gap=.6)
s(T,'ELI','winst','night',"Your phone has no signal. And the street below is full of people. Standing perfectly still. Looking up.", n=80, sfx=['moans'], gap=.3)
s(T,'ELI','apt','night',"Then, through the wall, someone knocks. Three times. Slow.", a=['eli@560!'], dark=.55, sfx=['knock'], pre=.2, gap=P, hush=1)
s(T,'ELI','apt','night',"It is the knock your neighbor, Mr. Ortiz, used every time your music was too loud.", a=['eli@760'], dark=.55, gap=.3)
s(T,'ELI','hall','night',"Mr. Ortiz moved out in March.", a=['eli@330!'], dark=.5, cam='in', gap=1.0, hush=1)
nb("You will not leave this apartment for thirty days.", ['30 DAYS.','APARTMENT 6A.'], tag=T, gap=.5)

# ================= PROBLEM 1: THE DOOR =================
T = 'DAY 1 · THE DOOR'
s(T,'ELI','hall','night',"First problem, the door. It swings into your apartment. Whatever is out there only has to lean.", a=['eli@330'], dark=.5, feet=2)
s(T,'ELI','apt','night',"So you drag the couch. Then the bookshelf. Then the fridge, one inch at a time.", a=['eli@300>>900'], dark=.45, sfx=['steps','slam'])
nb("Apartment rule one. The chain stays on.", ['RULE 1:','THE CHAIN STAYS ON.'], tag=T)

# ================= THE WALL =================
T = 'DAY 2'
s(T,'ELI','apt','day',"On day two, you knock back. Once.", a=['eli@760^'], sfx=['knock'], gap=.4)
s(T,'ELI','apt','day',"Silence.", a=['eli@760'], cam='in', gap=1.0, hush=1)
s(T,'ELI','apt','day',"Then, two knocks. Then nothing.", a=['eli@760!'], sfx=['knock'], pre=.3, gap=.6)
nb("So you make a code. One knock means yes. Two knocks mean no.", ['1 KNOCK = YES','2 KNOCKS = NO'], tag=T, mood='day')
s(T,'ELI','apt','day',"Are you alive? One knock. Are you hurt? Two knocks.", a=['eli@760'], sfx=['knock'])
s(T,'ELI','apt','day',"Are you alone?", a=['eli@760'], gap=.8, hush=1)
s(T,'ELI','apt','day',"One knock.", a=['eli@760!'], sfx=['knock'], cam='in', gap=.8)

# ================= THE ELEVATOR =================
T = 'DAY 3 · 3:12 AM'
s(T,'ELI','elev','night',"At three twelve the next night, the elevator dings again.", dark=.4, ding=1, sfx=['ding'], gap=.5)
s(T,'ELI','peep','night',"Through the peephole, the hallway is full of them. Ten. Maybe twelve.", who='zpax', close=1, sfx=['moans'])
s(T,'ELI','elev','night',"And when the doors open, they shuffle inside. All of them.", z=6, zm=-25, zr=[700,1200], open=1, dark=.3)
s(T,'ELI','hall','night',"The doors close. The elevator goes down. The hallway is empty.", a=['eli@330'], dark=.5, cam='in', gap=.6)
s(T,'ELI','apt','night',"Every night at three twelve, the elevator comes. Every night, it takes them away.", a=['eli@560'], dark=.5)
nb("Somebody in this building is calling it.", ['WHO IS CALLING','THE ELEVATOR?'], tag=T, gap=.5)

# ================= PROBLEM 2: WATER =================
T = 'DAY 5 · WATER'
s(T,'ELI','apt','day',"Second problem, water. On day five, the taps cough, and stop.", a=['eli@560'], sfx=['drip'])
s(T,'ELI','bath','day',"But the tank on the back of your toilet holds about a gallon and a half of clean water.", a=['eli@560'], tank=1)
s(T,'ELI','bath','day',"And the water heater in your closet holds forty more.", a=['eli@700'], cam='in')
nb("Apartment rule two. Check the tanks.", ['RULE 2:','CHECK THE TANKS.'], tag=T, mood='day')

# ================= PROBLEM 3: FOOD =================
T = 'DAY 9 · FOOD'
s(T,'ELI','apt','day',"Third problem, food. By day nine, you are eating ketchup packets.", a=['eli@560s'], floor=1)
s('DAY 9 · 11:40 PM','ELI','bath','night',"That night, something scrapes inside the bathroom vent.", a=['eli@700!'], dark=.4, sfx=['scratch'], gap=.6, hush=1)
s('DAY 9 · 11:41 PM','ELI','bath','night',"A string. With a plastic bag tied to the end.", a=['eli@700!'], dark=.35, vent=1, cam='in')
nb("Inside, two granola bars. And a drawing, in crayon.", ['I AM LENA.','I AM 8.','THIS IS MY CAT.'], tag='DAY 9', head='6B')
s('DAY 9','ELI','apt','night',"Your neighbor is eight years old. And she has been feeding you.", a=['eli@560'], dark=.5, cam='in', gap=P, hush=1)
s('DAY 10','ELI','bath','day',"You send back the only thing you have left. A chocolate bar you were saving for day thirty.", a=['eli@700^'], vent=2)

# ================= SILENCE =================
s('DAY 14','ELI','apt','night',"Every night, you knock goodnight. One knock. She knocks back. One knock.", a=['eli@760^'], dark=.55, sfx=['knock'])
s('DAY 18','ELI','apt','night',"On day eighteen, she does not knock back.", a=['eli@760'], dark=.6, gap=1.0, hush=1)
s('DAY 19','ELI','apt','day',"Day nineteen. Nothing.", a=['eli@560s'], floor=1, cam='in', gap=.7, hush=1)

# ================= PROBLEM 4: THE HALL =================
T = 'DAY 19 · THE HALL'
s(T,'ELI','elev','night',"Fourth problem. Six B is twelve steps away. And the hall is only empty for one minute a night.", dark=.4, z=4, zm=0, zr=[200,1100])
s('DAY 19 · 3:12 AM','ELI','elev','night',"Three twelve. Ding.", dark=.4, ding=1, sfx=['ding'], gap=.6, hush=1)
s('DAY 19 · 3:12 AM','ELI','elev','night',"They shuffle in. The doors close. You have sixty seconds.", open=1, z=5, zm=-30, zr=[700,1150], dark=.3)
s('DAY 19 · 3:13 AM','ELI','hall','night',"The door to six B is unlocked. It was always unlocked.", a=['eli@200>>800'], dark=.5, sfx=['steps'])
s('DAY 19 · 3:13 AM','ELI','apt','night',"Lena is on the floor, by the vent. Burning hot. A fever.", a=['eli@780!','lena@1010_'], dark=.4, cam='in')
s('DAY 19','ELI','apt','night',"Kids with a fever need water, and rest, and someone who stays. So you stay.", a=['eli@860s','lena@1040_'], dark=.4)
nb("Apartment rule three. Nobody is alone.", ['RULE 3:','NOBODY IS ALONE.'], tag='DAY 22', gap=.4)

# ================= THE NOTE =================
T = 'DAY 28 · 1:00 PM'
s(T,'ELI','elev','day',"On day twenty eight, the elevator dings in the middle of the day.", ding=1, sfx=['ding'])
s(T,'ELI','elev','day',"The doors open. Nobody inside. Just a note on the floor.", open=1, note=1, cam='in', gap=.5, hush=1)
nb("Day thirty. Three twelve. Take it down to the garage. The van has keys. I will hold them.", ['DAY 30. 3:12.','TAKE IT TO THE GARAGE.','THE VAN HAS KEYS.','I WILL HOLD THEM.'], tag=T, head='ELEVATOR', mood='day')
s(T,'ELI','apt','day',"Lena reads it, and starts to cry. It is her grandfather's handwriting.", a=['eli@760','lena@560'], cam='in', gap=P, hush=1)
s(T,'ELI','apt','day',"Mr. Okafor. The building super. He lives in the basement.", a=['eli@760','lena@560'])

# ================= DAY 30 =================
s('DAY 30 · 3:11 AM','ELI','hall','night',"Day thirty. Three eleven. You stand at the door, with Lena holding your hand.", a=['eli@420','lena@300'], dark=.5)
s('DAY 30 · 3:12 AM','ELI','elev','night',"Ding.", ding=1, sfx=['ding'], dark=.3, gap=.8, hush=1)
s('DAY 30 · 3:12 AM','ELI','elev','night',"For the first time, you step inside. The button for the garage is already lit.", inside=1, btn=1, a=['eli@560','lena@700'], cam='in')
s('DAY 30 · 3:13 AM','ELI','garage','night',"The doors open on the garage. A van, engine running.", a=['eli@560','lena@450'], sfx=['engine'])
s('DAY 30 · 3:13 AM','ELI','garage','night',"And on the left, a cage. Full of them. Every one that rode the elevator down.", crowd=7, sfx=['moans','rattle'], cam='in')
s('DAY 30 · 3:14 AM','ELI','garage','night',"In front of the cage, a man in gray overalls. Holding the gate shut with both hands.", crowd=7, a=['zokafor@640<^'], gap=.4)
s('DAY 30 · 3:14 AM','ELI','garage','night',"Gray skin. One sleeve torn. He was bitten on day one.", crowd=7, a=['zokafor@640<^'], cam='in', gap=P, hush=1)
s('DAY 30 · 3:14 AM','ELI','elev','night',"Every night for thirty days, he called the elevator up. Let them in. Brought them down. And locked them in here.", open=1, z=5, zm=-30, zr=[700,1150], dark=.3)
s('DAY 30 · 3:14 AM','ELI','hall','night',"One floor at a time. So his granddaughter would have one empty hallway.", a=['lena@640'], dark=.5, gap=.5)
s('DAY 30 · 3:15 AM','ELI','garage','night',"He does not say anything. He just looks at Lena. And holds the gate.", crowd=7, a=['zokafor@640<^','lena@1000<'], gap=1.0, hush=1)
s('DAY 30 · 3:16 AM','ELI','garage','night',"You drive out at three sixteen in the morning. Lena does not look back. You do.", crowd=7, drive=1, sfx=['engine'], gap=.5)
nb("Inventory. One crayon drawing. One cat. Three apartment rules.", ['THE CHAIN STAYS ON.','CHECK THE TANKS.','NOBODY IS ALONE.'], tag='DAY 30', mood='dusk')
s('DAY 30','ELI','elev','dusk',"The elevator in your building was broken for two years. He fixed it on the first night.", ding=1, sfx=['ding'], cam='in', gap=1.8, hush=1)
