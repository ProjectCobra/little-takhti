/* ---------- help desk, content policy, sharing material, usage counters, member registry ---------- */
const HELP_MAX_FILES=5,HELP_MAX_MB=50,SHARE_MAX_MB=20;
const HELP_TYPES=[['worksheet','Problem with a worksheet'],['quiz','Quiz or game problem'],['site','Website problem'],['account','Sign in or account'],['idea','Suggestion or idea'],['other','Something else']];
const SHARE_TYPES=[['worksheet','Worksheet'],['notes','Notes or summary'],['paper','Test or past paper'],['activity','Activity or game idea'],['syllabus','Syllabus or book list'],['other','Other']];
const OK_HELP=/^(image\/(png|jpe?g|webp|gif)|video\/(webm|mp4|quicktime)|application\/pdf)$/;
const OK_SHARE=/^(image\/(png|jpe?g|webp)|application\/pdf|application\/vnd\.openxmlformats-officedocument\.(wordprocessingml\.document|presentationml\.presentation)|application\/msword)$/;
/* words that never belong in a children's learning site; caught before anything is sent */
const BLOCK_WORDS=/\b(porn\w*|sex(y|ual)?|nude|nudity|naked|xxx|onlyfans|escort|fuck\w*|shit\w*|bitch\w*|cunt|dick|pussy|rape|kill yourself|terroris\w*|casino|betting|crypto ?signal)\b/i;
const fmtMB=b=>(b/1048576).toFixed(b<1048576?2:1)+' MB';
const newId=()=>{const a=new Uint8Array(12);(crypto||window.msCrypto).getRandomValues(a);return Array.from(a,x=>x.toString(36).padStart(2,'0')).join('').slice(0,20)};
const safeName=n=>String(n||'file').replace(/[^\w.\-]+/g,'_').slice(-60);
let lastSeen={page:'',rid:''};

/* ---------- usage counters: batched, one small write every 20 seconds at most ---------- */
const LTS={c:{},t:null};
function ltStat(k,n=1){if(!window.LT_STATIC)return;LTS.c[k]=(LTS.c[k]||0)+n;if(!LTS.t)LTS.t=setTimeout(ltFlush,20000)}
function ltFlush(){clearTimeout(LTS.t);LTS.t=null;const F=window.LTFB;const c=LTS.c;if(!F||!F.bump||!Object.keys(c).length)return;LTS.c={};
 const day=new Date().toISOString().slice(0,10);F.bump('stats/'+day,c).catch(()=>{})}
addEventListener('pagehide',ltFlush);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')ltFlush()});
const ltKey=s=>String(s).replace(/[^\w\-]/g,'_').slice(0,60);
function ltVisit(){const day=new Date().toISOString().slice(0,10);
 if(!store.get('ltFirst',null)){store.set('ltFirst',day);ltStat('nv')}
 if(store.get('ltDay',null)!==day){store.set('ltDay',day);ltStat('uv');ltStat('dev.'+(matchMedia('(max-width:760px)').matches?'mobile':'desktop'));ltStat('gr.'+ltKey(grade))}}
function ltRoute(h){if(!window.LT_STATIC)return;ltStat('pv');
 const mod=h.startsWith('res-')||h==='home'||h.startsWith('subject-')||h==='search'?'worksheets':h.startsWith('print-')?'print':h==='class'||h==='map'?'weekly':h==='quiz'||h.startsWith('play-')?'quizzes':h==='powerups'||h.startsWith('pu-')?'powerups':h==='stories'||h.startsWith('story-')?'stories':h.startsWith('game-')?'games':h==='stickers'||h==='fun'?'play':['tools','spell-maker','spell-print','prep','prep-print','report','rewards','rewards-print'].includes(h)?'parent-tools':h==='parents'?'parents':h==='account'?'account':h.startsWith('help')?'help':h==='share'?'share':'other';
 ltStat('mod.'+mod);
 if(h.startsWith('res-')){ltStat('ws.'+ltKey(h.slice(4)));lastSeen={page:h,rid:h.slice(4)}}
 else if(h.startsWith('print-'))ltStat('pr.'+ltKey(h.slice(6)));
 else if(h.startsWith('play-'))ltStat('qz.'+ltKey(h.slice(5)));
 else if(h.startsWith('pu-'))ltStat('pu.'+ltKey(h.slice(3).split('-')[0]));
 else if(h.startsWith('game-'))ltStat('gm.'+ltKey(h.slice(5)));
 else if(h.startsWith('story-'))ltStat('st.'+ltKey(h.slice(6)));
 if(!h.startsWith('help'))lastSeen.page=h}
