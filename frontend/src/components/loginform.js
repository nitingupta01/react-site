import React, { useState } from "react";
import "./loginform.css";
import {Link} from "react-router-dom";

function LoginForm(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    return(
        <div className="form-section">
                <div className="form-container">
                    <div className="col-md-6 col-12 form-box">
                        <h1>SIGN IN</h1>
                        <form>
                            <div className="mb-3 form-content">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email"></input>
                            </div>
                            <div className="mb-3 form-content">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password"></input>
                            </div>
                            <button type="submit" className="btn btn-dark btn-lg ">LOGIN</button>
                        </form>
                        <div className="new">New User ? <Link to="/register" className="register"><span >Register</span></Link></div>
                    </div>
            </div>
        </div>
    )
}

export default LoginForm;