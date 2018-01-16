import React from "react";
import "./LoginCard.css";

const LoginCard = () => (
    <div className="card center-align z-depth-4" id="loginCard">
        <h4 className="center-align black-text card-title">Sign Up</h4>
        <form action="/" method="post">
            <div className="form-group" id="userName">
                <input className="form-control validate" id="userName-input" name="userName" type="text" placeholder="Username" required/>
            </div>

            <div className="form-group" id="password">
                <input type="password" className="form-control validate" id="password-input" name="password" placeholder="Password" required/>
            </div>

            <button className="btn waves-effect waves-light red" id="loginSubmit">Login</button>
        </form>
    </div>
);

export default LoginCard;