import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider"; 

function useAuth() {
  const authDets = useContext(AuthContext); 
  return authDets;
}

export default useAuth;
