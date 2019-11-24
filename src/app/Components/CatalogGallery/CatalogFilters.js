import React from 'react'
import colorsData from "../../Data/Static/ColorsData"
import CategoriesMenu from "./CatalogFilters/CategoriesMenu";
import TextContainer from "../Others/TextContainer";
import Filter from "./CatalogFilters/Filter";
import FilterButtons from "./CatalogFilters/FilterButtons";

function CatalogFilters(props){

    let {style,filters,activeFilters,categoryTree,productsFoundInfo,currentOptions,onCurrentOptionsChange,selectedCategories,height}=props;

    activeFilters={...activeFilters,...currentOptions};

    let filterButtonsHeight=40;

    style=style||{};
    style.paddingTop=style.paddingTop||0;
    style.paddingBottom=style.paddingBottom||0;

    let containerStyle={
        backgroundColor:colorsData.backgroundLight,
        height,
        ...style
    };

    function setCurrentOptions(options){
        onCurrentOptionsChange(options);
    }


    function changeHandler(slug,options){
        setCurrentOptions((prevCurrentOptions)=>{return{...prevCurrentOptions,[slug]:{options:options}}});
    }


    let filterRef=React.useRef([]);//to sie moze bugowac tbh, need to keep eye on it

    function onClear(){
        filterRef.current.map((ref)=>{
            ref.turnOffCheckboxes();
        })
    }

    function onSubmit(){

        console.log(currentOptions)

    }



    return(
        <div style={containerStyle}>
            <TextContainer scroll autoHide height={height-(style.paddingTop+style.paddingBottom+filterButtonsHeight)}>
                <CategoriesMenu  categoryTree={categoryTree} productsFoundInfo={productsFoundInfo} selectedCategories={selectedCategories} />
                {filterRef.current=[]}
                {Object.keys(filters).map((key,index)=> {

                    if(filters[key].hidden||filters[key].hiddenFilter){
                        return ""
                    }

                    return(
                    <Filter key={key} slug={key} ref={(ref) => {ref&&filterRef.current.push(ref) }} onChange={changeHandler} filter={filters[key]} activeFilter={activeFilters[key]}/>
                    )})}

            </TextContainer>
            <FilterButtons onClear={onClear} onSubmit={onSubmit} height={40} />
        </div>
    )
}

export default CatalogFilters;
/*


 */