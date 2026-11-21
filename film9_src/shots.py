S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .1)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def nb(text, lines, **o):
    s(o.pop('tag', ''), 'ELI', 'box', o.pop('mood', 'night'), text, lines=lines, head=o.pop('head', 'NURSE J'), **o)
BRD = ['DO NOT LEAVE YOUR ROOM.','I WILL COME BACK FOR YOU.','— NURSE J']

# ================= HOOK =================
T = 'DAY 1 · 3:10 AM'
s(T,'ELI','whall','night',"Hospital doors do not lock. Ever.", a=['eli@640'], dark=.7, cam='in', gap=.1)
s(T,'ELI','stair','night',"If there is a fire, nobody can be trapped inside. Tonight, that is the problem.", dark=.5, gap=.15)
s(T,'ELI','ward','night',"You wake up at three in the morning, in room four oh nine. Stitches in your stomach.", a=['eli@620'], dark=.55, sfx=['ecg'], gap=.1)
s(T,'ELI','winst','night',"Outside, the city is dark. And the street is full of people who are not moving right.", n=60, sfx=['moans'], gap=.1)
s(T,'ELI','whall','night',"Out in the hallway, somebody is pushing a cart. Squeak. Squeak.", dark=.7, cart=-100, cartv=160, sfx=['squeak'], gap=.1)
s(T,'ELI','ward','night',"The squeak stops outside your door. Under it, two feet in white shoes. They do not knock.", a=['eli@620!'], dark=.55, feet=2, cam='in', gap=.1)
s(T,'ELI','dwin','night',"Through the little window, you can only see the empty hall. And the cart.", dark=1, cart=1, gap=.1)
s(T,'ELI','ward','night',"Then you notice the whiteboard. Somebody wrote on it while you were asleep.", a=['eli@620!'], dark=.4, board=BRD, gap=.1)
s(T,'ELI','box','night',"You will not leave this room for thirty days.", lines=['30 DAYS.','ROOM 409.'], head='MERCY GENERAL', cam='in', gap=.25)

# ================= PROBLEM 1: THE DOOR =================
T = 'DAY 1 · THE DOOR'
s(T,'ELI','dwin','night',"First problem, the door. There is no lock. Just a handle.", dark=1)
s(T,'ELI','ward','night',"But hospital beds have brakes. Four hundred pounds that will not roll an inch.", a=['eli@300>>760'], dark=.5, bedx=760, sfx=['steps'])
s(T,'ELI','ward','night',"You push the bed against the door. You lock every wheel.", a=['eli@560'], dark=.5, bedx=860, sfx=['slam'], cam='in')
nb("Hospital rule one. The brakes stay on.", ['RULE 1:','THE BRAKES STAY ON.'], tag=T, head='ROOM 409')

# ================= DAY 2 =================
T = 'DAY 2 · 6:00 AM'
s(T,'ELI','whall','dusk',"At six A M, the squeak comes back.", cart=-60, cartv=140, sfx=['squeak'])
s(T,'ELI','ward','dusk',"The feet stop at your door. And something slides underneath it.", a=['eli@560!'], bedx=760, feet=2, envelope=1)
nb("An envelope. On the front, two words.", ['DAY 2'], tag=T, mood='dusk')
nb("Inside, a packet of crackers, and a note.", ['EAT SLOWLY.','DRINK FROM THE SINK','WHILE IT STILL RUNS.','— J'], tag=T, mood='dusk')
s(T,'ELI','whall','dusk',"When you look again, the feet are gone. The squeak goes all the way down the hall.", cart=500, cartv=160, sfx=['squeak'], gap=.25)

# ================= DAY 6 =================
s('DAY 6','ELI','ward','day',"You count the days on the whiteboard. Little lines, under her message.", a=['eli@620'], bedx=760, board=['DO NOT LEAVE YOUR ROOM.','— NURSE J','|||| |'])
s('DAY 6','ELI','winst','day',"Every day, the street below gets a little more crowded.", n=90, sfx=['moans'])
s('DAY 6','ELI','ward','night',"At night, you talk to the heart monitor. It is the only thing in here with a pulse besides you.", a=['eli@620'], bedx=760, dark=.5, sfx=['ecg'], cam='in', gap=.25)

# ================= PROBLEM 2: WATER =================
T = 'DAY 4 · WATER'
s('DAY 8 · WATER','ELI','ward','night',"Second problem, water. On day eight, the sink coughs, and stops.", a=['eli@560'], bedx=760, dark=.5, sfx=['drip'])
nb("Six A M. The squeak. The envelope.", ['DAY 8','ICE MACHINE. ROOM 412.','ICE IS WATER.','— J'], tag='DAY 8', mood='dusk')
s('DAY 8 · 12:00 PM','ELI','whall','day',"Room four twelve is three doors down. You go at noon, when the hall is quiet.", a=['eli@200>>900'], nums=['409','410','411','412'], sfx=['steps'])
s('DAY 8 · 12:01 PM','ELI','supply','day',"Inside, an ice machine. Two hundred pounds of ice, melting slowly in the dark.", a=['eli@360'], drip=1)
s('DAY 8 · 12:02 PM','ELI','supply','day',"Enough water for weeks. You fill two buckets, and run.", a=['eli@400>>1100'], drip=1, sfx=['steps'], cam='in')
nb("Hospital rule two. Ice is water.", ['RULE 2:','ICE IS WATER.'], tag='DAY 8', head='ROOM 409')

