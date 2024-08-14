import React from 'react'
import "./Login.css"

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
					<p className="loginMsg">ログインはこちら</p>
					<input type="text" className="loginInput" placeholder="Eメール" />
					<input type="text" className="loginInput" placeholder="パスワード" />
					<button className="loginButton">ログイン</button>
					<span className="loginForgot">パスワードを忘れた方</span>
					<button className="loginRegisterButton">アカウント作成</button>
				</div>
			</div>
		</div>
	</div>
  )
}
