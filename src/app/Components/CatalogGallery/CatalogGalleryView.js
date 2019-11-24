import React from 'react'
import colorsData from "../../Data/Static/ColorsData";
import CatalogInfo from "./CatalogInfo";
import CatalogControls from "./CatalogControls";
import CatalogProductsContainer from "./CatalogProductContainer";
import {Affix, Col, Icon, Row} from "antd";
import CatalogFilters from "./CatalogFilters";
import {connect} from "react-redux";
import {useSpring, animated} from 'react-spring'
import {RemoveScroll} from 'react-remove-scroll';
import DimPageContent from "../../Animations/DimPageContent";

function CatalogGalleryView(props){

    let {displaySize,settings}=props;


    let horizontalBorder = {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: '90%',
        left: '5%',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: colorsData.borderLight,
    };

    //here bc js dont allow to put it in if :(
    const bottomContainerRef = React.useRef(null);

    let filtersDivWidth = 320;

    let [divGalleryWidth, setDivGalleryWidth] = React.useState(0);

    function setNewDivGalleryWidth() {
        if(!bottomContainerRef.current){
            return;
        }
        let width= bottomContainerRef.current.clientWidth > window.screen.width - 15 ? window.screen.width - 15 : bottomContainerRef.current.clientWidth;
        let pageWidth = width > 1200 ? 1200 : width;
        let newDivGalleryWidth=pageWidth-filtersDivWidth;
        setDivGalleryWidth(newDivGalleryWidth);
    }



    let topPartHeight = 110;

    let topPartContainer = {
        height: 'auto',
        position: 'relative'
    };

    let topPartSpanSettings = {
        catalogInfoSpan: 14,
        catalogControlsSpan: 10
    }


    let catalogInfoStyle = {
        padding: "20px 25px 10px 40px",
    }

    let catalogControlsStyle = {
        padding: '10px 40px 10px 10px',
    }

    let bottomPartHeight = 740;

    let bottomPartContainer = {
        clear: 'left',
        height: bottomPartHeight,
        backgroundColor: colorsData.backgroundLight,
        width: '100%'
    };

    let verticalBorder = {
        zIndex: 1,
        position: 'absolute',
        right: 0,
        height: '95%',
        top: 8,
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: colorsData.borderLight,
    };

    let filtersContainer = {
        position: 'relative',
        height: bottomPartHeight,
        width: filtersDivWidth,
        float: 'left',
    };

    let catalogFiltersStyle = {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: (displaySize==="tablet"||displaySize==="desktop")?20:10,
        paddingRight: 5,
    }

    //React.useEffect(()=>{setNewDivGalleryWidth()},[bottomContainerRef])


    React.useEffect(() => {
        setNewDivGalleryWidth();
    }, [bottomContainerRef.current&&bottomContainerRef.current.clientWidth]);


    let catalogProductContainerStyle = {
        position: 'relative',
        padding: '10px 10px 15px',
        height: bottomPartHeight,
        width: divGalleryWidth,
        float: 'left'
    }




    let container={
        backgroundColor:colorsData.backgroundLight,
        padding:10,
    }

    let [windowHeight,setWindowHeight]=React.useState(0);

    React.useEffect(()=>{
        function setWindowHeightFunction(){
            setWindowHeight(window.screen.height);
        }
        setWindowHeightFunction();
        window.addEventListener("resize",setWindowHeightFunction);
        return(()=>{
            window.removeEventListener("resize",setWindowHeightFunction);
        })
    },[])


    let filtersVerticalContainerVerticalMargins={
        marginTop:20,
        marginBottom:20,
    }

    let [showVerticalFilters,setShowVerticalFilters]=React.useState(false);


    let filtersVerticalContainer={
        width:320,
        height:'100%',
        marginLeft:'auto',
        marginRight:'auto',
        position:'relative',
        ...filtersVerticalContainerVerticalMargins
    }

    let filtersVerticalToggleAnimation={
        mass: 1,
        tension: 120,
        friction: 14,
        clamp:true
    }

    let displayHorizontal=displaySize==="tablet"||displaySize==="desktop";

    return (
        <div>

            {!(displaySize==="medium"||displaySize==="small")?"":
                <div>

                    <div ref={bottomContainerRef} style={container}>
                        <div style={{marginBottom: 10, position: 'relative'}}>
                            <CatalogInfo {...settings.catalogInfoSettings} />
                        </div>
                        <div style={{paddingBottom: 5, position: 'relative'}}>
                            <div style={horizontalBorder}/>
                            <CatalogControls {...settings.catalogControlsSettings} verticalMode
                                             filtersButtonClickCallback={()=>{
                                                 setShowVerticalFilters(true);
                                             }}/>
                        </div>
                        <div style={{paddingTop: 15, position: 'relative'}}>
                            <CatalogProductsContainer  width={displayHorizontal?(divGalleryWidth-20):divGalleryWidth} {...settings.catalogProductsContainerSettings} />
                        </div>
                            <DimPageContent style={filtersVerticalContainer} show={showVerticalFilters} onClosePressed={()=>{setShowVerticalFilters(false)}} animationConfig={filtersVerticalToggleAnimation}>
                                  <CatalogFilters {...settings.catalogFilterSettings} height={windowHeight-(filtersVerticalContainerVerticalMargins.marginBottom+filtersVerticalContainerVerticalMargins.marginTop)}
                                                  style={catalogFiltersStyle}/>
                            </DimPageContent>
                    </div>


                </div>
            }
            {(displaySize==="medium"||displaySize==="small")?"":
            <div>
            <span>
            <div style={topPartContainer}>
                <div style={horizontalBorder}/>
                <Row>
               <Col span={topPartSpanSettings.catalogInfoSpan}>
                   <CatalogInfo {...settings.catalogInfoSettings} height={topPartHeight} style={catalogInfoStyle}/>
               </Col>
               <Col span={topPartSpanSettings.catalogControlsSpan}>
                   <CatalogControls {...settings.catalogControlsSettings} height={topPartHeight} style={catalogControlsStyle}/>
               </Col>
                </Row>
            </div>
            <div ref={bottomContainerRef} style={bottomPartContainer}>
                <div style={filtersContainer}>
                    <div style={verticalBorder}/>
                    <CatalogFilters {...settings.catalogFilterSettings} height={bottomPartHeight} style={catalogFiltersStyle}/>
                </div>
            <CatalogProductsContainer {...settings.catalogProductsContainerSettings} width={displayHorizontal?(divGalleryWidth-20):divGalleryWidth} style={(!displayHorizontal)?"":catalogProductContainerStyle} />
            </div>
        </span>
            </div>
            }

        </div>
    )

}
const mapStateToProps= state=>(
    {
                displaySize:state.displaySize
    }
)

export default connect(mapStateToProps)(CatalogGalleryView);