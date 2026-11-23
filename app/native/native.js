/* Little Takhti app layer (Android and iOS app only, never on the website).
   Loaded after the site's own script, so it can use the site's globals (route, RID, PLAN, grade...).
   - native feel: hardware back button, external links in the system browser, status bar colour
   - parent PIN: gates the Parents area, settings, and anything that leaves the app
   - worksheets open in an in-app PDF viewer (pdf.js), with Print and Share
   - "Download this week": saves this week's PDFs on the device so they open with no internet */
(function(){
if(!window.LT_APP)return;
const CAP=window.Capacitor,NATIVE=!!(CAP&&CAP.isNativePlatform&&CAP.isNativePlatform());
const P=n=>(CAP&&CAP.Plugins&&CAP.Plugins[n])||null;
const $=s=>document.querySelector(s);
const h$=(s)=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const REMOTE=window.LT_REMOTE||'';
const SVG={
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
 print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/></svg>',
 share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
 dl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>',
 ok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 bin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
 plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
 minus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14"/></svg>',
 del:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7z"/><path d="M12 9l6 6M18 9l-6 6"/></svg>'};
const fmt=b=>b>=1048576?(b/1048576).toFixed(1)+' MB':Math.max(1,Math.round(b/1024))+' KB';
const toast=(msg)=>{let t=$('#ltn-toast');if(!t){t=document.createElement('div');t.id='ltn-toast';t.setAttribute('role','status');document.body.appendChild(t)}
 t.textContent=msg;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),2600)};
const navOn=k=>document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===k));
const curHash=()=>(location.hash||'#home').slice(1)||'home';

