import React from 'react';
import ProductCardBig from "./ProductCardBig"
import {Row,Col} from 'antd'
import colorsData from "../Data/ColorsData"
import {connect} from "react-redux";


function ProductsContainer(props){
    let {recommendedProducts,displaySize} = props;

    let productCount=recommendedProducts.length;

    let colStyle={
        margin:4
    };

    let productCardStyle={
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
    };

    let colSettings={

    };
    if(displaySize==="tablet"||displaySize==="medium"){
        colSettings={
            ...colSettings,
        }
    }

    function mapProducts(product,index) {

        return (
            <Col key={index} style={colStyle} {...colSettings}>
            <ProductCardBig style={productCardStyle} initialZIndex={(productCount-index)*2} product={product}/>
            </Col>
        );
    }


    let containerStyle={
        backgroundColor:colorsData.backgroundLight,
        padding:'5px 15px 15px',
    }

    if(!(displaySize==="desktop")){
        containerStyle.padding='10px 45px 15px 15px ';
    }

    return(
        <div style={containerStyle} >
        <Row type="flex" justify="space-around">
            {recommendedProducts.map(mapProducts)}
        </Row>
            {props.children}
        </div>

    );

}




const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(ProductsContainer);