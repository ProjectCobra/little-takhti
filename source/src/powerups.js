/* ---------- PowerUps: small learning tools that open on any topic ---------- */
const PU={
 flash:{name:'Flashcards',ur:'فلیش کارڈز',desc:'Flip cards to practise. Cards you miss come back.',ico:'<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v10"/>'},
 doodle:{name:'Doodleboard',ur:'ڈوڈل بورڈ',desc:'Draw, trace letters and numbers, and show your thinking.',ico:'<path d="M3 21l3.5-1 11-11-2.5-2.5-11 11z"/><path d="M14 6.5l2.5 2.5M18 3l3 3"/>'},
 mind:{name:'Mindmap',ur:'مائنڈ میپ',desc:'See the big idea and the words that go with it.',ico:'<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M6 6.5l3.8 3.6M18 6.5l-3.8 3.6M6 17.5l3.8-3.6M18 17.5l-3.8-3.6"/>'},
 listen:{name:'Listen and read',ur:'سنیں اور پڑھیں',desc:'Hear the topic words read aloud, one at a time.',ico:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>'},
 timer:{name:'Study timer',ur:'ٹائمر',desc:'Short, focused practice with a gentle chime.',ico:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/>'},
 ask:{name:'Ask Takhti',ur:'تختی سے پوچھیں',desc:'A friendly study buddy that gives hints, not answers.',ico:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>',ai:1}
};
/* each grade gets the tools, amounts and wording that suit its age */
const PUG={
 nursery:{tools:['doodle','listen','flash','timer','ask'],flash:6,timer:[3,5,10],tdef:5,listen:'say',trace:'big',
  d:{flash:'Big, simple picture and word cards. Tap to flip.',doodle:'Trace big letters, numbers and lines with your finger.',listen:'Hear a word, then say it back.',timer:'Short 3 to 5 minute play-and-learn bursts.',ask:'A gentle helper for tiny questions.'}},
 kg:{tools:['doodle','listen','flash','timer','ask'],flash:8,timer:[5,10],tdef:5,listen:'say',trace:'letters',
  d:{flash:'Short card sets to flip and remember.',doodle:'Trace letters, numbers and first words.',listen:'Hear each word, say it, and clap the sounds.',timer:'5 to 10 minutes of focused practice.',ask:'Ask simple questions and get a hint.'}},
 g1:{tools:['flash','doodle','listen','mind','timer','ask'],flash:10,timer:[5,10,15],tdef:10,listen:'say',trace:'words',
  d:{}},
 g2:{tools:['flash','mind','listen','doodle','timer','ask'],flash:12,timer:[10,15,20],tdef:15,listen:'spell',trace:'words',
  d:{flash:'Revise facts and words. Missed cards come back.',listen:'Listen and spell: hear the word, then type it.',doodle:'Practise neat handwriting with topic words.',mind:'Map the topic: key words, ideas and examples.',timer:'15 to 20 minute study sessions with a break.',ask:'A study buddy that gives hints, not answers.'}},
 g3:{tools:['flash','mind','listen','doodle','timer','ask'],flash:15,timer:[15,20,25],tdef:20,listen:'spell',trace:'words',
  d:{flash:'Longer revision sets for tests. Missed cards come back.',listen:'Spelling test: hear the word, type it, check it.',doodle:'Handwriting and quick diagrams.',mind:'Build a mind map to revise the whole topic.',timer:'Up to 25 minutes, like a real study session.',ask:'Ask for hints, examples and quick checks.'}}};
const pug=()=>PUG[grade]||PUG.g1;
const puDesc=k=>(pug().d||{})[k]||PU[k].desc;
const puAvail=k=>pug().tools.includes(k)&&(k!=='ask'||!!(typeof CMS!=='undefined'&&CMS.sample));
const puList=()=>pug().tools.filter(puAvail);
const puIcon=k=>`<span class="pu-ic pu-${k}">${I(PU[k].ico,2.2)}</span>`;
const guideOf=r=>{const m=/-t(\d+)$/.exec(r.id);const g=GUIDE[r.sub];return g?(g[m?+m[1]-1:0]||g[0]):null};
const rTitle=r=>T(SUB[r.sub].rtl?r.topic:r.title.replace(/ Practice$/,''));
let puState={};

/* row of PowerUp tiles for one resource (detail page) */
function puRow(r){return `<section class="pu-sec"><div class="sec-h"><div><span class="kick pu-kick">${ic.spark}PowerUps</span><h2>Practise ${rTitle(r)} your way</h2></div></div>
 <div class="pu-grid">${puList().map(k=>`<a class="pu-card" href="#pu-${k}-${r.id}">${puIcon(k)}<b>${k==='listen'&&pug().listen==='spell'?'Listen and spell':PU[k].name}</b><small>${puDesc(k)}</small>${PU[k].ai?'<span class="pu-ai">AI</span>':''}</a>`).join('')}</div></section>`}

/* PowerUps hub */
function powerupsPage(){
 const packs=RES.filter(r=>!r.set&&SUB[r.sub].grade===grade);const sel=puState.hub&&RID[puState.hub]&&SUB[RID[puState.hub].sub].grade===grade?puState.hub:(packs[0]||{}).id;
 app.innerHTML=`<div class="pu-hero"><div><span class="kick pu-kick">${ic.spark}PowerUps</span><h1>Learning tools for every topic</h1><p>Pick a topic, then choose a PowerUp. Flip flashcards, doodle and trace, explore a mindmap, listen to new words, or time a short practice.</p>
  <div class="pu-pick"><label for="putopic">Topic</label><select id="putopic">${subjectsOf(grade).map(s=>`<optgroup label="${s.name}">${packs.filter(r=>r.sub===s.id).map(r=>`<option value="${r.id}" ${r.id===sel?'selected':''}>${s.rtl?(UR_EN[r.topic]||r.topic)+' · '+r.topic:r.title.replace(/ Practice$/,'')}</option>`).join('')}</optgroup>`).join('')}</select></div></div>
  <div class="pu-orbs" aria-hidden="true">${['flash','doodle','mind','listen','timer','ask'].map(k=>puIcon(k)).join('')}</div></div>
 <div class="pu-grid big">${puList().map(k=>`<a class="pu-card" data-pu="${k}" href="#pu-${k}-${sel}">${puIcon(k)}<b>${k==='listen'&&pug().listen==='spell'?'Listen and spell':PU[k].name}</b><small>${puDesc(k)}</small>${PU[k].ai?'<span class="pu-ai">AI</span>':''}<span class="pu-go">Open ${ic.arrow}</span></a>`).join('')}</div>`;
 const s=document.getElementById('putopic');s&&s.addEventListener('change',e=>{puState.hub=e.target.value;document.querySelectorAll('[data-pu]').forEach(a=>a.href=`#pu-${a.dataset.pu}-${e.target.value}`)});
}

/* shared frame for an open PowerUp */
function puShell(k,r,body){const s=SUB[r.sub];
 return `<div class="pu-wrap s-${s.id}"><div class="pu-top"><a class="ibtn" href="#res-${r.id}" aria-label="Back to the topic">${ic.l}</a>${puIcon(k)}<div class="pu-tt"><h1>${k==='listen'&&pug().listen==='spell'&&!SUB[r.sub].rtl?'Listen and spell':PU[k].name}</h1><small>${GR[s.grade].name} · ${s.name} · ${rTitle(r)}</small></div>
 <div class="pu-sw">${puList().filter(x=>x!==k).map(x=>`<a href="#pu-${x}-${r.id}" title="${PU[x].name}" aria-label="${PU[x].name}">${puIcon(x)}</a>`).join('')}</div></div>${body}</div>`}

function powerup(h){const m=/^pu-(\w+)-(.+)$/.exec(h);const k=m&&m[1],r=m&&RID[m[2]];
 if(!r||!PU[k]||!puAvail(k)){powerupsPage();return}
 if(SUB[r.sub].grade!==grade)setGrade(SUB[r.sub].grade,true);
 ({flash:puFlash,doodle:puDoodle,mind:puMind,listen:puListen,timer:puTimer,ask:puAsk})[k](r);
 if(typeof track==='function')track('powerup_open',{powerup:k,resource:r.id});
}

/* --- Flashcards --- */
function puFlash(r){const qs=shuffle(buildQuiz(r).filter(q=>grade!=='nursery'||!q.story)).slice(0,pug().flash);if(!qs.length){app.innerHTML=puShell('flash',r,'<div class="empty">No cards for this topic yet.</div>');return}
 const F=puState.flash={deck:qs.map((_,i)=>i),qs,done:0,again:0,flip:false,total:qs.length};
 const draw=()=>{const box=document.getElementById('fcb');if(!F.deck.length){box.innerHTML=`<div class="fc-end">${art('quiz')}<h2>All ${F.total} cards done!</h2><p>${F.again?`${F.again} card${F.again>1?'s':''} needed another go. Well done for practising.`:'You knew every card first time. Shabash!'}</p><div class="acts" style="justify-content:center"><a class="btn sun lg" href="#pu-flash-${r.id}" data-reload="1">Shuffle again</a>${hasQuiz(r)?`<a class="btn lg" href="#play-${r.id}">${ic.play}Play the quiz</a>`:''}</div></div>`;return}
  const q=F.qs[F.deck[0]],ur=isUr(q.q),ans=q.ans;
  box.innerHTML=`<div class="fc-prog"><i style="width:${F.done/F.total*100}%"></i></div><small class="fc-n">${F.done} of ${F.total} learnt</small>
  <button class="fc${F.flip?' flip':''}" id="fc" aria-label="Flip the card"><span class="fc-in"><span class="fc-f">${q.story?`<small class="fc-story${isUr(q.story)?' ur-t':''}">${q.story}</small>`:''}${q.sub?`<small class="${isUr(q.sub)?'ur-t':''}">${q.sub}</small>`:''}<span class="fc-q${ur?' ur-t':''}">${q.q}</span>${q.vis?`<span class="qvis">${q.vis}</span>`:''}<em>Tap to flip</em></span>
   <span class="fc-b"><small>Answer</small><span class="fc-a${isUr(ans)?' ur-t':''}">${optHTML(ans)}</span>${q.exp?`<span class="fc-x${isUr(q.exp)?' ur-t':''}">${q.exp}</span>`:''}</span></span></button>
  <div class="fc-acts"${F.flip?'':' hidden'}><button class="btn lg" id="fca">Again</button><button class="btn sun lg" id="fcg">${ic.ok}Got it</button></div>`;
  document.getElementById('fc').onclick=()=>{F.flip=!F.flip;draw()};
  const a=document.getElementById('fca'),g=document.getElementById('fcg');
  a&&(a.onclick=()=>{const c=F.deck.shift();F.deck.splice(Math.min(3,F.deck.length),0,c);F.again++;F.flip=false;sfx.hint();draw()});
  g&&(g.onclick=()=>{F.deck.shift();F.done++;F.flip=false;sfx.ok();draw()})};
 app.innerHTML=puShell('flash',r,`<div class="fc-box" id="fcb"></div>`);draw();
}

/* --- Doodleboard with tracing guides --- */
function traceSet(r){const s=SUB[r.sub],t=pug().trace;
 if(t==='big'){if(s.kind==='urdu')return ['ا','ب','پ','ت','ج','د','ر','س','ک','م'];if(s.kind==='maths')return ['1','2','3','4','5','6','7','8','9','10'];return ['|','—','○','A','B','C','a','b','c','1','2','3']}
 if(t==='letters'&&s.kind!=='urdu'&&s.kind!=='maths'){const w=keyWords(r).filter(x=>x.length<=4&&!isUr(x));return ['Aa','Bb','Cc','Dd','Ee'].concat(w).slice(0,10)}
 if(['g2','g3'].includes(s.grade)&&s.kind!=='urdu'&&s.kind!=='maths'){const w=keyWords(r).filter(x=>!isUr(x)&&x.length<=12);if(w.length>=3)return w.slice(0,10)}
 if(['g2','g3'].includes(s.grade)&&s.kind==='maths')return ['12','25','48','99','100','×','÷','=','½','¼'];
 if(s.kind==='urdu'&&['g2','g3'].includes(s.grade)){const w=keyWords(r).filter(x=>isUr(x)&&x.length<=6);if(w.length>=3)return w.slice(0,10)}
if(s.kind==='urdu')return ['ا','ب','پ','ت','ٹ','ث','ج','چ','ح','خ','د','ڈ'];if(s.kind==='maths')return ['1','2','3','4','5','6','7','8','9','10','+','='];
 const w=keyWords(r).filter(x=>x.length<=8&&!isUr(x));return (w.length>=3?w:['Aa','Bb','Cc','Dd','Ee','Ff']).slice(0,10)}
function puDoodle(r){const D=puState.doodle={color:'#1CB0F6',size:8,erase:false,guide:0,set:traceSet(r),showGuide:true};
 const cols=['#3C3C3C','#1CB0F6','#58CC02','#FF9600','#FF4B4B','#CE82FF','#FFC800'];
 app.innerHTML=puShell('doodle',r,`<div class="dd-bar"><div class="dd-cols">${cols.map(c=>`<button class="dd-c${c===D.color?' on':''}" data-c="${c}" style="--c:${c}" aria-label="Colour"></button>`).join('')}</div>
  <div class="dd-tools"><button class="btn" data-sz="4">Thin</button><button class="btn" data-sz="8">Medium</button><button class="btn" data-sz="16">Thick</button><button class="btn" id="dde">Eraser</button><button class="btn" id="ddx">Clear</button></div></div>
  <div class="dd-stage"><canvas id="ddg" aria-hidden="true"></canvas><canvas id="ddc" aria-label="Drawing board"></canvas></div>
  <div class="dd-trace"><label class="toggle"><input type="checkbox" id="ddt" checked> Tracing guide</label><button class="ibtn" id="ddp" aria-label="Previous">${ic.l}</button><b id="ddw" class="${isUr(D.set[0])?'ur-t':''}">${D.set[0]}</b><button class="ibtn" id="ddn" aria-label="Next">${ic.r}</button>${window.LT_STATIC?'<button class="btn" id="dds">Save picture</button>':''}</div>`);
 const st=document.querySelector('.dd-stage'),cv=document.getElementById('ddc'),gv=document.getElementById('ddg'),cx=cv.getContext('2d'),gx=gv.getContext('2d');let dpr=Math.min(2,window.devicePixelRatio||1),W=0,H=0;
 const guide=()=>{if(!document.getElementById('ddw'))return;gx.clearRect(0,0,gv.width,gv.height);if(!D.showGuide)return;const t=D.set[D.guide],ur=isUr(t);gx.save();gx.scale(dpr,dpr);gx.fillStyle='rgba(28,176,246,.14)';gx.strokeStyle='rgba(28,176,246,.55)';gx.setLineDash([10,10]);gx.lineWidth=3;
  const fs=Math.min(H*.62,W/(Math.max(1,t.length)*.62));gx.font=`${ur?400:800} ${fs}px ${ur?"'Noto Nastaliq Urdu',serif":"Andika,'Nunito',sans-serif"}`;gx.textAlign='center';gx.textBaseline='middle';gx.direction=ur?'rtl':'ltr';
  gx.fillText(t,W/2,H*(ur?.42:.52));gx.strokeText(t,W/2,H*(ur?.42:.52));gx.setLineDash([]);gx.strokeStyle='rgba(0,0,0,.08)';gx.lineWidth=2;[.25,.5,.75].forEach(y=>{gx.beginPath();gx.moveTo(16,H*y);gx.lineTo(W-16,H*y);gx.stroke()});gx.restore();
  const w=document.getElementById('ddw');w.textContent=t;w.className=ur?'ur-t':''};
 const size=()=>{const b=st.getBoundingClientRect();const img=W?cx.getImageData(0,0,cv.width,cv.height):null;W=b.width;H=b.height;[cv,gv].forEach(c=>{c.width=W*dpr;c.height=H*dpr});if(img)cx.putImageData(img,0,0);guide()};
 size();new ResizeObserver(()=>{if(Math.abs(st.getBoundingClientRect().width-W)>2)size()}).observe(st);
 let drawing=false,last=null;const pt=e=>{const b=cv.getBoundingClientRect();return [(e.clientX-b.left)*dpr,(e.clientY-b.top)*dpr]};
 cv.addEventListener('pointerdown',e=>{drawing=true;last=pt(e);cv.setPointerCapture(e.pointerId);line(last,last)});
 cv.addEventListener('pointermove',e=>{if(!drawing)return;const p=pt(e);line(last,p);last=p});
 ['pointerup','pointercancel','pointerleave'].forEach(t=>cv.addEventListener(t,()=>drawing=false));
 function line(a,b){cx.globalCompositeOperation=D.erase?'destination-out':'source-over';cx.strokeStyle=D.color;cx.lineWidth=(D.erase?D.size*3:D.size)*dpr;cx.lineCap='round';cx.lineJoin='round';cx.beginPath();cx.moveTo(a[0],a[1]);cx.lineTo(b[0]+.01,b[1]);cx.stroke()}
 document.querySelectorAll('.dd-c').forEach(b=>b.onclick=()=>{D.color=b.dataset.c;D.erase=false;document.querySelectorAll('.dd-c').forEach(x=>x.classList.toggle('on',x===b));document.getElementById('dde').classList.remove('on')});
 document.querySelectorAll('[data-sz]').forEach(b=>b.onclick=()=>{D.size=+b.dataset.sz});
 document.getElementById('dde').onclick=e=>{D.erase=!D.erase;e.currentTarget.classList.toggle('on',D.erase)};
 document.getElementById('ddx').onclick=()=>cx.clearRect(0,0,cv.width,cv.height);
 document.getElementById('ddt').onchange=e=>{D.showGuide=e.target.checked;guide()};
 document.getElementById('ddp').onclick=()=>{D.guide=(D.guide-1+D.set.length)%D.set.length;cx.clearRect(0,0,cv.width,cv.height);guide()};
 document.getElementById('ddn').onclick=()=>{D.guide=(D.guide+1)%D.set.length;cx.clearRect(0,0,cv.width,cv.height);guide()};
 const sv=document.getElementById('dds');sv&&(sv.onclick=()=>{const o=document.createElement('canvas');o.width=cv.width;o.height=cv.height;const ox=o.getContext('2d');ox.fillStyle='#fff';ox.fillRect(0,0,o.width,o.height);ox.drawImage(gv,0,0);ox.drawImage(cv,0,0);const a=document.createElement('a');a.download='little-takhti-doodle.png';a.href=o.toDataURL('image/png');a.click()});
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(guide);
}

/* --- Mindmap --- */
function puMind(r){const s=SUB[r.sub],g=guideOf(r)||[],kw=keyWords(r).slice(0,8),obj=(r.obj||[]).slice(0,4);
 const branches=[['What it means',g[0]?[g[0]]:[]],['Words to know',kw.slice(0,6)],['I can…',obj],['Try at home',(g[2]||[]).slice(0,2)]].filter(b=>b[1].length);
 const pos=[[-1,-1],[1,-1],[-1,1],[1,1]];
 app.innerHTML=puShell('mind',r,`<div class="mm"><svg class="mm-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${branches.map((_,i)=>`<path d="M50 50 C ${50+pos[i][0]*14} ${50}, ${50+pos[i][0]*22} ${50+pos[i][1]*18}, ${50+pos[i][0]*26} ${50+pos[i][1]*24}"/>`).join('')}</svg>
  <div class="mm-c">${subIcon(s)}<b class="${s.rtl?'ur-t':''}">${s.rtl?r.topic:rTitle(r)}</b>${s.rtl?`<small>${UR_EN[r.topic]||''}</small>`:''}</div>
  ${branches.map((b,i)=>`<div class="mm-b mm-b${i}"><h3>${b[0]}</h3><div class="mm-leaves">${b[1].map(x=>`<span class="${isUr(x)&&!/[a-z]/i.test(x)?'ur-t':''}">${mixUr(x)}</span>`).join('')}</div></div>`).join('')}</div>
  <p class="pu-note">Say each word aloud and use it in a sentence. Point to the branch you find easiest, then the hardest.</p>`);
}

/* --- Listen and read --- */
function puListen(r){if(pug().listen==='spell'&&!SUB[r.sub].rtl&&canSpeak(false))return puSpell(r);const s=SUB[r.sub],ur=!!s.rtl;let words=keyWords(r);if(words.length<4)words=buildQuiz(r).map(q=>q.ans).filter(x=>!/^[@#]/.test(x)&&String(x).length<24);words=[...new Set(words)].slice(0,12);
 const L=puState.listen={i:0,words};const can=canSpeak(ur);
 const draw=()=>{const w=L.words[L.i];document.getElementById('lsw').innerHTML=`<span class="${isUr(w)?'ur-t':''}">${optHTML(w)}</span>`;document.getElementById('lsn').textContent=`${L.i+1} of ${L.words.length}`;
  document.querySelectorAll('.ls-dots i').forEach((d,j)=>d.classList.toggle('on',j===L.i));if(can)speak([sayText(optHTML(w))],isUr(w))};
 app.innerHTML=puShell('listen',r,`<div class="ls">${words.length?`<div class="ls-card"><div class="ls-w" id="lsw"></div><small id="lsn"></small></div>
  <div class="ls-dots">${words.map(()=>'<i></i>').join('')}</div>
  <div class="acts" style="justify-content:center"><button class="ibtn" id="lsp" aria-label="Previous word">${ic.l}</button>${can?`<button class="btn sun lg" id="lss">${ic.sound}Say it again</button>`:''}<button class="ibtn" id="lsx" aria-label="Next word">${ic.r}</button></div>
  ${can?'':'<p class="pu-note">This device has no voice for read-aloud. Read each word together instead.</p>'}<p class="pu-note">Listen, then say the word yourself. Can you clap the syllables?</p>`:'<div class="empty">No words for this topic yet.</div>'}</div>`);
 if(!words.length)return;draw();
 document.getElementById('lsp').onclick=()=>{L.i=(L.i-1+L.words.length)%L.words.length;draw()};document.getElementById('lsx').onclick=()=>{L.i=(L.i+1)%L.words.length;draw()};
 const ss=document.getElementById('lss');ss&&(ss.onclick=()=>speak([sayText(optHTML(L.words[L.i]))],isUr(L.words[L.i])));
}

/* --- Study timer --- */
let puTmr=null;
function puTimer(r){clearInterval(puTmr);const T0=puState.timer={mins:pug().tdef,left:pug().tdef*60,run:false};
 const R=88,C=2*Math.PI*R;
 const draw=()=>{const m=Math.floor(T0.left/60),s=T0.left%60;document.getElementById('tmt').textContent=`${m}:${String(s).padStart(2,'0')}`;
  document.getElementById('tmr').style.strokeDashoffset=C*(1-T0.left/(T0.mins*60));document.getElementById('tmg').innerHTML=T0.run?`${I('<path d="M8 5v14M16 5v14"/>',3)}Pause`:`${ic.play}${T0.left<T0.mins*60?'Resume':'Start'}`};
 app.innerHTML=puShell('timer',r,`<div class="tm"><div class="tm-ring"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="${R}" class="tm-bg"/><circle cx="100" cy="100" r="${R}" class="tm-fg" id="tmr" style="stroke-dasharray:${C};stroke-dashoffset:0"/></svg><div class="tm-c"><b id="tmt"></b><small>${rTitle(r)}</small></div></div>
  <div class="tm-pick">${pug().timer.map(m=>`<button class="btn${m===pug().tdef?' on':''}" data-m="${m}">${m} min</button>`).join('')}</div>
  <div class="acts" style="justify-content:center"><button class="btn sun lg" id="tmg"></button><button class="btn lg" id="tmx">Reset</button></div>
  <p class="pu-note">Work on the practice pack until the chime, then take a short movement break.</p></div>`);
 const tick=()=>{T0.left--;if(T0.left<=0){T0.left=0;T0.run=false;clearInterval(puTmr);sfx.win&&sfx.win();const c=document.querySelector('.tm-c small');if(c)c.textContent='Time for a break!'}draw()};
 document.getElementById('tmg').onclick=()=>{T0.run=!T0.run;clearInterval(puTmr);if(T0.run)puTmr=setInterval(()=>{if(!document.getElementById('tmt')){clearInterval(puTmr);return}tick()},1000);draw()};
 document.getElementById('tmx').onclick=()=>{T0.run=false;clearInterval(puTmr);T0.left=T0.mins*60;draw()};
 document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{T0.mins=+b.dataset.m;T0.left=T0.mins*60;T0.run=false;clearInterval(puTmr);document.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('on',x===b));draw()});
 draw();
}

/* --- Ask Takhti: AI study buddy (only where AI is available) --- */
function puAsk(r){const s=SUB[r.sub],A=puState.ask&&puState.ask.rid===r.id?puState.ask:(puState.ask={rid:r.id,msgs:[],busy:false});
 const starters=s.rtl?['اس سبق میں کیا سیکھیں گے؟','مجھے ایک آسان مثال دیں','ایک چھوٹا سوال پوچھیں']:['What will I learn in this topic?','Give me an easy example','Ask me a small question','Help me with a hint'];
 const sys=`You are Takhti, a cheerful study buddy for a ${GR[s.grade].name} child (age ${GR[s.grade].age}) in Pakistan. Topic: "${s.rtl?(UR_EN[r.topic]||r.topic):rTitle(r).replace(/<[^>]+>/g,'')}" in ${s.name}. What the child is practising: ${(r.obj||[]).join('; ')}.
Rules: reply in 1 to 3 short, simple sentences a young child can read. Be warm and encouraging. For worksheet or quiz questions, give a hint or a worked example, never just the answer. Use examples from everyday life in Pakistan. Stay on school learning; if asked about anything else, kindly bring the chat back to the topic. Never ask for or repeat personal details (full name, address, school, phone, photos). If the child seems upset or unsafe, say kindly to talk to a parent or teacher. ${s.rtl?'Reply in simple Urdu script.':'If the child writes in Urdu, reply in simple Urdu.'} No markdown.`;
 const draw=()=>{const box=document.getElementById('akm');box.innerHTML=(A.msgs.length?'':`<div class="ak-hi">${mascot('happy')}<p>Assalam o Alaikum! I'm Takhti. Ask me anything about <b>${rTitle(r)}</b>.</p></div>`)+A.msgs.map(m=>`<div class="ak-m ${m.role}"><span class="${isUr(m.content)?'ur-t':''}">${esc(m.content)||'<i class="ak-dots"><b></b><b></b><b></b></i>'}</span></div>`).join('');box.scrollTop=box.scrollHeight};
 app.innerHTML=puShell('ask',r,`<div class="ak"><div class="ak-msgs" id="akm" aria-live="polite"></div>
  <div class="ak-st">${starters.map(t=>`<button class="qp" data-ak="${esc(t)}"><span class="${isUr(t)?'ur-t':''}">${t}</span></button>`).join('')}</div>
  <form class="ak-f" id="akf"><input id="aki" maxlength="300" autocomplete="off" placeholder="Type your question" aria-label="Your question"><button class="btn sun" type="submit" aria-label="Send">${ic.arrow}</button></form>
  <p class="pu-note">Takhti uses AI and can make mistakes. Grown-ups, please stay nearby. Chats are not saved.</p></div>`);
 draw();
 const send=async t=>{t=(t||'').trim();if(!t||A.busy)return;A.busy=true;A.msgs.push({role:'user',content:t});const bot={role:'assistant',content:''};A.msgs.push(bot);draw();
  const hist=A.msgs.slice(0,-1).slice(-10).map((m,i)=>({role:m.role,content:i===0&&m.role==='user'?sys+'\n\nChild: '+m.content:m.content}));if(hist[0].role!=='user')hist.unshift({role:'user',content:sys});
  try{const res=await CMS.sample(hist,{modelTier:'quick',cache:false,onText:({text})=>{bot.content=text;draw()}});bot.content=(res&&res.text)||bot.content||'Hmm, let me think about that again.'}
  catch(e){bot.content=e&&e.code==='rate_limited'?'Let\'s take a little break and try again in a minute.':'I could not answer just now. Please try again.'}
  A.busy=false;draw();if(store.get('autoread',['nursery','kg'].includes(s.grade))&&canSpeak(isUr(bot.content)))speak([bot.content],isUr(bot.content))};
 document.getElementById('akf').addEventListener('submit',e=>{e.preventDefault();const i=document.getElementById('aki');send(i.value);i.value=''});
 document.querySelectorAll('[data-ak]').forEach(b=>b.onclick=()=>send(b.dataset.ak));
}

/* --- Listen and spell (Class 2 and 3): hear a word, type it, check --- */
function puSpell(r){let words=keyWords(r).filter(w=>/^[a-z][a-z' -]{1,14}$/i.test(w));if(words.length<4)words=words.concat(buildQuiz(r).map(q=>String(q.ans)).filter(w=>/^[a-z]{3,12}$/i.test(w)));
 words=shuffle([...new Set(words.map(w=>w.trim()))]).slice(0,10);const S=puState.spell={i:0,words,score:0,done:false};
 const say=()=>speak([S.words[S.i]],false);
 const draw=(fb='')=>{const box=document.getElementById('spb');if(S.i>=S.words.length){box.innerHTML=`<div class="fc-end">${art('quiz')}<h2>${S.score} of ${S.words.length} spelled right!</h2><p>${S.score===S.words.length?'Perfect spelling. Shabash!':'Practise the tricky ones, then try again.'}</p><div class="acts" style="justify-content:center"><a class="btn sun lg" href="#pu-listen-${r.id}" data-reload="1">Try again</a></div></div>`;return}
  box.innerHTML=`<div class="fc-prog"><i style="width:${S.i/S.words.length*100}%"></i></div><small class="fc-n">Word ${S.i+1} of ${S.words.length} · ${S.score} right</small>
  <div class="ls-card sp-card"><button class="btn sun lg" id="sps">${ic.sound}Hear the word</button><form id="spf" class="sp-f" autocomplete="off"><input id="spi" aria-label="Type the word you hear" placeholder="Type the word" autocapitalize="off" spellcheck="false"><button class="btn fill" type="submit">Check</button></form>${fb}</div>`;
  document.getElementById('sps').onclick=say;const f=document.getElementById('spf');
  f.onsubmit=e=>{e.preventDefault();if(S.done){S.done=false;S.i++;draw();if(S.i<S.words.length)setTimeout(say,300);return}
   const v=document.getElementById('spi').value.trim().toLowerCase(),w=S.words[S.i].toLowerCase(),ok=v===w;if(!v)return;if(ok){S.score++;sfx.ok()}else sfx.no();S.done=true;
   draw(`<p class="sp-fb ${ok?'ok':'no'}">${ok?'Correct!':'Not quite.'} The word is <b>${esc(S.words[S.i])}</b>.</p>`);const ni=document.getElementById('spi');ni.value=v;ni.readOnly=true;document.querySelector('#spf button').textContent='Next word';document.querySelector('#spf button').focus()};
  const inp=document.getElementById('spi');inp&&!S.done&&inp.focus()};
 app.innerHTML=puShell('listen',r,`<div class="ls" id="spb"></div><p class="pu-note">Listen carefully, type the word, then press Check. Tap "Hear the word" as many times as you like.</p>`);
 if(!words.length){document.getElementById('spb').innerHTML='<div class="empty">No spelling words for this topic yet.</div>';return}
 draw();setTimeout(say,400)}
