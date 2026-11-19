S = []
def s(tag, sp, bg, mood, text, **o):
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))

D1 = 'DAY 1 · 11:52 PM'
# ================= COLD OPEN =================
s(D1,'ELI','hall','night',"A hotel door locks itself every time it closes. It never asks which side you are on.", a=['eli@330'], lit=1, cam='in', gap=.3)
s(D1,'ELI','apt','night',"It is eleven fifty two. Room six seventeen, sixth floor of the Harbor View Hotel. Your job interview is at nine A M. Your shirt is ironed.", a=['eli@520'], lit=1)
s(D1,'ELI','apt','night',"Then the room phone rings.", a=['eli@520!'], lit=1, sfx=['ring'], pre=.6, cam='in')
s(D1,'FRANK','apt','night',"Good evening. This is Frank, at the front desk. Please stay in your room tonight. Hang the Do Not Disturb sign on your door.", a=['eli@520:phone'], lit=1, vfx='radio')
s(D1,'ELI','apt','night',"A long pause.", a=['eli@520:phone'], lit=1, gap=.6)
s(D1,'FRANK','apt','night',"And if housekeeping knocks, do not answer.", a=['eli@520!:phone'], lit=1, vfx='radio', cam='in', gap=.5)
s('DAY 1 · 12:00 AM','ELI','hall','night',"It is midnight. Hotels do not clean at midnight.", a=['eli@330'], lit=1, gap=.2)
s('DAY 1 · 12:00 AM','ELI','hall','night',"Knock. Knock.", a=['eli@330!'], lit=1, feet=1, sfx=['knock'], shake=1, gap=.3)
s('DAY 1 · 12:00 AM','MIMIC','peep','night',"Housekeeping.", who='zmaid', vfx='mimic', gap=.4)
s('DAY 1 · 12:01 AM','ELI','peep','night',"You look through the peephole. A gray uniform. A towel cart. She does not have a key. She just keeps saying it.", who='zmaid', close=1, cam='in')
s('DAY 1 · 12:01 AM','MIMIC','hall','night',"Housekeeping.", a=['eli@330!'], lit=1, feet=1, vfx='mimic', sfx=['knock'], shake=1, gap=.4)
s('','ELI','title','night',"Your interview is in nine hours. You will miss it. You will not open this door for thirty days.", lines=['ROOM 617'], gap=.6)

# ================= PROBLEM 1: THE DOORS =================
D = 'DAY 1 · 12:10 AM'
s(D,'ELI','box','night',"First problem. The doors. Room six seventeen has two.", lines=['PROBLEM 1','THE DOORS'], sfx=['boom'])
s(D,'ELI','apt','night',"The front door. And a second one, by the closet. A connecting door, to room six eighteen. Just a deadbolt, and a hope.", a=['eli@700!'], lit=1, cam='in')
s(D,'ELI','apt','night',"So you build. The dresser goes against the front door. The TV stand against the connecting one. The minibar on top.", a=['eli@260>>900'], lit=1, sfx=['steps','slam'])
s(D,'ELI','hall','night',"Then you do the most important thing. You open the door two inches, and hang the sign.", a=['eli@330^'], lit=1)
s(D,'ELI','box','night',"Hotel rule one. The sign stays on.", lines=['DO NOT','DISTURB','RULE 1: THE SIGN STAYS ON'])
s(D,'ELI','winst','night',"From your window, you can see the harbor. And the street. The street is full.", n=70, cam='in', sfx=['moans'], gap=.4)

# ================= PROBLEM 2: WATER =================
D = 'DAY 2 · 6:00 AM'
s(D,'ELI','box','dusk',"Second problem. Water.", lines=['PROBLEM 2','WATER'], sfx=['boom'])
s(D,'ELI','apt','dusk',"At six A M, the power dies. The air conditioner stops. The lights go out. The door lock beeps once, and stays locked.", a=['eli@520!'], dark=.5, sfx=['buzz','beep'])
s(D,'ELI','hall','dusk',"Here is something hotels do not advertise. Door locks run on batteries. When the lights die, the locks do not. Nothing gets in without a key.", a=['eli@330'], dark=.4, cam='in')
s(D,'ELI','apt','dusk',"The tap still runs. But weaker every hour. So you fill everything. The bathtub. The ice bucket. The coffee pot. Two laundry bags, tied at the top.", a=['eli@300>>820'], dark=.4, sfx=['steps'])
s(D,'ELI','box','dusk',"A full bathtub holds about forty gallons. One person needs about one gallon a day. That is forty days. If you never shower.", lines=['BATHTUB = 40 GAL','1 GAL A DAY','= 40 DAYS'])
s(D,'ELI','apt','dusk',"You never shower.", a=['eli@520'], dark=.4, cam='in', gap=.5)

