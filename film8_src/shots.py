S = []
def s(tag, sp, bg, mood, text, **o):
    o.setdefault('pre', .12)
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))
def nb(text, lines, **o):  # notepad
    s(o.pop('tag', ''), 'ELI', 'box', o.pop('mood', 'night'), text, lines=lines, **o)

# ================= HOOK (one continuous breath) =================
T = 'DAY 1 · 1:40 AM'
s(T,'ELI','security','night',"Airport security has one job. Keep everything dangerous on the other side.", a=['eli@980'], z=6, zm=12, zr=[60,460], cam='in', gap=.15)
s(T,'ELI','security','night',"Tonight, it works.", a=['eli@980!'], z=7, zm=18, zr=[60,480], shake=1, sfx=['glass'], gap=.25)
s(T,'ELI','gate','night',"It is one forty in the morning, gate B twelve. Your flight home was cancelled four hours ago, so you fell asleep across three chairs, with your shoes as a pillow.", a=['eli@520_'], gap=.15)
s(T,'ELI','terminal','night',"You wake up because the airport is too quiet. No announcements. No floor cleaners. Just one sound, far away. Glass.", a=['eli@520!'], sfx=['glass'], cam='in', gap=.15)
s(T,'ELI','security','night',"At the checkpoint, the glass wall is covered in hands. Hundreds of people on the other side, pressing, and staring at you.", a=['eli@1000!'], z=9, zm=10, zr=[40,500], sfx=['moans'], gap=.15)
s(T,'PA','terminal','night',"Attention passengers. Please remain airside. Do not go through security.", a=['eli@520!'], pa=1, vfx='radio', gap=.15)
s(T,'ELI','board','night',"Every flight on the board says the same thing. Cancelled. You will not leave this terminal for thirty days.", cam='in', gap=.3)

# ================= PROBLEM 1: THE GLASS =================
T = 'DAY 1 · THE GLASS'
s(T,'ELI','security','night',"First problem, the glass. It is built to stop one person from walking through. Not three hundred people leaning on it all night.", a=['eli@1000'], z=9, zm=8, zr=[40,500])
s(T,'ELI','terminal','night',"So you build a second wall. Airport benches come bolted together in rows of five. You drag every row from gate B one to gate B ten.", a=['eli@200>>1000'], sfx=['steps','slam'])
s(T,'ELI','security','night',"Then the gray bins. Then the X ray belt, unplugged and pushed sideways. By sunrise, the checkpoint looks like a tiny fortress.", a=['eli@1000'], z=8, zm=6, zr=[40,500], sfx=['slam'])
nb("Airport rule one. Stay airside.", ['RULE 1:','STAY AIRSIDE.'], tag=T)

# ================= THE BOARD =================
T = 'DAY 2 · 8:00 AM'
s(T,'ELI','terminal','day',"On the second morning, you check the departure board out of habit.", a=['eli@520'])
s(T,'ELI','board','day',"Every line says cancelled. Except one. Gate B twelve. Your gate. And next to it, one word.", msg={'B12':'STAY.'}, cam='in', sfx=['beep'])
s(T,'ELI','terminal','day',"Somebody in this airport is alive. And they know exactly where you are.", a=['eli@520!'], gap=.3)

# ================= PROBLEM 2: WATER =================
T = 'DAY 4 · WATER'
s(T,'ELI','terminal','night',"Second problem, water. On day four, the bathroom taps cough, and stop. No power, no pumps.", a=['eli@520'], sfx=['drip'])
s(T,'ELI','board','day',"The next morning, the board has changed.", msg={'B12':'THE PLANE HAS WATER'}, sfx=['beep'])
s(T,'ELI','gate','day',"There is a plane parked at your gate. It has been there the whole time. And the jet bridge door is unlocked.", a=['eli@520'], cam='in')
s(T,'ELI','cabin','night',"Inside, it is dark, and cold, and perfect. Rows of empty seats. Blankets in every overhead bin.", a=['eli@300>620'])
s(T,'ELI','galley','night',"A plane this size carries about fifty gallons of drinking water, in a tank under the floor. One person needs about a gallon a day. That is fifty days.", a=['eli@620'])
s(T,'ELI','galley','night',"And the snack carts. Pretzels. Cookies. Two hundred tiny bottles of orange juice. You eat breakfast in first class, every single day.", a=['eli@620'], cart=250, cam='in')
nb("Airport rule two. The plane is home.", ['RULE 2:','THE PLANE IS HOME.'], tag=T)

