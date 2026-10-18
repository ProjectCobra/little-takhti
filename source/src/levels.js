/* ---------- quiz levels: easy, medium, hard, with varied question types ---------- */
const LV={easy:{n:8,opts:3,hints:3,speed:20,label:'Easy',ur:'آسان',desc:'3 choices, extra time'},
 medium:{n:10,opts:4,hints:2,speed:12,label:'Medium',ur:'درمیانہ',desc:'4 choices, some new question types'},
 hard:{n:12,opts:4,hints:1,speed:9,label:'Hard',ur:'مشکل',desc:'Tricky choices, word problems, odd one out'}};
const NAMES=['Ali','Ayesha','Hamza','Fatima','Bilal','Zainab','Usman','Hira','Ahmed','Maryam'];
const THINGS=['mangoes','kites','marbles','samosas','crayons','balloons','stickers','oranges','pencils','biscuits'];
const pickOne=a=>a[Math.floor(Math.random()*a.length)];
const isNum=x=>/^\d+$/.test(String(x));
function closeNums(a,k=3){const c=uniq([a+1,a-1,a+2,a-2,a+10,a-10,a+3].filter(x=>x>=0&&x!==a));return shuffle(c.slice(0,5)).slice(0,k).map(String)}
function farNums(a,k=2){const c=uniq([a+5,a+8,Math.max(0,a-6),a+12,a*2+3].filter(x=>x>=0&&x!==a));return shuffle(c).slice(0,k).map(String)}
/* fewer, more obviously wrong choices for easy */
function easyOpts(q){const o=q.opts.filter(x=>x!==q.ans);let d=isNum(q.ans)?farNums(+q.ans):shuffle(o).slice(0,2);if(d.length<2)d=shuffle(o).slice(0,2);return {...q,opts:[q.ans,...d].slice(0,3)}}
/* closer, more confusable choices for hard */
function hardOpts(q){if(isNum(q.ans)&&q.opts.every(isNum))return {...q,opts:[q.ans,...closeNums(+q.ans)]};return q}
const ARITH=/^(?:<[^>]+>)?\s*(\d+)\s*([+\-−×x])\s*(\d+)\s*=\s*\{\{(\d+)\}\}\s*$/;
function variants(r,base,ur,lv){const out=[],add=x=>{if(x&&x.opts&&x.opts.length>=2&&x.opts.includes(x.ans))out.push(x)};
 const Y=ur?'ہاں':'Yes',N=ur?'نہیں':'No';
 base.forEach(q=>{
  /* 1. reverse matching: give the answer, ask for the clue */
  if(q.kind==='match'&&q.lefts.length>=3){const others=shuffle(q.lefts.filter(x=>x!==q.l)).slice(0,3);
   add({q:`<span class="qbl"></span> <span class="qarrow">${ur?'←':'→'}</span> ${q.r}`,opts:[q.l,...others],ans:q.l,sub:ur?'الٹا سوچیں: کون سا اس کے ساتھ جاتا ہے؟':'Think backwards: which one goes with this?',exp:`<b class="exa">${q.l}</b> ${ur?'←':'→'} ${q.r}`,kind:'rev',story:q.story})}
  /* 2. is this correct? (yes / no) */
  if(q.kind==='fill'&&q.q.includes('qbl')){const wrong=q.opts.filter(x=>x!==q.ans);const right=Math.random()<.45||!wrong.length;const cand=right?q.ans:pickOne(wrong);
   add({q:q.q.replace('<span class="qbl"></span>',`<b class="tfw">${cand}</b>`),opts:[Y,N],ans:right?Y:N,sub:ur?'کیا یہ درست ہے؟ ہاں یا نہیں چنیں۔':'Is this correct? Select Yes or No.',exp:q.exp,kind:'tf',story:q.story})}
  /* 3. maths: missing part, bigger numbers, word problems, two steps */
  const m=!ur&&q.kind==='fill'&&ARITH.exec(String(q.raw).replace(/<[^>]+>/g,'').trim());
  if(m){const a=+m[1],op=m[2],b=+m[3],c=+m[4],plus=op==='+',minus=op==='-'||op==='−',times=op==='×'||op==='x';
   add({q:`${a} ${op} <span class="qbl"></span> = ${c}`,opts:[String(b),...closeNums(b)],ans:String(b),sub:'Find the missing number.',exp:`${a} ${op} <b class="exa">${b}</b> = ${c}`,kind:'missing'});
   if(lv==='hard'&&a>=2&&b>=1){const nm=pickOne(NAMES),th=pickOne(THINGS),he=['Ayesha','Fatima','Zainab','Hira','Maryam'].includes(nm)?'She':'He';
    if(plus)add({q:`${nm} has ${a} ${th}. ${he} gets ${b} more. How many ${th} does ${he.toLowerCase()} have now?`,opts:[String(c),...closeNums(c)],ans:String(c),sub:'Word problem: read carefully.',exp:`${a} + ${b} = <b class="exa">${c}</b> ${th}`,kind:'word'});
    if(minus)add({q:`${nm} had ${a} ${th} and gave ${b} to a friend. How many ${th} are left?`,opts:[String(c),...closeNums(c)],ans:String(c),sub:'Word problem: read carefully.',exp:`${a} − ${b} = <b class="exa">${c}</b> ${th}`,kind:'word'});
    if(times)add({q:`There are ${a} plates with ${b} ${th} on each plate. How many ${th} are there in all?`,opts:[String(c),...closeNums(c)],ans:String(c),sub:'Word problem: read carefully.',exp:`${a} × ${b} = <b class="exa">${c}</b> ${th}`,kind:'word'});
    if(plus){const d=1+Math.floor(Math.random()*4),s=c+d;add({q:`${a} + ${b} + ${d} = <span class="qbl"></span>`,opts:[String(s),...closeNums(s)],ans:String(s),sub:'Two steps: add the first two, then add the last one.',exp:`${a} + ${b} = ${c}, then ${c} + ${d} = <b class="exa">${s}</b>`,kind:'two'})}
    if(plus||minus){const A=a+10,C=plus?A+b:A-b;add({q:`${A} ${op} ${b} = <span class="qbl"></span>`,opts:[String(C),...closeNums(C)],ans:String(C),sub:'Bigger numbers: use what you know.',exp:`${A} ${op} ${b} = <b class="exa">${C}</b>`,kind:'big'})}}}
 });
 /* 3b. number sense for counting and number answers in maths */
 if(!ur&&['maths'].includes(SUB[r.sub].kind))base.filter(q=>isNum(q.ans)&&+q.ans<=50&&q.kind!=='fill').slice(0,4).forEach(q=>{const n=+q.ans;
  if(q.vis&&lv==='hard')add({q:'Count them, then add 1 more. How many now?',opts:[String(n+1),...closeNums(n+1)],ans:String(n+1),sub:'Two steps: count, then add one.',vis:q.vis,exp:`${n} and 1 more is <b class="exa">${n+1}</b>.`,kind:'more'});
  if(n>=1&&['nursery','kg','g1'].includes(SUB[r.sub].grade)){const after=Math.random()<.5;const t=after?n+1:n-1;add({q:`What number comes just ${after?'after':'before'} ${n}?`,opts:[String(t),...closeNums(t).filter(x=>x!==String(n)).concat(String(t+2)).slice(0,3)],ans:String(t),sub:'Think of the number line.',exp:`Just ${after?'after':'before'} ${n} comes <b class="exa">${t}</b>.`,kind:'nline'})}});
 /* 4. odd one out from sorting groups */
 const sorts=base.filter(q=>q.kind==='sort'&&q.cats.length>=2);
 if(sorts.length){const s0=sorts[0];s0.cats.forEach((cat,ci)=>{const inn=s0.words.filter((w,i)=>s0.ansIdx[i]===ci),outw=s0.words.filter((w,i)=>s0.ansIdx[i]!==ci);
  if(inn.length>=3&&outw.length){const odd=pickOne(outw),oc=s0.cats[s0.ansIdx[s0.words.indexOf(odd)]];
   add({q:ur?`کون سا "${cat}" میں نہیں جاتا؟`:`Which one does NOT belong in "${cat}"?`,opts:[odd,...shuffle(inn).slice(0,3)],ans:odd,sub:ur?'غور سے دیکھیں، ایک الگ ہے۔':'Odd one out: three go together, one does not.',exp:`"${odd}" ${ur?'یہاں جاتا ہے:':'goes in'} <b class="exa">${oc}</b>.`,kind:'odd'})}})}
 /* 5. odd one out from matching pairs */
 const mt=base.find(q=>q.kind==='match'&&q.rights.length>=4);
 if(mt&&lv==='hard'){const i=Math.floor(Math.random()*mt.lefts.length),wrongR=pickOne(mt.rights.filter((_,j)=>j!==i));
  add({q:`${mt.lefts[i]} <span class="qarrow">${ur?'←':'→'}</span> ${wrongR}`,opts:[Y,N],ans:N,sub:ur?'کیا یہ جوڑا درست ہے؟':'Is this a correct pair? Select Yes or No.',exp:`${mt.lefts[i]} ${ur?'←':'→'} <b class="exa">${mt.rights[i]}</b>`,kind:'tf'})}
 return out}
