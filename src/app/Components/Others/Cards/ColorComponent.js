import React from 'react'

let ColorComponent=(props)=>{

    let {color,secondaryColor,size}=props;

    return(
        <div style={{height:size}}>

            <svg viewBox="0 0 200 200" width={size} height={size}>
                <defs>
                    <filter id="gaussian-blur-filter-0" colorInterpolationFilters="sRGB" x="-500%" y="-500%" width="1000%" height="1000%" data-bx-preset="gaussian-blur 1 5">
                        <feGaussianBlur stdDeviation="5 5" edgeMode="none"/>
                    </filter>
                </defs>
                <path style={{fill: color}}  transform="matrix(0.548416, 0.000001, -0.000001, 0.548416, -8.561591, -79.307167)" d="M 80.668357584 444.331642416 A 165.932 165.932 0 1 1 315.331642416 209.668357584 L 198 327 Z" data-bx-shape="pie 198 327 0 165.932 225 45 1@38b7dec3" data-bx-origin="0.585629 0.585625"/>
                <path style={{fill: secondaryColor||color}}  transform="matrix(-0.548416, -0.000001, 0.000001, -0.548416, 208.537872, 279.282837)" d="M 80.668357584 444.331642416 A 165.932 165.932 0 1 1 315.331642416 209.668357584 L 198 327 Z" data-bx-shape="pie 198 327 0 165.932 225 45 1@38b7dec3" data-bx-origin="0.585629 0.585625"/>
                <path d="M 518.709 653.331 m -91 0 a 91 91 0 1 0 182 0 a 91 91 0 1 0 -182 0 Z M 518.709 653.331 m -85 0 a 85 85 0 0 1 170 0 a 85 85 0 0 1 -170 0 Z" style={{filter: 'none'}} transform="matrix(-0.526355, 0.850265, -0.850265, -0.526355, 928.529602, 2.843733)" data-bx-shape="ring 518.709 653.331 85 85 91 91 1@6cc6b813"/>
                <path d="M 512.651 519.732 m -95 0 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0 Z M 512.651 519.732 m -85 0 a 85 85 0 0 1 170 0 a 85 85 0 0 1 -170 0 Z" style={{filter: 'url(#gaussian-blur-filter-0)'}} transform="matrix(-0.607604, 0.79424, -0.79424, -0.607604, 824.281311, 8.623359)" data-bx-shape="ring 512.651 519.732 85 85 95 95 1@5b5b6d53"/>
            </svg>
        </div>
    )

}

export default ColorComponent;