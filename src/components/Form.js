import React , {Component} from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import UserData from "../components/UserData";
import Success from '../components/Success';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Typography from "material-ui/styles/typography";
import { AppBar } from "material-ui";


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step : 1,
            email: "",
            mobile_no: "",
            email_error : " ",
            mobile_no_error : null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        const {step} = this.state;
        this.setState({
            step : step + 1
        })
    }

    prevStep() {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    validate(){
        // let fields = this.state.newUser;
        // let errors = {};
        let formIsValid = true;

        //Email
        if(this.state.email == " " || this.state.mobile_no == " "){
           formIsValid = false;
           this.setState({ email_error: "Cannot be Empty!" , mobile_no_error : "Cannot be Empty"});
        }

            if (typeof (this.state.email) !== "undefined") {
                let lastAtPos = this.state.email.lastIndexOf('@');
                let lastDotPos = this.state.email.lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                    formIsValid = false;
                    this.setState({ email_error: "Email is not valid " })
                }
            } 
            if (typeof (this.state.mobile_no) !== "undefined") {
                if (!(this.state.mobile_no.match(/^[0-9]{10}$/))) {
                    formIsValid = false;
                    this.setState({ mobile_no_error: "Please enter valid mobile no!"})
                }
            }

    //    this.setState(email_error);
       return formIsValid;
   }

    handleSubmit(e) {
        e.preventDefault();
        // this.nextStep();

        // let userData = this.state.newUser;
        const isValid = this.validate();
        if(isValid) {
            console.log(this.state.email);
            console.log(this.state.mobile_no);
            this.nextStep();
        }
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser : {
                email : "",
                mobile_no : ""
            }
        })
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({ [name] : value })
        // this.setState(prevState => ({
        //     newUser:
        //     {
        //         ...prevState.newUser, [name]: value
        //     }
        // }))
    }
    render() {
        const { step } = this.state;
        const userData = this.state.newUser;

        switch(step) {
            case 1 : return (
                        <MuiThemeProvider>
                            <React.Fragment>
                                <AppBar title="Enter your Details" />
                                <form className="container" onSubmit={this.handleSubmit}>
                                    <Input
                                        type={'email'}
                                        title={'Email'}
                                        name={'email'}
                                        value={this.state.email}
                                        placeholder={'Enter your email'}
                                        handleChange={this.handleInput}
                                    />
                                    {this.state.email_error ? (
                                        <div style={{ fontSize: '12px', color: 'red' }}>
                                            {this.state.email_error}
                                        </div>
                                    ) : null}
                                    <Input
                                        type={'tel'}
                                        title={'Mobile'}
                                        name={'mobile_no'}
                                        value={this.state.mobile_no}
                                        placeholder={'Enter your Mobile no'}
                                        handleChange={this.handleInput}
                                    />
                                    {this.state.mobile_no_error ? (
                                        <div style={{ fontSize: '12px', color: 'red' }}>
                                            {this.state.mobile_no_error}
                                        </div>
                                    ) : null}
                                    <Button
                                        title={'Submit'}
                                        action={this.handleSubmit}
                                    />
                                    <Button
                                        title={'Clear Form'}
                                        action={this.handleClearForm}
                                    />
                                </form>            
                            </React.Fragment>
                        </MuiThemeProvider>
            )
            case 2 : return (
                <UserData 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    email = {this.state.email}
                    mobile_no = {this.state.mobile_no} />
            )
            case 3 : return (
                <Success />
            )
        }
    }
}
export default Form