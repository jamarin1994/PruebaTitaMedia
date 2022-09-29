import GoogleLogin from "react-google-login";
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const Login=()=>{
    const responseGoogle = (response) => {
        console.log("respLogin",response);
      }
    return(
        <div>
            <GoogleLogin
                clientId="13602906260-92lspvcmv8gm19kfijc7vo2m5bk7p8u3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
               
            />
        </div>
    )
}

export default Login;