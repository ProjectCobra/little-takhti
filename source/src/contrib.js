/* ---------- curriculum uploads, AI drafts, admin review, community library ---------- */
const UP_GRADES=[['nursery','Nursery'],['kg','KG'],...Array.from({length:10},(_,i)=>['g'+(i+1),'Grade '+(i+1)])];
const GNUM={nursery:-1,kg:0};for(let i=1;i<=10;i++)GNUM['g'+i]=i;
const DOC_TYPES=['Curriculum','Syllabus','Pattern paper','Textbook chapter','Notes'];
const CMS={sample:null,assets:null,isAdmin:false,mine:null,queue:[],materials:{},busy:false,msg:'',adminTab:'pending',ready:false};
const escT=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
async function cmInit(){
 try{if(!window.claude||!claude.use)return;
  const user=await claude.use('user');
  [CMS.sample,CMS.assets]=await Promise.all([claude.use('sample'),claude.use('assets')]);
  CMS.isAdmin=user?(await user.canEdit())||(await user.isOwner()):false;CMS.user=user;
  const db=FAM.db||await claude.use('db');CMS.db=db;
  if(db){try{const ms=await db.collection('materials').get();ms.docs.forEach(d=>regMaterial(d.id,d.data(),true))}catch(e){}
   if(FAM.uid){try{const q=await db.doc('queue/'+FAM.uid).get();CMS.mine=q.exists?q.data():{items:{}}}catch(e){}}
   if(CMS.isAdmin)await loadQueue()}
 }catch(e){}
 CMS.ready=true;const h=(location.hash||'').slice(1);if(['contribute','admin','library','home','','powerups'].includes(h)||h.startsWith('subject-')||h.startsWith('res-')||h.startsWith('pu-ask')||h==='quiz')route(true);
}
async function loadQueue(){try{const qs=await CMS.db.collection('queue').get();CMS.queue=[];qs.docs.forEach(d=>{const it=(d.data()||{}).items||{};Object.entries(it).forEach(([sid,x])=>CMS.queue.push({uid:d.id,sid,...x}))});CMS.queue.sort((a,b)=>(b.created||'').localeCompare(a.created||''))}catch(e){CMS.queue=[]}}

/* register a material (approved or under review) as a subject + resource the renderer understands */
function ensureGrade(g){if(!GR[g]){const n=GNUM[g];const o={id:g,name:'Grade '+n,short:String(n),age:'',soon:1,hidden:1};GRADES.push(o);GR[g]=o}}
function regMaterial(id,m,approved){
 const kind=KIND[m.kind]?m.kind:'english';ensureGrade(m.grade);const sid='m-'+id;
 const s={id:sid,kind,grade:m.grade,rtl:kind==='urdu',topics:[m.topic||m.title],name:KIND[kind].name,ur:KIND[kind].ur,community:true};
 SUB[sid]=s;PAGES[sid]=(m.pages||[]).map(p=>({...p,topic:m.topic||m.title,en:''}));
 if(!document.getElementById('css-'+sid)){const k=KIND[kind].sheet;const st=document.createElement('style');st.id='css-'+sid;st.textContent=`.s-${sid}{--sc:var(--k-${kind});--st:var(--k-${kind}-t)}.sheet.s-${sid}{--pc:${k[0]};--pt:${k[1]}}`;document.head.appendChild(st)}
 const rid=sid+'-t1';const r={id:rid,sub:sid,title:m.title,en:'',topic:m.topic||m.title,pages:PAGES[sid].map((_,i)=>i),desc:m.summary||'',obj:m.objectives||[],community:approved,docType:m.docType};
 delete QZ[rid];if(approved){const i=RES.findIndex(x=>x.id===rid);if(i>=0)RES[i]=r;else RES.push(r);RID[rid]=r;GUIDE[sid]=[m.guide?[m.guide.what,m.guide.steps,m.guide.home,m.guide.watch]:null]}
 else RID[rid]=r;
 return r}
const communityRes=()=>RES.filter(r=>r.community);

