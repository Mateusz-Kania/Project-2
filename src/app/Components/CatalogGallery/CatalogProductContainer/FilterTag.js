import React from 'react'
import {Affix, Button, Icon} from "antd";
import {generateTextForNameAndAllOptions} from "../../../Utilities/generateFilterText"

function FilterTag(props){

    let {activeFilter,filter,slug}=props;

    function handleFilterDelete(){
        let filterInfo={
            slug:slug,
            value:null
        };

        console.log(filterInfo);

    }

    let filterData={...filter,...activeFilter};

    return(
        <Button style={{margin:3}} size="small" onClick={handleFilterDelete}  type="primary">
            {generateTextForNameAndAllOptions(filterData)}
            <Icon type="close" />
        </Button>
    );
}

export default FilterTag;
