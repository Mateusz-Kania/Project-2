import React from 'react';
import {Row, Col} from 'antd';
import LinkCollection from '../../Components/LinkCollection';
import {connect} from 'react-redux';

class TopLinks extends  React.Component{

    render() {
        let {topLinksLeftData,topLinksRightData} = this.props;
        return (
                <Row type="flex" justify="space-between">
                    <Col>
                        <LinkCollection links={topLinksLeftData} />
                    </Col>
                    <Col>
                        <LinkCollection links={topLinksRightData} />
                    </Col>
                </Row>
        );
    }
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(TopLinks);