import React from 'react';

import ProductData from '../../Data/ExampleData/ProductData'

import Breadcrumb from '../../Blocks/Breadcrumb'

import "./ArrowsColorChange.css";
import StandardPageContainer from "../../Components/StandardPageContainer";
import SeeAlsoGallery from "../../Blocks/SeeAlsoGallery";
import ProductBlock from "../../Blocks/ProductBlock";

function ProductPage(props){

    return(
        <StandardPageContainer>
            <Breadcrumb />
            <ProductBlock />
            <SeeAlsoGallery />
        </StandardPageContainer>

    );

}

export default ProductPage
