import React from 'react';

import image1 from '../../assets/images/permit-granted.png';
import image2 from '../../assets/images/the-skyguard.png';
import image3 from '../../assets/images/the-role-model.png';
import image4 from '../../assets/images/ready-to-serve.png';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const AppGallery = () => {
  return (
    <div id="gallery" className="block galleryBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>News and events in Skyguard</h2>
          <p>Latest news and our milestones!</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Permit Granted" src={image1} />}
            >
              <Meta title="Permit Granted" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="We are skyguard" src={image2} />}
            >
              <Meta title="We are Skyguard" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="the role model" src={image3} />}
            >
              <Meta title="The Role Model" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="ready to serve" src={image4} />}
            >
              <Meta title="Ready to serve" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppGallery;