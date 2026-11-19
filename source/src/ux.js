/* ---------- site structure helpers (Nov 2026 UX pass) ----------
   - grade is chosen once (first-visit picker), then shown as a small "Grade 1 · Change" note
   - warm-ups are a level switch inside English and Urdu, not separate subjects
   - one page per topic (the resource page) holds worksheets, quiz, parent guide, PowerUps and handwriting
   - kids get one Play area that links quizzes, games, PowerUps, stickers and stories */

/* warm-up sibling of a subject, either way round */
function warmPair(s){if(!s)return null;
 if(s.warm)return SUBJECTS.find(x=>x.grade===s.grade&&x.kind===s.kind&&!x.warm&&!x.community)||null;
 return SUBJECTS.find(x=>x.grade===s.grade&&x.kind===s.kind&&x.warm)||null}
/* level switch: Grade level | Easier (Warm-up). attr is the data attribute the page listens to; href mode uses links */
function levelSwitch(s,attr){const w=warmPair(s);if(!w)return '';const main=s.warm?w:s,easy=s.warm?s:w;
 const b=(x,l)=>attr?`<button type="button" data-${attr}="${x.id}" aria-pressed="${x.id===s.id}">${l}</button>`:`<a href="#subject-${x.id}" aria-current="${x.id===s.id}">${l}</a>`;
 return `<div class="lvsw" role="group" aria-label="Level"><span>Level</span>${b(main,'Grade level')}${b(easy,'Easier (Warm-up)')}</div>`}

/* school names parents use for each grade */
const GALIAS={nursery:'Nursery, Playgroup',kg:'KG, Prep, Reception',g1:'Class 1, Year 2 (UK)',g2:'Class 2, Year 3 (UK)',g3:'Class 3, Year 4 (UK)'};
function gradeNote(){return `<p class="gnote">Showing <b>${GR[grade].name}</b> <small>${GR[grade].age}</small> <button type="button" class="lnkb" data-gchange>Change grade</button></p>`}
function gradeModal(first){if(document.getElementById('gmod'))return;const d=document.createElement('div');d.id='gmod';d.className='lq-back';
 d.innerHTML=`<div class="lq gm" role="dialog" aria-modal="true" aria-labelledby="gmh"><h2 id="gmh">${first?'Welcome! Which class is your child in?':'Choose a grade'}</h2><p>${first?'We will show worksheets, games and guides for that class. You can change it any time from the top of the page.':'Everything on the site will switch to this grade.'}</p>
 <div class="gm-g">${GRADES.filter(g=>!g.hidden).map(g=>`<button type="button" class="gm-b" ${g.soon?'disabled':`data-gpick="${g.id}"`} aria-pressed="${g.id===grade&&!first}"><span class="gn">${g.short}</span><b>${g.name}</b><small>${g.age}${GALIAS[g.id]?' · '+GALIAS[g.id]:''}</small>${g.soon?'<em>Coming soon</em>':''}</button>`).join('')}</div>
 ${first?'':'<div class="acts" style="justify-content:center"><button class="btn" type="button" id="gmx">Cancel</button></div>'}</div>`;
 document.body.appendChild(d);const x=document.getElementById('gmx');if(x)x.onclick=()=>d.remove();if(!first)d.onclick=e=>{if(e.target===d)d.remove()}}

/* ---------- kids' Play area ---------- */
const KSUB=[['kids','Play home'],['quiz','Quizzes'],['fun','Games'],['powerups','PowerUps'],['stickers','Stickers'],['stories','Stories']];
function kidsSub(h){return `<nav class="ksub" aria-label="Play">${KSUB.map(([k,l])=>`<a href="#${k}" class="${h===k?'on':''}">${l}</a>`).join('')}</nav>`}
function kidsPage(){const a=activeChild(),ch=a&&FAM.children[a];const G=GR[grade];
 const total=RES.filter(r=>!r.set&&SUB[r.sub].grade===grade&&hasQuiz(r)),earned=total.reduce((x,r)=>x+bestFor(r.id),0);
 const T2=(href,img,t,d,cls)=>`<a class="ktile ${cls||''}" href="${href}"><img src="img/${img}.svg" alt=""><b>${t}</b><small>${d}</small></a>`;
 app.innerHTML=`${kidsSub('kids')}<div class="khero"><div><span class="kick">${G.name} · Play zone</span><h1>${ch?`Hi ${esc(ch.name)}! `:''}What shall we play?</h1>
  <p class="kstat"><span>${starSVG(true)} <b>${earned}</b> stars</span><span>${ic.flame} ${dailyStreak()} day streak</span>${ch?'':`<a href="#account">Add your child</a> to save stars`}</p></div>
  <a class="kbig" href="#play-qx-daily-${grade}">${ic.play}<span><b>Daily challenge</b><small>Mixed questions from every subject</small></span></a></div>
  <div class="ktiles">
   ${T2('#quiz','trophy','Quiz games',`${total.length} games for ${G.name}`,'k1')}
   ${T2('#fun','kite','Games','Word search, memory match, spelling bee','k2')}
   ${T2('#powerups','sparkles','PowerUps','Flashcards, doodle, listen and read','k3')}
   ${T2('#stickers','star','Sticker book','Win a sticker every 3 stars','k4')}
   ${T2('#stories','open-book','Story corner','Short stories to read together','k5')}
  </div>
  <p class="kpar">Grown-ups: worksheets and guides are on <a href="#home">Home</a> and <a href="#parents">Parents</a>.</p>`}

/* ---------- topic page extras (on the resource page) ---------- */
function topicIndex(r){const s=SUB[r.sub];if(r.set||r.write||r.quizOnly||r.community)return -1;return s.topics.indexOf(r.topic)}
function guideBody(s,k){const g=(GUIDE[s.id]||[])[k];const pk=RID[s.id+'-t'+(k+1)];if(!g||!pk)return '';const kh=KHELP[s.kind]||KHELP.gk;const kw=keyWords(pk),qs=askQs(pk);
 return `<div class="gd-b">
   <div class="gcard2"><h4 class="gh"><span class="gi">${ic.spark}</span>By the end, your child can</h4><ul class="obj">${pk.obj.map(o=>`<li>${mixUr(o)}</li>`).join('')}</ul></div>
   <div class="gcard2"><h4 class="gh"><span class="gi">${ic.cal}</span>Time and materials</h4><p><b>10 to 15 minutes</b> a day, about one week for this topic.</p><p class="muted">You'll need: ${kh.need}.</p></div>
   <div><h4 class="gh"><span class="gi">1</span>How to explain it</h4><ol class="gd-steps">${g[1].map(x=>`<li>${mixUr(x)}</li>`).join('')}</ol></div>
   <div><h4 class="gh"><span class="gi">2</span>Try this at home</h4><ul class="acts-l">${g[2].map(x=>`<li>${mixUr(x)}</li>`).join('')}</ul></div>
   ${kw.length?`<div><h4 class="gh"><span class="gi">3</span>Words to use</h4><div class="chips">${kw.map(w=>`<span class="tchip${isUr(w)?' ur-t':''}">${w}</span>`).join('')}</div></div>`:''}
   ${qs.length?`<div><h4 class="gh"><span class="gi">4</span>Questions to ask</h4><ul class="qask">${qs.map(q=>`<li><span${isUr(q.q)?' class="ur-t" dir="rtl"':''}>${q.q.replace(/<span class="qbl"><\/span>/g,'____')}</span><small>Answer: ${isUr(q.ans)?`<span class="ur-t">${q.ans}</span>`:q.ans}</small></li>`).join('')}</ul></div>`:''}
   <div class="lvl3"><div class="lv e"><b>Make it easier</b><p>${kh.easier}</p></div><div class="lv h"><b>Make it harder</b><p>${kh.harder}</p></div><div class="lv r"><b>Ready to move on when</b><p>${kh.ready}</p></div></div>
   <div class="watch" style="grid-column:1/-1">${ic.warn}<div><b>Watch out for</b><p>${mixUr(g[3])}</p></div></div></div>`}
