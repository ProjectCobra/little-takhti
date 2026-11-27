/* ===== Content depth (Sumbul, Nov 2026) =====
   Every page well filled (fill-report.md target 0.75+), and every topic gets a challenge page,
   a 2-page topic test and a word mat. Runs at the end of data.js (see DEPTH there):
   more(sid,title,...blocks) tops up an existing page; addPages(sid,topic,[pg(...)]) appends new pages
   to that topic's pack. Each topic: core pages (filled), a Warm-up ★ page, a Challenge ★★★ page, a 2-page topic test and a word mat.
   Pilot: Grade 1 Maths, Numbers to 20. */

DEPTH.push(({more,addPages})=>{const S='maths',T='Numbers to 20';
 more(S,'Count and Write',
  F('A. Write the number that is one more.',['8 + 1 = {{9}}','12 + 1 = {{13}}','15 + 1 = {{16}}','19 + 1 = {{20}}','10 + 1 = {{11}}','16 + 1 = {{17}}'],3),
  F('B. Write the number in words.',['9 = {{nine}}','12 = {{twelve}}','15 = {{fifteen}}','18 = {{eighteen}}','20 = {{twenty}}','11 = {{eleven}}'],2));
 more(S,'Missing Numbers',
  BX('E. Count in fives and tens.',['5|{{10}}|15|{{20}}','0|10|{{20}}']),
  F('F. Write the numerals.',['fourteen = {{14}}','nineteen = {{19}}','sixteen = {{16}}','thirteen = {{13}}','seventeen = {{17}}','eleven = {{11}}'],3));
 more(S,'Before, After, Between',
  BX('D. Write the number in between.',['7|{{8}}|9','12|{{13}}|14','15|{{16}}|17']));
 more(S,'Tens and Ones',
  F('Write the number.',['1 ten and 4 ones = {{14}}','1 ten and 9 ones = {{19}}','2 tens and 0 ones = {{20}}','1 ten and 0 ones = {{10}}'],2));
 addPages(S,T,[
  pg('Numbers to 20 Warm-up ★','Start here if numbers to 20 are new. Count, fill in and circle.','Count and write numbers to 20 with support.',
   CT('A. Count and write.',[[5,'star'],[8,'circle'],[10,'heart'],[12,'square']]),
   BX('B. Fill in the missing numbers.',['1|2|{{3}}|4|{{5}}|6|7|{{8}}|9|10','11|12|{{13}}|14|15|{{16}}|17|18|{{19}}|20']),
   CH('C. Circle the bigger number.',[['3 or 8',['3','8'],1],['12 or 10',['12','10'],0],['15 or 20',['15','20'],1],['9 or 6',['9','6'],0]])),
  pg('Numbers to 20 Challenge ★★★','Think carefully. Show your thinking.','Reason about numbers to 20: ordering, number names, odd and even, and missing numbers.',
   F('A. True or false? Write T or F.',['15 is bigger than 13. {{T}}','The number after 19 is 21. {{F}}','Twelve is written 12. {{T}}','8 comes between 7 and 9. {{T}}','18 is less than 16. {{F}}','10 is between 9 and 11. {{T}}'],2),
   F('B. Fill in the missing numbers.',['{{14}}, 15, 16, {{17}}, 18','20, {{19}}, 18, {{17}}, 16','2, 4, {{6}}, 8, {{10}}','5, 10, {{15}}, {{20}}'],2),
   CH('C. Odd or even? Circle the answer.',[['6',0],['11',1],['14',0],['19',1],['20',0],['7',1]],['even','odd']),
   F('D. Think it through.',['I am more than 15 and less than 17. What number am I? {{16}}','I am one less than 20. What number am I? {{19}}'])),
  pg('Topic Test: Numbers to 20 (1)','Answer every question. Ask a grown-up to mark it out of 22.','Check counting, reading and writing numbers to 20.',
   NO('Score: ______ / 22 &nbsp; ★ 0 to 11 keep practising &nbsp; ★★ 12 to 17 good work &nbsp; ★★★ 18 to 22 super!'),
   CT('1. Count and write. (4 marks)',[[13,'star'],[17,'circle'],[8,'heart'],[20,'square']]),
   F('2. Write the missing numbers. (4 marks)',['16, {{17}}, 18','{{9}}, 10, 11','4, 5, {{6}}','{{19}}, 20'],2),
   F('3. Write the number names. (4 marks)',['14 = {{fourteen}}','20 = {{twenty}}','11 = {{eleven}}','17 = {{seventeen}}'],2)),
  pg('Topic Test: Numbers to 20 (2)','Answer every question. Add up your marks from both pages.','Check ordering and comparing numbers to 20.',
   CH('4. Circle the bigger number. (3 marks)',[['12 or 21',['12','21'],1],['18 or 15',['18','15'],0],['9 or 19',['9','19'],1]]),
   F('5. Before, after and between. (3 marks)',['Just before 12 is {{11}}.','Just after 17 is {{18}}.','Between 14 and 16 is {{15}}.']),
   F('6. Order from smallest to biggest. (2 marks)',['16, 4, 11 → {{4, 11, 16}}','20, 13, 18 → {{13, 18, 20}}']),
   F('7. Word problems. (2 marks)',['There are 10 children in the bus. 5 more get on. How many children are in the bus now? {{15}}','Hamza has 18 stickers. Zara has 13. Who has more? {{Hamza}}']),
   WR('How did I do? Write one thing you can do now.',['I can ______________________________.'])),
  pg('Word Mat: Numbers to 20','Keep this mat on the table while you work. Read the words together.','Know the number words and maths words for numbers to 20.',
   NO('<b>Numbers and number names</b><br>0 zero · 1 one · 2 two · 3 three · 4 four · 5 five · 6 six · 7 seven · 8 eight · 9 nine · 10 ten<br>11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen · 16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen · 20 twenty'),
   {t:'numline'},
   NO('<b>Maths words</b><br><b>before</b>: the number just behind · <b>after</b>: the number just ahead · <b>between</b>: the number in the middle<br><b>more than</b> / <b>bigger</b> · <b>less than</b> / <b>smaller</b> · <b>order</b>: put in a line from smallest to biggest<br><b>odd</b>: 1, 3, 5, 7, 9 · <b>even</b>: 2, 4, 6, 8, 10 · <b>count on</b>: go forwards · <b>count back</b>: go backwards'),
   BK(['count','number','before','after','between','more','less','order','odd','even']),
   DR('Draw 15 dots in groups of 5.',170))]);
});

/* ===== P3a: Grade 1 December test prep (26 Nov 2026) =====
   New 10-page topics for the gaps in the LGS December syllabus (references/lgs-grade1-december-2026.md),
   each with a Warm-up ★, Challenge ★★★, 2-page Topic Test and Word Mat. Original exercises.
   Added here (after term2_g1.js and ai.js) so existing topic numbers do not move. */
addPlus("maths",{g1:[
 TP("Times table of 3","",[
  pg("Groups of 3","Read the big idea. Then count the groups.","Know that the 3 times table counts equal groups of 3.",
   CN(["cookie","cookie","cookie"],"A group of 3 is three things together. When we have equal groups of 3, we can count in threes: 3, 6, 9, 12. The 3 times table helps us count groups of 3 quickly.","Groups of 3"),
   F("",["1 group of 3 = {{3}}","2 groups of 3 = {{6}}","3 groups of 3 = {{9}}","4 groups of 3 = {{12}}","5 groups of 3 = {{15}}","6 groups of 3 = {{18}}"],2),
   F("Count the dots in threes.",["●●● ●●● = {{6}}","●●● ●●● ●●● = {{9}}","●●● ●●● ●●● ●●● = {{12}}"],1)),
  pg("Count in Threes","Fill in the missing numbers.","Count forwards and backwards in steps of 3 to 30.",
   BX("A. Count in threes.",["3|6|{{9}}|12|{{15}}|18|{{21}}|24|{{27}}|30"]),
   F("B. Fill in the missing numbers.",["3, 6, 9, {{12}}, {{15}}","12, 15, {{18}}, {{21}}, 24","21, {{24}}, 27, {{30}}","30, 27, {{24}}, {{21}}, 18","15, 12, {{9}}, {{6}}, 3","6, {{9}}, {{12}}, 15, {{18}}"],2),
   NO("Tip: each jump adds 3. Count on three fingers: 3 … 4, 5, 6.")),
  pg("Add Threes","Add the threes. Then write the times fact.","Link adding equal groups of 3 to multiplication.",
   NO("3 + 3 + 3 = 9 is the same as 3 groups of 3, or 3 × 3 = 9."),
   F("",["3 + 3 = {{6}}, so 2 × 3 = {{6}}","3 + 3 + 3 = {{9}}, so 3 × 3 = {{9}}","3 + 3 + 3 + 3 = {{12}}, so 4 × 3 = {{12}}","3 + 3 + 3 + 3 + 3 = {{15}}, so 5 × 3 = {{15}}","3 + 3 + 3 + 3 + 3 + 3 = {{18}}, so 6 × 3 = {{18}}"],1),
   F("Write each one as an adding sum.",["2 × 3 = {{3 + 3}}","4 × 3 = {{3 + 3 + 3 + 3}}"],1)),
  pg("The 3 Times Table","Complete the table. Then say it aloud.","Recall the 3 times table to 10 × 3.",
   F("A. Fill in the 3 times table.",["1 × 3 = {{3}}","2 × 3 = {{6}}","3 × 3 = {{9}}","4 × 3 = {{12}}","5 × 3 = {{15}}","6 × 3 = {{18}}","7 × 3 = {{21}}","8 × 3 = {{24}}","9 × 3 = {{27}}","10 × 3 = {{30}}"],2),
   F("B. Mixed up! Answer quickly.",["5 × 3 = {{15}}","2 × 3 = {{6}}","9 × 3 = {{27}}","4 × 3 = {{12}}","7 × 3 = {{21}}","10 × 3 = {{30}}"],3)),
  pg("Picture Threes","Look at each picture. Fill in the number.","Use the 3 times table with real things.",
   FP("",[["cherries","Each bunch has 3 cherries. 4 bunches have {{12}} cherries."],["auto-rickshaw","A rickshaw has 3 wheels. 2 rickshaws have {{6}} wheels."],["star","Each card has 3 stars. 5 cards have {{15}} stars."],["red-apple","Each bag has 3 apples. 3 bags have {{9}} apples."],["triangular-flag","A flag has 3 corners. 6 flags have {{18}} corners."],["triangular-ruler","A triangle has 3 sides. 7 triangles have {{21}} sides."]],2)),
  pg("Missing Numbers","Find the missing number.","Find a missing number in a 3 times table fact.",
   F("A. Fill in the box.",["3 × {{2}} = 6","3 × {{5}} = 15","{{4}} × 3 = 12","{{8}} × 3 = 24","3 × {{10}} = 30","{{6}} × 3 = 18","3 × {{9}} = 27","{{7}} × 3 = 21"],2),
   F("B. How many threes make…",["9? {{3}} threes","12? {{4}} threes","21? {{7}} threes","30? {{10}} threes"],2)),
  pg("Threes Word Problems","Read and solve. Use the 3 times table.","Solve word problems with groups of 3.",
   WP("",["A packet has 3 biscuits. Ali buys 4 packets. He has {{12}} biscuits.","Each child gets 3 balloons. There are 5 children. They get {{15}} balloons in all.","A stool has 3 legs. There are 6 stools. There are {{18}} legs.","Sara puts 3 flowers in each vase. She has 3 vases. She uses {{9}} flowers.","Hamza reads 3 pages a day. In 7 days he reads {{21}} pages.","There are 24 sweets. Ammi gives 3 to each child. {{8}} children get sweets."])),
  pg("In the 3 Times Table?","Circle yes or no. Then colour the answers.","Recognise numbers in the 3 times table.",
   CH("Is this number in the 3 times table?",[["9",0],["14",1],["15",0],["20",1],["21",0],["25",1],["27",0],["30",0]],YN),
   F("Write the 3 times table numbers between 10 and 30.",["{{12}}, {{15}}, {{18}}, {{21}}, {{24}}, {{27}}"],1)),
  pg("Twos and Threes","Solve. Then circle the bigger answer.","Use the 2 and 3 times tables together.",
   F("A. Solve.",["4 × 2 = {{8}}","4 × 3 = {{12}}","6 × 2 = {{12}}","6 × 3 = {{18}}","10 × 2 = {{20}}","10 × 3 = {{30}}"],2),
   CH("B. Which is bigger?",[["5 × 2 or 5 × 3",["5 × 2","5 × 3"],1],["3 × 3 or 4 × 2",["3 × 3","4 × 2"],0],["2 × 2 or 1 × 3",["2 × 2","1 × 3"],0],["6 × 2 or 3 × 3",["6 × 2","3 × 3"],0]])),
  pg("Exit Ticket","Show what you can do.","Check the 3 times table.",
   F("",["3 × 3 = {{9}}","6 × 3 = {{18}}","8 × 3 = {{24}}","Count in threes: 15, {{18}}, {{21}}","3 × {{4}} = 12","10 × 3 = {{30}}"],2),
   WP("",["A shelf holds 3 books. 5 shelves hold {{15}} books."]),
   WR("",["Draw or write 4 groups of 3: ______________________________","The 3 times table fact I find hardest is ______________."]))],
  "The 3 times table counts equal groups of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Children link adding threes (3 + 3 + 3) to multiplying (3 × 3), find missing numbers and solve simple word problems.",
  ["Count in threes as you climb stairs: step, step, clap!","Make groups of 3 with buttons or chickpeas and count them in threes.","Say the 3 times table while bouncing a ball."],
  ["Count the legs on three-legged stools or the wheels on rickshaws in threes.","Share 12 or 15 biscuits into bags of 3 and count the bags."],
  "Children often count in ones to find each answer. Help them count on in threes from a fact they know: if 5 × 3 is 15, then 6 × 3 is 15 and 3 more.",
  ["The Rickshaw Rank","At the rickshaw stand, Bilal counted the wheels. Each rickshaw had 3 wheels: 3, 6, 9, 12. 'Four rickshaws, twelve wheels!' he said. Ask: How many wheels would five rickshaws have?"]),

 TP("Number names to 50","",[
  pg("The Tens","Read the big idea. Then write the tens in words.","Read and write the tens to 50 in words.",
   CN(["input-numbers"],"The tens are ten, twenty, thirty, forty and fifty. Every number from 21 to 49 is a ten word and a ones word joined with a short line, called a hyphen: twenty-one, thirty-five, forty-eight.","The tens"),
   F("",["10 = {{ten}}","20 = {{twenty}}","30 = {{thirty}}","40 = {{forty}}","50 = {{fifty}}"],2),
   NO("Careful: forty has no u. We write forty, not fourty.")),
  pg("Twenty-one to Twenty-nine","Write each number in words.","Write the number names from 21 to 29.",
   BK(["one","two","three","four","five","six","seven","eight","nine"]),
   F("",["21 = twenty-{{one}}","22 = twenty-{{two}}","23 = twenty-{{three}}","24 = twenty-{{four}}","25 = twenty-{{five}}","26 = twenty-{{six}}","27 = twenty-{{seven}}","28 = twenty-{{eight}}","29 = twenty-{{nine}}"],3),
   F("Now write the whole name.",["24 = {{twenty-four}}","27 = {{twenty-seven}}","29 = {{twenty-nine}}"],1)),
  pg("Thirty-one to Thirty-nine","Write each number in words.","Write the number names from 31 to 39.",
   F("",["31 = {{thirty-one}}","32 = {{thirty-two}}","33 = {{thirty-three}}","34 = {{thirty-four}}","35 = {{thirty-five}}","36 = {{thirty-six}}","37 = {{thirty-seven}}","38 = {{thirty-eight}}","39 = {{thirty-nine}}"],2),
   CH("Circle the right name.",[["30",["thirty","thirteen"],0],["13",["thirty","thirteen"],1],["33",["thirty-three","three-thirty"],0]])),
  pg("Forty-one to Fifty","Write each number in words.","Write the number names from 41 to 50.",
   F("",["41 = {{forty-one}}","42 = {{forty-two}}","43 = {{forty-three}}","44 = {{forty-four}}","45 = {{forty-five}}","46 = {{forty-six}}","47 = {{forty-seven}}","48 = {{forty-eight}}","49 = {{forty-nine}}","50 = {{fifty}}"],2),
   CH("Circle the right name.",[["40",["forty","fourteen"],0],["14",["forty","fourteen"],1]])),
  pg("Words to Numbers","Read the words. Write the number.","Read number names to 50 and write the numeral.",
   F("",["twenty-three = {{23}}","thirty-eight = {{38}}","forty-one = {{41}}","twenty-nine = {{29}}","fifty = {{50}}","thirty = {{30}}","forty-six = {{46}}","thirty-four = {{34}}","twenty-two = {{22}}","forty-nine = {{49}}"],2),
   F("Which number comes next? Write it in words.",["thirty-four, thirty-five, {{thirty-six}}","forty-eight, forty-nine, {{fifty}}"],1)),
  pg("Match the Names","Match each number to its name.","Match numerals and number names to 50.",
   MA("Write the letter in the box.",["25","42","37","50","19","33"],["twenty-five","forty-two","thirty-seven","fifty","nineteen","thirty-three"]),
   F("Write in words.",["44 = {{forty-four}}","26 = {{twenty-six}}"],1)),
  pg("Spot the Spelling","Circle the right spelling.","Spell number names to 50 correctly.",
   CH("",[["40",["fourty","forty"],1],["12",["twelve","twelfe"],0],["15",["fiveteen","fifteen"],1],["20",["twenty","twenteen"],0],["50",["fivety","fifty"],1],["8",["eight","eigth"],0],["30",["thirty","threety"],0],["9",["nine","nain"],0]]),
   NO("Tricky ones: forty (no u), fifteen and fifty (fif, not five), twelve and twenty (tw).")),
  pg("Tens and Ones in Words","Write the number. Then write its name.","Use tens and ones to build number names.",
   F("",["2 tens and 4 ones = {{24}} = {{twenty-four}}","3 tens and 7 ones = {{37}} = {{thirty-seven}}","4 tens and 2 ones = {{42}} = {{forty-two}}","1 ten and 6 ones = {{16}} = {{sixteen}}","5 tens and 0 ones = {{50}} = {{fifty}}","3 tens and 1 one = {{31}} = {{thirty-one}}"],1)),
  pg("Number Name Stories","Read each story. Write the answer as a number and in words.","Use number names in word problems.",
   WP("",["Zain has twenty marbles. He gets five more. He has {{25}} ({{twenty-five}}) marbles.","There are thirty-two children in the class. Two are away. {{30}} ({{thirty}}) children are in school.","A box has forty pencils. Miss Hina adds eight more. Now there are {{48}} ({{forty-eight}}) pencils.","Hira is on page thirty-nine. The next page is {{40}} ({{forty}})."])),
  pg("Exit Ticket","Show what you can do.","Check reading and writing number names to 50.",
   F("",["35 = {{thirty-five}}","48 = {{forty-eight}}","twenty-one = {{21}}","fifty = {{50}}","40 = {{forty}}","thirty-three = {{33}}"],2),
   WR("",["Write your age in words: ______________________","Write the number of children in your class in words: ______________________","Write any number between 40 and 50 in words: ______________________"]))],
  "Number names from 0 to 50. The tens are twenty, thirty, forty and fifty, and the numbers in between join a ten and a ones word with a hyphen: thirty-seven. Watch the tricky spellings: forty, fifteen, fifty, twelve, twenty.",
  ["Say a number and ask your child to write it in words, then check together.","Write number names on cards and match them to number cards.","Read prices or page numbers aloud in words."],
  ["Write the date in words on the fridge each morning.","Play bingo with number names from 20 to 50."],
  "Many children write fourty because of four. Point out that forty drops the u, and practise it on its own.",
  ["The Cheque for Dada","Dada asked Hamza to help write a birthday card with money for his cousin. 'Write forty-five rupees in words,' said Dada. Hamza wrote 'fourty-five'. Dada smiled and crossed out the u. Ask: How do we spell 40 in words?"]),

 TP("Making 10 and fact families","",[
  pg("Make 10","Read the big idea. Then fill in the bonds to 10.","Recall number bonds to 10.",
   CN(["hand-with-fingers-splayed","hand-with-fingers-splayed"],"Ten is a very useful number. Two numbers that add up to 10 are a bond to 10, like 6 and 4. Hold up 10 fingers, fold some down, and you can see a bond to 10.","Bonds to 10"),
   F("",["6 + {{4}} = 10","3 + {{7}} = 10","8 + {{2}} = 10","5 + {{5}} = 10","1 + {{9}} = 10","{{10}} + 0 = 10","7 + {{3}} = 10","{{6}} + 4 = 10","2 + {{8}} = 10"],3)),
  pg("Dots to 10","Add the two groups. Then write how many more make 10.","See bonds to 10 with dots.",
   {t:"picsum",h:"A. Add the dots.",items:[[7,3,"circle"],[4,6,"circle"],[9,1,"star"],[5,5,"star"]]},
   F("B. How many more make 10?",["8 → {{2}}","3 → {{7}}","6 → {{4}}","1 → {{9}}","5 → {{5}}","9 → {{1}}"],3)),
  pg("Add by Making 10","Read the steps. Then add by making 10.","Add two numbers by making 10 first.",
   NO("8 + 5: 8 needs 2 to make 10. Split 5 into 2 and 3. 8 + 2 = 10, then 10 + 3 = 13. So 8 + 5 = 13."),
   F("",["9 + 4 = 10 + {{3}} = {{13}}","8 + 6 = 10 + {{4}} = {{14}}","7 + 5 = 10 + {{2}} = {{12}}","9 + 7 = 10 + {{6}} = {{16}}","8 + 3 = 10 + {{1}} = {{11}}","6 + 5 = 10 + {{1}} = {{11}}","9 + 9 = 10 + {{8}} = {{18}}","7 + 6 = 10 + {{3}} = {{13}}"],2)),
  pg("Make 10 to Add","Add. Make 10 first in your head.","Use making 10 to add within 20.",
   F("A. Add.",["9 + 2 = {{11}}","8 + 4 = {{12}}","7 + 7 = {{14}}","9 + 6 = {{15}}","8 + 8 = {{16}}","7 + 4 = {{11}}","9 + 8 = {{17}}","6 + 6 = {{12}}","8 + 9 = {{17}}"],3),
   F("B. Fill in the missing number.",["9 + {{3}} = 12","8 + {{7}} = 15","7 + {{6}} = 13","{{9}} + 5 = 14"],2)),
  pg("Take Away From 10","Subtract from 10.","Subtract from 10 using bonds to 10.",
   NO("If 6 + 4 = 10, then 10 − 4 = 6 and 10 − 6 = 4."),
   F("",["10 − 4 = {{6}}","10 − 7 = {{3}}","10 − 1 = {{9}}","10 − 5 = {{5}}","10 − 8 = {{2}}","10 − 3 = {{7}}","10 − 10 = {{0}}","10 − 6 = {{4}}","10 − 9 = {{1}}"],3),
   F("And from 20!",["20 − 4 = {{16}}","20 − 8 = {{12}}","20 − 10 = {{10}}"],3)),
  pg("Fact Families","Read the big idea. Then complete the family.","Know that three numbers make a family of four facts.",
   CN(["house"],"A fact family is three numbers that work together, like 3, 7 and 10. They make two adding facts and two taking away facts: 3 + 7 = 10, 7 + 3 = 10, 10 − 3 = 7, 10 − 7 = 3.","Fact families"),
   F("Family: 4, 6, 10",["4 + 6 = {{10}}","6 + 4 = {{10}}","10 − 4 = {{6}}","10 − 6 = {{4}}"],2),
   F("Family: 2, 8, 10",["2 + 8 = {{10}}","8 + {{2}} = 10","10 − {{2}} = 8","10 − 8 = {{2}}"],2)),
  pg("Bigger Fact Families","Write the four facts for each family.","Write fact families with numbers to 20.",
   F("Family: 8, 5, 13",["8 + 5 = {{13}}","5 + 8 = {{13}}","13 − 8 = {{5}}","13 − 5 = {{8}}"],2),
   F("Family: 9, 6, 15",["9 + 6 = {{15}}","6 + 9 = {{15}}","15 − 9 = {{6}}","15 − 6 = {{9}}"],2),
   CH("Which fact is NOT in the family 7, 4, 11?",[["",["7 + 4 = 11","11 − 7 = 4","7 − 4 = 11"],2],["Which number is missing? 12, 5, ___",["7","17","10"],0]])),
  pg("Count On and Count Back","Count on to add. Count back to take away.","Add by counting on and subtract by counting back within 20.",
   NO("Count on: start at the bigger number and count up. Count back: start at the first number and count down."),
   F("",["Start at 9. Count on 3. → {{12}}","Start at 14. Count on 4. → {{18}}","Start at 11. Count back 2. → {{9}}","Start at 17. Count back 5. → {{12}}","Start at 6. Count on 7. → {{13}}","Start at 20. Count back 3. → {{17}}"],2),
   {t:"numline"}),
  pg("Picture Problems","Look at each picture. Read and solve.","Solve picture problems within 20.",
   FP("",[["red-apple","There are 8 apples on a plate. Ammi adds 5 more. There are {{13}} apples."],["balloon","Zara has 10 balloons. 3 fly away. She has {{7}} balloons left."],["duck","7 ducks swim in a pond. 6 more come. There are {{13}} ducks."],["cookie","Ali bakes 15 cookies. He eats 6. {{9}} cookies are left."],["fish","9 fish are in one tank and 9 in another. There are {{18}} fish."],["pencil","Hira has 12 pencils. She gives 2 away. She has {{10}} pencils."]],2)),
  pg("Exit Ticket","Show what you can do.","Check making 10, fact families and counting on and back.",
   F("",["7 + {{3}} = 10","9 + 5 = {{14}}","10 − 6 = {{4}}","8 + 7 = {{15}}","Start at 16. Count back 4. → {{12}}","Family 6, 8, 14: 14 − 6 = {{8}}"],2),
   WR("",["Write a fact family for 5, 7 and 12: ______________________________","______________________________"]))],
  "Bonds to 10 (like 6 and 4) help children add bigger numbers: 8 + 5 becomes 8 + 2 + 3 = 13. A fact family is three numbers that make two adding and two taking away facts. Children also count on and back within 20 and solve picture problems.",
  ["Play 'make 10' with fingers: show 7 and ask how many more.","Use 10 chickpeas in an egg box to show bonds to 10.","Write three numbers (5, 8, 13) and ask for all four facts."],
  ["Use playing cards: find pairs that make 10.","Count on and back along the stairs or a hopscotch grid."],
  "Children may say 7 − 4 = 11 belongs to the family 7, 4, 11. Remind them the biggest number always comes first in a take away fact.",
  ["The Ten-Seat Van","The school van had 10 seats. 7 children got on at the first stop. 'How many seats are left?' asked the driver. 'Three!' said Rayan, showing 3 fingers. Ask: If 5 got on first, how many seats would be left?"])
]});

