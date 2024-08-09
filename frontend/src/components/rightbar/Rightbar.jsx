import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData";

export default function Rightbar() {
  return (
	<div className="rightbar">
    <div className="rightbarWrapper">
      <h4 className="rightbarTitle">オンラインの友達</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/1.jpeg" alt="" className="rightbarProfileImg"/>
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Shin Code</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="assets/person/2.jpeg" alt=""  className="rightbarProfileImg"/>
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">Tanaka</span>
        </li>
      </ul>
    </div>
  </div>
  )
}
