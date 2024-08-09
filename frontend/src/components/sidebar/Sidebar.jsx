import React from 'react';
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from "@mui/icons-material";
import "./Sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
	<div className="sidebar">
		<div className="sidebarWrapper">
			<ul className="sidebarList">
				<li className="sidebarListItem">
					<Home className="sidebaarIcon"  />
					<span className="sidebarListItemText">ホーム</span>
				</li>
				<li className="sidebarListItem">
					<Search className="sidebaarIcon"  />
					<span className="sidebarListItemText">検索</span>
				</li>
				<li className="sidebarListItem">
					<Notifications className="sidebaarIcon"  />
					<span className="sidebarListItemText">通知</span>
				</li>
				<li className="sidebarListItem">
					<MessageRounded className="sidebaarIcon"  />
					<span className="sidebarListItemText">メッセージ</span>
				</li>
				<li className="sidebarListItem">
					<Bookmark className="sidebaarIcon"  />
					<span className="sidebarListItemText">ブックマーク</span>
				</li>
				<li className="sidebarListItem">
					<Person className="sidebaarIcon"  />
					<span className="sidebarListItemText">プロフィール</span>
				</li>
				<li className="sidebarListItem">
					<Settings className="sidebaarIcon"  />
					<span className="sidebarListItemText">設定</span>
				</li>
			</ul>
			<hr className="sidebarHr" />
			<ul className="sidebarFriendList">
				{Users.map((user) => (
					<CloseFriend user={user} key={user.id} />
				))}
			</ul>
		</div>
	</div>
  );
}
