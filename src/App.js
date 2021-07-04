import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import vecter from "./untitled.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="leftcontainer">
          <div className="leftcircle-top"></div>
          <div className="leftcircle-bottom"></div>

          <h1 className="header">DOOF</h1>


          <div className="between">
            <p className="login">Login</p>

            <div className="content">
              <p className="email">Email</p>
              <input className="inputdiv1" type="text" placeholder="Email" />


              <p className="passwordd">Password</p>
              <div className="pasword1">
                <input className="inputdiv2" type="text" placeholder="Password" />
                <p>Forgot Password</p>
              </div>

              <Button style={{ width: "420px", height: "50px", backgroundColor: "#F7D832", marginBottom: "50px", fontSize: "18px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }} variant="contained">Login</Button>

            </div>

            <div className="signup">
              <p>Don't have an account yet?</p>
              <spam><p>Signup</p></spam>
            </div>
          </div>

          <div className="footer">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>


        </div>



        <div className="rightcontainer">

          <Button style={{ width: "200px", height: "50px", backgroundColor: "#F7D832", marginBottom: "0px", fontSize: "18px", fontWeight: "600", position: "absolute", top: "75px", fontFamily: "'Montserrat', sans-serif", left: "1580px" }} variant="contained">Test</Button>

          <div className="data">
            <h1>Unlock your stuck revenue.</h1>
            <p>We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</p>
            <img className="image" src={vecter} alt="loding....." />
          </div>
          <div className="rightcircle"></div>

        </div>
      </div>
    </>
  );
}

export default App;
