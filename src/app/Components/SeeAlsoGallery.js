import React from 'react'
import ProductsContainer from "./Others/ProductsContainer";
import SeeAlsoButtons from "./Others/SeeAlsoButtons";
import colorsData from "../Data/Static/ColorsData";
import {connect} from "react-redux";

function SeeAlsoGallery(props){

    let {seeAlsoData,displaySize}=props;


    let seeAlsoDivContainer={
        marginTop:'22px',
        width:'100%'
    };

    let seeAlsoDiv={
        backgroundColor:colorsData.backgroundLight,
        fontSize:'28px',
        padding:'12px',
        marginTop:'10px',
        display:'inline'

    };

    return(
        <span>
        <div style={seeAlsoDivContainer}>
            <div style={seeAlsoDiv}>
                Zobacz również:
            </div>
        </div>
            <ProductsContainer wider={displaySize!=="desktop"} products={seeAlsoData.recommendedProducts}>
            <SeeAlsoButtons categories={seeAlsoData.recommendedCategories} />
            </ProductsContainer>
        </span>
    )

}

const mapStateToProps= state =>(
    {
        displaySize:state.displaySize,
        seeAlsoData:state.seeAlsoData,
    }
);

export default connect(mapStateToProps)(SeeAlsoGallery);
