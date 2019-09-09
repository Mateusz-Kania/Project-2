import React from 'react';
import {useSpring, animated} from 'react-spring'
import colorsData from "../Data/ColorsData"
import Stars from "./Stars";
import {isMobile} from 'react-device-detect';
import {Icon} from "antd";


function ProductCard(props) {

    let {product,style,initialZIndex} = props;

    function handleProductClick(productSlug){
        let pageInfo={
            pageType:"product",
            productSlug
        };
        console.log(pageInfo);
    }




    let [hovered,setHovered] = React.useState(false);
    let [zIndexState,setZIndexState]=React.useState(false);

    let width=185;
    let height=285;
    let imageHeight=130;
    let imageBorder=10;

    if(!initialZIndex){
        initialZIndex=0;
    }

    let imageWidth = (width-(imageBorder*2));
    let colorProps = useSpring({backgroundColor:hovered ? colorsData.primaryColor3 : colorsData.backgroundLight});
    let otherVersionContainerPosition = useSpring({
        config:{
            mass:1,
            tension:100,
            friction:18,
        },
        onRest:()=>{
            if(!hovered) {
                setZIndexState(false);
            }
        },
        left:hovered ? '100%' : '0%'});


    let polaroidStyle={
        position:'relative',
        cursor:'pointer',
        width:width,
        height:height,
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19)',
        overflow: 'visible',
        ...style
    };


    let containerStyle={
        textAlign: 'center',
    };

    let imageDivStyle={
        backgroundImage:`url(${product.image})`,
        width:imageWidth,
        marginTop:imageBorder,
        marginLeft:'auto',
        marginRight:'auto',
        height:imageHeight,
    };

    function mouseEnterHandler(){
        setHovered(true);
        setZIndexState(true);
    }

    function mouseLeaveHandler(){
        setHovered(false);

    }

    let tittleStyle={
        marginTop:imageBorder,
        color:colorsData.primaryColor,
        fontSize:20,
        lineHeight:1,
        padding:'0px 5px'

    };
    let descriptionStyle={
        marginTop:5,
        fontSize:15,
        lineHeight:1,
        padding:'0px 5px'

    };

    let alignBottom={
        position:'absolute',
        bottom:10,
        left:0,
        right:0

    }

    let priceStyle={
        color:colorsData.primaryColor,
      fontSize:20,
      lineHeight:1,
        padding:'0px 5px'
    };

    let mainContent={
        position:'absolute',
        height:'100%',
        left:0,
        right:0,
        zIndex:hovered ? 5+initialZIndex : zIndexState ? 3+initialZIndex : 1+initialZIndex,

    };

    let otherVersionsStart={
        position:'absolute',
        top:0,
        right:0,
        width:50
    };

    let otherVersionsContainer={
        position:'relative',
        zIndex:hovered ? 4+initialZIndex :zIndexState ? 2+initialZIndex : 0+initialZIndex,
    };

    let otherVersionObject={
        marginBottom:3,
        borderRadius:'0px 4px 4px 0px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19)',
    };


    let otherVersionImage={
        width:40,
        height:40,
        margin:5,
    };

    let opinionCountStyle={
        fontSize:10

    }

    function mapOtherVersions(otherVersion){

        let [hoveredVersion,setHoveredVersion]=React.useState(false);

        const otherVersionColorProps= useSpring({
            backgroundColor:hoveredVersion ? colorsData.primaryColor5 : hovered ? colorsData.primaryColor3 : colorsData.backgroundLight,
            borderColor:hoveredVersion ? colorsData.primaryColor5 : hovered ? colorsData.primaryColor3 : colorsData.backgroundLight,
        });



        return(
        <animated.div style={{...otherVersionObject,...otherVersionColorProps}}
                      key={otherVersion.productSlug}
                      onMouseEnter={()=>{setHoveredVersion(true)}}
                      onMouseLeave={()=>{setHoveredVersion(false)}}
                      onClick={()=>{handleProductClick(otherVersion.productSlug)}}
        >
            <img style={otherVersionImage} src={otherVersion.image}/>
        </animated.div>
        );

    }
    let rotateIcon = useSpring({transform:`rotate(${hovered ? 180 : 0 }deg)`});

    let iconDivStyle={
        height:40,
        width:40,
        position:'absolute',
        bottom:5,
        right:5,
        zIndex:1000,
        fontSize:40,
        lineHeight:1
    };

    let mouseEnterLeave={

    }
    if(!isMobile){
        mouseEnterLeave={
            onMouseEnter:mouseEnterHandler,
            onMouseLeave:mouseLeaveHandler,
        }

    }


    return (
        <animated.div style={{...polaroidStyle,...colorProps}}
                      {...mouseEnterLeave}
        >
            <animated.div style={{...mainContent,...colorProps}}
            onClick={()=>{handleProductClick(product.slug)}}
            >
            <div style={imageDivStyle} />
            <div style={containerStyle}>
                <div style={tittleStyle}>
                    {product.name}
                </div>
                <div style={descriptionStyle}>
                    {product.description}
                </div>
                <div style={alignBottom}>
                    { product.rating ?
                        <div>
                            <Stars style={{display: 'inline'}} iconSize={12} rate={product.rating.rate}/>
                            <span style={opinionCountStyle}>
                        ({product.rating.opinions})
                    </span>
                        </div>
                        : ""
                    }
                    <div style={priceStyle}>
                        {product.price}
                    </div>
                </div>
            </div>
            </animated.div>
            { product.versions&&isMobile ?
                <animated.div style={{...rotateIcon, ...iconDivStyle}}
                              onClick={() => {hovered ? mouseLeaveHandler() : mouseEnterHandler()}}
                >
                    <Icon type="caret-right"/>
                </animated.div>
                :""
            }
            {   product.versions ?
                <div style={otherVersionsStart}>
                    <animated.div style={{...otherVersionsContainer, ...otherVersionContainerPosition}}>
                        {product.versions.map(mapOtherVersions)}
                    </animated.div>
                </div>
                :""
            }
        </animated.div>
    );

}

export default ProductCard;

