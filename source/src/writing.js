/* ---------- handwriting practice: English on four lines, Urdu on copy lines, Maths on a square grid ---------- */
/* FL: four-line English strips. mode 'rep' = model then traced copies on one line; 'copy' = model line, trace line, empty line; 'free' = empty lines only */
const FL=(h,items,mode,size)=>({t:"fl",h,items,mode:mode||"rep",size:size||"med"});
/* UL: Urdu copy lines, same modes, written right to left */
const UL=(h,items,mode)=>({t:"ul",h,items,mode:mode||"rep"});
/* GRD: maths square grid. Each row is a list of cells: "5" written, "~5" to trace, "{{5}}" to fill in, "" empty */
const GRD=(h,rows,o)=>({t:"grd",h,rows,...(o||{})});

const WCOLS=20;
const pad=(cells)=>cells.concat(Array(Math.max(0,WCOLS-cells.length)).fill('')).slice(0,WCOLS);
const digits=(n,trace)=>String(n).split('').map(c=>(trace?'~':'')+c);
/* numbers in a row, each followed by an empty cell */
const numRow=(list,mk)=>pad(list.flatMap(n=>[...digits(n).map(c=>mk(n,c)),'']));
/* vertical sums side by side: [[a,'+',b], ...]; answers become blanks */
function vsums(list,width){const w=width||4,rows=[[],[],[],[]];
 list.forEach(([a,op,b])=>{const ans=op==='+'?a+b:op==='−'?a-b:a*b;const A=String(a).padStart(w-1,' '),B=String(b).padStart(w-1,' '),C=String(ans).padStart(w-1,' ');
  rows[0].push('',...A.split('').map(c=>c===' '?'':c),'');rows[1].push(op,...B.split('').map(c=>c===' '?'':c),'');
  rows[2].push(...Array(w+1).fill('_'));rows[3].push('',...C.split('').map(c=>c===' '?'':'{{'+c+'}}'),'')});
 return rows.map(r=>pad(r))}
const blankRows=n=>Array.from({length:n},()=>pad([]));
const tableRows=(t,from,to,trace)=>Array.from({length:to-from+1},(_,i)=>{const k=from+i,s=`${t}×${k}=`;return pad([...s.split('').map(c=>(trace?'~':'')+c),...digits(t*k).map(c=>trace?'~'+c:'{{'+c+'}}')])});

