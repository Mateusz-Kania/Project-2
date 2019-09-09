import React from 'react';
import './LPCarousel.css';
import carouselItems from "../../Data/LandingPageCarousel";
import LPCarouselItem from './LPCarouselItem';
import colorData from '../../Data/ColorsData'

import {Carousel} from "antd";

function LPCarousel(props) {

    let {height} = props;
    let [activeIndex,setActiveIndex] = React.useState(0);
    let autoplayTime=8000;

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


    function mapCarouselItems(carouselItem,index) {
        return (
            <div key={carouselItem.id}>
                <div style={setHeight}>
                    <LPCarouselItem active={index == activeIndex ? true : false} color={colorData.backgroundLight}
                                    colorOnHover={colorData.primaryColor} CarouselItemData={carouselItem}/>
                </div>
            </div>
        );
    }

    return(
        <div style={{height:'600px'}}>
            <Carousel draggable={true}
                autoplay
                      speed={700}
                        autoplaySpeed={autoplayTime}
                        dots={false}
                      style={setHeight}
                beforeChange={()=>{handleBeforeChange()}}
                afterChange={(index)=>{handleAfterChange(index)}}
                >
                {
                    carouselItems.map(mapCarouselItems)
                }
            </Carousel>
        </div>
    );
}

export default LPCarousel;

