S = []
def s(tag, sp, bg, mood, text, **o):
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))

EL = 'eli@250'
DV = 'dev@520s<'
def st(text, sp='ELI', fact=0, **o):
    s('', sp, 'studio', 'day', text, a=[EL, DV], talk=('dev' if sp == 'DEV' else 'eli'), fact=fact, **o)

# ===== HOOK: the first 5 seconds decide everything =====
s('', 'ELI', 'alert', 'night', "The first rule of a zombie outbreak is not run. It's this: stop checking your phone.",
  lines=['STOP CHECKING', 'YOUR PHONE'], vfx='alert', sfx=['eas'], pre=.2, gap=.35)
st("I'm Eli. I learned ten rules the hard way. Skip one, and you become the next alert.", fact=0)
st("I'll skip the phone rule.", sp='DEV', fact=0)
st("Then you're the story everyone tells tomorrow.", fact=0, gap=.35)

# ===== RULE 1 =====
s('RULE 1 OF 10', 'ELI', 'alert', 'night', "Rule one. Stop checking your phone. Every alert arrives late. Every rumor arrives first.",
  lines=['RULE 1', 'STOP CHECKING', 'YOUR PHONE'], vfx='alert', sfx=['eas'], pre=.4)
st("By the time the official alert pings, the street is already full.", fact=1)
s('RULE 1 OF 10', 'ELI', 'box', 'night', "Check once. Then put it down.", lines=['CHECK ONCE.', 'THEN PUT IT DOWN.'], pre=.2)
st("But I need my feed.", sp='DEV', fact=1)
st("Your feed is where the rumors live.", fact=1, gap=.35)

st("At eight forty, a rumor said the bridge was closed. Half the street drove toward it. The official alert came at nine fifteen.", fact=1)
st("The biggest mistake? Refreshing the news while the door is still unlocked.", fact=1)
# ===== RULE 2 =====
s('RULE 2 OF 10', 'ELI', 'alert', 'night', "Rule two. Know two ways out. Before anything happens.",
  lines=['RULE 2', 'TWO WAYS OUT'], vfx='alert', sfx=['eas'], pre=.4)
st("Count the doors on your street. Walk them in the dark, once.", fact=2)
st("In the dark?", sp='DEV', fact=2)
st("They don't wait for daylight.", fact=2, gap=.35)

st("On day two, the stairwell in my building got blocked. The people who knew a second exit got out. Everyone else waited for the elevator.", fact=2)
st("Doors, windows, a fire escape. If you only know one, you have zero.", fact=2)
# ===== RULE 3 =====
s('RULE 3 OF 10', 'ELI', 'alert', 'night', "Rule three. Pick one leader before the panic starts.",
  lines=['RULE 3', 'PICK ONE LEADER'], vfx='alert', sfx=['eas'], pre=.4)
st("When a crowd panics, nobody leads. Everybody shouts. Decide now who gets the final word.", fact=3)
st("Okay. Eli is the leader.", sp='DEV', fact=3)
st("Not me. Pick someone calm.", fact=3, gap=.35)

st("In my building, the group that wanted a vote on everything argued at the door for an hour. The group with one leader was in the car in four minutes.", fact=3)
st("One leader. One plan. One voice. Arguing is louder than the dead.", fact=3)
# ===== RULE 4 =====
s('RULE 4 OF 10', 'ELI', 'alert', 'night', "Rule four. Don't go shopping in the first hour.",
  lines=['RULE 4', 'NO SHOPPING', 'IN THE FIRST HOUR'], vfx='alert', sfx=['eas'], pre=.4)
st("Everyone rushes to the store at once. That is where the crowd gathers. Buy water once, then go home.", fact=4)
st("I already bought forty energy drinks.", sp='DEV', fact=4)
st("Then you're fine. For a day.", fact=4, gap=.35)

st("At nine in the morning, the store had two hundred people and no water left. It was empty in twelve minutes.", fact=4)
st("Food you already have at home is worth more than anything on a shelf you have to fight for.", fact=4)
# ===== RULE 5 =====
s('RULE 5 OF 10', 'ELI', 'alert', 'night', "Rule five. Keep one person you would open the door for.",
  lines=['RULE 5', 'ONE PERSON', 'YOU TRUST'], vfx='alert', sfx=['eas'], pre=.4)
st("Zombies don't make you lonely. Panic does. Keep one person close, and agree on a knock.", fact=5)
st("You'd open the door for me?", sp='DEV', fact=5)
st("Only if you knock like a human.", fact=5, gap=.35)

