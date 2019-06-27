import React from 'react';
import { Carousel } from 'antd';
import './LPCarousel.css'
import carouselItems from "../../Data/LandingPageCarousel"
class LandingPage extends React.Component{
    render() {



        let divStyle={
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            height:'600px'

        };

        let imgStyle={
            objectFit: 'cover',
            width:'1920px',
            heigth:'400px',
        };

        function mapCarouselItems(carouselItem){
            let currentDivStyle={
              ...divStyle,
                backgroundImage:`url(${carouselItem.image})`,
            };

            return(
             <div>
                 <div style={currentDivStyle}></div>
             </div>
            );
        }








        return(
            <Carousel autoplay={true}>
                {carouselItems.map(mapCarouselItems)}
            </Carousel>


        );
    }
}

export default LandingPage;

/*
Przyciski domyślnie:
.ant-carousel .slick-dots{
    height: 3px;
}
.ant-carousel .slick-dots li{
    margin-left: 2px;
    margin-right: 2px;
}

.ant-carousel .slick-dots li button{
    height: 3px;
    width: 16px;
 }

.ant-carousel .slick-dots li.slick-active button{
    width: 24px;
}

 */