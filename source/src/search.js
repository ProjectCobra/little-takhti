/* ---------- smart search: English, Urdu script and Roman Urdu ---------- */
/* Roman Urdu and Urdu script are compared by their consonant "skeleton" (Urdu script leaves out short vowels,
   and Roman Urdu spellings vary mostly in vowels), so jama / jamaa / جمع all become "jm". */
const UR2L={'ب':'b','پ':'p','ت':'t','ٹ':'t','ث':'s','ج':'j','چ':'c','ح':'','خ':'k','د':'d','ڈ':'d','ذ':'z','ر':'r','ڑ':'r','ز':'z','ژ':'z','س':'s','ش':'s','ص':'s','ض':'z','ط':'t','ظ':'z','ع':'','غ':'g','ف':'f','ق':'k','ک':'k','ك':'k','گ':'g','ل':'l','م':'m','ن':'n','ں':'n','و':'','ہ':'','ھ':'','ه':'','ۃ':'t','ة':'t','ی':'','ي':'','ے':'','ۓ':'','ئ':'','ء':'','ا':'','آ':'','أ':''};
const hasUrScript=s=>/[؀-ۿ]/.test(s);
function skel(w){w=String(w).toLowerCase();let o='';
 if(hasUrScript(w)){for(const ch of w){if(ch in UR2L)o+=UR2L[ch];else if(/[؀-ۿ]/.test(ch))continue}}
 else{o=w.replace(/x/g,'ks').replace(/q/g,'k').replace(/[^a-z]/g,'').replace(/[aeiouyhw]/g,'').replace(/v/g,'')}
 return o.replace(/(.)\1+/g,'$1')}

/* Roman Urdu learning words → English topic words (matched by skeleton, so spellings can vary) */
const RU_DICT=[
 [['jama','jamaa','jor','jorna'],['addition','add','plus','sum','bonds']],[['tafreeq','tafriq','nafi','minus','ghatana'],['subtraction','take away','minus']],
 [['zarb','pahara','pahare'],['times table','multiplication','times']],[['taqseem','takseem','batna'],['division','share','groups']],
 [['ginti','gintee','ginna'],['counting','numbers','count']],[['adad','hindse','hindsay','number'],['numbers','counting']],
 [['kasr','kasoor','aadha','adha'],['fractions','half']],[['shakal','shakl','ashkal','shaklain'],['shapes']],[['rang','rangon'],['colours','colour']],
 [['waqt','ghari','ghanta'],['time','clock']],[['paisa','paise','raqam'],['money']],[['lambai','naap'],['length','measure']],[['wazan'],['weight','measure']],
 [['huroof','haroof','harf','hurf','abjad'],['alphabet','letters']],[['alfaz','lafz','lafaz'],['words','vocabulary','sight words']],
 [['jumla','jumlay','jumle'],['sentences','sentence']],[['kahani','kahaniyan','qissa'],['story','reading','passage']],[['parhna','parhai','parho'],['reading','read']],
 [['likhna','likhai','likho'],['writing','write','trace']],[['imla','hijje','hije'],['spelling','phonics']],[['awaz','awaaz','sada','sur'],['sound','sounds','phonics','vowel']],
 [['ism'],['noun','nouns']],[['fel','feal','fail'],['verbs','verb','-ing']],[['sifat'],['adjectives','describing']],[['zameer','zamir'],['pronouns']],[['mutazad','ulta'],['opposites']],
 [['roshni','ujala'],['light']],[['garmi','hararat','tapish'],['heat','hot']],[['tawanai','taqat','tawanaai'],['energy']],
 [['paudha','paude','podey','pauda','darakht'],['plants','plant','seed']],[['janwar','janwer','haiwan','haiwanat'],['animals','animal']],
 [['jism','badan'],['body','senses']],[['hawas'],['senses']],[['mausam','mosam'],['weather','seasons']],[['pani'],['water']],[['hawa'],['air']],
 [['magnatees','maqnatees','magnet'],['magnets','magnet']],[['khurak','ghiza','khana'],['food','healthy']],[['sehat','sihat'],['health','healthy']],
 [['khandan','khaandan','ghar','gharwale','walidain'],['family','home']],[['jazbat','jazbaat','ehsas','ehsasat'],['feelings','emotions']],
 [['usool','qawaid','qanoon'],['rules','house rules']],[['madadgar','madad'],['helpers','community']],[['naqsha','naksha'],['map','maps']],
 [['soobay','subay','sooba','suba'],['provinces','province']],[['shehar','shahar'],['city','cities']],[['darya','dariya','nadi'],['rivers','river']],
 [['pahar','pahaar'],['mountains','mountain']],[['qadeem','purana'],['ancient','indus']],[['moenjodaro','mohenjodaro','mohenjo'],['mohenjo-daro','indus']],
 [['qaumi','qomi'],['national']],[['jhanda','parcham'],['flag','national']],[['tehwar','tehwaar','eid'],['festivals','celebrations']],
[['tasveer','tasweer'],['picture','pictures']]
];
const RU_SUBJ=[[['riazi','riyazi','hisab','hisaab','math','maths'],'maths'],[['angrezi','angraizi','english'],'english'],[['urdu'],'urdu'],[['saains','sains','science','scienc'],'science'],
 [['maashrati','muashrati','samaji','social'],'social'],[['tareekh','tarikh','history'],'history'],[['jughrafia','jografia','geography'],'geography'],[['maloomat','malumat','gk'],'gk']];
