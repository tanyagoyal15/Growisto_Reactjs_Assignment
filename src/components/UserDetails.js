
import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import Button from "./Button";


export class UserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Your Details"></AppBar>
                    <List>
                        <ListItem 
                            primaryText = "Email"
                            secondaryText = {values.email}
                        />
                        <ListItem
                            primaryText="Mobile No"
                            secondaryText = {values.mobile_no}
                        />
                    </List>
                    <Button
                        title={'Submit'}
                        action={this.continue}
                    />
                    <Button
                        title={'Edit'}
                        action={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default UserDetails
