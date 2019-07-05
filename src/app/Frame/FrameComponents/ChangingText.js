import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import Animate from 'rc-animate';


function ChangingText(props){

    let {changingTextData,size,shortText} = props;
    const [currentTextNumber,setCurrentTextNumber] = React.useState(0);
    const [show, setShow] = React.useState(true);
    const [hovered, setHovered] = React.useState(false);
    let timeoutMS = 5000;
    let self =this;

    if(size===undefined){
        size="default";
    }

    if(shortText===undefined){
        shortText=false;
    }


    React.useEffect(() => {
        let interval;
        let intervalExist=false;

        if(!hovered) {
            intervalExist=true;
            interval = setInterval(() => {
                setShow(false);
            }, timeoutMS);
        }

        return () => {
            if(intervalExist) {
                clearInterval(interval);
            }
        }
    },[hovered]);

    function appearCallback(exists){
        if(!exists){

            if((currentTextNumber+1)===changingTextData.length){
                setCurrentTextNumber(0);
            }
            else{
                setCurrentTextNumber(currentTextNumber+1);
            }

            setShow(true);
        }
    }

    function mouseEnterHandler(){
        setHovered(true);
    }

    function mouseLeaveHandler(){
        setHovered(false);
    }



    function handleClick(){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"CHANGING_TEXT",
                idValue:changingTextData[currentTextNumber].ID
            }});
    }

    let button = (
        <Button
            onClick={()=>handleClick()}
            block type="dashed" shape="round" ghost size={size}
            onMouseEnter={()=>mouseEnterHandler()}
            onMouseLeave={()=>mouseLeaveHandler()}
        >
            {shortText ? changingTextData[currentTextNumber].shortText : changingTextData[currentTextNumber].text}
        </Button>

    );
    return (
        <Animate
            transitionName="fade"
            transitionAppear
            onEnd={(string,exist)=>appearCallback(exist)}
        >
            {show ?
                button
                : null}
        </Animate>
    );
}


const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(ChangingText);