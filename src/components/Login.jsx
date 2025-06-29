import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

    const { signInUser}= useContext(AuthContext)
    const handelLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        //sign in user in firebase
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    return (
       <div className="max-w-[40%] mx-auto border border-red-500 mt-10 min-w-[500px] p-5 rounded-lg">
      <form onSubmit={handelLogin}>
        <div>
          <h1>Email:</h1>
          <input name="email" type="email" placeholder="Email Address" className="input w-full" />
        </div>
        <div>
          <h1>Password:</h1>
          <input name="password" type="password" placeholder="Type password" className="input w-full" />
        </div>
        <button className="btn btn-primary text-white font-bold w-full mt-2">Login</button>
      </form>
    </div>
    );
};

export default Login;