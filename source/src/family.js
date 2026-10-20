/* ---------- family: sign-in, children, saved progress, recommendations ---------- */
const AVATARS={kite:'<path d="M12 2l8 9-8 9-8-9z" fill="#FFD93B" stroke="#123B28" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 2l8 9h-8z" fill="#2E9E4F"/><path d="M12 20c-1 2 1 2 0 3" stroke="#123B28" fill="none"/>',
 star:'<path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="#FFC63F" stroke="#123B28" stroke-width="1.4" stroke-linejoin="round"/>',
 moon:'<path d="M15 3a9 9 0 1 0 6 13A7 7 0 0 1 15 3z" fill="#9C88F0" stroke="#123B28" stroke-width="1.4"/>',
 fish:'<path d="M3 12c3-5 10-6 14-2l4-3v10l-4-3c-4 4-11 3-14-2z" fill="#4FB6E3" stroke="#123B28" stroke-width="1.4" stroke-linejoin="round"/><circle cx="8" cy="11" r="1.2" fill="#123B28"/>',
 leaf:'<path d="M4 20C4 9 11 4 20 4c0 9-5 16-16 16z" fill="#5BCF8E" stroke="#123B28" stroke-width="1.4"/><path d="M4 20L14 10" stroke="#123B28" stroke-width="1.4"/>',
 sun:'<circle cx="12" cy="12" r="5" fill="#FFB547" stroke="#123B28" stroke-width="1.4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="#123B28" stroke-width="1.4" stroke-linecap="round"/>'};
const GLOGO='<svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 38.2 44 33 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
const avSVG=(k,cls='')=>`<svg class="av2 ${cls}" viewBox="0 0 24 24" aria-hidden="true">${AVATARS[k]||AVATARS.kite}</svg>`;

const FAM={mode:'loading',uid:null,me:null,db:null,profile:{name:'',lang:'both'},children:{},progress:{},note:''};
const LSK='family';
function famLocalLoad(){const f=store.get(LSK,null);if(f){FAM.profile=f.profile||FAM.profile;FAM.children=f.children||{};FAM.progress=f.progress||{}}}
function famLocalSave(){store.set(LSK,{profile:FAM.profile,children:FAM.children,progress:FAM.progress})}
const pRef=()=>FAM.db.doc('data/users/'+FAM.uid+'/profile');
async function famInit(){
 famLocalLoad();FAM.mode='device';FAM.me=null;FAM.db=null;FAM.uid=null;
 try{let db=null,uid=null;
  if(window.LT_STATIC){if(window.LTFB_READY)await Promise.race([window.LTFB_READY,new Promise(r=>setTimeout(r,6000))]);
   const F=window.LTFB;if(F&&F.user){FAM.me=F.user;db=F.db;uid=F.user.id}}
  else{if(!window.claude||!claude.use){famReady();return}
   const user=await claude.use('user');if(user)FAM.me=await user.me();
   db=await claude.use('db');uid=user?await user.id():null}
  if(!db||!uid){famReady();return}
  FAM.db=db;FAM.uid=uid;
  const [ps,cs,gs]=await Promise.all([pRef().get(),pRef().collection('children').get(),pRef().collection('progress').get()]);
  const hadCloud=ps.exists||cs.size||gs.size;
  if(hadCloud){if(ps.exists)FAM.profile={...FAM.profile,...ps.data()};FAM.children={};cs.docs.forEach(d=>FAM.children[d.id]=d.data());FAM.progress={};gs.docs.forEach(d=>FAM.progress[d.id]=d.data())}
  FAM.mode='cloud';
  /* first sign-in on a device that already has local profiles: carry them over once */
  if(!hadCloud&&Object.keys(FAM.children).length){for(const [id,c] of Object.entries(FAM.children))await famWrite(pRef().collection('children').doc(id),c);for(const [id,p] of Object.entries(FAM.progress))await famWrite(pRef().collection('progress').doc(id),p)}
 }catch(e){FAM.mode='device';if(window.LT_STATIC&&FAM.me)FAM.note='Could not reach your saved profiles just now, so this device copy is shown.'}
 famReady();if(FAM.mode==='cloud')syncMember();
}
if(window.LT_STATIC)window.addEventListener('ltfb-auth',()=>famInit());
function famReady(){if(FAM.mode==='loading')FAM.mode='device';renderAcct();const h=(location.hash||'').slice(1);if(['account','home','','quiz','parents','class'].includes(h)||h.startsWith('play-'))route(true)}
async function famWrite(ref,data){if(FAM.mode!=='cloud'){famLocalSave();return true}
 try{await ref.set(data);return true}catch(e){if(e&&(e.code==='invalid_argument'||e.code==='not_granted'||e.code==='revoked'||e.code==='permission-denied')){FAM.mode='device';FAM.note='Your access to this page is view-only, so profiles are saved on this device instead.';famLocalSave();renderAcct();return true}
  if(e&&e.code==='quota_exceeded'){FAM.note='Storage is full. Remove a child profile to free space.';return false}
  try{await new Promise(r=>setTimeout(r,400+Math.random()*600));await ref.set(data);return true}catch(e2){FAM.note='Could not save just now. Please try again.';return false}}}
