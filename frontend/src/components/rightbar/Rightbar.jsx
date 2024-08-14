import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online"

export default function Rightbar({ profile }) {
  const HomeRightbar  =  () => {
    return (
      <>
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
              <Online user={user} key={user.id}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザ情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身：</span>
            <span className="rightbarInfoKey">福岡</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/1.jpeg"  alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg"  alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Tanaka</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/3.jpeg"  alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Kobayashi</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/4.jpeg"  alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Suzuki</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/5.jpeg"  alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Higashi</span>
            </div>
            
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar  /> : <HomeRightbar  />}
      </div>
    </div>
  )
}
