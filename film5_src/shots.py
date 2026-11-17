S = []
def s(tag, sp, bg, mood, text, **o):
    S.append(dict(day=tag, sp=sp, bg=bg, pal=mood, text=text, o=o))

EL = 'eli@250'
DV = 'dev@520s<'
def st(text, sp='ELI', fact=11, talk=None, **o):
    # studio shot: Eli on the left, Dev on a beanbag
    t = talk or ('dev' if sp == 'DEV' else 'eli')
    s('', sp, 'studio', 'day', text, a=[EL, DV], talk=t, fact=fact, **o)

# ================= HOOK =================
s('','ELI','grid','day',"About one in three people on Earth is carrying a parasite that rewires brains.", sfx=['sting'], pre=.15, gap=.2)
s('','ELI','toxo','day',"Scientists have watched it make rats walk straight up to a cat.", stage='rat', sfx=['pop'], cam='in', gap=.25)
st("Why would you start a video with that?", sp='DEV', fact=11)
st("Because this video has ten zombie facts. Some are movie facts. Some are history.", fact=11, cam='in')
s('','ELI','teaser','day',"And some are real. And a little bit terrifying.", sfx=['whoosh'], gap=.2)
st("Number one is inside about a third of the people watching this. I will show you exactly what it is.", fact=11)
st("I'm not scared. Keep going.", sp='DEV', fact=11, gap=.3)
s('','ELI','title','night',"Stay to the end. Here we go.", lines=['10 ZOMBIE','FACTS'], sfx=['boom'], gap=.35)

# ================= FACT 10 =================
T10 = 'FACT 10 · MOVIES'
s(T10,'ELI','film68','day',"Number ten. The most famous zombie movie ever made is Night of the Living Dead.", mode='frame', num=10, numtitle='THE WORD NOBODY SAID', sfx=['boom'], pre=.3, shake=1)
s(T10,'ELI','film68','day',"And in the whole movie, nobody ever says the word zombie. Not once.", mode='counter', sfx=['pop'], cam='in')
s(T10,'ELI','film68','day',"The monsters are called ghouls. Fans started calling them zombies later.", mode='frame')
st("So the most famous zombie movie has no zombies?", sp='DEV', fact=10)
st("Technically, it has ghouls.", fact=10, gap=.3)

# ================= FACT 9 =================
T9 = 'FACT 9 · MOVIES'
s(T9,'ELI','brains','day',"Number nine. Zombies eat brains, right? That comes from a movie too.", num=9, numtitle='BRAAAINS', sfx=['boom'], pre=.3, a=['zpax@900<'])
s(T9,'ELI','brains','day',"A silly one, from nineteen eighty five. The Return of the Living Dead.", a=['zpax@900<'], cam='in')
s(T9,'ZOMBIE','brains','day',"Braaaains.", a=['zpax@900<'], bub=1, vfx='mimic', sfx=['growl'], talk='zpax', gap=.3)
s(T9,'ELI','brains','day',"In that movie, a zombie explains that eating brains stops the pain of being dead.", a=['zpax@900<'])
s(T9,'ELI','film68','day',"Before that, movie zombies just ate whatever they could grab.", mode='frame')
st("So one joke movie decided what every zombie eats.", sp='DEV', fact=9)
st("For forty years.", fact=9, gap=.3)

# ================= FACT 8 =================
T8 = 'FACT 8 · LAW'
s(T8,'ELI','law','day',"Number eight. In Haiti, making a zombie is a crime.", num=8, numtitle='ILLEGAL IN HAITI', sfx=['gavel','boom'], pre=.3, shake=1)
s(T8,'ELI','law','day',"Article two forty six of the Haitian penal code covers it.", sfx=['pop'])
s(T8,'ELI','law','day',"If someone uses a substance to make a person look dead, and then buries them, it counts as murder.", cam='in')
s(T8,'ELI','law','day',"The law never even says the word zombie. But everyone knows what it means.")
st("How old is that law?", sp='DEV', fact=8)
st("Almost two hundred years.", fact=8, gap=.3)

