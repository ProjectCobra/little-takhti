const PAGES={
maths:[
 {title:'Count and Write',topic:'Numbers to 20',instr:'Count the shapes in each box. Write the number.',obj:'Count objects up to 20 and write the matching numeral.',blocks:[
  {t:'count',cols:2,items:[[7,'star'],[12,'circle'],[9,'heart'],[15,'square'],[18,'star'],[20,'circle'],[11,'heart'],[16,'tri']]}]},
 {title:'Missing Numbers',topic:'Numbers to 20',instr:'Fill in the missing numbers on each number track.',obj:'Order numbers to 20 forwards, backwards and in twos.',blocks:[
  {t:'boxes',h:'A. Count forwards.',rows:['1|2|{{3}}|4|5|{{6}}|7|{{8}}|9|10','11|{{12}}|13|14|{{15}}|16|17|{{18}}|19|{{20}}']},
  {t:'boxes',h:'B. Count backwards.',rows:['20|19|{{18}}|17|16|{{15}}|14|{{13}}|12|11','10|{{9}}|8|{{7}}|6|5|{{4}}|3|{{2}}|1']},
  {t:'boxes',h:'C. Count in twos.',rows:['2|4|{{6}}|8|{{10}}|12|{{14}}|16|{{18}}|20']},
  {t:'fill',h:'D. Write the numbers in words.',cols:2,items:['3 = {{three}}','7 = {{seven}}','10 = {{ten}}','12 = {{twelve}}']}]},
 {title:'Before, After, Between',topic:'Numbers to 20',instr:'Write the number that comes just before and just after.',obj:'Find the number before, after and between numbers to 20; compare two numbers.',blocks:[
  {t:'boxes',h:'A. Before and after.',cols:3,rows:['{{4}}|5|{{6}}','{{11}}|12|{{13}}','{{16}}|17|{{18}}','{{9}}|10|{{11}}','{{13}}|14|{{15}}','{{18}}|19|{{20}}']},
  {t:'choice',h:'B. Circle the bigger number.',items:[['14 or 11',['14','11'],0],['9 or 16',['9','16'],1],['20 or 18',['20','18'],0],['7 or 17',['7','17'],1]]},
  {t:'choice',h:'C. Circle the smaller number.',items:[['13 or 15',['13','15'],0],['19 or 10',['19','10'],1],['6 or 8',['6','8'],0]]}]},
 {title:'Number Bonds to 10',topic:'Number bonds',instr:'Two parts make the whole. Write the missing number.',obj:'Recall number bonds to 10.',blocks:[
  {t:'bond',items:[[10,6,4,2],[10,3,7,1],[10,8,2,2],[10,5,5,1],[10,1,9,2],[10,7,3,1]]},
  {t:'fill',h:'Complete the number sentences.',cols:2,items:['4 + {{6}} = 10','{{2}} + 8 = 10','9 + {{1}} = 10','{{5}} + 5 = 10','3 + {{7}} = 10','{{10}} + 0 = 10']}]},
 {title:'Number Bonds to 20',topic:'Number bonds',instr:'Write the missing part or whole.',obj:'Use number bonds to make 20 and other numbers up to 20.',blocks:[
  {t:'bond',items:[[20,12,8,2],[20,15,5,1],[20,10,10,2],[20,17,3,1],[14,9,5,0],[16,8,8,1]]},
  {t:'fill',h:'Make 20.',cols:2,items:['11 + {{9}} = 20','{{6}} + 14 = 20','13 + {{7}} = 20','{{2}} + 18 = 20']}]},
 {title:'Adding Within 10',topic:'Addition',instr:'Add the pictures, then solve the sums.',obj:'Add two numbers with a total up to 10.',blocks:[
  {t:'picsum',h:'A. Count and add.',items:[[3,2,'circle'],[4,3,'star'],[5,4,'heart']]},
  {t:'fill',h:'B. Solve.',cols:3,items:['3 + 4 = {{7}}','5 + 2 = {{7}}','6 + 3 = {{9}}','1 + 8 = {{9}}','4 + 4 = {{8}}','2 + 7 = {{9}}','5 + 5 = {{10}}','0 + 6 = {{6}}','7 + 1 = {{8}}']}]},
 {title:'Adding Within 20',topic:'Addition',instr:'Use the number line to help you add.',obj:'Add within 20 and solve simple word problems.',blocks:[
  {t:'numline'},
  {t:'fill',h:'A. Solve.',cols:3,items:['10 + 5 = {{15}}','12 + 3 = {{15}}','8 + 6 = {{14}}','9 + 9 = {{18}}','11 + 7 = {{18}}','13 + 4 = {{17}}','7 + 7 = {{14}}','15 + 5 = {{20}}','6 + 8 = {{14}}']},
  {t:'fill',h:'B. Word problems.',items:['Ali has 8 marbles. Sara gives him 5 more. How many marbles does Ali have now? {{13}}','There are 9 mangoes in a basket and 6 on the table. How many mangoes are there in all? {{15}}']}]},
 {title:'Taking Away Within 10',topic:'Subtraction',instr:'Cross out the shapes to take away. Write how many are left.',obj:'Subtract within 10 by taking away objects.',blocks:[
  {t:'picsub',h:'A. Cross out and write.',items:[[7,3,'circle'],[9,4,'star'],[6,5,'heart']]},
  {t:'fill',h:'B. Solve.',cols:3,items:['9 − 4 = {{5}}','6 − 2 = {{4}}','10 − 7 = {{3}}','8 − 8 = {{0}}','5 − 1 = {{4}}','10 − 5 = {{5}}']}]},
 {title:'Subtracting Within 20',topic:'Subtraction',instr:'Solve the subtraction sums and word problems.',obj:'Subtract within 20 and solve take away word problems.',blocks:[
  {t:'fill',h:'A. Solve.',cols:3,items:['15 − 5 = {{10}}','18 − 6 = {{12}}','20 − 10 = {{10}}','14 − 3 = {{11}}','17 − 9 = {{8}}','12 − 4 = {{8}}','19 − 7 = {{12}}','16 − 8 = {{8}}','13 − 6 = {{7}}']},
  {t:'fill',h:'B. Word problems.',items:['There are 16 birds on a tree. 7 fly away. How many birds are left? {{9}}','Hina had 20 rupees. She spent 8 rupees on a pencil. How much money is left? {{12}} rupees','A box has 14 crayons. 5 are broken. How many crayons are not broken? {{9}}']}]},
 {title:'The 2 Times Table',topic:'2 times table',instr:'Count the groups of 2, then complete the table.',obj:'Count in twos and recall the 2 times table to 10 × 2.',blocks:[
  {t:'groups',h:'A. How many groups? How many in all?',items:[3,5,4]},
  {t:'fill',h:'B. Complete the table.',cols:2,items:['1 × 2 = {{2}}','6 × 2 = {{12}}','2 × 2 = {{4}}','7 × 2 = {{14}}','3 × 2 = {{6}}','8 × 2 = {{16}}','4 × 2 = {{8}}','9 × 2 = {{18}}','5 × 2 = {{10}}','10 × 2 = {{20}}']}]}
],
english:[
 {title:'Missing Letters',topic:'Alphabet',instr:'Write the missing capital and small letters.',obj:'Write capital and small letters in alphabetical order.',blocks:[
  {t:'boxes',h:'A. Capital letters.',rows:['A|B|{{C}}|D|{{E}}|F|G','{{H}}|I|J|{{K}}|L|M|{{N}}','O|{{P}}|Q|R|{{S}}|T|{{U}}','V|{{W}}|X|{{Y}}|Z']},
  {t:'boxes',h:'B. Small letters.',rows:['a|{{b}}|c|d|{{e}}|f|{{g}}','h|{{i}}|j|k|{{l}}|m|n','{{o}}|p|q|{{r}}|s|t|{{u}}']}]},
 {title:'Capital and Small',topic:'Alphabet',instr:'Match each capital letter to its small letter.',obj:'Match capital letters to their small letters.',blocks:[
  {t:'match',h:'A. Write the letter of the match in the box.',left:['A','G','M','R','D','Q','B','H'],right:['a','g','m','r','d','q','b','h']},
  {t:'fill',h:'B. Write the small letter.',cols:3,items:['T → {{t}}','E → {{e}}','N → {{n}}','F → {{f}}','L → {{l}}','Y → {{y}}']}]},
 {title:'Beginning Sounds',topic:'Alphabet',instr:'Say each word aloud. Listen for the first sound.',obj:'Hear and identify the beginning sound of a word.',blocks:[
  {t:'choice',h:'A. Circle the word that starts with the letter.',items:[['Starts with b',['ball','cat','sun'],0],['Starts with m',['fish','mango','egg'],1],['Starts with k',['kite','tree','dog'],0],['Starts with s',['hat','pen','sun'],2],['Starts with r',['rain','log','box'],0],['Starts with g',['jar','goat','van'],1]]},
  {t:'fill',h:'B. Write the first letter.',cols:3,items:['{{c}}up (c / p)','{{d}}uck (b / d)','{{p}}en (p / q)','{{h}}en (h / n)','{{t}}op (t / f)','{{z}}ip (s / z)']}]},
 {title:'Vowel Hunt',topic:'Alphabet',instr:'The vowels are a, e, i, o and u.',obj:'Recognise the five vowels and use them in short words.',blocks:[
  {t:'bank',items:['a','e','i','o','u']},
  {t:'fill',h:'A. Fill in the missing vowel.',cols:3,items:['c{{a}}t','p{{e}}n','p{{i}}g','d{{o}}g','s{{u}}n','b{{e}}d','f{{i}}sh','b{{u}}s','h{{a}}t','t{{o}}p','r{{e}}d','c{{u}}p']},
  {t:'choice',h:'B. Circle the vowel.',items:[['m   o   t',['m','o','t'],1],['e   s   p',['e','s','p'],0],['r   l   u',['r','l','u'],2],['k   i   n',['k','i','n'],1]]}]},
 {title:'My Classroom',topic:'Vocabulary',instr:'Read the words in the box. Use them to finish each sentence.',obj:'Name common classroom objects and use them in sentences.',blocks:[
  {t:'bank',items:['chair','board','bag','pencil','clock','eraser','book','desk']},
  {t:'fill',h:'Fill in the blanks.',items:['I sit on a {{chair}}.','The teacher writes on the {{board}}.','I keep my books in my {{bag}}.','I write with a {{pencil}}.','The {{clock}} tells the time.','I rub out mistakes with an {{eraser}}.','I read a {{book}}.','I put my copy on my {{desk}}.']}]},
 {title:'Opposites',topic:'Vocabulary',instr:'Opposites mean very different things, like big and small.',obj:'Match common words to their opposites.',blocks:[
  {t:'match',h:'A. Write the letter of the opposite in the box.',left:['big','hot','up','happy','day','fast','open','old'],right:['small','cold','down','sad','night','slow','shut','new']},
  {t:'fill',h:'B. Write the opposite.',cols:2,items:['wet → {{dry}}','in → {{out}}','tall → {{short}}','full → {{empty}}']}]},
 {title:'Sort the Words',topic:'Vocabulary',instr:'Read each word. Write it in the right group.',obj:'Sort words into groups by meaning.',blocks:[
  {t:'sort',cats:['Fruit','Colour','Animal'],words:['mango','red','cat','banana','blue','goat','apple','green','cow','guava','yellow','parrot'],ans:[0,1,2,0,1,2,0,1,2,0,1,2]}]},
 {title:'Adding -ing',topic:'-ing verbs',instr:'Add -ing to each action word.',obj:'Add the -ing ending to action words.',blocks:[
  {t:'note',text:'Look: play + ing = <b>playing</b>'},
  {t:'fill',h:'A. Add -ing.',cols:2,items:['play → {{playing}}','jump → {{jumping}}','read → {{reading}}','eat → {{eating}}','sing → {{singing}}','sleep → {{sleeping}}','draw → {{drawing}}','cook → {{cooking}}','walk → {{walking}}','kick → {{kicking}}']},
  {t:'fill',h:'B. Finish the sentence with an -ing word.',items:['The boy is {{kicking}} the ball. (kick)','We are {{reading}} a story. (read)','The birds are {{singing}}. (sing)']}]},
 {title:'Choose the -ing Word',topic:'-ing verbs',instr:'Circle the word that fits the sentence.',obj:'Choose the correct -ing form to complete a sentence.',blocks:[
  {t:'choice',h:'A. Circle the right word.',items:[['The baby is ______.',['sleeping','sleep'],0],['Ahmed is ______ a book.',['read','reading'],1],['The birds are ______.',['singing','sings'],0],['We are ______ cricket.',['play','playing'],1],['Ammi is ______ roti.',['cooking','cook'],0],['The dog is ______ fast.',['run','running'],1]]},
  {t:'write',h:'B. What are you doing now?',items:['I am ________________________.']}]},
 {title:'Read and Answer',topic:'Vocabulary',instr:'Read the story. Then answer the questions.',obj:'Read a short story and answer simple questions about it.',blocks:[
  {t:'passage',text:'It is Sunday. Zara and her brother Bilal are in the park. Zara is flying a red kite. Bilal is eating a mango. Their dog Moti is running on the grass. The sun is shining.'},
  {t:'fill',h:'A. Fill in the blanks.',items:['Zara is flying a {{red}} kite.','Bilal is eating a {{mango}}.','The dog’s name is {{Moti}}.','Today is {{Sunday}}.']},
  {t:'choice',h:'B. Circle the answer.',items:[['Where are Zara and Bilal?',['park','school','shop'],0],['Who is running?',['Zara','Moti','Bilal'],1]]},
  {t:'fill',h:'C. Find two -ing words in the story.',items:['{{flying, eating, running or shining}}']}]}
],
science:[
 {title:'We Need Energy',topic:'Energy',instr:'Energy makes things move, grow, work and change.',obj:'Understand that energy is needed to move, grow and work.',blocks:[
  {t:'choice',h:'A. Does it use energy? Circle Yes or No.',opts:['Yes','No'],items:[['A fan going round',0],['A rock lying on the ground',1],['A child playing',0],['A car moving on the road',0],['A book on a shelf',1],['A plant growing',0],['A bulb giving light',0],['A sleeping pillow on the bed',1]]},
  {t:'fill',h:'B. Fill in the blank.',items:['Energy makes things {{move}} and grow.']}]},
 {title:'Energy From Food',topic:'Energy',instr:'Food gives our body energy to work and play.',obj:'Know that food gives us energy and some foods are healthier than others.',blocks:[
  {t:'sort',h:'A. Sort the food.',cats:['Eat every day','Eat only a little'],words:['banana','roti','chips','milk','eggs','sweets','daal','fizzy drink'],ans:[0,0,1,0,0,1,0,1]},
  {t:'bank',items:['energy','sun','play']},
  {t:'fill',h:'B. Use the words in the box.',items:['Food gives us {{energy}}.','We need energy to run and {{play}}.','Plants get energy from the {{sun}}.']}]},
 {title:'Hot or Cold?',topic:'Heat',instr:'Is it hot or cold? Write each word in the right box.',obj:'Sort everyday things as hot or cold.',blocks:[
  {t:'sort',cats:['Hot','Cold'],words:['tea','ice cream','the sun','ice','a fire','snow','soup','water from the fridge'],ans:[0,1,0,1,0,1,0,1]},
  {t:'fill',h:'Fill in the blank.',items:['In winter we wear {{warm}} clothes.','In summer we drink {{cold}} water.']}]},
 {title:'Sources of Heat',topic:'Heat',instr:'A source of heat is something that gives heat.',obj:'Name sources of heat and stay safe around them.',blocks:[
  {t:'choice',h:'A. Circle the one that gives heat.',items:[['',['sun','moon'],0],['',['stove','table'],0],['',['ice','fire'],1],['',['heater','fridge'],0],['',['pencil','iron'],1]]},
  {t:'bank',items:['warm','touch','stove']},
  {t:'fill',h:'B. Use the words in the box.',items:['Rubbing our hands makes them {{warm}}.','We cook food on a {{stove}}.','We should not {{touch}} hot things.']}]},
 {title:'Heat Changes Things',topic:'Heat',instr:'Heat can melt, cook and dry things.',obj:'Describe simple changes caused by heating.',blocks:[
  {t:'choice',h:'A. True or false? Circle.',opts:['True','False'],items:[['Ice melts into water when it gets warm.',0],['Butter melts in the hot sun.',0],['Water turns into ice in a hot pan.',1],['Heat cooks roti on a tawa.',0],['Chocolate gets harder in the hot sun.',1],['Wet clothes dry in the sun.',0]]},
  {t:'fill',h:'B. Complete.',cols:2,items:['ice + heat → {{water}}','dough + heat → {{roti}}']}]},
 {title:'Sources of Light',topic:'Light',instr:'Some light comes from nature. Some light is made by people.',obj:'Sort sources of light into natural and made by people.',blocks:[
  {t:'sort',cats:['Natural light','Made by people'],words:['the sun','a torch','stars','a bulb','lightning','a candle','a firefly','a lamp'],ans:[0,1,0,1,0,1,0,1]},
  {t:'write',h:'Name one source of light in your home.',items:['________________________']}]},
 {title:'Light and Shadow',topic:'Light',instr:'A shadow forms when something blocks the light.',obj:'Know that we need light to see and that blocked light makes a shadow.',blocks:[
  {t:'bank',items:['light','shadow','dark','sun']},
  {t:'fill',h:'A. Use the words in the box.',items:['We need {{light}} to see.','When I block the light, I make a {{shadow}}.','At night it is {{dark}}.','The {{sun}} gives us light in the day.']},
  {t:'choice',h:'B. True or false? Circle.',opts:['True','False'],items:[['The moon makes its own light.',1],['We can see in total darkness.',1],['The sun is our biggest source of light.',0],['A shadow is dark.',0]]}]},
 {title:'Loud or Soft?',topic:'Sound',instr:'Some sounds are loud. Some sounds are soft.',obj:'Sort sounds as loud or soft.',blocks:[
  {t:'sort',cats:['Loud','Soft'],words:['a drum','a whisper','a truck horn','a ticking clock','thunder','a cat purring','a school bell','leaves rustling'],ans:[0,1,0,1,0,1,0,1]},
  {t:'write',h:'Which sound do you like best? Why?',items:['________________________']}]},
 {title:'Sounds Around Us',topic:'Sound',instr:'Animals and things make different sounds.',obj:'Match animals to their sounds and know we hear with our ears.',blocks:[
  {t:'match',h:'A. Write the letter of the sound in the box.',left:['cow','cat','dog','duck','sheep','crow'],right:['moo','meow','woof','quack','baa','caw']},
  {t:'fill',h:'B. Fill in the blanks.',items:['We hear sounds with our {{ears}}.','Sound is made when things {{shake}}. (shake / sleep)']}]},
 {title:'Science Review',topic:'Sound',instr:'Show what you know about energy, heat, light and sound.',obj:'Review energy, heat, light and sound.',blocks:[
  {t:'bank',items:['energy','heat','light','sound','ears','sun']},
  {t:'fill',h:'A. Use the words in the box.',items:['The {{sun}} gives us heat and light.','We need {{light}} to see colours.','A drum makes a loud {{sound}}.','Food gives us {{energy}}.','A heater gives {{heat}}.','We hear with our {{ears}}.']},
  {t:'choice',h:'B. Circle the answer.',items:[['Which one makes a sound?',['bell','stone','leaf'],0],['Which one gives light?',['spoon','torch','cup'],1]]}]}
],
social:[
 {title:'My Family',topic:'Family',instr:'Draw your family. Then finish the sentences.',obj:'Talk and write about members of my own family.',blocks:[
  {t:'draw',boxes:[['Draw your family here.',360]]},
  {t:'write',h:'Finish the sentences.',items:['There are ____ people in my family.','My family lives in ____________.','I love my family because ____________.']}]},
 {title:'Family Words',topic:'Family',instr:'Match each English word to the word we say at home.',obj:'Name family members in English and Urdu.',blocks:[
  {t:'match',h:'A. Write the letter in the box.',left:['mother','father','brother','sister','grandmother','grandfather'],right:['Ammi','Abbu','Bhai','Behan','Dadi / Nani','Dada / Nana']},
  {t:'bank',items:['Dadi','Nana','Chacha','Khala']},
  {t:'fill',h:'B. Use the words in the box.',items:['My father’s mother is my {{Dadi}}.','My mother’s father is my {{Nana}}.','My father’s brother is my {{Chacha}}.','My mother’s sister is my {{Khala}}.']}]},
 {title:'Big and Small Families',topic:'Family',instr:'Read about two families. Then answer.',obj:'Compare family sizes and know what a joint family is.',blocks:[
  {t:'passage',text:'Hamza lives with his Ammi, his Abbu, his sister and his Dada and Dadi. Ayesha lives with her Ammi, her Abbu and her baby brother.'},
  {t:'fill',h:'A. Fill in the blanks.',items:['Hamza’s family has {{6}} people.','Ayesha’s family has {{4}} people.']},
  {t:'choice',h:'B. Circle the answer.',items:[['Whose family is bigger?',['Hamza’s','Ayesha’s'],0],['A family with grandparents living together is a…',['joint family','small family'],0]]},
  {t:'write',h:'C. Who lives in your home?',items:['________________________']}]},
 {title:'Helping at Home',topic:'Family',instr:'Is this a good way to help at home? Circle Yes or No.',obj:'Identify ways children can help their family.',blocks:[
  {t:'choice',opts:['Yes','No'],items:[['Making my bed',0],['Leaving toys on the floor',1],['Watering the plants',0],['Helping lay the dastarkhwan',0],['Throwing wrappers on the floor',1],['Putting my shoes in the rack',0],['Shouting when I am asked to help',1],['Folding my clothes',0]]},
  {t:'write',h:'One way I help at home is:',items:['________________________']}]},
 {title:'How Do They Feel?',topic:'Feelings',instr:'Read what happened. Match it to the feeling.',obj:'Name feelings and link them to everyday situations.',blocks:[
  {t:'match',faces:true,h:'Write the letter of the feeling in the box.',left:['It is my birthday today.','My new toy broke.','I heard thunder at night.','Someone took my pencil without asking.','We are going to the zoo tomorrow!','I won the running race.'],right:['happy','sad','scared','angry','excited','proud']}]},
 {title:'Feelings Faces',topic:'Feelings',instr:'Draw the faces. Then finish the sentences.',obj:'Express my own feelings in pictures and words.',blocks:[
  {t:'draw',grid:true,boxes:[['A happy face',200],['A sad face',200]]},
  {t:'write',h:'Finish the sentences.',items:['I feel happy when ____________.','I feel sad when ____________.','I feel scared when ____________.']}]},
 {title:'What Can I Do?',topic:'Feelings',instr:'Circle the kind and helpful choice.',obj:'Choose calm and kind ways to deal with feelings.',blocks:[
  {t:'choice',items:[['When I feel angry, I can…',['take deep breaths','hit someone'],0],['When my friend is sad, I can…',['laugh at them','ask what is wrong'],1],['When I feel scared, I can…',['tell a grown-up','hide and say nothing'],0],['When I make a mistake, I can…',['blame someone','say sorry and try again'],1],['When I feel lonely at break, I can…',['ask to join a game','sit and cry'],0],['When someone shares with me, I can…',['say thank you','grab more'],0]]},
  {t:'write',h:'What makes you feel calm?',items:['________________________']}]},
 {title:'House Rules',topic:'House rules',instr:'Is it a good house rule? Circle Yes or No.',obj:'Understand why homes have rules.',blocks:[
  {t:'choice',opts:['Yes','No'],items:[['Wash your hands before eating.',0],['Jump on the sofa.',1],['Say salaam to guests.',0],['Put things back where they belong.',0],['Shout at your brother or sister.',1],['Go to bed on time.',0],['Leave the tap running.',1],['Switch off the fan when you leave a room.',0]]},
  {t:'write',h:'One rule in my house is:',items:['________________________']}]},
 {title:'Safe at Home',topic:'House rules',instr:'Is it safe or not safe? Circle.',obj:'Recognise safe and unsafe actions at home and know emergency numbers.',blocks:[
  {t:'choice',opts:['Safe','Not safe'],items:[['Playing with matches',1],['Touching a switch with wet hands',1],['Taking medicine only from a grown-up',0],['Climbing on the kitchen counter',1],['Holding the railing on the stairs',0],['Opening the door to a stranger',1]]},
  {t:'fill',h:'In an emergency, ask a grown-up to call:',items:['Police: {{15}}','Rescue: {{1122}}']}]},
 {title:'Social Studies Review',topic:'House rules',instr:'Show what you know about family, feelings and rules.',obj:'Review family, feelings and house rules.',blocks:[
  {t:'bank',items:['family','feelings','rules','sorry','help']},
  {t:'fill',h:'A. Use the words in the box.',items:['The people who live with us and love us are our {{family}}.','Happy, sad and angry are {{feelings}}.','{{Rules}} keep us safe at home.','We say {{sorry}} when we make a mistake.','We {{help}} at home by tidying up.']},
  {t:'choice',h:'B. Circle the good manner.',items:[['',['saying thank you','grabbing food'],0],['',['pushing in line','waiting for my turn'],1]]}]}
],
urdu:[
 {title:'حروف کی چھوٹی اشکال',en:'Short forms of letters',topic:'چھوٹی اشکال',instr:'ہر حرف کی چھوٹی شکل لکھیں۔',obj:'Write the short (joining) form of Urdu letters.',blocks:[
  {t:'note',text:'دیکھیں:  ب  ←  بـ'},
  {t:'fill',nw:1,h:'الف۔ چھوٹی شکل لکھیں۔',cols:3,items:['ب ← {{بـ}}','ت ← {{تـ}}','ج ← {{جـ}}','س ← {{سـ}}','ک ← {{کـ}}','م ← {{مـ}}','ن ← {{نـ}}','ل ← {{لـ}}','ہ ← {{ہـ}}','ی ← {{یـ}}','ع ← {{عـ}}','ف ← {{فـ}}']}]},
 {title:'حروف جوڑ کر لفظ بنائیں',en:'Join letters to make words',topic:'چھوٹی اشکال',instr:'حروف کو جوڑیں اور پورا لفظ لکھیں۔',obj:'Join letters using short forms to write whole words.',blocks:[
  {t:'fill',nw:1,cols:2,items:['ب + ل + ی = {{بلی}}','ک + ت + ا + ب = {{کتاب}}','ق + ل + م = {{قلم}}','م + ک + ا + ن = {{مکان}}','ن + ل + ک + ا = {{نلکا}}','س + ب + ق = {{سبق}}','چ + م + چ = {{چمچ}}','ت + ت + ل + ی = {{تتلی}}','پ + ت + ن + گ = {{پتنگ}}','ش + ہ + د = {{شہد}}']}]},
 {title:'لفظ توڑ کر لکھیں',en:'Break words into letters',topic:'چھوٹی اشکال',instr:'ہر لفظ کو توڑ کر اس کے حروف لکھیں۔',obj:'Break words into separate letters.',blocks:[
  {t:'fill',nw:1,items:['بکری = {{ب + ک + ر + ی}}','مچھلی = {{م + چ + ھ + ل + ی}}','سیب = {{س + ی + ب}}','پتنگ = {{پ + ت + ن + گ}}','چڑیا = {{چ + ڑ + ی + ا}}','کیلا = {{ک + ی + ل + ا}}','بستہ = {{ب + س + ت + ہ}}']}]},
 {title:'شرارتی نو',en:'The naughty nine',topic:'شرارتی نو',instr:'شرارتی نو حروف اپنے بعد والے حرف سے نہیں ملتے۔',obj:'Recognise the nine letters that do not join to the next letter.',blocks:[
  {t:'circ',h:'الف۔ شرارتی نو حروف پر دائرہ لگائیں۔',items:['ا','ب','د','ج','ڈ','س','ذ','ر','م','ڑ','ک','ز','ل','ژ','ن','و','ف','ت'],correct:['ا','د','ڈ','ذ','ر','ڑ','ز','ژ','و']},
  {t:'fill',h:'ب۔ خالی جگہ پُر کریں۔',items:['شرارتی حروف کُل {{۹}} ہیں۔','یہ حروف اپنے {{بعد}} والے حرف سے نہیں ملتے۔']}]},
 {title:'شرارتی نو والے لفظ',en:'Words with the naughty nine',topic:'شرارتی نو',instr:'حروف جوڑ کر لفظ لکھیں اور شرارتی حرف پہچانیں۔',obj:'Write words that contain non-joining letters.',blocks:[
  {t:'fill',nw:1,h:'الف۔ حروف جوڑ کر لفظ بنائیں۔',cols:2,items:['د + ر + و + ا + ز + ہ = {{دروازہ}}','ا + ن + ا + ر = {{انار}}','گ + ھ + ر = {{گھر}}','ر + و + ٹ + ی = {{روٹی}}','د + و + د + ھ = {{دودھ}}','ب + ا + د + ل = {{بادل}}']},
  {t:'choice',h:'ب۔ اس لفظ میں شرارتی حرف پر دائرہ لگائیں۔',items:[['گھر',['گ','ر'],1],['کمرہ',['ر','م'],0],['بادل',['ب','د'],1],['مور',['م','و'],1]]}]},
 {title:'زبر، زیر، پیش',en:'Zabar, zer and pesh',topic:'مصوّتے',instr:'اعراب پہچانیں اور ان کی آواز بولیں۔',obj:'Recognise the short vowel marks zabar, zer and pesh.',blocks:[
  {t:'note',text:'بَ  =  زبر       بِ  =  زیر       بُ  =  پیش'},
  {t:'choice',h:'الف۔ اس حرف پر کون سا اعراب ہے؟ دائرہ لگائیں۔',items:[['دَ',['زبر','زیر','پیش'],0],['مِ',['زبر','زیر','پیش'],1],['گُ',['زبر','زیر','پیش'],2],['سَ',['زبر','زیر','پیش'],0],['تِ',['زبر','زیر','پیش'],1],['پُ',['زبر','زیر','پیش'],2]]}]},
 {title:'اعراب کے مطابق لفظ',en:'Sort words by vowel mark',topic:'مصوّتے',instr:'پہلے حرف کا اعراب دیکھیں اور لفظ صحیح خانے میں لکھیں۔',obj:'Sort words by the vowel mark on the first letter.',blocks:[
  {t:'sort',cats:['زبر','زیر','پیش'],words:['قَلَم','دِل','گُل','سَبَق','کِتاب','مُرغی','بَطَخ','مِرچ','پُل'],ans:[0,1,2,0,1,2,0,1,2]}]},
 {title:'لمبی آوازیں: ا، و، ی',en:'Long vowel sounds',topic:'مصوّتے',instr:'حرف کے ساتھ ا، و، ی ملا کر آواز بنائیں۔',obj:'Blend letters with ا، و، ی to make long vowel sounds.',blocks:[
  {t:'fill',nw:1,h:'الف۔ ملا کر لکھیں۔',cols:3,items:['ب + ا = {{با}}','ب + و = {{بو}}','ب + ی = {{بی}}','م + ا = {{ما}}','م + و = {{مو}}','م + ی = {{می}}','ک + ا = {{کا}}','ک + و = {{کو}}','ک + ی = {{کی}}']},
  {t:'fill',h:'ب۔ ایک حرف لکھ کر لفظ مکمل کریں۔',cols:3,items:['ب{{ا}}ل','ت{{و}}تا','ت{{ی}}ر']}]},
 {title:'بصری الفاظ',en:'Sight words',topic:'بصری الفاظ',instr:'ڈبے میں سے لفظ چن کر جملہ مکمل کریں۔',obj:'Read and use common sight words in sentences.',blocks:[
  {t:'bank',items:['ہے','میں','اور','کی','وہ','نہیں']},
  {t:'fill',items:['یہ میرا بستہ {{ہے}}۔','{{میں}} سکول جاتا ہوں۔','علی {{اور}} سارہ دوست ہیں۔','یہ احمد {{کی}} کتاب ہے۔','{{وہ}} ایک بلی ہے۔','آج بارش {{نہیں}} ہو رہی۔']}]},
 {title:'صحیح لفظ چنیں',en:'Choose the right word',topic:'بصری الفاظ',instr:'صحیح لفظ پر دائرہ لگائیں۔',obj:'Choose the correct sight word to complete a sentence.',blocks:[
  {t:'choice',items:[['____ میرا گھر ہے۔',['یہ','کی'],0],['احمد ____ بھائی سکول گیا۔',['کی','کا'],1],['مجھے آم پسند ____۔',['ہے','ہیں'],0],['بلی دودھ ____ پی رہی۔',['اور','نہیں'],1],['امی ____ ابو بازار گئے۔',['اور','یہ'],0],['یہ میری امی ____۔',['ہیں','کا'],0]]},
  {t:'write',h:'ایک جملہ لکھیں جس میں "ہے" آئے۔',items:['________________________']}]}
]};