const RU_GRADE=[[['nursery','narsri','playgroup'],'nursery'],[['kg','prep','kachi','kachchi'],'kg'],[['pehli','pehla','pahli','awal','awwal','first','one','1'],'g1'],
 [['doosri','dusri','dosri','second','two','2'],'g2'],[['teesri','tisri','third','three','3'],'g3'],[['chothi','chauthi','fourth','4'],'g4'],[['panchvi','panchvin','fifth','5'],'g5']];
const GRADE_WORDS=['class','grade','jamat','jamaat','jamaet','darja'];
const STOP=new Set(['ki','ka','ke','ko','se','me','mein','main','aur','or','and','the','of','for','a','an','to','in','on','with','wala','wali','wale','chahiye','chaiye','do','dikhao','dekhao','batao','practice','kids','bachon','bachay','bache','sheet','sheets','worksheet','worksheets','pdf','free','printable','ya','hai','hain','kya','koi','kuch','liye','lye','please','plz']);
const QUIZW=new Set(['khel','kheil','sawal','sawaal','sawalat','imtihan','test','quiz','quizzes','game','games','mashq']);
const RU_EXACT=(()=>{const m=new Map();RU_DICT.forEach(([ks,en])=>ks.forEach(k=>m.set(k,en)));return m})();
const RU_IDX=(()=>{const m=new Map();RU_DICT.forEach(([ks,en])=>ks.forEach(k=>{const s=skel(k);if(s.length>=2&&!m.has(s))m.set(s,en)}));return m})();
const lookupList=(list,tok)=>{for(const [ks,v] of list)if(ks.includes(tok))return v;const s=skel(tok);if(s.length>=3)for(const [ks,v] of list)if(ks.some(k=>skel(k)===s))return v;return null};
const stem=w=>w.length>4?w.replace(/(ing|es|s)$/,''):w;
function lev1(a,b){if(Math.abs(a.length-b.length)>1)return false;let i=0,j=0,e=0;while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue}if(++e>1)return false;if(a.length>b.length)i++;else if(b.length>a.length)j++;else{i++;j++}}return e+(a.length-i)+(b.length-j)<=1}

/* per-resource index: weighted English tokens and Urdu skeletons */
let SIDX=null;
function buildSIdx(){SIDX=new Map();RES.forEach(r=>{const s=SUB[r.sub],pages=PAGES[r.sub]||[];
 const fields=[[5,[r.title,r.en,r.topic,UR_EN[r.topic]||'']],[3,[s.name,s.ur,KIND[s.kind]?KIND[s.kind].name:'']],[2,r.pages.map(i=>pages[i]?pages[i].title+' '+(pages[i].topic||''):'')],[1,[r.desc||'',(r.obj||[]).join(' '),r.pages.map(i=>pages[i]?pages[i].instr||'':'').join(' ')]]];
 let words=[];try{if(!r.set)words=keyWords(r)}catch(e){}fields.push([2,words]);
 const en=new Map(),ur=new Map();
 fields.forEach(([w,arr])=>arr.join(' ').split(/[^\p{L}\p{M}\p{N}'-]+/u).forEach(tok=>{if(!tok)return;
  if(hasUrScript(tok)){const k=skel(tok);if(k.length>=2)ur.set(k,Math.max(ur.get(k)||0,w))}
  else{const t=stem(tok.toLowerCase().replace(/^-/,''));if(t.length>=2)en.set(t,Math.max(en.get(t)||0,w))}}));
 SIDX.set(r.id,{en,ur,grade:s.grade,kind:s.kind})})}

