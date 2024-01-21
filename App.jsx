import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from './Config/firebase';

function App() {
  const loginWithGoogle = () => {
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
   console.log('user', user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log("errorCode" , errorCode)
  });
  }


  const loginWithGithub = ()=>{
    const provider = new GithubAuthProvider();
    
 signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    console.log('user', user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error code', errorCode);
  });
  }

  return (
    <>
     <button onClick={loginWithGoogle}>Google</button>
     <button onClick={loginWithGithub}>Github</button>

    </>
  )
}

export default App