function topicWeek(s,k){const plan=PLAN[s.id]||[];const i=plan.findIndex(p=>p&&p[0]===s.topics[k]);return i>=0?i:k}
function topicExtras(r){const s=SUB[r.sub],k=topicIndex(r);if(k<0)return '';
 const wi=topicWeek(s,k),wr=RID[s.id+'-write'];const prev=RID[s.id+'-t'+k],next=RID[s.id+'-t'+(k+2)];
 const guide=guideBody(s,k);
 return `<section class="tx"><div class="tx-row">
   <a class="txc" href="#class" data-cs-go="${s.id}">${ic.cal}<span><b>${WEEKS[wi]?WEEKS[wi][0]:'Week '+(wi+1)}</b><small>in the weekly plan${wi===WEEK_NOW?' · this week':''}</small></span></a>
   ${hasQuiz(r)?`<a class="txc sun" href="#play-${r.id}">${ic.play}<span><b>Quiz game</b><small>${Math.min(10,buildQuiz(r).length)} questions a round</small></span></a>`:''}
   ${wr?`<a class="txc" href="#res-${wr.id}">${ic.sheet}<span><b>Handwriting</b><small>${s.rtl?'خوش خطی':'copy pages for '+s.name}</small></span></a>`:''}
  </div>
  ${guide?`<details class="gd tx-g"><summary><span class="gd-n">${ic.heart}</span><span class="gd-t"><b>Parent guide: how to teach this topic</b><small>${mixUr(GUIDE[s.id][k][0])}</small></span><span class="gd-c" aria-hidden="true"></span></summary>${guide}</details>`:''}
  <div class="tx-nav">${prev?`<a class="btn" href="#res-${prev.id}">${ic.l}${T(s.rtl?prev.topic:prev.title.replace(/ Practice$/,''))}</a>`:'<span></span>'}${next?`<a class="btn" href="#res-${next.id}">${T(s.rtl?next.topic:next.title.replace(/ Practice$/,''))}${ic.r}</a>`:''}</div></section>`}

/* ---------- subject page as a numbered list in teaching order ---------- */
function topicRow(r,k,s){const wi=topicWeek(s,k),q=hasQuiz(r),isNow=wi===WEEK_NOW;
 return `<li class="trow s-${s.id}"><a class="tr-main" href="#res-${r.id}"><span class="tr-n">${k+1}</span><span class="tr-t"><b>${T(s.rtl?r.topic:r.title.replace(/ Practice$/,''))}</b>${s.rtl&&UR_EN[r.topic]?`<small class="gloss">${UR_EN[r.topic]}</small>`:''}
  <small>${WEEKS[wi]?WEEKS[wi][0]:''} · ${r.pages.length} page${r.pages.length>1?'s':''}${isNow?' · <span class="tnow">This week</span>':''}${r.isNew&&!isNow?' · <span class="tnew">New</span>':''}</small></span></a>
  <span class="tr-a">${q?`<a class="btn sm sun" href="#play-${r.id}" aria-label="Play the quiz">${ic.play}<span>Quiz</span></a>`:''}<button class="btn sm" type="button" data-print="${r.id}" aria-label="Print">${ic.print}<span>Print</span></button></span></li>`}
function writeCard(r){return card(r)}

/* revision and full sets are named by the topics they cover, not "Revision Set" */
function setTopics(r){return uniq(r.pages.map(i=>(PAGES[r.sub][i]||{}).topic).filter(Boolean))}
function setLabel(r){if(!r.set||r.write)return null;const s=SUB[r.sub],t=setTopics(r).map(x=>s.rtl?x:(PACK_T[s.id]&&PACK_T[s.id][s.topics.indexOf(x)])||x);if(!t.length)return null;
 const ur=!!s.rtl,and=ur?' اور ':' and ',more=n=>ur?` اور ${n} مزید`:` and ${n} more`;
 const list=t.length<=2?t.join(and):t.slice(0,2).join(ur?'، ':', ')+more(t.length-2);
 return (ur?'دہرائی: ':'Revision: ')+list}