const free=n=>[FL("",Array(n).fill(""),"free")];
const ufree=n=>[UL("",Array(n).fill(""),"free")];
const chunk=(a,n)=>a.reduce((o,x,i)=>(i%n?o[o.length-1].push(x):o.push([x]),o),[]);
const CAPS="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),SMALL="abcdefghijklmnopqrstuvwxyz".split('');
const UR_ABC=["ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ","د","ڈ","ذ","ر","ڑ","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ہ","ھ","ء","ی","ے"];
const UR_NAMES={"ا":"alif","ب":"bay","پ":"pay","ت":"tay","ٹ":"ttay","ث":"say","ج":"jeem","چ":"chay","ح":"bari hay","خ":"khay","د":"daal","ڈ":"ddaal","ذ":"zaal","ر":"ray","ڑ":"rray","ز":"zay","ژ":"zhay","س":"seen","ش":"sheen","ص":"suaad","ض":"zuaad","ط":"toay","ظ":"zoay","ع":"ain","غ":"ghain","ف":"fay","ق":"qaaf","ک":"kaaf","گ":"gaaf","ل":"laam","م":"meem","ن":"noon","و":"wao","ہ":"choti hay","ھ":"do chashmi hay","ء":"hamza","ی":"choti yay","ے":"bari yay"};
/* 1 to 100 chart: each number takes two boxes */
const chart=blank=>{const rows=[];for(let r=0;r<10;r++){const row=[];for(let c=1;c<=10;c++){const n=r*10+c;if(n===100)continue;const d=String(n).padStart(2,' ').split('');row.push(...d.map(x=>x===' '?'':blank(n)?'{{'+x+'}}':x))}rows.push(pad(row))}rows.push(pad(['{{1}}','{{0}}','{{0}}']));return rows};
const sumRow=(a,op,b,trace)=>{const ans=op==='+'?a+b:a-b;return pad([...digits(a,trace),(trace?'~':'')+op,...digits(b,trace),(trace?'~':'')+'=',...digits(ans).map(c=>trace?'~'+c:'{{'+c+'}}')])};
const WRITE={
 english:{
  nursery:[...chunk(CAPS.slice(0,25),5).map(g=>pg(`Capital Letters ${g[0]} to ${g[g.length-1]}`,"Trace each letter, then write it on the empty line.",`Write capital letters ${g[0]} to ${g[g.length-1]} on four lines.`,FL("",g,"rep","big"))),
   pg("Capital Letter Z and My Name","Trace Z. Then write your name on the lines.","Write capital Z and write own name.",FL("",["Z"],"rep","big"),FL("My name:",[""],"free","big"),FL("",[""],"free","big"),FL("",[""],"free","big"),FL("",[""],"free","big"),FL("",[""],"free","big"),FL("",[""],"free","big"))],
  kg:[...chunk(SMALL.slice(0,25),5).map(g=>pg(`Small Letters ${g[0]} to ${g[g.length-1]}`,"Trace, then write on the empty line. Small letters sit between the blue lines.",`Write small letters ${g[0]} to ${g[g.length-1]} on four lines.`,FL("",g,"rep","big"))),
   pg("Small z and Capital Pairs","Trace, then write on the empty line.","Write z and capital and small letter pairs.",FL("",["z","Aa","Bb","Cc","Dd"],"rep","big")),
   pg("Three Letter Words","Trace the words, then write them on the empty line.","Write CVC words neatly.",FL("",["cat","hat","pen","hen","pig"],"rep","big")),
   pg("More Short Words","Trace the words, then write them on the empty line.","Write CVC words neatly.",FL("",["sun","box","bed","mug","bus"],"rep","big"))],
  g1:[
   pg("Tricky Words","Trace each word, then write it on the empty line.","Write common sight words neatly.",FL("",["the","was","said","they","have","what","were"],"rep")),
   pg("Days of the Week","Copy each day. Remember the capital letter.","Spell and write the days of the week.",FL("",["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"rep")),
   pg("My First Sentences","Read, trace, then write each sentence twice.","Copy short sentences with capitals and full stops.",FL("",["I can run fast.","The cat is on the mat.","We go to school."],"copy")),
   pg("Sentences About Home","Read, trace, then write each sentence twice.","Copy short sentences with capitals and full stops.",FL("",["Ammi is in the kitchen.","My bag is red.","I like to read books."],"copy")),
   pg("Asking Sentences","Read, trace, then write each question twice.","Copy questions with question marks.",FL("",["What is your name?","Where is my pencil?","Can you see the moon?"],"copy")),
   pg("Write About You","Write sentences about yourself.","Write simple sentences independently.",NO("Start with a capital letter. End with a full stop."),...free(14))],
  g2:[
   pg("Months of the Year","Copy each month neatly.","Spell and write the months of the year.",FL("",["January","February","March","April","May","June"],"rep")),
   pg("More Months","Copy each month neatly.","Spell and write the months of the year.",FL("",["July","August","September","October","November","December"],"rep")),
   pg("Neat Sentences","Read, trace, then write each sentence twice.","Copy longer sentences neatly.",FL("",["The sun rises in the east.","Birds build nests in trees.","We drink milk every day."],"copy")),
   pg("Commas in Lists","Read, trace, then write each sentence twice.","Copy sentences with commas in lists.",FL("",["I like red, blue and green.","We ate rice, daal and salad.","Hira has a cat and a fish."],"copy")),
   pg("Speech Marks","Read, trace, then write each sentence twice.","Copy sentences with speech marks.",FL("",["\"Come here,\" said Ammi.","\"I am hungry,\" said Ali.","\"Let's play,\" said Sara."],"copy")),
   pg("My Weekend","Write about your weekend.","Write sentences independently with correct punctuation.",NO("Use words like first, then, next and last."),...free(14))],
  g3:[
   pg("Paragraph: Pakistan","Read the paragraph. Copy it neatly on the lines.","Copy a paragraph with neat, even handwriting.",PA("Pakistan is our country. It has high mountains, long rivers and busy cities. Its capital is Islamabad."),...free(12)),
   pg("Paragraph: The Mango","Read the paragraph. Copy it neatly on the lines.","Copy a paragraph with neat, even handwriting.",PA("The mango is the national fruit of Pakistan. It is sweet and juicy. Many mangoes grow in Multan."),...free(12)),
   pg("Paragraph: Rainy Day","Read the paragraph. Copy it neatly on the lines.","Copy a paragraph with neat, even handwriting.",PA("Dark clouds filled the sky. Soon it began to rain. The children ran inside and watched from the window."),...free(12)),
   pg("Joining Sentences","Read, trace, then write each sentence twice.","Copy compound sentences neatly.",FL("",["It was hot, so we swam.","I was tired, but I won.","We stayed in because it rained."],"copy")),
   pg("Tricky Spellings","Trace each word, then write it on the empty line.","Practise spelling tricky words.",FL("",["because","beautiful","different","favourite","neighbour","library","surprise"],"rep")),
   pg("My Favourite Place","Write a short paragraph about your favourite place.","Write a paragraph with a topic sentence.",NO("Start with a topic sentence. Add two or three details. End with how you feel."),...free(13))]
 },
 urdu:{
  nursery:chunk(UR_ABC,5).map(g=>pg(`حروف: ${g[0]} سے ${g[g.length-1]}|Letters ${UR_NAMES[g[0]]} to ${UR_NAMES[g[g.length-1]]}`,"حرف کو دیکھیں، اس پر لکھیں، پھر خالی لائن پر خود لکھیں۔",`Write Urdu letters ${UR_NAMES[g[0]]} to ${UR_NAMES[g[g.length-1]]}.`,UL("",g))),
  kg:[
   pg("دو حرفی الفاظ|Two letter words","لفظ پر لکھیں، پھر خالی لائن پر خود لکھیں۔","Write two letter Urdu words.",UL("",["آم","اب","بس","دل","نل"])),
   pg("مزید دو حرفی الفاظ|More two letter words","لفظ پر لکھیں، پھر خالی لائن پر خود لکھیں۔","Write two letter Urdu words.",UL("",["گل","جب","کل","ہم","تم"])),
   pg("تین حرفی الفاظ|Three letter words","لفظ پر لکھیں، پھر خالی لائن پر خود لکھیں۔","Write three letter Urdu words.",UL("",["کتا","بلی","گھر","میز","قلم"])),
   pg("مزید تین حرفی الفاظ|More three letter words","لفظ پر لکھیں، پھر خالی لائن پر خود لکھیں۔","Write three letter Urdu words.",UL("",["سیب","دودھ","پھل","مور","چاند"]))],
  g1:[
   pg("گھر کے الفاظ|Words at home","لفظ پر لکھیں، پھر خالی لائن پر خود لکھیں۔","Write everyday Urdu words neatly.",UL("",["امی","ابو","کتاب","کرسی","پانی"])),
   pg("رنگوں کے نام|Colour words","لفظ پر لکھیں، پھر خالی لائن پر خود لکھیں۔","Write Urdu colour words neatly.",UL("",["لال","نیلا","پیلا","سبز","سفید"])),
   pg("چھوٹے جملے|Short sentences","جملہ پڑھیں، اس پر لکھیں، پھر خود لکھیں۔","Copy short Urdu sentences.",UL("",["یہ میرا گھر ہے۔","آم میٹھا ہے۔","بلی دودھ پیتی ہے۔"],"copy")),
   pg("مزید جملے|More sentences","جملہ پڑھیں، اس پر لکھیں، پھر خود لکھیں۔","Copy short Urdu sentences.",UL("",["میں اسکول جاتا ہوں۔","آسمان نیلا ہے۔","ہم پارک میں کھیلتے ہیں۔"],"copy"))],
  g2:[
   pg("دنوں کے نام|Days of the week","ہر دن کا نام صاف لکھیں۔","Write the days of the week in Urdu.",UL("",["پیر","منگل","بدھ","جمعرات","جمعہ"])),
   pg("خوش خطی: جملے|Neat sentences","جملہ پڑھیں، اس پر لکھیں، پھر خود لکھیں۔","Copy Urdu sentences neatly.",UL("",["پاکستان ہمارا وطن ہے۔","صبح سویرے اٹھنا اچھا ہے۔","درخت ہمیں سایہ دیتے ہیں۔"],"copy")),
   pg("خوش خطی: مزید جملے|More neat sentences","جملہ پڑھیں، اس پر لکھیں، پھر خود لکھیں۔","Copy Urdu sentences neatly.",UL("",["ہمیں بڑوں کا ادب کرنا چاہیے۔","بارش کے بعد موسم ٹھنڈا ہو گیا۔","میری امی مزے کا کھانا پکاتی ہیں۔"],"copy")),
   pg("اپنے بارے میں لکھیں|Write about you","اپنے بارے میں چند جملے لکھیں۔","Write Urdu sentences independently.",...ufree(11))],
  g3:[
   pg("پیراگراف: ہمارا ملک|Paragraph: our country","پیراگراف پڑھیں اور لائنوں پر صاف لکھیں۔","Copy an Urdu paragraph neatly.",PA("ہمارا ملک پاکستان بہت خوبصورت ہے۔ اس کے شمال میں اونچے پہاڑ ہیں۔ دریائے سندھ اس کا سب سے بڑا دریا ہے۔"),...ufree(9)),
   pg("پیراگراف: میرا اسکول|Paragraph: my school","پیراگراف پڑھیں اور لائنوں پر صاف لکھیں۔","Copy an Urdu paragraph neatly.",PA("میرا اسکول بہت اچھا ہے۔ اس میں ایک بڑا میدان ہے۔ ہمارے استاد ہمیں محنت سے پڑھاتے ہیں۔"),...ufree(9)),
   pg("خوش خطی: لمبے جملے|Longer sentences","جملہ پڑھیں، اس پر لکھیں، پھر خود لکھیں۔","Copy longer Urdu sentences neatly.",UL("",["محنت کرنے والا ہمیشہ کامیاب ہوتا ہے۔","ہمیں پانی ضائع نہیں کرنا چاہیے۔","کتابیں ہماری بہترین دوست ہیں۔"],"copy")),
   pg("مضمون: میرا پسندیدہ کھیل|Essay: my favourite game","اپنے پسندیدہ کھیل پر چند جملے لکھیں۔","Write a short Urdu paragraph independently.",...ufree(11))]
 },
 maths:{
  nursery:[
   pg("Numbers 1 to 5","Trace each number, then write it in the empty boxes.","Write numbers 1 to 5 in boxes.",GRD("",[1,2,3,4,5].flatMap(d=>[pad([String(d),'',...Array(9).fill(0).flatMap(()=>['~'+d,''])].slice(0,WCOLS)),pad([]),pad([])]))),
   pg("Numbers 6 to 10","Trace each number, then write it in the empty boxes.","Write numbers 6 to 10 in boxes.",GRD("",[6,7,8,9].flatMap(d=>[pad([String(d),'',...Array(9).fill(0).flatMap(()=>['~'+d,''])].slice(0,WCOLS)),pad([]),pad([])]).concat([pad(['1','0','',...Array(5).fill(0).flatMap(()=>['~1','~0',''])]),pad([]),pad([])]))),
   pg("Count and Write 1 to 10","Trace the numbers in order. Then write them again.","Write numbers 1 to 10 in order.",GRD("",[numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>'~'+c),pad([]),numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>'{{'+c+'}}'),pad([]),numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>'~'+c),pad([]),numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>'{{'+c+'}}'),pad([]),pad(Array(10).fill(0).flatMap(()=>['~0',''])),pad([]),...blankRows(4)])),
   pg("Fill the Missing Numbers","Write the missing numbers in the boxes.","Write missing numbers to 10.",GRD("",[numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>[2,5,8].includes(n)?'{{'+c+'}}':c),pad([]),numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>[3,6,9,10].includes(n)?'{{'+c+'}}':c),pad([]),numRow([1,2,3,4,5,6,7,8,9,10],(n,c)=>[1,4,7].includes(n)?'{{'+c+'}}':c),pad([]),numRow([10,9,8,7,6,5,4,3,2,1],(n,c)=>[9,6,2].includes(n)?'{{'+c+'}}':c),pad([]),numRow([10,9,8,7,6,5,4,3,2,1],(n,c)=>[8,5,3,1].includes(n)?'{{'+c+'}}':c),pad([]),...blankRows(4)]))],
  kg:[
   pg("Numbers 11 to 15","Trace each number, then write it on your own.","Write numbers 11 to 15.",GRD("",[11,12,13,14,15].flatMap(n=>[pad([...digits(n),'',...Array(5).fill(0).flatMap(()=>[...digits(n,1),''])]),pad([]),pad([])]))),
   pg("Numbers 16 to 20","Trace each number, then write it on your own.","Write numbers 16 to 20.",GRD("",[16,17,18,19,20].flatMap(n=>[pad([...digits(n),'',...Array(5).fill(0).flatMap(()=>[...digits(n,1),''])]),pad([]),pad([])]))),
   pg("Numbers 1 to 50","Fill in the missing numbers.","Write numbers to 50 in order.",GRD("",[...chart(n=>n%3===0||n%10===7).slice(0,5),pad([]),...blankRows(4)],{group:2})),
   pg("Writing Sums","Trace the sums, then write the answers.","Write addition sentences in boxes.",GRD("",[[1,2],[2,3],[4,1],[3,3],[5,2],[4,4],[6,3]].flatMap(([a,b])=>[pad([...sumRow(a,'+',b,true).slice(0,6),'',...sumRow(a,'+',b,false).slice(0,6)]),pad([])]))),
   pg("Take Away Sums","Trace the sums, then write the answers.","Write subtraction sentences in boxes.",GRD("",[[5,2],[6,1],[8,3],[7,4],[9,5],[10,6],[10,3]].flatMap(([a,b])=>[pad([...sumRow(a,'−',b,true).slice(0,7),'',...sumRow(a,'−',b,false).slice(0,7)]),pad([])]))),
   pg("Count in 2s and 10s","Continue each pattern in the boxes.","Write counting patterns.",GRD("",[numRow([2,4,6,8,10,12],(n,c)=>n>6?'{{'+c+'}}':c),pad([]),numRow([10,20,30,40,50],(n,c)=>n>20?'{{'+c+'}}':c),pad([]),numRow([1,3,5,7,9,11],(n,c)=>n>5?'{{'+c+'}}':c),pad([]),numRow([20,19,18,17,16,15],(n,c)=>n<18?'{{'+c+'}}':c),pad([]),...blankRows(4)]))],
  g1:[
   pg("Numbers to 100","Write the missing numbers in the boxes.","Write numbers to 100.",GRD("",[...chart(n=>n%4===0||n%10===5),pad([]),...blankRows(3)],{group:2})),
   pg("Counting in 2s, 5s and 10s","Continue each pattern in the boxes.","Write skip counting patterns.",GRD("",[numRow([2,4,6,8,10,12,14],(n,c)=>n>6?'{{'+c+'}}':c),pad([]),numRow([5,10,15,20,25,30],(n,c)=>n>15?'{{'+c+'}}':c),pad([]),numRow([10,20,30,40,50,60],(n,c)=>n>30?'{{'+c+'}}':c),pad([]),numRow([3,6,9,12,15,18],(n,c)=>n>9?'{{'+c+'}}':c),pad([]),numRow([100,90,80,70,60],(n,c)=>n<80?'{{'+c+'}}':c),pad([]),...blankRows(3)])),
   pg("Adding in Columns","Write the answer under each sum.","Add two-digit numbers in columns.",GRD("",[...vsums([[12,'+',5],[23,'+',14],[31,'+',26]]),pad([]),...vsums([[40,'+',35],[52,'+',17],[64,'+',23]]),pad([]),...vsums([[25,'+',42],[16,'+',71],[33,'+',33]])])),
   pg("Subtracting in Columns","Write the answer under each sum.","Subtract two-digit numbers in columns.",GRD("",[...vsums([[18,'−',5],[37,'−',12],[49,'−',26]]),pad([]),...vsums([[56,'−',34],[78,'−',41],[95,'−',23]]),pad([]),...vsums([[67,'−',45],[88,'−',62],[74,'−',30]])])),
   pg("Number Facts to 20","Trace the facts, then write the answers.","Write addition facts neatly.",GRD("",[[8,5],[9,4],[7,6],[6,6],[9,9],[8,7]].flatMap(([a,b])=>[pad([...sumRow(a,'+',b,true),'','',...sumRow(a,'+',b,false)]),pad([])]))),
   pg("The 2 Times Table","Trace the table, then write the answers.","Write the 2 times table.",GRD("",[...tableRows(2,1,5,true),pad([]),...tableRows(2,6,10,false),pad([]),...tableRows(10,1,3,false)]))],
  g2:[
   pg("Hundreds","Fill in the missing numbers.","Write numbers to 1000.",GRD("",[numRow([100,200,300,400],(n,c)=>n===300?'{{'+c+'}}':c),pad([]),numRow([500,600,700,800],(n,c)=>n>600?'{{'+c+'}}':c),pad([]),numRow([900,1000],(n,c)=>'{{'+c+'}}'),pad([]),numRow([250,350,450,550],(n,c)=>n>350?'{{'+c+'}}':c),pad([]),numRow([110,120,130,140],(n,c)=>n>120?'{{'+c+'}}':c),pad([]),...blankRows(3)])),
   pg("Adding with Carrying","Write the answer under each sum.","Add three-digit numbers with carrying.",GRD("",[...vsums([[146,'+',237],[258,'+',125],[319,'+',463]],4),pad([]),...vsums([[407,'+',286],[555,'+',178],[624,'+',249]],4),pad([]),...vsums([[138,'+',254],[276,'+',519],[365,'+',428]],4)])),
   pg("Subtracting with Borrowing","Write the answer under each sum.","Subtract three-digit numbers with borrowing.",GRD("",[...vsums([[352,'−',127],[481,'−',265],[630,'−',214]],4),pad([]),...vsums([[745,'−',318],[812,'−',456],[903,'−',521]],4),pad([]),...vsums([[524,'−',309],[671,'−',248],[860,'−',435]],4)])),
   pg("The 3 Times Table","Trace the table, then write the answers.","Write the 3 times table.",GRD("",[...tableRows(3,1,5,true),pad([]),...tableRows(3,6,10,false),pad([]),...blankRows(3)])),
   pg("The 4 Times Table","Trace the table, then write the answers.","Write the 4 times table.",GRD("",[...tableRows(4,1,5,true),pad([]),...tableRows(4,6,10,false),pad([]),...blankRows(3)])),
   pg("The 5 Times Table","Trace the table, then write the answers.","Write the 5 times table.",GRD("",[...tableRows(5,1,5,true),pad([]),...tableRows(5,6,10,false),pad([]),...blankRows(3)]))],
  g3:[
   pg("Four-Digit Addition","Write the answer under each sum.","Add four-digit numbers in columns.",GRD("",[...vsums([[1245,'+',2318],[3406,'+',1587],[2759,'+',4126]],5),pad([]),...vsums([[5038,'+',2694],[6172,'+',1849],[4365,'+',3578]],5),pad([]),...vsums([[2147,'+',3685],[1908,'+',4093],[3276,'+',2519]],5)])),
   pg("Four-Digit Subtraction","Write the answer under each sum.","Subtract four-digit numbers in columns.",GRD("",[...vsums([[5432,'−',2118],[6305,'−',3172],[8040,'−',2615]],5),pad([]),...vsums([[7215,'−',4386],[9000,'−',3457],[4621,'−',1798]],5),pad([]),...vsums([[6500,'−',2275],[7381,'−',4692],[5106,'−',3048]],5)])),
   pg("Multiplying in Columns","Write the answer under each sum.","Multiply two-digit numbers by one-digit numbers.",GRD("",[...vsums([[23,'×',3],[41,'×',2],[32,'×',4]],4),pad([]),...vsums([[15,'×',6],[27,'×',3],[18,'×',5]],4),pad([]),...vsums([[36,'×',2],[24,'×',4],[19,'×',3]],4)])),
   pg("The 6 Times Table","Trace the table, then write the answers.","Write the 6 times table.",GRD("",[...tableRows(6,1,5,true),pad([]),...tableRows(6,6,10,false),pad([]),...blankRows(3)])),
   pg("The 7 Times Table","Trace the table, then write the answers.","Write the 7 times table.",GRD("",[...tableRows(7,1,5,true),pad([]),...tableRows(7,6,10,false),pad([]),...blankRows(3)])),
   pg("The 8 and 9 Times Tables","Write the answers in the boxes.","Write the 8 and 9 times tables.",GRD("",[...tableRows(8,1,10,false),pad([]),...tableRows(9,1,5,false)]))]
 }
};
