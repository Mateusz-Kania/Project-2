import React from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import ItemClick from './ItemClick'
import displayChange from './DisplayChange'
import DisplayDetection from './Detection/DisplayDetection';
import scrollChange from './ScrollChange'

import productData from "../Data/ExampleData/ProductData"
import navigationData from "../Data/ExampleData/NavigationData"
import seeAlsoData from "../Data/ExampleData/SeeAlsoData"

import {isMobile} from 'react-device-detect';

export default function(props) {
    let displayDetection = new DisplayDetection();

    let examplePageInfo={
        productData,
        navigationData,
        seeAlsoData
    };

    const initialState = {
        ...displayDetection.getCurrentStatus(),
        basketItemsCount:11,
        ...examplePageInfo,
    };


    function reducer(state = initialState, action) {
        let change ={};
        switch(action.type){
            case "ITEM_CLICK":
                ItemClick(action);
                return {...state,...change};
            case "DISPLAY_CHANGE":
                change = displayChange(action);
                return {...state,...change};
            case "SCROLL_CHANGE":
                change = scrollChange(action);
                return {...state,...change};
            default:
                return state;
        }
    }

    const store = createStore(reducer);

    displayDetection.setStore(store);
    displayDetection.setListeners();






    return(
        <Provider store={store}>{props.children}</Provider>
    );
}