s('DAY 6','ELI','terminal','night',"On day six, you go shopping. Duty free has four hundred bottles of perfume, ninety chocolate bars the size of your arm, and one very soft bathrobe. You take the bathrobe.", a=['eli@300>>760'], sfx=['steps'])
s('DAY 6','ELI','cabin','night',"For the first time in a week, you sleep. Row one. Seat A. In a bathrobe.", a=['eli@620s'], cam='in', gap=.3)
# ================= PROBLEM 3: THE CRACK =================
T = 'DAY 9 · THE CRACK'
s(T,'ELI','security','night',"Third problem. On day nine, a crack runs across the glass, from the floor to the height of your head.", a=['eli@1000!'], z=9, zm=10, zr=[40,500], sfx=['glass'], shake=1)
s(T,'ELI','security','night',"They feel it. They push harder.", a=['eli@1000!'], z=10, zm=16, zr=[40,520], shake=1, sfx=['growl'], cam='in')
s(T,'ELI','board','day',"That morning, the board says two words.", msg={'B12':'2 AM. WATCH.'}, sfx=['beep'])
s('DAY 9 · 2:00 AM','ELI','carousel','night',"At two A M exactly, down in baggage claim, every carousel starts at once. Clunk. Clunk. Clunk. Somebody turned them on.", riders=0, sfx=['rattle'])
s('DAY 9 · 2:01 AM','ELI','security','night',"And three hundred heads turn toward the noise. They drift away from the glass, down the stairs, to watch suitcases go around in circles.", a=['eli@1000'], z=9, zm=-60, zr=[200,600], sfx=['moans'])
s('DAY 9 · 2:02 AM','ELI','carousel','night',"Every night at two, the carousels start. Every night, the crowd follows. And every night, you fix the glass.", riders=1, cam='in')
nb("Airport rule three. Everything happens at two.", ['RULE 3:','EVERYTHING','HAPPENS AT 2.'], tag=T)

# ================= THE MAN AT THE GLASS =================
T = 'DAY 12 · 4:10 PM'
s(T,'ELI','security','day',"On day twelve, someone at the glass is knocking. Not pressing. Knocking. A man in a hoodie. Alive.", a=['eli@1000!','pax@560'], z=6, zm=6, zr=[40,420], sfx=['knock'])
s(T,'STRANGER','security','day',"Please. Please, I can see you. Open the gate. I'm not one of them.", a=['eli@1000!','pax@560^'], z=6, zm=6, zr=[40,420], talk='pax')
s(T,'ELI','security','day',"Your hand is on the X ray belt. You are about to push it.", a=['eli@940'], z=6, zm=6, zr=[40,420], cam='in')
s(T,'ELI','board','day',"Then, behind you, the board clicks.", msg={'B12':'LOOK AT HIS ARM.'}, sfx=['beep'])
s(T,'ELI','security','day',"His sleeve is pulled down. Too far down. And under it, a bandage, soaked through.", a=['eli@1000!','pax@560'], z=6, zm=6, zr=[40,420], cam='in')
s('DAY 13 · 8:00 AM','ELI','security','day',"You do not open the gate. The next morning, he is still at the glass. He is not knocking anymore.", a=['eli@1000','zpax@560'], z=7, zm=6, zr=[40,420], sfx=['moans'], gap=.4)
# ================= WHO =================
T = 'DAY 14'
s(T,'ELI','gate','day',"You start writing back. You tape notes to the window at gate B twelve. Who are you? Where are you?", a=['eli@520^'])
s(T,'ELI','board','day',"The board answers.", msg={'B12':"OPS. DON'T LOOK FOR ME."}, sfx=['beep'])
s(T,'ELI','terminal','day',"Operations is the room that runs the board, the carousels, and the gates. It is behind gate B twenty.", a=['eli@520'])
s('DAY 16','ELI','terminal','night',"You walk to B twenty, once. The door is shut, and taped from the inside. Somebody has written on it in marker.", a=['eli@300>>760'], sfx=['steps'], cam='in')
nb("Do not open. Not even for me.", ['DO NOT OPEN.','NOT EVEN FOR ME.'], tag='DAY 16', head='GATE B20')
s('DAY 16','ELI','cabin','night',"You go back to your plane. You do not open it.", a=['eli@620s'])
s('DAY 19','ELI','board','day',"Some mornings, the board is just rude.", msg={'B12':'YOU SNORE.'}, sfx=['beep'])
s('DAY 22','ELI','board','day',"Some mornings, it is kind.", msg={'B12':'HAPPY BIRTHDAY, B12.'}, sfx=['beep'])
s('DAY 22','ELI','galley','night',"You never told anyone it was your birthday. You eat a pretzel with a candle in it.", a=['eli@620'], cam='in', gap=.3)