function levelQs(r,lv){const L=LV[lv]||LV.medium,ur=!!SUB[r.sub].rtl,base=buildQuiz(r).map(q=>({...q}));
 let pool;
 if(lv==='easy')pool=shuffle(base.filter(q=>q.kind!=='sort'||q.opts.length<=3)).slice(0,L.n).map(easyOpts);
 else{const v=mixKinds(variants(r,base,ur,lv),lv==='hard'?3:2);const take=lv==='hard'?Math.min(Math.ceil(L.n*.6),v.length):Math.min(3,v.length);
  pool=shuffle(base).slice(0,L.n-take).map(q=>lv==='hard'?hardOpts(q):q).concat(v.slice(0,take))}
 if(pool.length<L.n)pool=pool.concat(shuffle(base).filter(q=>!pool.includes(q)).slice(0,L.n-pool.length));
 return shuffle(pool).slice(0,L.n).map(fixOpts)}
/* remove duplicate choices; top numeric questions back up with nearby numbers */
function fixOpts(q){let o=uniq(q.opts.map(String));const want=Math.min(q.opts.length,4);if(!o.includes(String(q.ans)))o=[String(q.ans),...o].slice(0,want);
 if(o.length<want&&isNum(q.ans)){const a=+q.ans;for(const d of [1,-1,2,-2,3,-3,5,10,-5]){const v=a+d;if(v>=0&&!o.includes(String(v)))o.push(String(v));if(o.length>=want)break}}
 return o.length===q.opts.length&&o.every((x,i)=>x===String(q.opts[i]))?q:{...q,opts:o}}
/* spread question types: round-robin by kind, at most `cap` of each */
function mixKinds(list,cap){const by={};shuffle(list).forEach(q=>(by[q.kind]=by[q.kind]||[]).push(q));const ks=shuffle(Object.keys(by)),out=[];for(let i=0;i<cap;i++)ks.forEach(k=>{if(by[k][i])out.push(by[k][i])});return out}
const levelOf=s=>{const v=store.get('level',null);return LV[v]?v:(['nursery','kg'].includes(s.grade)?'easy':'medium')};
