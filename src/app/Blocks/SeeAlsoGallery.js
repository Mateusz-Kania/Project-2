import React from 'react'
import ProductsContainer from "../Components/ProductsContainer";
import SeeAlsoButtons from "../Components/SeeAlsoButtons";
import colorsData from "../Data/ColorsData";
import {connect} from "react-redux";

function SeeAlsoGallery(props){

    let {seeAlsoData}=props;


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
            <ProductsContainer recommendedProducts={seeAlsoData.recommendedProducts}>
            <SeeAlsoButtons categories={seeAlsoData.recommendedCategories} />
            </ProductsContainer>
        </span>
    )

}

const mapStateToProps= state =>(
    {
        seeAlsoData:state.seeAlsoData,
    }
);

export default connect(mapStateToProps)(SeeAlsoGallery);
