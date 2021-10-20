import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";



initializeAuthentication();

const useFirebse = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(loggedInUser)
            }).finally(() => setIsLoading(false))
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            }
            ).finally(() => setIsLoading(false))

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError("");
            }
            setIsLoading(false)
        });
    }, []);

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('please provide 6 character password')
            return;

        }
        if (! /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) {
            setError('please give a valid password of 8 character (include one latter & one number)');
            return;
        }
        isLogin ? processUser(email, password) : creatNewUser(email, password);

    }


    const creatNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();


            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }

    const processUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();

            })

            .catch((error) => {

                setError(error.message);
            });

    }

    const handleNameChange = e => {
        setName(e.target.value)
        // 

    }
    const handleNewEmail = e => {
        setEmail(e.target.value);

    }

    const handleNewPassword = e => {
        setPassword(e.target.value);
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result)

            });
    }
    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    return {
        user,
        error,
        isLogin,
        isLoading,
        handleGoogleSignIn,
        handleSignOut,
        handleRegistration,
        handleNameChange,
        handleNewEmail,
        handleNewPassword,
        toggleLogin,
        handleReset



    }



}

export default useFirebse;