addPlus("english",{g2:[
 TP("Names and initials","",[
  pg("Names Need Capitals","Read the big idea. Then circle right or wrong.","Know that names of people begin with a capital letter.",
   CN(["identification-card","girl","boy"],"Everyone has a name. A person's name always begins with a capital letter, like Sara Khan or Ali Raza. Both the first name and the family name start with a capital.","Names"),
   CH("Is the name written correctly?",[["Sara Khan",0],["ali raza",1],["Zain ahmed",1],["Hira Malik",0],["Miss Hina",0],["omar Farooq",1]],["right","wrong"])),
  pg("Write the Name Correctly","Write each name with capital letters.","Write people's names with capital letters.",
   F("",["sara khan → {{Sara Khan}}","ali raza → {{Ali Raza}}","hamza ali → {{Hamza Ali}}","zara ahmed → {{Zara Ahmed}}","bilal shah → {{Bilal Shah}}","maryam butt → {{Maryam Butt}}"],2),
   WR("Write the names of two people in your family.",["1. ______________________","2. ______________________"])),
  pg("What Is an Initial?","Read the big idea. Then write the initials.","Know that an initial is the first letter of a name, written as a capital with a full stop.",
   CN(["writing-hand"],"An initial is the first letter of a name. We write it as a capital letter with a full stop after it. The initials of Sara Khan are S. K.","Initials"),
   F("",["Sara Khan → {{S. K.}}","Ali Raza → {{A. R.}}","Hira Malik → {{H. M.}}","Bilal Shah → {{B. S.}}","Zain Ahmed → {{Z. A.}}","Noor Fatima → {{N. F.}}"],2)),
  pg("Initials With a Name","Write the name with an initial.","Use an initial in front of a family name.",
   NO("Sometimes we write the first name as an initial: Ali Raza can be A. Raza."),
   F("",["Ali Raza → {{A.}} Raza","Sara Khan → {{S.}} Khan","Hamza Iqbal → {{H.}} Iqbal","Maryam Butt → {{M.}} Butt","Usman Tariq → {{U.}} Tariq"],2),
   CH("Circle the initials written correctly.",[["",["s. k.","S. K.","S K"],1],["",["A. R.","a r","A r."],0],["",["h.M","H. M.","hm."],1]])),
  pg("Who Is It?","Match the initials to the name.","Read initials and match them to names.",
   MA("Write the letter in the box.",["R. A.","F. B.","T. S.","N. H.","I. Q.","Y. M."],["Rayan Ali","Fatima Bibi","Taha Saeed","Nimra Hassan","Iqra Qureshi","Yusuf Mirza"]),
   WR("Write the initials of three people you know.",["Name: ______________________ Initials: ______","Name: ______________________ Initials: ______","Name: ______________________ Initials: ______"])),
  pg("Names of Places","Write the name of each place with a capital letter.","Know that names of places begin with a capital letter.",
   NO("Names of cities, countries, rivers and mountains begin with a capital letter: Lahore, Pakistan, Indus."),
   F("",["lahore → {{Lahore}}","karachi → {{Karachi}}","pakistan → {{Pakistan}}","murree → {{Murree}}","islamabad → {{Islamabad}}","quetta → {{Quetta}}"],2),
   CH("Circle the word that needs a capital.",[["we live in multan.",["we","live","multan"],2],["the river ravi is long.",["river","ravi","long"],1]])),
  pg("Days, Months and Pets","Circle the word that needs a capital letter.","Use capitals for days, months and pets' names.",
   NO("Days of the week, months of the year and pets' names all begin with a capital letter: Monday, December, Fluffy."),
   CH("",[["my cat is called snowy.",["cat","called","snowy"],2],["school starts on monday.",["school","monday","starts"],1],["it is cold in december.",["cold","december","it"],1],["the dog tiger barks.",["dog","tiger","barks"],1],["we play on friday.",["play","friday","we"],1]]),
   F("Write correctly.",["sunday → {{Sunday}}","january → {{January}}"],2)),
  pg("Fix the Sentence","Write each sentence again with the right capital letters.","Correct capital letters in sentences.",
   F("",["my name is ali. → {{My name is Ali.}}","sara lives in lahore. → {{Sara lives in Lahore.}}","i go to school on monday. → {{I go to school on Monday.}}","our teacher is miss hina. → {{Our teacher is Miss Hina.}}"],1),
   NO("Remember: start every sentence with a capital, and the word I is always a capital.")),
  pg("Statement or Question?","Circle statement or question. Then add . or ?","Tell statements from questions.",
   NO("A statement tells us something and ends with a full stop (.). A question asks something and ends with a question mark (?)."),
   CH("",[["What is your name",1],["My name is Hamza",0],["Where do you live",1],["I live in Karachi",0],["How old are you",1],["Sara has a red bag",0]],["statement","question"]),
   F("Add . or ?",["Is Ali your brother{{?}}","Ali is my brother{{.}}","Who is your teacher{{?}}"],1)),
  pg("All About Me","Fill in the form. Use capital letters.","Write your own name, initials and details with capitals.",
   WR("",["My first name: ______________________","My family name: ______________________","My initials: ________","The city I live in: ______________________","My school: ______________________","My best friend's name: ______________________"]),
   WR("Write a question to ask your friend.",["______________________________________?"]))],
  "Names of people, places, days, months and pets begin with a capital letter. An initial is the first letter of a name, written as a capital with a full stop: Sara Khan is S. K. Children also tell statements (.) from questions (?).",
  ["Write each family member's name and initials on a card.","Look at a cereal box or newspaper and spot capital letters for names.","Ask your child a question, then ask them to tell you a statement."],
  ["Make name labels with initials for school books.","Write a short list of friends' names and cities with capitals."],
  "Children often forget the full stop after an initial, or write a small letter. Show them how it looks on a name label or a signature.",
  ["The Mixed-up Labels","Miss Hina's class put labels on their lunch boxes. But two said only A. K.! One was Ali Khan and one was Aliya Kazmi. 'We need our full names too,' said Aliya. Ask: What are the initials of Aliya Kazmi?"]),

 TP("Ending sound t","",[
  pg("Listen for t","Read the big idea. Then fill in the last letter.","Hear and write the ending sound t.",
   CN(["cat","speech-balloon"],"Some words end with the sound t. Say cat: c-a-t. The last sound is t. Put your tongue behind your top teeth and let a little puff of air out: t, t, t.","Ending t"),
   F("",["ca_ → {{t}} (cat)","ha_ → {{t}} (hat)","ne_ → {{t}} (net)","po_ → {{t}} (pot)","hu_ → {{t}} (hut)","si_ → {{t}} (sit)"],2),
   NO("Say each word slowly. Tap the table on the last sound.")),
  pg("Ends With t","Fill in the missing t word.","Read and write words ending in t.",
   BK(["cat","hat","net","pot","nut","sit"]),
   F("",["The {{cat}} drinks milk.","Put on your sun {{hat}}.","The fish is in the {{net}}.","Ammi cooks rice in a {{pot}}.","The squirrel eats a {{nut}}.","Please {{sit}} on the chair."]),
   F("Change the first letter.",["cat → h{{at}}","pot → d{{ot}}","net → w{{et}}"],3)),
  pg("The -at Family","Make -at words. Then use them.","Read and write words in the -at family.",
   F("A. Add a letter to make a word.",["b + at = {{bat}}","m + at = {{mat}}","r + at = {{rat}}","s + at = {{sat}}","f + at = {{fat}}","p + at = {{pat}}"],3),
   BK(["bat","mat","rat","sat"]),
   F("B. Fill in an -at word.",["Wipe your feet on the {{mat}}.","Ali hit the ball with a {{bat}}.","The {{rat}} ran away.","Sara {{sat}} on the bench."])),
  pg("-et, -it, -ot, -ut","Write the word. Then sort it.","Read and write t words with different vowels.",
   F("",["w + et = {{wet}}","p + et = {{pet}}","b + it = {{bit}}","h + it = {{hit}}","h + ot = {{hot}}","d + ot = {{dot}}","c + ut = {{cut}}","h + ut = {{hut}}","g + et = {{get}}"],3),
   SO("Sort the words.",["-et","-it","-ot","-ut"],["wet","sit","pot","nut","pet","bit","hot","cut"],[0,1,2,3,0,1,2,3])),
  pg("t or d?","Say the word. Circle the ending sound.","Tell t and d apart at the end of a word.",
   CH("",[["cat",0],["bed",1],["hot",0],["red",1],["hut",0],["mud",1],["net",0],["sad",1],["pot",0],["kid",1]],["t","d"]),
   NO("t is a quick, quiet puff of air. d is the same place but uses your voice. Hold your throat: d buzzes, t does not.")),
  pg("t, d, m or n?","Say the word. Circle the ending sound.","Hear the endings t, d, m and n.",
   CH("",[["sun",3],["drum",2],["bat",0],["bed",1],["jam",2],["pen",3],["hat",0],["red",1],["ten",3],["gum",2]],["t","d","m","n"])),
  pg("Picture Words","Look at each picture. Write the word.","Write picture words that end in t.",
   BK(["cat","bat","hut","goat","carrot","basket","rabbit","robot"]),
   FP("",[["cat","a {{cat}}"],["bat","a {{bat}}"],["hut","a {{hut}}"],["goat","a {{goat}}"],["carrot","a {{carrot}}"],["basket","a {{basket}}"],["rabbit","a {{rabbit}}"],["robot","a {{robot}}"]],2)),
  pg("Sort the Endings","Write each word in the right box.","Sort words by their ending sound.",
   SO("",["ends in t","ends in d","ends in n"],["cat","bed","pen","hut","mud","sun","net","red","van","pot","lid","bin"],[0,1,2,0,1,2,0,1,2,0,1,2]),
   WR("Write one more word for each ending.",["ends in t: __________","ends in d: __________","ends in n: __________"])),
  pg("The Hot Hut","Read the story. Answer the questions.","Find t words in a short story.",
   PA("Pat the cat sat in a little hut. It was hot! Pat got up and ran out. She saw a big pot of water by a net. Pat put her feet in the pot. 'That is better,' she said. Then she sat on a mat in the shade."),
   F("",["The cat is called {{Pat}}.","Pat sat in a {{hut}}.","It was {{hot}}.","She put her feet in a {{pot}}.","At the end she sat on a {{mat}}."],1),
   WR("Write three t words from the story.",["________  ________  ________"])),
  pg("Write Your Own","Write t words and a sentence.","Spell and use words ending in t.",
   WR("",["Two -at words: __________  __________","Two -ot words: __________  __________","Two -ut or -it words: __________  __________"]),
   WR("Write a sentence with two t words.",["______________________________________","______________________________________"]),
   DR("Draw a cat in a hat.",150))],
  "Many short words end in the sound t: cat, net, sit, pot, hut. Children hear and write the ending t, make word families (-at, -et, -it, -ot, -ut) and tell t apart from d, m and n.",
  ["Say a word and ask: what sound do you hear at the end?","Make -at words with letter cards: c-at, h-at, m-at.","Play 'I spy something that ends in t'."],
  ["Hunt for t words in a picture book.","Write a silly sentence with lots of t words: The fat cat sat on a hot pot."],
  "t and d sound very alike at the end. Ask your child to hold a hand to their throat: d buzzes, t does not.",
  ["The Cat in the Hat Shop","Kit the cat went into a hat shop. She tried a red hat, a wet hat and a hat with a nut on top. At last she found a hat that fit. Ask: Which words end in t?"])
]});

/* Grade 1 Urdu: do-chashmi he and heavy words (December syllabus) */
G1_URDU.push(
 TP("دو چشمی ھ اور بھاری الفاظ","Do-chashmi he and heavy words",[
  pg("دو چشمی ھ|Do-chashmi he","پڑھیں۔ پھر حرف جوڑ کر لکھیں۔","Know that ھ joins a letter to make a heavy sound.",
   CN(["elephant","drum"],"دو چشمی ھ جب کسی حرف کے ساتھ ملتی ہے تو اس کی آواز بھاری ہو جاتی ہے، جیسے ب اور ھ مل کر بھ بنتے ہیں۔ ہاتھی اور ڈھول بھاری آواز والے الفاظ ہیں۔","دو چشمی ھ"),
   F("",["ب + ھ = {{بھ}}","پ + ھ = {{پھ}}","ت + ھ = {{تھ}}","ٹ + ھ = {{ٹھ}}","ج + ھ = {{جھ}}","چ + ھ = {{چھ}}","د + ھ = {{دھ}}","ک + ھ = {{کھ}}","گ + ھ = {{گھ}}"],3,1)),
  pg("ھ اور ا|Joining with alif","جوڑ کر لکھیں اور پڑھیں۔","Join heavy letters with ا.",
   F("",["بھ + ا = {{بھا}}","پھ + ا = {{پھا}}","تھ + ا = {{تھا}}","ٹھ + ا = {{ٹھا}}","جھ + ا = {{جھا}}","چھ + ا = {{چھا}}"],2,1),
   BK(["بھالو","تھالی","جھاڑو","چھاتا"]),
   F("لفظ مکمل کریں۔",["{{بھا}}لو","{{تھا}}لی","{{جھا}}ڑو","{{چھا}}تا"],2,1)),
  pg("ھ اور و|Joining with vao","جوڑ کر لکھیں اور پڑھیں۔","Join heavy letters with و.",
   F("",["بھ + و = {{بھو}}","پھ + و = {{پھو}}","تھ + و = {{تھو}}","ٹھ + و = {{ٹھو}}","جھ + و = {{جھو}}","چھ + و = {{چھو}}"],2,1),
   BK(["پھول","جھولا","چھوٹا","تھوڑا"]),
   F("لفظ مکمل کریں۔",["{{پھو}}ل","{{جھو}}لا","{{چھو}}ٹا","{{تھو}}ڑا"],2,1)),
  pg("ھ اور ی|Joining with choti ye","جوڑ کر لکھیں اور پڑھیں۔","Join heavy letters with ی.",
   F("",["بھ + ی = {{بھی}}","پھ + ی = {{پھی}}","تھ + ی = {{تھی}}","ٹھ + ی = {{ٹھی}}","جھ + ی = {{جھی}}","چھ + ی = {{چھی}}"],2,1),
   BK(["ہاتھی","گوبھی","تھی","بھی"]),
   F("لفظ مکمل کریں۔",["ہا{{تھی}}","گو{{بھی}}","میں بھی آؤں گا، تم {{بھی}} آؤ۔","وہ کل گھر پر {{تھی}}۔"],2,1)),
  pg("ھ اور ے|Joining with bari ye","جوڑ کر لکھیں اور پڑھیں۔","Join heavy letters with ے.",
   F("",["بھ + ے = {{بھے}}","پھ + ے = {{پھے}}","تھ + ے = {{تھے}}","ٹھ + ے = {{ٹھے}}","جھ + ے = {{جھے}}","چھ + ے = {{چھے}}"],2,1),
   BK(["مجھے","اچھے","تھے","بیٹھے"]),
   F("خالی جگہ پُر کریں۔",["{{مجھے}} آم پسند ہیں۔","یہ {{اچھے}} بچے ہیں۔","ہم کل باغ میں {{تھے}}۔","سب بچے کرسیوں پر {{بیٹھے}} ہیں۔"],1,1)),
  pg("توڑ اور جوڑ|Break and join","لفظ کو توڑ کر لکھیں۔ پھر جوڑیں۔","Break heavy syllables apart and join them again.",
   F("توڑ کر لکھیں۔",["بھا = {{ب + ھ + ا}}","پھو = {{پ + ھ + و}}","تھی = {{ت + ھ + ی}}","چھے = {{چ + ھ + ے}}","جھو = {{ج + ھ + و}}","ٹھا = {{ٹ + ھ + ا}}"],2,1),
   F("جوڑ کر لکھیں۔",["چ + ھ + و = {{چھو}}","ب + ھ + ی = {{بھی}}","ج + ھ + ا = {{جھا}}","پ + ھ + ے = {{پھے}}","ت + ھ + و = {{تھو}}","ٹ + ھ + ی = {{ٹھی}}"],2,1)),
  pg("تصویر دیکھ کر نام لکھیں|Name the picture","تصویر دیکھیں اور اس کا نام لکھیں۔","Write the names of pictures with heavy sounds.",
   BK(["جھاگ","ڈھول","ہاتھی","ہاتھ","بھالو","گھوڑا","گھر","مچھلی"]),
   FP("",[["bubbles","{{جھاگ}}"],["drum","{{ڈھول}}"],["elephant","{{ہاتھی}}"],["hand-with-fingers-splayed","{{ہاتھ}}"],["bear","{{بھالو}}"],["horse","{{گھوڑا}}"],["house","{{گھر}}"],["fish","{{مچھلی}}"]],2)),
  pg("بھاری لفظ پہچانیں|Find the heavy words","کیا اس لفظ میں بھاری آواز ہے؟ ہاں یا نہیں پر دائرہ لگائیں۔","Recognise words with heavy sounds.",
   CH("",[["گھر",0],["کتاب",1],["پھول",0],["قلم",1],["دودھ",0],["بکری",1],["چھتری",0],["انار",1],["کھیرا",0],["مور",1]],["ہاں","نہیں"]),
   NO("بھاری آواز والے حروف: بھ، پھ، تھ، ٹھ، جھ، چھ، دھ، ڈھ، کھ، گھ۔ جن لفظوں میں یہ ہوں، ان میں رنگ بھریں۔")),
  pg("گنتی ایک تا پانچ|Counting one to five","گنیں اور گنتی لفظوں میں لکھیں۔","Read and write Urdu counting from one to five.",
   BK(["ایک","دو","تین","چار","پانچ"]),
   F("",["۱ (1) = {{ایک}}","۲ (2) = {{دو}}","۳ (3) = {{تین}}","۴ (4) = {{چار}}","۵ (5) = {{پانچ}}"],1,1),
   CT("گنیں اور لکھیں۔",[[3,"star"],[5,"circle"],[2,"heart"],[4,"square"]])),
  pg("کتنے ہیں؟|How many?","تصویر دیکھیں۔ گنتی لفظوں میں لکھیں۔","Use Urdu counting words with heavy words.",
   FP("",[["elephant","{{دو}} ہاتھی (2)"],["drum","{{تین}} ڈھول (3)"],["blossom","{{پانچ}} پھول (5)"],["fish","{{چار}} مچھلیاں (4)"],["bear","{{ایک}} بھالو (1)"],["horse","{{تین}} گھوڑے (3)"]],2),
   WR("ایک جملہ لکھیں جس میں کوئی بھاری لفظ ہو۔",["____________________________________"]))],
  "Do-chashmi he (ھ) joins a letter to make a heavy (aspirated) sound: ب + ھ = بھ. Children join the heavy letters with ا، و، ی، ے (بھا، بھو، بھی، بھے), break them apart, name pictures such as ہاتھی، ڈھول، جھاگ، بھالو and count from ایک to پانچ in Urdu.",
  ["Say بھ and ب with a hand in front of the mouth: the heavy one gives a puff of air.","Point at things at home with heavy names: گھر، گھڑی، دودھ، کھڑکی.","Count to five in Urdu on fingers every day."],
  ["Make cards with بھ، پھ، تھ and ا، و، ی، ے and join them.","Draw five pictures with heavy names and label them together."],
  "Children often write ہ instead of ھ. Show them the two eyes of do-chashmi he (ھ) and say: heavy sounds use the two-eyed he.",
  ["ہاتھی کا ڈھول","ایک ہاتھی کے پاس ایک بڑا ڈھول تھا۔ وہ صبح صبح ڈھول بجاتا: ڈھم، ڈھم! بھالو اور گھوڑا ناچنے لگتے۔ سوال: ڈھول کس کے پاس تھا؟"])
);

