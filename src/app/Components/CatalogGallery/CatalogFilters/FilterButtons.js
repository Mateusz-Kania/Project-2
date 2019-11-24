import React from 'react'
import {Button} from "antd";

function filterButtons(props) {

    let {height,style,onClear,onSubmit}=props;

    if(!style){
        style={}
    }

    let containerStyle={
        position:'relative',
        height
    };
    let buttonsContainerStyle={
        position:'absolute',
        bottom:0,
        right:0,
        ...style
    };

    let buttonStyle={
        margin:4

    };

    return(
        <div style={containerStyle}>
            <div style={buttonsContainerStyle}>
                <Button style={buttonStyle} onClick={onClear} type="danger">Wyczyść</Button>
                <Button style={buttonStyle} onClick={onSubmit} type="primary">Filtruj</Button>
            </div>

        </div>
    )

}

export default filterButtons;