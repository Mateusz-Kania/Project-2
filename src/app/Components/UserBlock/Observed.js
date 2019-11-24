import React from 'react'
import colorsData from "../../Data/Static/ColorsData";
import {connect} from "react-redux";
import CatalogProductContainer from "../CatalogGallery/CatalogProductContainer";

let Observed=(props)=>{

    let initRequestedResult=0;
    let {observedItems,displaySize}=props;

    let [requestedResult,setRequestedResult]=React.useState(initRequestedResult);

    let displayHorizontal=displaySize==="tablet"||displaySize==="desktop";

    let [pcWidth,setPcWidth]=React.useState(0);

    let container={
        margin:'30px auto'
    }

    let header={
        fontSize:24,
        marginBottom:20,
    }

    let handleClosePressed=(id)=>{
        console.log(id);
    }

    let itemsData={};

    itemsData.products=observedItems.products.map((object)=>(
        {
            ...(object.item),
            type:object.type,
            closeButton:true,
            onClosePressed:()=>{handleClosePressed(object.id)}
        }
    ))

    itemsData.productsFoundInfo=observedItems.productsFoundInfo;
    itemsData.currentLoadedInfo=observedItems.currentLoadedInfo;

    let checkPcWidth=()=>{
        let pageWidth=window.screen.width>1200 ? 1200 : window.screen.width;
        let newPcWidth= displayHorizontal? pageWidth-80 : pageWidth;
        setPcWidth(newPcWidth);
    }

    React.useEffect(()=>{
        checkPcWidth();
        window.addEventListener("resize",checkPcWidth);
        return(
            ()=>{
                window.removeEventListener("resize",checkPcWidth);
            }
        )
    },[])


    return(
        <div style={container}>
                <div style={header}>
                    Obserwowane
                </div>
            <div style={{width:'100%'}}>
            <CatalogProductContainer filtersExist={false} width={pcWidth} foundProducts={itemsData} requestedResult={requestedResult} onRequestedResultChange={setRequestedResult} />
            </div>

        </div>
    )
}

let mapStateToProps = (state)=>(
    {
        displaySize:state.displaySize,
        observedItems:state.observedItems
    }
)

export default connect(mapStateToProps)(Observed);