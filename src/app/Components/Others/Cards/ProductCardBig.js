import React from 'react';
import {useSpring, animated} from 'react-spring'
import colorsData from "../../../Data/Static/ColorsData"
import Stars from "../Stars";
import {isMobile} from 'react-device-detect';
import {Col, Icon, Row} from "antd";
import CardBlock from "./CardBlock";
import ColorComponent from "./ColorComponent";
import AppProvider from "../../../Store/AppProvider";


let ProductCardBig=(props)=> {

    let {item,style,initialZIndex,scale=1} = props;

    function handleProductClick(productSlug){
        let pageInfo={
            pageType:"product",
            productSlug
        };
        console.log(pageInfo);
    }


    let [hoveredVersion,setHoveredVersion]=React.useState(item.defaultSelected||0);

    let [clickedVersion,setClickedVersion]=React.useState(-1);

    let [clicked,setClicked]=React.useState(false);

    let [expand,setExpand] = React.useState(false);


    let selectedVersion=clickedVersion!==-1 ? clickedVersion : hoveredVersion;

    let width=185*scale;
    let height=285*scale;
    let imageHeight=130*scale;
    let imageBorder=10*scale;
    let titleFontSize=20*scale;
    let titleDescriptionMargin=5*scale;
    let descriptionFontSize=15*scale;
    let ratingSize=13*scale;
    let oldPriceSize=12*scale;
    let priceSize=20*scale;
    let colorIconDivSize=32*scale;
    let bottomDivBottomMargin=10*scale;
    let otherVersionImageSize=40*scale;
    let otherVersionImageMargin=5*scale;


    if(!initialZIndex){
        initialZIndex=0;
    }

    let imageWidth = (width-(imageBorder*2));
    let colorProps = useSpring({backgroundColor:expand ? colorsData.primaryColor3 : colorsData.backgroundLight});

    let containerStyle={
        textAlign: 'center',
    };

    let imageDivStyle={
        backgroundImage:`url(${!item.versions ? item.image : item.versions[selectedVersion].image ? item.versions[selectedVersion].image : item.image})`,
        width:imageWidth,
        marginTop:imageBorder,
        marginLeft:'auto',
        marginRight:'auto',
        height:imageHeight,
    };


    let tittleStyle={
        marginTop:imageBorder,
        color:colorsData.primaryColor,
        fontSize:titleFontSize,
        lineHeight:1,
        padding:'0px 5px'

    };
    let descriptionStyle={
        marginTop:titleDescriptionMargin,
        fontSize:descriptionFontSize,
        lineHeight:1.2,
        padding:'0px 5px'

    };

    let alignBottom={
        position:'absolute',
        bottom:bottomDivBottomMargin,
        left:0,
        right:0

    }

    let priceStyle={
        color:colorsData.primaryColor,
      fontSize:priceSize,
      lineHeight:1,
        padding:'0px 5px'
    };

    let otherVersionObject={
        padding:otherVersionImageMargin,
        marginBottom:3,
        borderRadius:'0px 4px 4px 0px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.19)',
    };





    function mapOtherVersions(otherVersion,index){


        const otherVersionColorProps= useSpring({
            backgroundColor:clickedVersion===index ? colorsData.primaryColor :hoveredVersion===index ? colorsData.primaryColor5 : expand ? colorsData.primaryColor3 : colorsData.backgroundLight,
            borderColor:clickedVersion===index ? colorsData.primaryColor :hoveredVersion===index ? colorsData.primaryColor5 : expand ? colorsData.primaryColor3 : colorsData.backgroundLight,
        });



        return(
        <animated.div style={{...otherVersionObject,...otherVersionColorProps}}
                      key={otherVersion.productSlug||item.slug}
                      onMouseEnter={()=>{setHoveredVersion(index)}}
                      onMouseLeave={()=>{clickedVersion!==-1 ? setHoveredVersion(clickedVersion) : null}}
                      onClick={()=>{setClickedVersion((current)=>current===index ? -1 : index)}}
        >
            <ColorComponent color={otherVersion.color} secondaryColor={otherVersion.secondaryColor} size={otherVersionImageSize}/>
        </animated.div>
        );

    }
    let rotateIcon = useSpring({transform:`rotate(${expand ? 180 : 0 }deg)`});

    let iconDivStyle={
        fontSize:colorIconDivSize,
        lineHeight:1
    };

    let opinionCountStyle={
        fontSize:ratingSize*5/6,
        lineHeight:`${ratingSize}px`,
    }


    let oldPriceStyle={
        color:colorsData.redColor6,
        position:'absolute',
        bottom:0,
        right:0,
        fontSize:oldPriceSize,
        textDecoration:'line-through'
    }

    let ratingContainer={
        height:ratingSize
    }

    return (
        <CardBlock
            width={width}
            height={height}
            style={style}
            initialZIndex={initialZIndex}
            hoverRightExist={true}
            closeButton={item.closeButton}
            onClosePressed={item.onClosePressed}
        hoverRight=
            {
                <div style={{colorProps}}>
                    {item.versions&&item.versions.map(mapOtherVersions)}
                </div>
            }
            expand={expand}
            onExpandChange={setExpand}
        >
            <div
            onClick={()=>{handleProductClick(item.slug)}}
            >
            <div style={imageDivStyle} />
            <div style={containerStyle}>
                <div style={tittleStyle}>
                    {item.name}
                </div>
                <div style={descriptionStyle}>
                    {item.description}
                </div>
                <div style={alignBottom}>

                    <Row type="flex" justify="space-around">
                        <Col span={6}>
                            <div style={oldPriceStyle}>
                            {
                                item.oldPrice ? <span>{item.oldPrice}zł</span> : ""
                            }
                            </div>
                        </Col>
                        <Col span={11}>
                            <div style={ratingContainer}>
                            { item.rating ?
                                <div style={{fontSize:ratingSize,lineHeight:1}}>


                                    <Stars style={{display: 'inline-block',height:ratingSize,overflow:'visible'}} iconSize={ratingSize} rate={item.rating.rate}/>

                                    <span style={opinionCountStyle}>
                                        ({item.rating.opinions})
                                    </span>

                                </div>
                                : ""
                            }
                            </div>
                            <div style={priceStyle}>
                                {item.price}zł
                            </div>
                        </Col>
                        <Col span={6}>
                            { item.versions ?
                                <animated.div style={{...rotateIcon, ...iconDivStyle}}
                                              onClick={(e) => {
                                                  setExpand((current)=>!current);
                                              e.stopPropagation();}}
                                >
                                    <Icon type="caret-right"/>
                                </animated.div>
                                :""
                            }
                        </Col>
                    </Row>


                </div>
            </div>
            </div>
        </CardBlock>
    );

}

export default ProductCardBig;

