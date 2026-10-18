/* Firebase for the public website: Google sign-in, Firestore profiles, Analytics (child-directed settings) */
import {initializeApp} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import {getAuth,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import {getFirestore,doc,getDoc,setDoc,deleteDoc,collection,getDocs} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyC1rvub_YPgzf1HQkMER8DpJY_9MVnOMlI",authDomain:"littletakhti.firebaseapp.com",projectId:"littletakhti",
 storageBucket:"littletakhti.firebasestorage.app",messagingSenderId:"127926542888",appId:"1:127926542888:web:4f7e47563a3db269bb0b1d",measurementId:"G-SLZBZQEBGQ"};
const app=initializeApp(firebaseConfig),auth=getAuth(app),fs=getFirestore(app);
const snap=s=>({id:s.id,exists:s.exists(),data:()=>s.data()});
const docRef=p=>{const r=doc(fs,p);return {get:async()=>snap(await getDoc(r)),set:d=>setDoc(r,d),delete:()=>deleteDoc(r),collection:c=>collRef(p+'/'+c)}};
const collRef=p=>({doc:id=>docRef(p+'/'+id),get:async()=>{const q=await getDocs(collection(fs,p));return {docs:q.docs.map(snap),size:q.size}}});
const F=window.LTFB={db:{doc:docRef,collection:collRef},user:null,
 async signIn(){const pr=new GoogleAuthProvider();pr.setCustomParameters({prompt:'select_account'});
  try{await signInWithPopup(auth,pr);F.log('login',{method:'Google'})}catch(e){if(e&&(e.code==='auth/popup-blocked'||e.code==='auth/operation-not-supported-in-this-environment'))return signInWithRedirect(auth,pr);throw e}},
 signOut:()=>signOut(auth),
 log(n,p){try{window.gtag&&gtag('event',n,p||{})}catch(e){}}};
let first=true;
onAuthStateChanged(auth,u=>{F.user=u?{id:u.uid,name:u.displayName||'',avatarUrl:u.photoURL||''}:null;
 if(first){first=false;window.__ltfbResolve&&window.__ltfbResolve()}else window.dispatchEvent(new Event('ltfb-auth'))});
