import { useState } from "react";
import Navbar from "../navbar";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return ( 
        <>
            <Navbar />
            <main>
                <form className="login">
                    <h1>Create an Account</h1>
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

                    <button>Create Account</button>
                </form>
            </main>
        </>
    );
};

export default Signup;