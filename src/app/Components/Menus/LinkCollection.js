import React from 'react';
import {connect} from 'react-redux';

import lPTopLinksData from "../../Data/Static/LPTopLinksData"

function LinksCollection(props){

    let {side=null}=props;

    let spanStyle={
    };

    let spanLinkStyle = {
       marginLeft:'5px',
       marginRight:'5px'
    };

    function handleLinkClick(payload){


        console.log(payload);
    }

    let linkArray;

    if(!side){
        linkArray=[...(lPTopLinksData.left),...(lPTopLinksData.right)]
    }
    else if(side==="left"){
        linkArray=lPTopLinksData.left
    }
    else{
        linkArray=lPTopLinksData.right
    }

    return (
            <span style={spanStyle}>
                {linkArray.map((link,index)=>(
                    <a onClick={()=>handleLinkClick(link.payload)} style={spanLinkStyle} key={index}>
                        {link.text}
                    </a>
                ))}
            </span>
    );
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(LinksCollection);