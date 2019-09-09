import React from 'react'
import colorsData from "../Data/ColorsData"
import StarEmpty from "!babel-loader!react-svg-loader!./star-empty.svg"
import StarHalf from "!babel-loader!react-svg-loader!./star-half.svg"
import StarFull from "!babel-loader!react-svg-loader!./star-full.svg"

function Stars(props){
    let {iconSize,rate,style}=props;

    let containerStyle={
        ...style,
    }


    let iconStyle={
        fill:colorsData.starColor,
        width:iconSize,
        height:iconSize,
        viewBox:`0 0 24 24`
    }


    function printStar(number){

            if(number-0.25<=rate){
                return(
                    <StarFull {...iconStyle} />
                )
            }
            else if(number-0.75<=rate){
                return(
                    <StarHalf {...iconStyle} />
                )

            }
            else{
                return(
                    <StarEmpty {...iconStyle} />
                )


            }


    }


    return(
      <div style={containerStyle}>
          {printStar(1)}
          {printStar(2)}
          {printStar(3)}
          {printStar(4)}
          {printStar(5)}
      </div>
    );


}

export default Stars;

