import React from 'react';
import {Carousel,Row,Col} from 'antd'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import colorsData from "../../Data/ColorsData"
import {useSpring, animated} from 'react-spring'
import BorderedOnHoverOrActive from "../../Animations/BorderedOnHoverOrActive"

function Images(props){

    let {images,arrows,thumbnails,padding} = props;
    let [carousel, setCarousel]= React.useState(null);
    let [activeIndex,setActiveIndex]=React.useState(0);

    let width;

    if(window.screen.width>460){
        width=400;
    }
    else{
        width=window.screen.width-60;
    }

    let height=250;
    let thumbnailHeight=56;
    let hrHeight=30;

    function handleThumbnailClick(index){
        carousel.slick.slickGoTo(index);
        setActiveIndex(index);
    }

    function handleSlideChange(index){
        setActiveIndex(index);
    }


    let divContainerStyle={
        width:width,
        marginLeft:'auto',
        marginRight:'auto',
    };


    let divColoring={
        backgroundColor:colorsData.backgroundLight,
    };

    if(padding){
        divContainerStyle={
            padding:'50px 30px 30px',
            ...divContainerStyle
        }
    }

    let divImageContainer={
        height:'250px',
        width:width,

    };

    let xdDiv={
        width:width
    };

    let anotherDiv={
        height:height,
        width:'100%',

        display: 'table',
        position: 'absolute',
        top: '0',
        left: '0',
        right:'0',
        margin:'auto',

    };

    let centerVertically={
        display:'table-cell',
        verticalAlign: 'middle',
    };

    let imageStyle={
        display:'block',
        margin:'auto',
        maxHeight: '100%',
        maxWidth: '100%',
    };

    let imageThumbnailStyle={
        width: 'auto',
        height: thumbnailHeight,
        padding:'3px',
        cursor:'pointer',
    };





    function mapImages(image,index) {
        return (
            <div key={index}>
                <div style={xdDiv}>
                <div style={divImageContainer}>
                    <div style={anotherDiv}>
                    <div style={centerVertically}>
                <img style={imageStyle} src={images[index].image} alt={images[index].altText} />
                </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

    function mapThumbnail(image,index){

        return(
            <Col key={index}>
                <BorderedOnHoverOrActive active={index===activeIndex} style={{height: thumbnailHeight+2*3}}>
            <img
            onClick={()=>{handleThumbnailClick(index)}}
                style={{...imageThumbnailStyle}} src={image.image} />
                </BorderedOnHoverOrActive>
            </Col>
        );
    }
    let thumbnailContainer;
    let carouselContainer={

    }
    if(thumbnails){
    carouselContainer={
        paddingBottom:hrHeight/2,
        borderBottomWidth:1,
        borderBottomStyle:'solid',
        borderBottomColor:colorsData.borderLight,
    };

    thumbnailContainer={
        paddingTop:hrHeight/2,
        textAlign:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    };
    }

    return(
        <div style={divColoring}>
        <div style={divContainerStyle}>
        <div style={carouselContainer}>
            <Carousel
                afterChange={handleSlideChange}
                draggable={true}
                autoplay={false}
                speed={400}
                dots={false}
                effect={"fade"}
                arrows={arrows}
                ref={(thisCarousel)=>{setCarousel(thisCarousel)}}
            >
                {
                    images.map(mapImages)
                }
            </Carousel>
        </div>
    <div style={thumbnailContainer}>
        <Row type="flex" justify="center">
        {thumbnails ? images.map(mapThumbnail) : ""}
        </Row>
        </div>
        </div>
        </div>
    );
}

export default Images;