# ================= FACT 7 =================
T7 = 'FACT 7 · MYSTERY'
s(T7,'ELI','puffer','day',"Number seven. In nineteen sixty two, a man named Clairvius Narcisse was declared dead. His family buried him.", mode='dead', num=7, numtitle='THE MAN WHO CAME BACK', sfx=['boom'], pre=.3)
s(T7,'ELI','puffer','day',"Eighteen years later, in nineteen eighty, he walked back into his village. And his family said, that is him.", mode='back', cam='in', sfx=['chime'])
s(T7,'ELI','puffer','day',"He said he had been awake the whole time, unable to move.", mode='awake')
s(T7,'ELI','puffer','day',"And that afterward, he was forced to work on a farm.", mode='awake', cam='in')
s(T7,'ELI','puffer','day',"Years later, a Harvard researcher named Wade Davis suggested an explanation.", mode='fish', sfx=['pop'])
s(T7,'ELI','puffer','day',"A powder made with pufferfish poison, that could make a person look dead.", mode='fish')
s(T7,'ELI','puffer','day',"Most scientists say the evidence is weak. The mystery is still open.", mode='fish', stamp=1, sfx=['pop'])
st("I am never eating pufferfish.", sp='DEV', fact=7)
st("You never were.", fact=7, gap=.3)

# ================= FACT 6 =================
T6 = 'FACT 6 · HISTORY'
s(T6,'ELI','cane','day',"Number six. This one is not funny, and I am not going to make it funny.", num=6, numtitle='THE FIRST ZOMBIE', sfx=['boom'], pre=.3)
s(T6,'ELI','cane','day',"The word zombie comes from Haiti. Historians link the legend to slavery.", word=1)
s(T6,'ELI','cane','day',"The first zombie was not a monster.", word=1, cam='in')
s(T6,'ELI','cane','day',"It was a person who had lost their will, and was forced to work forever.", word=1)
s(T6,'ELI','cane','day',"For enslaved people, death was the only escape.", word=1, dusk=1, cam='in')
s(T6,'ELI','cane','day',"The zombie was the fear that even death would not set you free.", word=1, dusk=1)
s(T6,'ELI','cane','day',"Then the story traveled to America. And somewhere along the way, the victim became the monster.", word=1, dusk=1, cam='out')
st("I did not know that.", sp='DEV', fact=6, gap=.6)

# ================= FACT 5 =================
T5 = 'FACT 5 · GOVERNMENT'
s(T5,'ELI','memo','day',"Number five. The American government once published a guide called Preparedness One Oh One: Zombie Apocalypse.", num=5, numtitle='THE GOVERNMENT GUIDE', sfx=['boom'], pre=.3)
s(T5,'ELI','memo','day',"It was real. The Centers for Disease Control put it on their blog in two thousand eleven.", cam='in')
s(T5,'ELI','memo','day',"Pack water. Pack food. Pack medicine. Keep your documents safe.", sfx=['tick','tick'])
s(T5,'ELI','memo','day',"It was a trick. If you are ready for zombies, you are ready for anything.", mode='twist', sfx=['pop'])
st("A government agency tricked us into being prepared.", sp='DEV', fact=5)
st("And it worked. We are halfway there. Number one is still waiting.", fact=5, cam='in')

# ================= FACT 4 =================
T4 = 'FACT 4 · SCIENCE'
s(T4,'ELI','graph','day',"Number four. In two thousand nine, Canadian mathematicians asked a serious question.", num=4, numtitle='THE MATH', sfx=['boom'], pre=.3)
s(T4,'ELI','graph','day',"What would really happen in a zombie outbreak?", cam='in')
s(T4,'ELI','graph','day',"They built a model, like the ones used for real diseases. The answer was bad.")
s(T4,'ELI','graph','day',"If humans do not react fast, the zombies win. And civilization collapses.", sfx=['sting'], shake=1)
s(T4,'ELI','graph','day',"The only way to win? Hit it early, and hit it hard.", mode='fast', sfx=['chime'])
st("So every movie character who hesitates on day one...", sp='DEV', fact=4)
st("Doomed. Mathematically.", fact=4, gap=.3)

