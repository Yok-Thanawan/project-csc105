import React from 'react';
import { MdPerson, MdHttps } from "react-icons/md";
import "./Login.css"
class Login extends React.Component{
    state={
        username:'',
        password:''
    }
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }
    render(){
        return(
            <div className="gridbox">
                <div class="grid-item head">
                Employee System  
                </div>
                <div className="grid-item form-box">
                    Login
                    <form onSubmit = {this.handleSubmit} className="input">
                        <div className="text"><MdPerson /><input type='username' name='username' placeholder="username" required onChange={this.handleChange}/></div>
                        <div className="text"><MdHttps /><input type='password' name='password' placeholder="password" required onChange={this.handleChange}/></div>
                        <button className="submit-btn" onSubmit={this.handleSubmit}>log in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;