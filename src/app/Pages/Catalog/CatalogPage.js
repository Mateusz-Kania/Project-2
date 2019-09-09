import React from 'react'
import StandardPageContainer from "../../Components/StandardPageContainer";
import CatalogGallery from "../../Blocks/CatalogGallery";
import SeeAlsoGallery from "../../Blocks/SeeAlsoGallery";
import Breadcrumb from "../../Blocks/Breadcrumb"

function CatalogPage(props){


    return(
        <StandardPageContainer>
            <Breadcrumb />
            <CatalogGallery />
            <SeeAlsoGallery />
        </StandardPageContainer>
    )
}


export default CatalogPage;