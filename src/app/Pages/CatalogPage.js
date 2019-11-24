import React from 'react'
import StandardPageContainer from "../Components/Layout/StandardPageContainer";
import CatalogGallery from "../Components/CatalogGallery";
import SeeAlsoGallery from "../Components/SeeAlsoGallery";
import Breadcrumb from "../Components/Breadcrumb"
import {connect} from "react-redux";
import PageLayout from "../Components/Layout/PageLayout";
import AffixMenu from "../Components/AffixMenu";

function CatalogPage(props){


    let {displaySize}=props;
    return(
        <PageLayout>
            <AffixMenu />
        <StandardPageContainer>
            <Breadcrumb />
            <CatalogGallery />
            <SeeAlsoGallery />
        </StandardPageContainer>
        </PageLayout>
    )
}


const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(CatalogPage);