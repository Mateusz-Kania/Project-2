import React from 'react';
import {useSpring, animated} from 'react-spring';

function LPTilesItem(props) {

    const [animatedProps, setAnimatedProps] = useSpring(() => ({ scale: 0.9}));


    function mouseEnterHandler(){
        setAnimatedProps({scale:1});
    }

    function mouseLeaveHandler(){
        setAnimatedProps({scale:0.9});
    }





    let {image} = props;

    let divStyle={
        position: 'absolute',
        top:'0%',
        left:'0%',
        width: '100%',
        height: '100%',
        backgroundImage:`url(${image})`,
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        cursor:'pointer',
    };


    let divContainerStyle={
        height: '0px',
        paddingTop: '75%',
        position: 'relative',
    };


    return(

        <div style={divContainerStyle}
        >

            <animated.div
                onMouseEnter={()=>mouseEnterHandler()}
                onMouseLeave={()=>mouseLeaveHandler()}
                style={{...divStyle,
                    transform: animatedProps.scale.interpolate(
                        (s) =>
                            `scale(${s})`
                    )
                }}

            >
            </animated.div>
        </div>
    );
}

export default LPTilesItem;