async function famDelete(ref){if(FAM.mode!=='cloud'){famLocalSave();return}try{await ref.delete()}catch(e){}}
const saveProfile=()=>famWrite(FAM.mode==='cloud'?pRef():null,{...FAM.profile});
async function saveChild(id,c){FAM.children[id]=c;setTimeout(syncMember,50);return famWrite(FAM.mode==='cloud'?pRef().collection('children').doc(id):null,c)}
async function removeChild(id){delete FAM.children[id];const ids=Object.keys(FAM.progress).filter(k=>k.startsWith(id+'__'));ids.forEach(k=>delete FAM.progress[k]);
 if(FAM.mode==='cloud'){await famDelete(pRef().collection('children').doc(id));for(const k of ids)await famDelete(pRef().collection('progress').doc(k))}else famLocalSave();
 if(activeChild()===id)setActive(null)}
async function saveProgress(cid,rid,right,total,score,stars){const k=cid+'__'+rid,o=FAM.progress[k]||{child:cid,res:rid,plays:0,right:0,total:0,best:0,bestScore:0};
 const p={...o,plays:o.plays+1,right:o.right+right,total:o.total+total,best:Math.max(o.best,stars),bestScore:Math.max(o.bestScore,score),lastRight:right,lastTotal:total,last:new Date().toISOString().slice(0,10)};
 FAM.progress[k]=p;return famWrite(FAM.mode==='cloud'?pRef().collection('progress').doc(k):null,p)}
const activeChild=()=>{const a=store.get('active',null);return a&&FAM.children[a]?a:null};
function setActive(id){store.set('active',id);renderAcct()}
const childList=()=>Object.entries(FAM.children).sort((a,b)=>(a[1].created||'').localeCompare(b[1].created||''));
const progOf=(cid,rid)=>FAM.progress[cid+'__'+rid];
function childStats(cid){const ps=Object.values(FAM.progress).filter(p=>p.child===cid);const right=ps.reduce((a,p)=>a+p.right,0),total=ps.reduce((a,p)=>a+p.total,0);
 return {games:ps.reduce((a,p)=>a+p.plays,0),stars:ps.reduce((a,p)=>a+p.best,0),acc:total?Math.round(right/total*100):null,done:ps.filter(p=>p.best===3).length}}