/* ================= 1. native feel ================= */
if(NATIVE){
 const SB=P('StatusBar');
 if(SB){SB.setStyle({style:'DARK'}).catch(()=>{});if(CAP.getPlatform()==='android'){SB.setBackgroundColor({color:'#123B28'}).catch(()=>{});SB.setOverlaysWebView({overlay:false}).catch(()=>{})}}
 const A=P('App');
 if(A){
  A.addListener('backButton',e=>{
   if(closeTop())return;
   const h=curHash();
   if(h==='home'){A.exitApp();return}
   if(e&&e.canGoBack)history.back();else location.hash='home'});
  // lock again if the app was in the background for more than 2 minutes (printing or sharing is shorter)
  let away=0;A.addListener('appStateChange',s=>{if(!s)return;if(!s.isActive)away=Date.now();else if(away&&Date.now()-away>120000)lockNow()});
 }
}else{let away=0;document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')away=Date.now();else if(away&&Date.now()-away>120000)lockNow()})}
document.documentElement.classList.add(NATIVE?'app-native':'app-web');

/* close the top-most overlay; true if something was closed */
function closeTop(){
 const v=$('#ltn-viewer');if(v){closeViewer();return true}
 const pin=$('#ltn-pin');if(pin){pinDone(false);return true}
 const g=$('#gmod');if(g){const x=$('#gmx');if(x){x.click();return true}return true}   // first-visit grade picker: stay
 const stay=$('#lqstay');if(stay){stay.click();return true}
 const m=document.querySelector('.lq-back');if(m){const c=m.querySelector('[data-close],.lq-x,button.btn:not(.fill):not(.sun)');if(c)c.click();else m.remove();return true}
 return false}

/* external links: everything that is not the app's own pages or worksheet PDFs */
const isPdf=u=>/\.pdf(\?|#|$)/i.test(u);
function isExternal(u){if(!u)return false;if(/^(mailto|tel|sms|whatsapp|intent|market|geo):/i.test(u))return true;
 if(!/^https?:/i.test(u))return false;try{const x=new URL(u,location.href);return x.origin!==location.origin}catch(e){return true}}
async function openExternal(u){
 const ok=await gate('This link leaves the app.');if(!ok)return;
 const B=P('Browser');
 if(/^https?:/i.test(u)&&B){B.open({url:u,toolbarColor:'#123B28'}).catch(()=>{location.href=u});return}
 if(NATIVE){location.href=u;return}
 nativeOpen.call(window,u,'_blank','noopener')}
const nativeOpen=window.open;
window.open=function(u,t,f){u=String(u||'');
 if(isPdf(u)){openPdf(u);return null}
 if(isExternal(u)){openExternal(u);return null}
 return nativeOpen.call(window,u,t,f)};

document.addEventListener('click',e=>{
 if(e.defaultPrevented)return;
 const pr=e.target.closest('[data-print]');
 if(pr&&typeof RID!=='undefined'&&RID[pr.dataset.print]){e.preventDefault();e.stopImmediatePropagation();const r=RID[pr.dataset.print];openPdf(pdf(r),r);return}
 const a=e.target.closest('a[href]');
 if(a){const u=a.getAttribute('href');
  if(isPdf(u)){e.preventDefault();e.stopImmediatePropagation();const m=u.match(/little-takhti-(.+)\.pdf/);openPdf(new URL(u,REMOTE||location.href).href,m&&typeof RID!=='undefined'?RID[m[1]]:null);return}
  if(isExternal(a.href||u)){e.preventDefault();e.stopImmediatePropagation();openExternal(a.href||u);return}}
 const act=e.target.closest('[data-ltn]');if(act){e.preventDefault();doAct(act.dataset.ltn,act)}
},true);

/* ================= 2. parent PIN ================= */
const PIN_KEY='lt-app-pin',UNLOCK_MS=10*60*1000;
let unlockedUntil=0,pinState=null,lockoutUntil=0,wrong=0;
const pinSet=()=>!!localStorage.getItem(PIN_KEY);
async function hashPin(p){const s='little-takhti-pin:'+p;
 try{const d=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(d),b=>b.toString(16).padStart(2,'0')).join('')}
 catch(e){let x=5381;for(const c of s)x=((x*33)^c.charCodeAt(0))>>>0;return 'h'+x}}
const isUnlocked=()=>Date.now()<unlockedUntil;
const touchUnlock=()=>{if(isUnlocked())unlockedUntil=Date.now()+UNLOCK_MS};
function lockNow(){unlockedUntil=0;if(GATED.test(curHash())&&!$('#ltn-pin'))route(true)}
/* ask for the PIN; resolves true when a grown-up got through */
function gate(why,fromRoute){
 if(isUnlocked()){touchUnlock();return Promise.resolve(true)}
 if(pinState)return pinState.p;
 let res;const p=new Promise(r=>res=r);pinState={p,res,why:why||'',mode:pinSet()?'enter':'new1',val:'',first:'',q:null,fromRoute:!!fromRoute};
 drawPin();return p}
function pinDone(ok){const s=pinState;if(!s)return;pinState=null;const el=$('#ltn-pin');el&&el.remove();
 if(ok)unlockedUntil=Date.now()+UNLOCK_MS;s.res(!!ok)}
function newQ(){const a=12+Math.floor(Math.random()*8),b=6+Math.floor(Math.random()*4),c=11+Math.floor(Math.random()*39);return {t:`${a} × ${b} + ${c}`,ans:a*b+c}}
function drawPin(msg){const s=pinState;if(!s)return;
 let el=$('#ltn-pin');if(!el){el=document.createElement('div');el.id='ltn-pin';el.className='ltn-back';document.body.appendChild(el)}
 const M=s.mode,waiting=Date.now()<lockoutUntil;
 const head={enter:['For grown-ups','Enter your 4-digit parent PIN.'],
  new1:[pinSet()?'Choose a new PIN':'Set a parent PIN',pinSet()?'Type 4 new numbers.':'Choose 4 numbers that only grown-ups know. The PIN keeps the Parents area, settings and links that leave the app just for you.'],
  new2:['Type it once more','Type the same 4 numbers again to confirm.'],
  forgot:['Grown-up check','Answer this sum to choose a new PIN.']}[M];
 const dots=M==='forgot'?`<div class="ltn-ans" aria-live="polite">${s.q.t} = <b>${s.val||'?'}</b></div>`:`<div class="ltn-dots" aria-label="${s.val.length} of 4 numbers typed">${[0,1,2,3].map(i=>`<i class="${i<s.val.length?'on':''}"></i>`).join('')}</div>`;
 el.innerHTML=`<div class="ltn-pin" role="dialog" aria-modal="true" aria-labelledby="ltn-ph"><span class="ltn-lk">${SVG.lock}</span>
  <h2 id="ltn-ph">${head[0]}</h2><p class="ltn-sub">${s.why&&M==='enter'?h$(s.why)+' ':''}${head[1]}</p>${dots}
  <p class="ltn-err" role="alert">${waiting?`Too many tries. Please wait ${Math.ceil((lockoutUntil-Date.now())/1000)} seconds.`:(msg||'')}</p>
  <div class="ltn-pad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button type="button" data-k="${n}" ${waiting?'disabled':''}>${n}</button>`).join('')}
   <button type="button" data-k="x" aria-label="Delete">${SVG.del}</button><button type="button" data-k="0" ${waiting?'disabled':''}>0</button>
   ${M==='forgot'?`<button type="button" data-k="go" class="go" ${waiting?'disabled':''}>Check</button>`:'<span></span>'}</div>
  <div class="ltn-prow"><button type="button" class="ltn-lnk" data-k="cancel">Cancel</button>${M==='enter'?'<button type="button" class="ltn-lnk" data-k="forgot">Forgot PIN?</button>':''}</div></div>`;
 el.onclick=e=>{const b=e.target.closest('[data-k]');if(b)pinKey(b.dataset.k)};
 if(waiting){clearTimeout(drawPin._t);drawPin._t=setTimeout(()=>drawPin(),1000)}}
async function pinKey(k){const s=pinState;if(!s)return;
 if(k==='cancel'){pinDone(false);return}
 if(k==='forgot'){s.mode='forgot';s.val='';s.q=newQ();s.tries=0;drawPin();return}
 if(Date.now()<lockoutUntil)return;
 if(k==='x'){s.val=s.val.slice(0,-1);drawPin();return}
 if(s.mode==='forgot'){
  if(k==='go'){if(+s.val===s.q.ans){s.mode='new1';s.val='';drawPin();return}
   s.tries=(s.tries||0)+1;if(s.tries>=3){lockoutUntil=Date.now()+60000;s.tries=0}s.q=newQ();s.val='';drawPin('That is not right. Here is a new sum.');return}
  if(s.val.length<4)s.val+=k;drawPin();return}
 if(s.val.length>=4)return;s.val+=k;drawPin();if(s.val.length<4)return;
 const v=s.val;await new Promise(r=>setTimeout(r,140));
 if(s.mode==='enter'){if((await hashPin(v))===localStorage.getItem(PIN_KEY)){wrong=0;pinDone(true);return}
  wrong++;if(wrong>=5){wrong=0;lockoutUntil=Date.now()+30000}s.val='';drawPin('That PIN is not right.');const b=$('.ltn-dots');b&&b.classList.add('shake');return}
 if(s.mode==='new1'){s.first=v;s.val='';s.mode='new2';drawPin();return}
 if(s.mode==='new2'){if(v!==s.first){s.mode='new1';s.val='';s.first='';drawPin('Those did not match. Please try again.');return}
  localStorage.setItem(PIN_KEY,await hashPin(v));toast('Parent PIN saved');pinDone(true)}}
function changePin(){if(pinState)return;let res;const p=new Promise(r=>res=r);pinState={p,res,why:'',mode:'new1',val:'',first:''};drawPin();return p}

/* gated pages: Parents area, family profiles and settings, help, saved worksheets */
const GATED=/^(parents|account|tools|spell-maker|spell-print|prep|prep-print|report|rewards|rewards-print|help|help-.*|share|offline)$/;
let lastOpen='home';
const siteRoute=route;
route=function(keep){const h=curHash();
 if(GATED.test(h)&&!isUnlocked()){
  app.innerHTML=`<div class="ltn-locked"><span class="ltn-lk">${SVG.lock}</span><h1>For grown-ups</h1><p>This part of the app is for parents and teachers.</p><button class="btn fill" type="button" data-ltn="unlock">Enter parent PIN</button><p><a href="#kids">Go to Play instead</a></p></div>`;
  navOn('parents');window.scrollTo(0,0);
  gate('',true).then(ok=>{if(curHash()!==h)return;if(ok)route(keep);else location.replace('#'+(lastOpen||'home'))});return}
 if(GATED.test(h))touchUnlock();else{lastOpen=h;if(pinState&&pinState.fromRoute)pinDone(false)}
 if(h==='offline'){offlinePage();navOn('parents');if(!keep)window.scrollTo(0,0);return}
 siteRoute(keep);try{afterRoute(h)}catch(e){console.warn(e)}};
window.route=route;

/* app's own privacy notice (no ads, no analytics, no sign-in) */
privacy=function(){app.innerHTML=`<article class="legal"><span class="kick">Privacy</span><h1>Privacy in the Little Takhti app</h1><p class="muted">App version ${h$(window.LT_APP_VERSION||'')}</p>
 <p>Little Takhti is a free learning app for children from Nursery to Grade 3 and their parents.</p>
 <h2>What we collect</h2><p>Nothing. The app has no ads, no analytics, no tracking and no sign-in. We do not collect names, photos, contacts, location or device IDs.</p>
 <h2>What stays on this device</h2><p>Your child's nickname, chosen grade, quiz stars, stickers, the parent PIN and any worksheets you save for offline use are kept only on this phone or tablet. Removing the app deletes them.</p>
 <h2>Internet</h2><p>The app uses the internet only to fetch worksheet PDFs from the Little Takhti website when you open or save them. These are plain file downloads with no account and no tracking.</p>
 <h2>Links</h2><p>Links that leave the app are behind the parent PIN and open in your web browser.</p>
 <h2>Contact</h2><p>Questions? Write to sumbulaftab@gmail.com.</p></article>`};

/* ================= 3. offline worksheets ================= */
const FS=P('Filesystem'),OFF_KEY='lt-app-offline';
const offMeta=()=>{try{return JSON.parse(localStorage.getItem(OFF_KEY)||'{}')}catch(e){return {}}};
const setMeta=m=>localStorage.setItem(OFF_KEY,JSON.stringify(m));
const offPath=id=>`offline/little-takhti-${id}.pdf`,cachePath=id=>`pdf/little-takhti-${id}.pdf`;
const isSaved=id=>!!offMeta()[id];
function weekPacks(){const out=[];if(typeof planSubjectsOf!=='function')return out;
 planSubjectsOf(grade).forEach(s=>{const p=(PLAN[s.id]||[])[WEEK_NOW];if(!p)return;
  p[1].forEach(x=>{const r=x==='set'?RID[s.id+'-set']:typeof x==='string'?RID[s.id+'-'+x]:RES.find(r=>r.sub===s.id&&!r.set&&r.pages.includes(x-1));
   if(r&&!r.community&&!out.includes(r))out.push(r)})});return out}
const titleOf=r=>{const s=SUB[r.sub];const t=typeof T==='function'?T(r.title):r.title;return (s?s.name+': ':'')+String(t).replace(/<[^>]+>/g,'')};
async function fetchTo(r,path,dir){
 if(!FS)throw new Error('nofs');
 const res=await FS.downloadFile({url:pdf(r),path,directory:dir,recursive:true});
 let size=0;try{size=(await FS.stat({path,directory:dir})).size||0}catch(e){}
 if(size&&size<800){try{await FS.deleteFile({path,directory:dir})}catch(e){}throw new Error('bad file')}
 return {uri:(res&&res.path)||'',size}}
async function saveOffline(list,btn){
 if(!FS){toast('Saving works in the Android and iPhone app.');return}
 const m=offMeta(),todo=list.filter(r=>!m[r.id]);let done=0,fail=0;
 const lbl=()=>btn&&(btn.innerHTML=`${SVG.dl}Saving ${Math.min(done+fail+1,todo.length)} of ${todo.length}…`);
 if(btn){btn.disabled=true}
 for(const r of todo){lbl();
  try{const x=await fetchTo(r,offPath(r.id),'DATA');const mm=offMeta();mm[r.id]={t:titleOf(r),g:GR[SUB[r.sub].grade]?GR[SUB[r.sub].grade].name:'',w:WEEKS[WEEK_NOW]?WEEKS[WEEK_NOW][0]:'',s:x.size,at:Date.now()};setMeta(mm);done++}
  catch(e){fail++}}
 if(btn)btn.disabled=false;
 if(fail&&!done)toast('Could not save. Please check the internet and try again.');
 else if(fail)toast(`Saved ${done}. ${fail} could not be saved, try again later.`);
 else toast(todo.length?`Saved ${done} worksheet pack${done===1?'':'s'} for offline use`:'Already saved on this device');
 refreshExtras()}
function refreshExtras(){if(curHash()==='offline'){offlinePage();return}
 const b=$('#ltn-dlbar');if(b){const n=dlBar();if(n)b.outerHTML=n;else b.remove()}
 document.querySelectorAll('.ltn-save').forEach(el=>{const on=isSaved(el.dataset.id);el.dataset.ltn=on?'unsave':'save';el.innerHTML=on?`${SVG.ok}Saved offline`:`${SVG.dl}Save offline`})}
async function removeOffline(ids){const m=offMeta();for(const id of ids){try{await FS.deleteFile({path:offPath(id),directory:'DATA'})}catch(e){}delete m[id]}setMeta(m)}
function dlBar(){const L=weekPacks();if(!L.length)return '';const m=offMeta(),n=L.filter(r=>m[r.id]).length,all=n===L.length;
 return `<div class="ltn-dlbar${all?' done':''}" id="ltn-dlbar"><span class="ltn-dli">${all?SVG.ok:SVG.dl}</span><div><b>${all?'This week is saved':'Download this week'}</b><small>${all?`${L.length} worksheet packs open without internet.`:`Save ${L.length} worksheet packs for ${GR[grade].name} so they open without internet${n?` (${n} saved)`:''}.`}</small></div>
  ${all?`<a class="btn" href="#offline">See saved</a>`:`<button type="button" class="btn sun" data-ltn="saveweek">${SVG.dl}Download</button>`}</div>`}
function offlinePage(){const m=offMeta(),ids=Object.keys(m).sort((a,b)=>m[b].at-m[a].at),tot=ids.reduce((x,k)=>x+(m[k].s||0),0);
 app.innerHTML=`<div class="crumbs"><a href="#parents">Parents</a><span>Saved worksheets</span></div>
 <div class="phead"><div style="flex:1;min-width:0"><span class="kick">On this device</span><h1>Saved worksheets</h1><p>These worksheet packs open with no internet. ${ids.length?`${ids.length} saved, ${fmt(tot)} in all.`:'Nothing is saved yet.'}</p></div></div>
 ${dlBar()}
 ${ids.length?`<ul class="ltn-saved">${ids.map(id=>{const x=m[id];return `<li><button type="button" class="ltn-sv-open" data-ltn="open" data-id="${h$(id)}"><b>${h$(x.t)}</b><small>${h$(x.g)}${x.w?' · '+h$(x.w):''} · ${fmt(x.s||0)}</small></button><button type="button" class="btn sm" data-ltn="del" data-id="${h$(id)}" aria-label="Delete ${h$(x.t)}">${SVG.bin}Delete</button></li>`}).join('')}</ul>
 <div class="acts"><button type="button" class="btn" data-ltn="delall">${SVG.bin}Delete all saved worksheets</button></div>`:''}`}

/* ================= 4. worksheet viewer ================= */
let pdfjs=null,V=null;
async function localFile(id){if(!FS||!id)return null;
 for(const [path,dir] of [[offPath(id),'DATA'],[cachePath(id),'CACHE']]){try{const st=await FS.stat({path,directory:dir});if(st&&st.size>800)return st.uri}catch(e){}}
 return null}
async function openPdf(url,r){
 if($('#ltn-viewer'))closeViewer();
 const id=r?r.id:((url.match(/little-takhti-(.+)\.pdf/)||[])[1]||'');r=r||(typeof RID!=='undefined'?RID[id]:null);
 const title=r?titleOf(r):'Worksheet';
 const el=document.createElement('div');el.id='ltn-viewer';el.className='ltn-viewer';
 el.innerHTML=`<div class="ltn-vbar"><button type="button" class="ltn-vb" data-v="close" aria-label="Back">${SVG.back}</button><b class="ltn-vt">${h$(title)}</b>
  <button type="button" class="ltn-vb" data-v="out" aria-label="Smaller">${SVG.minus}</button><button type="button" class="ltn-vb" data-v="in" aria-label="Bigger">${SVG.plus}</button>
  <button type="button" class="ltn-vb wide" data-v="print" disabled>${SVG.print}<span>Print</span></button><button type="button" class="ltn-vb wide" data-v="share" disabled>${SVG.share}<span>Share</span></button></div>
  <div class="ltn-vpages" id="ltn-vp"><div class="ltn-vmsg"><span class="ltn-spin"></span><p>Opening the worksheet…</p></div></div>`;
 document.body.appendChild(el);document.body.classList.add('ltn-noscroll');
 V={id,r,title,uri:null,doc:null,zoom:1,imgs:[],url};
 el.onclick=e=>{const b=e.target.closest('[data-v]');if(!b)return;const k=b.dataset.v;
  if(k==='close')closeViewer();else if(k==='in'||k==='out'){V.zoom=Math.max(1,Math.min(3,V.zoom+(k==='in'?.5:-.5)));layoutPages(true)}
  else if(k==='print')printDoc();else if(k==='share')shareDoc();else if(k==='retry'){const u=V.url,rr=V.r;closeViewer();openPdf(u,rr)}};
 const mine=V;
 try{
  let src=url;
  if(FS&&id){let uri=await localFile(id);
   if(!uri){try{uri=(await fetchTo(r||{id},cachePath(id),'CACHE')).uri;if(!uri)uri=(await FS.getUri({path:cachePath(id),directory:'CACHE'})).uri}
    catch(e){throw new Error('offline')}}
   mine.uri=uri;src=CAP.convertFileSrc(uri)}
  if(!pdfjs){pdfjs=await import('./pdfjs/pdf.min.mjs');pdfjs.GlobalWorkerOptions.workerSrc='pdfjs/pdf.worker.min.mjs'}
  const data=await (await fetch(src)).arrayBuffer();
  const doc=await pdfjs.getDocument({data,isEvalSupported:false,standardFontDataUrl:'pdfjs/standard_fonts/'}).promise;
  if(V!==mine){doc.destroy();return}
  V.doc=doc;el.querySelectorAll('[data-v=print],[data-v=share]').forEach(b=>b.disabled=!V.uri&&NATIVE);
  const pv=$('#ltn-vp');pv.innerHTML='';const first=await doc.getPage(1),vp=first.getViewport({scale:1});V.ratio=vp.height/vp.width;
  for(let i=1;i<=doc.numPages;i++){const d=document.createElement('div');d.className='ltn-pg';d.dataset.n=i;d.innerHTML=`<span class="ltn-pn">Page ${i} of ${doc.numPages}</span>`;pv.appendChild(d)}
  layoutPages(false);
 }catch(e){if(V!==mine)return;const off=e&&e.message==='offline';
  $('#ltn-vp').innerHTML=`<div class="ltn-vmsg"><p><b>${off?'This worksheet needs the internet':'Sorry, this worksheet would not open'}</b></p><p>${off?'Connect to Wi-Fi or mobile data and try again. A grown-up can use <b>Download this week</b> so worksheets open without internet.':'Please try again in a moment.'}</p><button type="button" class="btn sun" data-v="retry">Try again</button></div>`}}
function layoutPages(rerender){if(!V||!V.doc)return;const pv=$('#ltn-vp');if(!pv)return;
 const w=Math.min(pv.clientWidth-24,(V.zoom===1?900:99999));const pw=Math.round(w*V.zoom);
 pv.classList.toggle('zoomed',V.zoom>1);
 pv.querySelectorAll('.ltn-pg').forEach(d=>{d.style.width=pw+'px';d.style.height=Math.round(pw*V.ratio)+'px';if(rerender&&d._done){d._done=false;const im=d.querySelector('img');im&&(URL.revokeObjectURL(im.src),im.remove())}});
 if(V.io)V.io.disconnect();
 V.io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)renderPage(en.target)}),{root:pv,rootMargin:'600px 0px'});
 pv.querySelectorAll('.ltn-pg').forEach(d=>V.io.observe(d))}
async function renderPage(d){if(d._done||d._busy||!V||!V.doc)return;d._busy=true;const mine=V;
 try{const page=await V.doc.getPage(+d.dataset.n);const cssW=d.clientWidth,dpr=Math.min(window.devicePixelRatio||1,2);
  const vp=page.getViewport({scale:cssW*dpr/page.getViewport({scale:1}).width});
  const c=document.createElement('canvas');c.width=Math.floor(vp.width);c.height=Math.floor(vp.height);
  await page.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
  if(V!==mine)return;
  const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',.9));c.width=c.height=0;
  const im=new Image();im.alt='Worksheet page '+d.dataset.n;im.src=URL.createObjectURL(blob);d.appendChild(im);d._done=true}
 catch(e){}finally{d._busy=false}}
function closeViewer(){const el=$('#ltn-viewer');if(el){el.querySelectorAll('img').forEach(i=>URL.revokeObjectURL(i.src));el.remove()}
 document.body.classList.remove('ltn-noscroll');if(V){V.io&&V.io.disconnect();V.doc&&V.doc.destroy();V=null}}
async function printDoc(){if(!V)return;const Pr=P('LtPrint');
 if(Pr&&V.uri){try{await Pr.printPdf({path:V.uri,name:'Little Takhti '+(V.id||'worksheet')});return}catch(e){}}
 if(!NATIVE){nativeOpen.call(window,V.url,'_blank');return}
 shareDoc()}
async function shareDoc(){if(!V)return;const S=P('Share');
 if(S&&V.uri){try{await S.share({title:V.title,files:[V.uri],dialogTitle:'Share worksheet'})}catch(e){try{await S.share({title:V.title,url:V.uri})}catch(e2){}}return}
 if(navigator.share){try{await navigator.share({title:V.title,url:V.url})}catch(e){}}}
addEventListener('resize',()=>{if(V&&V.doc){clearTimeout(layoutPages._t);layoutPages._t=setTimeout(()=>layoutPages(true),200)}});

/* ================= page extras ================= */
function afterRoute(h){
 if(h==='class'){const ph=document.querySelector('#app .phead');ph&&!$('#ltn-dlbar')&&ph.insertAdjacentHTML('afterend',dlBar())}
 if(h==='home'){const sec=[...document.querySelectorAll('#app section')].find(s=>/This week's packs/.test(s.textContent));if(sec&&!$('#ltn-dlbar')){const sh=sec.querySelector('.sec-h');sh&&sh.insertAdjacentHTML('afterend',dlBar())}}
 if(h.startsWith('res-')){const r=RID[h.slice(4)],acts=document.querySelector('#app .detail .acts');
  if(r&&acts&&!r.community&&!acts.querySelector('.ltn-save')){const b=document.createElement('button');b.type='button';b.className='btn ltn-save';b.dataset.ltn=isSaved(r.id)?'unsave':'save';b.dataset.id=r.id;
   b.innerHTML=isSaved(r.id)?`${SVG.ok}Saved offline`:`${SVG.dl}Save offline`;acts.appendChild(b);
   const dl=acts.querySelector('a.btn.fill[href$=".pdf"]');if(dl)dl.innerHTML=dl.innerHTML.replace(/Download PDF/,'Open PDF')}}
 if(h==='parents'){const ph=document.querySelector('#app .phead');if(ph&&!$('#ltn-appset')){const n=Object.keys(offMeta()).length;
  ph.insertAdjacentHTML('afterend',`<section class="ltn-appset" id="ltn-appset"><h2>App settings</h2><div class="ltn-sets">
   <a href="#offline" class="ltn-set"><span>${SVG.dl}</span><b>Saved worksheets</b><small>${n?n+' saved on this device':'Save worksheets to use without internet'}</small></a>
   <button type="button" class="ltn-set" data-ltn="pin"><span>${SVG.lock}</span><b>Change parent PIN</b><small>The PIN guards Parents, settings and outside links</small></button>
   <button type="button" class="ltn-set" data-ltn="lock"><span>${SVG.lock}</span><b>Lock now</b><small>Hand the device to your child</small></button>
   <a href="#privacy" class="ltn-set"><span>${SVG.ok}</span><b>Privacy</b><small>No ads, no tracking. Version ${h$(window.LT_APP_VERSION||'')}</small></a></div></section>`)}}}
async function doAct(k,el){
 if(k==='unlock'){gate().then(ok=>ok&&route(true));return}
 if(k==='saveweek'){saveOffline(weekPacks(),el);return}
 if(k==='save'){const r=RID[el.dataset.id];if(r)await saveOffline([r],el);return}
 if(k==='unsave'){if(!(await gate('Removing a saved worksheet is for grown-ups.')))return;await removeOffline([el.dataset.id]);toast('Removed from this device');refreshExtras();return}
 if(k==='open'){const id=el.dataset.id;openPdf(`${REMOTE}pdf/little-takhti-${id}.pdf`,RID[id]||{id});return}
 if(k==='del'){await removeOffline([el.dataset.id]);toast('Deleted');offlinePage();return}
 if(k==='delall'){if(!confirm('Delete all saved worksheets from this device?'))return;await removeOffline(Object.keys(offMeta()));toast('All saved worksheets deleted');offlinePage();return}
 if(k==='pin'){const ok=await changePin();if(ok)toast('New PIN saved');return}
 if(k==='lock'){unlockedUntil=0;toast('Locked');location.hash='kids';return}}

/* no Google sign-in in the app: the profile button says Family */
if(typeof renderAcct==='function'){const ra=renderAcct;renderAcct=function(){ra();const sp=document.querySelector('#acct .acct > span:last-child');if(sp&&sp.textContent==='Sign in')sp.textContent='Family'};try{renderAcct()}catch(e){}}

/* first paint happened before this script: re-route if we opened on a gated page, else add extras */
if(GATED.test(curHash())||curHash()==='offline'||curHash()==='privacy')route(true);else try{afterRoute(curHash())}catch(e){}
window.LTN={gate,isUnlocked,lockNow,openPdf,weekPacks,offMeta};
})();
