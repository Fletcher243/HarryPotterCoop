import { signInWithGoogle } from './firebase'

const SignIn = () => {

  return <div>
    <button onClick={signInWithGoogle}>Sign In</button>
  </div>
}

export default SignIn