const SET_DESC={
 english:'Ten pages of Grade 1 English revision: capital and small letters, beginning sounds, vowels, classroom words, opposites and adding -ing to action words. It ends with a short story to read and answer.',
 maths:'Ten pages covering counting to 20, number bonds to 10 and 20, adding and taking away within 20, simple word problems and the 2 times table.',
 science:'Ten pages on energy, heat, light and sound, with sorting, true or false and fill in the blank activities taken from everyday life at home and school.',
 social:'Ten pages on family, feelings and house rules. Children write and draw about their own family, name feelings and choose safe, kind actions at home.',
 urdu:'Ten pages of Urdu revision: short joining forms of letters, the naughty nine, the vowel marks zabar, zer and pesh, long vowel sounds and common sight words.'};
const SET_OBJ={
 english:['Write capital and small letters in order and match them','Hear beginning sounds and recognise the five vowels','Use classroom words, opposites and word groups','Add -ing to action words and use them in sentences','Read a short story and answer questions'],
 maths:['Count, order and compare numbers to 20','Recall number bonds to 10 and 20','Add and subtract within 20, including word problems','Count in twos and recall the 2 times table'],
 science:['Know that energy makes things move, grow and work','Sort hot and cold things and name sources of heat','Sort natural and man-made light; explain shadows','Sort loud and soft sounds and know we hear with our ears'],
 social:['Talk, draw and write about my own family','Name family members in English and Urdu','Name feelings and choose calm, kind actions','Follow house rules and stay safe at home'],
 urdu:['حروف کی چھوٹی اشکال لکھنا اور حروف جوڑ کر لفظ بنانا','شرارتی نو حروف پہچاننا','زبر، زیر، پیش اور ا، و، ی کی آوازیں پہچاننا','بصری الفاظ پڑھنا اور جملوں میں استعمال کرنا']};

