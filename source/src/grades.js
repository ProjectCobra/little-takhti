/* ===== Nursery, KG, Grade 2, Grade 3 content =====
   Topic scope follows: Singapore Maths / Dimensions Math / Beast Academy (maths),
   Logic of English, Beowulf Grammar, IEW Structure and Style (English),
   Real Science Odyssey and Evan-Moor science (science), History Quest and BookShark (history),
   Let's Go Geography and Evan-Moor Daily Geography (geography), Nardban and Kashf Urdu (Urdu). */
const pg=(title,instr,obj,...blocks)=>{const [t,en]=title.split("|");return {title:t,en:en||"",instr,obj,blocks}};
const F=(h,items,cols,nw)=>({t:"fill",h,items,cols,nw});
const CH=(h,items,opts)=>({t:"choice",h,items,opts});
const SO=(h,cats,words,ans)=>({t:"sort",h,cats,words,ans});
const MA=(h,left,right)=>({t:"match",h,left,right});
const BK=items=>({t:"bank",items});
const WR=(h,items)=>({t:"write",h,items});
const TR=(h,rows,n)=>({t:"trace",h,rows,n:n||5});
const LN=(h,items)=>({t:"lines",h,items});
const CO=(h,items)=>({t:"colour",h,items});
const PI=(h,items)=>({t:"pics",h,items});
const SP=(h,items)=>({t:"spick",h,items});
const TS=(h,items)=>({t:"tshape",h,items});
const CM=(h,items)=>({t:"cmp",h,items});
const PT=(h,items)=>({t:"pat",h,items});
const FR=(h,items)=>({t:"frac",h,items});
const BR=(h,items)=>({t:"bar",h,items});
const BX=(h,rows)=>({t:"boxes",h,rows});
const CT=(h,items)=>({t:"count",h,items,cols:2});
const DR=(label,h)=>({t:"draw",boxes:[[label,h]]});
const CL=(h,items)=>({t:"clock",h,items});
const PA=text=>({t:"passage",text});
const NO=text=>({t:"note",text});
const TF=["True","False"], YN=["Yes","No"];
const TP=(t,en,pages,what,steps,home,watch,story)=>({t,en,pages,g:[what,steps,home,watch],story});

