import React from 'react'
import colorsData from "../../Data/Static/ColorsData"
import StarEmpty from "!babel-loader!react-svg-loader!./star-empty.svg"
import StarHalf from "!babel-loader!react-svg-loader!./star-half.svg"
import StarFull from "!babel-loader!react-svg-loader!./star-full.svg"

function Stars(props){
    let {iconSize,rate,style}=props;

    let containerStyle={
        ...style,
    }


    let iconSettings={
        fill:colorsData.starColor,
        width:iconSize,
        height:iconSize,
        viewBox:`0 0 24 24`,
    }

    let iconStyle={

        position:'relative',
        top:'.1em',
        display:'inline-flex',
    }


    function printStar(number){

            if(number-0.25<=rate){
                return(
                    <StarFull {...iconSettings} style={iconStyle} />
                )
            }
            else if(number-0.75<=rate){
                return(
                    <StarHalf {...iconSettings} style={iconStyle} />
                )

            }
            else{
                return(
                    <StarEmpty {...iconSettings} style={iconStyle} />
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

