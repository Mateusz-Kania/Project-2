import React from 'react';
import ProductCardBig from "./Cards/ProductCardBig"
import {Row,Col} from 'antd'
import colorsData from "../../Data/Static/ColorsData"
import {connect} from "react-redux";
import CategoryCard from "./Cards/CategoryCard";


function ProductsContainer(props){
    let {products,style,wider,limit,colSettings,scale=1} = props;

    limit=limit||Number.MAX_SAFE_INTEGER;

    let productCount=products.length;

    let colStyle={
        margin:4*scale
    };

    let productCardStyle={
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10*scale,
    };

    colSettings=colSettings||{};

    let getCorrectItemCardComponent= (item)=>{
        return !item.type||item.type==="product" ? 'product' : item.type==="category" ? "category" : "search";
    }


    function mapProducts(product,index) {

        if(index>=limit){
            return(
                ""
            )
        }

        let cardSettings={
            scale,
            style:productCardStyle,
            initialZIndex:(productCount - index) * 2,
            item:product
        }

        let itemCardComponent=getCorrectItemCardComponent(product);

        return (
            <Col key={product.slug} style={colStyle} {...colSettings}>
                {itemCardComponent==="product"?
                    <ProductCardBig {...cardSettings}/>
                 :
                        <CategoryCard  {...cardSettings}/>
                }
            </Col>
        );
    }


    let containerStyle={
        backgroundColor:colorsData.backgroundLight,
        paddingLeft:15*scale,
        paddingRight:15*scale,
        paddingTop:5*scale,
        paddingBottom:15*scale,
    }

    if(wider){
        containerStyle.paddingRight=45*scale;
    }

    containerStyle={
        ...containerStyle,
        ...style
    }

    return(
        <div style={containerStyle} >
        <Row type="flex" justify="space-around">
            {products.map(mapProducts)}
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