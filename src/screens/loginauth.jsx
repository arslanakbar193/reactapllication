import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  UserOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Loginauth = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [allEntry, setallEnrty] = useState([]);

  // states for eyeicon changes and update type of password
  const [passwordShown, setPasswordShown] = useState(false);
  const [showImage,setshowImage] = useState(false);

  //password show and hide on eyeicon click
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
    setshowImage(!showImage);
  };

  const history = useHistory();
  
  // form submission
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { username: username, password: password };
    setallEnrty([...allEntry, newEntry]);
    if(username === "dezzex" && password === "1234"){
      history.push("/dashboard");
    }
    else{
      toast.error('Invalid Credentials', {
        position: toast.POSITION.TOP_RIGHT, autoClose:2000});
    }
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="bg">
          <div className="login-form">
            <div className="login-wrap">
              <h1 className="login-text">Login</h1>
              <div className="wrap-both">
                <div className="left-section">
                  <h1>Dezzex</h1>
                </div>
                <div className="right-section">
                  <div className="login-fields">
                    <UserOutlined />
                    <label htmlFor="user" name="user">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="user"
                      id="user"
                      placeholder="User Name"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div className="login-fields">
                  <button className="Invisible-bth" onClick={togglePassword}>{showImage ? <EyeOutlined/> : <EyeInvisibleOutlined/>}</button>
                    <label htmlFor="password">Password</label>
                    <input
                      type={passwordShown ? "text" : "password"} 
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <div className="login-btn">
                    <button type="submit">Login</button>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          <ToastContainer/>
        </div>
      </form>
    </>
  );
};

export default Loginauth;
