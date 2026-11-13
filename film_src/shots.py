S = []
def s(day, sp, bg, pal, text, **o):
    S.append(dict(day=day, sp=sp, bg=bg, pal=pal, text=text, o=o))

# ---------------- HOOK ----------------
s(0,'ELI','street','day',"On day one, a man bit a stranger on my street. Everybody filmed it.", a=['biter@600','civ@670<!'], c=6, cphone=1, cam='in', sfx=['scream'])
s(0,'ELI','city','dusk',"By day ten, there was nobody left to film.", sfx=['thunder'], flash=1)
s(0,'ELI','apt','night',"I survived thirty days in a dead city, with a colander on my head,", a=['hero@640'], dark=.35, cam='in')
s(0,'ELI','hall','day',"a neighbor who never stopped talking,", a=['hero@420','dale@760<'], talk='dale')
s(0,'ELI','wall','day',"and one rule. Never open the door at night.", lines=['RULE 1:','NEVER OPEN THE DOOR','AT NIGHT'])
s(0,'ELI','booth','night',"On day twenty-nine, I broke that rule.", a=['hero@560'], sfx=['knock'], flash=1)
s(0,'ELI','title','night',"This is every single day. And how I almost did not make it.", lines=['30 DAYS'])

# ---------------- DAY 1 ----------------
s(1,'ELI','street','day',"Day one. A normal Tuesday. I was walking to work, with a coffee in my hand.", a=['hero@150>620'], c=4, cm=14, props=['bus'])
s(1,'ELI','street','day',"But people were acting strange. The man at the bus stop was staring straight at the sun.", a=['civ@930^','hero@520'], props=['bus'], cam='in')
s(1,'ELI','street','day',"He did not blink. He did not move. I thought, weird guy, and kept walking.", a=['civ@1050^','hero@400>800'], props=['bus'])
s(1,'ELI','street','day',"Then a woman walked straight into traffic, like the cars were not even there.", a=['civ@300>900'], props=['car'], sfx=['horn'], shake=1)
s(1,'ELI','street','day',"Then a guy in a suit grabbed a stranger, and bit him. Right on the neck.", a=['biter@600','civ@670<!','hero@250!'], sfx=['scream'], cam='in')
s(1,'ELI','street','day',"Phones came out. Nobody helped. Everybody just filmed.", a=['biter@600','civ@670<!'], c=7, cphone=1)
s(1,'ELI','street','day',"Then the man who got bitten stood back up. And his eyes were completely black.", a=['z@660<','hero@250!'], cam='in')
s(1,'ELI','street','day',"I did the smartest thing I have ever done. I ran to my car.", a=['hero@300>>1150'], z=3, zm=40, zr=[0,250], props=['car'], sfx=['steps'], shake=1)
s(1,'ELI','road','day',"I drove home through three red lights, and I did not look back.", veh='car', sfx=['engine'])

# ---------------- DAY 2 ----------------
s(2,'ELI','apt','day',"Day two. I stayed home, and told myself it was nothing.", a=['hero@640'])
s(2,'ELI','phone','day',"Then my phone rang. It was my dad.", sfx=['ring'], pre=1.6)
s(2,'DAD','phone','day',"Eli? Son, are you watching the news? Do not go outside. I mean it.")
s(2,'ELI','apt','day',"Dad, I'm fine. It is probably nothing.", a=['hero@640^:phone'], talk='hero')
s(2,'ELI','tv','day',"I turned on the TV. Every channel was showing the same thing.", tv='on')
s(2,'ANCHOR','tv','day',"Authorities are calling it an aggressive flu. Please stay calm, and stay indoors.", tv='on', cam='in')
s(2,'ELI','tv','day',"The anchor was sweating. Behind him, somebody was screaming.", tv='on', shake=1, sfx=['scream'])
s(2,'ELI','tv','day',"Then the channel went black. And it never came back.", tv='static', sfx=['static'])