# ================= PROBLEM 3: THE STITCHES =================
T = 'DAY 9 · THE STITCHES'
s(T,'ELI','ward','day',"Third problem. On day nine, your stitches turn red. Hot. Everything aches.", a=['eli@560!'], bedx=760, sfx=['ecg'])
nb("The next envelope already knows.", ['DAY 9','RED STITCHES?','NURSES STATION, TOP DRAWER.','FOLLOW THE LABEL.'], tag=T, mood='day')
s('DAY 9 · 12:00 PM','ELI','whall','day',"The nurses station is at the end of the hall. Every step pulls at your stitches.", a=['eli@200>>800'], nums=['405','406','407','408'], sfx=['steps'])
s('DAY 9 · 12:01 PM','ELI','nstation','day',"Top drawer. A bottle of antibiotics, with your name already on the label.", a=['eli@760'], drawer=1)
s('DAY 9 · 12:01 PM','ELI','nstation','day',"Your name. In her handwriting.", a=['eli@760!'], drawer=1, cam='in', gap=.25)
s('DAY 12','ELI','ward','day',"Three days later, the redness is gone.", a=['eli@560'], bedx=760)

# ================= THE POWER =================
s('DAY 13 · 2:00 AM','ELI','ward','night',"On day thirteen, at two in the morning, the power comes back. For ten seconds.", a=['eli@560!'], bedx=760, dark=.2, sfx=['alarm','ecg'], shake=1)
s('DAY 13 · 2:00 AM','ELI','nstation','night',"Every call light. Every monitor. Every alarm on the floor, screaming at once.", dark=.2, sfx=['alarm'], shake=1)
s('DAY 13 · 2:00 AM','ELI','winst','night',"Down in the street, a thousand heads turn toward the hospital.", n=110, turn=1, beam=1, sfx=['moans'], cam='in')
s('DAY 13 · 2:01 AM','ELI','whall','night',"Then they are at your door. Not one. Dozens.", z=8, zm=40, zr=[0,900], dark=.4, sfx=['growl'], shake=1)
s('DAY 13 · 2:01 AM','ELI','ward','night',"The door bends. The bed shakes. The wheels do not move.", a=['eli@560!'], bedx=860, dark=.6, feet=6, sfx=['slam','knock'], shake=1)
s('DAY 13 · 2:02 AM','ELI','box','night',"Rule one. The brakes stay on.", lines=['THE BRAKES','STAY ON.'], head='ROOM 409', gap=.25)

# ================= THE CART =================
s('DAY 16 · 6:00 AM','ELI','ward','dusk',"Every morning at six, the squeak. Every morning, an envelope.", a=['eli@560'], bedx=760, feet=2, envelope=1, sfx=['squeak'])
nb("Then one that scares you.", ['DAY 16',"DON'T OPEN THE DOOR",'WHEN THE CART STOPS.','NOT EVEN FOR ME.'], tag='DAY 16', mood='dusk')
s('DAY 16','ELI','ward','dusk',"Why does she never knock? Why does she never say your name?", a=['eli@560'], bedx=760, cam='in')
s('DAY 17 · 5:59 AM','ELI','ward','dusk',"On day seventeen, you are awake at six. You climb onto the bed, to the little window.", a=['eli@760^'], bedx=860)
s('DAY 17 · 6:00 AM','ELI','dwin','dusk',"A nurse in blue scrubs. Gray skin. Hair in a bun.", who='zjune', cart=1, sfx=['squeak','sting'], cam='in')
s('DAY 17 · 6:00 AM','ELI','whall','dusk',"Pushing a medicine cart, one door at a time, the way she has every morning for twenty years.", a=['zjune@560'], cart=380, cartv=20, sfx=['squeak','moans'])
s('DAY 17 · 6:01 AM','ELI','ward','dusk',"She stops at your door. She reaches into the cart. And an envelope slides underneath.", a=['eli@560!'], bedx=760, feet=2, envelope=1)
s('DAY 17 · 6:01 AM','ELI','dwin','dusk',"She does not know why she does it. She just does.", who='zjune', cart=1, gap=.3)

# ================= THE HELICOPTER =================
s('DAY 19 · 4:00 PM','ELI','winst','day',"On day nineteen, a helicopter flies over the city. Low and loud.", n=80, sfx=['engine'])
s('DAY 19 · 4:00 PM','ELI','ward','day',"You bang on the window until your hands hurt. It does not turn.", a=['eli@300^'], bedx=760, sfx=['knock'], shake=1)
nb("The next envelope has two words.", ['DAY 20','NOT YET.'], tag='DAY 20', mood='dusk', gap=.25)

