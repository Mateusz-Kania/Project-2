import React from 'react';
import {Breadcrumb} from 'antd';

import {connect} from "react-redux";

function BreadcrumbComp(props){


    let {navigationData}=props;

    function itemClickHandler(pageInfo){
        if(!pageInfo){
            pageInfo={
                pageType:"home"
            }

        }
        console.log(pageInfo);
    }

    let divStyle={
        margin:'10px 0px',
        padding:'0 10px'
    };

    let pages;

    if(!navigationData){
        pages=[]
    }
    else{
        pages=navigationData.pages;
    }


    function mapCategory(page,index){

        return(
            <Breadcrumb.Item key={index}>
               <a href="#"
               onClick={()=>{itemClickHandler(page.pageInfo)}}>
                  {page.name}
               </a>
            </Breadcrumb.Item>
        );
    }


    return(
        <div style={divStyle}>
            <Breadcrumb>
                {pages.map(mapCategory)}
            </Breadcrumb>
        </div>

    );

}

const mapStateToProps= state =>(
    {
        navigationData:state.navigationData,
    }
)


export default connect(mapStateToProps)(BreadcrumbComp);