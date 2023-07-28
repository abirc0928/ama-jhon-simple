import './LoginUi.css';
import profile from "./image/a.png";
import { Link } from 'react-router-dom'
function LoginUi() {
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div>

                        <div>
                            <input type="text" placeholder="Email" className="name" />
                        </div>
                        <div className="second-input">

                            <input type="password" placeholder="Password" className="name" />
                        </div>
                        <div className="login-button">
                            <button>Login</button>
                        </div>
                        <p>Or</p>
                        <div className="login-button">
                            <Link to="/registration">
                                <button>Registration</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginUi;