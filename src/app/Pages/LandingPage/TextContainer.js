import React from 'react';
import {connect} from 'react-redux';
import ColorsData from '../../Data/ColorsData'

class TextContainer extends React.Component{
    render() {
        let {even, displayContentWidth} = this.props;



        let divStyle={
            width: displayContentWidth,
            marginLeft:'auto',
            marginRight:'auto',
        };
        let divStyleOdd={
            ...divStyle
        };
        let divStyleEven={
            ...divStyle
        };


        let divStyleFullwidthOdd={
            backgroundColor:ColorsData.primaryColor,
        };

        let divStyleFullwidthEven={
            backgroundColor:ColorsData.backgroundLight,
        };

        return(
            <div style={even ? divStyleFullwidthEven : divStyleFullwidthOdd}>
                <div style={even ? divStyleEven : divStyleOdd}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


const mapStateToProps= state=>(
    {
        displayContentWidth:state.displayContentWidth
    }
);

export default connect(mapStateToProps)(TextContainer);