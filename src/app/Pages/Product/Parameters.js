import React from 'react';

function Parameters(props){

    let {parametersData}=props;

    let containerStyle={
    };

    let categoryContainerStyle={
        position:'relative',
        marginBottom: 10,
    };


    let categoryNameStyle={
        fontWeight:700,
        fontSize:16,
    };

    let parameterContainerStyle={
        textAlign:'left',
        height:'auto',
        paddingLeft:3
    };

    let parameterNameStyle={
        verticalAlign: 'text-top',
        display:'inline-block',
        width:'40%'
    };

    let parameterValueStyle={
        verticalAlign: 'text-top',
        display:'inline-block',
        width:'60%'
    };




    function mapCategories(category,index){
        return(
            <div key={index} style={categoryContainerStyle}>
                <div style={categoryNameStyle}>{category.name}</div>
                {category.items.map(mapParameters)}
            </div>
        )
    }

    function mapParameters(item,index){
        return(
            <div key={index} style={parameterContainerStyle}>
                <div style={parameterNameStyle}>{item.name}</div>
                <div style={parameterValueStyle}>{item.value}</div>
            </div>
        )
    }

    return(
        <div style={containerStyle}>
            {parametersData.map(mapCategories)}
        </div>

    );

}



export default Parameters;