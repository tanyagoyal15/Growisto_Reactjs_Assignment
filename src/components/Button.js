import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const style = {
    button : {
        margin: 40 
    }
}
const Button = (props) => {
    return (
        <RaisedButton
            primary = {true}
            style={style.button}
            onClick={props.action}>
            {props.title}
        </RaisedButton>
    )
}

export default Button;