# ================= ROOM 618 =================
D = 'DAY 3 · 11:40 PM'
s(D,'ELI','apt','night',"On the third night, something scrapes under the connecting door. Paper.", a=['eli@560!'], dark=.6, sfx=['scratch'], cam='in')
s(D,'ELI','box','night',"Hotel notepad. Shaky handwriting.", lines=['ARE YOU ALIVE?','— 618'])
s(D,'ELI','box','night',"You write back.", lines=['YES. ROOM 617.','WHO ARE YOU?'])
s(D,'ELI','box','night',"An hour later.", lines=['WALT. 71.','RETIRED MAILMAN.','DO YOU PLAY CHESS?'])
s(D,'ELI','apt','night',"You do not play chess. For the next three weeks, you play chess. On a hotel notepad. Under a door. Walt wins every game.", a=['eli@460s'], dark=.6, floor=1, gap=.5)

# ================= PROBLEM 3: FOOD =================
D = 'DAY 4 · 9:00 AM'
s(D,'ELI','box','day',"Third problem. Food.", lines=['PROBLEM 3','FOOD'], sfx=['boom'])
s(D,'ELI','box','day',"The minibar. Two bags of chips. One chocolate bar. Peanuts. A bottle of water that costs eleven dollars. Three days, if you are careful.", lines=['2 CHIPS','1 CHOCOLATE','PEANUTS','$11 WATER'])
s(D,'ELI','apt','day',"You are not careful. You eat the chocolate first.", a=['eli@520'], dark=.3, cam='in')
s(D,'ELI','box','day',"Walt sends one word.", lines=['TRAYS.'])
s(D,'ELI','hall','day',"Room service trays. People leave them outside their doors. On the night it started, half this floor ordered dinner. Nobody took the trays back in.", a=['eli@330'], dark=.3)
s('DAY 5 · 10:00 AM','ELI','hall','day',"But the hall belongs to housekeeping. Every morning at ten, she starts at room six oh one.", a=['eli@330!'], dark=.3, feet=1, sfx=['knock'])
s('DAY 5 · 10:00 AM','MIMIC','peep','day',"Housekeeping.", who='zmaid', vfx='mimic')
s('DAY 5 · 10:02 AM','ELI','peep','day',"Knock. Housekeeping. Next door. Knock. Housekeeping. But she skips every door with a sign.", who='zmaid', leave=1)
s('DAY 5 · 10:02 AM','ELI','box','day',"Hotel rule two. She skips the signs.", lines=['RULE 2:','SHE SKIPS','THE SIGNS'])
s('DAY 5 · 10:03 AM','ELI','hall','day',"Room six forty is at the far end of the hall. It takes her forty seconds to get there. And forty seconds back.", a=['eli@330'], dark=.3, cam='in')
s('DAY 6 · 10:00 AM','ELI','hall','day',"Day six. Ten o'clock. She knocks on six forty. You open your door.", a=['eli@330>>900'], dark=.3, sfx=['steps'])
s('DAY 6 · 10:00 AM','ELI','hall','day',"Three trays. Cold fries. Half a burger. And a whole cheesecake. Untouched. Somebody ordered a cheesecake on the last night of the world, and never ate it.", a=['eli@900!'], dark=.3)
s('DAY 6 · 10:01 AM','ELI','hall','day',"She turns around. You are back inside with four seconds to spare.", a=['eli@900>>330'], dark=.3, sfx=['steps','slam'], shake=1)
s('DAY 6 · 9:00 PM','ELI','apt','night',"You split the cheesecake with Walt. Under the door. In very thin slices.", a=['eli@460s'], dark=.6, floor=1, gap=.5)

# ================= FRANK =================
D = 'DAY 6 · 9:00 PM'
s(D,'ELI','apt','night',"At nine, the room phone rings again.", a=['eli@520!'], dark=.6, sfx=['ring'], pre=.4)
s(D,'FRANK','apt','night',"Front desk. Frank here. Just checking on six seventeen. Tomorrow's weather is sunny, with a chance of the end of the world.", a=['eli@520:phone'], dark=.6, vfx='radio')
s(D,'ELI','apt','night',"Frank calls every night at nine. He never says where he is. He never says what he eats. He always says the weather.", a=['eli@520:phone'], dark=.6, cam='in')
s(D,'FRANK','apt','night',"Help is coming. Boats, from the harbor. I'll call when I know the day. Stay in your room.", a=['eli@520:phone'], dark=.6, vfx='radio', gap=.5)

