import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { registerUser, googleSignIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conformPassword = e.target.conformPassword.value;
    console.log(name, email, password, conformPassword);

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    }
    if (password !== conformPassword) {
      setError("Password didn't match");
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password
      )
    ) {
      setError("Password must be at least one character like a, A, 1, @");
    }

    //register user in firebase
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //google sign in

  const handelGoogleSignIn = ()=>{
    googleSignIn()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error.message)
    })
    
    
  }

  return (
    <div className="max-w-[40%] mx-auto border border-red-500 mt-10 min-w-[500px] p-5 rounded-lg">
      <form onSubmit={handelRegister}>
        <div>
          <h1>Name:</h1>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="input w-full"
          />
        </div>
        <div>
          <h1>Email:</h1>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="input w-full"
          />
        </div>
        <div>
          <h1>Password:</h1>
          <input
            name="password"
            type="password"
            placeholder="Type password"
            className="input w-full"
          />
        </div>
        <div>
          <h1>Conform Password:</h1>
          <input
            name="conformPassword"
            type="password"
            placeholder="Conform Password"
            className="input w-full"
          />
        </div>
        <button className="btn btn-primary text-white font-bold w-full mt-2">
          Register
        </button>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </form>

      <button onClick={handelGoogleSignIn} className="btn btn-primary font-bold text-white w-full mt-2">Google SignIn</button>
    </div>
  );
};

export default Register;