# ---------------- DAY 3 ----------------
s(3,'ELI','kitchen','day',"Day three. The power was still on, so I filled every pot, every bottle, and the bathtub with water.", a=['hero@520'], props=['pots'])
s(3,'ELI','window','day',"Outside, the street was getting crowded. And none of them were talking.", z=7, zm=-6)
s(3,'ELI','kitchen','day',"I took the colander from my kitchen, and put it on my head.", a=['hero@640^'], props=['pots'], cam='in')
s(3,'ELI','apt','day',"It is not a helmet. But it felt like one.", a=['hero@640'])
s(3,'ELI','hall','day',"Then somebody knocked on my door. Loud.", a=['dale@700^'], sfx=['knock'], shake=1)
s(3,'DALE','hall','day',"Kid! It's Dale, from four B. You got any batteries?", a=['dale@700^'], talk='dale', cam='in')
s(3,'ELI','hall','day',"That was Mister Dale. Seventy years old, and louder than the sirens.", a=['hero@470','dale@740<'], talk='dale')
s(3,'ELI','apt','day',"I gave him four batteries. He gave me a can of peaches, and twenty minutes of advice.", a=['hero@520','dale@780<'], talk='dale')

# ---------------- DAY 4 ----------------
s(4,'ELI','city','dusk',"Day four. The sirens stopped. That was worse.")
s(4,'ELI','window','dusk',"From my window, I counted forty of them on the street. Just standing there. Waiting.", z=12, zm=0)
s(4,'ELI','window','night',"One of them looked up. Straight at my window.", z=12, zm=0, cam='in', sfx=['moans'])
s(4,'ELI','apt','night',"I closed the curtains, pushed the couch against the door, and did not sleep that night.", a=['hero@520!'], dark=.45, props=['barricade'])

# ---------------- DAY 5 ----------------
s(5,'ELI','apt','storm',"Day five. A storm hit the city.", a=['hero@640'], dark=.4, flash=1, sfx=['thunder'], pre=1.2)
s(5,'ELI','window','storm',"Lightning showed me something I did not want to see. They do not hide from rain. They do not feel it at all.", z=10, zm=-5, rain=1, flash=1)
s(5,'ELI','street','storm',"But when the thunder hit, every one of them turned toward the sound.", z=9, zm=30, rain=1, flash=1, sfx=['thunder'])
s(5,'ELI','wall','night',"So they follow sound. I wrote that on my wall. Later, it saved my life.", lines=['THEY FOLLOW','SOUND'])

# ---------------- DAY 6 ----------------
s(6,'ELI','kitchen','day',"Day six. The food in my fridge was going bad.", a=['hero@900<'])
s(6,'ELI','hall','day',"So Dale and I made a deal. He had a gas stove. I had the food.", a=['hero@470','dale@740<'])
s(6,'ELI','kitchen','dusk',"We cooked everything in one night. Steak, eggs, even the frozen pizza.", a=['hero@420','dale@650'], props=['flame'])
s(6,'DALE','kitchen','dusk',"Best steak of my life. Shame about the end of the world.", a=['hero@420','dale@650<'], talk='dale', props=['flame'], cam='in')
s(6,'ELI','kitchen','dusk',"He told me about his wife, his old job, and his chair. Mostly his chair.", a=['hero@420','dale@650<'], talk='dale', props=['flame'])

# ---------------- DAY 7 ----------------
s(7,'ELI','apt','dusk',"Day seven. At nine in the evening, the power died.", a=['hero@640'], sfx=['buzz'], darkin=.55)
s(7,'ELI','city','night',"The whole city went dark at once. No street lights. No windows. Nothing.", nolight=1)
s(7,'ELI','apt','night',"And in the dark, I finally heard how many of them there were.", a=['hero@640!'], dark=.55, sfx=['moans'], props=['candle'])
s(7,'ELI','window','night',"It sounded like the whole city was breathing.", z=16, zm=-4, nolight=1, cam='in')