# ================= PROBLEM 4: THE SIGN =================
D = 'DAY 12 · 9:40 AM'
s(D,'ELI','box','day',"Fourth problem. The sign.", lines=['PROBLEM 4','THE SIGN'], sfx=['boom'])
s(D,'ELI','hall','day',"Day twelve. A storm. Wind howls through a broken window at the end of the hall. Something flutters past your peephole.", a=['eli@330!'], dark=.4, sfx=['whoosh'], cam='in')
s(D,'ELI','box','day',"Your sign.", lines=['DO NOT','DISTURB'], gap=.5)
s('DAY 12 · 10:00 AM','ELI','hall','day',"At ten, she starts at six oh one. Six oh two. Six oh three. Nobody skips you now.", a=['eli@330!'], dark=.4, feet=1, sfx=['knock'])
s('DAY 12 · 10:04 AM','MIMIC','hall','day',"Housekeeping.", a=['eli@330!'], dark=.4, feet=1, vfx='mimic', sfx=['knock'], shake=1)
s('DAY 12 · 10:04 AM','ELI','peep','day',"Then you hear a sound you have not heard in twelve days. A beep. A green light. She has a master key.", who='zmaid', close=1, sfx=['beep','sting'], cam='in')
s('DAY 12 · 10:05 AM','ELI','hall','day',"The door opens two inches, into the dresser. A gray hand comes through the gap. A name tag. Rosa.", a=['eli@330!'], dark=.4, feet=1, bang=1, shake=1, sfx=['slam','growl'])
s('DAY 12 · 10:05 AM','ELI','hall','day',"You push. She pushes. She does not get tired. You do.", a=['eli@330!'], dark=.4, feet=1, bang=1, shake=1)
s('DAY 12 · 10:06 AM','MIMIC','hall','day',"Housekeeping.", a=['eli@330!'], dark=.4, feet=1, bang=1, vfx='mimic')
s('DAY 12 · 10:06 AM','ELI','apt','day',"Then, from the other side of the connecting door, Walt starts banging. Pots. A lamp. Everything he has.", a=['eli@700!'], dark=.4, sfx=['pots','slam','knock'], shake=1)
s('DAY 12 · 10:07 AM','ELI','hall','day',"Rosa turns toward the noise. Her hand slides back out. And the master key slides across the carpet. Into your room.", a=['eli@330!'], dark=.4, feet=1, sfx=['whoosh'], cam='in')
s('DAY 12 · 10:08 AM','ELI','box','day',"One card. Every door on the sixth floor.", lines=['MASTER KEY','OPENS EVERY DOOR'], sfx=['pop'])
s('DAY 12 · 10:08 AM','ELI','box','day',"Hotel rule three. Never waste a master key.", lines=['RULE 3:','NEVER WASTE','A MASTER KEY'], gap=.4)

# ================= THE SIXTH FLOOR =================
D = 'DAY 13 · 10:00 AM'
s(D,'ELI','hall','day',"Six oh eight. Empty. Minibar. Six eleven. Empty. Minibar. Six fourteen. Not empty. You close six fourteen very quickly.", a=['eli@330>>800'], dark=.3, sfx=['beep','steps','slam'])
s('DAY 15','ELI','box','day',"By day fifteen, you have fourteen minibars. Sixty three chocolate bars. A box of candles. And a hair dryer. Useless. You keep it anyway.", lines=['14 MINIBARS','63 CHOCOLATE BARS','CANDLES','1 HAIR DRYER (??)'])
s('DAY 15','ELI','apt','night',"You slide half of everything under Walt's door. A minute later, a note comes back.", a=['eli@460s'], dark=.6, floor=1)
s('DAY 15','ELI','box','night',"One word.", lines=['CHECKMATE.'], gap=.5)

# ================= WALT =================
D = 'DAY 22'
s(D,'ELI','apt','night',"On day twenty two, Walt's notes stop.", a=['eli@460s'], dark=.7, floor=1, cam='in', gap=.4)
s(D,'ELI','box','night',"You write twice. Nothing comes back.", lines=['WALT?','...YOUR MOVE.'])
s('DAY 24 · 10:00 AM','ELI','hall','day',"Day twenty four. You have a master key. Six eighteen is twelve steps away. Rosa is at the far end.", a=['eli@330>>620'], dark=.4, sfx=['steps','beep'])
s('DAY 24 · 10:01 AM','ELI','apt','day',"Walt is on the floor by the bed. Alive. Gray. Shaking.", a=['eli@760!','ortiz@420_'], dark=.4, cam='in')
s('DAY 24 · 10:01 AM','WALT','apt','day',"Sugar. I'm diabetic. Ran out of juice on Tuesday.", a=['eli@760!','ortiz@420_'], dark=.4)
s('DAY 24 · 10:02 AM','ELI','box','day',"Low blood sugar can kill you faster than they can. The fix is about fifteen grams of sugar. Half a cup of juice. Or a few chocolate bars.", lines=['LOW BLOOD SUGAR','15 G OF SUGAR','= 1/2 CUP JUICE'])
s('DAY 24 · 10:02 AM','ELI','apt','day',"You have sixty three.", a=['eli@560s','ortiz@420_'], dark=.4, cam='in', gap=.3)
s('DAY 24 · 10:20 AM','WALT','apt','day',"Took you long enough.", a=['eli@600s','ortiz@420s'], dark=.4, gap=.5)