/* P3a depth pages: Warm-up ★, Challenge ★★★, Topic Test (2 pages) and Word Mat for each new topic */
DEPTH.push(({addPages})=>{
 const band=(n)=>{const a=Math.round(n/2),b=Math.round(n*0.8);return `Score: ______ / ${n} &nbsp; ★ 0 to ${a-1} keep practising &nbsp; ★★ ${a} to ${b-1} good work &nbsp; ★★★ ${b} to ${n} super!`};
 /* Maths: Times table of 3 */
 addPages('maths','Times table of 3',[
  pg('Threes Warm-up ★','Start here if the 3 times table is new. Count the shapes in threes.','Count groups of 3 with support.',
   {t:'picsum',h:'A. Two groups of 3. Add them.',items:[[3,3,'circle'],[3,3,'star']]},
   BX('B. Count in threes. Fill in the gaps.',['3|{{6}}|9|{{12}}|15','15|{{18}}|21|{{24}}|27|{{30}}']),
   F('C. Add the threes.',['3 + 3 = {{6}}','3 + 3 + 3 = {{9}}','6 + 3 = {{9}}','9 + 3 = {{12}}','12 + 3 = {{15}}','15 + 3 = {{18}}'],3),
   CH('D. Circle the number you say when you count in threes.',[['',['5','6','7'],1],['',['10','11','12'],2],['',['13','14','15'],2]])),
  pg('Threes Challenge ★★★','Think carefully. Show your thinking.','Reason with the 3 times table: true or false, spot the mistake and puzzles.',
   CH('A. True or false?',[['5 × 3 = 15',0],['3 × 3 = 6',1],['24 is in the 3 times table.',0],['20 is in the 3 times table.',1],['4 × 3 is the same as 3 + 3 + 3 + 3.',0],['7 × 3 = 24',1]],TF),
   F('B. Spot the mistake. Write the right answer.',['Ali says 6 × 3 = 16. It should be {{18}}.','Sara counts 3, 6, 9, 11, 14. After 9 comes {{12}}.','Zain says 9 × 3 = 26. It should be {{27}}.'],1),
   F('C. Puzzles.',['I am in the 3 times table. I am between 20 and 23. I am {{21}}.','I am 3 more than 4 × 3. I am {{15}}.','Three friends share 27 sweets equally. Each gets {{9}}.'],1)),
  pg('Topic Test: Times table of 3 (1)','Answer every question. Ask a grown-up to mark it out of 26.','Check counting in threes and the 3 times table.',
   NO(band(26)),
   BX('1. Count in threes. (4 marks)',['3|6|{{9}}|{{12}}|15|{{18}}|21|{{24}}']),
   F('2. Answer the times facts. (8 marks)',['2 × 3 = {{6}}','5 × 3 = {{15}}','10 × 3 = {{30}}','4 × 3 = {{12}}','7 × 3 = {{21}}','3 × 3 = {{9}}','9 × 3 = {{27}}','6 × 3 = {{18}}'],4),
   F('3. Write as a times fact. (2 marks)',['3 + 3 + 3 + 3 + 3 = {{5}} × 3','3 + 3 = {{2}} × 3'],2),
   CH('4. Is it in the 3 times table? (4 marks)',[['15',0],['10',1],['24',0],['26',1]],YN)),
  pg('Topic Test: Times table of 3 (2)','Answer every question. Add up your marks from both pages.','Check missing numbers and word problems with threes.',
   F('5. Find the missing number. (4 marks)',['3 × {{4}} = 12','{{8}} × 3 = 24','3 × {{6}} = 18','{{10}} × 3 = 30'],2),
   WP('6. Word problems. (4 marks)',['A tricycle has 3 wheels. 4 tricycles have {{12}} wheels.','Ammi buys 3 mangoes for each child. She has 5 children. She buys {{15}} mangoes.','There are 18 pencils in packs of 3. There are {{6}} packs.','Hira jumps 3 steps at a time. After 7 jumps she is on step {{21}}.']),
   WR('How did I do? Write one 3 times table fact you know by heart.',['I know that ______________________.'])),
  pg('Word Mat: Times table of 3','Keep this mat on the table while you work. Read the facts together.','Know the 3 times table and the words for multiplying.',
   NO('<b>The 3 times table</b><br>1 × 3 = 3 · 2 × 3 = 6 · 3 × 3 = 9 · 4 × 3 = 12 · 5 × 3 = 15<br>6 × 3 = 18 · 7 × 3 = 21 · 8 × 3 = 24 · 9 × 3 = 27 · 10 × 3 = 30'),
   NO('<b>Count in threes</b>: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30'),
   NO('<b>Maths words</b><br><b>group</b>: things put together · <b>equal groups</b>: groups with the same number in each<br><b>times</b> (×): lots of, groups of · <b>multiply</b>: find the total of equal groups<br><b>repeated addition</b>: 3 + 3 + 3 is the same as 3 × 3 · <b>times table</b>: a list of times facts'),
   BK(['group','equal','times','multiply','threes','total','table','lots of']),
   DR('Draw 4 groups of 3 stars.',170))]);
 /* Maths: Number names to 50 */
 addPages('maths','Number names to 50',[
  pg('Number Names Warm-up ★','Start here if number names are new. Read, copy and match.','Read and write number names to 20 with support.',
   NO('0 zero · 1 one · 2 two · 3 three · 4 four · 5 five · 6 six · 7 seven · 8 eight · 9 nine · 10 ten<br>11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen · 16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen · 20 twenty'),
   F('A. Copy the number name.',['6 = {{six}}','9 = {{nine}}','11 = {{eleven}}','15 = {{fifteen}}','18 = {{eighteen}}','20 = {{twenty}}'],2),
   MA('B. Match.',['3','8','12','17'],['three','eight','twelve','seventeen'])),
  pg('Number Names Challenge ★★★','Think carefully. Show your thinking.','Reason about number names to 50.',
   CH('A. True or false?',[['forty is spelt fourty.',1],['thirty-six is 36.',0],['fifty comes after forty-nine.',0],['twenty-two is bigger than thirty.',1],['fifteen is 50.',1]],TF),
   F('B. Spot the mistake. Write it correctly.',['47 = fourty-seven → {{forty-seven}}','25 = twenty five → {{twenty-five}}','15 = fiveteen → {{fifteen}}'],1),
   F('C. Puzzles. Write the answer in words.',['I am 10 more than thirty-two. {{forty-two}}','I am one less than fifty. {{forty-nine}}','I have 3 tens and 3 ones. {{thirty-three}}'],1)),
  pg('Topic Test: Number names to 50 (1)','Answer every question. Ask a grown-up to mark it out of 20.','Check writing number names to 50.',
   NO(band(20)),
   F('1. Write in words. (8 marks)',['20 = {{twenty}}','30 = {{thirty}}','40 = {{forty}}','50 = {{fifty}}','23 = {{twenty-three}}','37 = {{thirty-seven}}','44 = {{forty-four}}','19 = {{nineteen}}'],2),
   F('2. Write the number. (4 marks)',['thirty-one = {{31}}','forty-eight = {{48}}','twenty-six = {{26}}','fourteen = {{14}}'],2)),
  pg('Topic Test: Number names to 50 (2)','Answer every question. Add up your marks from both pages.','Check spelling and using number names.',
   CH('3. Circle the right spelling. (4 marks)',[['40',['forty','fourty'],0],['15',['fiveteen','fifteen'],1],['12',['twelve','twelf'],0],['50',['fifty','fivety'],0]]),
   F('4. Tens and ones. Write the name. (2 marks)',['4 tens and 5 ones = {{forty-five}}','2 tens and 8 ones = {{twenty-eight}}'],1),
   WP('5. Word problems. Write the answer in words. (2 marks)',['There are thirty children. Ten more come. Now there are {{forty}} children.','A book has forty-nine pages. The next page would be {{fifty}}.']),
   WR('How did I do? Write the number name you find hardest.',['The hardest one for me is ______________________.'])),
  pg('Word Mat: Number names to 50','Keep this mat on the table while you work. Read the words together.','Know the number names to 50.',
   NO('<b>The tens</b>: 10 ten · 20 twenty · 30 thirty · 40 forty · 50 fifty'),
   NO('<b>Building a name</b>: ten word + hyphen + ones word<br>21 twenty-one · 26 twenty-six · 34 thirty-four · 39 thirty-nine · 42 forty-two · 47 forty-seven'),
   NO('<b>11 to 19</b>: eleven · twelve · thirteen · fourteen · fifteen · sixteen · seventeen · eighteen · nineteen'),
   NO('<b>Tricky spellings</b>: forty (no u) · fifteen · fifty (fif, not five) · twelve · twenty · eight · eighteen'),
   BK(['twenty','thirty','forty','fifty','hyphen','tens','ones','number name']),
   DR('Write your favourite number from 20 to 50 in words and draw it as tens and ones.',150))]);
 /* Maths: Making 10 and fact families */
 addPages('maths','Making 10 and fact families',[
  pg('Make 10 Warm-up ★','Start here if bonds to 10 are new. Use your fingers.','Find bonds to 10 with support.',
   {t:'picsum',h:'A. Add the dots.',items:[[5,5,'circle'],[6,4,'star'],[8,2,'heart']]},
   F('B. Use your fingers. How many more make 10?',['9 + {{1}} = 10','7 + {{3}} = 10','5 + {{5}} = 10','4 + {{6}} = 10','2 + {{8}} = 10','0 + {{10}} = 10'],3),
   F('C. Take away from 10.',['10 − 1 = {{9}}','10 − 2 = {{8}}','10 − 5 = {{5}}'],3)),
  pg('Make 10 Challenge ★★★','Think carefully. Show your thinking.','Reason with bonds to 10, making 10 and fact families.',
   CH('A. True or false?',[['7 + 3 = 10',0],['8 + 5 = 12',1],['10 − 4 = 6',0],['9 + 6 = 10 + 5',0],['5, 9, 14 is a fact family.',0],['6 + 7 = 14',1]],TF),
   F('B. Spot the mistake. Write the right answer.',['Hamza says 9 + 7 = 15. It is {{16}}.','Zara says 13 − 5 = 9. It is {{8}}.','Ali says 8 + 4 = 10 + 3. It is 10 + {{2}}.'],1),
   F('C. Puzzles.',['Two numbers make 10. One is 4 more than the other. They are {{3}} and {{7}}.','I am a fact family with 6 and 11. My third number is {{5}}.','8 + ? = 6 + 9. The missing number is {{7}}.'],1)),
  pg('Topic Test: Making 10 and fact families (1)','Answer every question. Ask a grown-up to mark it out of 26.','Check bonds to 10 and adding by making 10.',
   NO(band(26)),
   F('1. Bonds to 10. (6 marks)',['4 + {{6}} = 10','9 + {{1}} = 10','{{3}} + 7 = 10','10 − 2 = {{8}}','10 − 5 = {{5}}','10 − 7 = {{3}}'],3),
   F('2. Add by making 10. (6 marks)',['9 + 3 = {{12}}','8 + 5 = {{13}}','7 + 6 = {{13}}','9 + 8 = {{17}}','8 + 7 = {{15}}','6 + 5 = {{11}}'],3),
   CH('3. Do they make 10? (4 marks)',[['3 and 7',0],['4 and 5',1],['8 and 2',0],['6 and 3',1]],YN)),
  pg('Topic Test: Making 10 and fact families (2)','Answer every question. Add up your marks from both pages.','Check fact families, counting on and back, and picture problems.',
   F('4. Complete the fact family 7, 5, 12. (4 marks)',['7 + 5 = {{12}}','5 + 7 = {{12}}','12 − 7 = {{5}}','12 − 5 = {{7}}'],2),
   F('5. Count on and count back. (2 marks)',['Start at 13. Count on 4. → {{17}}','Start at 15. Count back 6. → {{9}}'],1),
   WP('6. Picture problems. (4 marks)',['There are 9 birds on a wire. 4 more land. There are {{13}} birds.','Sana has 10 bangles. She gives 6 to her sister. She has {{4}} left.','8 red cars and 8 blue cars. There are {{16}} cars.','14 children are in the park. 5 go home. {{9}} are still in the park.']),
   WR('How did I do? Write one bond to 10 you know.',['______ + ______ = 10'])),
  pg('Word Mat: Making 10 and fact families','Keep this mat on the table while you work. Read the facts together.','Know bonds to 10, fact families and the words for adding and taking away.',
   NO('<b>Bonds to 10</b>: 0 + 10 · 1 + 9 · 2 + 8 · 3 + 7 · 4 + 6 · 5 + 5 · 6 + 4 · 7 + 3 · 8 + 2 · 9 + 1 · 10 + 0'),
   NO('<b>Make 10 to add</b>: 9 + 5 → 9 + 1 + 4 → 10 + 4 = 14 &nbsp; · &nbsp; 8 + 6 → 8 + 2 + 4 → 10 + 4 = 14'),
   NO('<b>A fact family</b> (3, 7, 10): 3 + 7 = 10 · 7 + 3 = 10 · 10 − 3 = 7 · 10 − 7 = 3'),
   {t:'numline'},
   NO('<b>Maths words</b>: <b>add</b>, plus, altogether, total · <b>take away</b>, minus, left · <b>count on</b>: go up the number line · <b>count back</b>: go down the number line · <b>bond</b>: two numbers that make a whole'),
   BK(['bond','make 10','add','take away','fact family','count on','count back','total']))]);
 /* English: Names and initials */
 addPages('g1-english','Names and initials',[
  pg('Names Warm-up ★','Start here if capital letters for names are new. Trace and copy.','Write names with a capital letter, with support.',
   NO('A name starts with a capital letter: <b>A</b>li, <b>S</b>ara, <b>H</b>amza, <b>L</b>ahore.'),
   F('A. Write the first letter as a capital.',['ali → {{A}}li','sara → {{S}}ara','zain → {{Z}}ain','hira → {{H}}ira','bilal → {{B}}ilal','noor → {{N}}oor'],3),
   CH('B. Circle the name written correctly.',[['',['ali','Ali'],1],['',['Sara','sara'],0],['',['lahore','Lahore'],1],['',['Monday','monday'],0]]),
   F('C. What is the first letter of each name?',['Hamza → {{H}}','Maryam → {{M}}','Usman → {{U}}'],3)),
  pg('Names Challenge ★★★','Think carefully. Find and fix the mistakes.','Use capitals, initials and end marks correctly.',
   CH('A. True or false?',[['The initials of Zara Ali are Z. A.',0],['Days of the week start with a small letter.',1],['Karachi needs a capital K.',0],['A question ends with a full stop.',1],['The word I is always a capital.',0]],TF),
   F('B. Find all the mistakes. Write each sentence correctly.',['my friend hira lives in multan. → {{My friend Hira lives in Multan.}}','we go to murree in june. → {{We go to Murree in June.}}','does ali have a cat called snowy → {{Does Ali have a cat called Snowy?}}'],1),
   F('C. Whose initials?',['F. A. could be Fatima {{Ali}} (choose: Ali, Raza).','My initials are T. M. My first name starts with {{T}}.'],1)),
  pg('Topic Test: Names and initials (1)','Answer every question. Ask a grown-up to mark it out of 20.','Check capital letters for names and initials.',
   NO(band(20)),
   F('1. Write each name correctly. (4 marks)',['hamza khan → {{Hamza Khan}}','sana tariq → {{Sana Tariq}}','peshawar → {{Peshawar}}','friday → {{Friday}}'],2),
   F('2. Write the initials. (4 marks)',['Sara Malik → {{S. M.}}','Omar Shah → {{O. S.}}','Ayan Butt → {{A. B.}}','Rida Javed → {{R. J.}}'],2),
   CH('3. Circle the word that needs a capital. (4 marks)',[['my dog rocky is brown.',['dog','rocky','brown'],1],['we visit quetta.',['visit','quetta','we'],1],['school is shut on sunday.',['school','shut','sunday'],2],['the boy is called adam.',['boy','called','adam'],2]])),
  pg('Topic Test: Names and initials (2)','Answer every question. Add up your marks from both pages.','Check statements, questions and writing sentences with names.',
   CH('4. Statement or question? (4 marks)',[['Where is my bag',1],['Ali has a kite',0],['Can you swim',1],['It is hot today',0]],['statement','question']),
   F('5. Write the sentence again correctly. (4 marks)',['sara is my sister. → {{Sara is my sister.}}','who is miss hina → {{Who is Miss Hina?}}'],1),
   WR('How did I do? Write your full name and your initials.',['My name is ______________________. My initials are ________.'])),
  pg('Word Mat: Names and initials','Keep this mat on the table while you work. Read the words together.','Know when to use capital letters, initials, full stops and question marks.',
   NO('<b>Capital letters for</b><br>names of people: Sara Khan · places: Lahore, Pakistan, Indus · days: Monday, Friday<br>months: June, December · pets: Snowy, Rocky · the word I · the start of every sentence'),
   NO('<b>Initials</b>: the first letter of each name, a capital and a full stop. Ali Raza → A. R. or A. Raza'),
   NO('<b>Days</b>: Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday'),
   NO('<b>End marks</b>: a statement tells (.) My name is Ali. · a question asks (?) What is your name?'),
   BK(['name','capital','initial','full stop','question mark','statement','question','place']),
   DR('Write your initials in big, bubbly capital letters and decorate them.',150))]);
 /* English: Ending sound t */
 addPages('g1-english','Ending sound t',[
  pg('Ending t Warm-up ★','Start here if ending sounds are new. Say, trace and write.','Hear and write the ending t with support.',
   NO('Say each word. The last sound is t: ca<b>t</b>, ha<b>t</b>, po<b>t</b>, nu<b>t</b>.'),
   FP('A. Look at the picture. Write the last letter.',[['cat','ca{{t}}'],['bat','ba{{t}}'],['hut','hu{{t}}'],['goat','goa{{t}}']],2),
   CH('B. Does it end in t? Circle yes or no.',[['hat',0],['sun',1],['net',0],['bed',1],['sit',0],['jam',1]],YN)),
  pg('Ending t Challenge ★★★','Think carefully. Find and fix the mistakes.','Use and spell t words in harder tasks.',
   CH('A. True or false?',[['cat ends in t.',0],['bed ends in t.',1],['hot and pot rhyme.',0],['carrot ends in t.',0],['drum ends in t.',1]],TF),
   F('B. Spot the mistake. Write the word correctly.',['The cad sat on the mat. → {{cat}}','I hid my han in the box. → {{hat}}','The nud fell from the tree. → {{nut}}'],1),
   F('C. Change one letter to make a t word.',['bed → be{{t}}','pan → pa{{t}}','hum → hu{{t}}','lid → li{{t}}'],2),
   F('D. Riddles. I end in t.',['I say meow. I am a {{cat}}.','You cook rice in me. I am a {{pot}}.'],1)),
  pg('Topic Test: Ending sound t (1)','Answer every question. Ask a grown-up to mark it out of 20.','Check hearing and writing the ending t.',
   NO(band(20)),
   FP('1. Look at the picture. Write the last letter. (4 marks)',[['cat','ca{{t}}'],['bed','be{{d}}'],['sun','su{{n}}'],['hut','hu{{t}}']],2),
   F('2. Make a word. (4 marks)',['c + at = {{cat}}','h + ot = {{hot}}','s + it = {{sit}}','n + ut = {{nut}}'],2),
   CH('3. Circle the ending sound. (4 marks)',[['pot',0],['red',1],['pen',2],['bat',0]],['t','d','n'])),
  pg('Topic Test: Ending sound t (2)','Answer every question. Add up your marks from both pages.','Check reading and spelling t words.',
   BK(['hat','pot','net','hut']),
   F('4. Fill in the t word. (4 marks)',['Wear a {{hat}} in the sun.','The fish is in the {{net}}.','Ammi cooks in a big {{pot}}.','The farmer lives in a {{hut}}.']),
   SO('5. Sort. (4 marks)',['ends in t','not t'],['mat','mud','bit','ten'],[0,1,0,1]),
   WR('How did I do? Write two t words you can spell.',['__________  __________'])),
  pg('Word Mat: Ending sound t','Keep this mat on the table while you work. Read the words together.','Know words that end in t and how t differs from d, m and n.',
   NO('<b>-at</b>: cat · hat · mat · bat · rat · sat &nbsp; <b>-et</b>: net · wet · pet · get<br><b>-it</b>: sit · bit · hit · kit &nbsp; <b>-ot</b>: pot · hot · dot · not &nbsp; <b>-ut</b>: nut · hut · cut · but'),
   NO('<b>Longer t words</b>: carrot · basket · rabbit · robot · goat · coat · parrot · elephant'),
   NO('<b>Listen to the end</b>: t (cat) · d (bed) · m (drum) · n (sun). Hold your throat: d buzzes, t does not.'),
   BK(['cat','hat','net','sit','pot','nut','hut','goat']),
   DR('Draw three things that end in t and label them.',170))]);
 /* Urdu: do-chashmi he and heavy words */
 addPages('g1-urdu','دو چشمی ھ اور بھاری الفاظ',[
  pg('آسان مشق ★|Warm-up ★','آہستہ آہستہ پڑھیں اور لکھیں۔','Join ھ with letters, with support.',
   NO('ب + ھ = بھ &nbsp; · &nbsp; پ + ھ = پھ &nbsp; · &nbsp; ت + ھ = تھ &nbsp; · &nbsp; ج + ھ = جھ &nbsp; · &nbsp; چ + ھ = چھ &nbsp; · &nbsp; گ + ھ = گھ'),
   F('الف۔ جوڑ کر لکھیں۔',['ب + ھ = {{بھ}}','ج + ھ = {{جھ}}','گ + ھ = {{گھ}}','پ + ھ = {{پھ}}'],2,1),
   FP('ب۔ تصویر دیکھیں۔ لفظ مکمل کریں۔',[['house','{{گھ}}ر'],['blossom','{{پھ}}ول'],['bear','{{بھ}}الو'],['elephant','ہا{{تھ}}ی']],2),
   F('ج۔ گنتی لکھیں۔',['۱ = {{ایک}}','۲ = {{دو}}','۳ = {{تین}}'],3,1)),
  pg('مشکل مشق ★★★|Challenge ★★★','غور سے سوچیں اور غلطی ٹھیک کریں۔','Find mistakes and reason about heavy words.',
   CH('الف۔ صحیح یا غلط؟',[['ب اور ھ مل کر بھ بنتے ہیں۔',0],['ہاتھی میں بھاری آواز ہے۔',0],['کتاب میں بھاری آواز ہے۔',1],['پانچ کے بعد چار آتا ہے۔',1],['چھ + و = چھو',0]],['صحیح','غلط']),
   F('ب۔ غلطی ٹھیک کر کے لکھیں۔',['ہاتہی → {{ہاتھی}}','گہر → {{گھر}}','پہول → {{پھول}}','ڈہول → {{ڈھول}}'],2,1),
   F('ج۔ ھ ہٹا کر نیا لفظ بنائیں۔',['پھل → {{پل}}','دھن → {{دن}}'],2,1)),
  pg('امتحان: دو چشمی ھ (۱)|Topic Test (1)','سب سوال کریں۔ کل نمبر ۲۰۔','Check joining and breaking heavy letters.',
   NO('نمبر: ______ / ۲۰ &nbsp; ★ ۰ تا ۹ مزید مشق کریں &nbsp; ★★ ۱۰ تا ۱۵ شاباش &nbsp; ★★★ ۱۶ تا ۲۰ بہت خوب!'),
   F('۱۔ جوڑ کر لکھیں۔ (۴ نمبر)',['بھ + ا = {{بھا}}','پھ + و = {{پھو}}','تھ + ی = {{تھی}}','چھ + ے = {{چھے}}'],2,1),
   F('۲۔ توڑ کر لکھیں۔ (۴ نمبر)',['جھا = {{ج + ھ + ا}}','ٹھو = {{ٹ + ھ + و}}','بھی = {{ب + ھ + ی}}','تھے = {{ت + ھ + ے}}'],2,1),
   F('۳۔ گنتی لفظوں میں لکھیں۔ (۴ نمبر)',['۲ = {{دو}}','۴ = {{چار}}','۵ = {{پانچ}}','۳ = {{تین}}'],2,1)),
  pg('امتحان: دو چشمی ھ (۲)|Topic Test (2)','سب سوال کریں۔ دونوں صفحوں کے نمبر جمع کریں۔','Check naming pictures and finding heavy words.',
   BK(['ہاتھی','ڈھول','جھاگ','بھالو']),
   FP('۴۔ تصویر دیکھ کر نام لکھیں۔ (۴ نمبر)',[['elephant','{{ہاتھی}}'],['drum','{{ڈھول}}'],['bubbles','{{جھاگ}}'],['bear','{{بھالو}}']],2),
   CH('۵۔ بھاری آواز والے لفظ پر دائرہ لگائیں۔ (۴ نمبر)',[['',['گھوڑا','بکری'],0],['',['مور','دودھ'],1],['',['چھتری','قلم'],0],['',['انار','کھیرا'],1]]),
   WR('میں نے کیسا کیا؟ ایک بھاری لفظ لکھیں جو آپ کو آتا ہے۔',['مجھے یہ لفظ آتا ہے: ______________'])),
  pg('الفاظ کی تختی|Word Mat','کام کرتے وقت یہ تختی سامنے رکھیں۔ مل کر پڑھیں۔','Know the heavy letters, their joins and Urdu counting to five.',
   NO('<b>بھاری حروف</b>: بھ · پھ · تھ · ٹھ · جھ · چھ · دھ · ڈھ · کھ · گھ'),
   NO('<b>ا کے ساتھ</b>: بھا · پھا · تھا · ٹھا · جھا · چھا &nbsp; <b>و کے ساتھ</b>: بھو · پھو · تھو · ٹھو · جھو · چھو<br><b>ی کے ساتھ</b>: بھی · پھی · تھی · ٹھی · جھی · چھی &nbsp; <b>ے کے ساتھ</b>: بھے · پھے · تھے · ٹھے · جھے · چھے'),
   NO('<b>بھاری الفاظ</b>: ہاتھی · ہاتھ · ڈھول · جھاگ · بھالو · گوبھی · گھر · گھوڑا · پھول · دودھ · چھتری · مچھلی'),
   NO('<b>گنتی</b>: ۱ ایک · ۲ دو · ۳ تین · ۴ چار · ۵ پانچ'),
   BK(['دو چشمی ھ','بھاری','جوڑ','توڑ','ہاتھی','ڈھول']),
   DR('ایک بھاری لفظ کی تصویر بنائیں اور نام لکھیں۔',150))]);
});

