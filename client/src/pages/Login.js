import React from "react";
import style from "./Login.css"


function Login() {

    return (
        <div className="row" >
            <div className="col-6" >
                <div className="div-login">
                    <h2 className="signup">SignUp</h2>
                    <div className="linebreak"></div>
                    <input placeholder="Username" name="username" />
                    <input placeholder=" Password" name="password" />
                    <input placeholder=" Email Address" name="email" />
                    <button>Sign Up</button>
                </div >

            </div>
            <div className="col-6" >
                <div className="div-login1">
                    <h2 className="signup">Login</h2>
                    <div className="linebreak"></div>
                    <input placeholder="Email Address" name="email" />
                    <input placeholder="Password" name="password" />
                    <button>Login</button>
                </div >
            </div>
        </div>

    )
}


export default Login;
