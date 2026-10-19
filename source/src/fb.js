/* Firebase for the public website: Google sign-in, Firestore profiles, Analytics (child-directed settings) */
import {initializeApp} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import {getAuth,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import {getFirestore,doc,getDoc,setDoc,deleteDoc,collection,getDocs,addDoc,increment,serverTimestamp,query,where} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
import {getStorage,ref as sref,uploadBytesResumable} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-storage.js";
const firebaseConfig={apiKey:"AIzaSyC1rvub_YPgzf1HQkMER8DpJY_9MVnOMlI",authDomain:"littletakhti.firebaseapp.com",projectId:"littletakhti",
 storageBucket:"littletakhti.firebasestorage.app",messagingSenderId:"127926542888",appId:"1:127926542888:web:4f7e47563a3db269bb0b1d",measurementId:"G-SLZBZQEBGQ"};
const app=initializeApp(firebaseConfig),auth=getAuth(app),fs=getFirestore(app);let st=null;try{st=getStorage(app)}catch(e){}
const snap=s=>({id:s.id,exists:s.exists(),data:()=>s.data()});
const docRef=p=>{const r=doc(fs,p);return {get:async()=>snap(await getDoc(r)),set:d=>setDoc(r,d),delete:()=>deleteDoc(r),collection:c=>collRef(p+'/'+c)}};
const collRef=p=>({doc:id=>docRef(p+'/'+id),get:async()=>{const q=await getDocs(collection(fs,p));return {docs:q.docs.map(snap),size:q.size}}});
const F=window.LTFB={db:{doc:docRef,collection:collRef},user:null,
 async signIn(){const pr=new GoogleAuthProvider();pr.setCustomParameters({prompt:'select_account'});
  try{await signInWithPopup(auth,pr);F.log('login',{method:'Google'})}catch(e){if(e&&(e.code==='auth/popup-blocked'||e.code==='auth/operation-not-supported-in-this-environment'))return signInWithRedirect(auth,pr);throw e}},
 signOut:()=>signOut(auth),
 log(n,p){try{window.gtag&&gtag('event',n,p||{})}catch(e){}},
 /* new document with a server time stamp; returns its id */
 async add(col,data){const r=await addDoc(collection(fs,col),{...data,created:serverTimestamp()});return r.id},
 /* merge counters: {a:1,'m.k':2} becomes nested increments */
 bump(path,counts){const o={};for(const [k,v] of Object.entries(counts)){const ks=k.split('.');let t=o;ks.slice(0,-1).forEach(x=>t=t[x]=t[x]||{});t[ks[ks.length-1]]=increment(v)}return setDoc(doc(fs,path),o,{merge:true})},
 async mine(col,uid){const q=await getDocs(query(collection(fs,col),where('uid','==',uid)));return q.docs.map(d=>({id:d.id,...d.data()}))},
 merge:(path,data)=>setDoc(doc(fs,path),{...data,updated:serverTimestamp()},{merge:true}),
 /* upload a file to Firebase Storage; resolves with its storage path */
 upload(path,file,onp){return new Promise((ok,no)=>{if(!st)return no(new Error('storage'));const t=uploadBytesResumable(sref(st,path),file,{contentType:file.type||'application/octet-stream'});
  t.on('state_changed',s=>onp&&onp(s.bytesTransferred/s.totalBytes),no,()=>ok(path))})}};
let first=true;
onAuthStateChanged(auth,u=>{F.user=u?{id:u.uid,name:u.displayName||'',avatarUrl:u.photoURL||'',email:u.email||''}:null;
 if(first){first=false;window.__ltfbResolve&&window.__ltfbResolve()}else window.dispatchEvent(new Event('ltfb-auth'))});