document.addEventListener('click',e=>{const a=e.target.closest('a[href$=".pdf"]');if(a){const m=a.getAttribute('href').match(/little-takhti-(.+)\.pdf$/);if(m)ltStat('dl.'+ltKey(m[1]))}},true);

/* ---------- member registry: lets the owner count families and see who uses the site ---------- */
async function syncMember(){const F=window.LTFB;if(!window.LT_STATIC||!F||!F.merge||!FAM.uid||FAM.mode!=='cloud')return;
 try{if(!FAM.profile.joined){FAM.profile.joined=new Date().toISOString();await saveProfile()}
  const kids=Object.values(FAM.children).map(c=>({grade:c.grade||'',age:c.age||'',gender:c.gender||''}));
  await F.merge('members/'+FAM.uid,{name:(FAM.me&&FAM.me.name)||'',email:(FAM.me&&FAM.me.email)||'',photo:(FAM.me&&FAM.me.avatarUrl)||'',joined:FAM.profile.joined,lastSeen:new Date().toISOString(),
   role:FAM.profile.role||'',city:FAM.profile.city||'',province:FAM.profile.province||'',kids,kidsN:kids.length})}catch(e){}}

/* ---------- content policy ---------- */
function policyPage(){app.innerHTML=`<article class="legal"><span class="kick">Policy</span><h1>Content and upload policy</h1><p class="muted">Last updated 19 October 2026</p>
<p>Little Takhti is a learning website for children from Nursery to Grade 3. Everything people send us, whether a help request, a screenshot or shared teaching material, must be suitable for young children and related to learning or to this website.</p>
<h2>What you can send</h2><ul><li>Screenshots, screen recordings or PDFs that show a problem with a worksheet, quiz or page on this website.</li><li>Teaching material you made yourself or have permission to share: worksheets, notes, tests, activity ideas, syllabus or book lists for Nursery to Grade 3.</li><li>Material in English, Urdu or any subject we teach, including Islamiat taken from authentic, school-approved course books.</li></ul>
<h2>What is never allowed</h2><ul><li>Nudity, sexual or suggestive content of any kind.</li><li>Violence, gore, weapons, drugs, gambling or anything frightening for children.</li><li>Hate, bullying, insults, or content that mocks any religion, sect, ethnicity, gender or group.</li><li>Children's faces, full names, school names, addresses, phone numbers or other personal details. Please crop or cover them in screenshots.</li><li>Material copied from publishers or other websites without permission.</li><li>Adverts, spam, links to other sites, or files with viruses or hidden code.</li><li>Political campaigning or content unrelated to learning.</li></ul>
<h2>How we check</h2><ul><li>Uploads are private. Only the site owner can see them, and nothing is ever published automatically.</li><li>Every help request and every shared file is reviewed by a person before any action is taken. Shared material is only used on the site after review and editing.</li><li>Files are limited to images, short screen recordings, PDF and Word or PowerPoint files, with size limits.</li><li>Messages containing blocked words cannot be sent.</li></ul>
<h2>If a rule is broken</h2><p>The upload is deleted, and the account may be blocked from sending anything again. Where the law requires it, we report illegal material to the authorities.</p>
<h2>Report something</h2><p>If you see anything on Little Takhti that should not be here, please <a href="#help">tell us on the Help page</a> and we will remove it quickly.</p></article>`}

