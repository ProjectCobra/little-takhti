/* ---------------- site ---------------- */
const app=document.getElementById('app');
const store={get(k,d){try{const v=localStorage.getItem('lt-'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('lt-'+k,JSON.stringify(v))}catch(e){}}};
let grade=store.get('grade','g1');if(!GR[grade]||GR[grade].soon)grade='g1';
const I=(p,w=2)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ic={print:I('<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>'),
 dl:I('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>'),ok:I('<path d="M5 12l5 5 9-10"/>',3),
 l:I('<path d="M15 5l-7 7 7 7"/>',2.5),r:I('<path d="M9 5l7 7-7 7"/>',2.5),arrow:I('<path d="M5 12h14M13 6l6 6-6 6"/>',2.2),
 search:I('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),play:I('<path d="M7 5l12 7-12 7z" fill="currentColor"/>'),
 game:I('<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15.5 12h.01M18 13.5h.01"/>'),
 cal:I('<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
 heart:I('<path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>'),
 sheet:I('<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7M9 8h3"/>'),
 layers:I('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),
 bulb:I('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.9.7 1.5 1.6 1.5 2.6V17h4v-.5c0-1 .6-1.9 1.5-2.6A6 6 0 0 0 12 3z"/>'),
 spark:I('<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>'),
 book:I('<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6v14"/>'),
 warn:I('<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5h.01"/>'),
 flame:I('<path d="M12 21c-4 0-6.5-2.7-6.5-6.2 0-3.6 3-5.6 3.6-9.3 2.4 1.5 3.7 3.6 3.9 5.6 1-.8 1.6-2 1.7-3.4 2.4 2 3.8 4.5 3.8 7.1 0 3.5-2.5 6.2-6.5 6.2z"/>'),
 sound:I('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>'),mute:I('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 5M22 9l-5 5"/>')};
const starSVG=on=>`<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="${on?'#FFC63F':'none'}" stroke="${on?'#E0A100':'currentColor'}" stroke-width="1.5" stroke-linejoin="round" opacity="${on?1:.35}"/></svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const isUr=t=>/[؀-ۿ]/.test(t);
const T=(t,cls='')=>isUr(t)?`<span class="ur-t ${cls}" dir="rtl" lang="ur">${t}</span>`:t;
const pdf=r=>`pdf/little-takhti-${r.id}.pdf`;
const mixUr=t=>String(t).replace(/[\u0600-\u06FF][\u0600-\u06FF\s،؛]*[\u0600-\u06FF]|[\u0600-\u06FF]/g,m=>`<span class="ur-t ur-in" dir="rtl">${m}</span>`);
const subLabel=s=>s.rtl?`Urdu <span class="ur-t">${s.ur}</span>`:s.name;

/* ---------- quiz builder (questions come from the worksheets) ---------- */
const QZ={};
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function uniq(a){return [...new Set(a)]}
function near(n){const c=shuffle([n+1,n-1,n+2,n-2].concat(n>=20?[n+10,n-10]:[])).filter(x=>x>=0&&x!==n);return c.slice(0,3)}
const SHN={circle:'circle',square:'square',tri:'triangle',star:'star',heart:'heart'};
/* turn worksheet instructions into on-screen quiz wording */
function quizify(t,ur){if(!t)return '';let s=t.replace(/^[A-Z]\.\s*/,'').replace(/^(الف|ب|ج|د)۔\s*/,'');
 if(ur){[[/خانے میں حرف لکھیں۔?/g,''],[/پر دائرہ لگائیں/g,'منتخب کریں'],[/دائرہ لگائیں/g,'منتخب کریں'],[/خالی جگہ پُر کریں/g,'خالی جگہ کے لیے صحیح جواب چنیں'],[/صحیح خانے میں لکھیں/g,'کے لیے صحیح خانہ چنیں'],[/لکھیں/g,'چنیں']].forEach(([a,b])=>s=s.replace(a,b));return s.trim()}
 [[/Write the letter[^.]*\.?/gi,''],[/Fill in the blanks?\.?/gi,'Choose the missing word.'],[/Fill in the missing numbers\.?/gi,'Choose the missing number.'],
  [/Use the words in the box\.?/gi,'Choose the right word.'],[/Write each (.+?) (in|under) (the right|its) [a-z]+\.?/gi,'Choose the right group.'],[/Write each word in the right box\.?/gi,'Choose the right group.'],
  [/Match each[^.]*\./gi,'Find the right match.'],[/Match the[^.]*\./gi,'Find the right match.'],[/Number the steps from 1 to 4\./,'Choose the step number.'],
  [/Put the words in the right order\./,'Choose the sentence in the right order.'],[/Circle Yes or No/g,'Select Yes or No'],[/Circle/g,'Select'],[/circle/g,'select'],
  [/Write the number in the box\.?/g,'Select the number.'],[/Write the number\.?/g,'Select the number.'],[/Write the/g,'Choose the'],[/\bWrite\b/g,'Choose'],[/\bin the box\b/gi,''],
  [/Then (draw|make)[^.]*\./gi,''],[/\bwrite\b/g,'choose'],[/Draw a bar model/g,'Picture a bar model'],[/\s*Select\.$/,''],[/Read each problem\. /g,''],[/^Solve\.$/,'Choose the answer.'],[/Read and solve\./,'Choose the answer.'],[/Listen to the word\. /g,'Say the word. ']
 ].forEach(([a,b])=>s=s.replace(a,b));return s.replace(/(\. Then|\. then) ([A-Z])/g,(m,a,c)=>', then '+c.toLowerCase()).replace(/^Read, then/,'Read, then').replace(/\s{2,}/g,' ').trim()}
function mkQ(q,opts,ans,extra={}){const o=uniq(opts).slice(0,4);if(o.length<2||!o.includes(ans))return null;return {q,opts:o,ans,...extra}}
function buildQuiz(r){
 if(r.gen)return r.gen();
 if(QZ[r.id])return QZ[r.id];
 const s=SUB[r.sub],ur=!!s.rtl,out=[];
 const L=ur?{how:'کتنی شکلیں ہیں؟',goes:w=>`${w}`,match:'صحیح جوڑ چنیں',where:w=>`"${w}" کس خانے میں جائے گا؟`,miss:'خالی خانے میں کیا آئے گا؟',ans:a=>`صحیح جواب: ${a}`}
   :{how:'How many shapes can you count?',goes:w=>`${w}`,match:'Find the right match.',where:w=>`Which group does "${w}" belong to?`,miss:'What goes in the empty box?',ans:a=>`The answer is ${a}.`};
 r.pages.forEach(pi=>{const p=PAGES[r.sub][pi];let story='';p.blocks.forEach(b=>{
  if(b.t==='passage'){story=b.text;return}
  const push=x=>{if(x){if(story&&!x.story)x.story=story;out.push(x)}};const ctx=quizify(b.h||p.instr,ur);
  if(b.nq)return;
  if(b.t==='fill'){const all=b.items.map(it=>{const m=[...it.matchAll(/\{\{(.+?)\}\}/g)];return m.length===1?m[0][1]:null});
    /* ordering exercises ("number the steps") become first/last questions instead of guessing a number */
    const toN=x=>x==null?NaN:+String(x).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d));const nums=all.map(toN);
    if(nums.length>=3&&nums.every(n=>Number.isInteger(n))&&[...nums].sort((x,y)=>x-y).every((v,k)=>v===k+1)&&!nums.every((v,k)=>v===k+1)&&b.items.every(it=>/\{\{[^}]+\}\}\s*$/.test(it))){
      const txt=b.items.map(it=>it.replace(/\s*\{\{[^}]+\}\}\s*$/,'').trim());const first=txt[nums.indexOf(1)],last=txt[nums.indexOf(nums.length)];
      push(mkQ(ur?'سب سے پہلے کیا ہوگا؟':'Which comes first?',[first,...shuffle(txt.filter(t=>t!==first)).slice(0,3)],first,{sub:ctx||(ur?'ترتیب کے بارے میں سوچیں۔':'Think about the right order.'),exp:`${ur?'پہلے':'First'}: <b class="exa">${first}</b>`,kind:'order'}));
      push(mkQ(ur?'سب سے آخر میں کیا ہوگا؟':'Which comes last?',[last,...shuffle(txt.filter(t=>t!==last)).slice(0,3)],last,{sub:ctx||(ur?'ترتیب کے بارے میں سوچیں۔':'Think about the right order.'),exp:`${ur?'آخر میں':'Last'}: <b class="exa">${last}</b>`,kind:'order'}));
      return}
    const kind=x=>/^\d+$/.test(x)?'n':/^[½¼¾⅓⅔]$|^\d+\/\d+$/.test(x)?'f':'t';
    b.items.forEach((it,i)=>{const a=all[i];if(a==null||a.length>30)return;if(it.replace(/\{\{.+?\}\}/,'').replace(/[^\p{L}\p{N}]/gu,'').length<2)return;let d=all.filter(x=>x&&x!==a&&kind(x)===kind(a));
      if(kind(a)==='n')d=uniq(d.filter(x=>Math.abs(+x-+a)<=5).concat(near(+a).map(String)));if(d.length<2&&kind(a)==='f')d=uniq(d.concat(['½','¼','¾','⅓','⅔'].filter(x=>x!==a)));
      if(d.length<1)return;const q=it.replace(/\{\{(.+?)\}\}/,'<span class="qbl"></span>');const exp=it.replace(/\{\{(.+?)\}\}/,'<b class="exa">$1</b>');
      push(mkQ(q,[a,...shuffle(d).slice(0,3)],a,{sub:ctx||(ur?'صحیح جواب چنیں':'Choose the missing answer.'),exp,kind:'fill',raw:it,pool:d}))})}
  else if(b.t==='choice'){b.items.forEach(it=>{const opts=Array.isArray(it[1])?it[1]:b.opts,idx=Array.isArray(it[1])?it[2]:it[1],a=opts[idx];
    const tf=opts===TF||(opts[0]==='True'&&opts[1]==='False');
    const exp=tf?`"${it[0]}" is <b class="exa">${a.toLowerCase()}</b>.`:(it[0]?`${it[0].replace(/_{2,}/,`<b class="exa">${a}</b>`)}${/_{2,}/.test(it[0])?'':` → <b class="exa">${a}</b>`}`:L.ans(`<b class="exa">${a}</b>`));
    push(mkQ(it[0]||ctx.split(/(?<=[.?!])\s/)[0],opts,a,{sub:it[0]?ctx:'',exp}))})}
  else if(b.t==='match'){b.left.forEach((l,i)=>{push(mkQ(`${l} <span class="qarrow">${ur?'←':'→'}</span> <span class="qbl"></span>`,[b.right[i],...shuffle(b.right.filter((_,j)=>j!==i)).slice(0,3)],b.right[i],{sub:quizify(p.instr,ur)||L.match,exp:`${l} ${ur?'←':'→'} <b class="exa">${b.right[i]}</b>`,kind:'match',l,r:b.right[i],lefts:b.left,rights:b.right}))})}
  else if(b.t==='sort'){const COL=['Red','Yellow','Green','Blue','Orange','Pink'];const qf=w=>ur?L.where(w):b.cats.every(c=>COL.includes(c))?`What colour is ${['sun','moon','sky','grass'].includes(w)?'the':/^[aeiou]/i.test(w)?'an':'a'} ${w}?`:b.cats.length===2?`${w}: ${b.cats[0].toLowerCase()} or ${b.cats[1].toLowerCase()}?`:L.where(w);
    b.words.forEach((w,i)=>push(mkQ(qf(w),b.cats,b.cats[b.ans[i]],{exp:`"${w}" ${ur?'یہاں جائے گا:':'goes in'} <b class="exa">${b.cats[b.ans[i]]}</b>.`,kind:'sort',word:w,words:b.words,cats:b.cats,ansIdx:b.ans})))}
  else if(b.t==='clock'){const all=b.items.map(([h,m])=>clockTxt(h,m));b.items.forEach(([h,m])=>{const ans=clockTxt(h,m),alt=uniq([clockTxt(h%12+1,m),clockTxt(h,(m+30)%60),...all.filter(x=>x!==ans)]).filter(x=>x!==ans);push(mkQ('What time does the clock show?',[ans,...shuffle(alt).slice(0,3)],ans,{sub:'The short hand shows the hour. The long hand shows the minutes.',vis:`<div class="grp qgrp">${clockSVG(h,m)}</div>`,exp:`The clock shows <b class="exa">${ans}</b>.`}))})}
  else if(b.t==='count'||b.t==='pics'){b.items.forEach(it=>{const n=it[0],t=it[1];const o=b.t==='pics'?it[2].map(String):[String(n),...near(n).map(String)];push(mkQ(ur?L.how:`How many ${SHN[t]}s can you count?`,o,String(n),{sub:'Count carefully, then select the number.',vis:`<div class="grp qgrp">${shapes(n,t)}</div>`,exp:`There are <b class="exa">${n}</b> ${SHN[t]}s.`}))})}
  else if(b.t==='spick'){b.items.forEach(([q,o,k])=>push(mkQ(`Which one is the ${q}?`,o.map(t=>'@'+t),'@'+o[k],{sub:'Select the shape.',exp:`That is the <b class="exa">${q}</b>.`})))}
  else if(b.t==='pat'){b.items.forEach(([seq,a])=>{const others=Object.keys(SHP).filter(x=>x!==a);push(mkQ('What comes next?',['@'+a,...shuffle(others).slice(0,2).map(x=>'@'+x)],'@'+a,{sub:'Look at the pattern, then select the next shape.',vis:seq.map(t=>shape(t)).join('')+'<span class="qnext">?</span>',exp:`Next comes the <b class="exa">${SHN[a]}</b>.`}))})}
  else if(b.t==='frac'){const all=b.items.map(([n,k])=>k+'/'+n);b.items.forEach(([n,k,sh])=>{const a=k+'/'+n;push(mkQ('What fraction is shaded?',[a,...shuffle(all.filter(x=>x!==a)).slice(0,3)],a,{sub:'Count the shaded parts and all the parts.',vis:fracSVG(n,k,sh).replace('width="100" height="100"','width="150" height="150"'),exp:`${k} of the ${n} equal parts ${k===1?'is':'are'} shaded: <b class="exa">${a}</b>.`}))})}
  else if(b.t==='bond'){b.items.forEach(it=>{const v=[it[0],it[1],it[2]],a=v[it[3]];push(mkQ('What is the missing number?',[String(a),...near(a).map(String)],String(a),{sub:'The two parts make the whole.',vis:bondSVG(...it,false).replace('<svg ','<svg class="bq" '),exp:`${v[1]} and ${v[2]} make <b class="exa">${v[0]}</b>.`}))})}
  else if(b.t==='boxes'){const blanks=[];b.rows.forEach(r=>r.split('|').forEach(c=>{const m=c.match(/^\{\{(.+)\}\}$/);if(m)blanks.push(m[1])}));
    b.rows.forEach(row=>{const cells=row.split('|');cells.forEach((c,ci)=>{const m=c.match(/^\{\{(.+)\}\}$/);if(!m)return;const a=m[1];
      let d=blanks.filter(x=>x!==a);if(/^\d+$/.test(a))d=uniq(d.concat(near(+a).map(String)));if(d.length<2)return;
      const vis=`<div class="nbq"${ur?' dir="rtl"':''}>${cells.map((x,k)=>{const mm=x.match(/^\{\{(.+)\}\}$/);return k===ci?'<span class="q">?</span>':`<span${ur?' class="ur-t"':''}>${mm?mm[1]:x}</span>`}).join('')}</div>`;
      push(mkQ(L.miss,[a,...shuffle(d).slice(0,3)],a,{sub:ctx,vis,exp:L.ans(`<b class="exa">${a}</b>`)}))})})}
  else if(b.t==='cmp'){b.items.forEach(([a,c,t])=>{if(a===c)return;push(mkQ('Which group has more?',['#'+a+'|'+t,'#'+c+'|'+t],'#'+Math.max(a,c)+'|'+t,{sub:'Count both groups, then select the bigger one.',exp:`<b class="exa">${Math.max(a,c)}</b> is more than ${Math.min(a,c)}.`}))})}
 })});
 try{out.push(...extraQs(r))}catch(e){}
 return QZ[r.id]=out;
}
const hasQuiz=r=>r.quizOnly?true:buildQuiz(r).length>=4;
function optHTML(o){if(o[0]==='@')return `<svg viewBox="0 0 24 24"><g fill="${SHC[o.slice(1)]}" stroke="#1b1f2e" stroke-width="1.2" stroke-linejoin="round">${SHP[o.slice(1)]}</g></svg>`;
 if(o[0]==='#'){const [n,t]=o.slice(1).split('|');return `<span class="grp">${shapes(+n,t)}</span>`}
 return isUr(o)?`<span class="ur-t">${o}</span>`:o}

/* ---------- shared bits ---------- */
function acts(r,extra=''){return `<div class="acts"><button class="btn${r.community?' fill':''}" data-print="${r.id}" type="button">${ic.print}Print</button>${r.community?'':`<a class="btn fill" href="${pdf(r)}" target="_blank" rel="noopener">${ic.dl}Download PDF</a>`}${extra}</div>`}
function card(r){const s=SUB[r.sub],n=r.pages.length,q=hasQuiz(r);
 return `<article class="card s-${r.sub}"><a class="thumb" href="#res-${r.id}" aria-label="${esc(r.en||r.title)}">${r.set?'<span class="badge">Full set</span>':r.community?'<span class="badge">Community</span>':''}${frame(r.sub,r.pages[0],false)}</a>${q?`<a class="qbadge" href="#play-${r.id}" aria-label="Play the quiz">${ic.play}Quiz</a>`:''}
 <div class="cb">${isUr(r.title)?`<h3 class="ur-t" dir="rtl" lang="ur"><a href="#res-${r.id}">${r.title}</a></h3>${r.en?`<div class="gloss">${r.en}</div>`:''}`:`<h3><a href="#res-${r.id}">${r.title}</a></h3>`}
 <div class="meta"><span class="dot"></span>${GR[s.grade].name} · ${s.name} · ${T(r.topic)}</div>
 <div class="cfoot"><div class="tags"><span class="tag">${n} page${n>1?'s':''}</span><span class="tag key">${ic.ok}Answer key included</span></div>${acts(r)}</div></div></article>`}
const gradePick=(attr)=>`<div class="gpick" role="group" aria-label="Choose a grade">${GRADES.filter(g=>!g.hidden).map(g=>`<button type="button" ${g.soon?'disabled':`data-grade="${g.id}"`} aria-pressed="${g.id===grade}">${g.name}${g.soon?' · soon':''}</button>`).join('')}</div>`;
const subTabs=(cur,attr)=>`<div class="tabs" role="tablist">${subjectsOf(grade).map(x=>`<button role="tab" class="tab s-${x.id}" data-${attr}="${x.id}" aria-selected="${x.id===cur}"><span class="sw"></span>${x.name}</button>`).join('')}</div>`;
const totalPages=()=>Object.values(PAGES).reduce((a,p)=>a+p.length,0);

/* ---------- home ---------- */
const adSlot=n=>{const A=window.LT_ADS;if(!window.LT_STATIC||!A||!A.slots||!A.slots[n])return '';return `<div class="lt-ad" aria-label="Advertisement"><small>Advertisement</small><ins class="adsbygoogle" style="display:block" data-ad-client="${A.client}" data-ad-slot="${A.slots[n]}" data-ad-format="auto" data-full-width-responsive="true" data-tag-for-age-treatment="1"></ins></div>`};
const fillAds=()=>{document.querySelectorAll('ins.adsbygoogle:not([data-done])').forEach(el=>{el.setAttribute('data-done','1');try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}})};
function privacy(){app.innerHTML=`<article class="legal"><span class="kick">Privacy</span><h1>Privacy policy</h1><p class="muted">Last updated 15 October 2026</p>
<h2>Who this is for</h2><p>Little Takhti makes printable worksheets, quizzes and learning tools for children from Nursery to Grade 3. Accounts are for parents and teachers. Children use the site with a grown-up.</p>
<h2>What we store</h2><ul><li><b>Without signing in:</b> children's nicknames, chosen grade and quiz stars are kept only in this browser on this device.</li><li><b>When a parent signs in with Google:</b> we receive the parent's name, email address and profile picture from Google, and store the children's nicknames, grades and quiz results in our database (Google Firebase) so they appear on every device. Only the signed-in parent can read them.</li><li>We never ask for a child's full name, school, address, phone number or photo. Please use a first name or nickname.</li></ul>
<h2>Analytics</h2><p>We use Google Analytics for Firebase to count page visits, downloads and quiz plays so we can improve the site. Google signals and ad personalisation are turned off. Analytics does not receive children's nicknames or quiz answers.</p>
<h2>Advertising</h2><p>Some pages may show ads from Google AdSense, only in areas meant for parents. Ad requests are marked as child-directed, so ads are not personalised and no remarketing is used. Ads never appear inside quizzes, worksheets or printouts.</p>
<h2>AI study buddy</h2><p>Where the Ask Takhti PowerUp is available, questions typed into it are sent to an AI model to write a reply. Chats are not saved by Little Takhti.</p>
<h2>Deleting data</h2><p>Parents can remove a child and all their progress from the Family page at any time. To delete an account completely, contact us and we will remove it.</p>
<h2>Contact</h2><p>For any privacy question, write to the email address listed on this site.</p></article>`}
function home(){
 const subs=subjectsOf(grade),G=GR[grade];
 const wkI=Math.min(WEEK_NOW,10);const newRes=uniq(subs.map(s=>{const p=(PLAN[s.id]||[])[wkI];if(!p)return null;const x=p[1].find(v=>typeof v==='string');return x==='set'?RID[s.id+'-set']:x?RID[s.id+'-'+x]:RES.find(r=>r.sub===s.id&&!r.set&&r.pages.includes(p[1][0]-1))}).filter(Boolean));
 const quizN=RES.filter(r=>!r.set&&hasQuiz(r)).length;
 app.innerHTML=`
 <div class="hero"><div class="hdeco" aria-hidden="true"><i class="sunb"></i><i class="cl c1"></i><i class="cl c2"></i><i class="cl c3"></i><span class="hk k1">${kiteSVG}</span><span class="hk k2">${kiteSVG}</span><i class="hills"></i></div><div class="hero-in"><div>
   <p class="motto"><span>Little steps, high flights</span><i></i><span class="ur-t" dir="rtl" lang="ur">ننھے قدم، اونچی اڑان</span></p>
   <h1>Printable worksheets for <em><b class="w1">kids</b> <b class="w2">of</b> <b class="w3">all</b> <b class="w4">ages</b><svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14 C 70 4, 150 4, 297 12" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg></em></h1>
   <p class="lede">Worksheets and quiz games for every subject, Nursery to Grade 3.</p>
   <form class="search" id="sf" role="search">${ic.search}<input id="q" type="search" placeholder="Search in English, Urdu or Roman Urdu" aria-label="Search worksheets"><button type="submit">Search</button></form>
   <div class="quick"><span>Try:</span>${['number bonds','jama ke sawal','huroof','Indus Valley','magnets','شرارتی نو'].map(q=>`<button class="qp" data-q="${q}">${T(q)}</button>`).join('')}</div>
 </div>
 <div class="hero-art" aria-hidden="true">
   <div class="sheetf s1">${frame('g2-history',3,false)}</div><div class="sheetf s2">${frame('maths',3,false)}</div>
   <div class="tk"><div class="tk-h"></div><div class="tk-b"><span class="ur-t">ا ب پ ت</span><b>123</b></div></div>
   <img class="hx x1" src="img/pencil.svg" alt=""><img class="hx x2" src="img/glowing-star.svg" alt=""><span class="float f1"><i>${ic.ok}</i>A4 with answer keys</span><span class="float f2"><i>${ic.game}</i>Quiz games</span>
 </div></div></div>
 <div class="stats">
  <div class="stat"><i>${ic.layers}</i><div><b>${LIVE.length}</b><small>Grades, Nursery to 3</small></div></div>
  <div class="stat"><i>${ic.book}</i><div><b>${Object.keys(KIND).length}</b><small>Subjects</small></div></div>
  <div class="stat"><i>${ic.sheet}</i><div><b>${totalPages()}</b><small>Printable pages</small></div></div>
  <div class="stat"><i>${ic.game}</i><div><b>${quizN}</b><small>Quiz games</small></div></div>
 </div>

 <section id="grades"><div class="sec-h"><div><span class="kick">Start here</span><h2>Choose a grade</h2></div><span class="lnk">Grade 4 and 5 coming soon</span></div>
 <div class="grades">${GRADES.filter(g=>!g.hidden).map(g=>`<button type="button" class="gcard" ${g.soon?'disabled':`data-grade="${g.id}"`} aria-pressed="${g.id===grade}"><span class="gn">${g.short}</span><b>${g.name}</b><small>${g.age}</small>${g.soon?'<span class="soon">Coming soon</span>':`<span class="gcount">${RES.filter(r=>SUB[r.sub].grade===g.id).length} resources</span>`}</button>`).join('')}</div></section>

 ${(()=>{const a=activeChild(),ch=a&&FAM.children[a];if(!ch)return '';const recs=recommend(a);if(!recs.length)return '';
  return `<section><div class="sec-h"><div><span class="kick">${avSVG(ch.avatar)} For ${esc(ch.name)} · ${GR[ch.grade].name}</span><h2>Recommended next</h2></div><a class="lnk" href="#account">See progress →</a></div>
  <div class="recs wide">${recs.map(x=>`<a class="rec s-${x.r.sub}" href="${x.q?'#play-'+x.r.id:'#res-'+x.r.id}"><span class="sic">${subIcon(SUB[x.r.sub])}</span><span class="t">${T(SUB[x.r.sub].rtl?x.r.topic:x.r.title.replace(/ Practice$/,''))}<small>${SUB[x.r.sub].name} · ${x.why}</small></span><span class="pq">${x.q?ic.play+'Play':ic.sheet+'Open'}</span></a>`).join('')}</div></section>`})()}
 <section id="subjects"><div class="sec-h"><div><span class="kick">${G.name} · ${G.age}</span><h2>Browse by subject</h2></div><a class="lnk" href="#quiz">Play ${G.name} quizzes →</a></div>
 <div class="subs n${subs.length}">${subs.map(s=>`<a class="subj s-${s.id}" href="#subject-${s.id}"><div class="sart">${art(s.kind)}</div><span class="sic">${subIcon(s)}</span><h3>${s.name}${s.rtl?` <span class="ur-t">${s.ur}</span>`:''}</h3><p class="meta2">${RES.filter(r=>r.sub===s.id).length} resources · ${s.topics.length} topics</p>
  <div class="chips">${s.topics.slice(0,5).map(t=>`<span class="tchip${isUr(t)?' ur-t':''}"${isUr(t)?' dir="rtl"':''}>${t}</span>`).join('')}${s.topics.length>5?`<span class="tchip more">+${s.topics.length-5} more</span>`:''}</div><span class="go">Explore ${ic.arrow}</span></a>`).join('')}</div></section>

 <section><div class="sec-h"><div><span class="kick">This week</span><h2>This week's packs</h2></div><a class="lnk" href="#class">${G.name} · ${WEEKS[wkI][0]}, ${WEEKS[wkI][1]}</a></div>
 <div class="strip">${newRes.map(card).join('')}</div></section>

 ${funBand()}${adSlot('home')}<section class="pu-band"><div class="pu-band-t"><span class="kick pu-kick">${ic.spark}New · PowerUps</span><h2>Learning tools that power up every topic</h2><p>Flashcards, a doodleboard for tracing, mindmaps, listen-and-read, a study timer${puAvail('ask')?' and Takhti, an AI study buddy':''}. Open any worksheet to use them.</p><a class="btn sun lg" href="#powerups">${ic.spark}Explore PowerUps</a></div>
 <div class="pu-band-g">${puList().map(k=>`<a class="pu-mini" href="#powerups">${puIcon(k)}<span>${PU[k].name}</span></a>`).join('')}</div></section>
 <section><div class="qband"><div><span class="kick" style="color:var(--sun)">Play and learn</span><h2>Quiz games for every topic</h2><p>Short, colourful rounds built from the same worksheets. Earn stars, keep a streak going and beat your best score.</p><a class="btn sun lg" href="#quiz">${ic.play}Start playing</a></div>
  <div class="qb-art">${art('quiz')}<div class="demo" aria-hidden="true"><b>4 + 6 = ?</b><div class="dop"><span>8</span><span class="ok">10</span><span>12</span><span>9</span></div></div></div></div></section>

 ${window.LT_STATIC?'':`<section><div class="upband"><div class="ub-art">${art('english')}</div><div><span class="kick">For schools and teachers</span><h2>Turn your syllabus into practice</h2><p>Upload a curriculum, syllabus or pattern paper for Nursery to Grade 10. We draft worksheets and a quiz from it, and our admins review every draft before it goes live.</p>
  <div class="acts"><a class="btn sun lg" href="#contribute">${ic.dl}Upload material</a><a class="btn lg" href="#library">Community library${communityRes().length?` (${communityRes().length})`:''}</a></div></div></div></section>`}
 <section class="more"><div class="sec-h"><div><span class="kick">Keep going</span><h2>More ways to learn at home</h2></div></div><div class="feats">
  <a class="feat dk" href="#class"><span class="fart">${art('class')}</span><span class="fi">${ic.cal}</span><h3>Weekly resource guide</h3><p>Worksheets, activities and a short story for each week, for every grade and subject.</p><div class="wkrow">${WEEKS.slice(Math.max(0,WEEK_NOW-5),WEEK_NOW+1).map((w,i,arr)=>`<span class="${i===arr.length-1?'cur':''}">W${WEEKS.indexOf(w)+1}</span>`).join('')}</div><span class="go">Open class material ${ic.arrow}</span></a>
  <a class="feat yl" href="#parents"><span class="fart">${art('parents')}</span><span class="fi">${ic.heart}</span><h3>Parents' corner</h3><p>Topic guides that show you how to explain each idea at home, step by step.</p><span class="go">Read the guides ${ic.arrow}</span></a>
  <a class="feat" href="#quiz"><span class="fart">${art('quiz')}</span><span class="fi">${ic.game}</span><h3>Quiz games</h3><p>${quizN} games across all grades. Questions match the worksheets your child practises.</p><span class="go">Play now ${ic.arrow}</span></a>
 </div></section>`;
}

/* ---------- subject ---------- */
let topicSel={};
function subject(id){
 const s=SUB[id];if(!s)return home();
 if(s.grade!==grade)setGrade(s.grade,true);
 const sel=topicSel[id]||'All',hasSet=!!RID[id+'-set'];
 const list=RES.filter(r=>r.sub===id&&(sel==='All'||r.topic===sel||(sel==='Revision'&&r.set)));
 app.innerHTML=`<div class="crumbs"><a href="#home">Home</a>/<span>${GR[s.grade].name}</span>/<span>${s.name}</span></div>
 <div class="phead s-${id}"><span class="sic">${subIcon(s)}</span><div style="min-width:0;flex:1"><span class="kick">${GR[s.grade].name} · ${GR[s.grade].age}</span><h1>${s.name}${s.rtl?` <span class="ur-t">${s.ur}</span>`:''}</h1>
  <p>${s.topics.length} topics, each with a practice pack, answer keys and a quiz game.</p><p class="refs">Topic scope follows the sequence of <b>${REFS[s.kind]}</b>.</p></div><div class="ph-art">${art(s.kind)}</div></div>
 <div class="filters s-${id}" role="group" aria-label="Filter by topic">${['All',...s.topics,...(hasSet?['Revision']:[])].map(t=>`<button class="fchip" data-topic="${t}" aria-pressed="${t===sel}">${T(t)}</button>`).join('')}</div>
 <p class="count">${list.length} resource${list.length===1?'':'s'}${sel!=='All'?' in '+T(sel):''}</p>
 <div class="cards">${list.map(card).join('')}</div>
 ${(()=>{const cm=communityRes().filter(r=>SUB[r.sub].grade===s.grade&&SUB[r.sub].kind===s.kind);return cm.length?`<section><div class="sec-h"><div><span class="kick">Community</span><h2>From uploaded material</h2></div><a class="lnk" href="#library">Library →</a></div><div class="cards">${cm.map(card).join('')}</div></section>`:''})()}`;
}

/* ---------- detail ---------- */
let vIdx=0,vKey=false;
function detail(id){
 const r=RID[id];if(!r)return home();
 const s=SUB[r.sub];if(s.grade!==grade)setGrade(s.grade,true);vIdx=0;vKey=false;
 const ur=isUr(r.title),q=hasQuiz(r);
 app.innerHTML=`<div class="crumbs"><a href="#home">Home</a>/<span>${GR[s.grade].name}</span>/<a href="#subject-${s.id}">${s.name}</a>/<span>${ur?r.en:r.title}</span></div>
 <div class="detail s-${s.id}">
  <div class="viewer"><div id="vf"></div>
   <div class="vbar"><div class="nav2"><button class="ibtn" id="vp" aria-label="Previous page">${ic.l}</button><span class="pg" id="vn"></span><button class="ibtn" id="vx" aria-label="Next page">${ic.r}</button></div>
   <label class="toggle"><input type="checkbox" id="vk"> Show answer key</label></div></div>
  <div class="info">${ur?`<h1 class="ur-t" dir="rtl" lang="ur">${r.title}</h1><div class="gloss">${r.en}</div>`:`<h1>${r.title}</h1>`}
   <div class="tags"><span class="tag">${GR[s.grade].name}</span><span class="tag">${s.name}</span><span class="tag">${T(r.topic)}</span><span class="tag">${r.pages.length} pages + answer keys</span><span class="tag key">${ic.ok}Answer key included</span></div>
   ${acts(r,q?`<a class="btn sun" href="#play-${r.id}">${ic.play}Play the quiz</a>`:'')}
   <p class="rep"><a href="#help-${r.id}">${I('<path d="M4 21V4h11l-1.5 4L15 12H4"/>',2)}Found a mistake? Report it</a></p>
   <h2>About this resource</h2><p>${r.desc}</p>
   <h2>Learning objectives</h2><ul class="obj">${r.obj.map(o=>`<li>${T(o)}</li>`).join('')}</ul>
   <h2>What's inside</h2><ul class="inside">${r.pages.map((i,j)=>{const p=PAGES[s.id][i];const pk=r.set?RES.find(x=>x.sub===s.id&&!x.set&&x.pages.includes(i)):null;return `<li><a href="${pk?'#res-'+pk.id:'#'}" data-pg="${j}"><span class="no">${j+1}</span>${T(p.title)}<small>${r.set?T(p.topic):(RID[s.id+'-set']&&i<10?'Also in revision set':'Practice page')}</small></a></li>`}).join('')}</ul>
  </div></div>
 ${r.community?'':puRow(r)}
 ${adSlot('resource')}
 <section><div class="sec-h"><h2>More ${GR[s.grade].name} ${s.name}</h2><a class="lnk" href="#subject-${s.id}">See all →</a></div><div class="strip">${RES.filter(x=>x.sub===s.id&&x.id!==r.id).slice(0,4).map(card).join('')}</div></section>`;
 const draw=()=>{document.getElementById('vf').innerHTML=frame(s.id,r.pages[vIdx],vKey,vIdx+1,r.pages.length);document.getElementById('vn').textContent=`Page ${vIdx+1} of ${r.pages.length}`;
  document.getElementById('vp').disabled=vIdx===0;document.getElementById('vx').disabled=vIdx===r.pages.length-1;fit()};
 document.getElementById('vp').onclick=()=>{vIdx--;draw()};document.getElementById('vx').onclick=()=>{vIdx++;draw()};
 document.getElementById('vk').onchange=e=>{vKey=e.target.checked;draw()};draw();
 document.querySelectorAll('.inside a[href="#"]').forEach(a=>a.onclick=e=>{e.preventDefault();vIdx=+a.dataset.pg;draw();document.querySelector('.viewer').scrollIntoView({behavior:'smooth',block:'start'})});
}

/* ---------- class material ---------- */
let classSub={};
function classPage(){
 const subs=subjectsOf(grade);let cur=classSub[grade];if(!cur||!SUB[cur]||SUB[cur].grade!==grade)cur=subs[0].id;
 const s=SUB[cur],plan=PLAN[cur],bi=URW[s.id];
 const H=(t,i)=>`<h4 class="gh"><span class="gi" aria-hidden="true">${i}</span>${t}</h4>`;
 const wk=plan.map((p,i)=>p?i:-1).filter(i=>i>=0);
 const attOf=p=>uniq(p[1].map(x=>x==='set'?RID[s.id+'-set']:typeof x==='string'?RID[s.id+'-'+x]:RES.find(r=>r.sub===s.id&&!r.set&&r.pages.includes(x-1)))).filter(Boolean);
 const wsHTML=att=>`<div class="att">${att.map(r=>`<a class="row" href="#res-${r.id}"><span class="mini">${frame(r.sub,r.pages[0],false)}</span><span class="t">${T(r.title)}<small>${r.pages.length} pages · answer key</small></span></a>${hasQuiz(r)?`<a class="row" href="#play-${r.id}"><span class="gi" style="width:46px;height:46px;border-radius:12px">${ic.game}</span><span class="t">Quiz game<small>${buildQuiz(r).length} questions from this pack</small></span><span class="pq">${ic.play}Play</span></a>`:''}`).join('')}</div>`;
 const split=(sx,ask)=>{const c=sx.lastIndexOf(ask);return c>0?[sx.slice(0,c).trim(),sx.slice(c+ask.length).trim()]:[sx,'']};
 app.innerHTML=`<div class="phead s-${s.id}"><div style="flex:1;min-width:0"><span class="kick">Weekly resource guide</span><h1>Class material</h1><p>Each week's goal with worksheets, a quiz, activities and a short story to use at home or in class. Start at Week 1 and work forward.</p>${gradePick()}</div><div class="ph-art">${art('class')}</div></div>
 ${subTabs(cur,'cs')}
 <div class="weeks">${wk.map(i=>`<button class="wk" data-wk="${i}">${WEEKS[i][0]}</button>`).join('')}</div>
 <div class="feed s-${s.id}">${wk.map((i,n)=>{const p=plan[i],att=attOf(p);const now=i===WEEK_NOW;
  let body;
  if(bi){const b=bi[n];const [ub,uq]=split(p[4][1],'سوال:');const [eb,eq]=split(b.story[1],'Ask:');
   body=`<div class="pc-top"><span class="tag">${GR[grade].name} · Urdu</span><h3><span class="ur-t">${p[0]}</span> <span class="gloss" style="font-family:var(--body);font-size:16px;font-weight:600">${b.en}</span></h3></div>
   <div class="bil goalb lang-${FAM.profile.lang||'both'}"><div class="en-c"><b class="bl-h">This week's goal</b><p>${mixUr(b.goal[0])}</p></div><div class="ur ur-c" dir="rtl" lang="ur"><b class="bl-h ur-t">اس ہفتے کا مقصد</b><p class="ur-t">${b.goal[1]}</p></div></div>
   <div class="guide">
    <div>${H('Worksheets and quiz',ic.sheet)}${wsHTML(att)}</div>
    <div>${H('Activities · <span class="ur-t">سرگرمیاں</span>',ic.spark)}<div class="bil acts2 lang-${FAM.profile.lang||'both'}"><ul class="acts-l en-c">${b.acts.map(a=>`<li>${mixUr(a[0])}</li>`).join('')}</ul><ul class="acts-l ur-t ur-c" dir="rtl" lang="ur">${b.acts.map(a=>`<li>${a[1]}</li>`).join('')}</ul></div></div>
    <div class="story">${H('Story time · <span class="ur-t">کہانی</span>',ic.book)}<div class="bil lang-${FAM.profile.lang||'both'}">
     <div class="stx ur-t ur-c" dir="rtl" lang="ur"><b class="st-t">${p[4][0]}</b><p>${ub}</p>${uq?`<p class="ask"><b>سوال:</b> ${uq}</p>`:''}</div>
     <div class="stx en-c"><span class="bl-h">In English</span><b class="st-t">${b.story[0]}</b><p>${eb}</p>${eq?`<p class="ask"><b>Ask:</b> ${eq}</p>`:''}</div></div></div>
   </div>`}
  else{const [st,sx]=p[4];const [sb,sq]=split(sx,'Ask:');
   body=`<div class="pc-top"><span class="tag">${GR[grade].name} · ${s.name}</span><h3>${p[0]}</h3></div>
   <p class="goal"><b>This week's goal:</b> ${p[2]}</p>
   <div class="guide">
    <div>${H('Worksheets and quiz',ic.sheet)}${wsHTML(att)}</div>
    <div>${H('Activities',ic.spark)}<ul class="acts-l">${p[3].map(a=>`<li>${a}</li>`).join('')}</ul></div>
    <div class="story">${H('Story time',ic.book)}<div class="stx"><b class="st-t">${st}</b><p>${sb}</p>${sq?`<p class="ask"><b>Ask:</b> ${sq}</p>`:''}</div></div>
   </div>`}
  return `<div class="post" id="wk${i}"><div class="when"><b>${WEEKS[i][0]}</b><small>${WEEKS[i][1]}</small>${now?'<span class="now">This week</span>':''}</div><div class="pcard">${body}</div></div>`}).join('')}</div>`;
}

/* ---------- parents ---------- */
const KHELP={
 english:{easier:'Work out loud together and point to each word as you read it.',harder:'Ask your child to make up their own example and use it in a sentence.',ready:'Your child does the practice pack mostly alone and can explain one answer to you.',need:'Paper, a pencil and a storybook'},
 maths:{easier:'Use real objects such as chickpeas, buttons or spoons, and smaller numbers.',harder:'Use bigger numbers and ask your child to make up a story sum for you to solve.',ready:'Your child gets most answers right without counting on fingers every time.',need:'Small things to count, paper and a pencil'},
 science:{easier:'Look, touch and talk first. Leave the worksheet for later.',harder:'Ask "why?" and "what would happen if…?" and let your child predict before you test.',ready:'Your child can explain the idea in their own words with an example from home.',need:'Everyday things from the kitchen or garden'},
 social:{easier:'Start with your own family, home and feelings.',harder:'Ask your child to compare two families, feelings or rules and say why they differ.',ready:'Your child can talk about the topic using their own examples.',need:'Family photos, paper and crayons'},
 history:{easier:'Use pictures and simple stories before names and dates.',harder:'Ask your child to compare then and now and say what changed and why.',ready:'Your child can retell one story from the topic and name one thing people did long ago.',need:'A map, pictures, a short video if you have one'},
 geography:{easier:'Start with your own home, street and city on a map.',harder:'Ask your child to give directions or find places on a blank map.',ready:'Your child finds the place on a map and says one fact about it.',need:'A map or globe, paper and a pencil'},
 islamiat:{easier:'Focus on meanings and good habits. Practise Arabic words with the school teacher.',harder:'Ask your child to explain a topic in their own words and give an example from daily life.',ready:'Your child explains the topic and practises it at home.',need:'The school Islamiat textbook'},
 computer:{easier:'Point to real parts of a computer or phone while you talk.',harder:'Let your child show you how to do a task on the computer.',ready:'Your child names the parts and does the task safely.',need:'A computer, laptop or tablet with supervision'},
 gk:{easier:'Use real objects and pictures. Keep it to talking and pointing.',harder:'Ask your child to sort things into groups and say why.',ready:'Your child names and sorts the things in the topic without help.',need:'Picture books and everyday objects'},
 urdu:{easier:'Say each sound slowly and let your child trace with a finger before writing.',harder:'Ask your child to read the word in a short sentence, then write a new one.',ready:'Your child reads and writes the words with little help.',need:'A pencil, paper, and a takhti or slate if you have one'}};
function keyWords(r){const s=new Set(),pages=PAGES[r.sub];r.pages.forEach(pi=>pages[pi].blocks.forEach(b=>{if(b.t==='bank')b.items.forEach(w=>s.add(w));if(b.t==='sort')b.cats.forEach(w=>s.add(w));if(b.t==='match')b.left.forEach(w=>w.length<18&&s.add(w))}));
 if(s.size<4)r.pages.forEach(pi=>pages[pi].blocks.forEach(b=>{if(b.t==='fill')b.items.forEach(it=>{const m=it.match(/\{\{(.+?)\}\}/);if(m&&m[1].length<14&&!/^\d+$/.test(m[1]))s.add(m[1])})}));return [...s].slice(0,10)}
function askQs(r){return buildQuiz(r).filter(q=>!q.vis&&!q.opts.some(o=>o[0]==='@'||o[0]==='#')).slice(0,3)}
let parentSub={};
function parents(){parentsBase();const ph=document.querySelector('.phead');ph&&ph.insertAdjacentHTML('afterend',toolsBand())}
function parentsBase(){
 const subs=subjectsOf(grade);let cur=parentSub[grade];if(!cur||!SUB[cur]||SUB[cur].grade!==grade)cur=subs[0].id;const s=SUB[cur],kh=KHELP[s.kind]||KHELP.gk;
 const tips=[['Keep it short','Ten to fifteen minutes, one page at a time. Stop while your child is still enjoying it.'],
  ['Same time every day','A fixed time, like after the school snack, means fewer arguments.'],
  ['Let them try first','Wait before helping. Check together with the answer key and tick what is right.'],
  ['Praise the effort','Say "You tried hard on that" rather than only "Clever!"'],
  ['Use any language','Explain in Urdu, English, Punjabi or a mix. The idea matters more than the language.'],
  ['Print on A4','Choose A4 paper and 100% scale. Black and white printing works for every sheet.']];
 const a=activeChild(),ch=a&&FAM.children[a];
 app.innerHTML=`<div class="phead s-${s.id}"><div class="pc-hero" style="width:100%"><div><span class="kick">Parents' corner</span><h1>Help your child understand each topic</h1><p>Detailed guides for every topic: what it means, how to explain it, words to use, questions to ask, how to make it easier or harder, and when your child is ready to move on.</p>${gradePick()}</div>
 <div class="pc-side"><div class="ph-art sm">${art('parents')}</div><div class="routine"><h3>How to use a guide</h3><ol><li>Read the guide yourself first. It takes five minutes.</li><li>Explain the topic with the three steps.</li><li>Do the home activity together.</li><li>Try the practice pack, then the quiz game.</li></ol></div></div></div></div>
 ${ch&&ch.grade===grade?`<p class="kweak" style="margin-top:16px">${avSVG(ch.avatar)}<span>Showing guides for ${esc(ch.name)}'s grade. Topics ${esc(ch.name)} finds harder are marked.</span></p>`:''}
 <section style="margin-top:28px"><div class="sec-h"><div><span class="kick">${GR[grade].name}</span><h2>Topic guides</h2></div></div>
 ${subTabs(cur,'ps')}
 <div class="guides s-${s.id}">${s.topics.map((t,k)=>{const g=GUIDE[s.id][k],pk=RID[s.id+'-t'+(k+1)];const kw=keyWords(pk),qs=askQs(pk);
  const p=a&&progOf(a,pk.id),weak=p&&p.total&&p.right/p.total<.6;
  return `<details class="gd"${k===0?' open':''}><summary><span class="gd-n">${k+1}</span><span class="gd-t"><b>${s.rtl?`<span class="ur-t">${t}</span> <span class="gd-en">${UR_EN[t]}</span>`:(PACK_T[s.id]?PACK_T[s.id][k]:t)}${weak?` <span class="tag" style="background:var(--sun-soft)">Needs practice</span>`:''}</b><small>${mixUr(g[0])}</small></span><span class="gd-c" aria-hidden="true"></span></summary>
  <div class="gd-b">
   <div class="gcard2"><h4 class="gh"><span class="gi">${ic.spark}</span>By the end, your child can</h4><ul class="obj">${pk.obj.map(o=>`<li>${mixUr(o)}</li>`).join('')}</ul></div>
   <div class="gcard2"><h4 class="gh"><span class="gi">${ic.cal}</span>Time and materials</h4><p><b>10 to 15 minutes</b> a day, about one week for this topic.</p><p class="muted">You'll need: ${kh.need}.</p></div>
   <div><h4 class="gh"><span class="gi">1</span>How to explain it</h4><ol class="gd-steps">${g[1].map(x=>`<li>${mixUr(x)}</li>`).join('')}</ol></div>
   <div><h4 class="gh"><span class="gi">2</span>Try this at home</h4><ul class="acts-l">${g[2].map(x=>`<li>${mixUr(x)}</li>`).join('')}</ul></div>
   ${kw.length?`<div><h4 class="gh"><span class="gi">3</span>Words to use</h4><div class="chips">${kw.map(w=>`<span class="tchip${isUr(w)?' ur-t':''}">${w}</span>`).join('')}</div></div>`:''}
   ${qs.length?`<div><h4 class="gh"><span class="gi">4</span>Questions to ask</h4><ul class="qask">${qs.map(q=>`<li><span${isUr(q.q)?' class="ur-t" dir="rtl"':''}>${q.q.replace(/<span class="qbl"><\/span>/g,'____')}</span><small>Answer: ${isUr(q.ans)?`<span class="ur-t">${q.ans}</span>`:q.ans}</small></li>`).join('')}</ul></div>`:''}
   <div class="lvl3"><div class="lv e"><b>Make it easier</b><p>${kh.easier}</p></div><div class="lv h"><b>Make it harder</b><p>${kh.harder}</p></div><div class="lv r"><b>Ready to move on when</b><p>${kh.ready}</p></div></div>
   <div class="watch" style="grid-column:1/-1">${ic.warn}<div><b>Watch out for</b><p>${mixUr(g[3])}</p></div></div>
   <div class="gd-foot"><a class="row" href="#res-${pk.id}"><span class="mini">${frame(pk.sub,pk.pages[0],false)}</span><span class="t">${T(pk.title)}<small>${pk.pages.length} practice pages · answer key</small></span></a><button class="btn" type="button" data-print="${pk.id}">${ic.print}Print pack</button>${hasQuiz(pk)?`<a class="btn sun" href="#play-${pk.id}">${ic.play}Quiz</a>`:''}</div></div></details>`}).join('')}</div></section>
 <section><div class="sec-h"><h2>Good habits for home learning</h2></div><div class="tips">${tips.map((t,i)=>`<div class="tip"><span class="tn">${i+1}</span><div><h3>${t[0]}</h3><p>${t[1]}</p></div></div>`).join('')}</div></section>`;
}

/* ---------- quiz hub ---------- */
let quizSub='all';
function bestFor(rid){const a=activeChild();if(a){const p=progOf(a,rid);return p?p.best:0}return store.get('best',{})[rid]||0}
function playedFor(rid){const a=activeChild();return a?!!progOf(a,rid):!!store.get('best',{})[rid]}
function qTile(r,i){const s=SUB[r.sub],b=bestFor(r.id),pl=playedFor(r.id),n=Math.min(10,buildQuiz(r).length);
 return `<a class="qtile s-${r.sub}" href="#play-${r.id}"><div class="qt-top"><span class="qt-n">${i+1}</span>${b===3?'<span class="rib m">Mastered</span>':!pl?'<span class="rib n">New</span>':''}<span class="qt-kite">${kiteSVG}</span></div>
  <div class="qt-b"><h3>${T(s.rtl?r.topic:r.title.replace(/ Practice$/,''))}</h3>${s.rtl?`<small>${UR_EN[r.topic]||''}</small>`:''}<small>${n} questions${r.community?' · community':''}</small>
  <div class="qf"><span class="stars" aria-label="${b} of 3 stars">${[1,2,3].map(k=>starSVG(k<=b)).join('')}</span><span class="play">${ic.play}${pl?'Play again':'Play'}</span></div></div></a>`}
function pathHTML(list,s){const OFF=[0,56,84,56,0,-56,-84,-56];const cur=list.findIndex(r=>bestFor(r.id)<3);
 return `<div class="lpath">${list.map((r,i)=>{const b=bestFor(r.id),done=b===3,isCur=i===cur,t=T(s.rtl?r.topic:r.title.replace(/ Practice$/,''));
  return `<a class="pnode${done?' done':''}${isCur?' cur':''}" href="#play-${r.id}" style="--off:${OFF[i%8]}px" aria-label="${esc(s.rtl?(UR_EN[r.topic]||r.topic):r.title)}, ${b} of 3 stars">
   ${isCur?`<span class="pstart">${bestFor(r.id)||playedFor(r.id)?'CONTINUE':'START'}</span>`:''}
   <span class="pbtn">${done?I('<path d="M5 12.5l4.5 4.5L19 7.5"/>',3.2):I('<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z" fill="currentColor"/>',1.5)}</span>
   <span class="plab">${t}</span><span class="pst">${[1,2,3].map(k=>starSVG(k<=b)).join('')}</span></a>`}).join('')}
  <div class="lp-art" aria-hidden="true">${art(s.kind)}</div></div>`}
function quizHub(){
 const subs=subjectsOf(grade);if(quizSub!=='all'&&(!SUB[quizSub]||SUB[quizSub].grade!==grade))quizSub='all';
 const a=activeChild(),ch=a&&FAM.children[a];const recs=ch&&ch.grade===grade?recommend(a).filter(x=>x.q):[];
 const shown=subs.filter(s=>quizSub==='all'||s.id===quizSub);
 const comm=communityRes().filter(r=>SUB[r.sub].grade===grade&&hasQuiz(r)&&(quizSub==='all'||SUB[r.sub].kind===SUB[quizSub].kind));
 const total=RES.filter(r=>!r.set&&SUB[r.sub].grade===grade&&hasQuiz(r)),earned=total.reduce((x,r)=>x+bestFor(r.id),0);
 app.innerHTML=`<div class="qband"><div><span class="kick" style="color:var(--sun)">Play and learn</span><h2>${GR[grade].name} quiz games</h2><p>Pick a subject and a topic. Every game is built from the practice packs, reads questions aloud, and saves stars to ${ch?esc(ch.name)+"'s profile":'this device'}.</p>
  <div class="gpick">${GRADES.filter(g=>!g.hidden).map(g=>`<button type="button" ${g.soon?'disabled':`data-grade="${g.id}"`} aria-pressed="${g.id===grade}" class="dk">${g.name}${g.soon?' · soon':''}</button>`).join('')}</div>
  <div class="qmeter"><span>${starSVG(true)}<b>${earned}</b> of ${total.length*3} stars</span><span>${ch?`${avSVG(ch.avatar)}Playing as <b>${esc(ch.name)}</b> <a href="#account">Change</a>`:`<a href="#account">Add your child</a> to save progress`}</span></div></div>
  <div class="qb-art">${art('quiz')}</div></div>
 ${recs.length?`<section style="margin-top:28px"><div class="sec-h"><div><span class="kick">For ${esc(ch.name)}</span><h2>Play next</h2></div></div><div class="recs wide">${recs.map(x=>`<a class="rec s-${x.r.sub}" href="#play-${x.r.id}"><span class="sic">${subIcon(SUB[x.r.sub])}</span><span class="t">${T(SUB[x.r.sub].rtl?x.r.topic:x.r.title.replace(/ Practice$/,''))}<small>${SUB[x.r.sub].name} · ${x.why}</small></span><span class="pq">${ic.play}Play</span></a>`).join('')}</div></section>`:''}
 <div class="tabs" role="tablist" style="margin-top:26px"><button role="tab" class="tab" data-qs="all" aria-selected="${quizSub==='all'}" style="${quizSub==='all'?'background:var(--ink);color:var(--surface);border-color:var(--ink)':''}">All subjects</button>${subs.map(x=>`<button role="tab" class="tab s-${x.id}" data-qs="${x.id}" aria-selected="${x.id===quizSub}"><span class="sw"></span>${x.name}</button>`).join('')}</div>
 ${shown.map(s=>{const list=RES.filter(r=>r.sub===s.id&&!r.set&&hasQuiz(r));if(!list.length)return '';const st=list.reduce((x,r)=>x+bestFor(r.id),0);
  return `<section class="qsec s-${s.id}"><div class="qs-head"><div class="qs-t"><span class="qs-k">Unit ${shown.indexOf(s)+1} · ${list.length} games</span><h2>${s.name}${s.rtl?` <span class="ur-t">${s.ur}</span>`:''}</h2>
   <div class="qs-prog"><div class="qs-bar"><i style="width:${list.length?st/(list.length*3)*100:0}%"></i></div><small>${st}/${list.length*3} ${starSVG(true)}</small></div></div>
   <a class="qs-gb" href="#parents" data-pg-sub="${s.id}">${ic.heart}<span>Guide</span></a></div>${pathHTML(list,s)}</section>`}).join('')}
 ${(()=>{const bl=QONLY.filter(r=>SUB[r.sub].grade===grade);if(!bl.length||quizSub!=='all')return '';const st=bl.reduce((x,r)=>x+bestFor(r.id),0);
  return `<section class="qsec bonus"><div class="qs-head"><div class="qs-t"><span class="qs-k">Bonus · ${bl.length} games · new questions every time</span><h2>Quiz games</h2><div class="qs-prog"><div class="qs-bar"><i style="width:${st/(bl.length*3)*100}%"></i></div><small>${st}/${bl.length*3} ${starSVG(true)}</small></div></div></div>${pathHTML(bl,{rtl:false,kind:'quiz'})}</section>`})()}
 ${comm.length?`<section class="qsec"><div class="sec-h"><div><span class="kick">Community</span><h2>Games from uploaded material</h2></div></div><div class="qtiles">${comm.map(qTile).join('')}</div></section>`:''}`;
}

/* ---------- quiz game ---------- */
let G=null,actx=null,tmr=null;
const SPEED=12;
function tone(fs,type,gap){if(!store.get('sound',true))return;try{actx=actx||new (window.AudioContext||window.webkitAudioContext)();const t=actx.currentTime;
 fs.forEach((f,i)=>{const o=actx.createOscillator(),g=actx.createGain();o.type=type;o.frequency.value=f;const s=t+i*gap;g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.16,s+.02);g.gain.exponentialRampToValueAtTime(.0001,s+.24);o.connect(g).connect(actx.destination);o.start(s);o.stop(s+.26)})}catch(e){}}
const sfx={ok:()=>tone([523,659,784],'triangle',.08),no:()=>tone([262,208],'sine',.12),combo:()=>tone([523,659,784,1047],'triangle',.07),hint:()=>tone([440,554],'sine',.06),win:()=>tone([523,659,784,1047,1319],'triangle',.1)};
function mascot(mood,big){const m={think:'<path d="M12 21.5h10"/>',happy:'<path d="M11 20c3 4 9 4 12 0"/>',oops:'<path d="M12 23c3-3 7-3 10 0"/>',wow:'<ellipse cx="17" cy="22" rx="3" ry="3.5"/>'}[mood];
 return `<svg class="mascot${big?' big':''} m-${mood}" viewBox="0 0 34 40" aria-hidden="true"><rect x="12" y="1.5" width="10" height="9" rx="3" fill="#FFD93B" stroke="#123B28" stroke-width="1.6"/><circle cx="17" cy="6" r="1.6" fill="#123B28"/><rect x="2" y="8" width="30" height="30" rx="7" fill="#FFD93B" stroke="#123B28" stroke-width="1.6"/><circle cx="11.5" cy="16" r="1.9" fill="#123B28"/><circle cx="22.5" cy="16" r="1.9" fill="#123B28"/><g fill="none" stroke="#2F8F55" stroke-width="2" stroke-linecap="round">${m}</g>${mood!=='think'?'<circle cx="8" cy="21" r="2" fill="#F48FB1" opacity=".7"/><circle cx="26" cy="21" r="2" fill="#F48FB1" opacity=".7"/>':''}</svg>`}
const kiteSVG=`<img src="img/kite.svg" alt="" class="kimg">`;
function nextQuizFor(r){const g=SUB[r.sub].grade;const list=RES.filter(x=>x.sub===r.sub&&!x.set&&hasQuiz(x));const i=list.findIndex(x=>x.id===r.id);
 if(i>=0&&list[i+1])return list[i+1];const notDone=list.find(x=>x.id!==r.id&&bestFor(x.id)<3);if(notDone)return notDone;
 const others=RES.filter(x=>!x.set&&SUB[x.sub].grade===g&&x.sub!==r.sub&&hasQuiz(x)).concat(QONLY.filter(x=>SUB[x.sub].grade===g&&x.id!==r.id));return others.find(x=>bestFor(x.id)<3)||others[0]||null}
function play(id){
 ensureCustom(id);const r=RID[id];if(!r||!hasQuiz(r))return quizHub();const s=SUB[r.sub];if(s.grade!==grade)setGrade(s.grade,true);
 clearInterval(tmr);G={r,s,i:0,score:0,streak:0,bestStreak:0,right:0,res:[],missed:[]};setLevel(levelOf(s));intro();
}
const gTitle=()=>G.s.rtl?G.r.topic:G.r.title.replace(/ Practice$/,'');
function setLevel(lv){G.level=lv;const L=LV[lv];G.qs=levelQs(G.r,lv).map(q=>{const o=shuffle(q.opts);return {...q,opts:o,ai:o.indexOf(q.ans)}});G.hints=L.hints;G.speed=L.speed}
function intro(){const {r,s}=G,ur=!!s.rtl,best=bestFor(r.id);
 app.innerHTML=`<div class="game s-${s.id}"><div class="gcardq gintro">
  <div class="gi-art">${art('quiz')}</div>
  <span class="kick">${GR[s.grade].name} · ${s.name} quiz</span>
  <h1 class="${ur?'ur-t':''}">${T(gTitle())}</h1>${ur?`<p class="gloss">${UR_EN[r.topic]}</p>`:''}
  <div class="lvpick" role="radiogroup" aria-label="Level">${Object.entries(LV).map(([k,v])=>`<button type="button" role="radio" class="lv-${k}" data-lv="${k}" aria-checked="${G.level===k}"><b>${ur?v.ur:v.label}</b><small>${v.desc}</small></button>`).join('')}</div>
  <div class="gi-meta"><span>${ic.sheet}${G.qs.length} questions</span><span>${ic.bulb}${G.hints} hints</span><span>${starSVG(true)}Up to 3 stars</span></div>
  <ul class="how"><li><b>Tap an answer</b> or press 1 to 4.</li><li><b>Answer quickly</b> for a speed bonus.</li><li><b>3 in a row</b> doubles your points and lifts your kite higher.</li></ul>
  ${whoPlays()}
  ${canSpeak(ur)?`<label class="toggle readtg"><input type="checkbox" id="autoread" ${store.get('autoread',['nursery','kg'].includes(s.grade))?'checked':''}> ${ic.sound} Read questions aloud</label>${voicePick(ur)}`:(ur&&SPEECH?`<p class="gbest">Read aloud needs an Urdu voice on this device.</p>`:'')}
  ${best?`<p class="gbest">Best so far: <span class="stars">${[1,2,3].map(i=>starSVG(i<=best)).join('')}</span></p>`:''}
  <div class="acts" style="justify-content:center"><button class="btn sun lg" data-start="1" autofocus>${ic.play}Let's play</button><a class="btn lg" href="#quiz">Choose another</a></div></div></div>`;
 setTimeout(()=>{const b=document.querySelector('[data-start]');b&&b.focus()},50);
}
function gameTop(){const snd=store.get('sound',true),n=G.qs.length;
 const pos=Math.max(5,Math.min(94,(G.res.length/n)*100)),lift=Math.min(G.streak,5)*6;
 return `<div class="gtop"><a class="ibtn" href="#quiz" aria-label="Back to quizzes">${ic.l}</a><h1>${T(gTitle())}<small>${GR[G.s.grade].name} · ${G.s.name} quiz</small></h1>
 <span class="pill2" title="Points">${starSVG(true)}<span id="gsc">${G.score}</span></span><span class="pill2 streak${G.streak>=3?' hot':''}" title="Streak">${ic.flame}<span id="gst">${G.streak}</span></span>
 <button class="ibtn" id="snd" aria-label="${snd?'Turn sound off':'Turn sound on'}">${snd?ic.sound:ic.mute}</button></div>
 <div class="sky" aria-hidden="true"><div class="gprog"><i style="width:${Math.max(4,G.res.length/n*100)}%"></i></div><div class="cloud c1"></div><div class="cloud c2"></div><div class="string" style="width:${pos}%"></div><span class="kite" style="left:${pos}%;bottom:${10+lift}px">${kiteSVG}</span>
  <div class="dots">${G.qs.map((_,k)=>`<i class="${G.res[k]===true?'ok':G.res[k]===false?'no':k===G.i?'cur':''}"></i>`).join('')}</div></div>`}
function renderQ(){
 const q=G.qs[G.i],ur=!!G.s.rtl,n=G.qs.length;
 const hello=ur?`سوال ${G.i+1} از ${n}`:`Question ${G.i+1} of ${n}`;
 app.innerHTML=`<div class="game s-${G.s.id}">${gameTop()}
 <div class="gcardq"><span class="plus" id="plus"></span>
  <div class="qhead">${mascot('think')}<div class="bubble" id="bub">${hello}${G.streak>=3?` <span class="combo">${ic.flame}${ur?'دگنے نمبر!':'Double points!'}</span>`:''}</div>
   ${canSpeak(ur)?`<button class="hintb" id="say" aria-label="Read the question aloud">${ic.sound}<span>Listen</span></button>`:''}<button class="hintb" id="hint" ${G.hints?'':'disabled'} aria-label="Use a hint, ${G.hints} left">${ic.bulb}<span>Hint</span><b>${G.hints}</b></button></div>
  ${q.story?`<div class="qstory${isUr(q.story)?' ur':''}"><span class="qs-l">${ic.sheet}${ur?'کہانی پڑھیں':'Read the story'}</span><p class="${isUr(q.story)?'ur-t':''}" ${isUr(q.story)?'dir="rtl"':''}>${q.story}</p></div>`:''}
  ${q.sub?`<p class="qsub${isUr(q.sub)?' ur-t':''}" ${isUr(q.sub)?'dir="rtl"':''}>${q.sub}</p>`:''}
  <div class="qtext${isUr(q.q)?' ur-t':''}" ${isUr(q.q)?'dir="rtl"':''}>${q.q}</div>${q.vis?`<div class="qvis">${q.vis}</div>`:''}
  <div class="tbar" aria-hidden="true"><i id="tb"></i><span id="tbl">${ic.flame} Speed bonus</span></div>
  <div class="qopts${q.opts.length===2?' two':''}">${q.opts.map((o,j)=>`<button class="qo" data-ans="${j}"><span class="k">${j+1}</span><span class="v${isUr(o)?' ur-t':''}">${optHTML(o)}</span></button>`).join('')}</div>
  <div class="fb" id="fb" hidden></div></div></div>`;
 G.t0=Date.now();G.lock=false;clearInterval(tmr);
 if(store.get('autoread',['nursery','kg'].includes(G.s.grade))&&canSpeak(ur))setTimeout(readQ,250);
 const tb=document.getElementById('tb');tmr=setInterval(()=>{const left=Math.max(0,1-(Date.now()-G.t0)/(G.speed*1000));if(tb)tb.style.width=(left*100)+'%';if(left<=0){clearInterval(tmr);const l=document.getElementById('tbl');if(l)l.textContent='Take your time'}},100);
}
function useHint(){if(!G||G.lock||!G.hints)return;const q=G.qs[G.i];const wrong=[...document.querySelectorAll('.qo')].filter((b,j)=>j!==q.ai&&!b.disabled);
 if(wrong.length<2){document.getElementById('bub').textContent=G.s.rtl?'صرف دو جواب ہیں، آپ کر سکتے ہیں!':'Only two choices here. Save your hint for a harder one!';return}shuffle(wrong).slice(0,wrong.length-1).forEach(b=>{b.disabled=true;b.classList.add('gone')});G.hints--;sfx.hint();
 const h=document.getElementById('hint');h.querySelector('b').textContent=G.hints;if(!G.hints)h.disabled=true;
 document.getElementById('bub').textContent=G.s.rtl?'دو میں سے ایک صحیح ہے!':'I took some wrong answers away. You can do it!'}
function answer(j){
 if(!G||G.lock)return;G.lock=true;clearInterval(tmr);const q=G.qs[G.i],ok=j===q.ai,ur=!!G.s.rtl,secs=(Date.now()-G.t0)/1000;
 const btns=[...document.querySelectorAll('.qo')];btns.forEach(b=>b.disabled=true);btns[q.ai].classList.add('right');if(!ok)btns[j].classList.add('wrong');
 let pts=0,tag='';
 if(ok){G.streak++;G.right++;G.bestStreak=Math.max(G.bestStreak,G.streak);pts=10;if(secs<=G.speed){pts+=5;tag=ur?'تیز!':'Quick!'}if(G.streak>=3){pts*=2;tag=(tag?tag+' ':'')+(ur?'دگنے!':'Double!')}G.score+=pts;
   const p=document.getElementById('plus');p.textContent='+'+pts;p.classList.remove('show');void p.offsetWidth;p.classList.add('show');(G.streak===3||G.streak===5)?sfx.combo():sfx.ok()}
 else{G.streak=0;G.missed.push(q);sfx.no()}
 G.res[G.i]=ok;
 const good=ur?['شاباش!','بہت خوب!','زبردست!','واہ!']:['Shabash!','Well done!','Brilliant!','Zabardast!','You got it!','Super!'];
 const bad=ur?['کوئی بات نہیں!','اگلی بار ضرور!']:['Nice try!','Almost!','Good effort!'];
 const head=ok?good[Math.floor(Math.random()*good.length)]+(G.streak>=3?(ur?` ${G.streak} مسلسل صحیح!`:` ${G.streak} in a row!`):''):bad[Math.floor(Math.random()*bad.length)];
 document.getElementById('bub').innerHTML=head+(tag?` <span class="combo">${tag}</span>`:'');
 document.querySelector('.mascot').outerHTML=mascot(ok?(G.streak>=3?'wow':'happy'):'oops');
 document.getElementById('gsc').textContent=G.score;document.getElementById('gst').textContent=G.streak;
 const last=G.i===G.qs.length-1,fb=document.getElementById('fb');
 fb.className='fb '+(ok?'good':'bad');fb.hidden=false;
 fb.innerHTML=`<div class="fbt${isUr(q.exp||'')?' ur-t':''}" ${isUr(q.exp||'')?'dir="rtl"':''}>${ok?ic.ok:ic.bulb}<span>${q.exp||''}</span></div><button class="btn fill lg" id="gn">${last?(ur?'نتیجہ دیکھیں':'See my stars'):(ur?'اگلا سوال':'Next question')} ${ic.arrow}</button>`;
 const sky=document.querySelector('.sky');if(sky)sky.outerHTML='<div class="sky"'+gameTop().split('<div class="sky"')[1];
 setTimeout(()=>{const b=document.getElementById('gn');b&&b.focus()},30);
 if(store.get('autoread',['nursery','kg'].includes(G.s.grade))&&canSpeak(ur))speak([head.replace(/!/g,'.'),sayText(q.exp||'')],ur);
}
function next(){if(!G)return;stopSpeak();if(G.i<G.qs.length-1){G.i++;renderQ()}else endGame()}
function endGame(){
 clearInterval(tmr);const n=G.qs.length,right=G.right,pct=right/n,stars=pct>=.9?3:pct>=.6?2:right>0?1:0,ur=!!G.s.rtl;
 const best=store.get('best',{}),bs=store.get('bestScore',{});const newBest=G.score>(bs[G.r.id]||0);
 if(stars>(best[G.r.id]||0)){best[G.r.id]=stars;store.set('best',best)}if(newBest){bs[G.r.id]=G.score;store.set('bestScore',bs)}
 track('quiz_complete',{level:G.level,quiz:G.r.id,subject:G.s.kind,grade:G.s.grade,correct:right,total:n,score:G.score,stars});
 const who=activeChild();if(who)saveProgress(who,G.r.id,right,n,G.score,stars);const whoN=who?FAM.children[who].name:'';
 const title=stars===3?(ur?'زبردست!':'Superstar!'):stars===2?(ur?'بہت خوب!':'Great flying!'):(ur?'اچھی کوشش!':'Good try!');
 const nx=nextQuizFor(G.r);
 G.res=G.res.slice();const top=gameTop();
 app.innerHTML=`<div class="game s-${G.s.id}">${top}
 <div class="gcardq endc">${mascot(stars>=2?'happy':'think',true)}<div class="bigstars">${[1,2,3].map(i=>starSVG(i<=stars)).join('')}</div>
 <h2>${title}</h2>${newBest&&G.score>0?`<span class="newbest">${ur?'نیا ریکارڈ!':'New best score!'}</span>`:''}
 <div class="estats"><div><b>${G.score}</b><small>points</small></div><div><b>${right}/${n}</b><small>correct</small></div><div><b>${G.bestStreak}</b><small>best streak</small></div></div>
 ${G.missed.length?`<div class="review"><h3>${ur?'یہ دوبارہ دیکھیں':'Let\'s look at these again'}</h3><ul>${G.missed.map(q=>`<li class="${isUr(q.exp||'')?'ur-t':''}" ${isUr(q.exp||'')?'dir="rtl"':''}>${q.exp||optHTML(q.ans)}</li>`).join('')}</ul></div>`:`<p>${ur?'سب جواب صحیح!':'Every answer right. Amazing!'}</p>`}
 <p class="savednote">${who?`${ic.ok}Saved to ${esc(whoN)}'s profile${FAM.mode==='cloud'?'':' on this device'}.`:`<a href="#account">Add your child</a> to keep stars and get tailored picks.`}</p>
 <div class="acts endacts"><button class="btn lg" data-replay="${G.r.id}">${ic.play}${ur?'دوبارہ کھیلیں':'Play again'}</button>${stars===3&&G.level!=='hard'?`<button class="btn lg" data-uplevel="1">${ic.spark}Try ${G.level==='easy'?'Medium':'Hard'}</button>`:''}${nx?`<a class="btn fill lg nextq" href="#play-${nx.id}"><span ${ur?'dir="rtl"':''}>${ur?'اگلا کھیل':'Next quiz'}: <span class="${SUB[nx.sub].rtl?'ur-t':''}">${SUB[nx.sub].rtl?nx.topic:nx.title.replace(/ Practice$/,'')}</span></span> ${ic.arrow}</a>`:`<a class="btn fill lg" href="#quiz">${ur?'مزید کھیل':'More quizzes'} ${ic.arrow}</a>`}${G.r.quizOnly?'':`<a class="btn lg" href="#res-${G.r.id}">${ic.sheet}${ur?'ورک شیٹس':'Practice pack'}</a>`}</div></div></div>`;
 funAfter(G.r,stars);window.scrollTo(0,0);stars?sfx.win():0;if(stars>=2)confetti();G=null;
}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.createElement('canvas');c.id='confetti';document.body.appendChild(c);const x=c.getContext('2d');
 const W=c.width=innerWidth,H=c.height=innerHeight,cols=['#FFD93B','#2E9E4F','#2A74DD','#E2711A','#CC3672','#6447CC'];
 const ps=Array.from({length:150},()=>({x:W/2+(Math.random()-.5)*160,y:H*.35,vx:(Math.random()-.5)*15,vy:-Math.random()*15-4,r:Math.random()*7+4,c:cols[Math.floor(Math.random()*cols.length)],a:Math.random()*6}));
 let t=0;(function f(){x.clearRect(0,0,W,H);ps.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.a+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});if(++t<120)requestAnimationFrame(f);else c.remove()})()}

/* ---------- search ---------- */
let lastQ='';
function search(q){
 lastQ=q;const {hits,P}=smartSearch(q);
 const chips=[...(P.grade&&GR[P.grade]?[GR[P.grade].name]:[]),...P.notes];
 app.innerHTML=`<div class="crumbs"><a href="#home">Home</a>/<span>Search</span></div>
 <form class="search" id="sf" role="search">${ic.search}<input id="q" type="search" value="${esc(q)}" placeholder="Search in English, Urdu or Roman Urdu" aria-label="Search worksheets"><button type="submit">Search</button></form>
 ${chips.length?`<p class="understood">Searching for ${chips.map(c=>`<span class="tag">${T(esc(c))}</span>`).join(' ')}</p>`:''}
 <p class="count" style="margin-top:12px">${hits.length} result${hits.length===1?'':'s'}${P.grade?'':' across all grades'} for “${T(esc(q))}”</p>
 ${hits.length?`<div class="cards">${hits.map(card).join('')}</div>`:`<div class="empty">No worksheets match that yet. Try English, Urdu or Roman Urdu, for example <b>fractions</b>, <b>jama ke sawal</b>, <b>huroof</b> or <span class="ur-t">مصوّتے</span>.</div>`}`;
}

/* ---------- print view ---------- */
let pvKey=true;
function printView(id,auto){
 const r=RID[id];if(!r)return home();
 const N=r.pages.length;const sheets=[...r.pages.map((i,j)=>frame(r.sub,i,false,j+1,N)),...(pvKey?r.pages.map((i,j)=>frame(r.sub,i,true,j+1,N)):[])];
 app.innerHTML=`<div class="pv s-${r.sub}"><div class="pv-bar"><a class="btn" href="#res-${r.id}">${ic.l}Back</a><h1>${T(r.title)}</h1>
 <label class="toggle"><input type="checkbox" id="pk" ${pvKey?'checked':''}> Include answer key</label>
 <button class="btn" type="button" id="pp">${ic.print}Print</button><a class="btn fill" href="${pdf(r)}" target="_blank" rel="noopener">${ic.dl}Download PDF</a></div>
 <p class="pv-note">${sheets.length} A4 pages. In the print window choose A4 paper and 100% scale.</p>
 <div class="pages">${sheets.join('')}</div></div>`;
 document.getElementById('pk').onchange=e=>{pvKey=e.target.checked;printView(id);fit()};
 document.getElementById('pp').onclick=()=>window.print();
 try{document.fonts.ready.then(()=>paginate())}catch(e){}
 if(auto)setTimeout(()=>{try{window.print()}catch(e){}},500);
}

/* ---------- scaling, routing, events ---------- */
const SW=793.7;
const ro=('ResizeObserver' in window)?new ResizeObserver(es=>es.forEach(e=>e.target.style.setProperty('--s',(e.contentRect.width/SW).toFixed(4)))):null;
/* any sheet whose content would run into the footer moves its last blocks onto a continuation page */
function paginate(root){(root||document).querySelectorAll('.pages .frame').forEach(f=>{let sh=f.querySelector('.sheet');let guard=0;
 while(sh&&guard++<6){const b=sh.querySelector('.sh-body'),inn=sh.querySelector('.sh-in');if(!b||!inn||b.scrollHeight<=b.clientHeight+1)break;
  const blks=[...inn.children];if(blks.length<2)break;const nf=f.cloneNode(true),ns=nf.querySelector('.sheet'),ni=ns.querySelector('.sh-in');ni.innerHTML='';
  const ins=ns.querySelector('.sh-instr');if(ins)ins.textContent=(sh.classList.contains('ur')?'(جاری) ':'(continued) ')+ins.textContent;
  while(inn.children.length>1&&b.scrollHeight>b.clientHeight+1){ni.prepend(inn.lastElementChild)}
  f.after(nf);ro&&ro.observe(nf);sh=ns;f=nf}})}
function fit(){paginate();document.querySelectorAll('.frame').forEach(f=>{f.style.setProperty('--s',(f.clientWidth/SW).toFixed(4));ro&&ro.observe(f)})}
const track=(n,p)=>{try{window.gtag&&gtag('event',n,p||{})}catch(e){}};
function voicePick(ur){const vl=voiceList(ur).slice(0,8);if(vl.length<2)return '';const cur=voiceFor(ur);
 return `<label class="vpick"><span>Voice</span><select id="vsel" data-ur="${ur?1:0}">${vl.map(v=>`<option value="${esc(v.voiceURI)}" ${cur&&v.voiceURI===cur.voiceURI?'selected':''}>${esc(v.name.replace(/Microsoft |Google |\(Natural\)|Online/g,'').replace(/\s+/g,' ').trim())}</option>`).join('')}</select></label>`}
function setGrade(g,silent){track('select_grade',{grade:g});if(!GR[g]||GR[g].soon)return;grade=g;store.set('grade',g);const sel=document.getElementById('gs');if(sel)sel.value=g;if(!silent)route(true)}
let pendingPrint=null;
let lastTracked='';
function route(keepScroll){{const hh=(location.hash||'#home').slice(1).replace(/^(res|subject|play|print)-.*/,'$1');if(hh!==lastTracked){lastTracked=hh;track('page_view',{page_title:hh,page_location:location.href})}}
 let h=(location.hash||'#home').slice(1);if(window.LT_STATIC&&['contribute','admin','library'].includes(h)){history.replaceState(null,'','#home');h='home'}
 stopSpeak();if(typeof puTmr!=='undefined'&&!h.startsWith('pu-timer'))clearInterval(puTmr);const nav=h==='class'?'class':h==='parents'?'parents':(h==='quiz'||h.startsWith('play-'))?'quiz':h==='account'?'account':(h==='powerups'||h.startsWith('pu-'))?'powerups':['fun','stickers','stories'].includes(h)||/^(game|story)-/.test(h)?'fun':['tools','spell-maker','spell-print','prep','prep-print','report','rewards','rewards-print'].includes(h)?'parents':['contribute','admin','library'].includes(h)?'x':['help','share','policy'].includes(h)||h.startsWith('help-')?'x':'home';
 try{ltRoute(h)}catch(e){}
 document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===nav));
 if(h.startsWith('subject-'))subject(h.slice(8));
 else if(h.startsWith('res-'))detail(h.slice(4));
 else if(h.startsWith('print-')){printView(h.slice(6),pendingPrint===h.slice(6));pendingPrint=null}
 else if(h.startsWith('play-'))play(h.slice(5));
 else if(h==='class')classPage();
 else if(h==='parents')parents();
 else if(h==='quiz')quizHub();
 else if(h==='account')account();
 else if(h==='contribute')contribute();
 else if(h==='admin'){admin();if(CMS.isAdmin&&!keepScroll)loadQueue().then(()=>{if(location.hash==='#admin'){admin();fit()}})}
 else if(h==='library')library();
 else if(h==='powerups')powerupsPage();
 else if(h==='privacy')privacy();
 else if(h==='policy')policyPage();
 else if(h==='help'||h.startsWith('help-'))helpPage(h.slice(5));
 else if(h==='share')sharePage();
 else if(h.startsWith('pu-'))powerup(h);
 else if(h==='search')search(lastQ);
 else if(funRoute(h)){}
 else home();
 fit();if(!keepScroll)window.scrollTo(0,0);if(window.LT_STATIC)setTimeout(fillAds,50);
}
document.getElementById('gs').innerHTML=GRADES.filter(g=>!g.hidden).map(g=>`<option value="${g.id}" ${g.soon?'disabled':''}>${g.name}${g.soon?' (coming soon)':''}</option>`).join('');
document.getElementById('gs').value=grade;
document.getElementById('gs').addEventListener('change',e=>{const h=location.hash;setGrade(e.target.value,true);if(/^#(subject|res|print|play)-/.test(h))location.hash='home';else route(true)});
document.addEventListener('click',e=>{
 const rl=e.target.closest('[data-reload]');if(rl&&rl.getAttribute('href')===location.hash){e.preventDefault();route();return}
 const gin=e.target.closest('[data-gsignin]');if(gin){gin.disabled=true;window.LTFB.signIn().catch(err=>{gin.disabled=false;FAM.note=err&&err.code==='auth/unauthorized-domain'?'Sign-in is not enabled for this web address yet.':err&&err.code==='auth/popup-closed-by-user'?'':'Could not sign in. Please try again.';account()});return}
 const gout=e.target.closest('[data-gsignout]');if(gout){window.LTFB.signOut();return}
 const dl=e.target.closest('a[href^="pdf/"]');if(dl)track('file_download',{file_name:dl.getAttribute('href').split('/').pop()});
 const p=e.target.closest('[data-print]');if(p){track('print_worksheet',{resource:p.dataset.print});pendingPrint=p.dataset.print;if(location.hash==='#print-'+p.dataset.print)route();else location.hash='print-'+p.dataset.print;return}
 const gb=e.target.closest('[data-grade]');if(gb){setGrade(gb.dataset.grade,true);route(true);if(gb.classList.contains('gcard'))document.getElementById('subjects').scrollIntoView({behavior:'smooth'});return}
 const q=e.target.closest('[data-q]');if(q){lastQ=q.dataset.q;location.hash==='#search'?(search(lastQ),fit()):location.hash='search';return}
 const t=e.target.closest('[data-topic]');if(t){const id=location.hash.slice(9);topicSel[id]=t.dataset.topic;subject(id);fit();return}
 const c=e.target.closest('[data-cs]');if(c){classSub[grade]=c.dataset.cs;classPage();fit();return}
 const ps=e.target.closest('[data-ps]');if(ps){parentSub[grade]=ps.dataset.ps;parents();fit();return}
 const qs=e.target.closest('[data-qs]');if(qs){quizSub=qs.dataset.qs;quizHub();return}
 const w=e.target.closest('[data-wk]');if(w){const el=document.getElementById('wk'+w.dataset.wk);el&&el.scrollIntoView({behavior:'smooth',block:'start'});return}
 const a=e.target.closest('[data-ans]');if(a){answer(+a.dataset.ans);return}
 if(e.target.closest('#gn')){next();return}
 if(e.target.closest('[data-uplevel]')&&G){store.set('level',G.level==='easy'?'medium':'hard');play(G.r.id);return}
 const lvb=e.target.closest('[data-lv]');if(lvb&&G){store.set('level',lvb.dataset.lv);setLevel(lvb.dataset.lv);intro();return}
 if(e.target.closest('[data-start]')){track('quiz_start',{quiz:G.r.id,subject:G.s.kind,grade:G.s.grade,level:G.level});renderQ();window.scrollTo(0,0);return}
 if(e.target.closest('#hint')){useHint();return}
 if(e.target.closest('#say')){readQ();return}
 const at=e.target.closest('#autoread');if(at){store.set('autoread',at.checked);return}
 const who=e.target.closest('[data-who]');if(who){setActive(who.dataset.who||null);document.querySelectorAll('.wchip').forEach(b=>b.classList.toggle('on',b===who));return}
 const pa=e.target.closest('[data-play-as]');if(pa){setActive(pa.dataset.playAs);account();return}
 const pg2=e.target.closest('[data-play-as-go]');if(pg2){setActive(pg2.dataset.playAsGo);const c=FAM.children[pg2.dataset.playAsGo];if(c)setGrade(c.grade,true)}
 const pgg=e.target.closest('[data-pg-grade]');if(pgg){setGrade(pgg.dataset.pgGrade,true)}
 if(e.target.closest('[data-kadd]')){editChild='';account();return}
 const ke=e.target.closest('[data-kedit]');if(ke){editChild=ke.dataset.kedit;account();window.scrollTo(0,0);return}
 if(e.target.closest('[data-kcancel]')){editChild=null;account();return}
 const kd=e.target.closest('[data-kdel]');if(kd){confirmDel=kd.dataset.kdel;account();return}
 if(e.target.closest('[data-kdel-no]')){confirmDel=null;account();return}
 const ky=e.target.closest('[data-kdel-yes]');if(ky){removeChild(ky.dataset.kdelYes).then(()=>{confirmDel=null;account()});return}
 const atb=e.target.closest('[data-atab]');if(atb){CMS.adminTab=atb.dataset.atab;adminOpen=null;admin();return}
 if(e.target.closest('[data-arefresh]')){loadQueue().then(()=>{admin();fit()});return}
 const ao=e.target.closest('[data-aopen]');if(ao&&!e.target.closest('[data-noopen]')){adminOpen=adminOpen===ao.dataset.aopen?null:ao.dataset.aopen;admin();fit();return}
 const au=e.target.closest('[data-aunpub]');if(au){const [u,sid]=au.dataset.aunpub.split('/');adminAct('unpublish',u,sid);return}
 const lb=e.target.closest('[data-lib]');if(lb){libGrade=lb.dataset.lib;library();fit();return}
 const rp=e.target.closest('[data-replay]');if(rp){play(rp.dataset.replay);window.scrollTo(0,0);return}
 if(e.target.closest('#snd')){store.set('sound',!store.get('sound',true));const b=document.getElementById('snd');const on=store.get('sound',true);b.innerHTML=on?ic.sound:ic.mute;b.setAttribute('aria-label',on?'Turn sound off':'Turn sound on');return}
});
document.addEventListener('keydown',e=>{if(!G||e.target.closest('input,select,textarea'))return;const n=+e.key;const b=document.querySelectorAll('.qo')[n-1];if(n>=1&&n<=4&&!G.lock&&b&&!b.disabled){answer(n-1)}else if((e.key==='h'||e.key==='H')&&!G.lock)useHint()});
window.addEventListener('hashchange',()=>clearInterval(tmr));
document.addEventListener('change',e=>{if(e.target.id==='vsel'){const ur=e.target.dataset.ur==='1';store.set(ur?'voiceUr':'voiceEn',e.target.value);speak([ur?'السلام علیکم! آئیے کھیلیں۔':'Assalam o Alaikum! Let us play.'],ur)}});
document.addEventListener('submit',e=>{if(e.target.id==='sf'){e.preventDefault();lastQ=document.getElementById('q').value;track('search',{search_term:lastQ});if(location.hash==='#search'){search(lastQ);fit()}else location.hash='search'}});
window.addEventListener('hashchange',()=>route());
window.addEventListener('resize',fit);
/* Urdu joining (short) forms: Nastaliq hides the joining stroke, so show them in a clear Naskh style */
(function(){const RX=/[\u0621-\u06FF]\u0640/;const wrap=root=>{const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>RX.test(n.nodeValue)&&!(n.parentNode&&n.parentNode.classList&&n.parentNode.classList.contains('sf'))?1:3});const list=[];while(w.nextNode())list.push(w.currentNode);
 list.forEach(n=>{const f=document.createDocumentFragment();n.nodeValue.split(/([\u0621-\u06FF]\u0640+)/).forEach((part,i)=>{if(!part)return;if(i%2){const s=document.createElement('span');s.className='sf';s.textContent=part;f.appendChild(s)}else f.appendChild(document.createTextNode(part))});n.parentNode.replaceChild(f,n)})};
 const app=document.getElementById('app');let busy=false;new MutationObserver(()=>{if(busy)return;busy=true;try{wrap(app)}finally{busy=false}}).observe(app,{childList:true,subtree:true,characterData:true});wrap(app)})();
/* keep host-injected floating badges (e.g. hosting banners) above the mobile tab bar */
(function(){const mine=e=>e.matches('.tabbar,.top,header,footer,main,#app,script,style,link,ins')||e.closest('#app,.tabbar,.top,footer,main');
 const lift=()=>{document.querySelectorAll('body > *:not(script):not(style)').forEach(e=>{if(mine(e))return;const cs=getComputedStyle(e);
  if(cs.position==='fixed'&&parseFloat(cs.bottom)<80)e.classList.add('lt-lift');e.querySelectorAll('*').forEach(c=>{const s=getComputedStyle(c);if(s.position==='fixed'&&parseFloat(s.bottom)<80)c.classList.add('lt-lift')})})};
 new MutationObserver(lift).observe(document.body,{childList:true});setTimeout(lift,1500);setTimeout(lift,5000)})();
regQuizOnly();regFun();renderAcct();try{ltVisit()}catch(e){}route();famInit().then(cmInit);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