# ================= THE REPLY =================
s('DAY 22','ELI','ward','day',"On day twenty two, you write back. Who are you? Why don't you knock?", a=['eli@560'], bedx=760, board=['WHO ARE YOU?',"WHY DON'T YOU KNOCK?",'— 409'])
s('DAY 22','ELI','dwin','day',"You slide it under the door, onto the cart.", cart=1, sfx=['whoosh'])
nb("The next morning, the envelope is waiting.", ['DAY 23','I KNOW YOU WANT TO KNOW','WHO I AM.',"PLEASE DON'T LOOK."], tag='DAY 23', mood='dusk')
s('DAY 23','ELI','ward','dusk',"She answered your question. In an envelope that was already sealed.", a=['eli@560!'], bedx=760, cam='in', gap=.3)

# ================= PROBLEM 4: THE ROOF =================
nb("On day twenty eight, the envelope is thicker.", ['DAY 28','HELICOPTER. ROOF.','DAY 30, 7 AM.','TAKE THE STAIRS AT 6.'], tag='DAY 28', mood='day')
s('DAY 28 · THE ROOF','ELI','stair','day',"Fourth problem. The stairs are at the end of the hall.", sfx=['steps'])
s('DAY 28 · THE ROOF','ELI','whall','day',"And the hall is full. Patients. Visitors. A man who has walked into the same wall since day three.", a=['eli@1000!'], z=7, zm=5, zr=[60,860], sfx=['moans'])
s('DAY 28','ELI','ward','night',"You cannot get past them. Not alone.", a=['eli@560'], bedx=760, dark=.5, gap=.3)

# ================= DAY 30 =================
s('DAY 30 · 6:00 AM','ELI','ward','dusk',"Day thirty. Six A M. Real clothes, for the first time in a month.", a=['eli@560'], bedx=760)
s('DAY 30 · 6:00 AM','ELI','dwin','dusk',"Then you hear it. Squeak.", who='zjune', cart=1, sfx=['squeak'])
s('DAY 30 · 6:01 AM','ELI','whall','dusk',"Every one of them in the hall turns toward the squeak.", a=['zjune@700'], cart=860, cartv=120, z=6, zm=90, zr=[0,600], sfx=['squeak','moans'])
s('DAY 30 · 6:02 AM','ELI','dwin','dusk',"And they shuffle after her. Like they always do.", who='zpax', dark=1)
s('DAY 30 · 6:03 AM','ELI','whall','dusk',"The west hall is empty.", a=['eli@200>>1100'], nums=['413','414','415','416'], sfx=['steps'])
s('DAY 30 · 6:04 AM','ELI','stair','dusk',"Taped to the stairwell door is one last envelope.", a=['eli@300'])
nb("I wrote all thirty of these on day one.", ['DAY 30','I WROTE ALL THIRTY','ON DAY ONE.'], tag='DAY 30', mood='dusk')
nb("I knew I would forget you. I knew I would still do my rounds.", ['I KNEW I WOULD FORGET YOU.','I KNEW I WOULD STILL','DO MY ROUNDS.'], tag='DAY 30', mood='dusk')
nb("Go home. June.", ['GO HOME.','— JUNE'], tag='DAY 30', mood='dusk', gap=.4)
s('DAY 30 · 6:58 AM','ELI','stair','dusk',"Nine floors. You do not stop once.", a=['eli@300>>1000'], roofup=1, sfx=['steps'])
s('DAY 30 · 7:00 AM','ELI','hroof','dusk',"On the roof, a helicopter is coming down. The pilot is waving.", a=['eli@420^'], heli=1, sfx=['engine'])
s('DAY 30 · 7:02 AM','ELI','winst','dusk',"From the air, the whole city is gray and still.", n=60, roofview=1, cam='out')
s('DAY 30 · 7:02 AM','ELI','whall','dusk',"And through the fourth floor windows, you can see her.", a=['zjune@600'], cart=760, cartv=30, sfx=['squeak'])
s('DAY 30 · 7:02 AM','ELI','dwin','dusk',"Blue scrubs. A medicine cart. Room four ten. Four eleven.", who='zjune', cart=1)
s('DAY 30','ELI','ward','dusk',"She wrote thirty envelopes on the day she was bitten.", nobed=1, board=BRD)
s('DAY 30','ELI','dwin','dusk',"She knew she would forget your name. She knew she would never forget her rounds.", who='zjune', cart=1, gap=.3)
nb("Some promises outlive the people who make them.", ['THE BRAKES STAY ON.','ICE IS WATER.','SOME PROMISES','OUTLIVE US.'], tag='DAY 30', mood='dusk', head='ROOM 409')
s('DAY 30','ELI','whall','dusk',"Hospital doors do not lock. She never needed them to.", a=['zjune@640'], cart=820, cartv=12, dark=.4, cam='in', sfx=['squeak'], gap=1.6)
