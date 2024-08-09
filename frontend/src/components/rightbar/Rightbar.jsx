import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online"

export default function Rightbar() {
  return (
	<div className="rightbar">
    <div className="rightbarWrapper">
      <h4 className="rightbarTitle">オンラインの友達</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
            <Online user={user} key={user.id}/>
        ))}
      </ul>
    </div>
  </div>
  )
}