s('DAY 24 · 3:00 AM','ELI','cabin','night',"On day twenty four, at three in the morning, something thumps under the floor of your plane. The cargo hold.", a=['eli@620s!'], sfx=['knock'], shake=1)
s('DAY 24 · 3:01 AM','ELI','cabin','night',"Thump. Thump. A baggage handler, sealed in with the suitcases since day one. Still working his shift.", a=['eli@620!'], sfx=['knock','growl'], cam='in')
s('DAY 24 · 8:00 AM','ELI','board','day',"The board has already seen it.", msg={'B12':"HOLD LOCKS OUTSIDE. HE CAN'T."}, sfx=['beep'])
s('DAY 24','ELI','cabin','night',"Cargo holds lock from the outside. From in there, nothing can open them. You sleep with your feet on top of him for six more nights.", a=['eli@620s'], gap=.3)
# ================= PROBLEM 4: THE RUNWAY =================
T = 'DAY 26 · THE RUNWAY'
s(T,'ELI','board','day',"On day twenty six, the board says the thing you have waited a month to read.", msg={'B12':'DAY 30. 6 AM. RUNWAY 2.'}, sfx=['beep'])
s(T,'ELI','winview','day',"A cargo plane. Landing on runway two, for ninety seconds. Anyone standing on the runway gets on.", view='airport')
s(T,'ELI','tarmac','day',"Fourth problem. Runway two is one mile away. Across open concrete. And the tarmac is full of them. Ground crew. Still in their vests.", a=['eli@200!'], z=9, zm=-10, zr=[500,1500], zk='crew', sfx=['moans'])
s('DAY 28','ELI','board','day',"Two days later, one more line.", msg={'B12':"5:50. I'LL MAKE NOISE."}, sfx=['beep'])
s('DAY 28','ELI','cabin','night',"You do not like that one.", a=['eli@620s!'], cam='in', gap=.3)

# ================= DAY 30 =================
s('DAY 30 · 5:40 AM','ELI','gate','dusk',"Day thirty. Five forty. You put on your shoes for the first time in a month.", a=['eli@520'])
s('DAY 30 · 5:50 AM','ELI','terminal','dusk',"At five fifty, everything starts. Every carousel. Every gate alarm. Every speaker in the building.", a=['eli@520!'], sfx=['alarm','rattle'], shake=1)
s('DAY 30 · 5:50 AM','PA','terminal','dusk',"Final boarding call. Final boarding call. Final boarding call.", a=['eli@520!'], pa=1, vfx='radio')
s('DAY 30 · 5:51 AM','ELI','tarmac','dusk',"And every one of them on the tarmac turns toward the terminal. Away from the runway.", a=['eli@200'], z=10, zm=-90, zr=[500,1500], zk='crew', sfx=['moans'])
s('DAY 30 · 5:52 AM','ELI','tarmac','dusk',"You run. One whole mile. You have never run a mile in your life.", a=['eli@100>>1300'], z=6, zm=-120, zr=[300,900], zk='crew', sfx=['steps'], shake=1)
s('DAY 30 · 6:00 AM','ELI','planeext','dusk',"The cargo plane touches down. The ramp drops. A soldier is waving you in.", mode='ground', sfx=['engine'])
s('DAY 30 · 6:01 AM','HERO','tarmac','dusk',"Wait! There's someone else! Operations, gate B twenty!", a=['eli@560^','soldier@820<'], talk='eli')
s('DAY 30 · 6:01 AM','SOLDIER','tarmac','dusk',"We got one message from this airport every day for a month. One survivor. Gate B twelve. Only one.", a=['eli@560!','soldier@820<'], talk='soldier', cam='in')
s('DAY 30 · 6:01 AM','ELI','tarmac','dusk',"Only one.", a=['eli@560!','soldier@820<'], gap=.4)
s('DAY 30 · 6:03 AM','ELI','winview','dusk',"From the air, you can see the terminal. Gate B twenty. And in the window, a man in a pilot's uniform. Gray. Still. One hand on the glass.", view='airport', cam='in')
s('DAY 30 · 6:03 AM','ELI','terminal','dusk',"He was bitten on day one. So he locked himself in the one room that ran the whole airport. And for thirty days, he kept a stranger alive, from the other side of a door.", a=['zcap@640'], gap=.3)
s('DAY 30 · 6:04 AM','ELI','board','dusk',"The last thing anyone saw on that departure board was two lines.", msg={'B12':'DEPARTED.','B20':'STAY.'}, gap=.4)
nb("Inventory. One pair of shoes. Forty cookies. Three airport rules. Stay airside. The plane is home. Everything happens at two.", ['STAY AIRSIDE.','THE PLANE IS HOME.','EVERYTHING HAPPENS AT 2.'], tag='DAY 30', mood='dusk')
s('DAY 30','ELI','security','dusk',"Airport security has one job. Keep everything dangerous on the other side. He did.", a=['zcap@1000'], z=5, zm=0, zr=[60,460], cam='in', gap=1.6)
