import React from 'react';
import './LPCarousel.css';
import carouselItems from "../../Data/LandingPageCarousel";
import LPCarouselItem from './LPCarouselItem';
import colorData from '../../Data/ColorsData'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function LPCarousel(props) {

    let {height} = props;
    let [activeIndex,setActiveIndex] = React.useState(0);

    let elementNumber = carouselItems.length;

    let mappedIndex;


    function handleBeforeChange(){
        setActiveIndex(-1);
    }

    function handleAfterChange(index){
        setActiveIndex(index);
    }


    let setHeight={
        height:height,
    };

    let settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 700,
        dots: false,
        pauseOnHover:false,
    };


    function mapCarouselItems(carouselItem){
        mappedIndex++;
        return (
                <div key={carouselItem.id} style={setHeight}>
                <LPCarouselItem active={mappedIndex==activeIndex ? true : false} color={colorData.backgroundLight} colorOnHover={colorData.primaryColor} CarouselItemData={carouselItem}/>
                </div>
        );
    }

    function createSlides(){
            mappedIndex=-1;
            return (
                carouselItems.map(mapCarouselItems)
            );
    }

    let xd={
        height:'600px'
    };

    return(
        <div style={xd}>
        <Slider
            beforeChange={()=>{handleBeforeChange()}}
            afterChange={(index)=>{handleAfterChange(index)}}
                {...settings}>
            {
                createSlides()
            }
        </Slider>
        </div>

    );
}

export default LPCarousel;

