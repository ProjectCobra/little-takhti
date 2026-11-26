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