/* P3a top-ups: fill each new page to 0.75 or more */
DEPTH.push(()=>{
 const M=(sid,T,title,...b)=>{const p=PAGES[sid].find(x=>x.topic===T&&x.title===title);if(p)p.blocks.push(...b);else console.warn('depth: no page',sid,T,title)};
 let S='maths',T='Times table of 3';
 M(S,T,'Groups of 3',CT('Count the shapes. Write how many.',[[6,'star'],[9,'circle'],[12,'heart'],[3,'square']]),
  WP('',['There are 2 groups of 3 birds. There are {{6}} birds.','There are 4 groups of 3 cars. There are {{12}} cars.']));
 M(S,T,'Count in Threes',CH('C. Which number comes next?',[['3, 6, 9, ___',['10','12','11'],1],['18, 21, 24, ___',['25','26','27'],2],['30, 27, 24, ___',['21','22','23'],0],['9, 12, 15, ___',['16','18','17'],1]]),
  WP('D. Count in threes to solve.',['Hamza puts 3 stickers on each page. After 5 pages he has used {{15}} stickers.','A frog jumps 3 steps each time. After 4 jumps it is on step {{12}}.','Count back in threes from 30. The fourth number you say is {{21}}.']));
 M(S,T,'Add Threes',CH('Circle the times fact that matches.',[['3 + 3 + 3',['3 × 3','2 × 3','4 × 3'],0],['3 + 3 + 3 + 3 + 3 + 3 + 3',['6 × 3','7 × 3','8 × 3'],1],['3 + 3 + 3 + 3',['4 × 3','5 × 3','3 × 4 + 3'],0]]),
  WP('',['Sara makes 3 groups of 3 beads. She adds 3 + 3 + 3 = {{9}} beads.','Ali has 5 boxes with 3 pens in each. 5 × 3 = {{15}} pens.','There are 8 groups of 3 children. 8 × 3 = {{24}} children.']));
 M(S,T,'The 3 Times Table',BX('C. Count back in threes.',['30|27|{{24}}|21|{{18}}|15|{{12}}|9|{{6}}|3']),
  WP('D. Use the table to solve.',['How many legs do 4 three-legged stools have? {{12}}','Each pack has 3 juice boxes. How many juice boxes are in 9 packs? {{27}}','Ammi buys 3 eggs a day. How many eggs does she buy in 6 days? {{18}}']));
 M(S,T,'Picture Threes',WP('Now try these without pictures.',['A clover leaf has 3 parts. 3 clover leaves have {{9}} parts.','Each child has 3 crayons. 8 children have {{24}} crayons.','Each vase has 3 roses. 10 vases have {{30}} roses.','Each plate has 3 samosas. 9 plates have {{27}} samosas.']),
  F('Write the times fact.',['4 bunches of 3 cherries: {{4}} × 3 = {{12}}','6 cards of 3 stars: {{6}} × 3 = {{18}}'],1));
 M(S,T,'Missing Numbers',CH('C. Circle the missing number.',[['3 × ___ = 9',['2','3','4'],1],['___ × 3 = 27',['8','9','7'],1],['3 × ___ = 21',['7','6','8'],0],['___ × 3 = 15',['4','5','6'],1],['3 × ___ = 24',['7','9','8'],2],['___ × 3 = 6',['2','3','1'],0]]),
  WP('D. Find the missing number.',['Some bags have 3 oranges each. There are 12 oranges. There are {{4}} bags.','Each car has 3 children in the back. There are 18 children. There are {{6}} cars.']));
 M(S,T,'Threes Word Problems',WP('More problems.',['A shop has 3 fans on each shelf. There are 8 shelves. There are {{24}} fans.','Zara has 30 beads. She makes bracelets with 3 beads each. She makes {{10}} bracelets.','Bilal walks 3 rounds of the park each day. In 4 days he walks {{12}} rounds.']));
 M(S,T,'In the 3 Times Table?',SO('Sort the numbers.',['in the 3 times table','not in the 3 times table'],['6','10','12','16','18','22','24','28'],[0,1,0,1,0,1,0,1]));
 M(S,T,'Twos and Threes',WP('C. Twos or threes?',['Bicycles have 2 wheels. 5 bicycles have {{10}} wheels.','Rickshaws have 3 wheels. 5 rickshaws have {{15}} wheels.']),
  F('D. Count in twos and in threes.',['Twos: 2, 4, 6, {{8}}, {{10}}, {{12}}','Threes: 3, 6, 9, {{12}}, {{15}}, {{18}}','Which numbers are in both lists? {{6}} and {{12}}'],1));
 M(S,T,'Exit Ticket',CH('True or false?',[['4 × 3 = 12',0],['8 × 3 = 21',1],['27 is in the 3 times table.',0],['3 + 3 + 3 = 3 × 3',0]],TF),
  WP('',['There are 7 tricycles. Each has 3 wheels. There are {{21}} wheels.','24 children stand in rows of 3. There are {{8}} rows.']));
 M(S,T,'Threes Warm-up ★',F('E. Join the dots in order: 3, 6, 9 … Write the missing numbers.',['3, 6, {{9}}, 12, {{15}}','21, {{24}}, 27, {{30}}'],1));
 M(S,T,'Threes Challenge ★★★',CH('D. Is 31 in the 3 times table?',[['31',1]],YN),WR('Why?',['______________________________________']));
 M(S,T,'Topic Test: Times table of 3 (1)',DR('Working space: draw groups to help you.',120));
 M(S,T,'Topic Test: Times table of 3 (2)',DR('Working space',150));
 M(S,T,'Word Mat: Times table of 3',NO('<b>Patterns</b>: the 3 times table goes odd, even, odd, even: 3, 6, 9, 12, 15 … &nbsp; 10 × 3 = 30 is the same as 3 tens.'));

 T='Number names to 50';
 M(S,T,'The Tens',F('Write the tens in order.',['ten, {{twenty}}, thirty, {{forty}}, fifty','fifty, {{forty}}, thirty, {{twenty}}, ten'],1),
  CH('Circle the right number.',[['thirty',['13','30','33'],1],['fifty',['15','50','55'],1],['twenty',['12','20','22'],1],['forty',['14','40','44'],1]]),
  WP('',['Ali has two tens. He has {{twenty}} (write in words).','Sara has five tens. She has {{fifty}} (write in words).']));
 M(S,T,'Twenty-one to Twenty-nine',CH('Circle the right name.',[['25',['twenty-five','fifty-two'],0],['28',['twenty-eight','eighty-two'],0],['23',['thirty-two','twenty-three'],1],['21',['twenty-one','twelve'],0]]),
  WR('Write the numbers 21 to 25 in words.',['______________________________________','______________________________________']));
 M(S,T,'Thirty-one to Thirty-nine',F('Write the number.',['thirty-two = {{32}}','thirty-seven = {{37}}','thirty-nine = {{39}}','thirty-one = {{31}}'],2),
  WP('',['There are thirty-five chairs in the hall. Write the number: {{35}}','Dada is thirty-eight years younger than his father. Write 38 in words: {{thirty-eight}}']));
 M(S,T,'Forty-one to Fifty',F('Write the number.',['forty-three = {{43}}','forty-seven = {{47}}','forty-five = {{45}}','forty-nine = {{49}}'],2),
  WP('',['A bus has forty-four seats. Write the number: {{44}}','There are 46 mangoes in a crate. Write the number in words: {{forty-six}}']),
  NO('Remember: forty-one to forty-nine all start with forty, with no u.'));
 M(S,T,'Words to Numbers',CH('Circle the bigger number.',[['thirty-one or thirteen',['thirty-one','thirteen'],0],['forty-two or twenty-four',['forty-two','twenty-four'],0],['nineteen or ninety',['nineteen','ninety'],1],['fifty or fifteen',['fifty','fifteen'],0]]),
  F('Order these from smallest to biggest. Write the numbers.',['forty, fourteen, twenty-four → {{14}}, {{24}}, {{40}}','thirty-five, fifty-three, twenty-nine → {{29}}, {{35}}, {{53}}'],1));
 M(S,T,'Match the Names',MA('Match again.',['48','21','36','40'],['forty-eight','twenty-one','thirty-six','forty']),
  F('Write in words.',['39 = {{thirty-nine}}','45 = {{forty-five}}'],1));
 M(S,T,'Spot the Spelling',F('Write the right spelling.',['fourty → {{forty}}','fiveteen → {{fifteen}}','twelf → {{twelve}}','thirtean → {{thirteen}}'],2),
  WR('Write these tricky words three times each.',['forty: ____________  ____________  ____________','fifty: ____________  ____________  ____________']));
 M(S,T,'Tens and Ones in Words',CH('Circle the right tens and ones.',[['forty-three',['4 tens 3 ones','3 tens 4 ones'],0],['thirty-four',['4 tens 3 ones','3 tens 4 ones'],1],['twenty-nine',['2 tens 9 ones','9 tens 2 ones'],0],['fifty',['5 tens 0 ones','0 tens 5 ones'],0]]),
  F('Fill in the tens and ones.',['forty-six = {{4}} tens and {{6}} ones','twenty-one = {{2}} tens and {{1}} one','thirty-eight = {{3}} tens and {{8}} ones','fifty = {{5}} tens and {{0}} ones'],1));
 M(S,T,'Number Name Stories',WP('More stories.',['Sana counts forty-one birds. Then one more comes. Now there are {{42}} ({{forty-two}}) birds.','A box holds twenty-five eggs. Another box holds twenty-five eggs. Together they hold {{50}} ({{fifty}}) eggs.','There are thirty-six cars. Six drive away. {{30}} ({{thirty}}) cars are left.']));
 M(S,T,'Exit Ticket',CH('Circle the right spelling.',[['40',['fourty','forty'],1],['50',['fifty','fivety'],0],['15',['fifteen','fiveteen'],0]]),
  F('Write the number before and after in words.',['___ 30 ___ → {{twenty-nine}}, {{thirty-one}}','___ 45 ___ → {{forty-four}}, {{forty-six}}'],1));
 M(S,T,'Number Names Warm-up ★',F('C. Write the number.',['ten = {{10}}','fourteen = {{14}}','nineteen = {{19}}','seven = {{7}}'],2));
 M(S,T,'Number Names Challenge ★★★',F('D. Write the number names in order, smallest first.',['forty, fourteen, four → {{four, fourteen, forty}}','thirty-two, twenty-three, thirteen → {{thirteen, twenty-three, thirty-two}}'],1));
 M(S,T,'Topic Test: Number names to 50 (1)',WR('Practice space: write any three numbers from 21 to 50 in words.',['______________________________________','______________________________________','______________________________________']),DR('Working space',120));
 M(S,T,'Word Mat: Number names to 50',NO('<b>Counting in tens</b>: ten · twenty · thirty · forty · fifty. Read 30 + 7 as thirty-seven.'));

 T='Making 10 and fact families';
 M(S,T,'Make 10',CH('Do they make 10? Circle yes or no.',[['4 and 6',0],['3 and 8',1],['5 and 5',0],['2 and 7',1],['9 and 1',0],['6 and 3',1]],YN),
  WP('',['Ali has 7 marbles. How many more does he need to have 10? {{3}}','There are 10 seats. 4 are full. {{6}} seats are empty.']));
 M(S,T,'Dots to 10',{t:'picsum',h:'C. Add the dots.',items:[[2,8,'heart'],[6,4,'square']]},
  F('D. Find all the bonds to 10.',['0 + {{10}}','1 + {{9}}','2 + {{8}}','3 + {{7}}','4 + {{6}}','5 + {{5}}'],3),
  WP('',['A ten frame has 10 boxes. 8 have counters. {{2}} are empty.']));
 M(S,T,'Add by Making 10',WP('Solve by making 10.',['Hamza has 9 cards. He gets 5 more. He has {{14}} cards.','There are 8 girls and 7 boys. There are {{15}} children.','A hen lays 6 eggs on Monday and 7 on Tuesday. She lays {{13}} eggs.','Sara reads 9 pages and then 6 more. She reads {{15}} pages.']),
  NO('Make 10 first: which number needs only a little more to reach 10? Start with that one.'));
 M(S,T,'Make 10 to Add',CH('C. Circle the right answer.',[['9 + 5',['13','14','15'],1],['8 + 6',['14','13','12'],0],['7 + 8',['16','14','15'],2],['6 + 7',['13','12','14'],0],['9 + 9',['17','18','19'],1]]),
  WP('D. Word problems.',['There are 8 red balloons and 5 blue balloons. There are {{13}} balloons.','Zain scores 7 goals and Bilal scores 6. Together they score {{13}} goals.','Ammi buys 9 apples and 4 pears. She buys {{13}} fruits.']));
 M(S,T,'Take Away From 10',WP('Solve.',['There are 10 birds on a tree. 3 fly away. {{7}} birds are left.','Hira has 10 sweets. She eats 4. She has {{6}} left.','There are 20 children. 5 go home. {{15}} are left.','A box has 10 crayons. 8 are used up. {{2}} are left.']),
  CH('Circle the bond that helps.',[['10 − 6 = ?',['6 + 4 = 10','5 + 5 = 10'],0],['10 − 3 = ?',['3 + 7 = 10','2 + 8 = 10'],0]]));
 M(S,T,'Fact Families',F('Family: 5, 5, 10',['5 + 5 = {{10}}','10 − 5 = {{5}}'],2),
  WP('Use the family to solve.',['There are 10 children. 3 are boys. {{7}} are girls.','There are 7 girls and 3 boys. There are {{10}} children.']),
  WR('Draw a fact family house for 1, 9 and 10. Write the four facts.',['______________  ______________','______________  ______________']));
 M(S,T,'Bigger Fact Families',F('Family: 7, 4, 11',['7 + 4 = {{11}}','4 + 7 = {{11}}','11 − 7 = {{4}}','11 − 4 = {{7}}'],2),
  WP('Use a fact family.',['There are 14 cakes. 6 are chocolate. {{8}} are not chocolate.','8 + 6 = 14, so 14 − 8 = {{6}}.']));
 M(S,T,'Count On and Count Back',WP('Solve by counting on or back.',['Bilal is on step 12. He climbs 5 more. He is on step {{17}}.','The bus has 15 people. 4 get off. {{11}} people are on the bus.','Sara has 8 stickers. She gets 6 more. She has {{14}} stickers.','There are 19 fish. 7 swim away. {{12}} are left.']),
  F('Count back from 20 in ones.',['20, 19, {{18}}, {{17}}, 16, {{15}}, 14, {{13}}'],1));
 M(S,T,'Picture Problems',WP('Make your own: read and solve.',['A garden has 9 roses and 8 tulips. There are {{17}} flowers.','There are 16 cars in a car park. 9 drive away. {{7}} cars are left.']),
  DR('Draw a picture for: 6 + 5 = 11',170));
 M(S,T,'Exit Ticket',CH('True or false?',[['4 + 6 = 10',0],['9 + 4 = 14',1],['10 − 3 = 7',0],['13 − 5 = 8',0]],TF),
  WP('',['There are 9 boys and 6 girls. There are {{15}} children.','There are 12 pears. 7 are eaten. {{5}} are left.']),
  DR('Show how you made 10 for 8 + 5.',150));
 M(S,T,'Make 10 Warm-up ★',F('D. Count on.',['5, 6, 7, {{8}}, {{9}}, {{10}}','10, 11, 12, {{13}}, {{14}}'],1),
  CH('E. Circle the pair that makes 10.',[['',['3 and 7','3 and 6'],0],['',['8 and 1','8 and 2'],1],['',['5 and 5','5 and 4'],0]]),
  DR('Draw 10 dots: 6 red and 4 blue.',80));
 M(S,T,'Topic Test: Making 10 and fact families (1)',DR('Working space: draw dots or a number line.',130));
 M(S,T,'Word Mat: Making 10 and fact families',NO('<b>Doubles</b>: 5 + 5 = 10 · 6 + 6 = 12 · 7 + 7 = 14 · 8 + 8 = 16 · 9 + 9 = 18 · 10 + 10 = 20'),DR('Draw a ten frame and show 7 + 3.',140));

 S='g1-english';T='Names and initials';
 M(S,T,'Names Need Capitals',F('Write the name with a capital letter.',['noor → {{Noor}}','usman → {{Usman}}','fatima → {{Fatima}}','adam → {{Adam}}'],2),
  WP('',['My teacher is called miss hina. Write her name correctly: {{Miss Hina}}','My cousin is called taha ali. Write his name correctly: {{Taha Ali}}']));
 M(S,T,'Write the Name Correctly',CH('Circle the name written correctly.',[['',['Ayan Malik','ayan Malik','Ayan malik'],0],['',['rida javed','Rida Javed','Rida javed'],1],['',['Mr ahmed','mr Ahmed','Mr Ahmed'],2],['',['Dr Saima','dr saima','Dr saima'],0]]),
  F('Write these names correctly.',['mr hassan → {{Mr Hassan}}','dr sana → {{Dr Sana}}','uncle bilal → {{Uncle Bilal}}','aunty sara → {{Aunty Sara}}'],2));
 M(S,T,'What Is an Initial?',CH('Circle the right initials.',[['Hamza Iqbal',['H. I.','h. i.','H I'],0],['Maryam Butt',['M B','M. B.','m. b.'],1],['Ali Raza',['A. R.','A. r.','a. R.'],0]]),
  F('Whose initials? Write the name.',['S. K. → Sara {{Khan}}','A. R. → Ali {{Raza}}'],2));
 M(S,T,'Initials With a Name',F('Write the full initials.',['Ayan Malik → {{A. M.}}','Sana Tariq → {{S. T.}}','Omar Shah → {{O. S.}}','Rida Javed → {{R. J.}}'],2),
  WP('',['A letter is for Mr Imran Ali. On the envelope it says Mr I. {{Ali}}.']));
 M(S,T,'Who Is It?',CH('Circle the name that matches the initials.',[['Z. A.',['Zain Ahmed','Ali Zain'],0],['M. K.',['Kamran Malik','Mariam Khan'],1],['H. S.',['Hassan Shah','Sana Hassan'],0]]));
 M(S,T,'Names of Places',F('Write the names of these places with capitals.',['the river indus → the River {{Indus}}','the city of peshawar → the city of {{Peshawar}}'],1),
  WR('Write the name of your city and your country.',['My city: ______________________','My country: ______________________']));
 M(S,T,'Days, Months and Pets',F('Write these correctly.',['tuesday → {{Tuesday}}','march → {{March}}','my parrot mithu → my parrot {{Mithu}}','december → {{December}}'],2),
  WR('Write the name of a pet you would like and the day you would buy it.',['My pet: ______________________ Day: ______________']));
 M(S,T,'Fix the Sentence',CH('Circle the sentence with the right capitals.',[['',['we visited karachi in june.','We visited Karachi in June.'],1],['',['My dog is called Rocky.','my dog is called rocky.'],0],['',['ali and i play on sunday.','Ali and I play on Sunday.'],1]]),
  F('Fix these too.',['zara lives in quetta. → {{Zara lives in Quetta.}}','my birthday is in may. → {{My birthday is in May.}}'],1));
 M(S,T,'Statement or Question?',WR('Turn each statement into a question.',['Ali is your brother. → Is ______________________?','It is raining. → Is ______________________?']));
 M(S,T,'All About Me',DR('Draw yourself and write your initials on your T-shirt.',190));
 M(S,T,'Names Warm-up ★',WR('D. Copy the names neatly.',['Ali   Sara   Lahore','Monday   Pakistan']));
 M(S,T,'Names Challenge ★★★',CH('D. Statement or question?',[['Is Lahore a big city',1],['Murree is cold in winter',0],['Who lives in Quetta',1]],['statement','question']));
 M(S,T,'Topic Test: Names and initials (1)',WR('Practice space: write your full name and your initials.',['______________________________________']));
 M(S,T,'Topic Test: Names and initials (2)',F('Practice (no marks): add . or ?',['Where is Hamza{{?}}','Hamza is at home{{.}}'],1),DR('Write a name label for your school bag, with your initials.',150));
 M(S,T,'Word Mat: Names and initials',NO('<b>Months</b>: January · February · March · April · May · June · July · August · September · October · November · December'));

 T='Ending sound t';
 M(S,T,'Listen for t',CH('Does it end in t? Circle yes or no.',[['bat',0],['bed',1],['nut',0],['pen',1],['kit',0],['jam',1]],YN),
  WR('Say and write two words that end in t.',['__________   __________']));
 M(S,T,'Ends With t',CH('Circle the t word.',[['',['cat','cap','can'],0],['',['pen','pet','peg'],1],['',['hut','hug','hum'],0],['',['dog','dot','don'],1]]),
  WR('Write a sentence with the word hat.',['______________________________________']));
 M(S,T,'The -at Family',CH('Circle the -at word.',[['',['rat','rag'],0],['',['map','mat'],1],['',['fat','fan'],0],['',['pan','pat'],1]]),
  WR('Write two -at words of your own.',['__________   __________']));
 M(S,T,'-et, -it, -ot, -ut',F('Fill in the word.',['The rain made me {{wet}}.','The soup is very {{hot}}.','Ammi will {{cut}} the cake.','Please {{sit}} down.'],1),
  BK(['wet','hot','cut','sit']));
 M(S,T,'t or d?',F('Write t or d.',['ca_ (a pet that says meow) → {{t}}','be_ (you sleep in it) → {{d}}','ho_ (like the sun) → {{t}}','re_ (a colour) → {{d}}'],1));
 M(S,T,'t, d, m or n?',F('Write the last letter.',['pe_ (you write with it) → {{n}}','ha_ (you wear it) → {{t}}','dru_ (you bang it) → {{m}}','be_ (you sleep in it) → {{d}}'],1),
  NO('Look and listen: t is a puff, d buzzes, m closes your lips, n hums in your nose.'));
 M(S,T,'Picture Words',WR('Choose two picture words. Write a sentence for each.',['______________________________________','______________________________________']));
 M(S,T,'Sort the Endings',CH('Circle the word that ends in t.',[['',['mud','mat','man'],1],['',['pot','pod','pom'],0],['',['ten','ted','tet'],2]]));
 M(S,T,'The Hot Hut',CH('True or false?',[['Pat is a dog.',1],['The hut was hot.',0],['Pat put her feet in a pot.',0]],TF));
 M(S,T,'Write Your Own',CH('Circle the word that rhymes.',[['cat',['hat','cap'],0],['pot',['pop','dot'],1],['net',['wet','web'],0]]));
 M(S,T,'Ending t Warm-up ★',F('C. Copy the t words.',['cat → {{cat}}','hot → {{hot}}','sit → {{sit}}'],3),WR('D. Write one t word.',['__________']));
 M(S,T,'Topic Test: Ending sound t (1)',WR('Practice space: write three t words.',['__________   __________   __________']));
 M(S,T,'Topic Test: Ending sound t (2)',DR('Draw a t word and write it.',150));
 M(S,T,'Word Mat: Ending sound t',NO('<b>t or d?</b> cat / cad · bet / bed · hit / hid · not / nod'));

 S='g1-urdu';T='دو چشمی ھ اور بھاری الفاظ';
 M(S,T,'دو چشمی ھ',CH('صحیح جوڑ پر دائرہ لگائیں۔',[['ب + ھ',['بھ','بہ'],0],['ک + ھ',['کہ','کھ'],1],['گ + ھ',['گھ','گہ'],0],['چ + ھ',['چہ','چھ'],1]]));
 M(S,T,'ھ اور ا',CH('صحیح لفظ پر دائرہ لگائیں۔',[['',['بھالو','بالو'],0],['',['جاڑو','جھاڑو'],1],['',['چھاتا','چاتا'],0]]),
  WR('بھا، تھا، جھا، چھا والا ایک ایک لفظ لکھیں۔',['____________________________________']));
 M(S,T,'ھ اور و',CH('صحیح لفظ پر دائرہ لگائیں۔',[['',['پول','پھول'],1],['',['جھولا','جولا'],0],['',['چھوٹا','چوٹا'],0]]),
  WR('پھول اور جھولا خوش خط لکھیں۔',['____________________________________']));
 M(S,T,'ھ اور ی',CH('صحیح لفظ پر دائرہ لگائیں۔',[['',['ہاتی','ہاتھی'],1],['',['گوبھی','گوبی'],0],['',['ساتھی','ساتی'],0]]),
  WR('ہاتھی اور گوبھی خوش خط لکھیں۔',['____________________________________']));
 M(S,T,'ھ اور ے',WR('مجھے اور اچھے خوش خط لکھیں۔',['____________________________________']));
 M(S,T,'توڑ اور جوڑ',WR('اپنی پسند کا ایک بھاری لفظ لکھیں اور اسے توڑ کر لکھیں۔',['____________ = ____________________']));
 M(S,T,'تصویر دیکھ کر نام لکھیں',CH('صحیح مطلب چنیں۔',[['ہاتھی',['بڑا جانور، لمبی سونڈ','چھوٹا پرندہ'],0],['ڈھول',['بجانے کی چیز','کھانے کی چیز'],0]]));
 M(S,T,'کتنے ہیں؟',F('گنتی مکمل کریں۔',['ایک، دو، {{تین}}، چار، {{پانچ}}','پانچ، {{چار}}، تین، {{دو}}، ایک'],1,1));
 M(S,T,'آسان مشق ★',WR('د۔ بھ اور گھ خوش خط لکھیں۔',['____________________________________']));
 M(S,T,'مشکل مشق ★★★',WR('د۔ دو بھاری لفظوں سے ایک جملہ بنائیں۔',['____________________________________']));
 M(S,T,'امتحان: دو چشمی ھ (۱)',WR('مشق کی جگہ: کوئی تین بھاری لفظ لکھیں۔',['____________   ____________   ____________']));
 M(S,T,'الفاظ کی تختی',NO('<b>یاد رکھیں</b>: بھاری آواز کے لیے دو چشمی ھ لکھیں (ہاتھی)، ہ نہیں (ہاتہی)۔'));
});
DEPTH.push(()=>{
 const M=(sid,T,title,...b)=>{const p=PAGES[sid].find(x=>x.topic===T&&x.title===title);if(p)p.blocks.push(...b);else console.warn('depth: no page',sid,T,title)};
 let S='g1-english',T='Names and initials';
 M(S,T,'What Is an Initial?',CH('Is the initial written correctly?',[['S. K.',0],['a. r.',1],['H M',1],['N. F.',0]],['right','wrong']));
 M(S,T,'Initials With a Name',CH('Circle the right way to write it.',[['Sara Khan',['S. Khan','s. Khan','S Khan'],0],['Bilal Shah',['B. shah','B. Shah','b. Shah'],1],['Noor Ali',['N. Ali','N Ali','n. ali'],0]]),
  WR('Write your name with your first initial, like A. Raza.',['______________________']));
 M(S,T,'Names of Places',CH('Place or not a place?',[['Lahore',0],['table',1],['Pakistan',0],['pencil',1]],['place','not a place']));
 M(S,T,'Days, Months and Pets',CH('Circle the day.',[['',['Monday','monkey','money'],0],['',['frog','Friday','fruit'],1]]));
 M(S,T,'Statement or Question?',F('Add . or ?',['Can you see the moon{{?}}','The moon is round{{.}}'],1));
 M(S,T,'All About Me',CH('Circle the words that need capitals in a form.',[['',['my name','Lahore','school bag'],1],['',['Monday','pencil','lunch'],0]]));
 M(S,T,'Names Warm-up ★',F('E. Write the first letter as a capital.',['pakistan → {{P}}akistan','friday → {{F}}riday'],2));
 M(S,T,'Topic Test: Names and initials (1)',DR('Working space',90));
 T='Ending sound t';
 M(S,T,'-et, -it, -ot, -ut',WR('Write one word for each: -et, -it, -ot, -ut.',['______  ______  ______  ______']));
 M(S,T,'Picture Words',CH('Circle the right spelling.',[['',['carot','carrot'],1],['',['rabbit','rabit'],0],['',['basket','baskit'],0]]));
 M(S,T,'The Hot Hut',DR('Draw Pat the cat in her hut.',120));
 M(S,T,'Write Your Own',F('Finish the rhyme with a t word.',['The cat sat on the {{mat}}.','The pot is very {{hot}}.'],1));
 M(S,T,'Word Mat: Ending sound t',NO('<b>Rhymes</b>: cat, hat, mat · pot, hot, dot · net, wet, pet · nut, hut, cut'),DR('Write a silly sentence with three t words.',110));
 S='maths';T='Number names to 50';
 M(S,T,'Exit Ticket',WP('',['There are forty children and two teachers on a trip. There are {{42}} people.']),DR('Write a number from 30 to 50 in words and draw it as tens and ones.',120));
 M(S,T,'Number Names Warm-up ★',WR('D. Copy: twenty, thirty, forty, fifty.',['______________________________________']));
 M(S,T,'Topic Test: Number names to 50 (2)',DR('Working space',100));
 T='Making 10 and fact families';
 M(S,T,'Topic Test: Making 10 and fact families (1)',NO('Tip: for 8 + 4, think 8 + 2 = 10, then 10 + 2 = 12.'));
 M(S,T,'Topic Test: Making 10 and fact families (2)',DR('Working space',80));
 S='g1-urdu';T='دو چشمی ھ اور بھاری الفاظ';
 M(S,T,'توڑ اور جوڑ',CH('صحیح جوڑ پر دائرہ لگائیں۔',[['پ + ھ + و',['پھو','پو'],0],['ج + ھ + ی',['جی','جھی'],1],['ت + ھ + ا',['تھا','تا'],0]]));
 M(S,T,'گنتی ایک تا پانچ',CH('صحیح گنتی پر دائرہ لگائیں۔',[['۳',['تین','چار'],0],['۵',['دو','پانچ'],1]]));
 M(S,T,'کتنے ہیں؟',CH('کون سا زیادہ ہے؟',[['',['تین','پانچ'],1],['',['چار','دو'],0]]));
});

