import './Registration.css';

function Registration() {
    return (
        <div className="main">
            <div className="sub-main">

                <div>
                    <h2>Registration</h2>
                    <div className="second-input">
                        <input  type="text" placeholder="Full name" className="name" />
                    </div>
                    <div className="second-input">
                        <input type="text" placeholder="Email" className="name" />
                    </div>
                    <div className="second-input">
                        <input type="text" placeholder="Phone" className="name" />
                    </div>
                    <div className="second-input">

                        <input type="" placeholder="Date of birth" className="name" />
                    </div>
                    <div className="second-input">

                        <input type="text" placeholder="Address" className="name" />
                    </div>
                    <div className="second-input">

                        <input type="password" placeholder="Password" className="name" />
                    </div>
                    <div className="second-input">

                        <input type="password" placeholder="Confirm Password" className="name" />
                    </div>

                    <div className="login-button">
                        <button>Registration</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Registration;