import React from 'react';

import colorsData from "../../Data/Static/ColorsData"
import BorderedOnHoverOrActive from "../../Animations/BorderedOnHoverOrActive"
import {InputNumber, Button, Icon, Row, Col, message, Spin, Select} from "antd";
import HoverAnimation from "../../Animations/HoverAnimation"

import Stars from "../Others/Stars"
import ProductData from "../../Data/ExampleData/ProductData";
import {odmianaOpinii,odmianaSztuk,odmianaZnajduje} from "../../Utilities/Odmiana"

function Overall(props){

    let {productData,center,availabilityInfo,currentVariant,onCurrentVariantChange} = props;


    function companyClickedCallback(){

        let pageInfo={
            pageType:"catalog",
            filters:{
                companyName:productData.company.slug
            }
        };

        console.log(pageInfo);
    }

    function versionChangedCallback(productSlug){

        let pageInfo={
            pageType:"product",
            productSlug
        };

        console.log(pageInfo);
    }

    function observedChangedHandler(){
        let newObserved=!observed;

        let observedInfo={
            product:productData.slug,
            observed:newObserved,
        };

        console.log(observedInfo);

        setObserved(newObserved);
    }

    function addToBasketHandler(){
        let addToBasketInfo={
            product:productData.slug,
            count:numberValue
        }
        console.log(addToBasketInfo);
    }


    let [observed,setObserved] = React.useState(ProductData.observed);



    let [numberValue,setNumberValue]= React.useState(1);

    let thumbnailColorHeight=40;
    let thumbnailColorPadding=3;

    let imageThumbnailStyle={
        width: 'auto',
        height: thumbnailColorHeight,
        padding:thumbnailColorPadding,
        cursor:'pointer',
    };


    let textAlign;
    let rowJustify;
    if(center){
        rowJustify="center";
        textAlign="center";

    }
    else{
        rowJustify="start";
        textAlign="left";
    }


    let containerStyle={
        position:'relative',
      padding:5,
        paddingTop:20,
      backgroundColor:colorsData.backgroundLight
    };

    let colorSpan={
        color:colorsData.primaryColor
    };

    let iconStyle={
        fontSize:32
    };

    let companyDivStyle={
        fontSize:24,
        lineHeight:1,
        marginBottom:15,
        textAlign
    };

    let nameDivStyle={
        fontSize:36,
        lineHeight:1,
        marginBottom:15,
        textAlign
    };

    let priceDivStyle={
        fontSize:24,
        lineHeight:1,
        marginBottom:10,
        textAlign
    };

    let standardMargin={
        marginBottom:10
    };

    let rowSettings={
        type:"flex",
        justify:rowJustify,
    };

    let ratingDiv={

    };

    if(center){
        ratingDiv={
            ...ratingDiv,
            float:'right',
        }
        companyDivStyle={
            ...companyDivStyle,
            clear:'right'
        }
        containerStyle={
            ...containerStyle,
            paddingTop:10
        }
    }
    else{
        ratingDiv={
            ...ratingDiv,
            position:'absolute',
            top:10,
            right:10
        }

    }

    let availabilityDivStyle={
        ...standardMargin,
        fontSize:12,
        marginLeft:5,
        lineHeight:1,
    }

    let orderButtonDisabled;
    let orderVisibility;

    if(availabilityInfo) {
        if (availabilityInfo.type === "success") {
            availabilityDivStyle = {
                ...availabilityDivStyle,
                color: colorsData.primaryColor
            }
        }
        orderVisibility = availabilityInfo.count ? 'visible' : 'hidden';
        orderButtonDisabled=false;
    }
    else{
        orderVisibility='visible';
        orderButtonDisabled=true;

    }

    let versionMargin={
        marginBottom:7
    }


    function mapVersion(color){
        return(
            <BorderedOnHoverOrActive key={color.productSlug} active={productData.slug===color.productSlug} style={{height: thumbnailColorHeight+thumbnailColorPadding*2,float:'left'}}>
                <img
                    alt={color.name}
                    onClick={()=>{versionChangedCallback(color.productSlug)}}
                    style={{...imageThumbnailStyle}} src={color.image} />
            </BorderedOnHoverOrActive>
        );
    }


    React.useEffect(()=>{

        if(availabilityInfo) {
            if ((numberValue > availabilityInfo.count)) {
                setNumberValue(availabilityInfo.count);
                console.log(1);
                sendProductCountAlert();
            }
        }
    },[availabilityInfo])

    function inputNumberHandler(number){
        if(!(number>availabilityInfo.count)) {
            setNumberValue(number);
        }
        else {
            setNumberValue(availabilityInfo.count);
            sendProductCountAlert();
        }
    }


    function sendProductCountAlert(){
        message.config({
            top:74,
            duration:2,
            maxCount:1,
        })
        message.error(`W magazynie ${odmianaZnajduje(availabilityInfo.count)} się jedynie ${availabilityInfo.count} ${odmianaSztuk(availabilityInfo.count)}`)

    }

    let oldPriceStyle={
        color:colorsData.redColor6,
        fontSize:18,
        marginRight:5,
        textDecoration:'line-through'
    }

    let variantSpan={
        position:'relative',
        top:-1,
        marginLeft:5
    }

    return(
        <div style={containerStyle}>
            {   ProductData.rating ?
                <div style={ratingDiv}>
                    <div style={{float: "right"}}>
                        <Stars
                            rate={ProductData.rating.rate}
                            iconSize={15}
                        />
                    </div>
                    <div style={{clear: 'right', float: "right"}}>
                        ({ProductData.rating.opinions} {odmianaOpinii(ProductData.rating.opinions)})
                    </div>
                </div>
                :""
            }
            <div style={companyDivStyle}><span style={{cursor:'pointer',padding:0}} onClick={()=>{companyClickedCallback()}}><HoverAnimation color="rgba(0, 0, 0, 0.65)" colorOnHover={colorsData.primaryColor5}>{productData.company.name}</HoverAnimation></span></div>
            <div style={nameDivStyle}>{productData.name}</div>
            <div style={priceDivStyle} >
                {productData.oldPrice ? <span style={oldPriceStyle}>{productData.oldPrice}zł</span> : "" }
                <span style={colorSpan}>{productData.price}zł</span>
                {numberValue>1 ? <span> ×{numberValue} = <span style={colorSpan}> {100*productData.price*numberValue/100}zł</span></span> : ""}
            </div>
            <Row {...rowSettings} style={versionMargin}>
                <Col>
            <div style={{float:'left'}}>{productData.versions.map(mapVersion)}</div>
                </Col>
            </Row>
            <Row {...rowSettings}>
            <Col>
                <div style={availabilityDivStyle}>
                    {availabilityInfo ? availabilityInfo.text :
                    <span><Icon type="loading" /> trwa ładowanie danych na temat dostępności</span>
                    }
                </div>
            <div style={{clear:'left',...standardMargin,visibility:orderVisibility}}>
                Ilość:
                <InputNumber disabled={orderButtonDisabled} style={{marginLeft:2}} min={1} defaultValue={1} value={numberValue} onChange={inputNumberHandler} />
                {
                    Object.keys(productData.variants).map((variantKey)=>
                        <span style={variantSpan} key={variantKey}>{productData.variants[variantKey].name}:<Select onChange={(value)=>{onCurrentVariantChange(variantKey,value)}}
                                                                                               value={currentVariant&&currentVariant[variantKey]}>
                                                                                                {productData.variants[variantKey].options.map((option)=>
                            <Select.Option key={option.slug} value={option.slug}>{option.name}</Select.Option>
                        )}</Select></span>
                    )
                }
            </div>
                <div style={standardMargin}>
                <div style={{float:'left'}}>
                    <HoverAnimation color={colorsData.primaryColor} colorOnHover={colorsData.primaryColor5}>
                <Icon style={iconStyle} type="heart"
                      theme={observed ? "filled" : "outlined"}
                      onClick={observedChangedHandler}
                />
                    </HoverAnimation>
                </div>
                <div style={{float:'left',marginLeft:5,visibility:orderVisibility}}>
                    <Button disabled={orderButtonDisabled} type="primary" onClick={addToBasketHandler} >Dodaj do koszyka</Button>
                </div>
                </div>
                </Col>
            </Row>
        </div>

    );

}



export default Overall;