import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
// import Button from "material-ui/Button";
import Input from "../components/Input";
import Button from "../components/Button";


export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values , handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Your Details"></AppBar> 
                    <Input
                        type={'email'}
                        title={'Email'}
                        name={'email'}
                        // label={'Email'}
                        value={values.email}
                        placeholder={'Enter your email'}
                        handleChange={this.handleChange}
                    />
                    <br/>
                    <Input
                        type={'tel'}
                        title={'Mobile'}
                        name={'mobile_no'}
                        value={values.mobile_no}
                        placeholder={'Enter your Mobile no'}
                        handleChange={this.handleChange}
                    />
                    <br />
                    <Button
                        title={'Continue'}
                        action={this.continue}
                    />
                    {/* <Button
                        title={'Clear'}
                        action={this.handleClearForm}
                    /> */}
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