# ================= ROOM FOR ONE =================
D = 'DAY 28 · 9:00 PM'
s(D,'ELI','apt','night',"On day twenty eight, Frank calls.", a=['eli@520!'], dark=.6, sfx=['ring'], pre=.4)
s(D,'FRANK','apt','night',"Six seventeen. The boat comes day thirty, six A M, at the harbor pier. There's room for one per room. Don't tell your neighbor. If everyone comes down at once, they'll hear.", a=['eli@520:phone'], dark=.6, vfx='radio')
s(D,'ELI','apt','night',"Room for one.", a=['eli@520!:phone'], dark=.6, cam='in', gap=.4)
s(D,'ELI','box','night',"You look at the connecting door for a very long time.", lines=['ROOM FOR ONE.'], gap=.6)

# ================= DAY 30 =================
D = 'DAY 30 · 5:10 AM'
s(D,'ELI','apt','dusk',"Day thirty. Five A M. You open the connecting door.", a=['eli@700'], dark=.5, sfx=['beep'])
s(D,'ELI','apt','dusk',"Walt is already dressed. Tie. Coat. Chess set in his pocket.", a=['eli@700','ortiz@460<'], dark=.5)
s(D,'WALT','apt','dusk',"Frank called me too. Room for one. Don't tell your neighbor.", a=['eli@700','ortiz@460<'], dark=.5, cam='in')
s(D,'ELI','apt','dusk',"You stare at each other. Then you both start laughing. Very, very quietly.", a=['eli@700','ortiz@460<'], dark=.5, gap=.4)
s('DAY 30 · 5:30 AM','ELI','hall','dusk',"The staff stairs. Six floors. The master key opens every door. In the lobby, one lamp is still on.", a=['eli@200>>760','ortiz@80>>620'], dark=.4, sfx=['steps'])
s('DAY 30 · 5:40 AM','ELI','hall','dusk',"Behind the front desk, a man in a blazer. Name tag. Frank. Alive. Phone at his ear.", a=['eli@330!','ortiz@200!','frank@820:phone'], dark=.3, cam='in')
s('DAY 30 · 5:40 AM','FRANK','hall','dusk',"Nine twenty four? Room for one. Don't tell your neighbor.", a=['eli@330!','ortiz@200!','frank@820:phone'], dark=.3)
s('DAY 30 · 5:41 AM','ELI','hall','dusk',"He hangs up. Dials the next room. Same words. Every room got the same call. Because if two hundred people think there is room for everyone, they all run at once. And they all get heard.", a=['eli@330','ortiz@200','frank@820:phone'], dark=.3)
s('DAY 30 · 5:42 AM','FRANK','hall','dusk',"Boat's at the pier. Go. Quietly.", a=['eli@330','ortiz@200','frank@820<'], dark=.3, talk='frank')
s('DAY 30 · 5:42 AM','HERO','hall','dusk',"Are you coming?", a=['eli@330^','ortiz@200','frank@820<'], dark=.3, talk='eli')
s('DAY 30 · 5:42 AM','FRANK','hall','dusk',"Somebody has to answer the phone.", a=['eli@330','ortiz@200','frank@820<'], dark=.3, talk='frank', cam='in', gap=.6)
s('DAY 30 · 6:00 AM','ELI','winst','dusk',"Outside, the street is gray and still. At the pier, a ferry. And from every door of the Harbor View Hotel, people slip out. One at a time. Each one sure they are the only one.", n=12, walkers=1, cam='out', sfx=['boathorn'])
s('DAY 30 · 6:05 AM','ELI','box','dusk',"Inventory. One master key. Fifty nine chocolate bars. One chess set. And three hotel rules.", lines=['1 MASTER KEY','59 CHOCOLATE BARS','1 CHESS SET'])
s('DAY 30 · 6:05 AM','ELI','box','dusk',"The sign stays on. She skips the signs. And the new one. Anyone who tells you there is room for one, might be saving everyone.", lines=['THE SIGN STAYS ON.','SHE SKIPS THE SIGNS.','ROOM FOR ONE','MIGHT SAVE EVERYONE.'], gap=.5)
s('DAY 30 · 6:06 AM','ELI','hall','dusk',"Behind you, the lobby doors close. They lock themselves. They never ask which side you are on.", a=['frank@620:phone'], dark=.3, cam='in', gap=.4)
s('','FRANK','title','night',"Good evening. This is Frank, at the front desk. Please stay in your room tonight.", lines=['ROOM 617'], vfx='radio', sfx=['ring'], gap=1.8)
