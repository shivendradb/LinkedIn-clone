import React from "react";
import "./SideBar.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function SideBar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      {/* TOP */}
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.png"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      {/* STATS/CENTER */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,536</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">536</p>
        </div>

        {/* BOTTOM */}
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("Jobs")}
          {recentItem("Programming")}
          {recentItem("React")}
          {recentItem("Developer")}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
