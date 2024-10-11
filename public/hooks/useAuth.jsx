import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../src/Firebase/firebase.config";

function useAuth() {
  const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Login error:", error);
      throw error; 
    }
  };

//   const loginWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       return result.user;
//     } catch (error) {
//       console.error("Google login error:", error);
//       throw error; 
//     }
//   };

//   const signup = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       return userCredential.user; 
//     } catch (error) {
//       console.error("Signup error:", error);
//       throw error; 
//     }
//   };

//   return { login, signup, loginWithGoogle };
  return login
}

export default useAuth;
