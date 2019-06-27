import React from 'react';
import LPCarouser from './LPCarousel'
import TextContainer from './TextContainer'
import LandingPageText from '../../Data/LandingPageText'

class LandingPage extends React.Component{
    render() {


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
          <LPCarouser />
                {LandingPageText.map(mapArticle)}
            </div>

        );
    }
}

export default LandingPage;