/* ---------------- resources ---------------- */
/* extra practice pages (not in the revision sets); they extend each topic pack */
const EXTRA={
maths:[
 {title:'Tens and Ones',topic:'Numbers to 20',instr:'Numbers from 11 to 20 are made of 1 ten and some ones.',obj:'Understand teen numbers as one ten and some ones; order numbers to 20.',blocks:[
  {t:'note',text:'Look: 14 = 1 ten and 4 ones'},
  {t:'fill',h:'A. Write the tens and ones.',cols:2,items:['13 = {{1}} ten and {{3}} ones','17 = {{1}} ten and {{7}} ones','11 = {{1}} ten and {{1}} one','19 = {{1}} ten and {{9}} ones','20 = {{2}} tens and {{0}} ones','15 = {{1}} ten and {{5}} ones']},
  {t:'fill',h:'B. Write the number.',cols:2,items:['1 ten and 6 ones = {{16}}','1 ten and 2 ones = {{12}}','1 ten and 8 ones = {{18}}','1 ten and 0 ones = {{10}}']},
  {t:'fill',h:'C. Write the numbers from smallest to biggest.',items:['12, 7, 19 → {{7, 12, 19}}','15, 20, 11 → {{11, 15, 20}}','9, 18, 3 → {{3, 9, 18}}']}]},
 {title:'Number Bond Practice',topic:'Number bonds',instr:'Find the missing part to complete each bond.',obj:'Recall number bonds for numbers up to 9.',blocks:[
  {t:'bond',items:[[6,2,4,2],[7,3,4,1],[8,5,3,2],[9,4,5,1],[7,6,1,2],[9,6,3,0]]},
  {t:'fill',h:'Complete the number sentences.',cols:2,items:['3 + {{3}} = 6','{{4}} + 4 = 8','5 + {{2}} = 7','{{1}} + 8 = 9','2 + {{6}} = 8','{{3}} + 4 = 7']}]},
 {title:'How Many More to Make 10?',topic:'Number bonds',instr:'Write how many more you need to make 10.',obj:'Use bonds to 10 to find how many more are needed.',blocks:[
  {t:'fill',h:'A. How many more to make 10?',cols:3,items:['7 → {{3}}','4 → {{6}}','9 → {{1}}','2 → {{8}}','5 → {{5}}','6 → {{4}}','8 → {{2}}','3 → {{7}}','1 → {{9}}']},
  {t:'fill',h:'B. Word problems.',items:['Sana has 6 bangles. How many more does she need to have 10? {{4}}','There are 3 children in the van. It can take 10. How many more can get in? {{7}}']}]},
 {title:'Doubles',topic:'Addition',instr:'A double is a number added to itself.',obj:'Recall doubles up to 10 + 10.',blocks:[
  {t:'note',text:'Look: 3 + 3 = 6. Double 3 is 6.'},
  {t:'fill',h:'A. Solve the doubles.',cols:2,items:['1 + 1 = {{2}}','2 + 2 = {{4}}','4 + 4 = {{8}}','5 + 5 = {{10}}','6 + 6 = {{12}}','7 + 7 = {{14}}','8 + 8 = {{16}}','10 + 10 = {{20}}']},
  {t:'fill',h:'B. Fill in the blank.',cols:2,items:['Double 9 is {{18}}.','Double 3 is {{6}}.']}]},
 {title:'Adding Three Numbers',topic:'Addition',instr:'Add the first two numbers, then add the third.',obj:'Add three small numbers with a total up to 20.',blocks:[
  {t:'fill',h:'A. Solve.',cols:2,items:['2 + 3 + 4 = {{9}}','5 + 1 + 3 = {{9}}','4 + 4 + 2 = {{10}}','6 + 2 + 5 = {{13}}','3 + 7 + 5 = {{15}}','8 + 2 + 6 = {{16}}']},
  {t:'fill',h:'B. Word problems.',items:['Ayesha has 3 red, 4 blue and 2 green balloons. How many balloons in all? {{9}}','A hen laid 5 eggs on Monday, 4 on Tuesday and 6 on Wednesday. How many eggs in all? {{15}}']}]},
 {title:'Missing Numbers in Subtraction',topic:'Subtraction',instr:'Find the missing number in each sum.',obj:'Find missing numbers in subtraction sentences.',blocks:[
  {t:'fill',h:'A. Write the missing number.',cols:3,items:['9 − {{4}} = 5','10 − {{3}} = 7','{{8}} − 2 = 6','15 − {{5}} = 10','{{12}} − 4 = 8','18 − {{9}} = 9','{{20}} − 10 = 10','14 − {{7}} = 7','{{11}} − 1 = 10']},
  {t:'choice',h:'B. Circle the right answer.',items:[['13 − 4 =',['9','8'],0],['17 − 8 =',['10','9'],1],['20 − 6 =',['14','16'],0]]}]},
 {title:'Counting Back',topic:'Subtraction',instr:'Start at the first number and count back on the number line.',obj:'Subtract within 20 by counting back on a number line.',blocks:[
  {t:'numline'},
  {t:'fill',h:'A. Count back to subtract.',cols:3,items:['12 − 3 = {{9}}','16 − 4 = {{12}}','20 − 5 = {{15}}','11 − 6 = {{5}}','14 − 2 = {{12}}','19 − 8 = {{11}}']},
  {t:'fill',h:'B. Word problems.',items:['There were 15 children on the bus. 6 got off. How many are on the bus now? {{9}}','Ammi made 12 parathas. We ate 7. How many are left? {{5}}']}]},
 {title:'Counting in Twos',topic:'2 times table',instr:'Count in twos to find the total.',obj:'Count in steps of two to 20.',blocks:[
  {t:'boxes',h:'A. Count in twos.',rows:['2|{{4}}|6|{{8}}|10|{{12}}|14|{{16}}|18|{{20}}','20|{{18}}|16|{{14}}|12|{{10}}|8|{{6}}|4|{{2}}']},
  {t:'groups',h:'B. Count the pairs.',items:[2,6,7]},
  {t:'fill',h:'C. Fill in the blank.',items:['5 pairs of shoes = {{10}} shoes','8 pairs of socks = {{16}} socks']}]},
 {title:'Twos Word Problems',topic:'2 times table',instr:'Read each problem. Use the 2 times table to solve it.',obj:'Solve simple word problems using the 2 times table.',blocks:[
  {t:'fill',items:['A bicycle has 2 wheels. How many wheels do 4 bicycles have? {{8}}','Each child has 2 hands. How many hands do 6 children have? {{12}}','A plate has 2 samosas. How many samosas are on 5 plates? {{10}}','Hamza puts 2 pencils in each box. He has 9 boxes. How many pencils? {{18}}','A bird has 2 legs. How many legs do 3 birds have? {{6}}','Each car has 2 front lights. How many front lights do 10 cars have? {{20}}']}]}
],
english:[
 {title:'Using -ing Words',topic:'-ing verbs',instr:'Read the words in the box. Use them to finish each sentence.',obj:'Use -ing words correctly in sentences.',blocks:[
  {t:'bank',items:['eating','reading','sleeping','playing','washing','drinking']},
  {t:'fill',items:['The cat is {{sleeping}} on the bed.','Abbu is {{reading}} the newspaper.','We are {{playing}} hide and seek.','Sara is {{eating}} an apple.','Dada is {{drinking}} tea.','Bilal is {{washing}} his hands.']}]},
 {title:'What Are They Doing?',topic:'-ing verbs',instr:'Match each action to the place where it happens.',obj:'Link -ing action words to everyday places.',blocks:[
  {t:'match',h:'A. Write the letter in the box.',left:['swimming','cooking','sleeping','playing','reading','shopping'],right:['in the pool','in the kitchen','in bed','in the park','in the library','in the bazaar']},
  {t:'write',h:'B. Write two things you are doing today.',items:['I am ____________________.','I am ____________________.']}]}
],
science:[
 {title:'Energy at Home',topic:'Energy',instr:'Some things need electricity to work. Some do not.',obj:'Sort everyday objects by whether they use electricity.',blocks:[
  {t:'sort',cats:['Uses electricity','No electricity'],words:['fan','bicycle','TV','kite','fridge','ball','washing machine','swing'],ans:[0,1,0,1,0,1,0,1]},
  {t:'write',h:'Name one more thing in your home that uses electricity.',items:['________________________']}]},
 {title:'Saving Energy',topic:'Energy',instr:'Is this a good way to save energy? Circle Yes or No.',obj:'Know simple ways to save energy at home.',blocks:[
  {t:'choice',opts:['Yes','No'],items:[['Switch off the light when you leave a room.',0],['Leave the TV on when nobody is watching.',1],['Close the fridge door quickly.',0],['Dry clothes in the sun.',0],['Keep the fan on in an empty room.',1],['Walk to a shop that is near.',0]]},
  {t:'fill',h:'Fill in the blank.',items:['We should {{switch off}} lights we are not using.']}]},
 {title:'Day and Night',topic:'Light',instr:'The sun gives us light in the day. At night it is dark.',obj:'Tell the difference between day and night.',blocks:[
  {t:'sort',cats:['Day','Night'],words:['the sun is shining','the moon is out','going to school','stars in the sky','bright blue sky','bedtime'],ans:[0,1,0,1,0,1]},
  {t:'choice',h:'Circle the answer.',items:[['What lights up the day?',['the sun','the moon'],0],['When do we need a lamp?',['at night','at noon'],0]]}]},
 {title:'Shiny or Dull?',topic:'Light',instr:'Shiny things reflect light. Dull things do not.',obj:'Sort materials as shiny or dull.',blocks:[
  {t:'sort',cats:['Shiny','Dull'],words:['mirror','wood','steel spoon','cloth','new coin','paper','foil','stone'],ans:[0,1,0,1,0,1,0,1]},
  {t:'fill',h:'Fill in the blank.',items:['I can see my face in a {{mirror}}.']}]}
],
social:[],
urdu:[
 {title:'لفظوں میں شرارتی حروف',en:'Find the naughty nine in words',topic:'شرارتی نو',instr:'ہر لفظ میں شرارتی حروف تلاش کر کے لکھیں۔',obj:'Find non-joining letters inside words.',blocks:[
  {t:'fill',h:'الف۔ شرارتی حروف لکھیں۔',nw:1,items:['بادل ← {{ا، د}}','زرد ← {{ز، ر، د}}','گاڑی ← {{ا، ڑ}}','ڈاکٹر ← {{ڈ، ا، ر}}']},
  {t:'choice',h:'ب۔ شرارتی حرف پر دائرہ لگائیں۔',items:[['',['ب','ر'],1],['',['ژ','س'],0],['',['ک','ذ'],1],['',['و','م'],0]]}]},
 {title:'مزید بصری الفاظ',en:'More sight words',topic:'بصری الفاظ',instr:'ڈبے میں سے لفظ چن کر جملہ مکمل کریں۔',obj:'Use more sight words in sentences.',blocks:[
  {t:'bank',items:['یہ','وہ','کا','کے','میں','ہیں']},
  {t:'fill',items:['{{یہ}} میرا قلم ہے۔','علی {{کے}} جوتے نئے ہیں۔','سارہ اور زینب بہنیں {{ہیں}}۔','بستہ کمرے {{میں}} ہے۔','{{وہ}} دور والا درخت بہت اونچا ہے۔','یہ عمر {{کا}} بلا ہے۔']}]}
]};
Object.keys(EXTRA).forEach(k=>PAGES[k].push(...EXTRA[k]));
const PACK_T={maths:['Numbers to 20','Number Bonds','Addition','Subtraction','The 2 Times Table'],english:['The Alphabet','Vocabulary','-ing Verbs'],science:['Energy','Heat','Light','Sound'],social:['My Family','Feelings','House Rules']};
const UR_EN={'چھوٹی اشکال':'Short forms of letters','شرارتی نو':'The naughty nine','مصوّتے':'Vowel sounds','بصری الفاظ':'Sight words'};

const WEEKS=(()=>{const out=[],s=new Date(2026,8,7),M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];for(let i=0;i<40;i++){const a=new Date(s.getTime()+i*7*864e5),b=new Date(a.getTime()+4*864e5);out.push(['Week '+(i+1),a.getMonth()===b.getMonth()?`${a.getDate()}–${b.getDate()} ${M[a.getMonth()]}`:`${a.getDate()} ${M[a.getMonth()]}–${b.getDate()} ${M[b.getMonth()]}`])}return out})();
const WEEK_NOW=Math.max(0,Math.floor((Date.now()-new Date(2026,8,5).getTime())/(7*864e5)));
/* weekly guide: [focus, page numbers used, goal, activities, [story title, story text]] */
const PLAN={
 maths:[
  ['Numbers to 20',[1,2,3],'Count, read and write numbers to 20, and put them in order.',['Count the stairs going up, then count back down.','Number hunt: find numbers 1 to 20 on clocks, calendars and car plates.'],['Twenty Mangoes','Nani brought a basket of mangoes from the market. Zara counted them one by one on the dastarkhwan: 1, 2, 3, all the way to 20! Then her little brother counted them again, backwards from 20 to 1. Ask: How many mangoes were there? Can you count back from 20 too?']],
  ['Number bonds',[4,5],'Find two parts that make a whole, for numbers up to 10 and 20.',['Share 10 chickpeas between two cups. How many different ways can you find?','Play "make 10" with fingers: show 6 and ask how many more make 10.'],['The Ten Bangles','Sana had 10 bangles. She wore 6 on her left arm and 4 on her right. The next day she wore 3 on her left arm. Ask: How many bangles went on her right arm?']],
  ['Addition',[6,7],'Add within 20 using pictures, a number line and doubles.',['Play shop with toy money and add two prices together.','Roll two dice and add the dots.'],['The Busy Bus Stop','At the first stop, 5 children got on the school bus. At the next stop, 4 more got on. At the last stop, 3 more climbed in. Ask: How many children are on the bus now?']],
  ['Subtraction',[8,9],'Take away within 20 and solve story sums.',['Put 8 fruits on a plate, eat some, and say the sentence: 8 take away 3 leaves 5.','Hide some buttons under a cup. How many are hiding?'],['The Parathas','Ammi made 12 parathas for breakfast. Abbu ate 3, Dada ate 2 and the children ate 4. Ask: How many parathas were left for Ammi?']],
  ['2 times table',[10],'Count in twos and learn the 2 times table.',['Count shoes, socks and chappals in pairs.','Skip and clap while counting in twos: 2, 4, 6, 8.'],['The Shoe Rack','When the guests arrived, Bilal counted the shoes at the door in twos: 2, 4, 6, 8, 10. Every guest left one pair. Ask: How many guests came?']],
  ['Revision',['set'],'Revise everything before the monthly test.',['Do two pages of the revision set each day.','Check with the answer key together and redo mistakes the next day.'],['The Number Detective','Hamza found clues around the house: a number bond on the fridge, a sum on the mirror and the 2 times table on his bed. Each answer opened a box. Ask: Can you make three number clues for your family to solve?']]],
 english:[
  ['Alphabet',[1,2],'Write capital and small letters in order and match them.',['Sing the alphabet song and point to each letter.','Find letters on cereal boxes, shop signs and newspapers.'],['The Lost Letter','Little A woke up and could not find her friend B. She looked behind C, under D and next to E, until she found B playing with all the small letters! Ask: Which letter comes after B?']],
  ['Letter sounds',[3,4],'Hear the first sound in a word and find the vowels.',['Play I Spy: "I spy something beginning with m."','Clap for each vowel you hear in your name.'],['Six Small Snails','Sam saw six small snails in the sun. They slid slowly to the swing. Ask: What sound do most words in this story start with? Can you make a story with the b sound?']],
  ['Vocabulary',[5,6],'Learn classroom words and opposites.',['Label five things in your room with paper tags.','Find opposites at home: big and small spoons, hot and cold water.'],['Big Elephant, Small Mouse','A big elephant and a small mouse were best friends. The elephant was slow and the mouse was fast. The elephant was loud and the mouse was quiet. Ask: Find all the opposites in the story.']],
  ['Word groups',[7],'Sort words into groups: fruit, colours and animals.',['At the fruit seller, name each fruit in English.','Play "I went to the market and bought..." adding one fruit each turn.'],['Zara\'s Basket','Zara filled her basket with a yellow banana, a green guava, a red apple and an orange mango. On the way home she saw a brown goat and a green parrot. Ask: Name the fruits, then name the animals.']],
  ['-ing verbs',[8,9],'Add -ing to action words and use them in sentences.',['Play charades. Your child acts and you guess: "You are jumping!"','Look out of the window and say what people are doing.'],['A Busy Morning','Dada is reading the newspaper. Ammi is cooking eggs. Bilal is brushing his teeth and the cat is sleeping on the sofa. Ask: What is everyone doing? Find the -ing words.']],
  ['Revision',[10,'set'],'Revise and read a short story on your own.',['Read one short story together each night and ask two questions.','Do two pages of the revision set each day.'],['Kite Day','It is Sunday. Zara and Bilal are in the park with their dog Moti. Zara is flying a red kite. Bilal is eating a mango. Ask: What colour is the kite? What is Bilal doing?']]],
 science:[
  ['Energy',[1,2],'Energy makes things move, grow and work. Food gives us energy.',['Look at lunch together. Which foods give energy for playing?','Run on the spot for one minute, then feel your heartbeat.'],['Sleepy Saad','Saad skipped breakfast and felt too tired to play cricket. The next day he ate an egg, a roti and a banana. He ran faster than ever! Ask: Why did Saad have more energy?']],
  ['Heat',[3,4],'Sort hot and cold things and name sources of heat.',['Feel a cup of warm water and a cup of cold water. Which is which?','Rub your hands together fast. What do you feel?'],['The Winter Heater','On a cold winter night, the family sat around the heater drinking hot chai. Outside, the water in the bucket was icy cold. Ask: Name the hot things and the cold things in the story.']],
  ['Heat changes things',[5],'Heat can melt, cook and dry things.',['Put an ice cube in the sun and check on it after 10 minutes.','Watch a roti cooking on the tawa. How does it change?'],['The Melting Kulfi','Ali bought a kulfi on a hot day. He talked too long with his friend and drip, drip, drip! The kulfi melted onto his hand. Ask: Why did the kulfi melt?']],
  ['Light',[6,7],'Natural and man-made light, shadows, day and night.',['Make hand shadow animals on the wall with a torch.','Go outside in the morning and at noon. Look at your shadow each time.'],['Moti and His Shadow','Moti the dog saw a dark dog following him in the sunny garden. When he ran, it ran. When he stopped, it stopped. When a cloud covered the sun, the dark dog was gone! Ask: What was following Moti?']],
  ['Sound',[8,9],'Loud and soft sounds, animal sounds and how we hear.',['Close your eyes for one minute and list all the sounds you hear.','Make a shaker with a bottle and some daal. Shake it softly, then loudly.'],['The Noisy Farm','On Nana\'s farm the cow said moo, the hen said cluck, the crow said caw and the donkey said hee-haw! Then everyone went quiet because the baby was asleep. Ask: Which sounds were loud? Why did everyone go quiet?']],
  ['Revision',[10,'set'],'Revise energy, heat, light and sound.',['Ask your child to teach you one thing they learnt in science.','Do two pages of the revision set each day.'],['A Day with the Sun','The sun woke up and gave light and heat to everyone. Plants used its energy to grow and birds sang loud songs. At night the sun rested and the moon shone. Ask: What does the sun give us?']]],
 social:[
  ['My family',[1,2],'Talk, draw and write about my family.',['Look at family photos and name everyone together.','Draw a family tree with Dada, Dadi, Nana and Nani.'],['Hamza\'s Big Family','Hamza lives with Ammi, Abbu, his sister and his Dada and Dadi. Every evening Dada tells a story and Dadi makes chai. Ask: Who lives in Hamza\'s house? Who lives in yours?']],
  ['Families and helping',[3,4],'Compare family sizes and find ways to help at home.',['Give your child one small job this week, like setting the dastarkhwan.','Make a helper chart and add a sticker for each job done.'],['The Little Helper','Ayesha wanted to help. She folded the clothes, watered the plants and put her shoes in the rack. Ammi smiled and said, "Thank you, my little helper!" Ask: How did Ayesha help?']],
  ['Feelings',[5,6],'Name feelings like happy, sad, scared and proud.',['At bedtime, ask: "What made you happy today?"','Make feeling faces in a mirror and guess each other\'s feelings.'],['The Broken Toy Car','Bilal\'s toy car broke and he felt sad. His sister helped him fix it with tape. Then he felt happy and proud. Ask: How did Bilal feel at the start? How did he feel at the end?']],
  ['Kind choices',[7],'Make calm and kind choices when feelings are big.',['Practise three slow deep breaths together.','Make a calm corner with a cushion and a favourite book.'],['Zainab Counts to Five','Someone took Zainab\'s crayon and she felt very angry. She took a deep breath and counted to five. Then she said, "Please give it back." Ask: What did Zainab do when she felt angry?']],
  ['House rules',[8,9],'Understand why homes have rules and how to stay safe.',['Write three house rules together and stick them on the fridge.','Learn the numbers 15 and 1122 and say them together.'],['The Rule Box','Saad\'s family wrote their rules on cards: wash hands before eating, put toys away, never play with matches. Each night they picked one card and talked about it. Ask: Which rule keeps us safe?']],
  ['Revision',[10,'set'],'Revise family, feelings and house rules.',['Ask your child which house rule is the most important and why.','Do two pages of the revision set each day.'],['A Happy Home','In Sara\'s home everyone helps, says sorry and thank you, and follows the rules. When someone is sad, the family gives them a hug. Ask: What makes a home happy?']]],
 urdu:[
  ['چھوٹی اشکال',[1,2],'حروف کی چھوٹی اشکال سیکھنا اور حروف جوڑ کر لفظ بنانا۔',['گھر کی چیزوں کے نام کاغذ پر لکھ کر ان پر چپکائیں۔','آٹے یا ریت کی ٹرے میں انگلی سے حروف لکھیں۔'],['بلی اور قلم','ایک بلی نے میز پر قلم دیکھا۔ اس نے قلم کو پنجے سے دھکا دیا۔ قلم نیچے گر گیا اور بلی بھاگ گئی۔ سوال: بلی نے میز پر کیا دیکھا؟']],
  ['لفظ توڑنا',[3],'لفظوں کو توڑ کر ان کے حروف لکھنا۔',['روزانہ دو لفظ توڑ کر لکھیں۔','اپنا نام توڑ کر لکھیں اور ہر حرف کو رنگ کریں۔'],['چڑیا کا گھونسلا','ایک چڑیا نے درخت پر گھونسلا بنایا۔ اس میں تین ننھے بچے تھے۔ چڑیا روز ان کے لیے دانہ لاتی تھی۔ سوال: گھونسلے میں کتنے بچے تھے؟']],
  ['شرارتی نو',[4,5],'شرارتی نو حروف پہچاننا جو اپنے بعد والے حرف سے نہیں ملتے۔',['اخبار میں شرارتی نو حروف تلاش کریں اور ان پر دائرہ لگائیں۔','کاغذ کے نو ٹکڑوں پر شرارتی حروف لکھ کر ان سے کھیلیں۔'],['نو شرارتی دوست','حروف کی بستی میں نو شرارتی دوست رہتے تھے۔ وہ آگے والے کا ہاتھ نہیں پکڑتے تھے۔ ان کے نام تھے: ا، د، ڈ، ذ، ر، ڑ، ز، ژ اور و۔ سوال: شرارتی دوست کتنے تھے؟']],
  ['زبر، زیر، پیش',[6,7],'زبر، زیر اور پیش کی آوازیں پہچاننا۔',['ہر اعراب کے ساتھ دو لفظ بولیں۔','زبر پر ہاتھ اوپر، زیر پر نیچے اور پیش پر آگے کریں۔'],['گُل اور بَطَخ','گُل تالاب پر گئی۔ وہاں ایک بَطَخ تیر رہی تھی۔ گُل نے بَطَخ کو روٹی کا ٹکڑا دیا۔ سوال: بَطَخ کہاں تیر رہی تھی؟']],
  ['لمبی آوازیں، بصری الفاظ',[8,9],'ا، و، ی کی لمبی آوازیں اور بصری الفاظ پڑھنا۔',['کہانی پڑھتے ہوئے ہے، اور، میں جیسے لفظ تلاش کریں۔','بصری الفاظ کے کارڈ بنا کر روز پانچ لفظ پڑھیں۔'],['میرا بستہ','یہ میرا بستہ ہے۔ اس میں کتاب اور قلم ہیں۔ میں روز سکول جاتا ہوں۔ سوال: بستے میں کیا ہے؟']],
  ['دہرائی',[10,'set'],'ماہانہ ٹیسٹ سے پہلے سب اسباق کی دہرائی۔',['روزانہ دہرائی سیٹ کے دو صفحے کریں۔','جوابات کی کنجی سے مل کر کام چیک کریں۔'],['پتنگ والا دن','اتوار کو علی اور سارہ چھت پر گئے۔ علی نے لال پتنگ اڑائی اور سارہ نے ڈور پکڑی۔ سوال: پتنگ کس رنگ کی تھی؟']]]
};

