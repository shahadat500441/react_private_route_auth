const Register = () => {

    const handelRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conformPassword = e.target.conformPassword.value;
        console.log(name,email,password,conformPassword)
    }
  return (
    <div className="max-w-[40%] mx-auto border border-red-500 mt-10 min-w-[500px] p-5 rounded-lg">
      <form onSubmit={handelRegister}>
        <div>
          <h1>Name:</h1>
          <input name="name" type="text" placeholder="Your name" className="input w-full" />
        </div>
        <div>
          <h1>Email:</h1>
          <input name="email" type="email" placeholder="Email Address" className="input w-full" />
        </div>
        <div>
          <h1>Password:</h1>
          <input name="password" type="password" placeholder="Type password" className="input w-full" />
        </div>
        <div>
          <h1>Conform Password:</h1>
          <input name="conformPassword" type="password" placeholder="Conform Password" className="input w-full" />
        </div>
        <button className="btn btn-primary text-white font-bold w-full mt-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
