import React from 'react'
import {Col, Row} from "antd";
import Images from "./ProductBlock/ImagesCarousel";
import Overall from "./ProductBlock/Overall";
import TextContainer from "./Others/TextContainer";
import Description from "./ProductBlock/Description";
import Comments from "./ProductBlock/Comments";
import Parameters from "./ProductBlock/Parameters";
import colorsData from "../Data/Static/ColorsData";

import Menu from "./Others/Menu"

import {connect} from "react-redux";
import SwitchingContent from "./Others/SwitchingContent";

function ProductBlock(props){

    let {displaySize,productData}=props;

    let [selectedItem,setSelectedItem]=React.useState("description");
    let [availabilityInfo, setAvailabilityInfo]=React.useState(null);
    let menuItems;

    let initCurrentVariant={
    };

    Object.keys(productData.variants).map((variantKey)=>{
       initCurrentVariant[variantKey]=productData.variants[variantKey].options[0].slug;
    });

    let [currentVariant,setCurrentVariant]=React.useState(initCurrentVariant);

    function onCurrentVariantChange(variant,value){
        setCurrentVariant((currentVariant)=> {
            return {
                ...currentVariant,
                [variant]:value
            }
        })
    }

    //symulacja pobierania informacji
    React.useEffect(()=>{
        setAvailabilityInfo(null);

        setTimeout(()=>{
            setAvailabilityInfo(
                {
                    type:'success',//or "problem"/"none"
                    text:'Produkt dostępny',
                    count:5,
                }
            );
        },2000)

    },[currentVariant]);

    if(productData.rating){
        menuItems= [
            {
                key:"description",
                name:"Opis",
            },
            {
                key:"comments",
                name:"Opinie",
            },
            {
                key:"details",
                name:"Parametry",
            }
        ];
    }
    else{
        menuItems= [
            {
                key:"description",
                name:"Opis",
            },
            {
                key:"details",
                name:"Parametry",
            }
        ];
    }

    function menuItemClicked(key){
        setSelectedItem(key);
    }

    let productRowStyle={
        backgroundColor:colorsData.backgroundLight,
    };


    let imagesSettings={
        images:productData.images
    };

    let overallSettings={
        currentVariant:currentVariant,
        onCurrentVariantChange:onCurrentVariantChange,
        productData:productData,
        availabilityInfo:availabilityInfo,
    };

    let menuSettings={
        menuItems:menuItems,
        itemClickedCallback:menuItemClicked,
        selectedItem:selectedItem
    };

    let descriptionSettings={
        description:productData.description
    };

    let commentsSettings={
        rating:productData.rating,
        comments:productData.comments

    };

    let parametersSettings={
        parametersData:productData.parameters
    }

    let switchedContentData={
        "description":<Description {...descriptionSettings} />,
        "comments":<Comments {...commentsSettings} />,
        "details":<Parameters {...parametersSettings} />,
    }

    let switchedContentSettings={
        heightAnimation:displaySize==="medium"||displaySize==="small",
        items:switchedContentData,
        activeKey:selectedItem
    }

    if(displaySize==="desktop"||displaySize==="tablet") {
        return(
            <Row style={productRowStyle}>
                <Col span={12}>
                    <Images {...imagesSettings} arrows={false} thumbnails={true} padding={true} />
                </Col>
                <Col span={12}>
                    <Overall center={false} {...overallSettings} />
                    <Menu {...menuSettings} />
                    <TextContainer height={430} scroll={true} style={{padding:'5px 10px 15px 5px'}}>
                        <SwitchingContent {...switchedContentSettings} />
                    </TextContainer>
                </Col>
            </Row>
        );
    }

    else {
        return (
            <div>
                <Overall center={true} {...overallSettings}/>
                <Images {...imagesSettings} arrows={true} thumbnails={false} padding={false} />
                <Menu center {...menuSettings}/>
                <TextContainer scroll={false} style={{textAlign:'center',padding:'5px 10px 10px 5px'}}>
                    <SwitchingContent {...switchedContentSettings} />
                </TextContainer>
            </div>
        );

    }


}


const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
        productData:state.productData
    }
);


export default connect(mapStateToProps)(ProductBlock);



