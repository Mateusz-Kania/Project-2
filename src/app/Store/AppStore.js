
import {createStore} from "redux";

export default function() {
    const initialState = {
        displayVertical: true,
        displayContentWidth: '1150px',
    };


    function reducer(state = initialState, action) {
        switch(action.type){
            case "SET_DISPLAY_VERTICAL":
                return {
                    displayVertical:action.value
                };
            case "SET_DISPLAY_CONTENT_WIDTH":
                return {
                    displayContentWidth:action.value
                };
            default:
                return state;
        }
    }

    return createStore(reducer);
}
