import React , { Component } from "react";
import { TextField } from "material-ui";

const Input = (props) => {
    return (
        <div className="form-group">
            {/* <label htmlFor={props.name}>{props.title}</label> */}
            <br />
            <TextField
                className="form-input"
                id={props.name} 
                name={props.name} 
                type={props.type} 
                value={props.value} 
                floatingLabelText={props.title}
                onChange={props.handleChange} 
                hintText={props.placeholder} 
            />
        </div>
    )
}

export default Input