# ================= FACT 3 =================
T3 = 'FACT 3 · REAL ZOMBIE'
s(T3,'ELI','wasp','day',"Number three. Now we leave the movies, because zombies are real.", mode='intro', num=3, numtitle='THE LEASH', sfx=['boom'], pre=.3)
s(T3,'ELI','wasp','day',"This is the emerald cockroach wasp.", mode='intro', cam='in')
s(T3,'ELI','wasp','day',"It stings a cockroach twice. The second sting goes straight into the brain.", mode='sting', sfx=['whoosh','zap'])
s(T3,'ELI','wasp','day',"The cockroach can still walk. It just stops trying to escape.", mode='sting2')
s(T3,'ELI','wasp','day',"Then the wasp leads it by the antenna, like a dog on a leash. Into a burrow.", mode='lead', cam='in')
s(T3,'ELI','wasp','day',"It lays an egg on the cockroach.", mode='egg')
s(T3,'ELI','wasp','day',"And when the baby wasp hatches, it eats the cockroach. While it is still alive.", mode='egg2', sfx=['sting'])
st("I would like to stop the video now.", sp='DEV', fact=3)
st("Number two is worse.", fact=3, gap=.3, sfx=['sting'])

# ================= FACT 2 =================
T2 = 'FACT 2 · REAL ZOMBIE'
s(T2,'ELI','ant','day',"Number two. In tropical forests, a fungus turns ants into walking puppets.", mode='climb', num=2, numtitle='THE PUPPET FUNGUS', sfx=['boom'], pre=.3)
s(T2,'ELI','ant','day',"A spore lands on an ant. It leaves its colony, and climbs a plant.", mode='climb', cam='in')
s(T2,'ELI','ant','day',"At exactly the right height, it bites a leaf, and holds on. Right around noon. And then it dies.", mode='bite', sfx=['pop'])
s(T2,'ELI','ant','day',"A stalk grows out of its head, and rains spores on the ants below.", mode='grow')
s(T2,'ELI','ant','day',"Scientists expected the fungus to control the ant's brain.", mode='muscle0', cam='in')
s(T2,'ELI','ant','day',"Then they looked closer. The fungus mostly leaves the brain alone. It takes over the muscles.", mode='muscle', sfx=['sting'])
st("A fungus is driving an ant like a remote control car.", sp='DEV', fact=2)
st("Pretty much.", fact=2, gap=.3)

# ================= FACT 1 =================
T1 = 'FACT 1 · INSIDE YOU'
s(T1,'ELI','toxo','day',"Number one. Remember what I said at the start?", stage='rat', num=1, numtitle='INSIDE YOUR HEAD', sfx=['boom'], pre=.3, shake=1)
s(T1,'ELI','toxo','day',"There is a tiny parasite called Toxoplasma. It can only finish its life cycle inside a cat.", stage='cat', cam='in')
s(T1,'ELI','toxo','day',"So it does something clever to other animals.", stage='rat')
s(T1,'ELI','toxo','day',"Infected rats stop being afraid of the smell of cats. Some even seem drawn to it.", stage='rat', sfx=['pop'], cam='in')
s(T1,'ELI','toxo','day',"And here is the part I promised. Scientists estimate that about one in three people carries it.", stage='third', sfx=['sting'])
s(T1,'ELI','toxo','day',"Mostly from cats, or undercooked meat.", stage='third')
s(T1,'ELI','toxo','day',"It forms tiny cysts, in muscle, and in the brain.", stage='brain', cam='in')
s(T1,'ELI','toxo','day',"For most healthy people, it does nothing noticeable.", stage='brain')
s(T1,'ELI','toxo','day',"Scientists are still arguing about whether it changes human behavior at all.", stage='brain', cam='in')
st("So I might be a zombie?", sp='DEV', fact=1)
st("Dev. You were always like this.", fact=1, gap=.5, sfx=['pop'])
st("So the next time someone says zombies are not real, tell them they are.", fact=0, cam='in')
st("They are just very small.", fact=0, gap=.7)

# ================= OUTRO =================
st("That is all ten. Which one surprised you the most? Tell me in the comments.", fact=0)
st("Comment number three. Then lock your door.", sp='DEV', fact=0, gap=.3)
s('','ELI','studio','day',"And if you want to know what happened the night the emergency alerts started, watch this next.", a=[EL, DV], talk='eli', fact=0, end=1, cam='in')
s('','ELI','title','night',"Thanks for watching. See you in the next one.", lines=['10 ZOMBIE','FACTS'], gap=1.4)
