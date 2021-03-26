import React from 'react';
import "./Attendance.css"
class Attendance extends React.Component{
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
                <div className="grid-item form-box">
                    Attendance 
                    <form onSubmit = {this.handleSubmit} className="input">
                        <div className="text"><input type='username' name='username' placeholder="username" required onChange={this.handleChange}/></div>
                        <div className="text"><input type='passcode' name='passcode' placeholder="passcode" required onChange={this.handleChange}/></div>
                        <button className="submit-btn" onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Attendance;