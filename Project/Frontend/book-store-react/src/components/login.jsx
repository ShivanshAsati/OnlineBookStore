import { Component, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser as loginUserApi } from "../services/user";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

//import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import profile from "/image/a.jpeg";
// import email from "../../public/image/goodemail.png";
// import pass from "../../public/image/pass.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   const dispatch = useDispatch();

  const loginUser = async () => {
    if (email.length == "") {
      toast.error("Please enter email");
    } else if (password.length == "") {
      toast.error("Please enter password");
    } else {
      // call register api
      const response = await loginUserApi(email, password);

      // parse the response
      if (response["status"] === "success") {
        const token1 = response["data"]["jwt"];
        const decodedToken = jwtDecode(token1);
        // Clog(decodedToken);
        console.log(decodedToken);
        // parse the response's data and extract the token
        // const { token, name, mobile, profileImage } = response["data"];

        // // store the token for making other apis
        // sessionStorage["token"] = token;
        // sessionStorage["name"] = name;
        // sessionStorage["mobile"] = mobile;
        // sessionStorage["profileImage"] = profileImage;

        // // update global store's authSlice with status = true
        // dispatch(login());

        // toast.success(`Welcome ${name} to store application`);

        // go back to login
        // navigate("/product-gallery");
      } else {
        toast.error("Invalid user name or password");
      }
    }
  };

  return (
    <div className="main" style={{ paddingTop: "200px" }}>
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img
                src="/image/mainBook.png"
                alt="profile"
                className="profile"
              />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div>
              <img
                src="/image/goodemail.png"
                alt="email"
                className="email"
                style={{ paddingLeft: "5px" }}
              />
              <input
                className="input1 name"
                type="text"
                placeholder="Email id"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="second-input">
              <img src="/image/pass.jpeg" alt="pass" className="email" />
              <input
                type="password"
                placeholder="Password"
                className="input1 name"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="login-button">
              <button className="button1" onClick={loginUser}>
                Login
              </button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or
              <a href="/login/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