# ---------------- DAY 8 ----------------
s(8,'ELI','wall','day',"Day eight. Dale needed medicine for his heart. The pharmacy was two blocks away.", map=1)
s(8,'ELI','stairs','day',"I went alone. Down the stairs, one step at a time.", a=['hero@300>700'], dark=.25)
s(8,'ELI','street','dawn',"Two blocks never felt so long. I stayed close to the walls.", a=['hero@150>560'], z=4, zm=-4, zfar=1)
s(8,'ELI','aisle','day',"Inside, the shelves were half empty. I grabbed everything I could carry.", a=['hero@640^'], pharm=1)
s(8,'ELI','aisle','day',"Then I stepped on broken glass.", a=['hero@640!'], pharm=1, sfx=['glass'], shake=1)
s(8,'ELI','aisle','day',"One of them heard it. Then five of them heard it.", a=['hero@700!<'], pharm=1, z=5, zfar=1, sfx=['moans'], cam='in')
s(8,'ELI','street','dawn',"I ran. I have never run that fast in my life.", a=['hero@400>>1200'], z=5, zm=45, zr=[0,300], sfx=['steps'], shake=1)
s(8,'ELI','hall','day',"I got back with bandages, pills, and a new respect for quiet shoes.", a=['hero@470!','dale@740<'], sfx=['slam'])

# ---------------- DAY 9 ----------------
s(9,'ELI','apt','day',"Day nine. My phone had three percent battery, and one bar of signal.", a=['hero@640^:phone'])
s(9,'ELI','phone','day',"Then it rang.", sfx=['ring'], pre=1.6)
s(9,'DAD','phone','day',"Eli, we are at the stadium. The army is here. They say it is safe. Come if you can.")
s(9,'ELI','phone','night',"Then the line died.", dead=1, sfx=['beep'])
s(9,'ELI','apt','dusk',"That was the last time my phone ever rang. I kept it in my pocket anyway.", a=['hero@640'], dark=.2)

# ---------------- DAY 10 ----------------
s(10,'ELI','stairs','day',"Day ten. I walked up to the roof, to look at the city.", a=['hero@250>650'], dark=.25)
s(10,'ELI','roof','dusk',"No cars. No lights. No people.", a=['hero@520'])
s(10,'ELI','city','dusk',"Just smoke. And them.", cam='in', sfx=['moans'])
s(10,'ELI','roof','dusk',"That is when I understood. Nobody was coming to save us.", a=['hero@520'], cam='in')

# ---------------- DAY 11 ----------------
s(11,'ELI','stairs','night',"Day eleven. Dale found an old radio in the basement.", a=['dale@350>650'], dark=.4)
s(11,'ELI','radio','day',"It took him three hours to make it work.", sfx=['static'])
s(11,'RADIO','radio','day',"This is the military safe zone at the harbor. We have food, water, and walls.", on=1)
s(11,'RADIO','radio','day',"Evacuation boats leave on day thirty. After that, we are gone.", on=1, cam='in')
s(11,'DALE','apt','day',"The harbor? Kid, that's across the whole city.", a=['hero@520','dale@780<'], talk='dale')
s(11,'ELI','wall','day',"Nineteen days. One city. I started drawing a map.", map=1, cam='in')

# ---------------- DAY 12 ----------------
s(12,'ELI','hall','day',"Day twelve. We practiced being quiet. Walking. Breathing. Opening doors.", a=['hero@300>560','dale@520>780'])
s(12,'ELI','kitchen','day',"Dale failed.", a=['dale@620!'], props=['pots'], sfx=['pots'], shake=1)
s(12,'DALE','kitchen','day',"Sorry!", a=['dale@620!'], talk='dale', props=['pots'])
s(12,'ELI','hall','dusk',"Three of them walked into our hallway.", z=3, zm=-14, zr=[700,1200], dark=.3, sfx=['moans'])
s(12,'ELI','apt','night',"We stood behind the door for six hours. I could hear them sniffing.", a=['hero@980!','dale@880!'], dark=.5)

# ---------------- DAY 13 ----------------
s(13,'ELI','roof','day',"Day thirteen. I wanted to test my idea about sound.", a=['hero@520'])
s(13,'ELI','roof','day',"So I wound up an old alarm clock, and threw it off the roof.", a=['hero@520^:clock'], sfx=['alarm'], throw=1)
s(13,'ELI','street','day',"The whole street followed it. Every single one of them.", z=11, zm=38)
s(13,'ELI','roof','day',"For the first time in two weeks, I smiled. I had a weapon. Noise.", a=['hero@520'], cam='in')

