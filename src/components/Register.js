import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Input from "./Input";
import Button from "./Button";


export class Register extends Component {
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Register" />
                    <form className="container" onSubmit={this.props.handleSubmit}>
                        <Input
                            type={'email'}
                            title={'Email'}
                            name={'email'}
                            value={values.email}
                            placeholder={'Enter your email'}
                            handleChange={this.props.handleChange}
                        />
                        {values.email_error ? (
                            <div style={{ fontSize: '15px', color: 'red' }}>
                                {values.email_error}
                            </div>
                        ) : null}
                        <Input
                            type={'tel'}
                            title={'Mobile'}
                            name={'mobile_no'}
                            value={values.mobile_no}
                            placeholder={'Enter your Mobile no'}
                            handleChange={this.props.handleChange}
                        />
                        {values.mobile_no_error ? (
                            <div style={{ fontSize: '15px', color: 'red' }}>
                                {values.mobile_no_error}
                            </div>
                        ) : null}
                        <Button
                            title={'Register'}
                            action={this.props.handleSubmit}
                        />
                    </form>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Register