function subjectAcc(cid,sid){const ps=Object.values(FAM.progress).filter(p=>p.child===cid&&RID[p.res]&&RID[p.res].sub===sid);const t=ps.reduce((a,p)=>a+p.total,0);return t?ps.reduce((a,p)=>a+p.right,0)/t:null}
/* tailored next steps for one child */
function recommend(cid){const c=FAM.children[cid];if(!c)return [];const out=[];
 const packs=RES.filter(r=>!r.set&&SUB[r.sub].grade===c.grade);
 packs.forEach((r,order)=>{const p=progOf(cid,r.id),s=SUB[r.sub],q=hasQuiz(r);let score=0,why='';
  const acc=p&&p.total?p.right/p.total:null,sAcc=subjectAcc(cid,r.sub);
  if(!p){score=40-order*.3;why=q?'Not tried yet':'Hands-on pack, no quiz';if(c.fav===s.kind){score+=8;why='Favourite subject'}if(sAcc!=null&&sAcc<.6){score+=10;why='Builds a weaker subject'}}
  else if(p.best<3){score=60+(1-acc)*30;why=acc<.6?`Last score ${p.lastRight}/${p.lastTotal}, worth another go`:`${p.best} star${p.best>1?'s':''} so far, aim for 3`}
  else return;
  out.push({r,why,score,q,p});});
 return out.sort((a,b)=>b.score-a.score).slice(0,4)}
function weakest(cid){const c=FAM.children[cid];if(!c)return null;let w=null;subjectsOf(c.grade).forEach(s=>{const a=subjectAcc(cid,s.id);if(a!=null&&(!w||a<w.a))w={s,a}});return w&&w.a<.75?w:null}

/* ---------- header account chip ---------- */
function renderAcct(){const el=document.getElementById('acct');if(!el)return;const a=activeChild(),c=a&&FAM.children[a];
 const meImg=FAM.me&&FAM.me.id&&FAM.me.avatarUrl?`<img src="${esc(FAM.me.avatarUrl)}" alt="">`:`<span class="av0">${I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>')}</span>`;
 el.innerHTML=`<a class="acct" href="#account" aria-label="Family and profiles">${c?avSVG(c.avatar):meImg}<span>${c?esc(c.name):(FAM.me&&FAM.me.id?'Family':'Sign in')}</span></a>`}

