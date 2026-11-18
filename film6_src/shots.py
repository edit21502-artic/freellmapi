S = []
def s(tag, sp, bg, mood, text, **o):
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))

EL = 'eli@250'
DV = 'dev@520s<'
def st(text, sp='ELI', fact=6, **o):
    s('', sp, 'studio', 'day', text, a=[EL, DV], talk=('dev' if sp == 'DEV' else 'eli'), fact=fact, **o)

# ===== HOOK: the first 5 seconds decide everything =====
s('', 'ELI', 'alert', 'night', "The first rule of a zombie outbreak is not run. It's this: stop checking your phone.",
  lines=['STOP CHECKING', 'YOUR PHONE'], vfx='alert', sfx=['eas'], pre=.2, gap=.35)
st("I'm Eli. I learned five rules the hard way. Skip one, and you become the next alert.", fact=6)
st("I'll skip the phone rule.", sp='DEV', fact=6)
st("Then you're the story everyone tells tomorrow.", fact=6, gap=.35)

# ===== RULE 1 =====
s('RULE 1 OF 5', 'ELI', 'alert', 'night', "Rule one. Stop checking your phone. Every alert arrives late. Every rumor arrives first.",
  lines=['RULE 1', 'STOP CHECKING', 'YOUR PHONE'], vfx='alert', sfx=['eas'], pre=.4)
st("By the time the official alert pings, the street is already full.", fact=1)
s('RULE 1 OF 5', 'ELI', 'box', 'night', "Check once. Then put it down.", lines=['CHECK ONCE.', 'THEN PUT IT DOWN.'], pre=.2)
st("But I need my feed.", sp='DEV', fact=1)
st("Your feed is where the rumors live.", fact=1, gap=.35)

st("At eight forty, a rumor said the bridge was closed. Half the street drove toward it. The official alert came at nine fifteen.", fact=1)
# ===== RULE 2 =====
s('RULE 2 OF 5', 'ELI', 'alert', 'night', "Rule two. Know two ways out. Before anything happens.",
  lines=['RULE 2', 'TWO WAYS OUT'], vfx='alert', sfx=['eas'], pre=.4)
st("Count the doors on your street. Walk them in the dark, once.", fact=2)
st("In the dark?", sp='DEV', fact=2)
st("They don't wait for daylight.", fact=2, gap=.35)

st("On day two, the stairwell in my building got blocked. The people who knew a second exit got out. Everyone else waited for the elevator.", fact=2)
# ===== RULE 3 =====
s('RULE 3 OF 5', 'ELI', 'alert', 'night', "Rule three. Pick one leader before the panic starts.",
  lines=['RULE 3', 'PICK ONE LEADER'], vfx='alert', sfx=['eas'], pre=.4)
st("When a crowd panics, nobody leads. Everybody shouts. Decide now who gets the final word.", fact=3)
st("Okay. Eli is the leader.", sp='DEV', fact=3)
st("Not me. Pick someone calm.", fact=3, gap=.35)

st("In my building, the group that wanted a vote on everything argued at the door for an hour. The group with one leader was in the car in four minutes.", fact=3)
# ===== RULE 4 =====
s('RULE 4 OF 5', 'ELI', 'alert', 'night', "Rule four. Don't go shopping in the first hour.",
  lines=['RULE 4', 'NO SHOPPING', 'IN THE FIRST HOUR'], vfx='alert', sfx=['eas'], pre=.4)
st("Everyone rushes to the store at once. That is where the crowd gathers. Buy water once, then go home.", fact=4)
st("I already bought forty energy drinks.", sp='DEV', fact=4)
st("Then you're fine. For a day.", fact=4, gap=.35)

st("At nine in the morning, the store had two hundred people and no water left. It was empty in twelve minutes.", fact=4)
# ===== RULE 5 =====
s('RULE 5 OF 5', 'ELI', 'alert', 'night', "Rule five. Keep one person you would open the door for.",
  lines=['RULE 5', 'ONE PERSON', 'YOU TRUST'], vfx='alert', sfx=['eas'], pre=.4)
st("Zombies don't make you lonely. Panic does. Keep one person close, and agree on a knock.", fact=5)
st("You'd open the door for me?", sp='DEV', fact=5)
st("Only if you knock like a human.", fact=5, gap=.35)

st("When the power went out, the people who talked through the door made it. The ones who stayed silent were alone.", fact=5)
# ===== OUTRO =====
st("Which rule would you break first? Tell me in the comments.", fact=0)
st("Rule one. Obviously.", sp='DEV', fact=0)
st("Then lock your door.", fact=0, gap=1.4)