/* P3: Grade 1 Term 2 Practice Papers, matched to the LGS December syllabus (references/lgs-grade1-december-2026.md).
   10 pages each (P3, then P3b), marks on every question, score and star bands on page 1. Original questions only. */
DEPTH.push(({addPaper})=>{
 const SC=n=>NO(`Score: ______ / ${n}<br>★ 0 to ${Math.floor(n/2)-1} keep practising &nbsp; ★★ ${Math.floor(n/2)} to ${Math.round(n*0.78)-1} good work &nbsp; ★★★ ${Math.round(n*0.78)} to ${n} super!`);
 const UD=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
 const SCU=n=>NO(`نمبر: ______ / ${UD(n)}<br>★ ۰ سے ${UD(Math.floor(n/2)-1)}: اور مشق کریں &nbsp; ★★ ${UD(Math.floor(n/2))} سے ${UD(Math.round(n*0.78)-1)}: اچھا کام &nbsp; ★★★ ${UD(Math.round(n*0.78))} سے ${UD(n)}: شاباش!`);
 const HOW=['How did I do? Write one thing you can do now.',['I can ______________________________.']];
 const ASK='Answer every question. A grown-up can read the questions aloud. Mark it out of ';
 /* P3b: pages 5 to 10 of each Grade 1 paper (10 pages in all, Sumbul 26 Nov 2026) */
 const EXTRA={};
 EXTRA['maths']=[
  pg('Maths Practice Paper (5)','Numbers to 20. Count on, count back and compare.','Practise counting, comparing and ordering to 20.',
   BX('22. Count on and count back. Fill in the missing numbers. (6 marks)',['8|9|{{10}}|11|{{12}}|13','19|{{18}}|17|16|{{15}}|14','{{11}}|12|13|{{14}}|15|16']),
   F('23. One more and one less. (6 marks)',['One more than 13 is {{14}}.','One less than 13 is {{12}}.','One more than 19 is {{20}}.','One less than 10 is {{9}}.','One more than 16 is {{17}}.','One less than 18 is {{17}}.'],3),
   CH('24. Circle the bigger number. (4 marks)',[['12 or 21',['12','21'],1],['17 or 7',['17','7'],0],['14 or 16',['14','16'],1],['20 or 19',['20','19'],0]]),
   F('25. Order from smallest to biggest. (2 marks)',['13, 8, 20, 11 → {{8, 11, 13, 20}}','17, 14, 19, 10 → {{10, 14, 17, 19}}'],2),
   CH('26. True or false? Circle. (2 marks)',[['17 > 13',0],['9 > 12',1]],TF)),
  pg('Maths Practice Paper (6)','Add and take away within 20. Show your thinking.','Practise adding and taking away within 20.',
   CN(['red-apple','red-apple','red-apple'],'A fact family uses three numbers to make four facts: 5 + 9 = 14, 9 + 5 = 14, 14 - 5 = 9 and 14 - 9 = 5.','Fact families'),
   F('27. Add by counting on. (4 marks)',['14 + 2 = {{16}}','11 + 5 = {{16}}','16 + 3 = {{19}}','12 + 7 = {{19}}'],4),
   F('28. Add by making 10. (4 marks)',['8 + 3 = {{11}}','9 + 6 = {{15}}','7 + 6 = {{13}}','8 + 8 = {{16}}'],4),
   F('29. Take away by counting back. (4 marks)',['18 - 4 = {{14}}','16 - 5 = {{11}}','13 - 2 = {{11}}','20 - 3 = {{17}}'],4),
   F('30. Take away from 10. (4 marks)',['10 - 2 = {{8}}','10 - 5 = {{5}}','10 - 8 = {{2}}','10 - 10 = {{0}}'],4),
   F('31. Complete the fact family for 5, 9 and 14. (4 marks)',['5 + 9 = {{14}}','9 + 5 = {{14}}','14 - 5 = {{9}}','14 - 9 = {{5}}'],4),
   WP('32. Picture problems. (4 marks)',['There are 7 red cars and 6 blue cars. There are {{13}} cars.','There are 15 eggs. 6 break. {{9}} eggs are left.','A tree has 8 apples. 5 more grow. Now it has {{13}} apples.','There are 12 kites in the sky. 4 come down. {{8}} kites are still up.'])),
  pg('Maths Practice Paper (7)','Numbers to 100. Think about tens and ones.','Practise tens and ones, counting in tens and number patterns.',
   F('33. Tens and ones. (4 marks)',['3 tens and 8 ones = {{38}}','9 tens and 1 one = {{91}}','57 = {{5}} tens and 7 ones','60 = 6 tens and {{0}} ones'],2),
   BX('34. Count in ones and tens. (6 marks)',['52|53|{{54}}|55|{{56}}|57','17|27|{{37}}|47|{{57}}','90|80|{{70}}|60|{{50}}']),
   F('35. Continue the pattern. (6 marks)',['10, 20, 30, {{40}}, {{50}}','3, 6, 9, {{12}}, {{15}}','20, 18, 16, {{14}}, {{12}}'],1),
   CH('36. Circle the bigger number. (4 marks)',[['58 or 85',['58','85'],1],['70 or 69',['70','69'],0],['43 or 34',['43','34'],0],['99 or 100',['99','100'],1]]),
   F('37. Order from biggest to smallest. (2 marks)',['36, 63, 30, 60 → {{63, 60, 36, 30}}','81, 18, 88, 11 → {{88, 81, 18, 11}}'],1)),
  pg('Maths Practice Paper (8)','Number names to 50. Spell each word carefully.','Practise reading and writing number names to 50.',
   MA('38. Match the number to its name. Write the letter in the box. (5 marks)',['12','23','37','40','50'],['twelve','twenty-three','thirty-seven','forty','fifty']),
   F('39. Write the number in words. (4 marks)',['11 = {{eleven}}','20 = {{twenty}}','33 = {{thirty-three}}','48 = {{forty-eight}}'],2),
   F('40. Write the number. (4 marks)',['fourteen = {{14}}','twenty-nine = {{29}}','thirty = {{30}}','forty-five = {{45}}'],2),
   CH('41. Circle the right spelling. (4 marks)',[['13',['thirteen','thirtyteen'],0],['40',['fourty','forty'],1],['15',['fiveteen','fifteen'],1],['21',['twenty-one','twoty-one'],0]]),
   F('42. Write the next number in words. (3 marks)',['nineteen, {{twenty}}','thirty-nine, {{forty}}','forty-nine, {{fifty}}'],3)),
  pg('Maths Practice Paper (9)','Times tables of 2 and 3. Times means groups of.','Practise the 2 and 3 times tables.',
   CN(['hand-with-fingers-splayed','bicycle'],'4 × 2 means 4 groups of 2. Count in twos: 2, 4, 6, 8. So 4 × 2 = 8.','Groups of'),
   F('43. Times table of 2. (6 marks)',['2 × 2 = {{4}}','7 × 2 = {{14}}','10 × 2 = {{20}}','1 × 2 = {{2}}','6 × 2 = {{12}}','8 × 2 = {{16}}'],3),
   F('44. Times table of 3. (6 marks)',['3 × 3 = {{9}}','5 × 3 = {{15}}','2 × 3 = {{6}}','7 × 3 = {{21}}','9 × 3 = {{27}}','8 × 3 = {{24}}'],3),
   BX('45. Count in twos and threes. (4 marks)',['2|4|{{6}}|8|{{10}}|12','15|18|{{21}}|24|{{27}}']),
   WP('46. Word problems. (4 marks)',['A tricycle has 3 wheels. 4 tricycles have {{12}} wheels.','6 children each have 2 shoes. There are {{12}} shoes.','There are 5 packets with 3 biscuits in each. There are {{15}} biscuits.','10 pairs of socks make {{20}} socks.'])),
  pg('Maths Practice Paper (10)','Think carefully. Add up your marks from all ten pages.','Think about numbers to 100, adding, taking away and times tables.',
   CH('47. True or false? Circle. (4 marks)',[['15 comes just after 14.',0],['9 + 6 = 16',1],['3 × 3 = 9',0],['72 has 2 tens and 7 ones.',1]],TF),
   WP('48. Think and solve. (4 marks)',['I am 1 less than 50. What am I? {{49}}','I have 6 tens and 4 ones. What am I? {{64}}','Zain has 14 marbles. Omar has 9. Zain has {{5}} more marbles.','Sana says 8 + 7 = 14. She is wrong. The right answer is {{15}}.']),
   CH('49. Spot the mistake. Circle the wrong one. (2 marks)',[['',['2 × 5 = 10','3 × 5 = 18'],1],['',['36 = 3 tens and 6 ones','63 = 3 tens and 6 ones'],1]]),
   WR(...HOW))];

 EXTRA['g1-english']=[
  pg('English Practice Paper (5)','Read the story two times, then answer.','Practise reading a new story and answering questions.',
   PA('The Red Kite\nBilal has a red kite with a long tail. On Sunday, he goes to the park with his grandfather. The wind is strong. Bilal runs and the kite goes up, up, up!\nSuddenly the kite gets stuck in a tree. Grandfather takes a long stick and gently pulls it down. "Thank you, Dada!" says Bilal. They fly the kite again until the sun goes down.'),
   CH('15. Circle the right answer. (4 marks)',[['What colour is the kite?',['green','red'],1],['Who goes to the park with Bilal?',['his grandfather','his sister'],0],['Where does the kite get stuck?',['on a roof','in a tree'],1],['What does Grandfather use?',['a long stick','a ladder'],0]]),
   CH('16. True or false? Circle. (3 marks)',[['The wind is strong.',0],['Bilal goes to the park on Monday.',1],['They go home before they fly the kite again.',1]],TF),
   F('17. Fill in a word from the story. (3 marks)',['The kite has a long {{tail}}.','Bilal calls his grandfather {{Dada}}.','They fly the kite until the {{sun}} goes down.'],1)),
  pg('English Practice Paper (6)','Does it tell or does it ask?','Practise statements and questions.',
   CH('18. Statement or question? Circle. (4 marks)',[['The cat is on the mat',0],['Is it raining',1],['How old are you',1],['We have a red car',0]],['statement','question']),
   F('19. Add a full stop (.) or a question mark (?). (8 marks)',['Where do you live{{?}}','I have two sisters{{.}}','Can I go out to play{{?}}','The milk is cold{{.}}','Who is your teacher{{?}}','Birds can fly{{.}}','What is in the box{{?}}','My shoes are new{{.}}'],2),
   F('20. Turn the statement into a question. (3 marks)',['The bag is heavy. → {{Is the bag heavy?}}','You can swim. → {{Can you swim?}}','She is happy. → {{Is she happy?}}'],1),
   WR('21. Write one question you would like to ask your friend. (2 marks)',['______________________________________________________'])),
  pg('English Practice Paper (7)','Capital letters for the start of a sentence, for I, and for names.','Practise capital letters, names and initials.',
   CN(['input-latin-letters','writing-hand'],'Use a capital letter at the start of a sentence, for the word I, and for names of people, places, days and months. Initials are the first letters of a name, like A. K.','Capital letters'),
   CH('22. Circle the word that should start with a capital letter. (4 marks)',[['',['lahore','city'],0],['',['day','sunday'],1],['',['ahmed','boy'],0],['',['country','china'],1]]),
   F('23. Write the initials. (4 marks)',['Zainab Hussain → {{Z. H.}}','Faris Ahmed → {{F. A.}}','Mariam Iqbal → {{M. I.}}','Rayan Sheikh → {{R. S.}}'],2),
   F('24. Write each sentence again with capital letters. (4 marks)',['i live in lahore. → {{I live in Lahore.}}','my friend is bilal. → {{My friend is Bilal.}}','we play on saturday. → {{We play on Saturday.}}','december is cold. → {{December is cold.}}'],1),
   WR('25. Write your full name and your initials. (2 marks)',['My name: ______________________   My initials: ________'])),
  pg('English Practice Paper (8)','A verb is a doing word.','Practise finding and using verbs.',
   CH('26. Circle the verb. (4 marks)',[['The baby cries.',['baby','cries'],1],['Hamza drinks water.',['drinks','water'],0],['We sing a song.',['sing','song'],0],['The horse gallops fast.',['horse','gallops'],1]]),
   BK(['jumps','cooks','writes','drinks','sleeps','climbs']),
   FP('27. Look at the picture. Fill in the verb. (6 marks)',[['frog','A frog {{jumps}}.'],['cooking','Ammi {{cooks}} rice.'],['writing-hand','Ali {{writes}} a letter.'],['glass-of-milk','The baby {{drinks}} milk.'],['sleeping-face','The boy {{sleeps}} at night.'],['cat','The cat {{climbs}} the tree.']],3),
   CH('28. Verb or not a verb? Circle. (2 marks)',[['hop',0],['table',1]],['verb','not a verb']),
   WR('29. Write a sentence with the verb "run". (2 marks)',['______________________________________________________'])),
  pg('English Practice Paper (9)','Say the word slowly. Listen for the last sound.','Practise ending sounds m, d, n and t.',
   BK(['m','d','n','t']),
   FP('30. Write the last sound. (8 marks)',[['ant','an{{t}}'],['carrot','carro{{t}}'],['full-moon','moo{{n}}'],['chicken','chicke{{n}}'],['broom','broo{{m}}'],['worm','wor{{m}}'],['bird','bir{{d}}'],['cloud','clou{{d}}']],4),
   CH('31. Circle the word with the right ending. (4 marks)',[['ends in t',['cap','cat','can'],1],['ends in m',['jam','jar','jab'],0],['ends in d',['bus','bug','bud'],2],['ends in n',['pig','pin','pit'],1]]),
   F('32. Write the last sound: m, d, n or t. (8 marks)',['mud → {{d}}','hum → {{m}}','net → {{t}}','fan → {{n}}','hot → {{t}}','arm → {{m}}','kid → {{d}}','tin → {{n}}'],4)),
  pg('English Practice Paper (10)','Think carefully. Add up your marks from all ten pages.','Practise creative writing and check what you know.',
   CN(['dog','soccer-ball','deciduous-tree'],'Look at the pictures. A boy and his dog play with a ball under a big tree.','Picture prompt'),
   WR('33. Write three sentences about the picture prompt. Use capital letters and full stops. (6 marks)',['______________________________________________________','______________________________________________________','______________________________________________________']),
   CH('34. True or false? Circle. (3 marks)',[['A question ends with a question mark.',0],['Names start with a small letter.',1],['The word "pen" ends with the sound t.',1]],TF),
   CH('35. Spot the mistake. Circle the wrong one. (2 marks)',[['',['Where is my hat?','where is my hat?'],1],['',['I like mangoes.','i like mangoes.'],1]]),
   WR(...HOW))];

 EXTRA['g1-urdu']=[
  pg('امتحانی پرچہ (۵)|Practice paper 5','توڑ جوڑ کی اور مشق کریں۔','Practise breaking and joining more heavy sounds.',
   F('۱۱۔ توڑ کر لکھیں۔ (۶ نمبر)',['تھا = {{ت + ھ + ا}}','ٹھی = {{ٹ + ھ + ی}}','پھو = {{پ + ھ + و}}','بھے = {{ب + ھ + ے}}','جھی = {{ج + ھ + ی}}','چھا = {{چ + ھ + ا}}'],2,1),
   F('۱۲۔ جوڑ کر لکھیں۔ (۶ نمبر)',['ب + ھ + ی = {{بھی}}','ت + ھ + ے = {{تھے}}','ٹ + ھ + ے = {{ٹھے}}','چ + ھ + ی = {{چھی}}','ج + ھ + و = {{جھو}}','پ + ھ + ا = {{پھا}}'],2,1),
   CH('۱۳۔ صحیح یا غلط؟ دائرہ لگائیں۔ (۴ نمبر)',[['ب + ھ + ا = بھا',0],['ت + ھ + و = تھی',1],['چ + ھ + ے = چھے',0],['ج + ھ + ا = جھو',1]],['صحیح','غلط'])),
  pg('امتحانی پرچہ (۶)|Practice paper 6','ھ والی آواز کے بعد ا، و، ی یا ے لگائیں۔','Practise joining ھ sounds with ا و ی ے.',
   CN(['open-book','writing-hand'],'دو چشمی ھ والی آواز کے بعد ا، و، ی یا ے لگا کر نئی آواز بنتی ہے: بھ + ا = بھا ، بھ + و = بھو ، بھ + ی = بھی ، بھ + ے = بھے','ھ کے ساتھ ا، و، ی، ے'),
   F('۱۴۔ جوڑ کر لکھیں۔ (۸ نمبر)',['پھ + ا = {{پھا}}','پھ + و = {{پھو}}','پھ + ی = {{پھی}}','پھ + ے = {{پھے}}','ٹھ + ا = {{ٹھا}}','ٹھ + و = {{ٹھو}}','ٹھ + ی = {{ٹھی}}','ٹھ + ے = {{ٹھے}}'],2,1),
   MA('۱۵۔ ملائیں۔ خانے میں حرف لکھیں۔ (۴ نمبر)',['تھ + و','پھ + ی','چھ + ا','بھ + ے'],['تھو','پھی','چھا','بھے'])),
  pg('امتحانی پرچہ (۷)|Practice paper 7','تصویر دیکھیں اور بھاری لفظ لکھیں۔','Practise writing more heavy words from pictures.',
   BK(['گھر','دودھ','مچھلی','بھیڑ','چھتری','ہتھوڑا']),
   FP('۱۶۔ تصویر دیکھ کر بھاری لفظ لکھیں۔ (۶ نمبر)',[['house','{{گھر}}'],['glass-of-milk','{{دودھ}}'],['fish','{{مچھلی}}'],['ewe','{{بھیڑ}}'],['umbrella-with-rain-drops','{{چھتری}}'],['hammer','{{ہتھوڑا}}']],3),
   CH('۱۷۔ بھاری لفظ پر دائرہ لگائیں۔ (۴ نمبر)',[['',['کھیل','کیل'],0],['',['باغ','بھاگ'],1],['',['پھل','پل'],0],['',['سات','ساتھ'],1]]),
   F('۱۸۔ اوپر کے لفظوں سے جملہ پورا کریں۔ (۳ نمبر)',['ہم {{گھر}} میں رہتے ہیں۔','بلی {{دودھ}} پیتی ہے۔','{{مچھلی}} پانی میں تیرتی ہے۔'],2,1)),
  pg('امتحانی پرچہ (۸)|Practice paper 8','تصویر دیکھیں اور اس کا نام لکھیں۔','Practise naming pictures with heavy words.',
   BK(['ہاتھی','ڈھول','بھالو','ہاتھ','جھاگ']),
   FP('۱۹۔ تصویر دیکھ کر نام لکھیں۔ (۵ نمبر)',[['elephant','{{ہاتھی}}'],['drum','{{ڈھول}}'],['bear','{{بھالو}}'],['raised-hand','{{ہاتھ}}'],['bubbles','{{جھاگ}}']],3),
   F('۲۰۔ اوپر کے لفظوں سے جملہ پورا کریں۔ (۴ نمبر)',['چڑیا گھر میں بڑا {{ہاتھی}} ہے۔','شادی میں {{ڈھول}} بجتا ہے۔','{{بھالو}} کو شہد پسند ہے۔','صابن سے {{جھاگ}} بنتا ہے۔'],1,1),
   WR('۲۱۔ دو بھاری لفظ لکھیں جو آپ کے گھر میں ہیں۔ (۲ نمبر)',['۱۔ ______________   ۲۔ ______________'])),
  pg('امتحانی پرچہ (۹)|Practice paper 9','گنتی ایک سے پانچ تک۔','Practise counting from one to five in Urdu.',
   F('۲۲۔ گن کر لفظوں میں لکھیں۔ (۵ نمبر)',['ہاتھ کی انگلیاں = {{پانچ}}','گائے کی ٹانگیں = {{چار}}','تکون کے کونے = {{تین}}','میری آنکھیں = {{دو}}','میری ناک = {{ایک}}'],2,1),
   MA('۲۳۔ ملائیں۔ خانے میں حرف لکھیں۔ (۵ نمبر)',['۱','۲','۳','۴','۵'],['ایک','دو','تین','چار','پانچ']),
   CH('۲۴۔ کون سا زیادہ ہے؟ دائرہ لگائیں۔ (۴ نمبر)',[['',['دو','چار'],1],['',['پانچ','تین'],0],['',['ایک','تین'],1],['',['چار','پانچ'],1]])),
  pg('امتحانی پرچہ (۱۰)|Practice paper 10','سوچ کر جواب دیں۔ دسوں صفحوں کے نمبر جمع کریں۔','Think carefully and check what you know.',
   CH('۲۵۔ صحیح یا غلط؟ دائرہ لگائیں۔ (۳ نمبر)',[['ہاتھی بھاری لفظ ہے۔',0],['ب + ھ + ا = بھی',1],['کتاب میں دو چشمی ھ ہے۔',1]],['صحیح','غلط']),
   CH('۲۶۔ غلطی ڈھونڈیں۔ غلط پر دائرہ لگائیں۔ (۳ نمبر)',[['',['چ + ھ + و = چھو','چ + ھ + و = چھا'],1],['',['ایک، دو، تین','ایک، تین، دو'],1],['',['گھوڑا','گوڑا'],1]]),
   WR('۲۷۔ ایک بھاری لفظ سے جملہ بنائیں۔ (۲ نمبر)',['____________________________________']),
   WR('میں نے کیسا کیا؟ ایک بات لکھیں جو اب مجھے آتی ہے۔',['مجھے ______________ آتا ہے۔']))];

 EXTRA['science']=[
  pg('Science Practice Paper (5)','Living things grow, need food and water, and make young ones.','Practise living and non-living things.',
   CN(['seedling','dog','rock'],'Living things grow, breathe, need food and water, and make young ones.','Living or non-living?'),
   CP('13. Living or non-living? Circle. (6 marks)',[['deciduous-tree','a tree',0],['teddy-bear','a teddy bear',1],['horse','a horse',0],['soccer-ball','a ball',1],['mushroom','a mushroom',0],['scissors','scissors',1]],['living','non-living']),
   CH('14. Circle the right answer. (3 marks)',[['Living things need ...',['food and water','batteries'],0],['Which one is non-living?',['a bird','a spoon'],1],['Living things ...',['never change','grow'],1]]),
   CH('15. True or false? Circle. (2 marks)',[['A car moves, so it is living.',1],['A seed is a living thing.',0]],TF)),
  pg('Science Practice Paper (6)','Animals are put into groups.','Practise animal groups.',
   BK(['mammal','bird','fish','reptile','amphibian','insect']),
   FP('16. Write the group. (6 marks)',[['dog','dog: {{mammal}}'],['penguin','penguin: {{bird}}'],['fish','fish: {{fish}}'],['turtle','turtle: {{reptile}}'],['frog','frog: {{amphibian}}'],['butterfly','butterfly: {{insect}}']],3),
   CH('17. Circle the right answer. (4 marks)',[['Birds have ...',['fur','feathers'],1],['Fish breathe with ...',['gills','lungs'],0],['Insects have ... legs.',['four','six'],1],['Mammal babies drink their mother\'s ...',['milk','juice'],0]]),
   F('18. Circle the odd one out. Write it. (3 marks)',['cat, cow, eagle, goat → {{eagle}}','snake, lizard, crocodile, frog → {{frog}}','ant, bee, sparrow, butterfly → {{sparrow}}'],1)),
  pg('Science Practice Paper (7)','Each part of a plant has a job.','Practise the parts of a plant and their jobs.',
   MA('19. Match the part to its job. Write the letter in the box. (5 marks)',['roots','stem','leaves','flower','fruit'],['take in water from the soil','holds the plant up','make food using sunlight','makes seeds','keeps the seeds safe']),
   CP('20. Which part do we eat? Circle. (4 marks)',[['roasted-sweet-potato','sweet potato',0],['leafy-green','lettuce',1],['grapes','grapes',2],['peanuts','peanuts',3]],['root','leaf','fruit','seed']),
   F('21. Fill in. (3 marks)',['Plants make food in their {{leaves}}.','The {{roots}} hold the plant in the soil.','Seeds are often inside the {{fruit}}.'],1),
   DR('22. Draw a plant. Label the roots, stem, leaf and flower. (4 marks)',120)),
  pg('Science Practice Paper (8)','A seed needs water, air and warmth to grow. A plant needs sunlight too.','Practise how plants grow.',
   BK(['water','sunlight','air','space']),
   F('23. What does a plant need? Fill in. (4 marks)',['Plants drink {{water}} through their roots.','Plants use {{sunlight}} to make food.','Plants need {{air}} all around them.','Plants need {{space}} to grow big.'],1),
   F('24. Number the steps 1, 2, 3 and 4. (4 marks)',['The seed grows roots. {{2}}','Plant a seed in the soil. {{1}}','A flower opens. {{4}}','A shoot comes up with leaves. {{3}}'],2),
   WP('25. Plant problems. (3 marks)',['On Monday the plant was 3 cm tall. On Friday it was 8 cm tall. It grew {{5}} cm.','Hira planted 10 seeds. 7 grew. {{3}} seeds did not grow.','A plant has 4 leaves. It grows 2 more. Now it has {{6}} leaves.']),
   CH('26. Two plants: one is watered, one is not. Circle. (2 marks)',[['Which plant grows well?',['the watered plant','the dry plant'],0],['Which plant wilts?',['the watered plant','the dry plant'],1]])),
  pg('Science Practice Paper (9)','Young animals grow into adults.','Practise how animals grow and change.',
   CN(['egg','hatching-chick','chicken'],'Some animals hatch from eggs. Others are born live.','Animals grow'),
   BK(['egg','hatches','hen']),
   CY('27. The life cycle of a hen. Fill in. (3 marks)',[['egg','an {{egg}}'],['hatching-chick','the chick {{hatches}}'],['chicken','it grows into a {{hen}}']],true),
   MA('28. Match the animal to its young one. Write the letter in the box. (4 marks)',['sheep','goat','horse','frog'],['lamb','kid','foal','tadpole']),
   CP('29. Hatched from an egg or born live? Circle. (4 marks)',[['dog','puppy',1],['duck','duckling',0],['crocodile','baby crocodile',0],['cow','calf',1]],['hatched from an egg','born live'])),
  pg('Science Practice Paper (10)','Think carefully. Add up your marks from all ten pages.','Think about living things, plants and how animals grow.',
   CH('30. True or false? Circle. (5 marks)',[['A tree is a living thing.',0],['A spider is an insect.',1],['Roots take in water.',0],['A frog is a mammal.',1],['A kitten grows into a cat.',0]],TF),
   CH('31. Spot the mistake. Circle the wrong one. (3 marks)',[['',['A fish has gills.','A fish has feathers.'],1],['',['Roots make flowers.','Leaves make food.'],0],['',['A calf grows into a cow.','A calf grows into a horse.'],1]]),
   WR('32. A plant is kept in a dark cupboard. Why does it turn yellow? (2 marks)',['______________________________________________________']),
   WR(...HOW))];

 EXTRA['social']=[
  pg('Social Studies Practice Paper (5)','Places in our neighbourhood help us.','Practise places in the neighbourhood.',
   BK(['hospital','mosque','school','shop','post office','bakery']),
   FP('13. Name the place. (6 marks)',[['hospital','{{hospital}}'],['mosque','{{mosque}}'],['school','{{school}}'],['convenience-store','{{shop}}'],['post-office','{{post office}}'],['bread','{{bakery}}']],2),
   CH('14. Where do we go? Circle. (4 marks)',[['To say prayers, we go to the ...',['mosque','bakery'],0],['To get medicine, we go to the ...',['park','pharmacy'],1],['To catch a bus, we go to the ...',['bus stop','library'],0],['To buy fruit, we go to the ...',['post office','market'],1]]),
   CH('15. True or false? Circle. (2 marks)',[['A neighbourhood is the area around our home.',0],['A hospital is a place to play cricket.',1]],TF)),
  pg('Social Studies Practice Paper (6)','Many people work to help our neighbourhood.','Practise community helpers and good neighbours.',
   MA('16. Match the helper to the job. Write the letter in the box. (5 marks)',['baker','tailor','farmer','teacher','shopkeeper'],['bakes bread','sews clothes','grows food','helps us learn','sells things']),
   CH('17. What does each helper use? Circle. (4 marks)',[['A firefighter uses a ...',['hose','spoon'],0],['A doctor uses a ...',['hammer','stethoscope'],1],['A postman carries ...',['letters','bricks'],0],['A farmer drives a ...',['rocket','tractor'],1]]),
   BK(['street','neighbours','help']),
   F('18. Fill in. (3 marks)',['People who live near us are our {{neighbours}}.','Good neighbours {{help}} each other.','We keep our {{street}} clean.'],1),
   WR('19. Write one way you can be a good neighbour. (2 marks)',['______________________________________________________'])),
  pg('Social Studies Practice Paper (7)','Our school has many helpers and rules.','Practise people, places and rules at school.',
   CN(['school','teacher'],'Our school has many people who help us: the principal, teachers, the guard, the cleaner and the gardener.','Our school'),
   MA('20. Match the person to the job. Write the letter in the box. (4 marks)',['principal','teacher','guard','gardener'],['runs the school','teaches the class','keeps the gate safe','looks after the plants']),
   CH('21. Good or not good? Circle. (4 marks)',[['waiting for my turn',0],['pushing in the line',1],['saying thank you',0],['writing on desks',1]],['good','not good']),
   F('22. Fill in. (3 marks)',['We borrow books from the {{library}}.','We buy lunch in the {{canteen}}.','We learn lessons in the {{classroom}}.'],1),
   WR('23. Write one rule we follow at school. (2 marks)',['______________________________________________________'])),
  pg('Social Studies Practice Paper (8)','Look at the map carefully. North is at the top.','Practise reading a new map with directions.',
   {t:"map",rows:["mosque:Mosque|deciduous-tree:Trees|school:School","convenience-store:Shop|house:Home|national-park:Park","hospital:Hospital|bus-stop:Bus stop|bread:Bakery"]},
   CH('24. Use the map. Circle. (6 marks)',[['What is north of Home?',['Trees','Bus stop'],0],['What is south of Home?',['Trees','Bus stop'],1],['What is east of Home?',['Park','Shop'],0],['What is west of Home?',['Park','Shop'],1],['What is in the top left corner?',['Mosque','Bakery'],0],['What is in the bottom right corner?',['Hospital','Bakery'],1]]),
   F('25. Fill in north, south, east or west. (2 marks)',['The School is {{east}} of the Trees.','The Hospital is {{south}} of the Shop.'],1)),
  pg('Social Studies Practice Paper (9)','A compass shows four directions.','Practise directions and map symbols.',
   F('26. Fill in. (4 marks)',['N stands for {{north}}.','S stands for {{south}}.','E stands for {{east}}.','W stands for {{west}}.'],2),
   CH('27. Circle the right answer. (6 marks)',[['The sun rises in the ...',['east','west'],0],['The sun sets in the ...',['north','west'],1],['The opposite of north is ...',['south','east'],0],['The opposite of east is ...',['north','west'],1],['On a map, go up to go ...',['north','south'],0],['On a map, go down to go ...',['east','south'],1]]),
   CH('28. True or false? Circle. (3 marks)',[['A map shows a place from the side.',1],['A key tells us what the symbols mean.',0],['A map of our school can show the classrooms.',0]],TF),
   DR('29. Draw a map symbol for a tree, a house and a road. (3 marks)',100)),
  pg('Social Studies Practice Paper (10)','Think carefully. Add up your marks from all ten pages.','Think about neighbourhoods, school and maps.',
   CH('30. True or false? Circle. (5 marks)',[['A baker bakes bread.',0],['The principal runs the school.',0],['We should throw litter on the road.',1],['South is at the top of most maps.',1],['A compass helps us find directions.',0]],TF),
   CH('31. Spot the mistake. Circle the wrong one. (3 marks)',[['',['A doctor works in a hospital.','A doctor works in a bakery.'],1],['',['We read books in the library.','We swim in the library.'],1],['',['N stands for north.','N stands for night.'],1]]),
   WR('32. Write how you get from your classroom to the school gate. (2 marks)',['______________________________________________________','______________________________________________________']),
   WR(...HOW))];

 EXTRA['g1-computer']=[
  pg('ICT Practice Paper (5)','Know your keyboard. Sit well when you type.','Practise keyboard keys and typing my name.',
   BK(['Space bar','Shift','Backspace','Enter']),
   F('13. Fill in. (4 marks)',['The longest key is the {{Space bar}}.','To make a capital letter, hold {{Shift}}.','To delete a mistake, press {{Backspace}}.','To start a new line, press {{Enter}}.'],1),
   CH('14. Letter key or number key? Circle. (3 marks)',[['A',0],['7',1],['M',0]],['letter key','number key']),
   CH('15. True or false? Circle. (3 marks)',[['Sit with your back straight.',0],['Put your nose very close to the screen.',1],['Rest your eyes after some time.',0]],TF),
   WR('16. Write your name the way you would type it, with a capital letter at the start. (2 marks)',['______________________________________________________'])),
  pg('ICT Practice Paper (6)','Touch moves, apps and caring for a tablet.','Practise using and caring for a tablet.',
   MA('17. Match the touch move. Write the letter in the box. (4 marks)',['tap','swipe','pinch out','press and hold'],['touch once quickly','slide your finger across','make the picture bigger','keep your finger down']),
   CH('18. Which app do I open? Circle. (4 marks)',[['To listen to a song, open the ...',['music app','camera app'],0],['To see the time, open the ...',['drawing app','clock app'],1],['To make a video, open the ...',['camera app','calculator app'],0],['To paint a picture, open the ...',['music app','drawing app'],1]]),
   CP('19. Good or not good for the tablet? Circle. (4 marks)',[['battery','charging it when the battery is low',0],['droplet','spilling water on it',1],['hand-with-fingers-splayed','holding it with two hands',0],['sun','leaving it in the hot sun',1]],['good','not good'])),
  pg('ICT Practice Paper (7)','Input goes in. Output comes out.','Practise input and output devices.',
   CN(['keyboard','desktop-computer','printer'],'Input devices put information into a computer: keyboard, mouse, microphone, camera. Output devices bring it out: screen, speaker, printer, headphones.','Input and output'),
   CP('20. In or out? Circle. (6 marks)',[['keyboard','keyboard',0],['computer-mouse','mouse',0],['desktop-computer','screen',1],['headphone','headphones',1],['microphone','microphone',0],['printer','printer',1]],['in (input)','out (output)']),
   F('21. Fill in. (3 marks)',['We hear sounds from a {{speaker}}.','We record our voice with a {{microphone}}.','We see pictures on the {{screen}}.'],1),
   CH('22. Circle. (2 marks)',[['The sound is too loud. I turn the volume ...',['up','down'],1],['I cannot hear the video. I turn the volume ...',['up','down'],0]])),
  pg('ICT Practice Paper (8)','Stay safe online. Ask a grown-up.','Practise staying safe online.',
   CN(['locked','raised-hand'],'Some things are private. We keep them safe. If something online worries us, we stop and tell a trusted grown-up.','Safe online'),
   CH('23. What should I do? Circle. (4 marks)',[['A game asks me to buy something.',['buy it','ask a grown-up'],1],['A stranger wants to chat with me.',['tell a grown-up','chat with them'],0],['A video makes me feel scared.',['keep watching','stop and tell a grown-up'],1],['A message says "Click here for free toys!"',['do not click, ask a grown-up','click it'],0]]),
   CH('24. Private or OK to share? Circle. (4 marks)',[['my password',0],['my favourite food',1],['my phone number',0],['my favourite cartoon',1]],['private','OK to share']),
   WR('25. Write two trusted grown-ups you can ask for help. (2 marks)',['1. ____________________   2. ____________________'])),
  pg('ICT Practice Paper (9)','Follow the arrows, one square for each arrow.','Practise coding with arrows and finding bugs.',
   {t:"map",rows:["robot:Start|rock:Rock|star:Star","leaf-fluttering-in-wind:Grass|leaf-fluttering-in-wind:Grass|red-apple:Apple","battery:Battery|house:Home|key:Key"]},
   CH('26. The robot starts at Start. Where does it stop? Circle. (4 marks)',[['→ →',['Star','Rock'],0],['↓ ↓',['Home','Battery'],1],['↓ → →',['Apple','Key'],0],['↓ ↓ → →',['Key','Home'],0]]),
   F('27. Write the code. (2 marks)',['Start to Rock: {{→}}','Start to Battery: {{↓ ↓}}'],2),
   F('28. Find the bug. The code to reach Star should be → →, but it is → ↓. (2 marks)',['The bug is {{↓}}. It should be {{→}}.'],1)),
  pg('ICT Practice Paper (10)','Think carefully. Add up your marks from all ten pages.','Think about keyboards, tablets, devices, safety and coding.',
   CH('29. True or false? Circle. (5 marks)',[['A printer is an output device.',0],['Backspace makes a gap.',1],['Swipe means slide your finger.',0],['I can share my password with anyone.',1],['A robot follows arrows in order.',0]],TF),
   CH('30. Spot the mistake. Circle the wrong one. (3 marks)',[['',['A microphone is an input.','A microphone is an output.'],1],['',['Hold Shift for a capital letter.','Hold Enter for a capital letter.'],1],['',['Eat over the tablet.','Keep food away from the tablet.'],0]]),
   WR('31. Write one rule for using a computer safely. (2 marks)',['______________________________________________________']),
   WR(...HOW))];

 EXTRA['g1-ai']=[
  pg('AI Practice Paper (5)','AI looks for clues in many pictures.','Practise spotting clues and patterns.',
   CN(['magnifying-glass-tilted-left','cat'],'AI learns to spot things by looking at many pictures and finding clues, like ears, wings or wheels.','Spotting patterns'),
   CP('13. Wheels or no wheels? Circle. (4 marks)',[['bicycle','bicycle',0],['deciduous-tree','tree',1],['automobile','car',0],['horse','horse',1]],['wheels','no wheels']),
   BX('14. What comes next? (3 marks)',['star|moon|star|moon|{{star}}','big|small|small|big|small|{{small}}','2|4|6|8|{{10}}']),
   BK(['elephant','giraffe','parrot']),
   F('15. Use the clues. Which animal is it? (3 marks)',['It has a trunk and big ears: {{elephant}}','It has a very long neck: {{giraffe}}','It has feathers and can talk: {{parrot}}'],1)),
  pg('AI Practice Paper (6)','Robots need clear steps in the right order.','Practise clear instructions.',
   F('16. Brushing teeth. Write 1, 2, 3 or 4 to put the steps in order. (4 marks)',['Brush up and down. {{3}}','Put toothpaste on the brush. {{2}}','Rinse your mouth. {{4}}','Pick up your toothbrush. {{1}}'],1),
   CH('17. Clear or not clear? Circle. (6 marks)',[['Pick up the red ball.',0],['Get that.',1],['Walk 2 steps forward.',0],['Go over there.',1],['Close the door.',0],['Do some stuff.',1]],['clear','not clear']),
   WR('18. Write three clear steps to wash your hands. (3 marks)',['1. ______________________________________','2. ______________________________________','3. ______________________________________'])),
  pg('AI Practice Paper (7)','Try, check and fix. Mistakes help us learn.','Practise learning from mistakes.',
   CH('19. What is the best thing to do? Circle. (4 marks)',[['I got a sum wrong.',['try again and check','throw the book'],0],['My tower fell down.',['give up','build it again, wider'],1],['The robot went the wrong way.',['fix the code','shout at the robot'],0],['AI named a dog "cat".',['show it more dog pictures','never use it'],0]]),
   WP('20. Mistake maths. (3 marks)',['The AI sorted 10 pictures. It got 3 wrong. It got {{7}} right.','After more practice it got 9 right. That is {{2}} more than 7.','A robot fell 4 times, then walked on its next try. It tried {{5}} times in all.']),
   CH('21. True or false? Circle. (3 marks)',[['Only robots make mistakes.',1],['We can learn from a mistake.',0],['Checking our work helps us find mistakes.',0]],TF)),
  pg('AI Practice Paper (8)','AI can help people look after animals.','Practise how AI helps animals.',
   CN(['camera','elephant','bird'],'AI cameras can count animals in a forest. Apps can name birds from their songs. Rangers and vets still look after the animals.','AI helps animals'),
   CH('22. Circle the right answer. (4 marks)',[['An app can name a bird from its ...',['song','shadow'],0],['A camera in the forest can count ...',['stars','elephants'],1],['A smart collar shows where a ... is.',['cow','tree'],0],['Who looks after a sick animal?',['an app','a vet'],1]]),
   WP('23. Animal maths. (3 marks)',['A camera counted 6 deer in the morning and 5 at night. It counted {{11}} deer.','An app heard 8 bird songs. It named 6. It could not name {{2}}.','2 forests each have 5 cameras. There are {{10}} cameras.']),
   CH('24. True or false? Circle. (3 marks)',[['AI can help count animals.',0],['AI feeds the animals by itself.',1],['People and AI can work together to help animals.',0]],TF)),
  pg('AI Practice Paper (9)','My AI rules keep me safe.','Practise rules for using AI.',
   CH('25. Private or OK to share? Circle. (4 marks)',[['my school name',0],['my favourite colour',1],['a photo of my home',0],['my favourite fruit',1]],['private','OK to share']),
   CH('26. What do I do? Circle. (4 marks)',[['I want to try a new AI app.',['ask a grown-up first','try it alone'],0],['AI tells me something strange.',['believe it','check with a grown-up'],1],['AI asks for my address.',['do not tell it','type it in'],0],['I have used a screen for a long time.',['keep going','take a break'],1]]),
   BK(['grown-up','password','tell']),
   F('27. Fill in my AI rules. (3 marks)',['Always ask a {{grown-up}} before using AI.','Never share my {{password}}.','If AI says something unkind, I {{tell}} a grown-up.'],1)),
  pg('AI Practice Paper (10)','Think carefully. Add up your marks from all ten pages.','Think about patterns, instructions, mistakes, animals and AI rules.',
   CH('28. True or false? Circle. (5 marks)',[['AI looks for clues in pictures.',0],['A robot can guess what we mean.',1],['Mistakes help us learn.',0],['AI is always right.',1],['A grown-up should help me use AI.',0]],TF),
   CH('29. Spot the mistake. Circle the wrong one. (3 marks)',[['',['Give clear steps.','Give messy steps.'],1],['',['Share my password.','Keep my password private.'],0],['',['A vet looks after sick animals.','An app looks after sick animals.'],1]]),
   WR('30. Write one way AI can help people. (2 marks)',['______________________________________________________']),
   WR(...HOW))];

 addPaper('maths',[
  pg('Maths Practice Paper (1)',ASK+'193.','Practise counting, comparing and number names for the December test.',
   SC(193),
   BX('1. Count on and count back. Fill in the missing numbers. (6 marks)',['13|14|{{15}}|16|{{17}}|18','20|19|{{18}}|17|{{16}}|15','{{9}}|10|11|{{12}}|13|14']),
   F('2. Write >, < or =. (4 marks)',['14 {{>}} 11','9 {{<}} 16','18 {{=}} 18','12 {{<}} 20'],4),
   MA('3. Match the number to its name. Write the letter in the box. (4 marks)',['17','39','44','31'],['seventeen','thirty-nine','forty-four','thirty-one']),
   F('4. Write the number in words. (3 marks)',['15 = {{fifteen}}','28 = {{twenty-eight}}','46 = {{forty-six}}'],3),
   F('5. Write the number. (3 marks)',['nineteen = {{19}}','thirty-five = {{35}}','forty-two = {{42}}'],3)),
  pg('Maths Practice Paper (2)','Add and take away within 20. Use counting on, counting back and making 10.','Practise adding, taking away and fact families within 20.',
   F('6. Order from smallest to biggest. (2 marks)',['15, 9, 19, 12 → {{9, 12, 15, 19}}','18, 20, 11, 14 → {{11, 14, 18, 20}}'],1),
   CN(['hand-with-fingers-splayed','hand-with-fingers-splayed'],'Making 10: for 8 + 5, take 2 from the 5 to make 10. Then 10 + 3 = 13.','Make 10 first'),
   F('7. Add by counting on. (4 marks)',['12 + 3 = {{15}}','15 + 4 = {{19}}','11 + 6 = {{17}}','13 + 5 = {{18}}'],4),
   F('8. Add by making 10. (4 marks)',['9 + 4 = {{13}}','8 + 6 = {{14}}','7 + 5 = {{12}}','9 + 8 = {{17}}'],4),
   F('9. Take away by counting back. (4 marks)',['17 - 3 = {{14}}','19 - 5 = {{14}}','15 - 4 = {{11}}','20 - 6 = {{14}}'],4),
   F('10. Take away from 10. (3 marks)',['10 - 4 = {{6}}','10 - 7 = {{3}}','10 - 9 = {{1}}'],3),
   F('11. Complete the fact family for 6, 8 and 14. (4 marks)',['6 + 8 = {{14}}','8 + 6 = {{14}}','14 - 6 = {{8}}','14 - 8 = {{6}}'],4)),
  pg('Maths Practice Paper (3)','Numbers to 100. Think about tens and ones.','Practise tens and ones, number patterns, comparing and ordering to 100.',
   F('12. Tens and ones. (4 marks)',['5 tens and 3 ones = {{53}}','7 tens and 0 ones = {{70}}','86 = {{8}} tens and 6 ones','49 = 4 tens and {{9}} ones'],2),
   BX('13. Count in ones and tens. (4 marks)',['34|35|{{36}}|37|{{38}}|39','45|55|{{65}}|75|{{85}}']),
   F('14. Continue the pattern. (4 marks)',['2, 4, 6, {{8}}, {{10}}','5, 10, 15, {{20}}, {{25}}'],2),
   WP('15. Compare by taking away. (3 marks)',['Ali has 18 marbles. Sara has 12. Ali has {{6}} more marbles than Sara.','A red ribbon is 15 cm long. A blue ribbon is 9 cm long. The red ribbon is {{6}} cm longer.','Class A has 30 children. Class B has 27. Class B has {{3}} fewer children.']),
   F('16. Order from biggest to smallest. (2 marks)',['64, 46, 82, 28 → {{82, 64, 46, 28}}','57, 75, 70, 50 → {{75, 70, 57, 50}}'],1),
   F('17. Write the smaller number. (3 marks)',['67 or 76 → {{67}}','90 or 89 → {{89}}','41 or 14 → {{14}}'],3)),
  pg('Maths Practice Paper (4)','Times tables and picture problems. Keep going: this paper has ten pages.','Practise the 2 and 3 times tables and picture problems.',
   F('18. Times tables of 2 and 3. (6 marks)',['3 × 2 = {{6}}','5 × 2 = {{10}}','9 × 2 = {{18}}','4 × 3 = {{12}}','6 × 3 = {{18}}','10 × 3 = {{30}}'],3),
   BX('19. Count in threes. (3 marks)',['3|6|{{9}}|12|{{15}}|18|{{21}}']),
   FP('20. Look and write the answer. (3 marks)',[['bicycle','4 bikes, 2 wheels each: {{8}} wheels'],['hand-with-fingers-splayed','2 hands, 5 fingers each: {{10}} fingers'],['honeybee','3 groups of 3 bees: {{9}} bees']],3),
   WP('21. Picture problems. (4 marks)',['There are 5 bicycles. Each has 2 wheels. There are {{10}} wheels.','3 children each have 3 balloons. They have {{9}} balloons in all.','Hira has 9 stickers. She gets 6 more. Now she has {{15}} stickers.','There were 16 birds on a tree. 7 flew away. {{9}} birds are left.']))].concat(EXTRA['maths']));

 addPaper('g1-english',[
  pg('English Practice Paper (1)',ASK+'140.','Practise reading a story and answering questions.',
   SC(140),
   PA('The Lost Lunch Box\nSana goes to school on a big yellow bus. She has a new blue lunch box. In class, she reads a book and paints a duck.\nAt lunch time, her lunch box is not in her bag! Sana looks under her desk. She looks in the art room. At last, she finds it next to the paint pots. "Silly me!" she says, and she eats her lunch with a big smile.'),
   CH('1. Circle the right answer. (4 marks)',[['How does Sana go to school?',['by car','by bus'],1],['What colour is the lunch box?',['blue','red'],0],['What does Sana paint?',['a dog','a duck'],1],['Where does she find the lunch box?',['next to the paint pots','under her desk'],0]]),
   CH('2. True or false? Circle. (3 marks)',[['The bus is yellow.',0],['Sana reads a book in class.',0],['Sana is sad at the end.',1]],TF)),

  pg('English Practice Paper (2)','A statement tells. A question asks.','Practise statements, questions and capital letters.',
   CN(['speech-balloon','red-question-mark'],'A statement tells us something and ends with a full stop (.). A question asks something and ends with a question mark (?).','Statements and questions'),
   CH('3. Statement or question? Circle. (4 marks)',[['Where is my pencil',1],['The sun is hot',0],['Can you swim',1],['I like mangoes',0]],['statement','question']),
   F('4. Add a full stop (.) or a question mark (?). (4 marks)',['What is your name{{?}}','My cat is black{{.}}','Do you like rice{{?}}','We go to school by bus{{.}}'],2),
   F('5. Turn the statement into a question. (2 marks)',['It is cold. → {{Is it cold?}}','Ali is tall. → {{Is Ali tall?}}'],2),
   F('6. Write each sentence again with capital letters. (4 marks)',['my book is red. → {{My book is red.}}','i can run fast. → {{I can run fast.}}','we live in karachi. → {{We live in Karachi.}}','the shop opens on monday. → {{The shop opens on Monday.}}'],1)),
  pg('English Practice Paper (3)','Names start with a capital letter. A verb is a doing word.','Practise names, initials and verbs.',
   F('7. Write the initials. (4 marks)',['Sana Malik → {{S. M.}}','Umar Farooq → {{U. F.}}','Ayaan Raza → {{A. R.}}','Hiba Qureshi → {{H. Q.}}'],2),
   CH('8. Circle the word that should start with a capital letter. (3 marks)',[['',['river','ravi'],1],['',['zara','girl'],0],['',['month','june'],1]]),
   F('9. Write these names correctly. (3 marks)',['ali → {{Ali}}','pakistan → {{Pakistan}}','friday → {{Friday}}'],3),
   CH('10. Circle the verb. (4 marks)',[['The dog runs.',['dog','runs'],1],['Sara reads a book.',['reads','book'],0],['Birds fly high.',['Birds','fly'],1],['I eat an apple.',['eat','apple'],0]]),
   BK(['swims','barks','sings','kicks']),
   F('11. Fill in the verb. (4 marks)',['A fish {{swims}} in the pond.','The dog {{barks}} at night.','The bird {{sings}} in the tree.','Bilal {{kicks}} the ball.'],2)),
  pg('English Practice Paper (4)','Listen for the last sound. Keep going: this paper has ten pages.','Practise ending sounds m, d, n and t, and creative writing.',
   BK(['m','d','n','t']),
   FP('12. Write the last sound. (6 marks)',[['bed','be{{d}}'],['drum','dru{{m}}'],['pen','pe{{n}}'],['cat','ca{{t}}'],['bread','brea{{d}}'],['sun','su{{n}}']],3),
   CH('13. Circle the word with the right ending. (3 marks)',[['ends in m',['had','ham','hat'],1],['ends in n',['tent','ted','ten'],2],['ends in d',['red','ram','rat'],0]]),
   CN(['kite','sun','national-park'],'Look at the pictures. A child is flying a kite in the park on a sunny day.','Picture prompt'),
   WR('14. Write three sentences about the picture prompt. Use capital letters and full stops. (6 marks)',['______________________________________________________','______________________________________________________','______________________________________________________']))].concat(EXTRA['g1-english']));

 addPaper('g1-urdu',[
  pg('امتحانی پرچہ (۱)|Practice paper 1','ہر سوال کریں۔ بڑے سوال پڑھ کر سنا سکتے ہیں۔ ۱۲۳ میں سے نمبر دیں۔','Practise breaking and joining heavy sounds for the December test.',
   SCU(123),
   CN(['open-book','writing-hand'],'بھاری آواز کے لیے حرف کے ساتھ دو چشمی ھ لگاتے ہیں: ب + ھ = بھ ، چ + ھ = چھ ، ت + ھ = تھ','دو چشمی ھ'),
   F('۱۔ توڑ کر لکھیں۔ (۶ نمبر)',['بھا = {{ب + ھ + ا}}','چھو = {{چ + ھ + و}}','تھی = {{ت + ھ + ی}}','جھے = {{ج + ھ + ے}}','پھا = {{پ + ھ + ا}}','ٹھو = {{ٹ + ھ + و}}'],2,1),
   F('۲۔ جوڑ کر لکھیں۔ (۶ نمبر)',['پ + ھ + ی = {{پھی}}','ٹ + ھ + ا = {{ٹھا}}','ب + ھ + و = {{بھو}}','چ + ھ + ے = {{چھے}}','ج + ھ + ا = {{جھا}}','ت + ھ + و = {{تھو}}'],2,1)),
  pg('امتحانی پرچہ (۲)|Practice paper 2','ھ کو ا، و، ی اور ے سے ملائیں۔','Practise joining ھ with ا و ی ے.',
   MA('۳۔ ملائیں۔ خانے میں حرف لکھیں۔ (۴ نمبر)',['بھ + ا','چھ + و','تھ + ی','جھ + ے'],['بھا','چھو','تھی','جھے']),
   CH('۴۔ صحیح جوڑ پر دائرہ لگائیں۔ (۴ نمبر)',[['ک + ھ + ا',['کھا','کہا'],0],['گ + ھ + ی',['گہی','گھی'],1],['د + ھ + و',['دھو','دہو'],0],['پ + ھ + ے',['پہے','پھے'],1]]),
   CH('۵۔ بھاری لفظ پر دائرہ لگائیں۔ (۳ نمبر)',[['',['گھر','گر'],0],['',['کتا','کھانا'],1],['',['دودھ','دود'],0]])),
  pg('امتحانی پرچہ (۳)|Practice paper 3','تصویر دیکھیں اور بھاری لفظ لکھیں۔','Practise writing heavy words from pictures.',
   BK(['ہاتھی','ڈھول','بھالو','ہاتھ','جھاگ','گھوڑا','گھڑی','پھول']),
   FP('۶۔ تصویر دیکھ کر نام لکھیں۔ (۸ نمبر)',[['elephant','{{ہاتھی}}'],['drum','{{ڈھول}}'],['bear','{{بھالو}}'],['raised-hand','{{ہاتھ}}'],['bubbles','{{جھاگ}}'],['horse','{{گھوڑا}}'],['alarm-clock','{{گھڑی}}'],['tulip','{{پھول}}']],3),
   CH('۷۔ بھاری لفظ ہے یا نہیں؟ بھاری لفظ میں رنگ بھریں۔ (۴ نمبر)',[['مچھلی',0],['کتاب',1],['بھائی',0],['قلم',1]],['بھاری','بھاری نہیں'])),
  pg('امتحانی پرچہ (۴)|Practice paper 4','گنتی ایک سے پانچ تک۔ آگے چلیں: اس پرچے کے دس صفحے ہیں۔','Practise counting from one to five in Urdu.',
   F('۸۔ گنتی لفظوں میں لکھیں۔ (۵ نمبر)',['۱ = {{ایک}}','۲ = {{دو}}','۳ = {{تین}}','۴ = {{چار}}','۵ = {{پانچ}}'],5,1),
   F('۹۔ خالی جگہ پر گنتی لکھیں۔ (۷ نمبر)',['ایک، {{دو}}، تین، {{چار}}، پانچ','پانچ، {{چار}}، تین، {{دو}}، ایک','{{ایک}}، دو، {{تین}}، چار، {{پانچ}}'],1,1),
   WR('۱۰۔ دو بھاری لفظوں سے ایک جملہ بنائیں۔ (۲ نمبر)',['____________________________________']))].concat(EXTRA['g1-urdu']));

 addPaper('science',[
  pg('Science Practice Paper (1)',ASK+'117.','Practise groups of living things for the December test.',
   SC(117),
   CN(['cow','eagle','fish','snake','frog','ant'],'Plants and animals are living things. Animal groups: mammals, birds, fish, reptiles, amphibians, insects.','Groups of living things'),
   CP('1. Living or non-living? Circle. (4 marks)',[['cat','a cat',0],['rock','a rock',1],['sunflower','a sunflower',0],['pencil','a pencil',1]],['living','non-living']),
   MA('2. Match the animal to its group. Write the letter in the box. (6 marks)',['cow','parrot','shark','lizard','frog','bee'],['mammal','bird','fish','reptile','amphibian','insect'])),

  pg('Science Practice Paper (2)','Name the parts of a plant.','Practise the parts of a plant.',
   CN(['potted-plant','sunflower'],'A plant has roots, a stem, leaves and flowers. Many also make fruit and seeds.','Parts of a plant'),
   BK(['roots','stem','leaves','flower','seeds']),
   F('3. Fill in the part. (5 marks)',['The {{roots}} take in water from the soil.','The {{stem}} holds the plant up.','The {{leaves}} make food using sunlight.','The {{flower}} makes seeds.','New plants grow from {{seeds}}.'],1),
   CP('4. Which part do we eat? Circle. (4 marks)',[['carrot','carrot',0],['leafy-green','spinach',1],['broccoli','broccoli',2],['red-apple','apple',3]],['root','leaf','flower','fruit']),
   CH('5. True or false? Circle. (2 marks)',[['The stem carries water up the plant.',0],['Roots grow up in the air.',1]],TF)),
  pg('Science Practice Paper (3)','How does a seed grow?','Practise how plants grow and what they need.',
   BK(['seed','shoot','leaves','flower']),
   CY('6. How a plant grows. Fill in the missing words. (4 marks)',[['droplet','Plant the {{seed}} and water it'],['seedling','A tiny {{shoot}} comes up'],['potted-plant','It grows more {{leaves}}'],['sunflower','It grows a {{flower}}']]),
   CP('7. Does a plant need it to grow? Circle. (4 marks)',[['droplet','water',0],['sun','sunlight',0],['candy','sweets',1],['television','a TV',1]],['needs','does not need']),
   CH('8. Circle the right answer. (2 marks)',[['A plant kept in a dark cupboard will ...',['grow well','turn yellow and weak'],1],['A plant with no water will ...',['wilt','grow faster'],0]])),

  pg('Science Practice Paper (4)','Animals grow and change. Keep going: this paper has ten pages.','Practise how animals grow.',
   BK(['egg','caterpillar','pupa']),
   CY('9. The life cycle of a butterfly. Fill in. (3 marks)',[['egg','{{egg}}'],['bug','{{caterpillar}}'],['leaf-fluttering-in-wind','{{pupa}}'],['butterfly','butterfly']],true),
   MA('10. Match the animal to its young one. Write the letter in the box. (4 marks)',['cat','dog','hen','cow'],['kitten','puppy','chick','calf']),
   CH('11. True or false? Circle. (3 marks)',[['A chick hatches from an egg.',0],['A tadpole grows into a frog.',0],['A baby always looks just like its parent.',1]],TF),
   WR('12. Write one way you have changed since you were a baby. (2 marks)',['______________________________________________________']))].concat(EXTRA['science']));

 addPaper('social',[
  pg('Social Studies Practice Paper (1)',ASK+'115.','Practise our neighbourhood for the December test.',
   SC(115),
   CN(['house','school','hospital','convenience-store','national-park','mosque'],'A neighbourhood is the area around our home, with places we use.','Neighbourhood'),
   CH('1. Where do we go? Circle. (4 marks)',[['To buy bread, we go to the ...',['bakery','hospital'],0],['When we are ill, we go to the ...',['park','hospital'],1],['To post a letter, we go to the ...',['post office','school'],0],['To play on the swings, we go to the ...',['shop','park'],1]]),
   MA('2. Match the helper to the job. Write the letter in the box. (4 marks)',['doctor','postman','firefighter','police officer'],['looks after sick people','brings letters','puts out fires','keeps us safe on the roads']),
   CH('3. True or false? Circle. (2 marks)',[['Good neighbours help each other.',0],['We should throw litter in the street.',1]],TF)),
  pg('Social Studies Practice Paper (2)','Think about your school: the people, the places and the rules.','Practise learning about school.',
   CH('4. Who is it? Circle. (4 marks)',[['Who teaches us?',['teacher','driver'],0],['Who looks after the school gate?',['cook','guard'],1],['Who is in charge of the school?',['principal','gardener'],0],['Who keeps the school clean?',['pilot','cleaner'],1]]),
   MA('5. Match the place to what we do there. Write the letter in the box. (4 marks)',['library','playground','classroom','canteen'],['read books','play games','learn lessons','buy food']),
   CP('6. Good or not good? Circle. (4 marks)',[['person-running','running in the corridor',1],['raised-hand','putting up my hand to speak',0],['litter-in-bin-sign','putting litter in the bin',0],['pouting-face','shouting in class',1]],['good','not good']),
   WR('7. Write two things you like about your school. (2 marks)',['1. __________________   2. __________________'])),
  pg('Social Studies Practice Paper (3)','Look at the map carefully. North is at the top.','Practise reading a map with directions.',
   CN(['world-map','compass'],'A map is a drawing of a place seen from above. A key tells us what the symbols mean. N, S, E and W stand for north, south, east and west.','Maps'),
   {t:"map",rows:["bread:Bakery|mosque:Mosque|national-park:Park","school:School|house:My house|hospital:Hospital","convenience-store:Shop|fire-engine:Fire station|post-office:Post office"]},
   CH('8. Use the map. Circle. (5 marks)',[['What is north of My house?',['Mosque','Shop'],0],['What is south of My house?',['Bakery','Fire station'],1],['What is east of My house?',['Hospital','School'],0],['What is west of My house?',['Park','School'],1],['What is in the top right corner?',['Park','Shop'],0]])),

  pg('Social Studies Practice Paper (4)','Think about maps, then draw your own. Keep going: this paper has ten pages.','Practise maps and our neighbourhood.',
   BK(['above','key','north']),
   F('9. Fill in. (3 marks)',['A map shows a place from {{above}}.','The {{key}} tells us what the symbols mean.','N stands for {{north}}.'],1),
   CH('10. True or false? Circle. (4 marks)',[['A map can show roads and buildings.',0],['North is at the top of most maps.',0],['A map key tells us the time.',1],['A compass helps us find directions.',0]],TF),
   DR('11. Draw a map of your classroom. Add a key with three symbols. (4 marks)',130),
   WR('12. Write the names of two places near your home. (2 marks)',['1. ____________________   2. ____________________']))].concat(EXTRA['social']));

 addPaper('g1-computer',[
  pg('ICT Practice Paper (1)',ASK+'105.','Practise the keyboard and typing my name.',
   SC(105),
   MA('1. Match the key to its job. Write the letter in the box. (4 marks)',['Shift','Space bar','Backspace','Enter'],['makes a capital letter','makes a gap','deletes a letter','starts a new line']),
   CY('2. Steps to type my name. Fill in. (3 marks)',[['keyboard','Hold {{Shift}} and press the first letter'],['input-latin-letters','Type the other {{letters}}'],['keyboard','Press the {{Space bar}}'],['desktop-computer','Type your surname']]),
   CH('3. Sit well at the computer. Circle. (3 marks)',[['Sit with your back ...',['straight','bent'],0],['Keep your eyes ... from the screen.',['very close','an arm away'],1],['Put your feet ...',['flat on the floor','up on the chair'],0]])),
  pg('ICT Practice Paper (2)','Think about using a tablet and its apps.','Practise touch moves, apps and caring for a tablet.',
   CN(['mobile-phone','hand-with-fingers-splayed'],'We use a tablet by touching the screen. An app is a program on the tablet, like the camera or a drawing app.','Tablets'),
   CH('4. Which touch move is it? Circle. (4 marks)',[['Touch the screen once, quickly.',['swipe','tap'],1],['Slide your finger across the screen.',['swipe','tap'],0],['Move two fingers apart to make it bigger.',['tap','pinch out'],1],['Keep your finger down on an icon.',['press and hold','swipe'],0]]),
   CH('5. Which app do I open? Circle. (3 marks)',[['To take a photo, open the ...',['camera app','calculator app'],0],['To draw a picture, open the ...',['music app','drawing app'],1],['To do sums, open the ...',['calculator app','camera app'],0]]),
   CH('6. True or false? Circle. (4 marks)',[['Charge the tablet when the battery is low.',0],['Eat and drink over the tablet.',1],['Hold the tablet with two hands.',0],['Wash the tablet in water.',1]],TF)),
  pg('ICT Practice Paper (3)','Pictures and sounds go in and come out of a computer. Stay safe online.','Practise input and output devices and asking a grown-up online.',
   CP('7. In or out? Circle. (4 marks)',[['microphone','microphone',0],['speaker-high-volume','speaker',1],['camera','camera',0],['printer','printer',1]],['in (input)','out (output)']),
   MA('8. Match the device to its job. Write the letter in the box. (3 marks)',['headphones','microphone','printer'],['to hear sounds','to record my voice','to print a picture on paper']),
   CH('9. What should I do? Circle. (4 marks)',[['A pop-up says I won a prize.',['click it','ask a grown-up'],1],['Someone online asks for my address.',['tell them','stop and ask a grown-up'],1],['I see something that scares me.',['tell a grown-up','keep it secret'],0],['A game asks for my password.',['ask a grown-up','type it in'],0]]),
   CH('10. Private or OK to share? Circle. (2 marks)',[['my home address',0],['my favourite colour',1]],['private','OK to share'])),
  pg('ICT Practice Paper (4)','Follow the arrows. Keep going: this paper has ten pages.','Practise coding with arrows and finding bugs.',
   {t:"map",rows:["robot:Start|leaf-fluttering-in-wind:Grass|red-apple:Apple","leaf-fluttering-in-wind:Grass|rock:Rock|leaf-fluttering-in-wind:Grass","house:Home|leaf-fluttering-in-wind:Grass|battery:Battery"]},
   CH('11. The robot starts at Start. Where does it stop? Circle. (6 marks)',[['→ →',['Apple','Rock'],0],['↓ ↓',['Battery','Home'],1],['→ ↓',['Rock','Grass'],0],['→ → ↓ ↓',['Home','Battery'],1],['↓',['Grass','Rock'],0],['→ ↓ ↓',['Battery','Grass'],1]]),
   F('12. Find the bug. The code to go from Start to Home should be ↓ ↓, but it is ↓ →. (2 marks)',['The bug is {{→}}. It should be {{↓}}.'],1))].concat(EXTRA['g1-computer']));

 addPaper('g1-ai',[
  pg('AI Practice Paper (1)',ASK+'110.','Practise how AI spots patterns in pictures.',
   SC(110),
   CH('1. Which clue helps? Circle. (3 marks)',[['A bird has ...',['four legs','wings'],1],['A cat has ...',['whiskers','feathers'],0],['A fish has ...',['fur','fins'],1]]),
   BX('2. What comes next? (4 marks)',['circle|square|circle|square|{{circle}}','red|red|blue|red|red|{{blue}}','1|2|3|1|2|{{3}}','A|B|B|A|B|{{B}}']),
   CP('3. Wings or no wings? Circle. (4 marks)',[['eagle','eagle',0],['dog','dog',1],['butterfly','butterfly',0],['fish','fish',1]],['wings','no wings'])),
  pg('AI Practice Paper (2)','Robots need clear instructions, one step at a time.','Practise giving clear instructions in order.',
   CN(['robot','right-arrow'],'A robot cannot guess. It needs clear instructions in the right order.','Instructions'),
   CH('4. Clear or not clear? Circle. (4 marks)',[['Go forward 3 steps.',0],['Go somewhere.',1],['Turn right, then stop.',0],['Do the thing.',1]],['clear','not clear']),
   F('5. Making a sandwich. Write 1, 2, 3 or 4 to put the steps in order. (4 marks)',['Put jam on the bread. {{2}}','Take two slices of bread. {{1}}','Eat the sandwich. {{4}}','Put the second slice on top. {{3}}'],2),
   CH('6. Circle the right answer. (3 marks)',[['A robot needs ... instructions.',['silly','clear'],1],['If an instruction is wrong, the robot ...',['still follows it','fixes it by itself'],0],['Robots follow steps ...',['in any mix','in order'],1]])),
  pg('AI Practice Paper (3)','Mistakes help us learn. AI can help animals too.','Practise learning from mistakes and how AI helps animals.',
   BK(['Try','Check','Fix']),
   CY('7. Try, check, fix. Fill in. (3 marks)',[['thinking-face','{{Try}} it'],['magnifying-glass-tilted-left','{{Check}} it'],['check-mark-button','{{Fix}} it']]),
   CH('8. True or false? Circle. (4 marks)',[['AI can make mistakes.',0],['Mistakes help us learn.',0],['People can help AI fix its mistakes.',0],['AI is always right.',1]],TF),
   CH('9. How does AI help animals? Circle. (4 marks)',[['A camera in the forest can count ...',['animals','clouds'],0],['A smart collar can show where a ... is.',['rock','cow'],1],['An app can listen to ... and name them.',['bird songs','cars'],0],['Who still looks after animals?',['only robots','people'],1]])),
  pg('AI Practice Paper (4)','Rules keep us safe when we use AI. Keep going: this paper has ten pages.','Practise my AI rules.',
   CH('10. Private or OK to share? Circle. (6 marks)',[['my full name and address',0],['my favourite animal',1],['my password',0],['the colour I like',1],['my school name',0],['a funny joke',1]],['private','OK to share']),
   CH('11. What do I do? Circle. (4 marks)',[['AI gives an answer that looks wrong.',['believe it','check with a grown-up'],1],['I want to use an AI app.',['ask a grown-up first','use it alone'],0],['AI says something unkind.',['say it to a friend','tell a grown-up'],1],['I have played on the tablet for a long time.',['take a break','play all night'],0]]),
   WR('12. Write three rules for using AI safely. (3 marks)',['1. ______________________________________','2. ______________________________________','3. ______________________________________']))].concat(EXTRA['g1-ai']));
});