# ---------------- DAY 14 ----------------
s(14,'ELI','apt','night',"Day fourteen. In the middle of the night, I heard crying in the stairwell.", a=['hero@640!'], dark=.5, sfx=['cry'], props=['candle'])
s(14,'ELI','hall','night',"The rule says, never open the door at night. But this was not a moan.", a=['hero@900'], dark=.45)
s(14,'RILEY','stairs','night',"Please. I'm not bitten. I swear.", a=['riley@640!'], talk='riley', dark=.4, cam='in')
s(14,'ELI','hall','night',"I opened the door. His name was Riley. Fourteen years old.", a=['hero@520','riley@760<'], dark=.3)
s(14,'ELI','apt','night',"He had been alone in apartment two A for two weeks, eating dry cereal with water.", a=['hero@520','riley@700<','dale@880<'], dark=.3, props=['candle'])

# ---------------- DAY 15 ----------------
s(15,'ELI','apt','day',"Day fifteen. Halfway. And Riley knew things we did not.", a=['hero@480','riley@700<'])
s(15,'RILEY','apt','day',"They are slower in the morning. And they hate the cold.", a=['hero@480','riley@700<'], talk='riley', cam='in')
s(15,'ELI','wall','day',"He had been watching them from his window, and writing all of it down.", lines=['SLOW AT SUNRISE','HATE THE COLD','FOLLOW SOUND'])
s(15,'ELI','apt','day',"The kid was smarter than both of us. Dale did not like that.", a=['hero@460','riley@660<','dale@860<'])

# ---------------- DAY 16 ----------------
s(16,'ELI','kitchen','day',"Day sixteen. The bathtub was empty. The bottles were empty.", a=['hero@520'])
s(16,'ELI','roof','day',"So we put every bucket and every pot we had on the roof. And we waited.", a=['hero@420','riley@620'], props=['buckets'])
s(16,'ELI','roof','storm',"That night, the storm came back.", a=['hero@420','riley@620','dale@780'], props=['buckets'], rain=1, flash=1, sfx=['thunder'], pre=1.0)
s(16,'ELI','roof','storm',"This time, I was happy to hear it.", a=['hero@420^','riley@620^','dale@780'], props=['buckets'], rain=1, cam='in')

# ---------------- DAY 17 ----------------
s(17,'ELI','window','dawn',"Day seventeen. Something changed.", z=7, zm=-5)
s(17,'ELI','street','dawn',"One of them walked up to our building, and pulled the door handle.", a=['z@830'], sfx=['rattle'], cam='in')
s(17,'RILEY','apt','day',"They never did that before.", a=['hero@480!','riley@700<!'], talk='riley')
s(17,'ELI','apt','day',"They were learning. And we were running out of time.", a=['hero@480','riley@700<','dale@880<'], cam='in')

# ---------------- DAY 18 ----------------
s(18,'ELI','stairs','day',"Day eighteen. We blocked the stairs with every piece of furniture in the building.", a=['hero@330','riley@470'], props=['barricade'], dark=.2)
s(18,'ELI','hall','day',"Beds. Tables. A piano, somehow.", a=['hero@300>620','dale@500>820'])
s(18,'DALE','hall','day',"Forty years I had that chair.", a=['dale@700'], talk='dale', cam='in')
s(18,'ELI','stairs','day',"He put it on top of the pile himself.", a=['dale@420^'], props=['barricade'], dark=.2)

# ---------------- DAY 19 ----------------
s(19,'ELI','street','dawn',"Day nineteen. We were out of food. So I went to the supermarket on the corner.", a=['hero@200>700'])
s(19,'ELI','aisle','night',"It was dark inside. It looked empty.", a=['hero@640'], dark=.55)
s(19,'ELI','aisle','day',"Then every light in the store turned on at once. Somebody had left a generator running.", a=['hero@640!'], sfx=['buzz'], flash=1)
s(19,'ELI','aisle','day',"And in the light, I saw them. In every aisle. All of them looking at me.", a=['hero@700!<'], z=8, zfar=1, cam='in', sfx=['moans'])
s(19,'ELI','aisle','day',"I pushed a shopping cart at them, and ran.", a=['hero@500>>1100'], z=6, zm=30, zr=[100,420], zmid=1, sfx=['crash'], shake=1)
s(19,'ELI','apt','day',"I came home with four cans of beans. And my life.", a=['hero@520','riley@720<','dale@880<'])

