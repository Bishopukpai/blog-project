import { useState } from "react";
import Navbar from "../navbar";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return ( 
        <>
            <Navbar />
            <main>
                <form className="login">
                    <h1>Login to your Account</h1>
                    <input type="text" placeholder="username" />

                    <div className="password-wrapper">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="enter a strong password" 
                        />
                        <span onClick={togglePassword} className="toggle-password">
                            {showPassword ? "Hide Password" : "Show Password"}
                        </span>
                    </div>

                    <button>Login</button>
                </form>
            </main>
        </>
    );
};

export default Login;