const GRADE_DATA={
/* ---------------- NURSERY ---------------- */
nursery:{
 english:[
  TP("Pencil control","",[
   pg("Lines Left to Right","Start at the green dot. Trace the dotted line to the star.","Hold a pencil and trace straight and slanting lines.",LN("",["straight","straight","slant","slant","steps"])),
   pg("Waves and Zigzags","Trace each line slowly without lifting your pencil.","Trace curved and zigzag lines from left to right.",LN("",["wave","wave","zigzag","zigzag","bumps"])),
   pg("Loops and Circles","Trace the loops and circles. Go round and round.","Trace loops and circles with control.",LN("",["loops","circles","loops","circles"]))],
   "Strong, steady pencil movements that later become letters.",
   ["Show how to hold the pencil in a pinch grip near the tip.","Trace the line in the air with a finger first, then on paper.","Go slowly from the green dot to the star without lifting the pencil."],
   ["Draw lines in a tray of flour or sand.","Pick up chickpeas one at a time to build finger strength."],
   "A fist grip is common at this age. Gently move the fingers into a pinch and keep sessions short.",
   ["The Ant's Walk","A little ant walked in a straight line to find sugar. Then it climbed up and down a hill, went round a stone and walked back home. Ask: Can you draw the ant's path with your finger?"]),
  TP("Letter sounds a to m","",[
   pg("Trace a b c d","Say the sound as you trace: a as in apple.","Trace the letters a to d and say their sounds.",TR("",["a","b","c","d"],6)),
   pg("Trace e f g h i","Say the sound as you trace each letter.","Trace the letters e to i and say their sounds.",TR("",["e","f","g","h","i"],6)),
   pg("Trace j k l m","Trace the letters. Then listen and circle.","Trace j to m and hear first sounds in words.",TR("",["j","k","l","m"],6),CH("Listen to the word. Circle the first letter.",[["apple",["a","m"],0],["ball",["d","b"],1],["cat",["c","k"],0],["moon",["m","n"],0]]))],
   "Children hear and say the sound of each letter and trace its shape.",
   ["Say the sound, not the letter name: \"a\" as in apple.","Show a real object that starts with that sound.","Trace the letter while saying the sound."],
   ["Make a sound basket: collect things that start with the same sound.","Sing a letter sounds song while pointing to letters."],
   "b and d look alike. Trace b as \"bat then ball\": the line first, then the circle.",
   ["Annu the Ant","Annu the ant ate an apple. Then she saw a big blue ball and a cat on a mat. Ask: Which sound does Annu start with? Can you say \"a, a, apple\"?"]),
  TP("Letter sounds n to z","",[
   pg("Trace n o p q r","Say the sound as you trace each letter.","Trace the letters n to r and say their sounds.",TR("",["n","o","p","q","r"],6)),
   pg("Trace s t u v w","Say the sound as you trace each letter.","Trace the letters s to w and say their sounds.",TR("",["s","t","u","v","w"],6)),
   pg("Trace x y z","Trace the letters. Then listen and circle.","Trace x to z and hear first sounds in words.",TR("",["x","y","z"],6),CH("Listen to the word. Circle the first letter.",[["sun",["s","z"],0],["tree",["t","f"],0],["umbrella",["u","o"],0],["zip",["s","z"],1]]))],
   "The sounds and shapes of the letters n to z.",
   ["Say the sound and a word: \"s\" as in sun.","Ask your child to find something at home with that sound.","Trace the letter, saying the sound each time."],
   ["Play I Spy with sounds.","Trace a letter on your child's back and let them guess it."],
   "Some sounds are close, like s and z. Let your child feel the buzz of z on their throat.",
   ["Sam's Sunny Day","Sam saw the sun in the sky. He ate a sweet orange under a tall tree. Then a zebra zoomed by! Ask: What did Sam see in the sky? What zoomed by?"])],
 maths:[
  TP("Numbers 1 to 5","",[
   pg("Count and Circle","Count the shapes. Circle the right number.","Count up to 5 objects and match the numeral.",PI("",[[3,"star",[2,3,4]],[1,"circle",[1,2,3]],[5,"heart",[4,5,3]],[2,"square",[2,5,1]],[4,"tri",[3,4,5]]])),
   pg("Trace 1 to 5","Trace each number. Say it out loud.","Trace and say the numerals 1 to 5.",TR("",["1","2","3","4","5"],7)),
   pg("Count and Write","Count the shapes. Write the number in the box.","Count groups up to 5 and write the number.",CT("",[[2,"circle"],[4,"star"],[1,"heart"],[5,"square"],[3,"tri"],[4,"circle"]]))],
   "Counting up to 5 objects, saying one number for each, and knowing the numerals 1 to 5.",
   ["Line up five objects and touch each one as you count.","Ask \"how many?\" and let your child say the last number.","Show the number card that matches the group."],
   ["Count spoons, shoes or biscuits at home.","Hold up fingers quickly and ask how many."],
   "Children often count an object twice or skip one. Move each object aside as you count it.",
   ["Five Little Ducks","Five little ducks went out to play. One went to sleep, one went to eat, and three kept swimming in the pond. Ask: How many ducks were swimming?"]),
  TP("Numbers 6 to 10","",[
   pg("Count and Circle","Count the shapes. Circle the right number.","Count 6 to 10 objects and match the numeral.",PI("",[[6,"star",[6,7,8]],[8,"circle",[7,8,9]],[10,"heart",[9,10,8]],[7,"square",[6,7,10]],[9,"tri",[8,9,10]]])),
   pg("Trace 6 to 10","Trace each number. Say it out loud.","Trace and say the numerals 6 to 10.",TR("",["6","7","8","9","10"],6)),
   pg("Count and Write","Count the shapes. Write the number in the box.","Count groups from 6 to 10 and write the number.",CT("",[[6,"heart"],[9,"circle"],[7,"star"],[10,"square"],[8,"tri"],[6,"circle"]]))],
   "Counting up to 10 objects and knowing the numerals 6 to 10.",
   ["Count to 10 together on your fingers.","Make groups of 6 to 10 buttons and count them.","Match each group to a number card."],
   ["Count the steps as you climb the stairs.","Play hide and seek and count to 10 aloud."],
   "Many children say \"8, 9, 10\" but skip 7. Count slowly together.",
   ["Ten Red Apples","Dadi had ten red apples on a plate. Bilal counted them, 1, 2, 3, all the way to 10. Then he ate one! Ask: How many apples are left?"]),
  TP("Shapes","",[
   pg("Colour the Shapes","Colour each shape with the colour written under it.","Name circles, squares, triangles, stars and hearts.",CO("",[["circle","red"],["square","blue"],["tri","yellow"],["star","green"],["heart","pink"],["circle","orange"]])),
   pg("Find the Shape","Listen to the shape name. Circle that shape.","Recognise and name basic shapes.",SP("",[["circle",["square","circle","tri"],1],["triangle",["tri","star","square"],0],["square",["heart","circle","square"],2],["star",["star","tri","circle"],0],["heart",["circle","heart","square"],1]])),
   pg("Trace the Shapes","Trace around each shape. Start at the dot.","Trace basic shapes with a steady hand.",TS("",["circle","square","tri","star","heart","circle"]))],
   "Naming circles, squares, triangles and other shapes, and finding them around us.",
   ["Show a real object: a roti is a circle, a book is a rectangle.","Trace the shape in the air with a finger.","Count the sides and corners together."],
   ["Go on a shape hunt in the kitchen.","Make shapes with ice-cream sticks."],
   "A triangle turned upside down is still a triangle. Turn shapes around and name them again.",
   ["Shapes at the Bazaar","At the bazaar Sara saw round rotis, square boxes and triangle samosas. Ask: What shape is a samosa? What shape is a roti?"])],
 urdu:[
  TP("لکیروں کی مشق","Line practice",[
   pg("سیدھی لکیریں|Straight lines","سبز نقطے سے شروع کریں اور ستارے تک لکیر بنائیں۔","Trace straight lines from right to left.",LN("",["straight","straight","slant","slant","steps"])),
   pg("لہریں اور زگ زیگ|Waves and zigzags","پنسل اٹھائے بغیر لکیر بنائیں۔","Trace curved and zigzag lines from right to left.",LN("",["wave","wave","zigzag","zigzag","bumps"])),
   pg("گول لکیریں|Loops and circles","گول گول لکیریں بنائیں۔","Trace loops and circles from right to left.",LN("",["loops","circles","loops","circles"]))],
   "Pencil movements from right to left, the direction Urdu is written.",
   ["Show that Urdu starts on the right side of the page.","Trace each line in the air from right to left.","Trace on paper from the green dot to the star."],
   ["Draw right-to-left lines in a tray of flour.","Practise with a finger on a takhti or chalkboard."],
   "Children used to English may start on the left. Put a green sticker on the right edge of the page.",
   ["ننھی چیونٹی","ایک ننھی چیونٹی دائیں سے بائیں چلی۔ پھر وہ پہاڑی پر چڑھی اور نیچے اتری۔ آخر میں وہ اپنے گھر پہنچ گئی۔ سوال: چیونٹی کس طرف سے چلی؟"]),
  TP("حروف ا سے خ","Letters alif to khay",[
   pg("ا ب پ ت|Trace alif to tay","حروف پر لکھیں اور ان کا نام بولیں۔","Trace and name ا ب پ ت.",TR("",["ا","ب","پ","ت"],5)),
   pg("ٹ ث ج چ|Trace ttay to chay","حروف پر لکھیں اور ان کا نام بولیں۔","Trace and name ٹ ث ج چ.",TR("",["ٹ","ث","ج","چ"],5)),
   pg("ح خ اور پہچان|Trace and find","حروف پر لکھیں۔ پھر ب پر دائرہ لگائیں۔","Trace ح خ and find ب among similar letters.",TR("",["ح","خ"],5),{t:"circ",h:"ہر ب پر دائرہ لگائیں۔",items:["ب","ت","ب","پ","ث","ب","ج","ب","ت","ب","چ","پ"],correct:["ب"]})],
   "Recognising and tracing the first ten Urdu letters, from alif to khay.",
   ["Say the letter name and its sound: \"bay\" says \"b\".","Show how dots change a letter: ب has one dot below, ت has two above.","Trace the letter from right to left."],
   ["Make letters from playdough or roti dough.","Find ب and ت on food packets."],
   "Dots are the tricky part. Count the dots together and say where they go: above or below.",
   ["ب سے بطخ","ایک بطخ تالاب میں تیر رہی تھی۔ اس نے ایک بکری کو دیکھا اور کہا: آؤ کھیلیں! سوال: بطخ کس حرف سے شروع ہوتی ہے؟"]),
  TP("حروف د سے ی","Letters daal to yay",[
   pg("د ذ ر ز|Trace daal to zay","حروف پر لکھیں اور ان کا نام بولیں۔","Trace and name د ذ ر ز.",TR("",["د","ذ","ر","ز"],5)),
   pg("س ش ک گ|Trace seen to gaaf","حروف پر لکھیں اور ان کا نام بولیں۔","Trace and name س ش ک گ.",TR("",["س","ش","ک","گ"],5)),
   pg("م ن و ی|Trace meem to yay","حروف پر لکھیں اور ان کا نام بولیں۔","Trace and name م ن و ی.",TR("",["م","ن","و","ی"],5))],
   "Recognising and tracing more Urdu letters, from daal to yay.",
   ["Say the letter name and a word that starts with it: س for سیب.","Compare look-alike letters: د and ذ, ر and ز.","Trace slowly from the right."],
   ["Play letter snap with homemade cards.","Point to letters in a story book and name them."],
   "Look-alike pairs (ر ز، د ذ) get mixed up. The only difference is the dot, so point to it every time.",
   ["میرا سیب","سارہ کے پاس ایک لال سیب تھا۔ اس نے آدھا سیب اپنے دوست کو دیا۔ دونوں خوش ہو گئے۔ سوال: سارہ نے سیب کس کو دیا؟"])],
 gk:[
  TP("My body","",[
   pg("My Five Senses","Point to each part on yourself. Then match.","Name the sense organs and what they do.",MA("Write the letter in the box.",["I see with my","I hear with my","I smell with my","I taste with my","I touch with my"],["eyes","ears","nose","tongue","hands"])),
   pg("How Many?","Count on your own body and write the number.","Count body parts and write the number.",F("",["eyes: {{2}}","nose: {{1}}","ears: {{2}}","hands: {{2}}","fingers on one hand: {{5}}","mouth: {{1}}"],2)),
   pg("Keeping Clean","Is it a good habit? Circle Yes or No.","Know simple habits that keep us clean and healthy.",CH("",[["Washing hands before eating",0],["Brushing teeth at night",0],["Biting nails",1],["Taking a bath",0],["Wiping my nose on my sleeve",1]],YN),DR("Draw yourself.",220))],
   "Naming body parts and our five senses, and keeping our body clean.",
   ["Play \"touch your nose, touch your ears\".","Talk about what each sense does: eyes see, ears hear.","Make hand washing a song: count to 20 while washing."],
   ["Sing a body parts song with actions.","Play a smell or taste guessing game with safe foods."],
   "Mixing up left and right is fine at this age. Just name the body part.",
   ["Hamza's Five Senses","At the park Hamza saw birds, heard them sing, smelled the flowers, tasted a sweet mango and touched the soft grass. Ask: What did Hamza hear? What did he taste?"]),
  TP("Colours","",[
   pg("Colour Them Right","Colour each shape with the colour written under it.","Name and use the main colours.",CO("",[["circle","red"],["heart","pink"],["star","yellow"],["square","blue"],["tri","green"],["circle","orange"]])),
   pg("What Colour Is It?","Match each thing to its colour.","Match everyday things to their colours.",MA("Write the letter in the box.",["banana","grass","sky","apple","milk","crow"],["yellow","green","blue","red","white","black"])),
   pg("Colour Sort","Write each word under its colour.","Sort things by colour.",SO("",["Red","Yellow","Green"],["tomato","lemon","leaf","chilli","sun","parrot","strawberry","banana","peas"],[0,1,2,0,1,2,0,1,2]))],
   "Naming colours and matching them to things around us.",
   ["Name the colour of things your child uses: red cup, blue shirt.","Sort toys or clothes into colour groups.","Mix two paints to see a new colour."],
   ["Colour hunt: find five green things at home.","Sort socks by colour."],
   "Some children mix up blue and green for a long time. Keep naming both in daily talk.",
   ["The Rainbow After Rain","After the rain, Zara saw a rainbow over the roof. It was red, orange, yellow, green, blue and purple. Ask: Which colours were in the rainbow? Which is your favourite?"]),
  TP("Animals","",[
   pg("Animal Sounds","Match each animal to its sound.","Match animals to the sounds they make.",MA("Write the letter in the box.",["cow","cat","dog","goat","duck","lion"],["moo","meow","woof","maa","quack","roar"])),
   pg("Animal Homes","Match each animal to its home.","Match animals to where they live.",MA("Write the letter in the box.",["bird","fish","lion","bee","horse"],["nest","water","den","hive","stable"])),
   pg("Farm or Jungle?","Write each animal in the right box.","Sort farm animals and wild animals.",SO("",["Farm","Jungle"],["cow","tiger","hen","monkey","goat","elephant","buffalo","lion"],[0,1,0,1,0,1,0,1]))],
   "Naming animals, their sounds and homes, and sorting farm and wild animals.",
   ["Show pictures or toys and make each animal sound.","Ask where each animal lives.","Sort animal toys into farm and jungle groups."],
   ["Visit a park or farm and name the animals you see.","Play guess the animal from its sound."],
   "Use real names along with baby words: \"cow\", not only \"moo-moo\".",
   ["The Lost Goat","A little goat wandered away from the farm. In the jungle she met a parrot, a monkey and a big elephant. The elephant carried her home. Ask: Who helped the goat get home?"])]
},
/* ---------------- KG ---------------- */
kg:{
 english:[
  TP("Short vowel sounds","",[
   pg("Short a and e","Say each word. Write a or e in the gap.","Hear and write the short vowels a and e.",NO("a as in apple, e as in egg"),F("",["c{{a}}t","b{{e}}d","h{{a}}t","p{{e}}n","m{{a}}p","n{{e}}t","f{{a}}n","l{{e}}g"],2)),
   pg("Short i, o and u","Say each word. Write the missing vowel.","Hear and write the short vowels i, o and u.",F("",["p{{i}}g","d{{o}}g","s{{u}}n","b{{u}}s","f{{i}}sh","p{{o}}t","c{{u}}p","l{{i}}d","b{{o}}x"],3)),
   pg("Which Vowel?","Say the word. Circle the vowel you hear.","Identify the short vowel in a word.",CH("",[["hat",0],["ten",1],["sit",2],["top",3],["mug",4],["bag",0]],["a","e","i","o","u"]))],
   "The five short vowel sounds: a, e, i, o, u.",
   ["Say each vowel with an action: a for apple, e for egg.","Say a short word slowly and ask which vowel is in the middle.","Change the vowel to make new words: cat, cot, cut."],
   ["Make words with fridge letters and swap the middle vowel.","Play vowel I Spy."],
   "Short e and short i sound close. Exaggerate them: \"e-e-egg\", \"i-i-itch\".",
   ["The Cat on the Mat","A fat cat sat on a red mat. A pig in a wig ran up. The cat and the pig had fun in the sun. Ask: Where did the cat sit? Find words that rhyme with cat."]),
  TP("CVC words","",[
   pg("Blend the Sounds","Say each sound, then write the word.","Blend three sounds to read and write a word.",F("",["c – a – t → {{cat}}","d – o – g → {{dog}}","s – u – n → {{sun}}","p – i – n → {{pin}}","h – e – n → {{hen}}","b – a – g → {{bag}}"],2)),
   pg("Rhyming Words","Match the words that rhyme.","Hear and match rhyming CVC words.",MA("Write the letter in the box.",["cat","pen","dog","sun","pig"],["hat","ten","log","bun","wig"])),
   pg("Read and Choose","Read the sentence. Circle the word that fits.","Read simple sentences with CVC words.",CH("",[["I sit on a ___.",["mat","map"],0],["A ___ can fly.",["bat","bag"],0],["I nap on my ___.",["bed","bud"],0],["The dog can ___.",["run","rug"],0],["I drink from a ___.",["cup","cut"],0]]))],
   "Blending three sounds to read short words like cat, dog and sun.",
   ["Say each sound slowly: c, a, t.","Say them faster until they join: cat.","Write the word and read it back."],
   ["Play robot talk: say \"d-o-g\" and let your child guess the word.","Build words with letter cards."],
   "Some children add extra sounds (\"cuh-a-tuh\"). Keep each sound short and clipped.",
   ["Ben and His Red Hen","Ben has a red hen. The hen sat in a box. Ben fed the hen and the hen got an egg. Ask: What colour is the hen? Where did the hen sit?"]),
  TP("Sight words","",[
   pg("Trace the Sight Words","Trace each word. Read it out loud.","Read and write common sight words.",TR("",["the","and","is","I","to"],4)),
   pg("Fill In the Sight Word","Use the words in the box.","Use sight words to complete sentences.",BK(["the","is","I","and","can","see"]),F("",["{{I}} like mangoes.","This {{is}} my bag.","I {{can}} run fast.","Ali {{and}} Sara are friends.","I {{see}} a bird.","Look at {{the}} moon."])),
   pg("Find the Word","Circle every word that says the.","Recognise a sight word quickly.",{t:"circ",h:"",items:["the","and","the","is","to","the","we","the","it","he","the","me"],correct:["the"]},WR("Finish the sentence.",["I can ____________."]))],
   "Common words children learn to read at a glance: the, and, is, I, to, can, see.",
   ["Show the word on a card and read it together.","Find it in a story book.","Use it in a short spoken sentence."],
   ["Stick five sight word cards on the fridge and read them daily.","Play snap with sight word cards."],
   "Sight words like \"the\" cannot be sounded out. Children learn them by seeing them often.",
   ["I Can See","I can see the sun. I can see a bird and a tree. I can see my mum and my dad. Ask: What can you see right now? Say it with \"I can see\"."])],
 maths:[
  TP("Numbers to 20","",[
   pg("Count and Write","Count the shapes. Write the number.","Count objects to 20 and write the number.",CT("",[[11,"star"],[14,"circle"],[16,"heart"],[12,"square"],[19,"tri"],[20,"circle"]])),
   pg("Trace 11 to 19","Trace each number. Say it out loud.","Trace and say the teen numbers.",TR("",["11","13","15","17","19"],5)),
   pg("Number Track","Fill in the missing numbers.","Order numbers from 1 to 20.",BX("",["1|2|{{3}}|4|{{5}}|6|7|{{8}}|9|10","11|{{12}}|13|{{14}}|15|16|{{17}}|18|{{19}}|20"]))],
   "Counting objects to 20 and reading and writing the numbers 11 to 20.",
   ["Count real objects to 20, moving each one as you count.","Point out that 11 to 19 start with 1: one ten and some more.","Fill a number track together."],
   ["Count cars on the road up to 20.","Make a 1 to 20 number line on the floor with tape."],
   "Teen numbers are tricky: we say \"four\" first in fourteen but write the 1 first.",
   ["Twenty Kites","The sky was full of kites. Ali counted the red ones: 12. Then he counted the yellow ones: 8. Ask: Can you count to 20 like Ali?"]),
  TP("More and less","",[
   pg("Which Has More?","Circle the group that has more.","Compare two groups and find which has more.",CM("",[[5,3,"star"],[2,6,"circle"],[7,4,"heart"],[3,8,"square"]])),
   pg("One More, One Less","Fill in the blanks.","Find one more and one less than a number.",F("",["One more than 4 is {{5}}.","One less than 4 is {{3}}.","One more than 9 is {{10}}.","One less than 9 is {{8}}.","One more than 15 is {{16}}.","One less than 12 is {{11}}."])),
   pg("Biggest and Smallest","Circle the biggest number, then the smallest.","Compare numbers to 20.",CH("Circle the biggest number.",[["",["3","8","5"],1],["",["12","7","10"],0],["",["6","16","9"],1]]),CH("Circle the smallest number.",[["",["4","2","9"],1],["",["15","11","18"],1]]))],
   "Comparing groups and numbers: more, less, one more and one less.",
   ["Make two groups of objects and ask which has more.","Line them up side by side to check.","Add one object and say \"one more\"; take one away and say \"one less\"."],
   ["Compare biscuits on two plates.","On the stairs, one step up is one more, one step down is one less."],
   "A long, spread-out line can look like more. Line objects up one-to-one to check.",
   ["Sara's Bangles","Sara has 5 bangles and her sister has 3. Then Nani gives her sister 2 more. Ask: Who had more at first? Who has more now?"]),
  TP("Patterns","",[
   pg("What Comes Next?","Look at the pattern. Draw what comes next.","Continue simple repeating patterns.",PT("",[[["circle","star","circle","star","circle"],"star"],[["heart","heart","square","heart","heart"],"square"],[["tri","circle","tri","circle","tri"],"circle"],[["star","star","heart","star","star"],"heart"]])),
   pg("Number Patterns","Fill in the missing numbers.","Continue counting patterns.",BX("",["2|4|6|{{8}}|{{10}}","1|3|5|{{7}}|{{9}}","10|20|30|{{40}}|{{50}}","5|10|15|{{20}}|{{25}}"])),
   pg("Make a Pattern","Finish the patterns. Then make your own.","Create and extend repeating patterns.",PT("",[[["square","circle","circle","square","circle"],"circle"],[["star","heart","tri","star","heart"],"tri"]]),DR("Draw your own pattern.",200))],
   "Spotting, continuing and making simple repeating patterns.",
   ["Make a pattern with spoons and forks: spoon, fork, spoon, fork.","Ask what comes next and why.","Let your child make a pattern for you to continue."],
   ["Clap and stamp patterns: clap, clap, stamp.","Thread beads in a colour pattern."],
   "Some children copy the last item instead of the next. Say the pattern aloud together.",
   ["The Bead Necklace","Nani made a necklace with beads: red, blue, red, blue, red. Zara said, \"I know what comes next!\" Ask: Which colour comes next?"])],
 urdu:[
  TP("حروفِ تہجی","The Urdu alphabet",[
   pg("حروف ترتیب سے لکھیں|Letters in order","خالی خانوں میں حروف لکھیں۔","Write Urdu letters in order.",BX("",["ا|ب|{{پ}}|ت|{{ٹ}}|ث|{{ج}}","چ|{{ح}}|خ|د|{{ڈ}}|ذ|{{ر}}","ڑ|ز|{{ژ}}|س|{{ش}}|ص|{{ض}}"])),
   pg("مزید حروف|More letters in order","خالی خانوں میں حروف لکھیں۔","Write the second half of the alphabet in order.",BX("",["ط|{{ظ}}|ع|{{غ}}|ف|{{ق}}|ک","{{گ}}|ل|{{م}}|ن|{{و}}|ہ|{{ی}}"])),
   pg("پہلا حرف|First letter","ہر لفظ کا پہلا حرف لکھیں۔","Find the first letter of a word.",F("",["سیب ← {{س}}","کتاب ← {{ک}}","مچھلی ← {{م}}","انار ← {{ا}}","گھر ← {{گ}}","پتنگ ← {{پ}}"],2,1))],
   "Saying and writing the Urdu alphabet in order.",
   ["Sing the alphabet in order, pointing to each letter.","Cover a letter on a chart and ask which one is hiding.","Say a word and ask for its first letter."],
   ["Put alphabet cards in order on the floor.","Play \"first letter\": you say a word, your child says the letter."],
   "Children rush through the middle of the alphabet. Practise in chunks of five or six letters.",
   ["حروف کی قطار","صبح سکول میں سب حروف قطار میں کھڑے ہو گئے۔ الف سب سے آگے تھا اور ے سب سے پیچھے۔ سوال: سب سے آگے کون سا حرف تھا؟"]),
  TP("دو حرفی الفاظ","Two-letter words",[
   pg("حروف جوڑیں|Join two letters","دو حروف جوڑ کر لفظ لکھیں۔","Join two letters to make a word.",F("",["د + و = {{دو}}","ج + و = {{جو}}","ہ + م = {{ہم}}","ت + م = {{تم}}","د + ل = {{دل}}","ب + س = {{بس}}","گ + ل = {{گل}}","پ + ل = {{پل}}","ک + ل = {{کل}}"],3,1)),
   pg("لفظ توڑیں|Break the words","ہر لفظ کو توڑ کر حروف لکھیں۔","Break two-letter words into letters.",F("",["آم = {{آ + م}}","نل = {{ن + ل}}","سو = {{س + و}}","ہل = {{ہ + ل}}","تو = {{ت + و}}","بو = {{ب + و}}"],3,1)),
   pg("صحیح لفظ|Choose the word","صحیح لفظ پر دائرہ لگائیں۔","Read two-letter words in sentences.",CH("",[["ایک اور ایک ___",["دو","دل"],0],["پھول کو ___ بھی کہتے ہیں۔",["گل","پل"],0],["دریا پر ___ ہے۔",["پل","دل"],0],["___ ایک میٹھا پھل ہے۔",["آم","ہم"],0],["ہم ___ میں سکول جاتے ہیں۔",["بس","دو"],0]]))],
   "Joining two letters to read and write short words like دو، ہم، آم.",
   ["Say each letter sound, then join them: د + و = دو.","Write the word and read it back.","Break the word apart again."],
   ["Make two-letter word cards and read three a day.","Find the word آم at the fruit shop."],
   "Children may read letters separately without blending. Say the sounds faster until they join.",
   ["ہم دو","ہم دو بہن بھائی ہیں۔ ہم کو آم پسند ہیں۔ ہم بس میں سکول جاتے ہیں۔ سوال: بچوں کو کیا پسند ہے؟"]),
  TP("تین حرفی الفاظ","Three-letter words",[
   pg("حروف جوڑیں|Join three letters","تین حروف جوڑ کر لفظ لکھیں۔","Join three letters to make a word.",F("",["ق + ل + م = {{قلم}}","ن + م + ک = {{نمک}}","س + ی + ب = {{سیب}}","ک + ا + ن = {{کان}}","ن + ا + ک = {{ناک}}","ش + ہ + د = {{شہد}}"],2,1)),
   pg("لفظ توڑیں|Break the words","ہر لفظ کو توڑ کر حروف لکھیں۔","Break three-letter words into letters.",F("",["کمر = {{ک + م + ر}}","سبق = {{س + ب + ق}}","بیر = {{ب + ی + ر}}","ریل = {{ر + ی + ل}}","دیا = {{د + ی + ا}}","جال = {{ج + ا + ل}}"],2,1)),
   pg("جملہ مکمل کریں|Complete the sentence","ڈبے میں سے لفظ چن کر جملہ مکمل کریں۔","Use three-letter words in sentences.",BK(["قلم","سیب","کان","نمک","شہد"]),F("",["میں {{قلم}} سے لکھتا ہوں۔","ہم {{کان}} سے سنتے ہیں۔","{{سیب}} لال ہے۔","سالن میں {{نمک}} ڈالیں۔","{{شہد}} میٹھا ہوتا ہے۔"]))],
   "Reading and writing three-letter words such as قلم، سیب، کان.",
   ["Blend three sounds slowly: ق + ل + م.","Show how the letters join with their short forms.","Read the word in a short sentence."],
   ["Label things at home: قلم، سیب، کان.","Play \"break the word\" in the car."],
   "When a naughty-nine letter is in the middle, the word breaks into parts. That is correct.",
   ["سیب اور شہد","علی کو سیب اور شہد بہت پسند ہیں۔ اس نے قلم سے ایک سیب کی تصویر بنائی۔ سوال: علی کو کیا پسند ہے؟"])],
 gk:[
  TP("Seasons and weather","",[
   pg("Four Seasons","Match each season to what it is like.","Name the four seasons and describe them.",MA("Write the letter in the box.",["summer","winter","spring","autumn"],["hot and sunny","cold, we wear sweaters","flowers bloom","leaves fall"])),
   pg("What to Wear?","Write each thing under the right season.","Choose clothes for hot and cold weather.",SO("",["Summer","Winter"],["sweater","cotton shirt","sun cap","gloves","sandals","shawl"],[1,0,0,1,0,1])),
   pg("The Weather Today","Circle the answer. Then draw today's weather.","Describe the weather and what we need for it.",CH("",[["When it rains, we use an ___",["umbrella","ice cream"],0],["When it is sunny, it is ___",["hot","wet"],0],["In winter, we drink ___",["hot soup","cold lassi"],0],["Clouds bring ___",["rain","sand"],0]]),DR("Draw today's weather.",200))],
   "Naming the four seasons and the weather, and dressing for it.",
   ["Look out of the window and describe the weather.","Talk about what we wear and eat in each season.","Keep a simple weather chart for a week."],
   ["Draw a sun, cloud or raindrop on the calendar each day.","Sort winter and summer clothes together."],
   "Seasons feel abstract. Link each one to something your child remembers, like mangoes in summer.",
   ["Mangoes and Sweaters","In summer Zara ate mangoes and played with water. In winter she wore a warm sweater and drank hot soup. Ask: Which season do you like best? Why?"]),
  TP("Plants","",[
   pg("Parts of a Plant","Match each part to what it does.","Name the parts of a plant.",MA("Write the letter in the box.",["roots","stem","leaf","flower","fruit"],["hold the plant in the soil","holds the plant up","makes food for the plant","is colourful and smells nice","has seeds inside"])),
   pg("What Plants Need","Does a plant need it? Circle Yes or No.","Know what plants need to grow.",CH("",[["water",0],["sunlight",0],["air",0],["toys",1],["soil",0],["television",1]],YN)),
   pg("Fruits and Vegetables","Write each word in the right box.","Sort fruits and vegetables.",SO("",["Fruit","Vegetable"],["mango","potato","banana","carrot","guava","spinach","apple","onion"],[0,1,0,1,0,1,0,1]))],
   "Parts of a plant and what plants need to grow.",
   ["Look at a real plant and name its parts.","Plant a seed and talk about water and sunlight.","Sort fruits and vegetables in the kitchen."],
   ["Grow a chickpea or bean in wet cotton.","Water a plant together every day."],
   "Children often forget roots are part of the plant. Pull up a weed to show them.",
   ["The Little Seed","Bilal planted a seed in a pot. He gave it water and kept it in the sun. One morning a tiny green leaf peeped out! Ask: What did the seed need to grow?"]),
  TP("Community helpers","",[
   pg("Who Helps Us?","Match each helper to their job.","Name community helpers and their jobs.",MA("Write the letter in the box.",["doctor","teacher","police officer","farmer","firefighter","postman"],["makes us well","teaches us","keeps us safe","grows our food","puts out fires","brings letters"])),
   pg("Tools They Use","Match each helper to a tool.","Match helpers to the tools they use.",MA("Write the letter in the box.",["doctor","farmer","tailor","barber","baker"],["stethoscope","plough","sewing machine","scissors and comb","oven"])),
   pg("Who Would You Call?","Circle the right helper.","Know which helper to go to.",CH("",[["Someone is ill.",["doctor","baker"],0],["There is a fire.",["firefighter","tailor"],0],["My shirt is torn.",["tailor","farmer"],0],["I am lost.",["police officer","postman"],0]]),WR("When I grow up, I want to be",["____________________."]))],
   "The people who help us, the work they do and the tools they use.",
   ["Talk about helpers you meet: the doctor, the shopkeeper, the sweeper.","Ask how each person helps us.","Role-play one job with toys."],
   ["Say thank you to a helper you meet this week.","Play doctor or shopkeeper at home."],
   "Keep jobs open to everyone: girls and boys can be doctors, pilots and farmers.",
   ["A Busy Street","On Ali's street, the sweeper cleaned the road, the milkman brought milk and the postman brought a letter. Ask: Name the helpers on Ali's street. Who brought the letter?"])]
},
/* ---------------- GRADE 2 ---------------- */
g2:{
 english:[
  TP("Nouns and verbs","",[
   pg("Naming Words","Write each noun under person, place or thing.","Sort nouns into people, places and things.",SO("",["Person","Place","Thing"],["teacher","school","pencil","doctor","park","ball","farmer","bazaar","kite"],[0,1,2,0,1,2,0,1,2])),
   pg("Action Words","Circle the verb in each sentence.","Find the verb in a sentence.",CH("",[["The boy kicks the ball.",["boy","kicks","ball"],1],["Birds fly in the sky.",["Birds","fly","sky"],1],["Ammi cooks dinner.",["Ammi","cooks","dinner"],1],["We read books.",["We","read","books"],1],["The cat sleeps on the bed.",["cat","sleeps","bed"],1]])),
   pg("Noun or Verb?","Is it a noun or a verb? Circle.","Tell nouns and verbs apart.",CH("",[["jump",1],["apple",0],["swim",1],["chair",0],["write",1],["river",0],["sing",1],["bird",0]],["noun","verb"]))],
   "Nouns name people, places and things; verbs are action words.",
   ["Point to things around the room and say \"that is a noun\".","Do an action and say \"this is a verb\".","Read a sentence and find one of each."],
   ["Play noun and verb charades.","Make silly sentences with one noun and one verb."],
   "Some words can be both (a run, to run). Ask what the word is doing in that sentence.",
   ["The Kite Festival","At the park, children fly kites. Ali runs, Sara laughs and the kites dance in the sky. Ask: Find three nouns and three verbs in the story."]),
  TP("Adjectives","",[
   pg("Describing Words","Circle the adjective.","Find adjectives that describe nouns.",CH("",[["a red kite",["red","kite"],0],["a tall tree",["tree","tall"],1],["a soft pillow",["soft","pillow"],0],["a noisy class",["class","noisy"],1],["a sweet mango",["sweet","mango"],0],["a cold night",["night","cold"],1]])),
   pg("Add an Adjective","Use the words in the box.","Use adjectives to describe nouns.",BK(["big","hot","happy","green","loud","tiny"]),F("",["The {{tiny}} ant carried a crumb.","A {{big}} elephant drank water.","We drank {{hot}} chai.","The {{green}} parrot ate a chilli.","The {{loud}} drum woke the baby.","Sara is {{happy}} today."])),
   pg("Describe It","Write two adjectives for each thing.","Choose interesting adjectives.",WR("",["the sun: _________ and _________","an ice cream: _________ and _________","my school: _________ and _________"]))],
   "Adjectives describe nouns: size, colour, feeling, taste and more.",
   ["Hold an object and ask \"what is it like?\"","Collect the describing words on paper.","Use two adjectives in one sentence: a big, red ball."],
   ["Play \"I am thinking of something soft and white\".","Describe dinner with three adjectives."],
   "Children use \"nice\" and \"good\" for everything. Make a list of better words together.",
   ["The Tiny Ant and the Big Mango","A tiny ant found a big, yellow mango under a tall tree. It was sweet and juicy. The ant called all its friends for a feast. Ask: Find the describing words for the mango."]),
  TP("Sentences and punctuation","",[
   pg("Capitals and Full Stops","Write each sentence correctly.","Use capital letters and full stops.",F("",["ali has a red kite → {{Ali has a red kite.}}","we live in lahore → {{We live in Lahore.}}","my cat is black → {{My cat is black.}}"])),
   pg("Asking or Telling?","Choose a full stop or a question mark.","Tell questions from statements.",CH("",[["Where is my bag",1],["I like mangoes",0],["What is your name",1],["The sun is hot",0],["Can you swim",1],["Today is Monday",0]],[".","?"])),
   pg("Build a Sentence","Put the words in the right order.","Order words to make a sentence.",F("",["plays / Bilal / cricket → {{Bilal plays cricket.}}","is / sky / the / blue → {{The sky is blue.}}","a / I / book / read → {{I read a book.}}"]),WR("Write one asking sentence.",["______________________________?"]))],
   "A sentence starts with a capital letter, ends with a full stop or question mark, and makes sense.",
   ["Show a sentence and point to the capital and the full stop.","Say a telling sentence and an asking sentence; hear the difference.","Mix up the words of a sentence and put them back in order."],
   ["Write a shopping list as full sentences.","Play \"question or telling?\" in the car."],
   "Names of people and places need capitals too, like Ali and Lahore.",
   ["Where Is Moti?","Where is Moti? He is not under the bed. He is not in the garden. Look, he is on the roof! Ask: Which sentences ask a question? Which ones tell us something?"])],
 maths:[
  TP("Numbers to 1000","",[
   pg("Hundreds, Tens and Ones","Write the hundreds, tens and ones.","Understand place value to 1000.",F("",["345 = {{3}} hundreds {{4}} tens {{5}} ones","708 = {{7}} hundreds {{0}} tens {{8}} ones","162 = {{1}} hundred {{6}} tens {{2}} ones"]),F("Write the number.",["4 hundreds 2 tens 6 ones = {{426}}","8 hundreds 0 tens 3 ones = {{803}}","5 hundreds 5 tens 0 ones = {{550}}"])),
   pg("Number Words","Write the number or the words.","Read and write numbers to 1000 in words.",F("",["256 = {{two hundred and fifty-six}}","430 = {{four hundred and thirty}}","{{608}} = six hundred and eight","{{915}} = nine hundred and fifteen"]),BX("Count in hundreds.",["100|200|{{300}}|400|{{500}}|600|{{700}}|800|{{900}}|1000"])),
   pg("Compare and Order","Circle the greater number. Then order the numbers.","Compare and order numbers to 1000.",CH("",[["",["452","425"],0],["",["309","390"],1],["",["781","718"],0],["",["999","1000"],1]]),F("Order from smallest to greatest.",["514, 145, 451 → {{145, 451, 514}}","880, 808, 888 → {{808, 880, 888}}"]))],
   "Reading, writing and comparing numbers to 1000 using hundreds, tens and ones.",
   ["Show 100 as ten bundles of 10 sticks.","Build a number like 345 with bundles and loose sticks.","Compare numbers by looking at the hundreds first."],
   ["Read prices in the bazaar and say how many hundreds.","Count in tens and hundreds while walking."],
   "A zero in the middle (708) confuses children. Say \"no tens\" out loud.",
   ["The Marble Jar","Hina had 3 bags of 100 marbles, 4 cups of 10 marbles and 5 loose marbles. Ask: How many marbles does Hina have?"]),
  TP("Adding and subtracting","",[
   pg("Add with Regrouping","Add. Carry when the ones make 10 or more.","Add within 1000 with regrouping.",NO("When the ones add up to 10 or more, carry 1 ten to the tens."),F("",["38 + 25 = {{63}}","47 + 36 = {{83}}","59 + 14 = {{73}}","126 + 48 = {{174}}","275 + 117 = {{392}}","408 + 293 = {{701}}"],2)),
   pg("Subtract with Regrouping","Subtract. Regroup when the top digit is smaller.","Subtract within 1000 with regrouping.",F("",["52 − 27 = {{25}}","71 − 38 = {{33}}","90 − 46 = {{44}}","243 − 118 = {{125}}","530 − 265 = {{265}}","702 − 351 = {{351}}"],2)),
   pg("Word Problems","Read each problem. Add or subtract.","Solve addition and subtraction word problems.",F("",["A school has 245 boys and 218 girls. How many children are there? {{463}}","A shop had 500 eggs. It sold 236. How many eggs are left? {{264}}","Ali read 128 pages on Monday and 95 on Tuesday. How many pages did he read? {{223}}","A bus had 63 people. 27 got off. How many are on the bus now? {{36}}"]))],
   "Adding and subtracting numbers up to 1000 when we need to carry or regroup.",
   ["Use bundles of ten sticks to show 10 ones becoming 1 ten.","Write sums in columns, ones under ones.","Always start with the ones column."],
   ["Add two shop bills together.","Work out the change from 500 rupees."],
   "In subtraction, children often take the smaller digit from the bigger one (52 − 27 = 35). Remind them to regroup when the top digit is smaller.",
   ["The Cricket Match","Team A scored 148 runs. Team B scored 165 runs. Ask: Which team won? By how many runs?"]),
  TP("Multiplying by 2, 5 and 10","",[
   pg("Groups Of","Write how many in all.","Understand multiplication as equal groups.",F("",["4 groups of 5 = {{20}}","3 groups of 10 = {{30}}","6 groups of 2 = {{12}}","7 groups of 5 = {{35}}","5 groups of 10 = {{50}}","9 groups of 2 = {{18}}"],2)),
   pg("Times Tables 2, 5 and 10","Solve. Then count in fives.","Recall the 2, 5 and 10 times tables.",F("",["3 × 5 = {{15}}","8 × 10 = {{80}}","6 × 2 = {{12}}","9 × 5 = {{45}}","4 × 10 = {{40}}","7 × 2 = {{14}}","10 × 5 = {{50}}","2 × 10 = {{20}}","8 × 2 = {{16}}"],3),BX("Count in fives.",["5|10|{{15}}|20|{{25}}|30|{{35}}|40|{{45}}|50"])),
   pg("Word Problems","Read and solve.","Solve multiplication word problems.",F("",["A hand has 5 fingers. How many fingers are on 6 hands? {{30}}","A packet has 10 biscuits. How many biscuits are in 4 packets? {{40}}","Each bicycle has 2 wheels. How many wheels are on 8 bicycles? {{16}}","One pencil costs 5 rupees. How much do 7 pencils cost? {{35}} rupees"]))],
   "Multiplication as equal groups, and the 2, 5 and 10 times tables.",
   ["Make equal groups of objects and count them.","Write it as repeated adding: 5 + 5 + 5 = 15.","Then write it as multiplying: 3 × 5 = 15."],
   ["Count money in 5 and 10 rupee coins.","Skip count in fives on the stairs."],
   "Children sometimes add instead of multiply (3 × 5 = 8). Go back to drawing the groups.",
   ["Biscuit Packets","Ammi bought 4 packets of biscuits. Each packet had 10 biscuits. The children shared them at a party. Ask: How many biscuits were there?"])],
 science:[
  TP("Living and non-living","",[
   pg("Living or Non-living?","Write each word in the right box.","Sort living and non-living things.",SO("",["Living","Non-living"],["tree","rock","cat","chair","fish","car","flower","pencil"],[0,1,0,1,0,1,0,1])),
   pg("Signs of Life","True or false? Circle.","Know what all living things do.",CH("",[["Living things grow.",0],["Living things need food and water.",0],["A rock can breathe.",1],["Living things can have young ones.",0],["A toy car is living because it moves.",1],["Plants are living things.",0]],TF)),
   pg("What Living Things Need","Use the words in the box.","Name what living things need.",BK(["food","water","air","shelter"]),F("",["Fish need {{water}} to live in.","We breathe {{air}}.","A bird builds a nest for {{shelter}}.","Animals eat {{food}} to grow."]),WR("Name one living and one non-living thing in your room.",["Living: __________   Non-living: __________"]))],
   "How we can tell living things from non-living things.",
   ["List what living things do: grow, eat, breathe, move, have young.","Test objects against the list.","Talk about tricky ones: a car moves but does not grow."],
   ["Go on a living and non-living hunt in the garden.","Watch a plant grow over a week."],
   "Children think anything that moves is alive (clouds, cars). Use the full list, not just movement.",
   ["Is the Robot Alive?","Saad's robot could walk and talk. \"Is it alive?\" asked his sister. Saad thought: it does not eat, grow or breathe. Ask: Is the robot living? Why not?"]),
  TP("Plants","",[
   pg("Parts and Jobs","Match each plant part to its job.","Know what each part of a plant does.",MA("Write the letter in the box.",["root","stem","leaf","flower","seed"],["takes in water","carries water up","makes food using sunlight","makes seeds","grows into a new plant"])),
   pg("How a Plant Grows","Number the steps from 1 to 4.","Order the stages of plant growth.",F("",["{{1}} A seed is planted.","{{3}} Leaves grow.","{{2}} A small shoot comes out.","{{4}} The plant has flowers."])),
   pg("Plant Experiment","Read about the experiment. Answer the questions.","Explain what plants need from a simple test.",PA("Two pots had the same seeds. Pot A was kept in the sun and watered. Pot B was kept in a dark cupboard with no water."),CH("",[["Which pot grew well?",["Pot A","Pot B"],0],["What did Pot B miss?",["sunlight and water","soil"],0]]),WR("What do plants need to grow?",["______________________________"]))],
   "Plant parts, what each part does, and how a plant grows from a seed.",
   ["Pull up a small weed and look at its roots.","Put a white flower in coloured water and watch the stem carry it up.","Plant seeds and record growth each day."],
   ["Grow beans in a clear glass to see the roots.","Measure your plant every two days."],
   "Children think plants eat soil. Explain that leaves make food using sunlight.",
   ["The Thirsty Plant","Zara forgot to water her plant for a week. Its leaves drooped. When she gave it water and put it in the sun, it stood tall again. Ask: Why did the leaves droop?"]),
  TP("Animal habitats","",[
   pg("Where Do They Live?","Match each animal to its habitat.","Match animals to their habitats.",MA("Write the letter in the box.",["camel","fish","polar bear","monkey","frog","eagle"],["desert","sea","ice","forest","pond","mountain"])),
   pg("Water or Land?","Write each animal in the right box.","Sort animals by habitat.",SO("",["Water","Land"],["shark","lion","octopus","goat","whale","horse"],[0,1,0,1,0,1])),
   pg("Made for Their Home","Circle the answer.","Explain how animals are suited to their habitat.",CH("",[["A camel stores fat in its",["hump","tail"],0],["A fish breathes with",["gills","lungs"],0],["A polar bear has thick",["fur","feathers"],0],["A duck has webbed feet to",["swim","climb"],0]]))],
   "A habitat is where an animal lives, and animals have body parts that suit their home.",
   ["Name an animal and ask where it lives.","Talk about what the habitat gives it: food, water, shelter.","Find one body part that helps it live there."],
   ["Watch a nature programme and name the habitats.","At the zoo, find animals from the desert, sea and forest."],
   "Avoid saying animals choose their homes. Their bodies suit the place they live.",
   ["Kami the Camel","Kami the camel lives in the Thar desert. The sand is hot, but her wide feet do not sink. She can go many days without water. Ask: How is Kami suited to the desert?"])],
 history:[
  TP("Early people","",[
   pg("How Early People Lived","True or false? Circle.","Describe how the first people lived.",CH("",[["Early people hunted animals for food.",0],["Early people had cars.",1],["They made tools from stone.",0],["They lived in caves and huts.",0],["They watched television.",1],["They learnt to make fire.",0]],TF)),
   pg("Then and Now","Match each old thing to what we use now.","Compare life long ago with life today.",MA("Write the letter in the box.",["cave","stone tool","fire for light","walking","animal-skin clothes"],["house","knife","electric bulb","car","cotton clothes"])),
   pg("Cave Painting","Early people painted animals on cave walls.","Use art to show what early people valued.",DR("Draw your own cave painting.",320),WR("What did you draw?",["______________________________"]))],
   "How the first people found food, made tools and lived together.",
   ["Ask: How would you live without shops or electricity?","Compare a stone tool with a knife at home.","Make a simple then-and-now chart."],
   ["Make a cave painting on brown paper.","Try grinding grain between two stones."],
   "Early history covers a very long time. A simple timeline from long ago to now helps.",
   ["The First Fire","Long ago, a family sat in a cold, dark cave. A boy rubbed two sticks until smoke came out, then fire! Now they were warm and could cook. Ask: How did fire change their lives?"]),
  TP("The Indus Valley","",[
   pg("Mohenjo-daro","Read. Then fill in the blanks.","Describe the Indus Valley city of Mohenjo-daro.",PA("Long ago, people built a great city called Mohenjo-daro beside the Indus River, in what is now Sindh, Pakistan. It had straight streets, brick houses, covered drains and a big bath."),F("",["The city was built near the {{Indus}} River.","The houses were made of {{bricks}}.","Today the city is in the province of {{Sindh}}."])),
   pg("Indus Valley Facts","True or false? Circle.","Recall facts about Indus Valley life.",CH("",[["The Indus people made clay toys.",0],["The city had covered drains.",0],["Harappa is another Indus city.",0],["The Indus people used mobile phones.",1],["They farmed wheat and cotton.",0]],TF)),
   pg("Design a Seal","Indus people made small stone seals with animals on them.","Learn about Indus seals through art.",DR("Draw your own seal.",300),WR("Which animal is on your seal?",["______________________________"]))],
   "The Indus Valley people of Mohenjo-daro and Harappa, one of the world's first cities, here in Pakistan.",
   ["Find the Indus River and Sindh on a map of Pakistan.","Look at pictures of the brick streets and the Great Bath.","Compare their homes with ours."],
   ["Build a brick house with blocks or clay.","Visit a museum or watch a short video about Mohenjo-daro."],
   "Children may think the city is still lived in. Explain that people now visit its ruins.",
   ["A Day in Mohenjo-daro","A boy woke up in his brick house. He helped his father carry cotton to the market, then played with a clay cart. In the evening, the city drains carried the rain away. Ask: What did the boy play with?"]),
  TP("Ancient Egypt","",[
   pg("Life by the Nile","Read. Then fill in the blanks.","Describe how Ancient Egyptians lived by the Nile.",PA("Ancient Egypt grew along the Nile River in Africa. Farmers grew wheat on its banks. Kings called pharaohs built huge stone pyramids."),F("",["Egypt grew along the {{Nile}} River.","Kings of Egypt were called {{pharaohs}}.","Pyramids are made of {{stone}}."])),
   pg("Egypt Words","Match each word to its meaning.","Learn key words about Ancient Egypt.",MA("Write the letter in the box.",["pyramid","pharaoh","papyrus","hieroglyphs","mummy"],["a huge stone tomb","a king of Egypt","paper made from reeds","picture writing","a body kept safe for a long time"])),
   pg("Picture Writing","Hieroglyphs were picture writing.","Try picture writing like the Egyptians.",DR("Make up a picture for each letter of your name.",340))],
   "How the people of Ancient Egypt lived by the Nile, their kings and their pyramids.",
   ["Find Egypt and the Nile on a world map.","Compare the Nile with the Indus: both rivers helped farming.","Look at hieroglyphs and invent picture writing."],
   ["Build a pyramid from sugar cubes or blocks.","Write a secret message in picture writing."],
   "Keep mummies simple and not scary: it was a way to honour people who had died.",
   ["The Boy and the River","Every year the Nile flooded and left rich mud on the fields. A boy helped his father plant wheat in the soft mud. Ask: How did the river help the farmers?"])],
 geography:[
  TP("Maps and directions","",[
   pg("North, South, East, West","Fill in the blanks.","Use the four compass directions.",NO("North, East, South, West: go round clockwise like the hands of a clock."),F("",["The sun rises in the {{east}}.","The sun sets in the {{west}}.","The opposite of north is {{south}}.","The opposite of east is {{west}}."])),
   pg("Map Key","Match each symbol on our map key to its meaning.","Read a simple map key.",MA("Write the letter in the box.",["blue","green","a small square","a dotted line","a red cross"],["water","park","house","path","hospital"])),
   pg("Draw a Map","Draw your room as a bird would see it from above.","Draw a simple map with a key.",DR("My room from above. Add a key.",340),WR("What is in the north of your room?",["______________________________"]))],
   "Reading simple maps, using a key, and the four directions.",
   ["Show a map of your area on a phone and find your home.","Stand outside and point to where the sun rises: east.","Draw a bird's-eye map of a room together."],
   ["Hide a treat and give directions to find it.","Draw the way from home to school."],
   "Children mix up left and right with east and west. Directions stay the same when you turn around.",
   ["The Treasure Map","Bilal found a map in Dada's cupboard: walk north to the tree, then east to the well. He followed it and found a box of sweets! Ask: Which way did Bilal walk first?"]),
  TP("Continents and oceans","",[
   pg("Seven Continents","Use the words in the box.","Name the seven continents.",BK(["Asia","Africa","Europe","North America","South America","Australia","Antarctica"]),F("",["Pakistan is in {{Asia}}.","Egypt is in {{Africa}}.","The coldest continent is {{Antarctica}}.","The biggest continent is {{Asia}}."])),
   pg("Five Oceans","Use the words in the box. Then circle land or water.","Name the five oceans.",BK(["Pacific","Atlantic","Indian","Southern","Arctic"]),F("",["The ocean south of Pakistan is the {{Indian}} Ocean.","The biggest ocean is the {{Pacific}} Ocean.","The ocean at the North Pole is the {{Arctic}} Ocean."]),CH("",[["continent",0],["ocean",1],["island",0],["sea",1]],["land","water"])),
   pg("Animals Around the World","Match each animal to its continent.","Link animals to the continents where they live.",MA("Write the letter in the box.",["kangaroo","penguin","lion","panda","llama"],["Australia","Antarctica","Africa","Asia","South America"]))],
   "The seven continents and five oceans, and where Pakistan is on the globe.",
   ["Find Pakistan on a globe or world map.","Trace each continent with a finger and say its name.","Colour the oceans blue on a printed map."],
   ["Sing a continents song.","Pick a country each week and find it on the map."],
   "Flat maps make sizes look wrong. Use a globe when you can.",
   ["Penguin's Postcard","A penguin in Antarctica sent a postcard to a camel in Africa: \"It is very cold here. Is it hot there?\" The camel replied, \"Very hot! Come and visit.\" Ask: Which continents do they live in?"]),
  TP("Provinces of Pakistan","",[
   pg("Our Provinces","Use the words in the box.","Name the provinces of Pakistan and their capitals.",BK(["Punjab","Sindh","Khyber Pakhtunkhwa","Balochistan","Islamabad"]),F("",["Lahore is the capital of {{Punjab}}.","Karachi is the capital of {{Sindh}}.","Peshawar is the capital of {{Khyber Pakhtunkhwa}}.","Quetta is the capital of {{Balochistan}}.","The capital of Pakistan is {{Islamabad}}."]),NO("Pakistan also has Gilgit-Baltistan and Azad Jammu and Kashmir.")),
   pg("Pakistan Facts","Circle the answer.","Recall key facts about Pakistan's land.",CH("",[["The largest province by area is",["Balochistan","Punjab"],0],["The province with the most people is",["Punjab","Sindh"],0],["Pakistan's sea coast is in Sindh and",["Balochistan","Punjab"],0],["The highest mountain in Pakistan is",["K2","Murree"],0]])),
   pg("Map of Pakistan","Draw a map of Pakistan and mark your city.","Locate your own city on a map of Pakistan.",DR("Draw Pakistan. Mark your city with a star.",360),WR("I live in the province of",["____________________."]))],
   "The provinces of Pakistan, their capitals, and where we live.",
   ["Look at a map of Pakistan and trace each province.","Say each capital and find it.","Mark your own city and the cities where relatives live."],
   ["Plan a pretend trip from Karachi to Gilgit.","Cook or taste a dish from another province."],
   "Children may think the capital is Karachi or Lahore. Remind them it is Islamabad.",
   ["Letters from Cousins","Ayesha got letters from her cousins in Quetta, Peshawar and Karachi. Each one wrote about the food and weather in their city. Ask: Which provinces are these cities in?"])],
 urdu:[
  TP("واحد جمع","Singular and plural",[
   pg("جمع بنائیں|Make it plural","ہر لفظ کی جمع لکھیں۔","Write the plural of Urdu nouns.",F("",["کتاب ← {{کتابیں}}","لڑکا ← {{لڑکے}}","پھول ← {{پھول}}","گھر ← {{گھر}}","کمرہ ← {{کمرے}}","بکری ← {{بکریاں}}","چڑیا ← {{چڑیاں}}","میز ← {{میزیں}}"],2,1)),
   pg("واحد بنائیں|Make it singular","ہر لفظ کا واحد لکھیں۔","Write the singular of Urdu nouns.",F("",["لڑکیاں ← {{لڑکی}}","بستے ← {{بستہ}}","گاڑیاں ← {{گاڑی}}","کرسیاں ← {{کرسی}}","پنکھے ← {{پنکھا}}","آنکھیں ← {{آنکھ}}"],2,1)),
   pg("صحیح لفظ چنیں|Choose the right word","صحیح لفظ پر دائرہ لگائیں۔","Use singular and plural correctly in sentences.",CH("",[["میرے پاس دو ___ ہیں۔",["قلم","قلموں"],0],["باغ میں بہت سی ___ ہیں۔",["تتلی","تتلیاں"],1],["یہ ایک ___ ہے۔",["کتاب","کتابیں"],0],["درخت پر چار ___ ہیں۔",["چڑیا","چڑیاں"],1]]))],
   "Singular means one, plural means more than one: کتاب، کتابیں.",
   ["Show one object and then many, and say both words.","Point out common endings: ا becomes ے, ی becomes یاں.","Note words that stay the same, like پھول."],
   ["Count things at home and say the plural.","Play \"one or many\" with toys."],
   "Some words do not change (پھول، گھر). Learn them as special words.",
   ["ایک بکری، دو بکریاں","دادا جان کے پاس ایک بکری تھی۔ ایک دن وہ بازار سے دو اور بکریاں لائے۔ اب بچے تین بکریوں کے ساتھ کھیلتے ہیں۔ سوال: اب کتنی بکریاں ہیں؟"]),
  TP("مذکر مؤنث","Masculine and feminine",[
   pg("مؤنث لکھیں|Write the feminine","ہر لفظ کا مؤنث لکھیں۔","Write feminine forms of Urdu nouns.",F("",["لڑکا ← {{لڑکی}}","بیٹا ← {{بیٹی}}","دادا ← {{دادی}}","مرغا ← {{مرغی}}","گھوڑا ← {{گھوڑی}}","بادشاہ ← {{ملکہ}}"],2,1)),
   pg("مذکر لکھیں|Write the masculine","ہر لفظ کا مذکر لکھیں۔","Write masculine forms of Urdu nouns.",F("",["بہن ← {{بھائی}}","نانی ← {{نانا}}","بکری ← {{بکرا}}","ماں ← {{باپ}}","شیرنی ← {{شیر}}","چچی ← {{چچا}}"],2,1)),
   pg("ترتیب دیں|Sort the words","ہر لفظ صحیح خانے میں لکھیں۔","Sort nouns as masculine or feminine.",SO("",["مذکر","مؤنث"],["ابو","امی","بیٹا","بیٹی","ماموں","خالہ","شیر","مرغی"],[0,1,0,1,0,1,0,1]))],
   "Words for males and females: لڑکا، لڑکی; دادا، دادی.",
   ["Start with family words the child knows: امی، ابو.","Show the pattern: ا often becomes ی.","Sort word cards into two groups."],
   ["Name family members and say if each word is مذکر or مؤنث.","Play animal pairs: شیر، شیرنی."],
   "Some pairs are completely different words (ماں، باپ). Learn these as pairs.",
   ["شیر اور شیرنی","جنگل میں ایک شیر اور شیرنی رہتے تھے۔ ان کے دو ننھے بچے تھے۔ شیرنی بچوں کو شکار کرنا سکھاتی تھی۔ سوال: بچوں کو شکار کون سکھاتا تھا؟"]),
  TP("متضاد الفاظ","Opposites",[
   pg("الٹ لکھیں|Write the opposite","ہر لفظ کا متضاد لکھیں۔","Write opposites of common Urdu words.",F("",["دن ← {{رات}}","اوپر ← {{نیچے}}","گرم ← {{ٹھنڈا}}","بڑا ← {{چھوٹا}}","اندر ← {{باہر}}","سچ ← {{جھوٹ}}","خوش ← {{اداس}}","آگے ← {{پیچھے}}"],2,1)),
   pg("جوڑ ملائیں|Match the opposites","متضاد الفاظ کے جوڑے ملائیں۔","Match pairs of opposites.",MA("خانے میں حرف لکھیں۔",["امیر","مشکل","نیا","موٹا","لمبا"],["غریب","آسان","پرانا","پتلا","چھوٹا"])),
   pg("جملہ مکمل کریں|Complete the sentence","صحیح متضاد لفظ لکھیں۔","Use opposites in sentences.",F("",["ہاتھی بڑا ہے اور چوہا {{چھوٹا}} ہے۔","سورج دن میں نکلتا ہے اور چاند {{رات}} کو۔","چائے گرم ہے اور برف {{ٹھنڈی}} ہے۔","میرا بستہ نیا ہے اور بھائی کا {{پرانا}} ہے۔"]))],
   "Words with opposite meanings: دن، رات; اوپر، نیچے.",
   ["Act out opposites: stand up, sit down.","Say a word and let your child say its opposite.","Use both words in one sentence."],
   ["Find opposites at home: hot and cold water, open and closed doors.","Play opposites ping-pong in the car."],
   "Some words have more than one opposite. Accept any sensible answer.",
   ["ہاتھی اور چوہا","ایک بڑا ہاتھی اور ایک چھوٹا چوہا دوست تھے۔ ہاتھی آہستہ چلتا تھا اور چوہا تیز بھاگتا تھا۔ سوال: کہانی میں متضاد الفاظ تلاش کریں۔"])]
},
/* ---------------- GRADE 3 ---------------- */
g3:{
 english:[
  TP("Parts of speech","",[
   pg("Noun, Verb or Adjective?","Write each word in the right box.","Sort words into nouns, verbs and adjectives.",SO("",["Noun","Verb","Adjective"],["river","swim","blue","teacher","write","tall","city","laugh","brave"],[0,1,2,0,1,2,0,1,2])),
   pg("Pronouns","Replace the name with a pronoun from the box.","Use pronouns to avoid repeating nouns.",BK(["He","She","It","They","We"]),F("",["Sara is my friend. {{She}} likes to paint.","Ali plays cricket. {{He}} is a good batsman.","The cat is hungry. {{It}} wants milk.","Hina and Saad are twins. {{They}} are eight.","My brother and I go to school. {{We}} walk together."])),
   pg("Adverbs","Circle the adverb. Then add your own.","Find and use adverbs that tell how.",CH("",[["The tortoise walked slowly.",["tortoise","slowly"],1],["She sang beautifully.",["sang","beautifully"],1],["The baby slept quietly.",["quietly","baby"],0],["He ran quickly to school.",["quickly","school"],0]]),F("Add an adverb.",["The rain fell {{heavily or softly}}."]))],
   "The main word classes: nouns, pronouns, verbs, adjectives and adverbs.",
   ["Colour-code a sentence: nouns blue, verbs red, adjectives green.","Replace nouns with pronouns to avoid repeating names.","Ask \"how?\" to find the adverb."],
   ["Play word-class bingo with a story page.","Make silly sentences: adjective, noun, verb, adverb."],
   "Many adverbs end in -ly, but not all (fast, well). Ask what the word tells us about the action.",
   ["The Tailorbird","A tiny tailorbird quickly stitched two leaves together with grass. She worked carefully all day. Soon her soft nest was ready. Ask: Find two adverbs and two adjectives."]),
  TP("Prefixes and suffixes","",[
   pg("Prefixes un- and re-","Add the prefix and write the new word.","Use the prefixes un- and re-.",NO("un- means not. re- means again."),F("",["un + happy = {{unhappy}}","re + write = {{rewrite}}","un + kind = {{unkind}}","re + play = {{replay}}","un + lock = {{unlock}}","re + build = {{rebuild}}"],2)),
   pg("Suffixes -ful, -less, -er","Add the suffix and write the new word.","Use the suffixes -ful, -less and -er.",F("",["help + ful = {{helpful}}","care + less = {{careless}}","teach + er = {{teacher}}","hope + ful = {{hopeful}}","fear + less = {{fearless}}","farm + er = {{farmer}}"],2)),
   pg("Word Meanings","Match each word to its meaning.","Work out word meanings from prefixes and suffixes.",MA("Write the letter in the box.",["unhappy","reread","careful","painless","singer"],["not happy","read again","full of care","without pain","a person who sings"]))],
   "Adding a prefix to the start or a suffix to the end of a word changes its meaning.",
   ["Write the base word, then add the prefix in another colour.","Say what the prefix or suffix means.","Build a word family from one base: help, helpful, helpless, helper."],
   ["Play un- opposites: tidy, untidy.","Spot -ful and -less words in a newspaper."],
   "Spelling sometimes changes when adding suffixes (happy, happiness). Teach the simple ones first.",
   ["The Careless Painter","A careless painter spilled red paint. He was unhappy, but a helpful boy cleaned it up. Together they repainted the wall. Ask: Find the words with prefixes and suffixes."]),
  TP("Paragraph writing","",[
   pg("Topic Sentences","Circle the best topic sentence.","Choose a topic sentence for a paragraph.",CH("",[["A paragraph about mangoes",["Mangoes are my favourite summer fruit.","I went to school."],0],["A paragraph about my school",["Cats like milk.","My school has a big playground."],1],["A paragraph about rain",["Rain makes everything fresh and green.","I have a red bag."],0]])),
   pg("Key Word Outline","Read the paragraph. Write 3 key words for each sentence.","Make a key word outline from a paragraph.",PA("Camels live in deserts. They can walk for days without water. Their wide feet stop them sinking in the sand. Long eyelashes keep sand out of their eyes."),F("",["{{camels, live, deserts}}","{{walk, days, no water}}","{{wide feet, sand}}","{{eyelashes, sand, eyes}}"])),
   pg("Write a Paragraph","Cover the paragraph. Use only your key words.","Write a paragraph from a key word outline.",WR("Write about camels in your own words.",["______________________________________","______________________________________","______________________________________","______________________________________"]))],
   "A paragraph has one main idea: a topic sentence, supporting sentences and an ending.",
   ["Read a short paragraph and find its main idea.","Pick 2 or 3 key words from each sentence to make an outline.","Retell the paragraph from the key words, then write it in your own words."],
   ["After a trip, write three key words, then a short paragraph about it.","Read a paragraph aloud and ask your child to give it a title."],
   "Copying sentences is not writing. Cover the original and write only from the key words.",
   ["Our Trip to the Hills","Last summer we went to Murree. The air was cool and fresh. We walked on the Mall Road and ate roasted corn. Ask: What is the main idea? Which sentences support it?"])],
 maths:[
  TP("Multiplication and division","",[
   pg("Times Tables 3 and 4","Solve.","Recall the 3 and 4 times tables.",F("",["3 × 4 = {{12}}","6 × 3 = {{18}}","8 × 4 = {{32}}","7 × 3 = {{21}}","9 × 4 = {{36}}","4 × 4 = {{16}}","9 × 3 = {{27}}","6 × 4 = {{24}}","10 × 3 = {{30}}"],3)),
   pg("Sharing Equally","Divide. Then complete the fact families.","Divide using known times tables.",F("",["12 ÷ 3 = {{4}}","20 ÷ 4 = {{5}}","18 ÷ 3 = {{6}}","28 ÷ 4 = {{7}}","30 ÷ 3 = {{10}}","24 ÷ 4 = {{6}}"],3),F("Fact families.",["3 × 5 = 15, so 15 ÷ 3 = {{5}}","4 × 7 = 28, so 28 ÷ 7 = {{4}}"])),
   pg("Word Problems","Read and solve.","Solve multiplication and division word problems.",F("",["There are 24 students in 4 equal rows. How many are in each row? {{6}}","An egg tray has 6 rows of 3 eggs. How many eggs are there? {{18}}","Saad shares 32 sweets among 4 friends. How many does each friend get? {{8}}","A spider has 8 legs. How many legs do 3 spiders have? {{24}}"]))],
   "Multiplying and dividing with the 3 and 4 times tables, and how the two are linked.",
   ["Show 3 × 4 as 3 rows of 4 objects.","Share the same objects into equal groups to show division.","Write the fact family: 3 × 4, 4 × 3, 12 ÷ 3, 12 ÷ 4."],
   ["Share fruit equally among the family.","Arrange cups or chairs in rows and count them."],
   "Division can mean \"how many in each group\" or \"how many groups\". Act out both.",
   ["The Samosa Party","Ammi made 24 samosas for 4 guests. Each guest got the same number. Ask: How many samosas did each guest get?"]),
  TP("Fractions","",[
   pg("Halves, Thirds, Quarters","Write the fraction that is shaded.","Name fractions of a shape.",FR("",[[2,1,"circle"],[4,1,"rect"],[4,3,"circle"],[3,1,"rect"],[3,2,"circle"],[4,2,"rect"]])),
   pg("Fraction of a Number","Find the fraction of each number.","Find halves, thirds and quarters of numbers.",F("",["½ of 10 = {{5}}","½ of 16 = {{8}}","¼ of 8 = {{2}}","¼ of 20 = {{5}}","⅓ of 12 = {{4}}","⅓ of 9 = {{3}}"],2)),
   pg("Compare Fractions","Circle the bigger fraction. Then solve.","Compare unit fractions and solve problems.",CH("",[["",["½","¼"],0],["",["⅓","½"],1],["",["¾","¼"],0],["",["⅔","⅓"],0]]),F("",["A roti is cut into 4 equal pieces. Ali eats 1 piece. What fraction did he eat? {{¼}}","Sara has 12 grapes and eats half. How many does she eat? {{6}}"]))],
   "Equal parts of a whole: halves, thirds and quarters, and finding a fraction of a number.",
   ["Fold paper into equal parts and name them.","Cut a roti into halves and quarters.","Share objects equally to find ½ or ¼ of a number."],
   ["Share a pizza or roti into equal pieces.","Use measuring cups: half and quarter."],
   "Children think a bigger bottom number means a bigger fraction (¼ > ½). Fold paper to compare.",
   ["Sharing the Paratha","Dadi made one big paratha for four grandchildren. She cut it into 4 equal pieces. Hamza was so hungry he ate 2 pieces. Ask: What fraction did Hamza eat?"]),
  TP("Bar models","",[
   pg("Part-Whole Bar Models","Find the missing number in each bar.","Use part-whole bar models.",BR("",[[45,30,75,2],[120,80,200,1],[64,36,100,0]]),F("Write the number sentence.",["45 + 30 = {{75}}","200 − 120 = {{80}}"])),
   pg("Comparison Problems","Draw a bar model to help you.","Solve comparison word problems.",F("",["Ali has 35 marbles. Bilal has 12 more than Ali. How many does Bilal have? {{47}}","A red ribbon is 90 cm long. A blue ribbon is 25 cm shorter. How long is the blue ribbon? {{65}} cm","Sara read 48 pages. Zara read 60 pages. How many more pages did Zara read? {{12}}"])),
   pg("Two-Step Problems","Draw a bar model, then solve.","Solve two-step word problems.",F("",["A shop had 150 pencils. It sold 45 in the morning and 38 in the afternoon. How many are left? {{67}}","Hina buys 3 notebooks at 40 rupees each. She pays with 200 rupees. How much change does she get? {{80}} rupees","There are 5 rows of 6 chairs. 7 chairs are empty. How many people are sitting? {{23}}"]))],
   "Drawing bar models to see what a word problem is asking, before doing the sum.",
   ["Read the problem and draw one bar for the whole.","Split the bar into the parts you know and mark the missing part with ?.","Decide whether you are finding a part or the whole, then add or subtract."],
   ["Turn shopping trips into bar model problems.","Let your child draw the bar before you check the answer."],
   "Children grab the numbers and add them. The bar picture shows when to subtract instead.",
   ["Bilal's Savings","Bilal saved 250 rupees in his money box. He wants a cricket bat that costs 400 rupees. Ask: Draw a bar. How much more does Bilal need to save?"])],
 science:[
  TP("The human body","",[
   pg("Organs and Their Jobs","Match each organ to its job.","Name main organs and what they do.",MA("Write the letter in the box.",["heart","lungs","brain","stomach","bones"],["pumps blood","help us breathe","controls the body","breaks down food","hold the body up"])),
   pg("Healthy or Unhealthy?","Circle healthy or unhealthy.","Choose habits that keep the body healthy.",CH("",[["eating fruit and vegetables",0],["sleeping late every night",1],["drinking plenty of water",0],["playing outside",0],["eating sweets all day",1],["washing hands",0]],["healthy","unhealthy"])),
   pg("Body Facts","Use the words in the box.","Recall facts about bones, muscles and organs.",BK(["206","skeleton","Muscles","heart","lungs"]),F("",["An adult has {{206}} bones.","All our bones together make the {{skeleton}}.","{{Muscles}} help us move our bones.","The {{heart}} beats faster when we run.","We breathe in air with our {{lungs}}."]))],
   "Main organs, what they do, and habits that keep the body healthy.",
   ["Feel your heartbeat before and after running.","Breathe deeply and feel your chest rise.","Talk about food, sleep, water and exercise."],
   ["Count your pulse for 15 seconds.","Plan a healthy plate together."],
   "Keep it simple and positive. Avoid scary talk about illness.",
   ["The Body Team","Ali's body is like a team. His brain is the captain, his heart pumps blood and his lungs bring in fresh air. When Ali plays football, the whole team works hard. Ask: Which organ is the captain?"]),
  TP("Forces and magnets","",[
   pg("Push or Pull?","Circle push or pull.","Identify pushes and pulls.",CH("",[["opening a drawer",1],["kicking a ball",0],["drawing water from a well",1],["pressing a doorbell",0],["flying a kite on a string",1],["moving a swing forward",0]],["push","pull"])),
   pg("Magnetic or Not?","Write each object in the right box.","Sort materials as magnetic or not.",SO("",["Magnetic","Not magnetic"],["iron nail","paper","steel pin","rubber","paper clip","wooden spoon"],[0,1,0,1,0,1])),
   pg("Magnet Facts","True or false? Circle.","Recall facts about magnets and friction.",CH("",[["Magnets attract iron.",0],["Two north poles push each other away.",0],["Magnets attract plastic.",1],["A compass needle is a magnet.",0],["Friction helps us walk without slipping.",0]],TF))],
   "Forces are pushes and pulls; magnets pull some metals.",
   ["Push and pull toys and watch how they move.","Test objects with a fridge magnet.","Slide a toy on carpet and on tiles to feel friction."],
   ["Magnet hunt in the kitchen.","Roll a ball on different floors and compare."],
   "Not all metals are magnetic (steel yes, aluminium foil no). Test, do not guess.",
   ["The Magnet Fishing Game","Saad tied a magnet to a string and went fishing in a box of paper fish with paper clips on them. Click! He caught five fish. Ask: Why did the magnet pick up the fish?"]),
  TP("States of matter","",[
   pg("Solid, Liquid or Gas?","Write each word in the right box.","Sort materials into solids, liquids and gases.",SO("",["Solid","Liquid","Gas"],["ice","milk","steam","stone","juice","air","book","oil","smoke"],[0,1,2,0,1,2,0,1,2])),
   pg("Changing State","Fill in the blanks.","Describe melting, freezing and boiling.",F("",["Ice melts into {{water}}.","Water boils into {{steam}}.","Water freezes into {{ice}}."]),BK(["melting","freezing","boiling"]),F("",["Ice cream in the sun is {{melting}}.","Water in the freezer is {{freezing}}.","Water in a hot kettle is {{boiling}}."])),
   pg("Properties","Circle the answer.","Compare the properties of solids, liquids and gases.",CH("",[["Which keeps its own shape?",["solid","liquid"],0],["Which takes the shape of its container?",["liquid","solid"],0],["Which spreads out to fill a room?",["gas","solid"],0],["Which can we pour?",["liquid","solid"],0]]))],
   "Solids, liquids and gases, and how heating and cooling change them.",
   ["Look at ice, water and the steam from a kettle (safely).","Ask: does it keep its shape? Can you pour it?","Freeze water and melt it again."],
   ["Make ice lollies from juice.","Watch the mirror go misty after a hot bath."],
   "Visible steam is tiny water drops; real water vapour is invisible. At this age, \"steam\" is fine.",
   ["The Journey of a Water Drop","A drop of water in a puddle was warmed by the sun and rose up as vapour. High in the sky it cooled into a cloud, then fell down again as rain. Ask: What made the drop go up?"])],
 history:[
  TP("Mesopotamia","",[
   pg("Land Between Two Rivers","Read. Then fill in the blanks.","Describe where Mesopotamia was and what it gave us.",PA("Mesopotamia means \"land between the rivers\". It was between the Tigris and Euphrates rivers, in today's Iraq. People there built some of the first cities and invented a kind of writing called cuneiform."),F("",["Mesopotamia was between the Tigris and {{Euphrates}} rivers.","Today this land is in {{Iraq}}.","Their writing was called {{cuneiform}}."])),
   pg("Great Inventions","Match each invention to what it did.","Recall inventions from Mesopotamia.",MA("Write the letter in the box.",["the wheel","cuneiform","the plough","clay tablets","ziggurat"],["helped carts move","wedge-shaped writing","helped farmers dig","used to write on","a stepped temple tower"])),
   pg("Then and Now","How do these old inventions help us today?","Link ancient inventions to life today.",WR("",["The wheel: ______________________________","Writing: ______________________________"]),DR("Draw a ziggurat.",240))],
   "Mesopotamia, one of the first places to build cities, and its inventions like writing and the wheel.",
   ["Find Iraq and the two rivers on a map.","Compare it with the Indus: both grew beside rivers.","Press marks into clay to try cuneiform."],
   ["Make a clay tablet and write your name in wedge marks.","List all the wheels you see in one day."],
   "A timeline helps: Mesopotamia and the Indus Valley lived at about the same time.",
   ["The Clay Letter","A farmer's son pressed a reed into wet clay to record how many sheep they had. His father smiled: \"Now we will never forget.\" Ask: Why was writing useful?"]),
  TP("Ancient China","",[
   pg("Gifts from China","Match each invention to what it is for.","Recall inventions from Ancient China.",MA("Write the letter in the box.",["paper","silk","the compass","the Great Wall","kites"],["for writing on","soft cloth from silkworms","shows which way is north","a long wall for protection","first flown in China"])),
   pg("China Facts","True or false? Circle.","Recall facts about Ancient China.",CH("",[["The Great Wall is very long.",0],["Silk is made by silkworms.",0],["Paper was invented in China.",0],["The Yellow River is in China.",0],["China is in Africa.",1]],TF)),
   pg("The Silk Road","Read. Then answer.","Explain how the Silk Road linked China and our region.",PA("The Silk Road was a set of trade routes. Traders carried silk, tea and paper from China to other lands. Some routes passed through the mountains of what is now northern Pakistan."),F("",["Traders carried {{silk}}, tea and paper.","Some routes passed through northern {{Pakistan}}."]),WR("What would you trade on the Silk Road?",["______________________________"]))],
   "Ancient China and its inventions, and the Silk Road that linked it to our part of the world.",
   ["Find China on the map next to Pakistan.","Talk about inventions we still use: paper, kites, the compass.","Trace the Silk Road through the Karakoram mountains."],
   ["Make a paper kite.","Taste green tea and talk about where tea came from."],
   "Keep dates simple: \"a very long time ago\" is fine for Grade 3.",
   ["The Kite Maker","Long ago in China, a man tied silk to a bamboo frame and let the wind lift it. The first kites flew! Ask: When do people fly kites in Pakistan?"]),
  TP("Gandhara","",[
   pg("The Land of Gandhara","Read. Then fill in the blanks.","Describe the ancient kingdom of Gandhara.",PA("Gandhara was an old kingdom in the north-west of today's Pakistan, around Peshawar, Taxila and the Swat Valley. It was famous for stone carvings and for Taxila, one of the oldest centres of learning in the world."),F("",["Gandhara was in the {{north-west}} of Pakistan.","{{Taxila}} was a famous place of learning.","Gandhara artists made beautiful stone {{carvings}}."])),
   pg("Gandhara Places","Match each place to its description.","Locate places linked to Gandhara.",MA("Write the letter in the box.",["Taxila","Peshawar","Swat","Indus River"],["old city of learning near Islamabad","a big city in Khyber Pakhtunkhwa","a green valley with old ruins","the great river of Pakistan"])),
   pg("A Museum Visit","Imagine you visit the Taxila Museum.","Write about Gandhara heritage.",WR("Write about what you see.",["______________________________________","______________________________________","______________________________________","______________________________________"]))],
   "Gandhara, an ancient kingdom in north-west Pakistan, its art and the old learning centre of Taxila.",
   ["Find Taxila, Peshawar and Swat on a map of Pakistan.","Look at photos of Gandhara stone carvings.","Talk about why people travelled far to learn at Taxila."],
   ["Visit the Taxila Museum or the Lahore Museum if you can.","Carve a simple shape in a bar of soap with a blunt tool."],
   "Present Gandhara as part of Pakistan's shared heritage that we look after.",
   ["The Student from Far Away","Long ago a young student walked for many weeks to reach Taxila. There he studied maths, medicine and languages with wise teachers. Ask: Why do you think he travelled so far?"])],
 geography:[
  TP("Landforms and water","",[
   pg("Landforms","Match each landform to its meaning.","Name and describe landforms.",MA("Write the letter in the box.",["mountain","valley","plain","desert","plateau","island"],["very high land","low land between mountains","wide, flat land","dry land with little rain","high, flat land","land with water all around"])),
   pg("Water Bodies","Use the words in the box.","Name kinds of water bodies with examples from Pakistan.",BK(["river","glacier","lake","Sea","canal"]),F("",["The Indus is a long {{river}}.","A {{glacier}} is a river of ice.","Saiful Muluk is a {{lake}}.","Karachi is next to the Arabian {{Sea}}.","A {{canal}} is a waterway made by people."])),
   pg("Landforms of Pakistan","Circle the answer.","Identify landforms in Pakistan.",CH("",[["K2 is a",["mountain","lake"],0],["Thar is a",["desert","glacier"],0],["Most of Punjab is a",["plain","plateau"],0],["Potohar is a",["plateau","sea"],0]]))],
   "The shapes of land and water on Earth, with examples from Pakistan.",
   ["Make a landform model with sand or clay, then pour water to make a river.","Look at photos of Pakistan's mountains, deserts and plains.","Find each one on a physical map."],
   ["Point out landforms on trips: hills, rivers, plains.","Draw a map of an imaginary island with landforms."],
   "Valleys and plains are both low, but a valley sits between hills or mountains.",
   ["From Glacier to Sea","A drop of meltwater left a glacier near K2. It joined the Indus, flowed past mountains and through the plains of Punjab and Sindh, and reached the Arabian Sea. Ask: Which landforms did the drop pass?"]),
  TP("Weather and climate","",[
   pg("Weather Words","Match each word to its meaning.","Describe different kinds of weather.",MA("Write the letter in the box.",["sunny","rainy","windy","cloudy","foggy","snowy"],["bright sun all day","water falling from clouds","air moving fast","grey sky","hard to see far","cold, white flakes falling"])),
   pg("Seasons in Pakistan","Circle the answer.","Describe Pakistan's seasons and climate.",CH("",[["The monsoon brings heavy",["rain","snow"],0],["The hottest months are",["June and July","December and January"],0],["Snow falls in",["the northern mountains","Karachi"],0],["Fog is common in Punjab in",["winter","summer"],0]])),
   pg("Weather Diary","Record the weather for five days.","Observe and record daily weather.",WR("",["Monday: ______________________","Tuesday: ______________________","Wednesday: ______________________","Thursday: ______________________","Friday: ______________________"]))],
   "Weather is what the sky is like today; climate is the usual weather of a place over many years.",
   ["Look at the sky each morning and describe it.","Read a weather forecast together.","Compare the climate of Murree and Karachi."],
   ["Keep a weather diary for a week.","Make a rain gauge from a plastic bottle."],
   "Children mix up weather and climate. Weather changes daily; climate is the pattern.",
   ["Two Cousins, Two Climates","Bilal lives in Karachi, where it is warm most of the year. His cousin lives in Skardu, where winters are freezing and snowy. Ask: Who needs a warmer coat in January?"]),
  TP("Pakistan and its neighbours","",[
   pg("Our Neighbours","Use the words in the box.","Name Pakistan's neighbours and their directions.",BK(["China","India","Iran","Afghanistan","Arabian Sea"]),F("",["To the north-east of Pakistan is {{China}}.","To the east is {{India}}.","To the west is {{Iran}}.","To the north-west is {{Afghanistan}}.","To the south is the {{Arabian Sea}}."])),
   pg("Neighbour Facts","Match each country to a fact.","Recall facts about neighbouring countries.",MA("Write the letter in the box.",["China","Iran","Afghanistan","India"],["linked to Pakistan by the Karakoram Highway","lies west of Balochistan","Kabul is its capital","New Delhi is its capital"])),
   pg("Map Work","Draw Pakistan and its neighbours.","Show Pakistan's borders on a map.",DR("Draw Pakistan. Write its neighbours around it.",380))],
   "The countries and sea that border Pakistan, and their directions.",
   ["Find Pakistan on a map of Asia.","Go round the border and name each neighbour.","Use compass directions to describe where each one is."],
   ["Find the neighbours on a globe.","Talk about foods or words we share with neighbours."],
   "Keep the focus on geography and friendly links, not politics.",
   ["The Long Road North","The Karakoram Highway climbs from Pakistan through high mountains to China. Trucks carry fruit one way and goods the other. Ask: Which neighbour does the highway reach?"])],
 urdu:[
  TP("اسم","Nouns",[
   pg("اسم پہچانیں|Find the nouns","جملے میں اسم پر دائرہ لگائیں۔","Find nouns in Urdu sentences.",CH("",[["علی کھیل رہا ہے۔",["علی","کھیل"],0],["بلی دودھ پیتی ہے۔",["پیتی","بلی"],1],["لاہور بڑا شہر ہے۔",["لاہور","بڑا"],0],["کتاب میز پر ہے۔",["کتاب","پر"],0]])),
   pg("اسم کی قسمیں|Kinds of nouns","ہر لفظ صحیح خانے میں لکھیں۔","Sort nouns into person, place and thing.",SO("",["شخص","جگہ","چیز"],["استاد","سکول","قلم","ڈاکٹر","باغ","گیند","کسان","بازار","پتنگ"],[0,1,2,0,1,2,0,1,2])),
   pg("جملے بنائیں|Make sentences","ہر اسم سے ایک جملہ بنائیں۔","Use nouns in sentences.",WR("",["کتاب: ______________________","درخت: ______________________","کراچی: ______________________"]))],
   "An اسم is the name of a person, place or thing.",
   ["Point to things around the house and say their names as nouns.","Sort word cards into person, place and thing.","Find nouns in a short Urdu story."],
   ["Play \"name ten things in the kitchen\".","Underline nouns in a newspaper headline."],
   "Children sometimes pick adjectives (بڑا) as nouns. Ask: is it the name of something?",
   ["علی کا باغ","علی کے گھر میں ایک چھوٹا باغ ہے۔ باغ میں آم کا درخت اور گلاب کے پھول ہیں۔ شام کو علی اپنے دوست کے ساتھ وہاں کھیلتا ہے۔ سوال: کہانی میں تین اسم تلاش کریں۔"]),
  TP("فعل","Verbs",[
   pg("فعل پہچانیں|Find the verbs","جملے میں فعل پر دائرہ لگائیں۔","Find verbs in Urdu sentences.",CH("",[["بچہ دوڑتا ہے۔",["بچہ","دوڑتا"],1],["امی کھانا پکاتی ہیں۔",["پکاتی","کھانا"],0],["پرندے اڑتے ہیں۔",["پرندے","اڑتے"],1],["میں کتاب پڑھتا ہوں۔",["پڑھتا","کتاب"],0]])),
   pg("صحیح فعل لکھیں|Write the right verb","ڈبے میں سے فعل چن کر لکھیں۔","Use verbs correctly in sentences.",BK(["کھاتی","لکھتا","سوتا","تیرتی","گاتی"]),F("",["مچھلی پانی میں {{تیرتی}} ہے۔","بلبل گانا {{گاتی}} ہے۔","بچہ رات کو {{سوتا}} ہے۔","گائے گھاس {{کھاتی}} ہے۔","علی قلم سے {{لکھتا}} ہے۔"])),
   pg("زمانہ|Past, present, future","زمانہ بتائیں۔","Identify past, present and future verbs.",CH("",[["میں سکول گیا۔",0],["میں سکول جا رہا ہوں۔",1],["میں سکول جاؤں گا۔",2],["بارش ہو رہی ہے۔",1],["ہم نے میچ دیکھا۔",0]],["ماضی","حال","مستقبل"]))],
   "A فعل is an action word. Verbs also show when something happens: past, present or future.",
   ["Act out actions and name them: دوڑنا، کھانا، لکھنا.","Find the verb at the end of an Urdu sentence.","Say one action in the past, present and future."],
   ["Play \"what are you doing?\" and answer in Urdu.","Tell the story of yesterday using past-tense verbs."],
   "In Urdu the verb usually comes at the end of the sentence. Look there first.",
   ["مصروف صبح","صبح امی ناشتہ بناتی ہیں، ابو اخبار پڑھتے ہیں اور بچے سکول کے لیے تیار ہوتے ہیں۔ سوال: کہانی میں فعل تلاش کریں۔"]),
  TP("صفت","Adjectives",[
   pg("صفت پہچانیں|Find the adjective","صفت پر دائرہ لگائیں۔","Find adjectives in Urdu phrases.",CH("",[["لال سیب",["لال","سیب"],0],["اونچا درخت",["درخت","اونچا"],1],["میٹھا آم",["میٹھا","آم"],0],["ٹھنڈا پانی",["پانی","ٹھنڈا"],1],["بہادر سپاہی",["بہادر","سپاہی"],0]])),
   pg("صفت لکھیں|Add an adjective","ڈبے میں سے صفت چن کر لکھیں۔","Use adjectives in sentences.",BK(["خوبصورت","بڑا","گرم","نیلا","چھوٹی"]),F("",["آسمان {{نیلا}} ہے۔","ہاتھی بہت {{بڑا}} جانور ہے۔","یہ {{خوبصورت}} پھول ہے۔","سردیوں میں {{گرم}} کپڑے پہنیں۔","{{چھوٹی}} چڑیا گانا گاتی ہے۔"])),
   pg("بیان کریں|Describe it","ہر چیز کے لیے دو صفات لکھیں۔","Choose adjectives to describe things.",WR("",["سورج: ________ اور ________","میرا سکول: ________ اور ________","آم: ________ اور ________"]))],
   "A صفت describes a noun: its colour, size, taste or quality.",
   ["Hold an object and ask: یہ کیسا ہے؟","List describing words on paper.","Add a صفت to make a sentence more interesting."],
   ["Describe dinner with Urdu adjectives.","Play \"I am thinking of something red and round\" in Urdu."],
   "Adjectives ending in ا change with the noun (بڑا لڑکا، بڑی لڑکی). Point this out gently.",
   ["نیلی پتنگ","سارہ کے پاس ایک خوبصورت نیلی پتنگ تھی۔ تیز ہوا میں وہ بہت اونچی اڑی۔ سب بچے خوش ہو گئے۔ سوال: پتنگ کے لیے کون سی صفات استعمال ہوئیں؟"])]
}};