# ---------------- DAY 20 ----------------
s(20,'ELI','wall','day',"Day twenty. Ten days left. The plan was simple.", map=1)
s(20,'ELI','apt','day',"Find a car. Drive to the harbor. Do not die.", a=['hero@460','riley@660<','dale@860<'])
s(20,'DALE','apt','day',"I like the last part.", a=['hero@460','riley@660<','dale@860<'], talk='dale', cam='in')

# ---------------- DAY 21 ----------------
s(21,'ELI','window','day',"Day twenty-one. My car was still on the street. Under about thirty of them.", z=14, zm=0, props=['car'])
s(21,'ELI','apt','day',"We needed another one.", a=['hero@480','riley@700<'])
s(21,'RILEY','apt','day',"The delivery van. Behind the bakery. The keys are in it. I saw it from my window.", a=['hero@480','riley@700<'], talk='riley', cam='in')

# ---------------- DAY 22 ----------------
s(22,'ELI','street','dawn',"Day twenty-two. We reached the van at sunrise, when they are slow.", a=['hero@150>520','riley@60>420','dale@-20>330'], props=['van'], z=3, zm=-3, zfar=1)
s(22,'ELI','street','dawn',"It had half a tank of gas, and it smelled like old bread.", a=['hero@620','riley@520','dale@420'], props=['van'], cam='in')
s(22,'ELI','road','dawn',"I turned the key.", veh='van', still=1, sfx=['enginestart'], pre=.4)
s(22,'ELI','road','dawn',"It was the most beautiful sound I ever heard.", veh='van', sfx=['engine'])

# ---------------- DAY 23 ----------------
s(23,'ELI','hall','night',"Day twenty-three. At three in the morning, they broke through the front door.", a=['hero@640!'], dark=.45, sfx=['glass','moans'], shake=1)
s(23,'ELI','stairs','night',"The furniture held them back. For now.", z=5, zm=0, zr=[760,1180], props=['barricade'], dark=.4)
s(23,'ELI','apt','night',"We packed everything we had into three bags. Nobody talked.", a=['hero@460','riley@660','dale@860'], dark=.35, props=['bags','candle'])

# ---------------- DAY 24 ----------------
s(24,'ELI','street','dawn',"Day twenty-four. We left through the fire escape.", a=['hero@700>400<','riley@800>500<','dale@900>600<'], props=['ladder','van'])
s(24,'ELI','window','dawn',"I looked back at my window one last time.", inside=1)
s(24,'ELI','apt','day',"Twenty-four days. That little apartment kept me alive.", cam='out')
s(24,'ELI','road','dawn',"Then I closed the van door, and we drove.", veh='van', sfx=['slam','engine'])

# ---------------- DAY 25 ----------------
s(25,'ELI','road','day',"Day twenty-five. The highway was a wall of dead cars.", veh='van', still=1, props=['deadcars'])
s(25,'ELI','road','dusk',"So we drove through the old town. Slow. Lights off.", veh='van', slow=1)
s(25,'RILEY','road','dusk',"Eli. Look at the bridge.", veh='van', slow=1, cam='in')
s(25,'ELI','bridge','dusk',"The bridge to the harbor was gone. Blown up. By the army.", sfx=['thunder'])

# ---------------- DAY 26 ----------------
s(26,'ELI','school','dusk',"Day twenty-six. We slept in a school.", a=['hero@420','riley@600','dale@780'])
s(26,'ELI','school','dusk',"On the chalkboard, somebody had written forty names. And one sentence. We went to the harbor.", board=1, cam='in')
s(26,'ELI','school','night',"Then, at midnight, the school bell rang. On its own.", a=['hero@420!','riley@600!','dale@780!'], dark=.45, sfx=['bell'], pre=1.0)
s(26,'ELI','school','night',"And they started coming.", a=['hero@420>>-100<','riley@560>>-100<','dale@700>>0<'], z=6, zm=-30, zr=[900,1500], dark=.45, sfx=['moans'], shake=1)