/* parents' topic guides, aligned with each subject's topics */
const GUIDE={
 maths:[
  ['Your child counts objects to 20, reads and writes the numbers, and learns that 11 to 19 are one ten and some ones.',['Count real things, touching each one as you say the number.','Write 1 to 20 on a strip of paper. Point as you count forwards, then backwards.','Show 14 as a bundle of 10 sticks and 4 loose sticks: one ten and four ones.'],['Count rotis, stairs or cars on the road.','Ask: What comes after 13? What comes before 20?'],'Teen numbers are often written backwards, like 41 for 14. Say "ten comes first" and write the 1 first.'],
  ['Two smaller numbers join to make a bigger number, like 6 and 4 make 10.',['Put 10 chickpeas in a line and slide some to one side: 7 here, 3 there.','Draw the bond: a big circle for the whole, two small circles for the parts.','Ask it both ways: "7 and what make 10?" and "10 is 7 and what?"'],['Show 10 fingers and fold some down. How many are still up?','Play "make 10" with playing cards.'],'Counting every dot is fine at first. Praise your child when they start to remember a bond without counting.'],
  ['Adding means putting groups together to find how many there are in all.',['Make two groups of objects, push them together and count them all.','Move on to counting on: start at the bigger number and count up the smaller one.','Use a number line: start at the first number and hop forward.'],['Add the prices of two sweets at the shop.','Roll two dice and add the dots.'],'When hopping on a number line, children often count the number they start on. From 8 to 9 is one hop.'],
  ['Taking away means removing some and finding how many are left.',['Act it out: 8 biscuits, eat 3, count what is left.','Cross out pictures to show the ones taken away.','Count back on a number line from the bigger number.'],['Make story sums at meals: 10 grapes, you ate 4. How many are left?','Hide some buttons under a cup. How many are hidden?'],'Children sometimes write the smaller number first, like 3 − 8. Always start with how many you had.'],
  ['Counting in twos, and knowing that 3 × 2 means three groups of two.',['Pair up shoes or socks and count them in twos.','Say the twos chant together: 2, 4, 6, 8, 10.','Link it to doubles: 4 × 2 is the same as 4 + 4.'],['Count the pairs of shoes at the door.','Clap on every second number while counting to 20.'],'Saying the chant is not the same as understanding it. Ask: How many groups? How many in each group?']],
 english:[
  ['Letter names and sounds, and capital and small letters in order.',['Teach the sound first: "b" as in ball, then the name.','Show the capital and small letter side by side and trace both.','Sing the alphabet slowly while pointing to each letter.'],['Go on a letter hunt on packets and signboards.','Make letters with playdough or in a tray of flour.'],'b and d, p and q get mixed up. For b, say "bat then ball": the line first, then the circle.'],
  ['Everyday words, opposites, and how words fit into groups.',['Show the real thing while saying the word.','Use the word in a short sentence: "Put the pencil on the desk."','Sort words into groups such as fruit, colours and animals.'],['Label things at home with paper tags.','Play opposites: you say "big", your child says "small".'],'Explaining in Urdu is fine. Say the English word again afterwards so it sticks.'],
  ['Action words ending in -ing tell us what someone is doing right now.',['Do an action and say it: "I am jumping."','Write the action word, then add -ing in a different colour.','Ask what others are doing and answer in a full sentence.'],['Play charades and guess the action.','Describe what family members are doing right now.'],'Some words double a letter, like run and running. At this age, praise the idea and correct gently.']],
 science:[
  ['Energy makes things move, grow and work. People get energy from food; machines get it from electricity.',['Ask: What makes the fan move? What lets you run and play?','Sort things that need electricity from things that do not.','Talk about food as fuel for the body.'],['Spot everything that uses electricity in one room.','Go on a switch-off patrol for lights nobody is using.'],'Keep it concrete. Your child does not need a deep explanation of electricity yet.'],
  ['Some things are hot and some are cold, and heat can change things, like melting ice.',['Feel warm and cold water and describe each one.','Name sources of heat: the sun, a stove, a heater, a fire.','Watch heat change something: ice melting, a roti cooking.'],['Put an ice cube in the sun and check it after 10 minutes.','Talk about winter clothes and summer clothes.'],'Always pair heat with safety: look, do not touch.'],
  ['We need light to see. Light comes from the sun or from things people make. Blocking light makes a shadow.',['Switch the lights off and on. Can we see in the dark?','Sort natural light and light made by people.','Use a torch to make a shadow bigger and smaller.'],['Make shadow puppets on the wall.','Find shiny and dull things in the kitchen.'],'Many children think the moon makes its own light. Explain that the sun lights it up.'],
  ['Sounds are made when things shake. We hear with our ears, and sounds can be loud or soft.',['Hum with a hand on your throat to feel it shake.','Make loud and soft sounds with a spoon and a pot.','Match animals to the sounds they make.'],['Play a one-minute listening game.','Make a shaker from a bottle and some daal.'],'Remind your child that very loud sounds can hurt our ears.']],
 social:[
  ['Who is in my family, family words in English and Urdu, and how we help at home.',['Look at family photos and name each person.','Say English and Urdu words together: grandmother, Dadi or Nani.','Talk about the jobs each person does at home.'],['Draw a family tree together.','Give one small helping job each day.'],'Families look different. Make sure every kind of family feels normal to your child.'],
  ['Naming feelings and choosing calm, kind ways to deal with them.',['Name your own feelings out loud: "I feel tired."','Draw or act out happy, sad, angry and scared faces.','Practise one calm-down step, like three slow breaths.'],['At bedtime, ask about the best and hardest part of the day.','While reading a story, ask how a character feels.'],'Do not tell a child not to feel something. Accept the feeling, then guide what they do.'],
  ['Why homes have rules, good manners, and how to stay safe.',['Make three simple house rules together.','Explain the reason behind each rule.','Practise what to do in an emergency, including the numbers 15 and 1122.'],['Put a rules chart on the fridge.','Role-play the doorbell: always ask a grown-up first.'],'Keep rules few and clear. Too many rules are hard to remember.']],
 urdu:[
  ['Most Urdu letters change shape when they join the next letter. These joining forms are the چھوٹی اشکال.',['Write the full letter and its short form side by side, like ب and بـ.','Join two or three letters slowly to make a word, saying each sound.','Break the word back into its letters.'],['Write family names and break them into letters.','Trace letters in a tray of flour or sand.'],'The dots travel with the short form. Check they are in the right place and the right number.'],
  ['Nine letters never join to the letter after them: ا د ڈ ذ ر ڑ ز ژ و.',['Learn the nine as a group, like a rhyme.','Show a word like دروازہ where these letters stay apart.','Circle the naughty letters in short words.'],['Hunt for them in a newspaper headline.','Make nine cards and play a memory game.'],'Children often try to join these letters forward. Remind them the naughty nine never hold the next letter\'s hand.'],
  ['Zabar, zer and pesh give short sounds; ا و ی give long sounds.',['Use hand signals: zabar hand up, zer hand down, pesh hand forward.','Read بَ بِ بُ, then با بی بو, and listen for the difference.','Read short words that have the marks on them.'],['Say two words for each mark.','Spot ا و ی on signboards.'],'Short and long sounds get mixed up. Stretch the long sounds when you read aloud.'],
  ['Small common words like ہے، میں، اور، کی that children learn to read on sight.',['Make word cards and read five every day.','Find the words in a short story.','Make a sentence using one sight word.'],['Stick word cards on the fridge.','Read a story and count how many times ہے appears.'],'Short daily practice works better than one long session.']]
};
