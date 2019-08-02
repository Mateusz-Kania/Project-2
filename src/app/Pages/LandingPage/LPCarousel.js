import Swiper from 'swiper';
import React from 'react';
import 'swiper/dist/css/swiper.css';
import './LPCarousel.css';
import carouselItems from "../../Data/LandingPageCarousel";
import LPCarouselItem from './LPCarouselItem';
import colorData from '../../Data/ColorsData'

function LPCarousel(props) {

    let {height} = props;
    let [activeIndex,setActiveIndex] = React.useState(1);
    let swiper;

    let elementNumber = carouselItems.length;

    let mappedIndex;

    function startContainerAnimation(){
        //todo
    }




        React.useEffect(()=> {
            swiper = new Swiper('.swiper-container',{
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                onSlideChangeEnd: function (s) {
                    s.fixLoop();
                },
               loop: true,



               // autoplay: {
               //     delay: 8000,
               //     disableOnInteraction: false,
               // },


            });

                swiper.on('transitionEnd'	, startContainerAnimation);
            return () =>{
                swiper.off('transitionEnd'	);
            };
        }
        ,[]);


        function createCarouselItems(){
            return(
                <div className="swiper-wrapper">
                    {carouselItems.map(mapCarouselItems)}
                </div>

            );
        }


        function mapCarouselItems(carouselItem){
            return (
                <div className="swiper-slide" key={carouselItem.id}>
                    <LPCarouselItem active={true} color={colorData.backgroundLight} colorOnHover={colorData.primaryColor} CarouselItemData={carouselItem}/>
                </div>
            );
        }

        return(
        <div className="swiper-container">
                {
                    createCarouselItems()
                }
            <div className="swiper-pagination"></div>
        </div>


        );
}

export default LPCarousel;

