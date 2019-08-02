import React from 'react';
import './LPCarousel.css';
import carouselItems from "../../Data/LandingPageCarousel";
import LPCarouselItem from './LPCarouselItem';
import colorData from '../../Data/ColorsData'

import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function LPCarousel(props) {

    let {height} = props;
    let [activeIndex,setActiveIndex] = React.useState(1);

    let elementNumber = carouselItems.length;

    let mappedIndex;

    let carouselProviderSettings={
        naturalSlideHeight:600,
        naturalSlideWidth:window.innerWidth,
        totalSlides:elementNumber
    };

    console.log(carouselProviderSettings);

    function startContainerAnimation(){
        //todo
    }




    function createCarouselItems(){
        mappedIndex=-1;
        return(
            <Slider>
                {carouselItems.map(mapCarouselItems)}
            </Slider>

        );
    }


    function mapCarouselItems(carouselItem){
        mappedIndex++;
        return (
            <Slide index={mappedIndex} key={carouselItem.id}>
                <LPCarouselItem active={true} color={colorData.backgroundLight} colorOnHover={colorData.primaryColor} CarouselItemData={carouselItem}/>
            </Slide>
        );
    }



    return(
        <CarouselProvider {...carouselProviderSettings}>
                {
                    createCarouselItems()
                }
        </CarouselProvider>


    );
}

export default LPCarousel;

