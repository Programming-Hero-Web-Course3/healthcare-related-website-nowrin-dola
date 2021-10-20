import React from 'react';
import useFirebse from '../../../Hooks/useFirebase';

const Login = () => {

    const { handleRegistration, isLogin, handleNameChange, handleNewEmail, handleNewPassword, toggleLogin, error, handleReset, user, handleGoogleSignIn, handleSignOut } = useFirebse();
    return (
        <div className="mx-5 w-50 my-5">


            {!user?.displayName ?
                <form onSubmit={handleRegistration}>
                    <h3 className='text-primary'>Please {isLogin ? 'login' : 'Register'}</h3>
                    {!isLogin && <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>}
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleNewEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">Please provide a valid email address</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onBlur={handleNewPassword} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input onChange={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Already Registered?</label>
                    </div>
                    <div>{error}</div>
                    <div className='d-flex '>
                        <button type="submit" className="btn btn-primary m-2"> {isLogin ? 'login' : 'Register'}</button> <br /> <br />
                        <button type="submit" onClick={handleReset} className="btn btn-primary m-2"> Reset Password</button>
                    </div>
                </form> :
                <h3> welcome {user?.displayName}</h3>}


            <br /> <br /> <br />
            {!user?.name ?
                <div>
                    <button className='btn btn-danger m-2' onClick={handleGoogleSignIn}>Google signIn</button>

                </div> :
                <h3> welcome {user?.displayName}</h3>

            }


            <br />


            {
                user?.name && <div>
                    <h2>welcome {user?.name}</h2>
                    <img src={user?.photo} alt="" srcset="" />



                </div>
            }
        </div>
    );
};

export default Login;