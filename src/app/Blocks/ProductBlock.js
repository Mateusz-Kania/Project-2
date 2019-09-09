import React from 'react'
import {Col, Row} from "antd";
import Images from "../Pages/Product/ImagesCarousel";
import Overall from "../Pages/Product/Overall";
import TextContainer from "../Pages/Product/TextContainer";
import Description from "../Pages/Product/Description";
import Comments from "../Pages/Product/Comments";
import Parameters from "../Pages/Product/Parameters";
import colorsData from "../Data/ColorsData";

import Menu from "../Pages/Product/Menu"

import {connect} from "react-redux";

function ProductBlock(props){

    let {displaySize,productData}=props;

    let [selectedItem,setSelectedItem]=React.useState("description");
    let [availabilityInfo, setAvailabilityInfo]=React.useState(null);
    let menuItems;


    //symulacja pobierania informacji
    React.useEffect(()=>{
        setTimeout(()=>{
            setAvailabilityInfo(
                {
                    type:'success',//or "problem"/"none"
                    text:'Produkt dostępny',
                    count:5,
                }
            );
        },2000)

    },[]);

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

                        <div style={{margin:'0px 15px 0px 0px'}}>
                            {
                                selectedItem === "description" ?
                                    (
                                        <Description {...descriptionSettings} />
                                    )
                                    : selectedItem === "comments" ?
                                    (
                                        <Comments {...commentsSettings} />
                                    )
                                    :
                                    (
                                        <Parameters {...parametersSettings} />
                                    )
                            }
                        </div>
                    </TextContainer>
                </Col>
            </Row>
        );
    }

    else {
        return (
            <div>
                <Overall center={true} {...overallSettings} />
                <Images {...imagesSettings} arrows={true} thumbnails={false} padding={false} />
                <Menu center {...menuSettings}/>
                <TextContainer scroll={false} style={{textAlign:'center',padding:'5px 10px 10px 5px'}}>
                    {
                        selectedItem === "description" ?
                            (
                                <Description  {...descriptionSettings}  />
                            )
                            : selectedItem === "comments" ?
                            (
                                <Comments {...commentsSettings} />
                            )
                            :
                            (
                                <Parameters {...parametersSettings} />
                            )
                    }
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