/* ---------- help page ---------- */
const HELP={files:[],busy:false,done:null,rec:null,err:''};
const HELP_FAQ=[['How do I print a worksheet at the right size?','Open the worksheet, press Print, then choose A4 paper and 100% scale (or "Actual size"). The Download PDF button gives the same pages ready to print.'],
 ['Where are the answers?','Every pack has an answer key. On the worksheet page tick "Include answer key" before printing, or open the PDF, where the key comes after the worksheets.'],
 ['My child\'s stars disappeared.','Without signing in, progress is saved only on that phone or computer. Sign in with Google on the Family page to keep it on every device.'],
 ['The Urdu text looks wrong.','Urdu needs a moment to load its font the first time. Refresh the page once. If it still looks broken, send us a screenshot below.'],
 ['Can I share my own worksheets?','Yes. Sign in, then use Share material on the Family page. Every file is checked by a person first.']];
function helpPage(rid){if(rid&&RID[rid])lastSeen={page:'res-'+rid,rid};
 if(HELP.done){app.innerHTML=`<div class="phead hdone"><div style="flex:1;min-width:0"><span class="kick">Help</span><h1>Thank you, we got it</h1><p>Your reference is <b>${esc(HELP.done)}</b>. We read every message and fix worksheet problems in the next update. ${HELP.mail?'We will reply to your email if we need more details.':''}</p>
  <div class="acts" style="margin-top:14px"><a class="btn sun" href="#home">Back to worksheets</a><button class="btn" type="button" data-hnew="1">Send another</button></div></div></div>`;return}
 const me=FAM.me&&FAM.me.id?FAM.me:null,r=lastSeen.rid&&RID[lastSeen.rid];
 const canCap=!!(navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)&&!matchMedia('(max-width:760px)').matches;
 app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Help</span><h1>How can we help?</h1><p>Tell us about a mistake in a worksheet, a page that does not work, or an idea. You can add screenshots, a screen recording or a PDF.</p></div></div>
 <div class="hgrid"><section class="hcard"><h2>Send us a message</h2>
 <form id="hform" class="kform hform" novalidate>
  <div class="kf-row"><label for="htype">What is it about?</label><select id="htype">${HELP_TYPES.map(([k,v])=>`<option value="${k}" ${r&&k==='worksheet'?'selected':''}>${v}</option>`).join('')}</select></div>
  <div class="kf-row"><label for="hwhere">Which worksheet or page? <span class="opt">(optional)</span></label><input id="hwhere" maxlength="140" value="${esc(r?`${GR[SUB[r.sub].grade].name} · ${SUB[r.sub].name} · ${r.title}`:'')}" placeholder="e.g. Grade 2 Maths, Numbers to 1000, page 2"></div>
  <div class="kf-row full"><label for="hmsg">What happened?</label><textarea id="hmsg" rows="5" maxlength="3000" required placeholder="Describe the problem. If a question has a wrong answer, tell us the page and question number."></textarea></div>
  <div class="kf-row full"><label for="hmail">Your email <span class="opt">${me?'':'(optional, so we can reply)'}</span></label><input id="hmail" type="email" maxlength="120" value="${esc(me&&me.email||'')}" placeholder="you@example.com"></div>
  <div class="kf-row full"><span class="lbl">Attachments <span class="opt">(up to ${HELP_MAX_FILES} files, ${HELP_MAX_MB} MB in total)</span></span>
   <div class="hatt"><label class="btn"><input type="file" id="hfile" multiple accept="image/png,image/jpeg,image/webp,image/gif,video/webm,video/mp4,video/quicktime,application/pdf" hidden>${I('<path d="M21 12.5l-8.5 8.5a5 5 0 0 1-7-7L14 5.5a3.3 3.3 0 0 1 4.7 4.7L10.2 18.7a1.7 1.7 0 0 1-2.4-2.4L15.5 8.6"/>',2)}Add files</label>
   ${canCap?`<button class="btn" type="button" data-hshot="1">${I('<rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/>',2)}Take a screenshot</button>
   <button class="btn${HELP.rec?' recing':''}" type="button" data-hrec="1">${HELP.rec?`<span class="rdot"></span>Stop recording <span id="hrt">0:00</span>`:`${I('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',2)}Record my screen`}</button>`:''}</div>
   <ul class="hfiles">${HELP.files.map((f,i)=>`<li>${f.type.startsWith('image/')&&f.prev?`<img src="${f.prev}" alt="">`:`<span class="fic">${f.type.startsWith('video/')?'▶':'PDF'}</span>`}<span class="fn">${esc(f.name)}<small>${fmtMB(f.size)}</small></span><button type="button" class="btn sm" data-hrm="${i}" aria-label="Remove ${esc(f.name)}">Remove</button></li>`).join('')}</ul>
   <p class="pnote">Images, PDF and short screen recordings only. Please crop out children's faces and full names.</p></div>
  <label class="hagree full"><input type="checkbox" id="hok"> <span>I have read the <a href="#policy">content policy</a>. My message and files are about Little Takhti and suitable for children.</span></label>
  ${HELP.err?`<p class="herr full" role="alert">${esc(HELP.err)}</p>`:''}
  <div class="acts full"><button class="btn sun" type="submit" ${HELP.busy?'disabled':''}>${HELP.busy?`Sending <span id="hpct"></span>`:'Send message'}</button></div>
 </form></section>
 <aside class="hcard hfaq"><h2>Quick answers</h2>${HELP_FAQ.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}
  <p class="pnote" style="margin-top:14px">Want to share your own worksheets or notes? ${me?'<a href="#share">Share material</a>':'<a href="#account">Sign in</a>, then use Share material'}.</p></aside></div>`;
 const keep=['hmsg','hmail','hwhere','htype'];keep.forEach(k=>{const el=document.getElementById(k);if(el&&HELP['v_'+k]!=null)el.value=HELP['v_'+k];el&&el.addEventListener('input',()=>HELP['v_'+k]=el.value)});
 const hf=document.getElementById('hfile');hf&&hf.addEventListener('change',()=>{addHelpFiles([...hf.files]);hf.value=''});
 const ok=document.getElementById('hok');if(ok&&HELP.agree)ok.checked=true;ok&&ok.addEventListener('change',()=>HELP.agree=ok.checked);
 document.getElementById('hform').addEventListener('submit',e=>{e.preventDefault();sendHelp()});
}
function helpRedraw(){if(location.hash.startsWith('#help'))helpPage()}
function addHelpFiles(list){HELP.err='';for(const f of list){if(HELP.files.length>=HELP_MAX_FILES){HELP.err=`You can attach up to ${HELP_MAX_FILES} files.`;break}
  if(!OK_HELP.test(f.type)){HELP.err=`${f.name} is not an image, PDF or screen recording.`;continue}
  const tot=HELP.files.reduce((a,x)=>a+x.size,0)+f.size;if(tot>HELP_MAX_MB*1048576){HELP.err=`Attachments can be ${HELP_MAX_MB} MB in total.`;continue}
  const o={file:f,name:f.name||'file',type:f.type,size:f.size};if(f.type.startsWith('image/'))o.prev=URL.createObjectURL(f);HELP.files.push(o)}
 helpRedraw()}
async function captureShot(){try{const s=await navigator.mediaDevices.getDisplayMedia({video:true,audio:false,preferCurrentTab:true,selfBrowserSurface:'include'});
  const v=document.createElement('video');v.srcObject=s;v.muted=true;await v.play();await new Promise(r=>setTimeout(r,350));
  const c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);s.getTracks().forEach(t=>t.stop());
  const b=await new Promise(r=>c.toBlob(r,'image/png'));addHelpFiles([new File([b],'screenshot-'+Date.now()+'.png',{type:'image/png'})])}catch(e){}}
async function toggleRec(){if(HELP.rec){HELP.rec.stop();return}
 try{const s=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:15},audio:false,selfBrowserSurface:'include'});
  const mt=['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm','video/mp4'].find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported(t));
  const mr=new MediaRecorder(s,mt?{mimeType:mt,videoBitsPerSecond:900000}:{}),parts=[],t0=Date.now();HELP.rec=mr;
  mr.ondataavailable=e=>e.data&&e.data.size&&parts.push(e.data);
  const tick=setInterval(()=>{const el=document.getElementById('hrt'),sec=Math.round((Date.now()-t0)/1000);if(el)el.textContent=Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0');if(sec>=90)mr.state==='recording'&&mr.stop()},500);
  s.getVideoTracks()[0].addEventListener('ended',()=>mr.state==='recording'&&mr.stop());
  mr.onstop=()=>{clearInterval(tick);s.getTracks().forEach(t=>t.stop());HELP.rec=null;const type=(mr.mimeType||'video/webm').split(';')[0];
   addHelpFiles([new File([new Blob(parts,{type})],'screen-recording-'+Date.now()+(type==='video/mp4'?'.mp4':'.webm'),{type})])};
  mr.start(1000);helpRedraw()}catch(e){HELP.rec=null;helpRedraw()}}
/* smaller copy of a picture, used only when cloud file storage is not available */
async function shrinkImage(f,max=1280,q=.72){const img=await createImageBitmap(f);const k=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c.toDataURL('image/jpeg',q)}
async function sendHelp(){if(HELP.busy)return;const v=k=>(document.getElementById(k)||{}).value||'';HELP.err='';
 const msg=v('hmsg').trim(),mail=v('hmail').trim(),where=v('hwhere').trim();
 if(msg.length<10)HELP.err='Please tell us a little more about the problem (at least 10 characters).';
 else if(mail&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail))HELP.err='That email address does not look right.';
 else if(!document.getElementById('hok').checked)HELP.err='Please tick the box to agree to the content policy.';
 else if(BLOCK_WORDS.test(msg+' '+where))HELP.err='Your message contains words that are not allowed on a children\'s site. Please rewrite it.';
 const F=window.LTFB;if(!HELP.err&&(!F||!F.merge))HELP.err='Sending is not available right now. Please check your internet connection and try again.';
 if(HELP.err){helpRedraw();return}
 HELP.busy=true;helpRedraw();const id=newId(),atts=[],inline=[];const pct=t=>{const el=document.getElementById('hpct');if(el)el.textContent=t};
 try{let i=0;for(const f of HELP.files){i++;pct(`file ${i} of ${HELP.files.length}`);
   try{const path=await F.upload(`help/${id}/${i}-${safeName(f.name)}`,f.file,p=>pct(`file ${i} of ${HELP.files.length}, ${Math.round(p*100)}%`));atts.push({name:f.name,type:f.type,size:f.size,path})}
   catch(e){if(f.type.startsWith('image/')&&inline.length<3){try{inline.push({name:f.name,type:'image/jpeg',data:await shrinkImage(f.file)});atts.push({name:f.name,type:f.type,size:f.size,inline:inline.length-1});continue}catch(e2){}}
    atts.push({name:f.name,type:f.type,size:f.size,failed:true})}}
  pct('');
  await F.merge('help/'+id,{type:v('htype'),where,message:msg,email:mail,uid:FAM.uid||'',name:(FAM.me&&FAM.me.name)||'',page:lastSeen.page||'',rid:lastSeen.rid||'',grade,
   attachments:atts,status:'new',device:{ua:navigator.userAgent.slice(0,240),w:innerWidth,h:innerHeight,lang:navigator.language||''},agree:true,createdAt:new Date().toISOString()});
  for(let k=0;k<inline.length;k++)await F.merge(`help/${id}/files/${k}`,inline[k]);
  ltStat('help');window.LTFB.log('help_sent',{type:v('htype')});
  HELP.done=id.slice(0,8).toUpperCase();HELP.mail=!!mail;HELP.files=[];HELP.agree=false;keepClear()}
 catch(e){HELP.err='We could not send your message just now. Please try again in a minute.'}
 HELP.busy=false;helpRedraw();window.scrollTo(0,0)}
function keepClear(){['hmsg','hmail','hwhere','htype'].forEach(k=>delete HELP['v_'+k])}

/* ---------- share teaching material (signed-in families and teachers) ---------- */
const SHARE={files:[],busy:false,err:'',done:false,mine:null};
async function loadMySubs(){const F=window.LTFB;if(!F||!F.mine||!FAM.uid)return;try{SHARE.mine=await F.mine('submissions',FAM.uid)}catch(e){SHARE.mine=[]}if(location.hash==='#share')sharePage()}
function sharePage(){const me=FAM.me&&FAM.me.id?FAM.me:null;
 if(!me){app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Share material</span><h1>Share your teaching material</h1><p>Teachers and parents can send worksheets, notes and test papers for Nursery to Grade 3. Please sign in first so we can credit you and tell you when it is reviewed.</p><div class="acts" style="margin-top:14px"><a class="btn sun" href="#account">Sign in on the Family page</a><a class="btn" href="#policy">Read the content policy</a></div></div></div>`;return}
 if(SHARE.mine===null)loadMySubs();
 const st={pending:['Waiting for review',''],approved:['Approved','key'],rejected:['Not accepted','bad'],removed:['Removed','bad']};
 app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Share material</span><h1>Share your teaching material</h1><p>Send worksheets, notes or test papers you made. Everything stays private until it has been checked by a person. Good material is turned into free Little Takhti packs, with credit to you if you like.</p></div></div>
 ${SHARE.done?`<p class="fnote" role="status">Thank you. Your material was sent and is waiting for review.</p>`:''}
 <div class="hgrid"><section class="hcard"><h2>Send material</h2><form id="sform" class="kform hform" novalidate>
  <div class="kf-row full"><label for="stitle">Title</label><input id="stitle" maxlength="100" required placeholder="e.g. Grade 1 Urdu haroof tahaji practice"></div>
  <div class="kf-row"><label for="stype">Type</label><select id="stype">${SHARE_TYPES.map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select></div>
  <div class="kf-row"><label for="sgrade">Grade</label><select id="sgrade">${GRADES.filter(g=>!g.hidden).map(g=>`<option value="${g.id}" ${g.id===grade?'selected':''}>${g.name}</option>`).join('')}</select></div>
  <div class="kf-row"><label for="ssub">Subject</label><select id="ssub">${Object.entries(KIND).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join('')}</select></div>
  <div class="kf-row"><label for="scredit">Credit as <span class="opt">(optional)</span></label><input id="scredit" maxlength="60" placeholder="e.g. Ms Ayesha, Lahore"></div>
  <div class="kf-row full"><label for="sdesc">Short description</label><textarea id="sdesc" rows="3" maxlength="1200" placeholder="What does it cover? Which book or chapter is it from?"></textarea></div>
  <div class="kf-row full"><span class="lbl">Files <span class="opt">(PDF, Word, PowerPoint or pictures, up to 5 files, ${SHARE_MAX_MB} MB each)</span></span>
   <div class="hatt"><label class="btn"><input type="file" id="sfile" multiple accept=".pdf,.doc,.docx,.pptx,image/png,image/jpeg,image/webp" hidden>${I('<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',2)}Choose files</label></div>
   <ul class="hfiles">${SHARE.files.map((f,i)=>`<li><span class="fic">${f.type.startsWith('image/')?'IMG':f.type.includes('pdf')?'PDF':'DOC'}</span><span class="fn">${esc(f.name)}<small>${fmtMB(f.size)}</small></span><button type="button" class="btn sm" data-srm="${i}">Remove</button></li>`).join('')}</ul></div>
  <label class="hagree full"><input type="checkbox" id="sown"> <span>I made this material or have permission to share it.</span></label>
  <label class="hagree full"><input type="checkbox" id="sok"> <span>It follows the <a href="#policy">content policy</a>: educational, suitable for young children, with no children's photos or personal details.</span></label>
  ${SHARE.err?`<p class="herr full" role="alert">${esc(SHARE.err)}</p>`:''}
  <div class="acts full"><button class="btn sun" type="submit" ${SHARE.busy?'disabled':''}>${SHARE.busy?'Sending <span id="spct"></span>':'Send for review'}</button></div></form></section>
 <aside class="hcard"><h2>Your shared material</h2>${SHARE.mine===null?'<p class="pnote">Loading…</p>':SHARE.mine.length?`<ul class="mysubs">${SHARE.mine.sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||'')).map(s=>`<li><b>${esc(s.title||'Untitled')}</b><small>${esc((GR[s.grade]||{}).name||'')} · ${esc((KIND[s.kind]||{}).name||'')} · ${esc((s.createdAt||'').slice(0,10))}</small><span class="tag ${(st[s.status]||st.pending)[1]}">${(st[s.status]||st.pending)[0]}</span>${s.note?`<p class="pnote">${esc(s.note)}</p>`:''}</li>`).join('')}</ul>`:'<p class="pnote">Nothing yet. Material you send will appear here with its review status.</p>'}</aside></div>`;
 const sf=document.getElementById('sfile');sf.addEventListener('change',()=>{SHARE.err='';for(const f of sf.files){if(SHARE.files.length>=5){SHARE.err='You can send up to 5 files at a time.';break}
  const type=f.type||(/\.docx$/i.test(f.name)?'application/vnd.openxmlformats-officedocument.wordprocessingml.document':/\.pptx$/i.test(f.name)?'application/vnd.openxmlformats-officedocument.presentationml.presentation':/\.doc$/i.test(f.name)?'application/msword':'');
  if(!OK_SHARE.test(type)){SHARE.err=`${f.name} is not a PDF, Word, PowerPoint or picture file.`;continue}if(f.size>SHARE_MAX_MB*1048576){SHARE.err=`${f.name} is bigger than ${SHARE_MAX_MB} MB.`;continue}
  SHARE.files.push({file:f,name:f.name,type,size:f.size})}sf.value='';SHARE.done=false;sharePage()});
 document.getElementById('sform').addEventListener('submit',e=>{e.preventDefault();sendShare()});
}
async function sendShare(){if(SHARE.busy)return;const v=k=>(document.getElementById(k)||{}).value||'';SHARE.err='';const F=window.LTFB;
 const title=v('stitle').trim(),desc=v('sdesc').trim(),credit=v('scredit').trim();
 if(title.length<4)SHARE.err='Please give the material a title.';
 else if(!SHARE.files.length)SHARE.err='Please choose at least one file.';
 else if(!document.getElementById('sown').checked||!document.getElementById('sok').checked)SHARE.err='Please tick both boxes to confirm.';
 else if(BLOCK_WORDS.test(title+' '+desc+' '+credit))SHARE.err='Some words are not allowed on a children\'s site. Please rewrite the title or description.';
 else if(!F||!F.upload)SHARE.err='Sending is not available right now. Please try again later.';
 if(SHARE.err){sharePage();return}
 const keep={title,desc,credit,type:v('stype'),grade:v('sgrade'),kind:v('ssub')};
 SHARE.busy=true;sharePage();['stitle','sdesc','scredit','stype','sgrade','ssub'].forEach((k,i)=>{const el=document.getElementById(k);if(el)el.value=Object.values(keep)[i]});
 const id=newId(),files=[];
 try{let i=0;for(const f of SHARE.files){i++;const path=await F.upload(`submissions/${FAM.uid}/${id}/${i}-${safeName(f.name)}`,f.file,p=>{const el=document.getElementById('spct');if(el)el.textContent=`file ${i}, ${Math.round(p*100)}%`});files.push({name:f.name,type:f.type,size:f.size,path})}
  await F.merge('submissions/'+id,{...keep,files,uid:FAM.uid,name:(FAM.me&&FAM.me.name)||'',email:(FAM.me&&FAM.me.email)||'',status:'pending',agree:true,createdAt:new Date().toISOString()});
  ltStat('share');F.log('share_material',{grade:keep.grade,kind:keep.kind});SHARE.files=[];SHARE.done=true;SHARE.mine=null}
 catch(e){SHARE.err=String(e&&e.code||'').includes('storage')||String(e&&e.message).includes('storage')?'File upload is not switched on yet. Please try again later.':'We could not send this just now. Please try again in a minute.'}
 SHARE.busy=false;sharePage();window.scrollTo(0,0)}

document.addEventListener('click',e=>{
 const t=e.target.closest('[data-hshot],[data-hrec],[data-hrm],[data-hnew],[data-srm]');if(!t)return;
 if(t.dataset.hshot)captureShot();else if(t.dataset.hrec)toggleRec();
 else if(t.dataset.hrm!=null){const f=HELP.files.splice(+t.dataset.hrm,1)[0];if(f&&f.prev)URL.revokeObjectURL(f.prev);HELP.err='';helpRedraw()}
 else if(t.dataset.hnew){HELP.done=null;helpPage()}
 else if(t.dataset.srm!=null){SHARE.files.splice(+t.dataset.srm,1);SHARE.err='';sharePage()}});

/* ---------- curriculum map: every subject, every week, one page ---------- */
function curriculumMap(){const subs=subjectsOf(grade).filter(s=>PLAN[s.id]&&PLAN[s.id].length);const G=GR[grade];
 const link=(s,p)=>{const x=p[1].find(v=>typeof v==='string');const r=x==='set'?RID[s.id+'-set']:x?RID[s.id+'-'+x]:RES.find(r=>r.sub===s.id&&!r.set&&r.pages.includes(p[1][0]-1));return r?'#res-'+r.id:'#class'};
 const row=(s,p,i)=>{const bi=URW[s.id]&&URW[s.id][i];const name=bi?`<span class="ur-t" dir="rtl" lang="ur">${p[0]}</span> <span class="cm-en">${esc(bi.en)}</span>`:T(p[0]);
  const goal=bi?mixUr(bi.goal[0]):T(p[2]||'');const rev=p[1].includes('rev')||/revision/i.test(bi?bi.en:p[0]);
  return `<li class="${i===WEEK_NOW?'cm-now':''}${rev?' rev':''}"><span class="cm-wk">W${i+1}</span><a href="${link(s,p)}"><b>${name}</b><small>${goal}</small></a></li>`};
 const total=subs.reduce((a,s)=>a+PLAN[s.id].filter(Boolean).length,0);
 app.innerHTML=`<div class="phead cmap"><div style="flex:1;min-width:0"><span class="kick">Curriculum map</span><h1>${G.name}: the whole term at a glance</h1>
  <p>${subs.length} subjects, ${Math.max(...subs.map(s=>PLAN[s.id].length))} weeks, ${total} weekly topics. Each topic links to its worksheets and quiz. Week ${Math.min(WEEK_NOW+1,99)} is highlighted.</p>
  ${gradePick()}<div class="acts cm-bar" style="margin-top:14px"><button class="btn sun" type="button" onclick="window.print()">${ic.print}Print the map</button><a class="btn" href="#class">${ic.cal}Weekly guide</a></div></div></div>
 <div class="cm-grid">${subs.map(s=>`<section class="cm-sub s-${s.id}"><h2><span class="sic">${subIcon(s)}</span>${s.name}</h2><ol>${PLAN[s.id].map((p,i)=>p?row(s,p,i):'').join('')}</ol></section>`).join('')}</div>`}
