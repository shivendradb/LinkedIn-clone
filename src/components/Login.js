import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    // Form Validation
    if (!name) {
      return alert("Please enter a full name");
    }
    if (!email) {
      return alert("Please enter a valid email");
    }
    if (!password) {
      return alert("Please enter a valid password");
    }

    // Create Register Functionality and then using dispatch (redux)
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        // Update the login credentials of the user with Name and Profile pic
        userAuth.user
          .updateProfile({ displayName: name, photoURL: profilePic })
          // Redux Dispatch
          .then(() => {
            dispatch(
              login({
                uid: userAuth.uid,
                displayName: name,
                email: userAuth.user.email,
                photoUrl: profilePic,
              })
            );
          });
      })
      //   Catch Error if any
      .catch((error) => alert(error));
  };

  const logintoApp = (e) => {
    e.preventDefault();

    // Sign in functionality with dispatch to redux
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            email: userAuth.user.email,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      //   Catch errors
      .catch((error) => alert(error));
  };
 
  return (
    <div className="login">
      <img
        className="login__img"
        src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG34.png"
        alt=""
      />

      <form>
        <input
          type="text"
          placeholder="Full Name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Picture URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={logintoApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
