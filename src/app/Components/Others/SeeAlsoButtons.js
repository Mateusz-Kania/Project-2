import React from 'react';
import {Button} from "antd";
import OtherProductsCarousel from "./ProductsContainer";

function SeeAlsoButtons(props){

    let {categories}=props;

    function categoryCLickHandler(categorySlug){

        let pageInfo={
            pageType:"catalog",
            categorySlug
        }
    }

    let categoryDivStyle={
        textAlign:'center',
        marginTop:10,

    };

    let buttonStyle={
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        width:250
    }

    function mapCategoryButtons(category,index){
        return(
            <Button key={index} size="large" style={buttonStyle} type="primary" onClick={()=>{console.log(category.slug)}}>{category.text}</Button>
        )
    }


    return(


        <div style={categoryDivStyle}>
            {categories.map(mapCategoryButtons)}
        </div>

    );

}



export default SeeAlsoButtons;