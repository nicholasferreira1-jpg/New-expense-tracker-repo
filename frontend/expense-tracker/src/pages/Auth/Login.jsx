import React, { useState } from 'react';
import AuthLayout from "../../components/layouts/AuthLayout";
import {Link, useNavigate} from "react-router-dom";
import Input from  "../../components/layouts/Inputs/Input";
import {validateEmail} from "../../utils/helper";


const Login = () =>{
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    
    //Handle Login Form Submit
    const handleLogin = async (e) => {
      e.preventDefault();
// This is making sure when the user enter a incorrect email the code doesn't brake
// Instead of breaking it will return a message to enter a valid email
      if(!validateEmail(emial)) {
        setError("Please emter a valid email address.");
        return;
      }
// Same With the password      
      if(!password) {
        setError("}lease enter the password");
        return;
      }

      setError("");

      //Login API Call
    }

  return(
    <AuthLayout>
     <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
            <p className="text-xs text-slate-7-- mt-[5px} mb-">
                Please enter your login so i can steal your money
            </p>

            <form onSubmit={handleLogin}>
              <Input
                value={email}
                onChange={({target}) => setEmail(target.value)}
                label="Email Address"
                placeholder="NicholasFerreira@him.com"
                type="text"
                />

                <Input
                value={password}
                onChange={({target}) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 characters"
                type="password"
                />

                {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

                <button type="submit" className="btn-primary">
                  LOGIN
                </button>

                <p className="text-[13px] text-slate-800 mt_3">
                  Don't have an account?{""}
                  <Link className="font-medium text-primary underline" to="/signup">
                    SignUp
                  </Link>
                </p>
            </form>
        </div>
    </AuthLayout>
  )
}
/* Try to add a phone number later
                <Input
                value={PhoneNumber}
                onChnage={({target}) => setPhoneNumber(target.value)}
                label="Phone Number"
                placeholder="(000) 000-0000"
                type="phone number"
                />
                */

                /*

                add an option to automatically sign in with an exisistant email account
                oauthentication
                */

export default Login