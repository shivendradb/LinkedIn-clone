// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Make the User logged in till he logs out or something
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(login({
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          email: userAuth.email,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