/* understand the query */
function parseQuery(q){const raw=q.toLowerCase().replace(/[“”"'?!,.]/g,' ').split(/\s+/).filter(Boolean);
 const terms=[],notes=[];let grade=null,kind=null,quiz=false;
 for(let i=0;i<raw.length;i++){const t=raw[i];
  if(GRADE_WORDS.includes(t)&&raw[i+1]){const g=lookupList(RU_GRADE,raw[i+1]);if(g){grade=g;i++;continue}}
  const gm=/^(?:class|grade|g)(\d)$/.exec(t);if(gm){grade='g'+gm[1];continue}
  if(['nursery','kg','prep','kachi','narsri','playgroup'].includes(t)){grade=lookupList(RU_GRADE,t);continue}
  if((t==='pehli'||t==='doosri'||t==='teesri'||t==='dusri'||t==='pahli'||t==='tisri')&&raw[i+1]&&GRADE_WORDS.includes(raw[i+1])){grade=lookupList(RU_GRADE,t);i++;continue}
  if(STOP.has(t))continue;
  if(QUIZW.has(t)){quiz=true;continue}
  const sj=lookupList(RU_SUBJ,t);if(sj){kind=sj;notes.push(KIND[sj]?KIND[sj].name:sj);continue}
  const ur=hasUrScript(t),sk=skel(t);
  const syn=RU_EXACT.get(t)||(sk.length>=2?(RU_IDX.get(sk)||null):null);if(syn&&stem(syn[0])!==stem(t))notes.push(`${t} → ${syn[0]}`);
  terms.push({t,ur,sk,syn})}
 if(quiz)notes.push('quiz games');return {terms,grade,kind,notes,quiz}}

function scoreRes(r,P){const I=SIDX.get(r.id);if(!I)return 0;let total=0,matched=0;
 for(const term of P.terms){let best=0;
  const tryEn=w=>{const t=stem(w.toLowerCase());for(const [k,wt] of I.en){if(k===t||(t.length>=3&&k.startsWith(t))||(k.length>=4&&t.startsWith(k))||(t.length>=5&&lev1(k,t)))best=Math.max(best,wt)}};
  if(!term.ur)tryEn(term.t);
  if(term.syn)term.syn.forEach(s=>s.split(' ').forEach(tryEn));
  if(term.sk.length>=2)for(const [k,wt] of I.ur){if(k===term.sk||(term.sk.length>=3&&k.startsWith(term.sk))||(term.sk.length>=4&&lev1(k,term.sk)))best=Math.max(best,wt)}
  if(best){matched++;total+=best}}
 if(P.terms.length&&!matched)return 0;
 if(P.kind){if(I.kind===P.kind||(P.kind==='social'&&['history','geography'].includes(I.kind)))total+=P.terms.length?3:4;else if(!P.terms.length)return 0;else total-=2}
 if(P.grade){if(I.grade!==P.grade)return 0;total+=1}
 total+=matched===P.terms.length?4:0;
 if(P.quiz){if(!r.set&&hasQuiz(r))total+=2;else if(!P.terms.length&&!P.kind)return 0}
 if(r.set)total-=.5;return total}

function smartSearch(q){if(!SIDX)buildSIdx();const P=parseQuery(q);
 if(!P.terms.length&&!P.kind&&!P.grade&&!P.quiz)return {hits:[],P};
 const scored=RES.map(r=>[r,scoreRes(r,P)]).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]);
 const top=scored.length?scored[0][1]:0;
 return {hits:scored.filter(x=>x[1]>=Math.min(top*.5,top-1)).map(x=>x[0]),P}}
