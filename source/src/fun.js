/* ---------- Play zone: daily challenge, stickers, mini games, story corner ---------- */
/* ---------- Parent tools: spelling list maker, test prep, progress report, reward charts ---------- */

/* word lists per grade, used by word search and the spelling bee */
const WORDS={
 nursery:['cat','sun','dog','hat','pen','bus','cup','egg','box','red'],
 kg:['fish','frog','milk','duck','ship','tree','book','star','cake','moon','rain','king'],
 g1:['apple','green','chair','house','mango','table','water','happy','plant','train','sleep','school'],
 g2:['garden','yellow','basket','summer','friend','teacher','kitchen','rainbow','bottle','animal','monkey','pencil'],
 g3:['beautiful','elephant','mountain','question','language','birthday','computer','festival','vegetable','tomorrow','different','important']};
const UR_LETTERS='ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ہ ی ے'.split(' ');

/* stickers: unlocked every 3 stars */
const STK=[['🪁','Kite','Kites fill the sky at Jashn-e-Baharaan.'],['🥭','Mango','The mango is our national fruit.'],['🐐','Markhor','The markhor is our national animal.'],['🌸','Jasmine','Jasmine is our national flower.'],['🏏','Cricket bat','Pakistan won the Cricket World Cup in 1992.'],['🏑','Hockey stick','Hockey is our national game.'],['🕌','Faisal Mosque','Faisal Mosque is in Islamabad.'],['🛺','Rickshaw','Rickshaws buzz through every city.'],['🚚','Truck art','Pakistani trucks are painted like moving art.'],['🏔️','K2','K2 is the second highest mountain in the world.'],['🐪','Camel','Camels cross the Thar and Cholistan deserts.'],['🦜','Parrot','Green parrots chatter in our gardens.'],['🍵','Chai','A cup of chai brings the family together.'],['🌙','Crescent','The crescent and star are on our flag.'],['🐬','Indus dolphin','The blind Indus dolphin lives in the Indus River.'],['🦅','Shaheen','Iqbal wrote about the brave shaheen.'],['🌾','Wheat','Wheat from Punjab makes our roti.'],['🚂','Khyber train','Trains have crossed the Khyber Pass for over 100 years.'],['🦚','Peacock','Peacocks dance in Tharparkar.'],['🍉','Watermelon','A cold watermelon on a hot day.'],['🌴','Date palm','Dates grow in Sindh and Balochistan.'],['🌊','Arabian Sea','Karachi is on the Arabian Sea.'],['🏰','Lahore Fort','The Lahore Fort is hundreds of years old.'],['🐆','Snow leopard','Snow leopards live in our northern mountains.'],['🍛','Biryani','Biryani is a favourite at every dawat.'],['🎨','Paint box','Every child is an artist.'],['📚','Books','Reading every day makes you smarter.'],['🚀','Rocket','Dream big and reach for the stars.'],['🏆','Trophy','You are a Little Takhti champion!'],['⭐','Gold star','A star for a superstar!']];
const STK_EVERY=3;
const dKey=()=>'daily-'+(activeChild()||'dev');
const todayStr=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const dailyDays=()=>store.get(dKey(),[]);
function dailyStreak(){const set=new Set(dailyDays());let d=new Date(),n=0;if(!set.has(todayStr()))d.setDate(d.getDate()-1);
 for(;;){const s=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');if(set.has(s)){n++;d.setDate(d.getDate()-1)}else break}return n}
function totalStars(){const a=activeChild();let t=0;
 if(a)Object.values(FAM.progress||{}).forEach(p=>{if(p.child===a&&!/^custom-/.test(p.res))t+=p.best||0});
 else Object.entries(store.get('best',{})).forEach(([k,v])=>{if(!/^custom-/.test(k))t+=v||0});
 return t+dailyDays().length}
const stickersUnlocked=()=>Math.min(STK.length,Math.floor(totalStars()/STK_EVERY));

/* called by endGame */
function funAfter(r,stars){let note='';
 if(/^qx-daily-/.test(r.id)&&stars>0){const d=dailyDays();if(!d.includes(todayStr())){d.push(todayStr());store.set(dKey(),d.slice(-400))}note+=`<span class="fn-pill">${ic.flame}${dailyStreak()} day streak</span>`}
 const seenK='stk-seen-'+(activeChild()||'dev'),seen=store.get(seenK,0),now=stickersUnlocked();
 if(now>seen){store.set(seenK,now);const s=STK[now-1];note+=`<a class="fn-pill stk" href="#stickers"><span class="emo">${s[0]}</span>New sticker: ${s[1]}!</a>`}
 if(note){const c=document.querySelector('.endc');if(c)c.insertAdjacentHTML('afterbegin',`<div class="fn-note">${note}</div>`)}}

/* daily challenge and custom quizzes registered as quiz-only resources */
function regFun(){
 LIVE.forEach(g=>{const s=subjectsOf(g.id)[0];if(!s)return;const r={id:`qx-daily-${g.id}`,sub:s.id,title:'Daily Challenge',topic:'Daily Challenge',en:'',pages:[],desc:'Mixed questions from every subject. A new set every time.',obj:[],quizOnly:true,daily:true,
  gen:()=>{const pool=RES.filter(x=>!x.set&&!x.quizOnly&&SUB[x.sub].grade===g.id&&!SUB[x.sub].rtl&&hasQuiz(x));const out=[];shuffle(pool).forEach(x=>out.push(...shuffle(buildQuiz(x)).filter(q=>!q.vis||true).slice(0,2)));return shuffle(out).slice(0,16)}};RID[r.id]=r})}

/* ---------- Play zone hub ---------- */
const GAMES=[['ws','Word search','Find the hidden words in the grid.','🔤'],['mem','Memory match','Flip cards and find the pairs.','🃏'],['race','Times table race','How many can you answer in 60 seconds?','⏱️'],['bee','Spelling bee','Listen and choose the right spelling.','🐝'],['pop','Urdu letter pop','Pop the bubbles with the right letter.','🫧']];
function funHub(){const st=totalStars(),un=stickersUnlocked(),nx=Math.min(STK.length,un+1),need=nx*STK_EVERY-st,streak=dailyStreak(),done=dailyDays().includes(todayStr());
 app.innerHTML=`<div class="fz-hero"><div><span class="kick">${ic.game}Play zone</span><h1>Play, collect and learn</h1><p>Do the daily challenge, play games, read stories and fill your sticker book.</p>
  <div class="fz-stats"><span>${starSVG(true)}<b>${st}</b> stars</span><span>${ic.flame}<b>${streak}</b> day streak</span><span><span class="emo">🗂️</span><b>${un}/${STK.length}</b> stickers</span></div></div>
  <div class="fz-art" aria-hidden="true">${art('quiz')}</div></div>
 <a class="fz-daily${done?' done':''}" href="#play-qx-daily-${grade}"><span class="emo big">${done?'✅':'🎯'}</span><div><b>${done?'Daily challenge done! Play again?':'Today\'s daily challenge'}</b><small>${GR[grade].name} · mixed questions from every subject${done?'':' · keep your streak going'}</small></div><span class="btn sun">${ic.play}${done?'Again':'Play'}</span></a>
 <a class="fz-stk" href="#stickers"><div class="fz-stk-row">${STK.slice(0,8).map((s,i)=>`<span class="sk${i<un?' on':''}">${i<un?s[0]:'?'}</span>`).join('')}</div><div><b>Sticker book</b><small>${un>=STK.length?'You collected every sticker!':`${need} more star${need===1?'':'s'} to unlock the next sticker`}</small></div>${ic.arrow}</a>
 <div class="sec-h"><h2>Mini games</h2></div>
 <div class="fz-grid">${GAMES.map(([k,t,d,e])=>`<a class="fz-card g-${k}" href="#game-${k}"><span class="emo big">${e}</span><b>${t}</b><small>${d}</small>${store.get('gbest-'+k+'-'+grade,0)?`<span class="fz-best">Best: ${store.get('gbest-'+k+'-'+grade,0)}</span>`:''}</a>`).join('')}
  <a class="fz-card g-story" href="#stories"><span class="emo big">📖</span><b>Story corner</b><small>Read along stories with questions.</small></a></div>`}

function funBand(){const un=stickersUnlocked(),done=dailyDays().includes(todayStr());
 return `<section class="fz-band"><div class="fz-band-t"><span class="kick">${ic.game}Play zone</span><h2>Daily challenge, games, stories and stickers</h2><p>Five mini games, read-along stories and a sticker book of Pakistan to fill. Keep a daily streak going!</p>
 <div class="acts"><a class="btn sun lg" href="#play-qx-daily-${grade}">${ic.play}${done?'Play again':'Daily challenge'}</a><a class="btn lg" href="#fun">Open play zone</a></div></div>
 <div class="fz-band-g">${GAMES.map(([k,t,d,e])=>`<a class="fz-mini" href="#game-${k}"><span class="emo">${e}</span><span>${t}</span></a>`).join('')}<a class="fz-mini" href="#stories"><span class="emo">📖</span><span>Story corner</span></a><a class="fz-mini" href="#stickers"><span class="emo">🗂️</span><span>${un}/${STK.length} stickers</span></a></div></section>`}
function stickerBook(){const un=stickersUnlocked(),st=totalStars();
 app.innerHTML=`<div class="crumbs"><a href="#fun">Play zone</a>/<span>Sticker book</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Sticker book</span><h1>My Pakistan stickers</h1><p>Earn stars in quizzes, games and the daily challenge. Every ${STK_EVERY} stars unlock a new sticker. You have ${st} stars.</p></div></div>
 <div class="sbook">${STK.map((s,i)=>i<un?`<div class="sticker on"><span class="emo">${s[0]}</span><b>${s[1]}</b><small>${s[2]}</small></div>`:`<div class="sticker"><span class="emo q">?</span><b>${(i+1)*STK_EVERY} stars</b></div>`).join('')}</div>
 <div class="acts" style="margin-top:18px"><a class="btn sun" href="#play-qx-daily-${grade}">${ic.play}Earn stars: daily challenge</a><a class="btn" href="#quiz">All quizzes</a></div>`}

/* ---------- mini games ---------- */
let GM=null;
function gameShell(k,body){const g=GAMES.find(x=>x[0]===k);return `<div class="mg mg-${k}"><div class="mg-top"><a class="ibtn" href="#fun" aria-label="Back to the play zone">${ic.l}</a><span class="emo">${g[3]}</span><h1>${g[1]}<small>${GR[grade].name}</small></h1><span class="mg-score" id="mgs"></span></div>${body}</div>`}
function gBest(k,v){const key='gbest-'+k+'-'+grade,b=store.get(key,0);if(v>b){store.set(key,v);return true}return false}
function gAward(stars){/* mini game stars count toward stickers through a device-level tally */const k='games',best=store.get('best',{});const id='game-'+k+'-'+todayStr();if(stars>(best[id]||0)){best[id]=stars;store.set('best',best)}const a=activeChild();if(a)saveProgress(a,id,stars,3,stars*10,stars)}
function gameDone(k,msg,stars,score){const nb=gBest(k,score);gAward(stars);sfx.win&&sfx.win();if(stars>=2)confetti();
 const host=document.getElementById('mgb');host.innerHTML=`<div class="mg-end">${mascot(stars>=2?'happy':'think',true)}<div class="bigstars">${[1,2,3].map(i=>starSVG(i<=stars)).join('')}</div><h2>${msg}</h2>${nb?'<span class="newbest">New best!</span>':''}<div class="acts" style="justify-content:center"><button class="btn sun lg" data-gagain="${k}">${ic.play}Play again</button><a class="btn lg" href="#fun">More games</a></div></div>`;
 funAfterGames();window.scrollTo(0,0)}
function funAfterGames(){const seenK='stk-seen-'+(activeChild()||'dev'),seen=store.get(seenK,0),now=stickersUnlocked();if(now>seen){store.set(seenK,now);const s=STK[now-1];const e=document.querySelector('.mg-end');e&&e.insertAdjacentHTML('afterbegin',`<a class="fn-pill stk" href="#stickers"><span class="emo">${s[0]}</span>New sticker: ${s[1]}!</a>`)}}
function miniGame(k){clearInterval(GM&&GM.t);GM={k};const f={ws:wordSearch,mem:memoryMatch,race:tableRace,bee:spellBee,pop:letterPop}[k];if(!f)return funHub();f()}

/* word search */
function wordSearch(){const n={nursery:6,kg:7,g1:8,g2:9,g3:10}[grade]||8,diag=grade==='g3';
 const words=shuffle(WORDS[grade]||WORDS.g1).filter(w=>w.length<=n).slice(0,grade==='nursery'?4:grade==='kg'?5:6).map(w=>w.toUpperCase());
 let grid,placed;for(let tries=0;tries<60;tries++){grid=Array.from({length:n},()=>Array(n).fill(''));placed=[];let ok=true;
  for(const w of words){let done=false;for(let a=0;a<120&&!done;a++){const dirs=[[0,1],[1,0]].concat(diag?[[1,1]]:[]);const [dr,dc]=dirs[Math.floor(Math.random()*dirs.length)];const r0=Math.floor(Math.random()*(n-(dr?w.length-1:0))),c0=Math.floor(Math.random()*(n-(dc?w.length-1:0)));
   let fits=true;for(let i=0;i<w.length;i++){const ch=grid[r0+dr*i][c0+dc*i];if(ch&&ch!==w[i]){fits=false;break}}if(fits){for(let i=0;i<w.length;i++)grid[r0+dr*i][c0+dc*i]=w[i];placed.push({w,cells:w.split('').map((_,i)=>(r0+dr*i)*n+(c0+dc*i))});done=true}}if(!done){ok=false;break}}if(ok)break}
 const AZ='ABCDEFGHIJKLMNOPRSTUVWY';grid=grid.map(row=>row.map(c=>c||AZ[Math.floor(Math.random()*AZ.length)]));
 GM={...GM,n,placed,found:[],first:null,start:Date.now()};
 app.innerHTML=gameShell('ws',`<div id="mgb"><p class="mg-help">Tap the first letter of a word, then the last letter.</p><div class="ws-wrap"><div class="ws-grid" style="--n:${n}">${grid.flat().map((c,i)=>`<button type="button" class="ws-c" data-wsc="${i}">${c}</button>`).join('')}</div>
  <ul class="ws-list">${placed.map(p=>`<li data-wsw="${p.w}">${p.w}</li>`).join('')}</ul></div></div>`);
 document.getElementById('mgs').textContent=`0/${placed.length}`}
function wsTap(i){const g=GM;if(!g||g.k!=='ws')return;const el=document.querySelector(`[data-wsc="${i}"]`);
 if(g.first===null){g.first=i;el.classList.add('sel');return}
 const a=g.first;g.first=null;document.querySelectorAll('.ws-c.sel').forEach(e=>e.classList.remove('sel'));
 const hit=g.placed.find(p=>!g.found.includes(p.w)&&((p.cells[0]===a&&p.cells[p.cells.length-1]===i)||(p.cells[0]===i&&p.cells[p.cells.length-1]===a)));
 if(hit){g.found.push(hit.w);hit.cells.forEach(c=>document.querySelector(`[data-wsc="${c}"]`).classList.add('got'));document.querySelector(`[data-wsw="${hit.w}"]`).classList.add('got');sfx.ok();speakW(hit.w.toLowerCase());
  document.getElementById('mgs').textContent=`${g.found.length}/${g.placed.length}`;
  if(g.found.length===g.placed.length){const s=Math.round((Date.now()-g.start)/1000);setTimeout(()=>gameDone('ws',`You found every word in ${s} seconds!`,s<90?3:s<180?2:1,Math.max(1,300-s)),600)}}
 else{sfx.no();el.classList.add('shake');setTimeout(()=>el.classList.remove('shake'),400)}}
const speakW=w=>{if(store.get('sound',true))speak([w],false)};

/* memory match */
function memPairs(){const subs=subjectsOf(grade).filter(s=>!s.rtl);const pairs=[];
 subs.forEach(s=>PAGES[s.id].forEach(p=>p.blocks.forEach(b=>{if(b.t==='match')b.left.forEach((l,i)=>{const r=b.right[i];if(l&&r&&String(l).length<26&&String(r).length<26&&!/[<{]/.test(l+r))pairs.push([String(l),String(r)])})})));
 const seen=new Set();return shuffle(pairs).filter(([l,r])=>{if(seen.has(l)||seen.has(r))return false;seen.add(l);seen.add(r);return true})}
function memoryMatch(){const np=grade==='nursery'?4:grade==='kg'?5:6;const pairs=memPairs().slice(0,np);
 const cards=shuffle(pairs.flatMap((p,i)=>[{t:p[0],p:i,s:'a'},{t:p[1],p:i,s:'b'}]));GM={...GM,cards,open:[],done:0,moves:0,np:pairs.length,lock:false};
 app.innerHTML=gameShell('mem',`<div id="mgb"><p class="mg-help">Flip two cards. Find each word and the card that goes with it.</p><div class="mem-grid">${cards.map((c,i)=>`<button type="button" class="mem-c" data-mem="${i}"><span class="mem-f">?</span><span class="mem-b">${esc(c.t)}</span></button>`).join('')}</div></div>`);
 document.getElementById('mgs').textContent='0 moves'}
function memTap(i){const g=GM;if(!g||g.k!=='mem'||g.lock)return;const el=document.querySelector(`[data-mem="${i}"]`);if(el.classList.contains('up')||el.classList.contains('got'))return;
 el.classList.add('up');g.open.push(i);if(g.open.length<2)return;g.moves++;document.getElementById('mgs').textContent=g.moves+' moves';
 const [a,b]=g.open;g.open=[];if(g.cards[a].p===g.cards[b].p){sfx.ok();[a,b].forEach(x=>document.querySelector(`[data-mem="${x}"]`).classList.add('got'));g.done++;
  if(g.done===g.np)setTimeout(()=>gameDone('mem',`All pairs found in ${g.moves} moves!`,g.moves<=g.np+3?3:g.moves<=g.np*2?2:1,Math.max(1,100-g.moves)),500)}
 else{g.lock=true;setTimeout(()=>{[a,b].forEach(x=>document.querySelector(`[data-mem="${x}"]`).classList.remove('up'));g.lock=false},900)}}

/* times table race (adding race for the youngest) */
function tableRace(pick){const young=['nursery','kg'].includes(grade);const tabs=grade==='g1'?[2,5,10]:grade==='g2'?[2,3,4,5,10]:[2,3,4,5,6,7,8,9,10];
 if(!young&&pick==null){app.innerHTML=gameShell('race',`<div id="mgb"><p class="mg-help">Choose a times table, then answer as many as you can in 60 seconds.</p><div class="race-pick">${tabs.map(t=>`<button type="button" class="btn lg" data-race="${t}">${t} times table</button>`).join('')}<button type="button" class="btn sun lg" data-race="0">Mixed</button></div></div>`);return}
 GM={...GM,tab:pick||0,score:0,left:60,ans:'',young};raceQ();
 app.innerHTML=gameShell('race',`<div id="mgb"><div class="race"><div class="race-t" id="rt">60</div><div class="race-q" id="rq"></div><div class="race-a" id="ra">&nbsp;</div>
  <div class="pad">${[1,2,3,4,5,6,7,8,9,'⌫',0,'✓'].map(k=>`<button type="button" data-pad="${k}">${k}</button>`).join('')}</div></div></div>`);
 raceDraw();GM.t=setInterval(()=>{if(!GM||GM.k!=='race'){return}GM.left--;const e=document.getElementById('rt');if(e)e.textContent=GM.left;if(GM.left<=0){clearInterval(GM.t);const s=GM.score;gameDone('race',`You got ${s} right in 60 seconds!`,s>=(young?12:15)?3:s>=(young?7:9)?2:s>0?1:0,s)}},1000)}
function raceQ(){const g=GM;if(g.young){const max=grade==='nursery'?5:10,a=Math.floor(Math.random()*(max))+0,b=Math.floor(Math.random()*(max-a+1));g.q=`${a} + ${b}`;g.a=a+b}else{const tabs=[2,3,4,5,6,7,8,9,10];const t=g.tab||tabs[Math.floor(Math.random()*(grade==='g2'?5:9))];const m=1+Math.floor(Math.random()*10);g.q=`${t} × ${m}`;g.a=t*m}g.ans=''}
function raceDraw(){const q=document.getElementById('rq'),a=document.getElementById('ra');if(q)q.textContent=GM.q+' = ?';if(a)a.innerHTML=GM.ans||'&nbsp;';const s=document.getElementById('mgs');if(s)s.textContent=GM.score+' right'}
function padTap(k){const g=GM;if(!g||g.k!=='race'||g.left<=0)return;if(k==='⌫')g.ans=g.ans.slice(0,-1);else if(k==='✓'){if(g.ans==='')return;if(+g.ans===g.a){g.score++;sfx.ok()}else{sfx.no();const a=document.getElementById('ra');a&&a.classList.add('shake');setTimeout(()=>a&&a.classList.remove('shake'),400)}raceQ()}else if(g.ans.length<3)g.ans+=k;
 if(k!=='✓'&&+g.ans===g.a&&String(g.a).length===g.ans.length){g.score++;sfx.ok();raceQ()}raceDraw()}

/* spelling bee */
function misspell(w,ur){const out=new Set(),L=w.split('');const V='aeiou';const sw=ur?[['س','ص'],['ت','ط'],['ز','ذ'],['ز','ض'],['ہ','ح'],['ک','ق'],['ا','ع']]:[];
 for(let t=0;t<60&&out.size<6;t++){const a=L.slice();const r=Math.random();const i=Math.floor(Math.random()*a.length);
  if(ur){const p=sw.find(([x,y])=>a.includes(x)||a.includes(y));if(p&&r<.6){const j=a.findIndex(c=>c===p[0]||c===p[1]);a[j]=a[j]===p[0]?p[1]:p[0]}else if(a.length>2&&r<.8){a.splice(i,1)}else if(i<a.length-1){[a[i],a[i+1]]=[a[i+1],a[i]]}}
  else if(r<.3&&i<a.length-1)[a[i],a[i+1]]=[a[i+1],a[i]];else if(r<.5&&a.length>3)a.splice(i,1);else if(r<.7)a.splice(i,0,a[i]);else if(V.includes(a[i]))a[i]=V[(V.indexOf(a[i])+1+Math.floor(Math.random()*4))%5];else a.splice(i,0,V[Math.floor(Math.random()*5)]);
  const s=a.join('');if(s!==w&&s.length>1)out.add(s)}return [...out]}
function spellBee(list,title){const words=shuffle(list||WORDS[grade]||WORDS.g1).slice(0,8);GM={...GM,words,i:0,right:0,list,title};beeQ()}
function beeQ(){const g=GM,w=g.words[g.i],ur=isUr(w);const opts=shuffle([w,...shuffle(misspell(w,ur)).slice(0,3)]);g.opts=opts;const say=canSpeak(ur);
 app.innerHTML=gameShell('bee',`<div id="mgb"><div class="bee"><p class="mg-help">${say?'Listen to the word, then choose the right spelling.':'Look at the word carefully. It will hide in 2 seconds, then choose the right spelling.'}</p>
  <div class="bee-n">Word ${g.i+1} of ${g.words.length}</div>${say?`<button type="button" class="btn sun lg" id="beesay">${ic.sound}Hear the word</button>`:`<div class="bee-peek ${ur?'ur-t':''}" id="peek">${esc(w)}</div>`}
  <div class="bee-o">${opts.map((o,i)=>`<button type="button" class="qo ${ur?'ur-t':''}" data-bee="${i}">${esc(o)}</button>`).join('')}</div></div></div>`);
 document.getElementById('mgs').textContent=`${g.right} right`;
 if(say){const f=()=>speak([w],ur);setTimeout(f,300);document.getElementById('beesay').onclick=f}else setTimeout(()=>{const p=document.getElementById('peek');if(p)p.textContent='?'},2000)}
function beeTap(i){const g=GM;if(!g||g.k!=='bee'||g.lock)return;const w=g.words[g.i],o=g.opts[i],el=document.querySelector(`[data-bee="${i}"]`);g.lock=true;
 if(o===w){g.right++;el.classList.add('ok');sfx.ok()}else{el.classList.add('no');sfx.no();const c=g.opts.indexOf(w);document.querySelector(`[data-bee="${c}"]`).classList.add('ok')}
 setTimeout(()=>{g.lock=false;g.i++;if(g.i<g.words.length)beeQ();else{const n=g.words.length,r=g.right;gameDone('bee',`You spelled ${r} of ${n} words!`,r>=n-1?3:r>=n*.6?2:r>0?1:0,r)}},900)}

/* Urdu letter pop */
function letterPop(){GM={...GM,round:0,score:0,miss:0};popRound()}
function popRound(){const g=GM;if(g.round>=10){const s=g.score;return gameDone('pop',`You popped ${s} letters!`,g.miss<=2?3:g.miss<=5?2:1,s)}
 const pool=grade==='nursery'?UR_LETTERS.slice(0,12):grade==='kg'?UR_LETTERS.slice(0,24):UR_LETTERS;const t=pool[Math.floor(Math.random()*pool.length)];
 const others=shuffle(pool.filter(x=>x!==t)).slice(0,6);const hits=2+Math.floor(Math.random()*2);const bubbles=shuffle([...Array(hits).fill(t),...others]);g.t=t;g.left=hits;g.round++;
 app.innerHTML=gameShell('pop',`<div id="mgb"><div class="pop"><p class="mg-help">Pop every bubble with this letter. Round ${g.round} of 10.</p><div class="pop-t ur-t" lang="ur">${t}</div>
  <div class="pop-sky">${bubbles.map((b,i)=>`<button type="button" class="bub ur-t" lang="ur" data-pop="${i}" data-l="${b}" style="--x:${8+(i*83)%84}%;--d:${(i%4)*.5}s;--h:${6+(i*37)%5}s">${b}</button>`).join('')}</div></div></div>`);
 document.getElementById('mgs').textContent=g.score+' popped';if(canSpeak(true))speak([t],true)}
function popTap(el){const g=GM;if(!g||g.k!=='pop'||el.classList.contains('gone'))return;if(el.dataset.l===g.t){el.classList.add('gone');g.score++;g.left--;sfx.ok();document.getElementById('mgs').textContent=g.score+' popped';if(g.left<=0)setTimeout(popRound,500)}else{g.miss++;sfx.no();el.classList.add('shake');setTimeout(()=>el.classList.remove('shake'),400)}}

/* ---------- story corner ---------- */
const STORIES=[
 {id:'s-moti',g:['nursery','kg'],t:'Moti Finds a Friend',e:'🐶',x:'Moti was a little brown puppy. He lived in a house with a big garden. One day Moti saw a small white kitten under the mango tree. The kitten was scared. Moti wagged his tail and gave her his ball. The kitten smiled and played with him. Now Moti and the kitten play together every day.',
  q:[['What colour was Moti?',['brown','white','black'],0],['Where was the kitten?',['under the mango tree','on the roof','in the car'],0],['What did Moti give the kitten?',['his ball','his bone','his bed'],0]]},
 {id:'s-rain',g:['nursery','kg'],t:'The Rainy Day',e:'🌧️',x:'It was raining. Sara put on her red raincoat and yellow boots. She jumped in a big puddle. Splash! A little frog jumped too. Sara laughed. Then Ammi called, "Sara, come in for hot pakoras!" Sara ran inside, happy and wet.',
  q:[['What colour was the raincoat?',['red','blue','green'],0],['Who jumped with Sara?',['a frog','a cat','a duck'],0],['What did Ammi make?',['pakoras','ice cream','cake'],0]]},
 {id:'s-kite',g:['kg','g1'],t:'Ali\'s Green Kite',e:'🪁',x:'Ali made a green kite with his Dada. They used paper, sticks and string. On Sunday, the wind was strong. Ali ran across the park and the kite flew up, up, up! It was the highest kite in the sky. Dada clapped and said, "Well done, Ali! We made it together."',
  q:[['Who helped Ali make the kite?',['Dada','his teacher','Ammi'],0],['What colour was the kite?',['green','red','yellow'],0],['When did Ali fly the kite?',['on Sunday','at night','on Monday'],0]]},
 {id:'s-crow',g:['g1','g2'],t:'The Clever Crow',e:'🐦',x:'One hot summer day, a crow was very thirsty. He flew here and there looking for water. At last he found a pot with a little water at the bottom. His beak could not reach it. The crow thought hard. He picked up small stones and dropped them into the pot, one by one. Slowly the water came up. The crow drank and flew away happily.',
  q:[['Why was the crow looking for water?',['he was thirsty','he wanted a bath','he was lost'],0],['What did the crow drop into the pot?',['small stones','leaves','bread'],0],['What does this story teach us?',['think hard to solve problems','give up quickly','never drink water'],0]]},
 {id:'s-eid',g:['g1','g2'],t:'The Best Eid Gift',e:'🌙',x:'On Eid morning, Hamza got Eidi from Abbu, Dada and his uncles. He had five hundred rupees! He wanted to buy a new cricket bat. On the way to the shop, he saw a boy his age with torn shoes. Hamza thought for a moment. Then he gave the boy some of his Eidi for new shoes. The boy smiled the biggest smile. Hamza felt it was the best Eid gift of all.',
  q:[['How much Eidi did Hamza get?',['five hundred rupees','fifty rupees','one thousand rupees'],0],['What did Hamza want to buy?',['a cricket bat','a kite','a book'],0],['How did Hamza feel at the end?',['happy','angry','bored'],0]]},
 {id:'s-tree',g:['g2','g3'],t:'The Neem Tree',e:'🌳',x:'In the middle of Zara\'s school stood an old neem tree. In summer, children sat in its cool shade. Birds built nests in its branches. One day, workers came to cut it down to make space for a car park. Zara and her friends made posters saying "Save our tree!" They showed the principal how the tree kept the playground cool. The principal agreed, and the car park was built somewhere else.',
  q:[['Where was the neem tree?',['in the school','in a forest','at the beach'],0],['Why did the workers come?',['to cut the tree for a car park','to water it','to plant flowers'],0],['How did Zara save the tree?',['she made posters and spoke to the principal','she hid the tools','she cried all day'],0]]},
 {id:'s-k2',g:['g2','g3'],t:'Climbing Dreams',e:'🏔️',x:'Usman lived in a village near Skardu. Every morning he looked at the giant white mountains. His grandfather had been a porter who helped climbers reach K2. "Climbing a mountain needs strong legs, a brave heart and patience," Grandfather said. Usman started walking up the hill behind his house every day. Each week he went a little higher. One day he reached the top of the hill and saw the whole valley below. "One step at a time," he whispered.',
  q:[['Where did Usman live?',['near Skardu','in Karachi','in Lahore'],0],['What was Grandfather\'s job?',['a porter for climbers','a teacher','a pilot'],0],['What is the main idea of the story?',['big goals are reached step by step','mountains are cold','walking is boring'],0]]},
 {id:'s-robot',g:['g3'],t:'Hira\'s Robot',e:'🤖',x:'Hira wanted to enter the school science fair. She decided to build a robot that could sweep the floor. Her first robot fell over. Her second robot went round in circles. Hira did not give up. She asked her teacher for help and read about motors. Her third robot moved straight and pushed a small brush. At the fair, Hira did not win first prize, but the judges said she had shown great patience and learning. Hira was proud of herself.',
  q:[['What did Hira\'s robot do?',['swept the floor','sang songs','cooked food'],0],['How many robots did Hira build?',['three','one','five'],0],['Why was Hira proud?',['she kept trying and learned','she won first prize','she did not do any work'],0]]},
 {id:'s-billi',g:['kg','g1'],ur:true,t:'بلی اور چوہا',e:'🐱',x:'ایک بلی تھی۔ اس کا نام مانو تھا۔ مانو کو دودھ بہت پسند تھا۔ ایک دن مانو نے ایک ننھا چوہا دیکھا۔ چوہا ڈر گیا۔ مانو نے کہا: "ڈرو مت، میں تمہیں کچھ نہیں کہوں گی۔" اب مانو اور چوہا دوست ہیں۔',
  q:[['بلی کا نام کیا تھا؟',['مانو','موتی','بلو'],0],['مانو کو کیا پسند تھا؟',['دودھ','پانی','چائے'],0],['آخر میں کیا ہوا؟',['دونوں دوست بن گئے','چوہا بھاگ گیا','بلی سو گئی'],0]]},
 {id:'s-chiriya',g:['g2','g3'],ur:true,t:'چڑیا کا گھونسلا',e:'🐦',x:'گرمیوں میں ایک چڑیا نے ہمارے برآمدے میں گھونسلا بنایا۔ وہ تنکے اور دھاگے لا لا کر گھونسلا بناتی رہی۔ کچھ دن بعد گھونسلے میں تین ننھے بچے نکلے۔ میں روز ان کے لیے پانی اور دانہ رکھتی۔ ایک دن بچے اڑنا سیکھ گئے اور آسمان میں اڑ گئے۔ مجھے بہت خوشی ہوئی۔',
  q:[['چڑیا نے گھونسلا کہاں بنایا؟',['برآمدے میں','درخت پر','چھت پر'],0],['گھونسلے میں کتنے بچے نکلے؟',['تین','دو','پانچ'],0],['بچوں نے آخر میں کیا سیکھا؟',['اڑنا','گانا','تیرنا'],0]]}];
function storiesHub(){const mine=STORIES.filter(s=>s.g.includes(grade));
 const weekly=subjectsOf(grade).flatMap(s=>(PLAN[s.id]||[]).map((p,i)=>({s,p,i}))).filter(o=>o.p&&o.p[4]&&o.p[4][1]).slice(0,40);
 app.innerHTML=`<div class="crumbs"><a href="#fun">Play zone</a>/<span>Story corner</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Story corner</span><h1>Read along stories</h1><p>Tap Read aloud and follow the highlighted words. Answer three questions at the end to earn stars.</p></div><div class="ph-art">${art('english')}</div></div>
 <div class="st-grid">${mine.map(s=>`<a class="st-card" href="#story-${s.id}"><span class="emo big">${s.e}</span><b class="${s.ur?'ur-t':''}">${s.t}</b><small>${s.ur?'Urdu story':'English story'} · 3 questions${bestFor('story-'+s.id)?' · '+[1,2,3].map(k=>k<=bestFor('story-'+s.id)?'★':'☆').join(''):''}</small></a>`).join('')}</div>
 <div class="sec-h"><h2>More short stories from the weekly guide</h2></div>
 <div class="st-list">${weekly.map(o=>`<a class="st-row" href="#story-w-${o.s.id}-${o.i}"><span class="tag">${o.s.name}</span><b class="${isUr(o.p[4][0])?'ur-t':''}">${o.p[4][0]}</b></a>`).join('')}</div>`}
function storyRead(id){let st=STORIES.find(s=>s.id===id),ask='';
 if(!st){const m=/^w-(.+)-(\d+)$/.exec(id);if(m&&PLAN[m[1]]&&PLAN[m[1]][+m[2]]){const p=PLAN[m[1]][+m[2]],ur=isUr(p[4][1]);const sp=p[4][1].split(ur?'سوال:':'Ask:');st={id,t:p[4][0],e:'📖',x:sp[0].trim(),ur,q:[]};ask=(sp[1]||'').trim()}else return storiesHub()}
 const words=st.x.split(/\s+/);GM={k:'story',st,ans:[],right:0};
 app.innerHTML=`<div class="crumbs"><a href="#fun">Play zone</a>/<a href="#stories">Story corner</a>/<span>${T(st.t)}</span></div>
 <article class="story-r${st.ur?' ur':''}" ${st.ur?'dir="rtl" lang="ur"':''}><div class="sr-head"><span class="emo huge">${st.e}</span><h1 class="${st.ur?'ur-t':''}">${st.t}</h1></div>
 <div class="sr-acts" dir="ltr">${canSpeak(!!st.ur)?`<button type="button" class="btn sun" id="sread">${ic.sound}Read aloud</button><button type="button" class="btn" id="sstop">Stop</button>`:`<span class="gloss">Read aloud needs ${st.ur?'an Urdu':'an English'} voice on this device.</span>`}</div>
 <p class="sr-text ${st.ur?'ur-t':''}">${words.map((w,i)=>`<span data-w="${i}">${esc(w)}</span>`).join(' ')}</p>
 ${ask?`<p class="ask"><b>${st.ur?'سوال:':'Talk about it:'}</b> ${esc(ask)}</p>`:''}
 ${st.q.length?`<div class="sr-q" id="srq">${st.q.map((q,qi)=>`<div class="srq-i"><p class="${st.ur?'ur-t':''}"><b>${qi+1}.</b> ${esc(q[0])}</p><div class="srq-o">${shuffle(q[1].map((o,oi)=>[o,oi])).map(([o,oi])=>`<button type="button" class="qo ${st.ur?'ur-t':''}" data-sq="${qi}" data-so="${oi}">${esc(o)}</button>`).join('')}</div></div>`).join('')}</div><div id="srres"></div>`:''}
 </article>`;
 const rb=document.getElementById('sread');if(rb){rb.onclick=()=>readStory(st,words);document.getElementById('sstop').onclick=()=>{stopSpeak();clearInterval(GM&&GM.ht);document.querySelectorAll('.sr-text .hl').forEach(e=>e.classList.remove('hl'))}}}
function readStory(st,words){if(!canSpeak(!!st.ur))return;stopSpeak();clearInterval(GM.ht);const ur=!!st.ur;
 const text=words.join(' ');const starts=[];let p=0;words.forEach(w=>{starts.push(p);p+=w.length+1});const hl=i=>{document.querySelectorAll('.sr-text .hl').forEach(e=>e.classList.remove('hl'));const e=document.querySelector(`.sr-text [data-w="${i}"]`);e&&e.classList.add('hl')};
 try{const u=new SpeechSynthesisUtterance(text);const v=voiceFor(ur);if(v)u.voice=v;u.lang=ur?'ur-PK':(v?v.lang:'en-IN');u.rate=.82;let gotB=false;
  u.onboundary=e=>{if(e.name&&e.name!=='word')return;gotB=true;let i=starts.findIndex((s,k)=>e.charIndex>=s&&(k===starts.length-1||e.charIndex<starts[k+1]));if(i>=0)hl(i)};
  u.onstart=()=>{let i=0;GM.ht=setInterval(()=>{if(gotB){clearInterval(GM.ht);return}if(i<words.length)hl(i++);else clearInterval(GM.ht)},ur?520:430)};
  u.onend=()=>{clearInterval(GM.ht);document.querySelectorAll('.sr-text .hl').forEach(e=>e.classList.remove('hl'))};speechSynthesis.speak(u)}catch(e){}}
function storyAnswer(qi,oi){const g=GM;if(!g||g.k!=='story'||g.ans[qi]!=null)return;const st=g.st;g.ans[qi]=oi;const ok=oi===st.q[qi][2];if(ok){g.right++;sfx.ok()}else sfx.no();
 document.querySelectorAll(`[data-sq="${qi}"]`).forEach(b=>{const o=+b.dataset.so;if(o===st.q[qi][2])b.classList.add('ok');else if(o===oi)b.classList.add('no');b.disabled=true});
 if(g.ans.filter(x=>x!=null).length===st.q.length){const stars=g.right===3?3:g.right===2?2:g.right?1:0;const rid='story-'+st.id;const best=store.get('best',{});if(stars>(best[rid]||0)){best[rid]=stars;store.set('best',best)}const a=activeChild();if(a)saveProgress(a,rid,g.right,3,g.right*10,stars);
  document.getElementById('srres').innerHTML=`<div class="sr-done"><div class="bigstars">${[1,2,3].map(i=>starSVG(i<=stars)).join('')}</div><h2>${g.right} of 3 right!</h2><div class="acts" style="justify-content:center"><a class="btn sun" href="#stories">More stories</a><a class="btn" href="#fun">Play zone</a></div></div>`;if(stars>=2)confetti()}}

/* ---------- Parent tools ---------- */
const TOOLS=[['spell-maker','Spelling list maker','Type your child\'s school spelling or dictation list. Get worksheets and a quiz.','✏️'],['prep','Test prep builder','Pick the topics on the next test. Get one revision pack and a mock quiz.','📝'],['report','Progress report','See what is done, what needs practice and what to do next.','📊'],['rewards','Reward charts and certificates','Print a weekly reward chart or a certificate with your child\'s name.','🏅']];
function toolsHub(){app.innerHTML=`<div class="crumbs"><a href="#parents">Parents</a>/<span>Parent tools</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Parent tools</span><h1>Tools that save you time</h1><p>Make worksheets from your child's own school lists, build test revision packs, track progress and celebrate effort.</p></div><div class="ph-art">${art('parents')}</div></div>
 <div class="fz-grid tools">${TOOLS.map(([k,t,d,e])=>`<a class="fz-card" href="#${k}"><span class="emo big">${e}</span><b>${t}</b><small>${d}</small></a>`).join('')}</div>`}
const toolsBand=()=>`<div class="tools-band">${TOOLS.map(([k,t,d,e])=>`<a href="#${k}"><span class="emo">${e}</span><span><b>${t}</b><small>${d}</small></span></a>`).join('')}</div>`;

/* custom subjects for generated sheets */
function customSub(ur){const id=ur?'custom-ur':'custom-en';SUB[id]={id,kind:ur?'urdu':'english',grade,rtl:ur,name:ur?'Urdu':'English',community:true,topics:[]};return id}
function tPrint(title,frames,back,extra=''){
 app.innerHTML=`<div class="pv"><div class="pv-bar"><a class="btn" href="#${back}">${ic.l}Back</a><h1>${T(esc(title))}</h1>${extra}<button class="btn fill" type="button" id="pp">${ic.print}Print</button></div>
 <p class="pv-note">${frames.length} A4 page${frames.length===1?'':'s'}. In the print window choose A4 paper and 100% scale. You can also choose "Save as PDF".</p><div class="pages">${frames.join('')}</div></div>`;
 document.getElementById('pp').onclick=()=>window.print();fit()}

/* spelling list maker */
let SPL=null;
const splWords=()=>(initFun(),uniq(String(SPL.words).split(/[\n,،;]+/).map(w=>w.replace(/[<>"&{}|]/g,'').trim()).filter(w=>w&&w.length<=24)).slice(0,20));
function spellMaker(){app.innerHTML=`<div class="crumbs"><a href="#tools">Parent tools</a>/<span>Spelling list maker</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Spelling list maker</span><h1>Turn a school spelling list into practice</h1><p>Type or paste up to 20 words, in English or Urdu, one per line or separated by commas. You will get printable worksheets with an answer key and a spelling quiz.</p></div></div>
 <form class="tool-f" id="splf"><label>Title<input id="splt" value="${esc(SPL.title||'')}" placeholder="Week 7 spellings"></label><label>Child's name (optional)<input id="spln" value="${esc(SPL.name||'')}" placeholder="Ayesha"></label>
 <label class="wide">Words<textarea id="splw" rows="7" placeholder="because, friend, school, people, water">${esc(SPL.words||'')}</textarea></label>
 <div class="acts wide"><button class="btn fill lg" type="submit" data-act="sheets">${ic.print}Make worksheets</button><button class="btn sun lg" type="button" id="splq">${ic.play}Play the quiz</button></div><p class="gloss wide" id="splmsg"></p></form>`;
 const save=()=>{SPL={title:document.getElementById('splt').value.trim(),name:document.getElementById('spln').value.trim(),words:document.getElementById('splw').value};store.set('spellList',SPL);return splWords()};
 document.getElementById('splf').onsubmit=e=>{e.preventDefault();const w=save();if(w.length<2){document.getElementById('splmsg').textContent='Please add at least 2 words.';return}location.hash='spell-print'};
 document.getElementById('splq').onclick=()=>{const w=save();if(w.length<2){document.getElementById('splmsg').textContent='Please add at least 2 words.';return}regCustomSpell();location.hash='play-custom-spell'}}
function jumble(w){if(w.length<3)return w.split('').reverse().join('');for(let i=0;i<10;i++){const s=shuffle(w.split('')).join('');if(s!==w)return s}return w}
function gapW(w){const ur=isUr(w),L=[...w];const n=Math.max(1,Math.floor(L.length/3));const idx=shuffle(L.map((_,i)=>i).filter(i=>ur||i>0)).slice(0,n);return L.map((c,i)=>idx.includes(i)?'_':c).join(ur?'':' ')}
function spellPages(){const w=splWords(),ur=w.filter(isUr).length>w.length/2,sid=customSub(ur),t=SPL.title||(ur?'املا کے الفاظ':'My spelling words');
 const nm=SPL.name?(ur?SPL.name+' کے ':SPL.name+"'s "):'';
 PAGES[sid]=[{title:ur?'دیکھیں، بولیں، چھپائیں، لکھیں':'Look, Say, Cover, Write, Check',topic:t,en:t,instr:ur?'لفظ دیکھیں اور بولیں۔ پھر چھپا کر لکھیں اور چیک کریں۔':'Look at the word and say it. Cover it, write it, then check.',obj:'',blocks:[{t:'lscwc',words:w.slice(0,12),ur}]},
  {title:ur?'مشق':'Practice',topic:t,en:t,instr:ur?'خالی جگہ پُر کریں اور جملے بنائیں۔':'Fill in the missing letters, unscramble the words and use them in sentences.',obj:'',blocks:ur?[
   {t:'fill',h:'حروف ملا کر لفظ لکھیں۔',items:w.slice(0,8).map(x=>[...x].join(' + ')+' ← {{'+x+'}}'),cols:2,nw:1},
   {t:'write',h:'ان الفاظ سے جملے بنائیں۔',items:w.slice(0,4).map(x=>x+': ______________________________')}]:[
   {t:'fill',h:'A. Fill in the missing letters.',items:w.slice(0,8).map(x=>gapW(x)+' → {{'+x+'}}'),cols:2},
   {t:'fill',h:'B. Unscramble the words.',items:w.slice(0,6).map(x=>jumble(x.toLowerCase())+' → {{'+x+'}}'),cols:2},
   {t:'write',h:'C. Write a sentence using each word.',items:w.slice(0,3).map(x=>x+': ______________________________')}]}];
 return {sid,t:nm+t}}
function spellPrint(){if(splWords().length<2){location.hash='spell-maker';return}const {sid,t}=spellPages();const key=store.get('splKey',true);
 const fr=[0,1].map(i=>frame(sid,i,false,i+1,2)).concat(key?[0,1].map(i=>frame(sid,i,true,i+1,2)):[]);
 tPrint(t,fr,'spell-maker',`<label class="toggle"><input type="checkbox" id="spk" ${key?'checked':''}> Include answer key</label><a class="btn sun" href="#play-custom-spell" data-cspell="1">${ic.play}Quiz</a>`);
 document.getElementById('spk').onchange=e=>{store.set('splKey',e.target.checked);spellPrint()};document.querySelector('[data-cspell]').onclick=()=>regCustomSpell()}
function regCustomSpell(){const w=splWords(),ur=w.filter(isUr).length>w.length/2,sid=customSub(ur);
 RID['custom-spell']={id:'custom-spell',sub:sid,title:SPL.title||'My spelling words',topic:SPL.title||(ur?'املا':'My spelling words'),en:'',pages:[],desc:'',obj:[],quizOnly:true,custom:true,
  gen:()=>{const out=[];w.forEach(x=>{const m=shuffle(misspell(x,ur)).slice(0,3);const q=mkQ(ur?'کون سا لفظ صحیح لکھا ہے؟':'Which word is spelled correctly?',[x,...m],x,{sub:ur?'غور سے دیکھیں۔':'Look carefully at each spelling.',exp:`<b class="exa">${esc(x)}</b>`,kind:'spell'});q&&out.push(q);
   if(!ur&&x.length>3){const i=1+Math.floor(Math.random()*(x.length-2)),c=x[i];const alts=uniq(['a','e','i','o','u','r','s','t','l','n'].filter(l=>l!==c.toLowerCase())).slice(0,8);const q2=mkQ(`${esc(x.slice(0,i))}<span class="qbl"></span>${esc(x.slice(i+1))}`,[c,...shuffle(alts).slice(0,3)],c,{sub:'Which letter is missing?',exp:`<b class="exa">${esc(x)}</b>`,kind:'fill'});q2&&out.push(q2)}});return shuffle(out)}}}
/* make custom quiz resources survive a reload of the play route */
function ensureCustom(id){initFun();if(id==='custom-spell'&&!RID[id]&&splWords().length>=2)regCustomSpell();if(id==='custom-prep'&&!RID[id]&&(store.get('prepSel',[])||[]).length)regCustomPrep()}

/* test prep builder */
function prepPage(){const sel=new Set(store.get('prepSel',[]).filter(id=>RID[id]&&SUB[RID[id].sub].grade===grade));
 app.innerHTML=`<div class="crumbs"><a href="#tools">Parent tools</a>/<span>Test prep builder</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Test prep builder</span><h1>Build a revision pack for the next test</h1><p>Tick the topics on your child's test syllabus. Print one combined revision pack with answer keys, or play a mock test quiz that mixes all the topics.</p>${gradePick()}</div></div>
 <form id="prepf" class="prep">${subjectsOf(grade).map(s=>{const rs=RES.filter(r=>r.sub===s.id&&!r.set);return rs.length?`<fieldset class="prep-s s-${s.id}"><legend>${s.name}</legend>${rs.map(r=>`<label class="prep-i"><input type="checkbox" value="${r.id}" ${sel.has(r.id)?'checked':''}><span class="${s.rtl?'ur-t':''}">${s.rtl?r.topic:r.title.replace(/ Practice$/,'')}</span><small>${r.pages.length} pages</small></label>`).join('')}</fieldset>`:''}).join('')}
 <div class="prep-bar"><span id="prepn"></span><button class="btn fill lg" type="button" id="prepp">${ic.print}Print revision pack</button><button class="btn sun lg" type="button" id="prepq">${ic.play}Mock test quiz</button></div></form>`;
 const upd=()=>{const ids=[...document.querySelectorAll('#prepf input:checked')].map(i=>i.value);store.set('prepSel',ids);const pages=ids.reduce((n,id)=>n+RID[id].pages.length,0);document.getElementById('prepn').textContent=ids.length?`${ids.length} topics · ${pages} pages`:'Tick at least one topic';return ids};
 document.getElementById('prepf').onchange=upd;upd();
 document.getElementById('prepp').onclick=()=>{if(upd().length)location.hash='prep-print'};
 document.getElementById('prepq').onclick=()=>{const ids=upd();if(!ids.length)return;regCustomPrep();location.hash='play-custom-prep'}}
function prepPrint(){const ids=(store.get('prepSel',[])||[]).filter(id=>RID[id]);if(!ids.length){location.hash='prep';return}const key=store.get('prepKey',true);
 const list=ids.flatMap(id=>RID[id].pages.map(i=>[RID[id].sub,i]));const N=list.length;const fr=list.map(([s,i],j)=>frame(s,i,false,j+1,N)).concat(key?list.map(([s,i],j)=>frame(s,i,true,j+1,N)):[]);
 tPrint(`${GR[grade].name} revision pack`,fr,'prep',`<label class="toggle"><input type="checkbox" id="ppk" ${key?'checked':''}> Include answer key</label>`);
 document.getElementById('ppk').onchange=e=>{store.set('prepKey',e.target.checked);prepPrint()}}
function regCustomPrep(){const ids=(store.get('prepSel',[])||[]).filter(id=>RID[id]&&hasQuiz(RID[id]));if(!ids.length)return;const s=SUB[RID[ids[0]].sub];
 RID['custom-prep']={id:'custom-prep',sub:s.id,title:'Mock test',topic:'Mock test',en:'',pages:[],desc:'',obj:[],quizOnly:true,custom:true,gen:()=>{const out=[];ids.forEach(id=>out.push(...shuffle(buildQuiz(RID[id])).slice(0,Math.max(2,Math.ceil(20/ids.length)))));return shuffle(out).slice(0,24)}}}

/* progress report */
function reportPage(){const a=activeChild(),who=a?FAM.children[a].name:'This device';
 const subs=subjectsOf(grade).map(s=>{const rs=RES.filter(r=>r.sub===s.id&&!r.set&&hasQuiz(r));const played=rs.filter(r=>playedFor(r.id));const stars=rs.reduce((n,r)=>n+bestFor(r.id),0);
  return {s,rs,played,stars,mastered:rs.filter(r=>bestFor(r.id)===3),weak:played.filter(r=>bestFor(r.id)<2),next:rs.filter(r=>!playedFor(r.id)).slice(0,2)}}).filter(x=>x.rs.length);
 const tot=subs.reduce((n,x)=>n+x.rs.length,0),pl=subs.reduce((n,x)=>n+x.played.length,0),ms=subs.reduce((n,x)=>n+x.mastered.length,0);
 const nm=r=>SUB[r.sub].rtl?(UR_EN[r.topic]||r.topic):r.title.replace(/ Practice$/,'');
 const weak=subs.flatMap(x=>x.weak),next=subs.flatMap(x=>x.next).slice(0,4);
 const share=`Little Takhti progress for ${who} (${GR[grade].name}):\n• ${pl} of ${tot} quizzes played, ${ms} mastered\n• ${totalStars()} stars, ${stickersUnlocked()} stickers, ${dailyStreak()} day streak\n${weak.length?'• Needs practice: '+weak.slice(0,4).map(nm).join(', ')+'\n':''}${next.length?'• Next to try: '+next.map(nm).join(', '):''}`;
 app.innerHTML=`<div class="crumbs noprint"><a href="#tools">Parent tools</a>/<span>Progress report</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Progress report</span><h1>${esc(who)} · ${GR[grade].name}</h1><p>${a?'Saved to this child\'s profile.':'Showing progress saved on this device. <a href="#account">Add your child</a> to keep a report for each child.'}</p><div class="noprint">${gradePick()}</div></div></div>
 <div class="rp-kpis"><div><b>${pl}/${tot}</b><small>quizzes played</small></div><div><b>${ms}</b><small>mastered (3 stars)</small></div><div><b>${totalStars()}</b><small>stars</small></div><div><b>${dailyStreak()}</b><small>day streak</small></div></div>
 <div class="rp-subs">${subs.map(x=>{const pct=Math.round(x.played.length/x.rs.length*100);return `<div class="rp-s s-${x.s.id}"><div class="rp-h"><b>${x.s.name}</b><span>${x.played.length}/${x.rs.length} played · ${x.stars} stars</span></div><div class="rp-bar"><i style="width:${pct}%"></i></div>
  ${x.mastered.length?`<p><b>Mastered:</b> ${x.mastered.map(r=>T(nm(r))).join(', ')}</p>`:''}${x.weak.length?`<p class="warnp"><b>Needs practice:</b> ${x.weak.map(r=>`<a href="#play-${r.id}">${T(nm(r))}</a>`).join(', ')}</p>`:''}${x.next.length?`<p><b>Next to try:</b> ${x.next.map(r=>`<a href="#play-${r.id}">${T(nm(r))}</a>`).join(', ')}</p>`:''}</div>`}).join('')}</div>
 <div class="acts noprint" style="margin-top:18px"><a class="btn fill lg" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(share)}">Share on WhatsApp</a><button class="btn lg" type="button" onclick="window.print()">${ic.print}Print report</button></div>`}

/* reward charts and certificates */
let RW=null;
function initFun(){if(!SPL)SPL=store.get('spellList',{words:'',title:'',name:''});if(!RW)RW=store.get('rewards',{name:'',tasks:['Brush teeth morning and night','Read for 15 minutes','Finish homework','Tidy my things','Say something kind'],award:'Star of the Week',reason:'for working hard and never giving up',by:'Ammi and Abbu',tab:'chart'})}
const AWARDS=['Star of the Week','Reading Champion','Maths Whiz','Spelling Star','Kindness Award','Urdu Superstar','Super Helper','Quiz Champion'];
function rewardsPage(){app.innerHTML=`<div class="crumbs"><a href="#tools">Parent tools</a>/<span>Reward charts and certificates</span></div>
 <div class="phead"><div style="flex:1"><span class="kick">Rewards</span><h1>Reward charts and certificates</h1><p>Add your child's name, then print. Stick the chart on the fridge and give a star for each task done.</p></div></div>
 <div class="tabs" role="tablist"><button class="tab ${RW.tab==='chart'?'on':''}" data-rwt="chart">Weekly reward chart</button><button class="tab ${RW.tab==='cert'?'on':''}" data-rwt="cert">Certificate</button></div>
 <form class="tool-f" id="rwf"><label>Child's name<input id="rwn" value="${esc(RW.name)}" placeholder="Ayesha"></label>
 ${RW.tab==='chart'?`<label class="wide">Tasks (one per line, up to 6)<textarea id="rwtk" rows="6">${esc(RW.tasks.join('\n'))}</textarea></label>`:
  `<label>Award<select id="rwa">${AWARDS.map(a=>`<option ${a===RW.award?'selected':''}>${a}</option>`).join('')}</select></label><label>Given by<input id="rwb" value="${esc(RW.by)}"></label><label class="wide">For<input id="rwr" value="${esc(RW.reason)}"></label>`}
 <div class="acts wide"><button class="btn fill lg" type="submit">${ic.print}Preview and print</button></div></form>`;
 document.getElementById('rwf').onsubmit=e=>{e.preventDefault();RW.name=document.getElementById('rwn').value.trim();if(RW.tab==='chart')RW.tasks=document.getElementById('rwtk').value.split('\n').map(x=>x.trim()).filter(Boolean).slice(0,6);else{RW.award=document.getElementById('rwa').value;RW.by=document.getElementById('rwb').value.trim();RW.reason=document.getElementById('rwr').value.trim()}store.set('rewards',RW);location.hash='rewards-print'}}
function rewardsPrint(){const nm=esc(RW.name||'_______________'),d=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
 const sheet=RW.tab==='chart'?`<div class="sheet rw-chart"><div class="rw-h"><span class="emo">⭐</span><div><h2>${nm}'s Star Chart</h2><p>Week of ______________</p></div><span class="emo">🪁</span></div>
  <table class="rw-t"><thead><tr><th>My task</th>${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${RW.tasks.map(t=>`<tr><td>${esc(t)}</td>${'<td></td>'.repeat(7)}</tr>`).join('')}</tbody></table>
  <div class="rw-goal"><div><b>My goal this week:</b> ______ stars</div><div><b>My reward:</b> ______________________</div></div><p class="rw-foot">Little Takhti · littletakhti.netlify.app</p></div>`
 :`<div class="sheet rw-cert"><div class="rc-in"><span class="emo rc-e">🏆</span><p class="rc-k">Little Takhti</p><h2>${esc(RW.award)}</h2><p class="rc-p">This certificate is proudly given to</p><p class="rc-n">${nm}</p><p class="rc-r">${esc(RW.reason)}</p>
  <div class="rc-sig"><div><i></i><span>${esc(RW.by)}</span></div><div><i></i><span>${d}</span></div></div><div class="rc-stars">${'⭐'.repeat(5)}</div></div></div>`;
 tPrint(RW.tab==='chart'?'Reward chart':'Certificate',[`<div class="frame">${sheet}</div>`],'rewards')}

/* router for everything in this file; returns true when it handled the hash */
function funRoute(h){initFun();
 if(h==='fun'){funHub();return true}
 if(h==='stickers'){stickerBook();return true}
 if(h.startsWith('game-')){miniGame(h.slice(5));return true}
 if(h==='stories'){storiesHub();return true}
 if(h.startsWith('story-')){storyRead(h.slice(6));return true}
 if(h==='tools'){toolsHub();return true}
 if(h==='spell-maker'){spellMaker();return true}
 if(h==='spell-print'){spellPrint();return true}
 if(h==='prep'){prepPage();return true}
 if(h==='prep-print'){prepPrint();return true}
 if(h==='report'){reportPage();return true}
 if(h==='rewards'){rewardsPage();return true}
 if(h==='rewards-print'){rewardsPrint();return true}
 return false}
document.addEventListener('click',e=>{const t=e.target.closest('[data-wsc],[data-mem],[data-pad],[data-bee],[data-pop],[data-race],[data-gagain],[data-sq],[data-rwt]');if(!t)return;
 if(t.dataset.wsc!=null)wsTap(+t.dataset.wsc);else if(t.dataset.mem!=null)memTap(+t.dataset.mem);else if(t.dataset.pad!=null)padTap(t.dataset.pad);
 else if(t.dataset.bee!=null)beeTap(+t.dataset.bee);else if(t.dataset.pop!=null)popTap(t);else if(t.dataset.race!=null)tableRace(+t.dataset.race);
 else if(t.dataset.gagain){const k=t.dataset.gagain;if(k==='bee'&&GM&&GM.list)spellBee(GM.list);else miniGame(k)}
 else if(t.dataset.sq!=null)storyAnswer(+t.dataset.sq,+t.dataset.so);else if(t.dataset.rwt){RW.tab=t.dataset.rwt;store.set('rewards',RW);rewardsPage()}});
document.addEventListener('keydown',e=>{if(!GM||GM.k!=='race'||location.hash!=='#game-race')return;if(/^\d$/.test(e.key))padTap(e.key);else if(e.key==='Backspace')padTap('⌫');else if(e.key==='Enter')padTap('✓')});
