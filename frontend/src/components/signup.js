import React , { useState }from "react";
import "./signup.css";

import { Link} from "react-router-dom";

function RegisterForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return(
        <div className="form-section">
                <div className="form-container">
                    <div className="col-md-6 col-12 form-box">
                        <h1>SIGN UP</h1>
                        <form>
                            <div className="mb-3 form-content">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name"></input>
                            </div>
                            <div className="mb-3 form-content">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email"></input>
                            </div>
                            <div className="mb-3 form-content">
                            <label htmlFor="password" className="form-label">Enter Password</label>
                            <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password"></input>
                            </div>
                            <div className="mb-3 form-content">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input className="form-control" type="password" id="password" name="cpassword" value={formData.cpassword} onChange={handleChange} placeholder="Confirm Password"></input>
                            </div>
                            <button type="submit" className="btn btn-dark btn-lg">SIGN UP</button>
                        </form>
                        <div className="new">Have an Account ? <Link to="/login" className="login"><span >Login</span></Link></div>
                    </div>
            </div>
        </div>
    )
}

export default RegisterForm;