import React from 'react'
import {connect} from "react-redux";
import {Col, Row} from "antd";
import CatalogInfo from "../Components/CatalogGallery/CatalogInfo";
import CatalogControls from "../Components/CatalogGallery/CatalogControls";
import CatalogFilters from "../Components/CatalogGallery/CatalogFilters";

function CatalogGallery(props){

    let divFiltersStyle={

    };

    let divGalleryStyle={


    };


    return(
        <span>
            <Row>
               <Col span={12}>
                   <CatalogInfo/>
               </Col>
               <Col span={12}>
                   <CatalogControls/>
               </Col>
            </Row>
            <div style={divFiltersStyle}>
                <CatalogFilters/>
            </div>
            <div style={divGalleryStyle}>
                <CatalogGallery/>
            </div>
        </span>
    )
}


const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(CatalogGallery);