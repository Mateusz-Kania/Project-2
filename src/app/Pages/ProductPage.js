import React from 'react';

import ProductData from '../Data/ExampleData/ProductData'

import Breadcrumb from '../Components/Breadcrumb'

import "../Components/ProductBlock/ArrowsColorChange.css";
import StandardPageContainer from "../Components/Layout/StandardPageContainer";
import SeeAlsoGallery from "../Components/SeeAlsoGallery";
import ProductBlock from "../Components/ProductBlock";
import PageLayout from "../Components/Layout/PageLayout";
import AffixMenu from "../Components/AffixMenu";
import CatalogGallery from "../Components/CatalogGallery";

function ProductPage(props){

    return(

        <PageLayout>
            <AffixMenu />
            <StandardPageContainer>
                <Breadcrumb />
                <ProductBlock />
                <SeeAlsoGallery />
            </StandardPageContainer>
        </PageLayout>

    );

}

export default ProductPage
