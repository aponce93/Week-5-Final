import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = ({ setUser }) => {
  const handleSuccess = (response) => {
    console.log("Login Success:", response);
    setUser(response.credential);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="316980793575-egqv4qt8jsnp9hu72ep1iu6ujip3ha5h.apps.googleusercontent.com">
      <div>
        <h1>Login</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;