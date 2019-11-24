import React from 'react'
import {connect} from "react-redux";
import CatalogGalleryView from "./CatalogGallery/CatalogGalleryView";

import categoriesTree from "../Data/Static/CategoriesTree"

function CatalogGallery(props){

    let {foundProducts,activeFiltersData,categoryData}=props;
    let catalogInfoSettings={
        name:categoryData.name,
        description:categoryData.description
    }

    let [currentOptions,setCurrentOptions]=React.useState({});
    let [requestedResult,setRequestedResult]=React.useState(0);

    React.useEffect(()=>{
        console.log("Aktualizacja wyników")
    },[requestedResult]);


    let catalogProductsContainerSettings={
        requestedResult:requestedResult,
        onRequestedResultChange:setRequestedResult,
        activeFilters:activeFiltersData.activeFilters,
        filters:categoryData.filters,
        foundProducts:foundProducts
    }


    let catalogFilterSettings={
        currentOptions,
        onCurrentOptionsChange:setCurrentOptions,
        activeFilters:activeFiltersData.activeFilters,
        filters:categoryData.filters,
        categoryTree:categoriesTree.categoryTree,
        productsFoundInfo:foundProducts.productsFoundInfo,
        selectedCategories:[activeFiltersData.activeFilters["CATEGORY"].options[0].value]
    }

    let catalogControlsSettings={
        initObserved:activeFiltersData.observed,
        initSort:activeFiltersData.sort,
        sortOptionsArray:
            [
                {
                    slug:'domyslnie',
                    text:'domyślnie',
                },
                {
                    slug:'najtansze',
                    text:'najtańsze',
                },
                {
                    slug:'najdrozsze',
                    text:'najdroższe',
                },
                {

                    slug:'najlepiej-oceniane',
                    text:'najlepiej oceniane',
                },

            ],
    };

    let settings={
        catalogInfoSettings,catalogProductsContainerSettings,catalogFilterSettings,catalogControlsSettings
    }

    return(
        <CatalogGalleryView settings={settings} />
    )
}


const mapStateToProps= state=>(
    {
        categoryData:state.categoryData,
        foundProducts:state.foundProducts,
        activeFiltersData:state.activeFiltersData,
        categoriesTree:state.categoriesTree,
    }
);

export default connect(mapStateToProps)(CatalogGallery);