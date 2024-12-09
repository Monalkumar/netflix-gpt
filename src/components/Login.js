import React,{useState} from "react"
import Header from "./Header";

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
    }
 

  return (
    <div>
    <Header />
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg" alt="bgimage"/>
    </div>
    <form className= "absolute w-3/12 p-16 bg-black my-28 bg-opacity-75 right-0 left-0 mx-auto">
    <h2 className="font-bold text-white text-2xl py-3 px-3">{isSignInForm ? "SignIn" : "SignUp"}</h2>
    {!isSignInForm ? <input type="text" placeholder="Please enter name" className=" w-full text-white py-3 my-2 px-3 m-3 bg-gray-700 bg-opacity-65"/>: isSignInForm}
    <input type="email" placeholder="Email or Mobile number" className=" w-full text-white py-3 my-2 px-3 m-3 bg-gray-700 bg-opacity-65"/>
    <input type="password" placeholder="password" className=" w-full my-2 text-white p-3 m-3 bg-gray-700 bg-opacity-65"/>
    <button className="w-full bg-red-700 text-white py-5 px-2 my-2 m-2">Sign In</button>
    <p className="text-white text-sm w-full m-3" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Alreday registered? Sign In Now "}</p>
    </form>
    </div>
  );
};

export default Login;
