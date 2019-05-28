
import React from 'react';
import 'antd/dist/antd.css';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


class LogIn extends React.Component{

    state = {
        username: "",
        password: "",
    }

    // changes the stored username in state based on user input
    changeUsername = (input) => {
        this.setState({
            username: input
        })
    }

    // changes the stored password in state based on user input
    changePassword = (input) => {
        this.setState({
            password: input
        })
    }

    // if they enter info and login... 
    handleLogIn = () => {

    }

    createAccount = () => { // push data onto firebase

    }
    
    render(){

        return(
            <div className="login">
            <h1>Pomodoro App</h1>
            <Form onSubmit={this.handleLogIn} className="login-form">
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        onChange={(e)=>this.changeUsername(e.target.value)}
                    />

                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>this.changePassword(e.target.value)}
                    />

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                    <div>Don't Have an Account? Create one now!</div>
                    <Button type="secondary" onClick={this.createAccount}>Register</Button>

            </Form>


            </div>
        )
    }

}

export default LogIn;

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LogIn);

// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));
          