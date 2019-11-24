
import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
// import Button from "material-ui/Button";
import Input from "../components/Input";
import Button from "../components/Button";


export class UserData extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const email = this.props.email;
        const mobile_no = this.props.mobile_no;
        // const userData = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Your Details"></AppBar>
                    <ul>
                        <li>{email}</li>
                        <li>{mobile_no}</li>
                    </ul>
                    {/* <List>
                        <ListItem 
                            primaryText = "Email"
                        > {values.email} </ListItem>
                        <ListItem
                            primaryText="Mobile No"
                        >{values.mobile_no}</ListItem>
                    </List> */}
                    <Button
                        title={'Submit'}
                        action={this.continue}
                    />
                    <Button
                        title={'Back'}
                        action={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default UserData
