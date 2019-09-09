import React from 'react';
import LPCarouser from './LPCarouselMobile'
import LPTiles from './LPTiles'
//import LandingPageText from '../../Data/LandingPageText'

function LandingPage(props){


        let even=true;
        let key=0;

        function mapArticle(article){
            even=!even;
            key++;
            return(
                <TextContainer key={key} even={even}>
                    {article.text}
                </TextContainer>
            );
        }

        return(
            <div>
          <LPCarouser height={"600px"} />
          <LPTiles />
            </div>

        );

}



export default LandingPage;