/* --- reading the uploaded file --- */
let pdfjs=null;
function loadPdfJs(){if(pdfjs)return Promise.resolve(pdfjs);return new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';s.onload=()=>{pdfjs=window.pdfjsLib;try{pdfjs.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'}catch(e){}ok(pdfjs)};s.onerror=()=>no(new Error('pdf'));document.head.appendChild(s)})}
async function readPdf(file){const lib=await loadPdfJs();const doc=await lib.getDocument({data:await file.arrayBuffer()}).promise;let out='';const n=Math.min(doc.numPages,30);
 for(let i=1;i<=n;i++){const pg=await doc.getPage(i);const tc=await pg.getTextContent();out+=tc.items.map(t=>t.str).join(' ')+'\n';if(out.length>40000)break}return {text:out,pages:doc.numPages}}
async function extract(file,pasted){if(!file)return {text:pasted||'',images:[]};
 if(/pdf$/i.test(file.type)||/\.pdf$/i.test(file.name)){const r=await readPdf(file);return {text:(pasted?pasted+'\n':'')+r.text,images:[],pages:r.pages}}
 if(/^image\//.test(file.type))return {text:pasted||'',images:[file]};
 if(/^text\//.test(file.type)||/\.(txt|md|csv)$/i.test(file.name))return {text:(pasted?pasted+'\n':'')+(await file.text()),images:[]};
 throw {code:'type'}}

/* --- screening and drafting --- */
const KIND_LIST=Object.keys(KIND);
function screenPrompt(form,text){return `You check files uploaded to a children's learning website for Pakistani schools (Nursery to Grade 10).
Decide if this upload is genuine study material (a curriculum, syllabus, scheme of work, pattern or model paper, textbook chapter, or teaching notes) and which school grades it is for.
The uploader says: title "${form.title}", grade ${form.gradeName}, subject ${KIND[form.kind].name}, type ${form.docType}.
Grade scale: -1 = Nursery, 0 = KG, 1 to 10 = Grade 1 to 10, 11 = Grade 11 or above, college, university, O/A level beyond Grade 10, or adult professional material.
Reply with only JSON: {"study": true|false, "grade_low": int, "grade_high": int, "subject": one of ${JSON.stringify([...KIND_LIST,'other'])}, "doc_type": "curriculum"|"syllabus"|"pattern paper"|"textbook"|"notes"|"other", "reason": "one short sentence"}
Mark study false for anything that is not school learning material (adverts, personal documents, stories for adults, bills, forms, random photos, unsafe content).
UPLOADED CONTENT${text?'':' (see the attached image)'}:
"""${text.slice(0,7000)}"""`}
function draftPrompt(form,text){const ur=form.kind==='urdu';return `You write printable A4 practice worksheets for ${form.gradeName} children in Pakistan, based ONLY on the study material below (a ${form.docType}).
Subject: ${KIND[form.kind].name}. ${ur?'Write all worksheet text in Urdu script.':'Write in simple British English with Pakistani names and examples.'}
Pick ONE clear topic from the material that suits ${form.gradeName}. Make exactly 3 worksheet pages on that topic, each with 1 or 2 activity blocks and at most 8 items per block. Keep every item short and age-appropriate. Every answer must be correct.
Allowed block types (use these exact shapes):
{"t":"fill","h":"heading","items":["Text with the answer in double braces like 7 + 3 = {{10}}"]}   (exactly one {{answer}} per item)
{"t":"choice","h":"heading","items":[["question",["option 1","option 2","option 3"],0]]}   (last number = index of the correct option)
{"t":"match","h":"heading","left":["a","b","c"],"right":["matches a","matches b","matches c"]}   (right[i] matches left[i]; 4 to 6 pairs)
{"t":"sort","h":"heading","cats":["Group 1","Group 2"],"words":["w1","w2","w3","w4"],"ans":[0,1,0,1]}
{"t":"write","h":"heading","items":["Open question ____________"]}
Reply with only JSON:
{"title":"short worksheet pack title","topic":"topic name","summary":"2 sentences for parents","objectives":["...","...","..."],
"pages":[{"title":"page title","instr":"one-line instruction for the child","obj":"what this page practises","blocks":[...]}, ... 3 pages],
"guide":{"what":"one sentence: what the child learns","steps":["how to explain it, step 1","step 2","step 3"],"home":["home activity 1","home activity 2"],"watch":"one common mistake to watch for"}}
STUDY MATERIAL:
"""${text.slice(0,20000)}"""`}
/* keep only well-formed blocks; strip any markup from generated text */
const clean=v=>escT(String(v==null?'':v)).slice(0,240);
function sanitizeDraft(d){if(!d||typeof d!=='object')return null;const pages=[];
 (Array.isArray(d.pages)?d.pages:[]).slice(0,4).forEach(p=>{const blocks=[];(Array.isArray(p.blocks)?p.blocks:[]).slice(0,3).forEach(b=>{const h=clean(b.h);
  if(b.t==='fill'&&Array.isArray(b.items)){const items=b.items.map(clean).filter(x=>(x.match(/\{\{.+?\}\}/g)||[]).length===1).slice(0,8);if(items.length)blocks.push({t:'fill',h,items})}
  else if(b.t==='choice'&&Array.isArray(b.items)){const items=b.items.filter(it=>Array.isArray(it)&&Array.isArray(it[1])&&it[1].length>=2&&Number.isInteger(it[2])&&it[2]>=0&&it[2]<it[1].length).slice(0,8).map(it=>[clean(it[0]),it[1].slice(0,4).map(clean),it[2]]);if(items.length)blocks.push({t:'choice',h,items})}
  else if(b.t==='match'&&Array.isArray(b.left)&&Array.isArray(b.right)&&b.left.length===b.right.length&&b.left.length>=3){blocks.push({t:'match',h,left:b.left.slice(0,8).map(clean),right:b.right.slice(0,8).map(clean)})}
  else if(b.t==='sort'&&Array.isArray(b.cats)&&Array.isArray(b.words)&&Array.isArray(b.ans)&&b.words.length===b.ans.length&&b.cats.length>=2&&b.ans.every(a=>Number.isInteger(a)&&a>=0&&a<b.cats.length)){blocks.push({t:'sort',h,cats:b.cats.slice(0,3).map(clean),words:b.words.slice(0,10).map(clean),ans:b.ans.slice(0,10)})}
  else if(b.t==='write'&&Array.isArray(b.items)){blocks.push({t:'write',h,items:b.items.slice(0,4).map(x=>clean(x).replace(/_+/g,'____________'))})}});
  if(blocks.length)pages.push({title:clean(p.title)||'Practice',instr:clean(p.instr),obj:clean(p.obj),blocks})});
 if(!pages.length)return null;const g=d.guide||{};
 return {title:clean(d.title)||'Practice pack',topic:clean(d.topic)||clean(d.title),summary:clean(d.summary),objectives:(Array.isArray(d.objectives)?d.objectives:[]).slice(0,5).map(clean),pages,
  guide:{what:clean(g.what),steps:(Array.isArray(g.steps)?g.steps:[]).slice(0,4).map(clean),home:(Array.isArray(g.home)?g.home:[]).slice(0,3).map(clean),watch:clean(g.watch)}}}

async function writeMine(sid,item){if(!CMS.mine)CMS.mine={items:{}};const items={...CMS.mine.items,[sid]:item};
 /* keep the doc small: drop the oldest decided items beyond 12 */
 const ks=Object.keys(items).sort((a,b)=>(items[a].created||'').localeCompare(items[b].created||''));while(ks.length>12){const k=ks.find(k=>items[k].status!=='pending')||ks[0];delete items[k];ks.splice(ks.indexOf(k),1)}
 await CMS.db.doc('queue/'+FAM.uid).set({items});CMS.mine={items}}

async function submitUpload(form,file){
 const set=(m,busy=true)=>{CMS.msg=m;CMS.busy=busy;const el=document.getElementById('upstat');if(el){el.innerHTML=m;el.hidden=!m}const b=document.getElementById('upbtn');if(b)b.disabled=busy};
 try{
  set('Reading your file…');let ex;
  try{ex=await extract(file,form.pasted)}catch(e){set('<b>That file type is not supported.</b> Upload a PDF, a photo (JPG or PNG) or a text file, or paste the text.',false);return}
  if(!ex.text.trim()&&!ex.images.length){set('<b>No text found.</b> If this is a scanned PDF, upload photos of the pages instead, or paste the text.',false);return}
  set('Checking that this is study material for Grade 10 or below…');
  const imgOpt=ex.images.length?{images:ex.images}:{};
  const sc=await CMS.sample.json(screenPrompt(form,ex.text),{modelTier:'quick',...imgOpt,cache:false});
  const low=Number(sc&&sc.grade_low),high=Number(sc&&sc.grade_high);
  if(!sc||sc.study!==true){set(`<b>Upload rejected.</b> This does not look like school study material. ${escT(sc&&sc.reason||'')}`,false);return}
  if(!(low<=10)){set(`<b>Upload rejected.</b> This material is for a level above Grade 10. Little Takhti accepts material for Nursery to Grade 10 only. ${escT(sc.reason||'')}`,false);return}
  set('Approved for review. Now drafting worksheets from it. This can take a minute…');
  const raw=await CMS.sample.json(draftPrompt(form,ex.text),{...imgOpt,cache:false});
  const draft=sanitizeDraft(raw);if(!draft){set('<b>Could not draft worksheets from this file.</b> Try a clearer file or paste the key section as text.',false);return}
  let assetId=null;if(file&&CMS.assets){try{const a=await CMS.assets.upload(file,file.type?{}:{type:'text/plain'});assetId=a.id}catch(e){}}
  const sid='s'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  const item={title:clean(form.title),grade:form.grade,kind:form.kind,docType:form.docType,fileName:file?clean(file.name):'Pasted text',assetId,
   screening:{grade_low:low,grade_high:high,subject:clean(sc.subject),doc_type:clean(sc.doc_type),reason:clean(sc.reason)},excerpt:ex.text.slice(0,6000),draft,status:'pending',created:new Date().toISOString()};
  await writeMine(sid,item);
  set(`<b>Submitted for review.</b> “${escT(draft.title)}” is waiting for an admin to approve it. You can see its status below.`,false);
  setTimeout(()=>{if(location.hash==='#contribute')contribute()},1600);
 }catch(e){const c=e&&e.code;
  set(c==='not_granted'||c==='sampling_disabled'?'<b>File checking is turned off for your account,</b> so uploads cannot be checked. Allow it in this page\'s permissions and try again.'
   :c==='rate_limited'?'<b>Too many requests just now.</b> Please wait a minute and try again.'
   :c==='invalid_argument'?'<b>Your access to this page is view-only,</b> so you cannot submit material. Ask the owner for Contributor access.'
   :'<b>Something went wrong.</b> Please try again.',false)}
}

/* --- contribute page --- */
function contribute(){
 const can=!!(CMS.sample&&CMS.db&&FAM.uid);const mine=CMS.mine?Object.entries(CMS.mine.items||{}).sort((a,b)=>(b[1].created||'').localeCompare(a[1].created||'')):[];
 const st={pending:['Waiting for review',''],approved:['Approved and published','key'],rejected:['Not approved','bad']};
 app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Share material</span><h1>Upload a curriculum, syllabus or paper</h1>
  <p>Upload your school's curriculum, syllabus or pattern papers. We check the file, then draft practice worksheets, a quiz and a parent guide from it. An admin reviews every draft before it appears on Little Takhti.</p>
  <ul class="rules"><li>${ic.ok}Study material only: curriculum, syllabus, scheme of work, pattern or model papers, textbook chapters, teaching notes.</li><li>${ic.ok}Nursery to Grade 10 only. Anything else is rejected automatically.</li><li>${ic.ok}PDF with selectable text, photos of pages (JPG or PNG), or plain text. Up to 20 MB.</li></ul></div><div class="ph-art">${art('class')}</div></div>
 ${can?`<section style="margin-top:24px"><form class="upform" id="upform">
  <div class="kf-row"><label for="utitle">Title</label><input id="utitle" required maxlength="80" placeholder="e.g. Grade 4 Science syllabus, first term"></div>
  <div class="uprow"><div class="kf-row"><label for="ugrade">Grade</label><select id="ugrade">${UP_GRADES.map(([v,n])=>`<option value="${v}" ${v===grade?'selected':''}>${n}</option>`).join('')}</select></div>
  <div class="kf-row"><label for="ukind">Subject</label><select id="ukind">${KIND_LIST.map(k=>`<option value="${k}">${KIND[k].name}</option>`).join('')}</select></div>
  <div class="kf-row"><label for="utype">Type</label><select id="utype">${DOC_TYPES.map(t=>`<option>${t}</option>`).join('')}</select></div></div>
  <div class="kf-row"><label for="ufile">File</label><label class="drop" for="ufile" id="drop">${ic.dl}<span id="dropt">Choose a file or drop it here</span><input id="ufile" type="file" accept=".pdf,.txt,.md,image/png,image/jpeg,image/webp"></label></div>
  <div class="kf-row"><label for="upaste">Or paste the text</label><textarea id="upaste" rows="5" maxlength="40000" placeholder="Paste the syllabus or chapter text here"></textarea></div>
  <div class="acts"><button class="btn sun lg" id="upbtn" type="submit">${ic.spark}Check and draft worksheets</button></div>
  <div class="upstat" id="upstat" role="status" ${CMS.msg?'':'hidden'}>${CMS.msg}</div></form></section>`
 :`<div class="empty" style="margin-top:24px">${!CMS.ready?'Loading…':!FAM.uid?'Sign in to upload material.':!CMS.sample?'Uploads need automatic file checking, which is not available for your account.':'Uploads are not available for your access level. Ask the owner for Contributor access.'}</div>`}
 ${mine.length?`<section><div class="sec-h"><h2>Your uploads</h2></div><div class="mylist">${mine.map(([sid,x])=>`<div class="myrow"><div style="min-width:0;flex:1"><b>${escT(x.draft?x.draft.title:x.title)}</b><small>${escT(x.fileName)} · ${(GR[x.grade]||{name:x.grade}).name||x.grade} · ${KIND[x.kind]?KIND[x.kind].name:''} · ${(x.created||'').slice(0,10)}</small>${x.status==='rejected'&&x.reason?`<small class="rj">Reason: ${escT(x.reason)}</small>`:''}</div><span class="tag ${st[x.status][1]}">${st[x.status][0]}</span>${x.status==='approved'?`<a class="btn" href="#res-m-${sid}-t1">Open</a>`:''}</div>`).join('')}</div></section>`:''}`;
 const f=document.getElementById('upform');if(!f)return;const fi=document.getElementById('ufile'),dr=document.getElementById('drop');
 fi.onchange=()=>{document.getElementById('dropt').textContent=fi.files[0]?fi.files[0].name:'Choose a file or drop it here'};
 ['dragover','dragenter'].forEach(ev=>dr.addEventListener(ev,e=>{e.preventDefault();dr.classList.add('over')}));['dragleave','drop'].forEach(ev=>dr.addEventListener(ev,()=>dr.classList.remove('over')));
 dr.addEventListener('drop',e=>{e.preventDefault();if(e.dataTransfer.files[0]){fi.files=e.dataTransfer.files;fi.onchange()}});
 f.addEventListener('submit',e=>{e.preventDefault();if(CMS.busy)return;const file=fi.files[0]||null,pasted=document.getElementById('upaste').value.trim();
  if(!file&&!pasted){CMS.msg='<b>Add a file or paste some text first.</b>';contribute();return}
  if(file&&file.size>20*1024*1024){CMS.msg='<b>That file is over 20 MB.</b> Upload a smaller file or a few pages.';contribute();return}
  const g=document.getElementById('ugrade').value;submitUpload({title:document.getElementById('utitle').value.trim(),grade:g,gradeName:(UP_GRADES.find(x=>x[0]===g)||[])[1],kind:document.getElementById('ukind').value,docType:document.getElementById('utype').value,pasted},file)});
}

/* --- admin review panel --- */
async function adminAct(kind,uid,sid,extra){const x=CMS.queue.find(q=>q.uid===uid&&q.sid===sid);if(!x)return;
 try{const ref=CMS.db.doc('queue/'+uid);const snap=await ref.get();const items={...((snap.data()||{}).items||{})};const it={...items[sid]};
  if(kind==='approve'){const ed=extra||{};const m={...it.draft,title:ed.title||it.draft.title,grade:ed.grade||it.grade,kind:ed.kind||it.kind,docType:it.docType,by:uid,sourceAsset:it.assetId||null,approvedAt:new Date().toISOString()};
   await CMS.db.doc('materials/'+sid).set(m);it.status='approved';it.grade=m.grade;it.kind=m.kind;regMaterial(sid,m,true)}
  else if(kind==='reject'){it.status='rejected';it.reason=clean(extra||'Not suitable for Little Takhti.')}
  else if(kind==='unpublish'){await CMS.db.doc('materials/'+sid).delete();it.status='pending';const i=RES.findIndex(r=>r.id==='m-'+sid+'-t1');if(i>=0)RES.splice(i,1)}
  items[sid]=it;await ref.set({items});await loadQueue();admin();fit()
 }catch(e){const el=document.getElementById('admsg');if(el){el.hidden=false;el.textContent='Could not save that change. Check your access and try again.'}}}
let adminOpen=null;
function admin(){
 if(!CMS.ready){app.innerHTML='<div class="empty">Loading…</div>';return}
 if(!CMS.isAdmin){app.innerHTML=`<div class="empty">The review panel is for the site's owners and editors.</div>`;return}
 const tabs=[['pending','Waiting'],['approved','Published'],['rejected','Rejected']];const list=CMS.queue.filter(x=>x.status===CMS.adminTab);
 app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Admin</span><h1>Review uploaded material</h1><p>Every upload has passed the automatic check (study material, Nursery to Grade 10). Read the draft, fix the title, grade or subject if needed, then publish or reject it.</p>
  <div class="tags" style="margin-top:12px">${tabs.map(([k,n])=>`<span class="tag">${n}: ${CMS.queue.filter(x=>x.status===k).length}</span>`).join('')}</div></div><div class="ph-art">${art('parents')}</div></div>
 <div class="tabs">${tabs.map(([k,n])=>`<button class="tab" data-atab="${k}" aria-selected="${CMS.adminTab===k}" style="${CMS.adminTab===k?'background:var(--ink);color:var(--surface);border-color:var(--ink)':''}">${n}</button>`).join('')}<button class="tab" data-arefresh="1">${I('<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>')}Refresh</button></div>
 <p class="fnote" id="admsg" hidden></p>
 ${list.length?`<div class="adlist">${list.map(x=>{const key=x.uid+'/'+x.sid,open=adminOpen===key,d=x.draft||{};let preview='';
  if(open){const r=regMaterial('q'+x.sid,{...d,grade:x.grade,kind:x.kind},false);preview=`<div class="adprev">${r.pages.map((pi,j)=>`<div class="adpg">${frame(r.sub,pi,false,j+1,r.pages.length)}<small>Page ${j+1}</small></div><div class="adpg">${frame(r.sub,pi,true,j+1,r.pages.length)}<small>Page ${j+1} answers</small></div>`).join('')}</div>
   <div class="adgrid"><div><h4 class="gh">Summary</h4><p>${d.summary||''}</p><h4 class="gh" style="margin-top:12px">Objectives</h4><ul class="acts-l">${(d.objectives||[]).map(o=>`<li>${o}</li>`).join('')}</ul></div>
   <div><h4 class="gh">Parent guide</h4><p>${(d.guide||{}).what||''}</p><ol class="gd-steps">${((d.guide||{}).steps||[]).map(o=>`<li>${o}</li>`).join('')}</ol></div></div>
   <details class="excerpt"><summary>Source text excerpt</summary><p>${escT((x.excerpt||'').slice(0,2500))}</p></details>
   ${x.status==='pending'?`<form class="adform" data-auid="${x.uid}" data-asid="${x.sid}"><div class="uprow"><div class="kf-row"><label>Title</label><input name="title" value="${d.title||''}" maxlength="80"></div>
    <div class="kf-row"><label>Grade</label><select name="grade">${UP_GRADES.map(([v,n])=>`<option value="${v}" ${v===x.grade?'selected':''}>${n}</option>`).join('')}</select></div>
    <div class="kf-row"><label>Subject</label><select name="kind">${KIND_LIST.map(k=>`<option value="${k}" ${k===x.kind?'selected':''}>${KIND[k].name}</option>`).join('')}</select></div></div>
    <div class="kf-row"><label>Reason if rejecting (shown to the uploader)</label><input name="reason" maxlength="160" placeholder="e.g. Answers in page 2 are incorrect"></div>
    <div class="acts"><button class="btn sun" data-aact="approve" type="button">${ic.ok}Approve and publish</button><button class="btn" data-aact="reject" type="button" style="border-color:var(--bad);color:var(--bad)">Reject</button></div></form>`
   :x.status==='approved'?`<div class="acts"><a class="btn" href="#res-m-${x.sid}-t1">Open on site</a><button class="btn" data-aunpub="${x.uid}/${x.sid}">Unpublish</button></div>`:`<p class="rj">Reason: ${x.reason||''}</p>`}`}
  return `<article class="aditem${open?' open':''}"><button class="adhead" data-aopen="${key}" aria-expanded="${open}"><span class="sic s-${(SUBJECTS.find(s=>s.kind===x.kind)||{}).id}" style="background:var(--k-${x.kind})">${subIcon({kind:x.kind})}</span>
   <span class="t"><b>${d.title||x.title}</b><small>${(UP_GRADES.find(g=>g[0]===x.grade)||['',''])[1]} · ${KIND[x.kind]?KIND[x.kind].name:''} · ${x.docType} · from “${x.fileName}” · ${(x.created||'').slice(0,10)}</small>
   <small>Check: study material, ${x.screening?`grades ${x.screening.grade_low} to ${x.screening.grade_high}, ${x.screening.reason}`:''}</small></span>${x.assetId?`<a class="btn" href="/_blob/${x.assetId}" target="_blank" rel="noopener" data-noopen="1">${ic.sheet}Source</a>`:''}<span class="gd-c"></span></button>${preview}</article>`}).join('')}</div>`
 :`<div class="empty">Nothing here right now.</div>`}`;
 document.querySelectorAll('.adform').forEach(f=>f.addEventListener('click',e=>{const b=e.target.closest('[data-aact]');if(!b)return;const fd=new FormData(f);b.disabled=true;
  if(b.dataset.aact==='approve')adminAct('approve',f.dataset.auid,f.dataset.asid,{title:clean(fd.get('title')),grade:fd.get('grade'),kind:fd.get('kind')});else adminAct('reject',f.dataset.auid,f.dataset.asid,fd.get('reason'))}));
}

/* --- community library --- */
let libGrade='all';
function library(){const all=communityRes();const gs=[...new Set(all.map(r=>SUB[r.sub].grade))].sort((a,b)=>GNUM[a]-GNUM[b]);
 const list=all.filter(r=>libGrade==='all'||SUB[r.sub].grade===libGrade);
 app.innerHTML=`<div class="phead"><div style="flex:1;min-width:0"><span class="kick">Community library</span><h1>Material from schools and teachers</h1><p>Practice packs drafted from uploaded curricula, syllabi and pattern papers, checked and approved by our admins. Nursery to Grade 10.</p>
  <div class="acts" style="margin-top:14px"><a class="btn sun" href="#contribute">${ic.dl}Upload material</a>${CMS.isAdmin?`<a class="btn" href="#admin">Review uploads</a>`:''}</div></div><div class="ph-art">${art('english')}</div></div>
 ${gs.length?`<div class="filters"><button class="fchip" data-lib="all" aria-pressed="${libGrade==='all'}">All grades</button>${gs.map(g=>`<button class="fchip" data-lib="${g}" aria-pressed="${libGrade===g}">${GR[g].name}</button>`).join('')}</div>`:''}
 ${list.length?`<div class="cards">${list.map(card).join('')}</div>`:`<div class="empty" style="margin-top:20px">No approved community material yet. <a href="#contribute">Upload the first one.</a></div>`}`}