/* ---------- account / family page ---------- */
let editChild=null,confirmDel=null;
function account(){
 const me=FAM.me,signed=!!(me&&me.id),kids=childList();
 const modeTag=FAM.mode==='cloud'?`<span class="tag key">${ic.ok}Saved to your account</span>`:`<span class="tag">Saved on this device only</span>`;
 const form=(id)=>{const c=id?FAM.children[id]:{name:'',grade:grade,avatar:'kite',fav:''};
  return `<form class="kform" id="kform" data-id="${id||''}"><div class="kf-row"><label for="kname">First name or nickname</label><input id="kname" maxlength="24" required value="${esc(c.name)}" placeholder="e.g. Zara"></div>
  <div class="kf-row"><label for="kgrade">Grade</label><select id="kgrade">${LIVE.map(g=>`<option value="${g.id}" ${g.id===c.grade?'selected':''}>${g.name}</option>`).join('')}</select></div>
  <div class="kf-row"><span class="lbl">Picture</span><div class="avpick" role="radiogroup" aria-label="Picture">${Object.keys(AVATARS).map(k=>`<label class="avopt"><input type="radio" name="kav" value="${k}" ${k===c.avatar?'checked':''}>${avSVG(k)}<span class="vh">${k}</span></label>`).join('')}</div></div>
  <div class="kf-row"><label for="kage">Age <span class="opt">(optional)</span></label><select id="kage"><option value="">Prefer not to say</option>${[2,3,4,5,6,7,8,9,10,11,12].map(n=>`<option value="${n}" ${String(c.age)===String(n)?'selected':''}>${n} years</option>`).join('')}</select></div>
  <div class="kf-row"><label for="kgen">Boy or girl <span class="opt">(optional)</span></label><select id="kgen"><option value="">Prefer not to say</option><option value="girl" ${c.gender==='girl'?'selected':''}>Girl</option><option value="boy" ${c.gender==='boy'?'selected':''}>Boy</option></select></div>
  <div class="kf-row"><label for="kfav">Favourite subject (optional)</label><select id="kfav"><option value="">No favourite</option>${Object.entries(KIND).map(([k,v])=>`<option value="${k}" ${k===c.fav?'selected':''}>${v.name}</option>`).join('')}</select></div>
  <div class="acts"><button class="btn sun" type="submit">${id?'Save changes':'Add child'}</button>${id||kids.length?`<button class="btn" type="button" data-kcancel="1">Cancel</button>`:''}</div></form>`};
 app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Family</span><h1>${signed?`Hello${me.name?', '+esc(me.name.split(' ')[0]):''}`:window.LT_STATIC?'Family profiles':'Sign in and family profiles'}</h1>
  <p>${signed?'You are signed in. Add each child to save their quiz progress and get recommendations made for them.':window.LT_STATIC?'Sign in with Google to keep your children\'s profiles and quiz progress on every phone and computer. Without signing in, they stay on this device.':'Profiles and quiz progress save to your account when you are signed in. Right now they are kept on this device only.'}</p>
  <div class="tags" style="margin-top:12px">${modeTag}${signed?'<span class="tag">Private to you</span>':''}</div>${FAM.note?`<p class="fnote">${FAM.note}</p>`:''}</div>
  <div class="acct-card">${signed?`${me.avatarUrl?`<img src="${esc(me.avatarUrl)}" alt="" class="meimg">`:`<span class="meimg av0" style="background:var(--sun);color:var(--on-sun);font:800 26px var(--display)">${esc((me.name||"?")[0])}</span>`}<b>${esc(me.name||'Signed in')}</b><small>${window.LT_STATIC?'Signed in with Google':'Signed in'}</small>${window.LT_STATIC&&window.LTFB?'<button class="btn" data-gsignout="1" type="button" style="margin-top:8px">Sign out</button>':''}`:`<span class="meimg av0">${I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>')}</span><b>Not signed in</b><small>${window.LT_STATIC?'Profiles stay on this device':'Sign in to save across devices'}</small>${window.LT_STATIC&&window.LTFB?`<button class="btn gbtn" data-gsignin="1" type="button">${GLOGO}Sign in with Google</button>`:''}`}
</div></div>
 <section class="pdet" aria-labelledby="pdet-h"><div class="pdet-h"><div><span class="kick">Account</span><h2 id="pdet-h">Your details</h2></div>${signed?`<div class="pdet-links"><a class="btn" href="#share">${I('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',2)}Share material</a><a class="btn" href="#help">Help</a></div>`:''}</div>
  <div class="pdet-grid"><div class="kf-row"><label for="plang">Weekly guide language for Urdu</label><select id="plang"><option value="both" ${FAM.profile.lang==='both'?'selected':''}>English and Urdu</option><option value="en" ${FAM.profile.lang==='en'?'selected':''}>English only</option><option value="ur" ${FAM.profile.lang==='ur'?'selected':''}>Urdu only</option></select></div>
   ${signed?`<div class="kf-row"><label for="prole">I am a <span class="opt">(optional)</span></label><select id="prole" data-pf="role"><option value="">Prefer not to say</option>${[['parent','Parent'],['teacher','Teacher'],['tutor','Tutor'],['school','School'],['other','Other']].map(([k,v])=>`<option value="${k}" ${FAM.profile.role===k?'selected':''}>${v}</option>`).join('')}</select></div>
   <div class="kf-row"><label for="pcity">City <span class="opt">(optional)</span></label><input id="pcity" data-pf="city" maxlength="40" value="${esc(FAM.profile.city||'')}" placeholder="e.g. Lahore"></div>
   <div class="kf-row"><label for="pprov">Province <span class="opt">(optional)</span></label><select id="pprov" data-pf="province"><option value="">Prefer not to say</option>${['Punjab','Sindh','Khyber Pakhtunkhwa','Balochistan','Islamabad Capital Territory','Gilgit-Baltistan','Azad Jammu and Kashmir','Outside Pakistan'].map(p=>`<option ${FAM.profile.province===p?'selected':''}>${p}</option>`).join('')}</select></div>`:''}</div>
  ${signed?'<p class="pnote">Optional. Helps us plan content for your area. Never shown publicly.</p>':''}</section>
 <section style="margin-top:30px"><div class="sec-h"><div><span class="kick">Children</span><h2>${kids.length?'Your children':'Add your first child'}</h2></div>${kids.length&&editChild===null?`<button class="btn sun" data-kadd="1">${I('<path d="M12 5v14M5 12h14"/>',2.5)}Add a child</button>`:''}</div>
 ${editChild!==null||!kids.length?`<div class="kwrap">${form(editChild||null)}<p class="pnote">Use a first name or nickname only. Details stay private to your account and are used only to tailor practice.</p></div>`:''}
 <div class="kids">${kids.map(([id,c])=>{const st=childStats(id),recs=recommend(id),w=weakest(id),act=activeChild()===id;
  return `<article class="kid${act?' on':''} s-${(subjectsOf(c.grade)[0]||{}).id}"><div class="kid-top">${avSVG(c.avatar,'big')}<div style="min-width:0;flex:1"><h3>${esc(c.name)}</h3><small>${GR[c.grade].name} · ${GR[c.grade].age}${c.fav?' · loves '+KIND[c.fav].name:''}</small></div>
   ${act?`<span class="tag key">${ic.ok}Playing now</span>`:`<button class="btn" data-play-as="${id}">Play as ${esc(c.name)}</button>`}</div>
   <div class="kstats"><div><b>${st.games}</b><small>games</small></div><div><b>${st.stars}</b><small>stars</small></div><div><b>${st.acc==null?'–':st.acc+'%'}</b><small>accuracy</small></div><div><b>${st.done}</b><small>mastered</small></div></div>
   ${w?`<p class="kweak">${ic.bulb}<span>${esc(c.name)} finds <b>${w.s.name}</b> harder (${Math.round(w.a*100)}% right). The picks below lean that way.</span></p>`:''}
   <h4 class="gh" style="margin-top:14px"><span class="gi">${ic.spark}</span>Recommended for ${esc(c.name)}</h4>
   <div class="recs">${recs.length?recs.map(x=>{const s=SUB[x.r.sub];return `<a class="rec s-${x.r.sub}" href="${x.q?'#play-'+x.r.id:'#res-'+x.r.id}" data-play-as-go="${id}"><span class="sic">${subIcon(s)}</span><span class="t">${T(s.rtl?x.r.topic:x.r.title.replace(/ Practice$/,''))}<small>${s.name} · ${x.why}</small></span><span class="pq">${x.q?ic.play+'Play':ic.sheet+'Open'}</span></a>`}).join(''):`<p class="count">Every topic has 3 stars. Try the next grade or replay favourites.</p>`}</div>
   <div class="acts kacts"><a class="btn" href="#parents" data-pg-grade="${c.grade}">${ic.heart}Parent guides</a><a class="btn" href="#class" data-pg-grade="${c.grade}">${ic.cal}Weekly guide</a>
   <button class="btn" data-kedit="${id}">Edit</button>${confirmDel===id?`<button class="btn" data-kdel-yes="${id}" style="border-color:var(--bad);color:var(--bad)">Remove ${esc(c.name)} and progress</button><button class="btn" data-kdel-no="1">Keep</button>`:`<button class="btn" data-kdel="${id}">Remove</button>`}</div></article>`}).join('')}</div></section>`;
 document.querySelectorAll('[data-pf]').forEach(el=>el.addEventListener('change',async()=>{FAM.profile[el.dataset.pf]=el.value.trim().slice(0,40);await saveProfile();syncMember()}));
 const pl=document.getElementById('plang');pl&&pl.addEventListener('change',async e=>{FAM.profile.lang=e.target.value;await saveProfile()});
 const f=document.getElementById('kform');f&&f.addEventListener('submit',async e=>{e.preventDefault();const id=f.dataset.id||('c'+Date.now().toString(36));const old=FAM.children[id]||{};
  const c={name:document.getElementById('kname').value.trim().slice(0,24),grade:document.getElementById('kgrade').value,avatar:(f.querySelector('input[name=kav]:checked')||{}).value||'kite',fav:document.getElementById('kfav').value,age:document.getElementById('kage').value,gender:document.getElementById('kgen').value,created:old.created||new Date().toISOString()};
  if(!c.name)return;if(!FAM.children[id]&&window.LTFB)window.LTFB.log('add_child',{grade:c.grade});await saveChild(id,c);if(!activeChild())setActive(id);editChild=null;account();fit()});
}

/* who is playing: shown on the quiz start screen */
function whoPlays(){const kids=childList();if(!kids.length)return `<p class="gbest gb-add"><a href="#account">Add your child</a> to save progress and get tailored picks.</p>`;
 const a=activeChild();return `<div class="who2"><span class="who-l">Who's playing?</span><div class="who-c">${kids.map(([id,c])=>`<button class="wchip${a===id?' on':''}" data-who="${id}" aria-pressed="${a===id}">${avSVG(c.avatar)}${esc(c.name)}</button>`).join('')}<button class="wchip${a?'':' on'}" data-who="" aria-pressed="${!a}"><span class="av2 avg">${I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',2.2)}</span>Guest</button></div></div>`}

/* ---------- read aloud ---------- */
const SPEECH='speechSynthesis' in window;
let voices=[];function loadVoices(){try{voices=speechSynthesis.getVoices()}catch(e){voices=[]}}
if(SPEECH){loadVoices();try{speechSynthesis.onvoiceschanged=loadVoices}catch(e){}}
/* prefer a South Asian English accent: Pakistan, then India (closest widely available), then British; natural/neural voices first */
const vScore=(v,ur)=>{const l=(v.lang||'').replace('_','-').toLowerCase(),n=(v.name||'').toLowerCase();let s=0;
 if(ur){if(!l.startsWith('ur'))return -1;s=l==='ur-pk'?50:40}
 else{if(!l.startsWith('en'))return -1;s=l==='en-pk'?60:l==='en-in'?50:l==='en-gb'?30:l==='en-au'||l==='en-ie'?20:10}
 if(/natural|neural|online|premium|enhanced/.test(n))s+=6;if(/google/.test(n))s+=3;if(/female|heera|neerja|uzma|swara|kalpana|veena|isha/.test(n))s+=2;return s};
const voiceList=ur=>voices.map(v=>[v,vScore(v,ur)]).filter(x=>x[1]>=0).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
const voiceFor=ur=>{const pick=store.get(ur?'voiceUr':'voiceEn',''),l=voiceList(ur);return (pick&&l.find(v=>v.voiceURI===pick))||l[0]};
const canSpeak=ur=>SPEECH&&(!ur||!!voiceFor(true));
function sayText(html){const d=document.createElement('div');html=String(html).replace(/(^|[^A-Za-z])([Zz])(?=$|[^A-Za-z])/g,'$1zed');d.innerHTML=String(html).replace(/<span class="qbl"><\/span>/g,' blank ').replace(/<span class="qnext">\?<\/span>/g,' what comes next ');return d.textContent.replace(/→|←/g,' goes with ').replace(/[×]/g,' times ').replace(/−/g,' minus ').replace(/÷/g,' divided by ').replace(/_{2,}/g,' blank ').replace(/\s+/g,' ').trim()}
function speak(parts,ur){if(!canSpeak(ur))return;try{speechSynthesis.cancel();let t=parts.filter(Boolean).join('. ');if(ur)t=t.replace(/\bblank\b/g,'خالی جگہ').replace(/what comes next/g,'آگے کیا آئے گا').replace(/goes with/g,'کے ساتھ').replace(/\bOption (\d)/g,'جواب $1');const u=new SpeechSynthesisUtterance(t);const v=voiceFor(ur);if(v)u.voice=v;u.lang=ur?'ur-PK':(v?v.lang:'en-IN');u.rate=.88;u.pitch=1.05;speechSynthesis.speak(u)}catch(e){}}
const stopSpeak=()=>{try{SPEECH&&speechSynthesis.cancel()}catch(e){}};
const optSay=o=>o[0]==='@'?SHN[o.slice(1)]:o[0]==='#'?o.slice(1).split('|')[0]+' '+SHN[o.slice(1).split('|')[1]]+'s':sayText(o);
function readQ(){if(!G)return;const q=G.qs[G.i],ur=!!G.s.rtl;speak([q.story?sayText(q.story):'',sayText(q.sub||''),sayText(q.q),...q.opts.map((o,j)=>(ur?'':'Option '+(j+1)+', ')+optSay(o))],ur)}
