import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null) ;

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }

    // Observe auth state change   
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            setloading(false);
            ('observing', currentUser);
        });

        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = { user, loading, createUser,signInUser,  logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}