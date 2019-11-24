import React from 'react'
import colorsData from "../../Data/Static/ColorsData";
import {connect} from "react-redux";
import ProductsContainer from "../Others/ProductsContainer";
import {Button} from "antd";

function CatalogIntro(props){

    let {seeAlsoData}=props;


    let containerStyle={
        width:462,
    }

    let border={
        position: 'absolute',
        bottom: 0,
        width: '90%',
        left: '5%',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: colorsData.borderLight,
    }

    let buttonContainer={
        width:200,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:15,
    }

    let buttonSettings={
        type:'primary',
        block:true,
        onClick:console.log
    }

    return(
        <div style={containerStyle}>
            <div style={{position:'relative'}}>
                <ProductsContainer colSettings={{span:7}} style={{paddingLeft:0,paddingRight:0}} products={seeAlsoData.recommendedProducts.slice(0,3)} scale={0.7}>
                    <div style={buttonContainer}>
                    <Button {...buttonSettings}>Przejdź do katalogu</Button>
                    </div>
                </ProductsContainer>
            </div>
            <div>

            </div>
        </div>
    )

}


const mapStateToProps= state=>(
    {
        seeAlsoData:state.seeAlsoData,
    }
);

export default connect(mapStateToProps)(CatalogIntro);