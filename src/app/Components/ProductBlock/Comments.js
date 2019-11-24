import React from 'react';
import Stars from "../Others/Stars";
import {odmianaOpinii} from "../../Utilities/Odmiana"
import colorsData from "../../Data/Static/ColorsData"
import TextContainer from "../Others/TextContainer";

function Comments(props){

    let {rating,comments}=props;

    let headerContainer={
        position:'relative',
    };
    let headerLeft={
        paddingTop:5,
        paddingBottom:15,
        position:'relative',
        display:'inline-block',
        width:'30%',

    };
    let headerRight={
        paddingTop:12,
        paddingBottom:22,
        position:'relative',
        float:'right',
        width:'70%',
    };
    let headerCenteringDiv={
        textAlign:'center',
        verticalAlign:'middle',

    };
    let headerRate={
        lineHeight:1

    };

    let rateStyle={
        fontSize:40,
    };
    let maxRateStyle={
        fontSize:20,
    };

    let headerOpinionsCount={
        lineHeight:1,
        fontSize:12,

    };

    let borderStyle={
        position:'absolute',
        bottom:0,
        width:'96%',
        left:'2%',
        borderBottomWidth:1,
        borderBottomStyle:'solid',
        borderBottomColor:colorsData.borderLight,
    };

    let commentContainer={
        textAlign:'left',
        marginTop:10,
        marginBottom:10,
        marginRight:10

    };

    let commentHeader={
    };
    let commentText={
        paddingLeft:5,
        fontSize:12,
        marginTop:5,
    };

    let commentHeaderText={
        display:'inline-block',
        lineHeight: '18px',
        fontSize:12,
        paddingLeft:5,
    }


    function mapComments(comment,index){
        return(
            <div style={commentContainer} key={index}>
                <div style={commentHeader}>
                    <Stars
                        style={{float:'left'}}
                        rate={comment.rate}
                        iconSize={18}/>
                        <div style={commentHeaderText}>
                        {comment.date} przez {comment.user.name}
                        </div>
                </div>
                <div style={commentText}>
                    {comment.text}
                </div>

            </div>

        )

    }


    return(
        <div>
            <div style={headerContainer}>
                <div style={headerLeft}>
                    <div style={headerCenteringDiv}>
                        <div style={headerRate}><span style={rateStyle}>{rating.rate}</span><span style={maxRateStyle}>/5</span></div>
                        <div style={headerOpinionsCount}>({rating.opinions} {odmianaOpinii(rating.opinions)})</div>
                    </div>
                </div>
                <div style={headerRight}>
                    <div style={headerCenteringDiv}>
                    <Stars
                        rate={rating.rate}
                        iconSize={32}/>
                    </div>
                </div>
                <div style={borderStyle} />
            </div>
            <TextContainer scroll={true} height={343}  style={{padding:'5px 0px 10px 0px'}}>
                    {comments.map(mapComments)}
            </TextContainer>
        </div>

    );

}



export default Comments;