st("When the power went out, the people who talked through the door made it. The ones who stayed silent were alone.", fact=5)
st("Pick a knock. Two short, one long. Anyone who knocks differently stays outside.", fact=5)
# ===== RULE 6 =====
s('RULE 6 OF 10', 'ELI', 'alert', 'night', "Rule six. Water before food. Always.",
  lines=['RULE 6', 'WATER', 'BEFORE FOOD'], vfx='alert', sfx=['eas'], pre=.4)
st("You can go weeks without food. A few days without water. Fill every bottle and the bathtub in the first hour.", fact=6)
st("Does soda count?", sp='DEV', fact=6)
st("No, Dev. Soda does not count.", fact=6, gap=.35)
st("On day three, the taps in my building ran dry. The people with full bathtubs were the only ones not knocking on doors.", fact=6)
st("Ration it. One cup in the morning, one at night. Thirst makes people careless.", fact=6)
# ===== RULE 7 =====
s('RULE 7 OF 10', 'ELI', 'alert', 'night', "Rule seven. Quiet beats fast.",
  lines=['RULE 7', 'QUIET', 'BEATS FAST'], vfx='alert', sfx=['eas'], pre=.4)
st("Running is loud. Slamming doors is loud. Every sound tells them where you are. Walk slow, and close doors with your hand.", fact=7)
st("What about my sneakers? They squeak.", sp='DEV', fact=7)
st("Then take them off.", fact=7, gap=.35)
s('RULE 7 OF 10', 'ELI', 'box', 'night', "Slow is quiet. Quiet is alive.", lines=['SLOW IS QUIET.', 'QUIET IS ALIVE.'], pre=.2)
st("They hear a car alarm from three blocks away. They will hear you too.", fact=7)
# ===== RULE 8 =====
s('RULE 8 OF 10', 'ELI', 'alert', 'night', "Rule eight. Never sleep at the same time.",
  lines=['RULE 8', 'SLEEP', 'IN SHIFTS'], vfx='alert', sfx=['eas'], pre=.4)
st("If everyone sleeps, nobody hears the door. Take turns. Two hours each. One person always awake.", fact=8)
st("I'll take the first shift.", sp='DEV', fact=8)
st("You fell asleep during the last movie.", fact=8, gap=.35)
st("The night our door cracked, the only reason we heard it was that someone was awake and listening.", fact=8)
st("Whoever is on watch never sits on the bed. If you sit, you sleep.", fact=8)
# ===== RULE 9 =====
s('RULE 9 OF 10', 'ELI', 'alert', 'night', "Rule nine. Write it down on paper.",
  lines=['RULE 9', 'WRITE IT', 'ON PAPER'], vfx='alert', sfx=['eas'], pre=.4)
st("Phones die. Networks die. Write down three phone numbers, one meeting place, and a map of your exits.", fact=9)
st("I don't know anyone's number by heart.", sp='DEV', fact=9)
st("That's exactly why.", fact=9, gap=.35)
s('RULE 9 OF 10', 'ELI', 'box', 'night', "Three numbers. One place. One map.", lines=['3 NUMBERS', '1 MEETING PLACE', '1 MAP'], pre=.2)
st("Keep the paper in your shoe. Bags get lost. Shoes stay on.", fact=9)
# ===== RULE 10 =====
s('RULE 10 OF 10', 'ELI', 'alert', 'night', "Rule ten. Know when to leave.",
  lines=['RULE 10', 'KNOW WHEN', 'TO LEAVE'], vfx='alert', sfx=['eas'], pre=.4)
st("Staying home is safe, until it isn't. No water, no power, and noise at the door? That's your sign. Don't wait for perfect.", fact=10)
st("How do I know it's time?", sp='DEV', fact=10)
st("If you're asking, it's already time.", fact=10, gap=.35)
st("The people who left on day two made it to the harbor. The ones who waited for a better moment are still waiting.", fact=10, gap=.5)
st("Pack one bag now. Water, light, paper, shoes. Leave everything else.", fact=10)
# ===== OUTRO =====
st("Quick recap. Phone down. Two exits. One leader. No shopping. One person. Water first. Stay quiet. Sleep in shifts. Paper. And leave in time.", fact=11)
st("I remembered four.", sp='DEV', fact=11)
st("Watch it again, Dev.", fact=11, gap=.35)
st("Which rule would you break first? Tell me in the comments.", fact=11)
st("Rule one. Obviously.", sp='DEV', fact=11)
st("Then lock your door.", fact=11, gap=1.4)
