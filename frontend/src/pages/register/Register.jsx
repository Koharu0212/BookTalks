import React from 'react'
import "./Register.css"

export default function Login() {
  return (
	<div className="login">
		<div className="loginWrapper">
			<div className="loginLeft">
				<h3 className="loginLogo">Book Talks</h3>
				<span className="loginDesc">読んだ本を共有しよう</span>
			</div>
			<div className="loginRight">
				<div className="loginBox">
					<p className="loginMsg">新規登録はこちら</p>
					<input type="text" className="loginInput" placeholder="ユーザ名" />
					<input type="text" className="loginInput" placeholder="Eメール" />
					<input type="text" className="loginInput" placeholder="パスワード" />
					<input type="text" className="loginInput" placeholder="確認用パスワード" />
					<button className="loginButton">サインアップ</button>
					<button className="loginRegisterButton">ログイン</button>
				</div>
			</div>
		</div>
	</div>
  )
}
