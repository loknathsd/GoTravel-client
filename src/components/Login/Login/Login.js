import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ContextUser } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory,useLocation } from 'react-router-dom';


const app = initializeApp(firebaseConfig);

const Login = () => {
      const [user ,setUser] = useContext(ContextUser);
      console.log(app,user)

    const provider = new GoogleAuthProvider();
     const history=useHistory()
     const location = useLocation()

     let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const {displayName,email,photoURL} = result.user;
                const userInfo = {name:displayName,email,photoURL}
                setUser(userInfo)
                history.replace(from)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
            });
    }
    return (
        <div className='mt-5 pt-5'> 
            <div  className='btn-group  my-5 py-5 justify-content-center d-flex'>
                <button className='btn btn-outline-primary mb-5'><FontAwesomeIcon icon={faGoogle} size='2x'  /></button>
                <button onClick={handleGoogleSignIn} className='btn btn-primary btn-lg mb-5 '>SignIn With Google</button>
            </div>

        </div>
    );
};

export default Login;