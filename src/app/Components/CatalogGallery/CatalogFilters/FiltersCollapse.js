import React from 'react'
import {Collapse} from "antd";
import TextContainer from "../../Others/TextContainer";
import colorsData from "../../../Data/Static/ColorsData"

function FiltersCollapse(props){

    let {defaultActive,title,style,contentHeight}=props;

    let initActive;

    if(defaultActive){
        initActive=["0"];
    }
    else{
        initActive=[];
    }


    return(
        <Collapse bordered={false} expandIconPosition="right" defaultActiveKey={initActive}>
            <Collapse.Panel style={{borderBottomWidth: 0 ,...style}} className="cb-smaller-panel" header={title} key={"0"}>
                <TextContainer  autoHeightMax={150} autoHeightMin={0} scroll height={"auto"}>
                    {props.children}
                </TextContainer>
            </Collapse.Panel>
        </Collapse>

    )
}

export default FiltersCollapse;