import React from 'react';

import {connect} from "react-redux";
import colorsData from '../Data/Static/ColorsData'
import Menu from './Others/Menu';
import Description from "./ProductBlock/Description";
import Comments from "./ProductBlock/Comments";
import Parameters from "./ProductBlock/Parameters";
import TextContainer from "./Others/TextContainer";
import SwitchingContent from "./Others/SwitchingContent";
import UserData from "./UserBlock/UserData";
import Observed from "./UserBlock/Observed";

function UserBlock(props){


    let {displaySize,defaultSelectedItem}=props;


    let displayHorizontal=displaySize==="tablet"||displaySize==="desktop";

    let container={
        padding:displayHorizontal ? 20 : '20px 0px',
        backgroundColor:colorsData.backgroundLight,
        textAlign:displayHorizontal?'left':'center',
    }

    let containerHeader={
        fontSize:32,
        lineHeight:1,
        margin:displayHorizontal ? '5px 10px 20px' : '5px 0 20px',
    };


    let menuItems= [
        {
            key:"data",
            name:"Dane",
        },
        {
            key:"observed",
            name:"Obserwowane",
        },
        {
            key:"history",
            name:"Historia Zamówień",
        }
    ];

    let initSelectedItem=defaultSelectedItem||menuItems[0].key;
    let [selectedItem,setSelectedItem]=React.useState(initSelectedItem);

    let menuSettings={
        menuItems:menuItems,
        itemClickedCallback:setSelectedItem,
        selectedItem:selectedItem
    };

    let switchingContentData={
        "data":<UserData/>,
        "observed":<Observed/>,
        "history":<span>history</span>,
    }

    let switchingContentSettings={
        heightAnimation:true,
        items:switchingContentData,
        activeKey:selectedItem
    }

    let switchingContentContainer={
        margin:displayHorizontal ? 20 : '20px 0',
    }



    return(
        <div style={container}>
            <div style={containerHeader}>Twoje Konto</div>
            <Menu center={!displayHorizontal} {...menuSettings} />
            <div style={switchingContentContainer}>
            <SwitchingContent {...switchingContentSettings}/>
            </div>
        </div>
    );
}

const mapStateToProps= state =>(
    {
        displaySize:state.displaySize
    }
)


export default connect(mapStateToProps)(UserBlock);