# ---------------- DAY 27 ----------------
s(27,'ELI','wall','day',"Day twenty-seven. Riley found another way on my map.", map=2)
s(27,'ELI','wall','day',"The old train tunnel. It goes under the river.", map=2, cam='in')
s(27,'DALE','road','day',"Dark tunnel, full of who knows what. Wonderful.", veh='van', slow=1)

# ---------------- DAY 28 ----------------
s(28,'ELI','tunnel','night',"Day twenty-eight. The tunnel. One flashlight. Three people.", a=['hero@420^:flash','riley@320','dale@220'], sfx=['drip'], cone=1)
s(28,'ELI','tunnel','night',"We walked for four hours, and heard them breathing in the dark the whole way.", a=['hero@300>520^:flash','riley@200>420','dale@100>320'], cone=1, eyes=1, sfx=['moans'])
s(28,'ELI','tunnel','night',"We did not run. Running is loud.", a=['hero@520>640^:flash','riley@420>540','dale@320>440'], cone=1, eyes=1, cam='in')

# ---------------- DAY 29 ----------------
s(29,'ELI','street','dusk',"Day twenty-nine. We came out one mile from the harbor.", a=['hero@200>520','riley@100>420','dale@0>320'])
s(29,'ELI','booth','night',"We hid in a ticket booth for the night.", inside3=1)
s(29,'ELI','booth','night',"At midnight, somebody knocked.", inside3=1, sfx=['knock'], pre=1.2)
s(29,'ELI','booth','night',"A voice said, help me. I knew the rule. Never open the door at night.", inside3=1, cam='in')
s(29,'ELI','title','night',"I opened it.", lines=['I OPENED IT'], sfx=['thunder'])
s(29,'ELI','booth','night',"It was not a person.", a=['z@820<','hero@620!'], flash=1, shake=1, sfx=['scream'])
s(29,'ELI','booth','night',"Dale pulled me back, and took the bite that was meant for me.", a=['z@800<','dale@720','hero@520!','riley@420!'], shake=1)
s(29,'DALE','booth','night',"Go, kid. I'm too old for boats anyway. Take the boy. And take my radio.", a=['dale@700<','hero@520','riley@420'], talk='dale', cam='in')
s(29,'ELI','street','night',"He walked into the street, with my last alarm clock ringing in his hand.", a=['dale@300>800^:clock'], z=6, zm=22, zr=[-200,200], sfx=['alarm'])
s(29,'ELI','street','night',"And every one of them followed him.", z=12, zm=24, cam='out')

# ---------------- DAY 30 ----------------
s(30,'ELI','harbor','dawn',"Day thirty. Riley and I reached the harbor at sunrise.", a=['hero@150>480','riley@50>380'], sfx=['boathorn'], pre=1.5)
s(30,'ELI','harbor','dawn',"The last boat was still there.", a=['hero@480','riley@380'], cam='in')
s(30,'RADIO','harbor','dawn',"Two survivors at the gate! Open it! Open it now!", a=['hero@480^','riley@380^','soldier@900<'], talk='soldier', gate=1, sfx=['gate'])
s(30,'ELI','harbor','dawn',"Thirty days. I lost my home, my city, and the loudest friend I ever had.", a=['hero@700','riley@620'], gate=2)
s(30,'ELI','harbor','dawn',"I still wear the colander. And I still follow one rule. But it is a different one now.", a=['hero@700'], gate=2, cam='in')
s(30,'ELI','title','night',"If somebody is crying, open the door.", lines=['IF SOMEBODY IS CRYING,','OPEN THE DOOR'])
s(30,'RADIO','radio','night',"Any survivors. The island is not safe. Repeat. The island is not safe.", on=1, sfx=['static'], dark=.3)
s(30,'ELI','title','night',"That is when day thirty-one started.", lines=['DAY 31'])