/* D9: Grade 1 Maths topics 1 to 4 (topic 1 was the pilot: two small top-ups only; Number bonds, Addition, Subtraction).
   Same method as the KG D batches: top up old pages by page number (checked by title), then Warm-up ★, Challenge ★★★, 2-page Topic Test and Word Mat. */
DEPTH.push(({addPages})=>{const S='maths';
 const mo=(n,title,...b)=>{const p=PAGES[S][n-1];if(p&&p.title===title)p.blocks=p.blocks.concat(b);else console.warn('depth: page mismatch',S,n,title)};
 const HOW=WR('How did I do? Write one thing you can do now.',['I can ______________________________.']);
 const SC=(tot,a,b)=>NO(`Score: ______ / ${tot} &nbsp; ★ 0 to ${a-1} keep practising &nbsp; ★★ ${a} to ${b-1} good work &nbsp; ★★★ ${b} to ${tot} super!`);
 const PSUM=(h,items)=>({t:'picsum',h,items});
 const PSUB=(h,items)=>({t:'picsub',h,items});
 const BOND=items=>({t:'bond',items});

 /* ---- Topic 1 top-ups (pilot pages just under 0.75) ---- */
 mo(11,'Tens and Ones',
  WP('D. Word problem.',['Ammi has 1 box of 10 eggs and 7 more eggs. She has {{17}} eggs.']));
 const wu=PAGES[S].find(p=>p.title==='Numbers to 20 Warm-up ★');
 if(wu)wu.blocks.push(F('D. One more.',['One more than 6 is {{7}}.','One more than 11 is {{12}}.','One more than 15 is {{16}}.','One more than 19 is {{20}}.'],2));

 /* ---- Topic 2: Number bonds ---- */
 mo(4,'Number Bonds to 10',
  F('Find all the ways to make 10.',['0 + {{10}} = 10','1 + {{9}} = 10','2 + {{8}} = 10','3 + {{7}} = 10','4 + {{6}} = 10','5 + {{5}} = 10'],3),
  WP('Word problems.',['There are 10 sweets. 6 are red and the rest are green. {{4}} sweets are green.','Hamza has 10 marbles. He has 3 in one hand. He has {{7}} in the other hand.']));
 mo(5,'Number Bonds to 20',
  NO('Tip: use a bond to 10 to help. 3 + 7 = 10, so 13 + 7 = 20.'),
  F('Use the bond to 10.',['4 + 6 = 10, so 14 + {{6}} = 20','2 + 8 = 10, so 12 + {{8}} = 20','5 + 5 = 10, so 15 + {{5}} = 20','9 + 1 = 10, so 19 + {{1}} = 20'],2),
  WP('Word problems.',['A book has 20 pages. Sara has read 16 pages. She has {{4}} pages left to read.','There are 20 children. 11 are girls. {{9}} are boys.']));
 mo(12,'Number Bond Practice',
  F('Find two ways to make each number.',['6 = 1 + {{5}} = 2 + {{4}}','8 = 6 + {{2}} = 3 + {{5}}','9 = 7 + {{2}} = 4 + {{5}}','7 = 5 + {{2}} = 1 + {{6}}'],2),
  CH('Circle the pair that makes 8.',[['',['5 and 3','4 and 3'],0],['',['6 and 1','6 and 2'],1]]),
  WP('Word problem.',['Zara has 9 bangles. 4 are on her left arm. {{5}} are on her right arm.']));
 mo(13,'How Many More to Make 10?',
  FP('How many more to make 10?',[['egg','7 eggs. {{3}} more make 10.'],['red-apple','2 apples. {{8}} more make 10.'],['balloon','5 balloons. {{5}} more make 10.'],['pencil','9 pencils. {{1}} more makes 10.']]),
  WP('More word problems.',['A box holds 10 crayons. There are 4 in it. {{6}} more crayons fill the box.']));
 addPages(S,'Number bonds',[
  pg('Number Bonds Warm-up ★','Start here if number bonds are new. Use your fingers to help.','Find number bonds to 5 and to 10 with support.',
   CN(['hand-with-fingers-splayed','hand-with-fingers-splayed'],'A number bond shows two parts that make a whole. Hold up 10 fingers. Fold down 3. You can see 7 standing up: 3 and 7 make 10.','Two parts make a whole'),
   BOND([[5,2,3,2],[5,4,1,2],[5,5,0,2],[10,6,4,2],[10,8,2,2],[10,1,9,2]]),
   PSUM('Count both groups. How many in all?',[[4,1,'star'],[3,2,'circle'],[6,4,'heart']]),
   F('Make 5.',['1 + {{4}} = 5','2 + {{3}} = 5','0 + {{5}} = 5','4 + {{1}} = 5'],2)),
  pg('Number Bonds Challenge ★★★','Think carefully. Show your thinking.','Reason with number bonds to 10 and 20.',
   F('A. True or false? Write T or F.',['6 + 4 = 10 {{T}}','7 + 2 = 10 {{F}}','12 + 8 = 20 {{T}}','15 + 4 = 20 {{F}}','10 + 10 = 20 {{T}}','9 + 1 = 10 {{T}}'],2),
   F('B. Spot the mistake. Write the right answer.',['Raza says 3 + 6 = 10. The right sum is 3 + {{7}} = 10.','Hira says 14 + 4 = 20. The right sum is 14 + {{6}} = 20.'],1),
   F('C. Missing numbers.',['{{7}} + 3 = 6 + {{4}}','8 + 2 = {{5}} + 5','11 + {{9}} = 20','{{0}} + 20 = 20'],2),
   F('D. Puzzles.',['I am a number. If you add me to 7, you get 10. I am {{3}}.','Two numbers that are the same make 10. Each one is {{5}}.','A whole is 20. One part is 13. The other part is {{7}}.']),
   WP('E. Think it through.',['Ammi bakes 20 biscuits. 10 go in a tin and 6 go on a plate. {{4}} biscuits are left.'])),
  pg('Topic Test: Number bonds (1)','Answer every question. Ask a grown-up to mark it out of 34.','Check number bonds to 10.',
   SC(34,17,27),
   NO('1. Write the missing part in each bond. (6 marks)'),
   BOND([[10,7,3,2],[10,4,6,1],[10,5,5,2],[10,9,1,1],[8,6,2,2],[9,3,6,1]]),
   F('2. Make 10. (6 marks)',['8 + {{2}} = 10','{{6}} + 4 = 10','1 + {{9}} = 10','{{3}} + 7 = 10','5 + {{5}} = 10','{{10}} + 0 = 10'],3),
   CH('3. Circle the pair that makes 10. (3 marks)',[['',['6 and 4','6 and 3'],0],['',['8 and 1','8 and 2'],1],['',['7 and 3','5 and 4'],0]])),
  pg('Topic Test: Number bonds (2)','Answer every question. Add up your marks from both pages.','Check number bonds to 20 and word problems.',
   F('4. Make 20. (6 marks)',['12 + {{8}} = 20','{{5}} + 15 = 20','17 + {{3}} = 20','{{11}} + 9 = 20','10 + {{10}} = 20','{{2}} + 18 = 20'],3),
   F('5. How many more to make 10? (6 marks)',['6 → {{4}}','8 → {{2}}','1 → {{9}}','3 → {{7}}','5 → {{5}}','9 → {{1}}'],3),
   WP('6. Word problems. (3 marks)',['There are 10 birds. 4 fly away. {{6}} birds stay.','Bilal has 20 rupees. He spends 12 rupees. He has {{8}} rupees left.','A team needs 10 players. 7 are here. {{3}} more players must come.']),
   F('7. True or false? Write T or F. (4 marks)',['2 + 8 = 10 {{T}}','13 + 6 = 20 {{F}}','5 + 4 = 10 {{F}}','16 + 4 = 20 {{T}}'],2),
   HOW),
  pg('Word Mat: Number bonds','Keep this mat on the table while you work. Read the bonds aloud.','Know the bonds to 10 and to 20 and the words for them.',
   NO('<b>Bonds to 10</b><br><span style="font-size:20px">0 + 10 &nbsp; 1 + 9 &nbsp; 2 + 8 &nbsp; 3 + 7 &nbsp; 4 + 6 &nbsp; 5 + 5</span>'),
   NO('<b>Bonds to 20</b><br><span style="font-size:20px">10 + 10 &nbsp; 11 + 9 &nbsp; 12 + 8 &nbsp; 13 + 7 &nbsp; 14 + 6 &nbsp; 15 + 5 &nbsp; 16 + 4 &nbsp; 17 + 3 &nbsp; 18 + 2 &nbsp; 19 + 1 &nbsp; 20 + 0</span>'),
   BOND([[10,6,4,-1],[20,13,7,-1]]),
   NO('<b>Maths words</b><br><b>whole</b>: the total · <b>part</b>: one of the numbers that make the whole<br><b>number bond</b>: two parts that make a whole · <b>make 10</b> · <b>how many more?</b><br>Tip: if you know 3 + 7 = 10, you also know 7 + 3 = 10 and 13 + 7 = 20.'),
   {t:'numline'},
   BK(['whole','part','bond','make','more','total','pair','add']),
   DR('Draw 10 dots in two colours. Write the bond.',110))]);

 /* ---- Topic 3: Addition ---- */
 mo(6,'Adding Within 10',
  PSUM('C. Count and add.',[[2,6,'square'],[5,3,'circle']]),
  FP('D. Add the pictures.',[['mango','3 mangoes and 4 mangoes make {{7}}.'],['balloon','5 balloons and 2 balloons make {{7}}.'],['egg','6 eggs and 3 eggs make {{9}}.'],['kite','4 kites and 4 kites make {{8}}.']]));
 mo(7,'Adding Within 20',
  F('C. Count on from the bigger number.',['3 + 12 = {{15}}','2 + 16 = {{18}}','4 + 13 = {{17}}','5 + 11 = {{16}}','1 + 18 = {{19}}','6 + 10 = {{16}}'],3),
  WP('D. More word problems.',['A class has 11 girls and 8 boys. There are {{19}} children.','Hira picks 7 roses and 6 tulips. She has {{13}} flowers.']));
 mo(14,'Doubles',
  FP('C. Double the pictures.',[['lady-beetle','A ladybird has 3 spots on each wing. It has {{6}} spots.'],['hand-with-fingers-splayed','Two hands have 5 fingers each. That is {{10}} fingers.'],['spider','A spider has 4 legs on each side. It has {{8}} legs.'],['game-die','Two dice both show 6. That makes {{12}}.']]),
  F('D. Near doubles. Use the double to help.',['5 + 5 = 10, so 5 + 6 = {{11}}','4 + 4 = 8, so 4 + 5 = {{9}}','7 + 7 = 14, so 7 + 8 = {{15}}','6 + 6 = 12, so 6 + 7 = {{13}}'],2));
 mo(15,'Adding Three Numbers',
  NO('Tip: look for two numbers that make 10 first. 7 + 5 + 3: 7 + 3 = 10, then 10 + 5 = 15.'),
  F('C. Find the 10 first.',['6 + 3 + 4 = {{13}}','2 + 9 + 8 = {{19}}','5 + 5 + 7 = {{17}}','1 + 6 + 9 = {{16}}','8 + 4 + 2 = {{14}}','3 + 7 + 7 = {{17}}'],2),
  WP('D. Word problem.',['In the garden there are 4 hens, 6 ducks and 3 goats. There are {{13}} animals.','Bilal reads 5 pages, then 5 pages, then 8 pages. He reads {{18}} pages.']));
 addPages(S,'Addition',[
  pg('Addition Warm-up ★','Start here if adding is new. Count all the pictures.','Add two small groups with a total up to 10.',
   PSUM('A. Count and add.',[[2,1,'star'],[3,3,'heart'],[4,2,'circle'],[5,1,'square']]),
   FP('B. Add.',[['red-apple','2 apples and 2 apples make {{4}}.'],['duck','3 ducks and 1 duck make {{4}}.']]),
   F('C. Solve.',['1 + 2 = {{3}}','3 + 2 = {{5}}','4 + 1 = {{5}}','2 + 4 = {{6}}','5 + 3 = {{8}}','6 + 1 = {{7}}'],3),
   WP('D. A grown-up reads. Write the answer.',['Ali has 3 kites. He gets 2 more. He has {{5}} kites.','There are 4 cats and 4 dogs. There are {{8}} pets.']),
   NO('Tip: put the bigger number in your head and count on with your fingers.')),
  pg('Addition Challenge ★★★','Think carefully. Show your thinking.','Reason about adding within 20.',
   F('A. True or false? Write T or F.',['8 + 5 = 13 {{T}}','6 + 6 = 13 {{F}}','9 + 7 = 7 + 9 {{T}}','10 + 9 = 18 {{F}}','4 + 4 + 4 = 12 {{T}}','12 + 0 = 12 {{T}}'],2),
   F('B. Spot the mistake. Write the right answer.',['Zain says 7 + 8 = 14. It is {{15}}.','Hira says 9 + 9 = 19. It is {{18}}.'],1),
   F('C. Missing numbers.',['8 + {{6}} = 14','{{9}} + 5 = 14','7 + {{7}} = 14','{{11}} + 3 = 14','5 + 5 + {{4}} = 14','6 + {{2}} + 6 = 14'],2),
   F('D. Puzzles.',['I am double 8. I am {{16}}.','I am 3 more than 15. I am {{18}}.','Write two different sums that make 12: {{6 + 6}} and {{8 + 4}}.']),
   WP('E. Think it through.',['Sara has 7 shells. Ali has 5 more than Sara. Ali has {{12}} shells.'])),
  pg('Topic Test: Addition (1)','Answer every question. Ask a grown-up to mark it out of 39.','Check adding within 10 and 20.',
   SC(39,20,31),
   PSUM('1. Count and add. (3 marks)',[[4,3,'star'],[5,5,'circle'],[6,2,'heart']]),
   F('2. Solve. (9 marks)',['5 + 4 = {{9}}','3 + 6 = {{9}}','7 + 2 = {{9}}','10 + 6 = {{16}}','8 + 7 = {{15}}','12 + 5 = {{17}}','9 + 4 = {{13}}','14 + 3 = {{17}}','11 + 9 = {{20}}'],3),
   F('3. Count on from the bigger number. (6 marks)',['2 + 9 = {{11}}','3 + 14 = {{17}}','1 + 15 = {{16}}','4 + 12 = {{16}}','2 + 17 = {{19}}','5 + 13 = {{18}}'],3),
   CH('4. Circle the right answer. (3 marks)',[['7 + 6 =',['13','12'],0],['9 + 8 =',['16','17'],1],['5 + 9 =',['14','15'],0]])),
  pg('Topic Test: Addition (2)','Answer every question. Add up your marks from both pages.','Check doubles, adding three numbers and word problems.',
   F('5. Doubles. (4 marks)',['3 + 3 = {{6}}','6 + 6 = {{12}}','Double 8 is {{16}}.','Double 10 is {{20}}.'],2),
   F('6. Add three numbers. (4 marks)',['3 + 4 + 2 = {{9}}','5 + 5 + 6 = {{16}}','8 + 1 + 2 = {{11}}','4 + 6 + 7 = {{17}}'],2),
   WP('7. Word problems. (6 marks: 2 each)',['There are 9 cars in a car park. 6 more come. There are {{15}} cars.','Ammi buys 8 oranges and 8 bananas. She buys {{16}} fruits.','Zara has 5 red, 4 yellow and 5 green crayons. She has {{14}} crayons.']),
   F('8. Missing numbers. (4 marks)',['6 + {{7}} = 13','{{8}} + 8 = 16','9 + {{9}} = 18','{{10}} + 5 = 15'],2),
   HOW),
  pg('Word Mat: Addition','Keep this mat on the table while you work. Read the words together.','Know the words and ways to add within 20.',
   NO('<b>Adding words</b><br><b>add</b> · <b>plus</b> (+) · <b>altogether</b> · <b>in all</b> · <b>total</b> · <b>sum</b> · <b>more</b> · <b>equals</b> (=)'),
   CN(['red-apple','red-apple'],'Adding puts groups together. 4 apples and 3 apples make 7 apples: 4 + 3 = 7. You can add in any order: 3 + 4 = 7 too.','Putting together'),
   {t:'numline'},
   NO('<b>Ways to add</b><br>1. Count on from the bigger number: 9 + 3 → 9 … 10, 11, 12.<br>2. Use doubles: 6 + 6 = 12, so 6 + 7 = 13.<br>3. Make 10 first: 8 + 5 = 8 + 2 + 3 = 13.<br><b>Doubles:</b> 1+1=2 · 2+2=4 · 3+3=6 · 4+4=8 · 5+5=10 · 6+6=12 · 7+7=14 · 8+8=16 · 9+9=18 · 10+10=20'),
   BK(['add','plus','total','sum','altogether','double','count on','equals']),
   DR('Draw a picture for 6 + 5. Write the answer.',110))]);

 /* ---- Topic 4: Subtraction ---- */
 mo(8,'Taking Away Within 10',
  PSUB('C. Cross out and write.',[[8,2,'square'],[5,3,'circle']]),
  FP('D. Take away.',[['cookie','8 biscuits. Ali eats 3. {{5}} are left.'],['balloon','6 balloons. 2 pop. {{4}} are left.'],['bird','9 birds. 4 fly away. {{5}} are left.'],['fish','7 fish. 7 swim away. {{0}} are left.']]));
 mo(9,'Subtracting Within 20',
  F('C. Take away 10.',['17 − 10 = {{7}}','14 − 10 = {{4}}','20 − 10 = {{10}}','19 − 10 = {{9}}','12 − 10 = {{2}}','15 − 10 = {{5}}'],3),
  CH('D. Circle the right answer.',[['16 − 7 =',['9','8'],0],['13 − 5 =',['7','8'],1],['20 − 4 =',['16','14'],0],['11 − 3 =',['9','8'],1]]),
  WP('E. Word problem.',['There are 18 eggs. 9 break. {{9}} eggs are not broken.']));
 mo(16,'Missing Numbers in Subtraction',
  NO('Tip: adding and taking away are a family. 6 + 4 = 10, so 10 − 4 = 6 and 10 − 6 = 4.'),
  F('C. Write the fact family.',['5 + 3 = 8, 3 + 5 = 8, 8 − 3 = {{5}}, 8 − 5 = {{3}}','9 + 6 = 15, 6 + 9 = 15, 15 − 6 = {{9}}, 15 − 9 = {{6}}'],1),
  WP('D. Word problems.',['Zain had some kites. He gave away 3. He has 7 left. He had {{10}} kites.','There were 12 mangoes. Some were eaten. 5 are left. {{7}} were eaten.']));
 mo(17,'Counting Back',
  BX('C. Count back. Fill in.',['20|19|{{18}}|17|{{16}}|15|{{14}}','13|{{12}}|11|{{10}}|9|{{8}}|7']),
  F('D. Count back to subtract.',['15 − 3 = {{12}}','18 − 5 = {{13}}','10 − 4 = {{6}}','13 − 7 = {{6}}'],2),
  WP('E. Word problem.',['Sara has 17 rupees. A pencil costs 5 rupees. After buying it she has {{12}} rupees.']));
 addPages(S,'Subtraction',[
  pg('Subtraction Warm-up ★','Start here if taking away is new. Cross out the pictures.','Take away from a small group and count what is left.',
   PSUB('A. Cross out and write.',[[4,1,'star'],[5,2,'heart'],[6,3,'circle'],[3,3,'square']]),
   FP('B. Take away.',[['red-apple','5 apples. Eat 1. {{4}} are left.'],['duck','4 ducks. 2 swim away. {{2}} are left.']]),
   F('C. Solve.',['3 − 1 = {{2}}','5 − 2 = {{3}}','4 − 4 = {{0}}','6 − 1 = {{5}}','7 − 2 = {{5}}','5 − 0 = {{5}}'],3),
   WP('D. A grown-up reads. Write the answer.',['There are 6 birds. 2 fly away. {{4}} birds are left.','Sara has 5 sweets. She eats 3. She has {{2}} sweets left.']),
   NO('Tip: start at the big number and count back on your fingers.')),
  pg('Subtraction Challenge ★★★','Think carefully. Show your thinking.','Reason about subtracting within 20.',
   F('A. True or false? Write T or F.',['14 − 6 = 8 {{T}}','10 − 3 = 6 {{F}}','9 − 0 = 9 {{T}}','12 − 12 = 1 {{F}}','20 − 5 = 15 {{T}}','16 − 8 = 8 {{T}}'],2),
   F('B. Spot the mistake. Write the right answer.',['Bilal says 15 − 7 = 9. It is {{8}}.','Hira says 13 − 4 = 8. It is {{9}}.'],1),
   F('C. Missing numbers.',['{{17}} − 8 = 9','14 − {{5}} = 9','{{20}} − 11 = 9','12 − {{3}} = 9'],2),
   F('D. Puzzles.',['I am 6 less than 15. I am {{9}}.','Take me away from 18 and you get 10. I am {{8}}.','Write two different take aways that give 5: {{10 − 5}} and {{12 − 7}}.']),
   WP('E. Think it through.',['Ali has 16 marbles. He gives 4 to Sara and 5 to Zain. He has {{7}} marbles left.'])),
  pg('Topic Test: Subtraction (1)','Answer every question. Ask a grown-up to mark it out of 38.','Check taking away within 10 and 20.',
   SC(38,19,30),
   PSUB('1. Cross out and write. (3 marks)',[[9,5,'star'],[7,4,'circle'],[10,8,'heart']]),
   F('2. Solve. (9 marks)',['8 − 3 = {{5}}','10 − 6 = {{4}}','7 − 7 = {{0}}','15 − 5 = {{10}}','18 − 9 = {{9}}','14 − 6 = {{8}}','20 − 7 = {{13}}','16 − 4 = {{12}}','13 − 8 = {{5}}'],3),
   F('3. Take away 10. (6 marks)',['16 − 10 = {{6}}','13 − 10 = {{3}}','18 − 10 = {{8}}','11 − 10 = {{1}}','20 − 10 = {{10}}','19 − 10 = {{9}}'],3),
   CH('4. Circle the right answer. (3 marks)',[['12 − 5 =',['7','8'],0],['17 − 9 =',['9','8'],1],['14 − 7 =',['7','6'],0]])),
  pg('Topic Test: Subtraction (2)','Answer every question. Add up your marks from both pages.','Check missing numbers, counting back and word problems.',
   F('5. Missing numbers. (4 marks)',['12 − {{4}} = 8','{{15}} − 5 = 10','19 − {{9}} = 10','{{9}} − 3 = 6'],2),
   F('6. Fact family. Use 7 + 5 = 12. (3 marks)',['5 + 7 = {{12}}','12 − 5 = {{7}}','12 − 7 = {{5}}'],3),
   WP('7. Word problems. (6 marks: 2 each)',['There are 15 children in the park. 6 go home. {{9}} children are still there.','Ammi made 20 samosas. We ate 12. {{8}} samosas are left.','Hamza had 11 balloons. 3 popped. He has {{8}} balloons.']),
   F('8. True or false? Write T or F. (4 marks)',['10 − 4 = 6 {{T}}','15 − 8 = 6 {{F}}','20 − 9 = 11 {{T}}','13 − 5 = 9 {{F}}'],2),
   HOW),
  pg('Word Mat: Subtraction','Keep this mat on the table while you work. Read the words together.','Know the words and ways to subtract within 20.',
   NO('<b>Take away words</b><br><b>take away</b> · <b>minus</b> (−) · <b>subtract</b> · <b>left</b> · <b>fewer</b> · <b>less</b> · <b>difference</b> · <b>how many more?</b>'),
   CN(['cookie','cookie'],'Taking away means some go and we count what is left. 7 biscuits, eat 3, 4 are left: 7 − 3 = 4.','Taking away'),
   {t:'numline'},
   NO('<b>Ways to subtract</b><br>1. Cross out pictures and count what is left.<br>2. Count back on a number line: 12 − 3 → 11, 10, 9.<br>3. Use a fact family: 9 + 6 = 15, so 15 − 6 = 9 and 15 − 9 = 6.<br>4. Take away 10: 17 − 10 = 7.'),
   BK(['take away','minus','subtract','left','fewer','count back','difference','equals']),
   DR('Draw 12 circles. Cross out 5. Write the sum.',110))]);
});
