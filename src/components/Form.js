import React , {Component} from "react";
import Register from "./Register";
import UserDetails from "./UserDetails";
import FormSubmitted from './FormSubmitted';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step : 1,
            email: "",
            mobile_no: "",
            email_error : " ",
            mobile_no_error : " "
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
            email_error : " ",
            mobile_no_error : " "
        })
    }

    validate = () => {
        let formIsValid = true;

        if(!(this.state.email)){
           formIsValid = false;
           this.setState({ email_error : "Cannot be Empty!"});
        }

        else if (typeof (this.state.email) !== "undefined") {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                this.setState({ email_error: "Email is not Valid!" })
            }
        } 

        if (!(this.state.mobile_no)) {
            formIsValid = false;
            this.setState({ mobile_no_error : "Cannot be Empty!" });
        }

        else if (typeof (this.state.mobile_no) !== "undefined") {
            if (!(this.state.mobile_no.match(/^[0-9]{10}$/))) {
                formIsValid = false;
                this.setState({ mobile_no_error: "Please Enter a Valid Mobile No!"})
            }
        }

       return formIsValid;
   }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid) {
            this.nextStep();
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState({ [name] : value })
    }


    render() {
        const { step, email, email_error, mobile_no, mobile_no_error } = this.state;
        const values = { email, email_error, mobile_no, mobile_no_error } 
        
        switch(step) {
            case 1 : return (
                <Register
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    values = {values}
                />
            )
            case 2 : return (
                <UserDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
            )
            case 3 : return (
                <FormSubmitted />
            )
        }
    }
}
export default Form