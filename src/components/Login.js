import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [err, setErr] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBttonClick = () => {
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErr(message);
  };

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg"
          alt="bgimage"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-4/12 p-16 bg-black my-28 bg-opacity-75 right-0 left-0 mx-auto"
      >
        <h2 className="font-bold text-white text-3xl py-3 px-3">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h2>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Please enter name"
            ref={name}
            className=" w-full text-white py-3 my-2 px-3 m-3 bg-gray-700 bg-opacity-65 rounded-sm"
          />
        ) : (
          isSignInForm
        )}
        <input
          type="email"
          placeholder="Email or Mobile number"
          className=" w-full text-white py-3 my-2 px-3 m-3 bg-gray-700 bg-opacity-65 rounded-sm"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className=" w-full my-2 text-white p-3 m-3 bg-gray-700 bg-opacity-65 rounded-sm"
          ref={password}
        />
        <div>
          <p className="text-lg text-red-700">{err}</p>
        </div>
        <button
          className="w-full bg-red-700 text-white py-2 px-2 m-3 p-3 rounded-sm"
          onClick={handleBttonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm" onClick={handleBttonClick}>
          Please use correct password
        </p>
        <p className="text-white text-sm w-full m-3" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Alreday registered? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
