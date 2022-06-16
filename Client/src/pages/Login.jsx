
import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import AuthService from "../services/AuthService";


function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setUser, setIsAuth } = useContext(AuthContext);

  const loginuser = (e) => {
    e.preventDefault();

    let data = {

      email: email,
      password: password,

    };

    AuthService.login(data).then((jsonData) => {

      if (jsonData.message==='errors connect'){
       alert("verifier votre email et mot de passe")

    }
      if (!jsonData.error) {
        setUser(jsonData.user);
        setIsAuth(jsonData.isAuthenticated);

        window.location.href = "/dashboard";
      } 
    });
  };



  return (
    <div className='inner_page login'>
      <div className="full_container">
        <div className="container">

          <div className=" verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
              <div class="center">
                <form onSubmit={loginuser}>
                  <fieldset>
                    <div className="field">
                      <label className="label_field">Email Address</label>
                      <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                      
                      />
                    </div>
                    <div className="field">
                      <label className="label_field">Password</label>
                      <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>

                    <div className="field margin_0">
                    
                      <button className="main_bt float-right">
                        Login
                      </button>
                    </div>
                  </fieldset>
                 
                </form> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
