import GoogleButton from "react-google-button";
import { signInWithGoogle } from "../firebase/firebase";

export default function SignUpWIthGoogle() {
  return <GoogleButton onClick={signInWithGoogle} />;
}
