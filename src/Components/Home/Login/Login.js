import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { userContext } from "../../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const history = useHistory();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setIsLoggedIn(result.user);
        history.replace(from);
      });
  };

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn("");
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto mt-4 mb-2">
                {!isLoggedIn ? (
                  <>
                    <button
                      onClick={handleGoogleLogin}
                      className="btn brand-btn"
                    >
                      Sign In With Google
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={handleLogOut} className="btn brand-btn">
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
