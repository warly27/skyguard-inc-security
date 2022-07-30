import React, { useState } from 'react';
import { ProfileTwoTone } from '@ant-design/icons';

import image1 from '../../assets/images/permit-granted.png';
import image2 from '../../assets/images/the-skyguard.png';
import image3 from '../../assets/images/the-role-model.png';
import image4 from '../../assets/images/ready-to-serve.png';

import { Card, Row, Col, Divider, Drawer, List, Avatar, Space, Button } from 'antd';
const { Meta } = Card;
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const AppGallery = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({})

  const showDrawer = (event, value) => {
    setVisible(true);
    setSelectedItem(value)
    
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div id="gallery" className="block galleryBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>News and events in Skyguard</h2>
          <p>Latest news and our milestones!</p>
        </div>
        <List
          dataSource={[
            {
              id: 1,
              name: 'Permit Granted',
              description:"Last October 21, 2021, SKYGUARD secured the LTO permit to operate a business focusing on security servcies offering. This formalize our operation as company.",
              subtitle: "We are permitted to operate",
              image: image1,
            },
            {
              id: 2,
              name: 'We are skyguard',
              description:"Last April 21, 2022, the SKYGUARD secured an office at UNIT 11 4/F EXANNE BLDG., ONE ASIA BUSINESS CENTER SAN ANTONIO, BIÑAN CITY, 4024",
              subtitle: "We are proud",
              image: image2,
            },
            {
              id: 3,
              name: 'The Role Model',
              description:"Presenting our officer that role models are security personnel. Acheiving all the certifications needed to train and become competitive in security servoce industriy.",
              subtitle: "We are above standard",
              image: image3,
            },
            {
              id: 4,
              name: 'Ready to serve',
              description:"Last 2020, SKYGUARD is just a partner of a security agency. Now, SKYGUARD has his own indetity and entity to serve every businesses that needs security services.",
              subtitle: "We are always ready",
              image: image4,
            },
          ]}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                  <Button size="large" onClick={e=>showDrawer(e, item)} key={`a-${item.id}`}><ProfileTwoTone /> <span className='gallery-view-label'>&nbsp;View</span></Button>
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src={item.image} className="gallery-avatar" />
                }
                title={<p className='gallery-titlle'>{item.name}</p>}
                description={<span className='gallery-subtitle'>{item.subtitle}</span>}
              />
            </List.Item>
          )}
        />
        {/* <Row gutter={[16, 16]}>
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
        </Row> */}
      <Drawer
        title="Gallery Description"
        className='gallery-ant-drawer-title'
        width="auto"
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
          textAlign: 'center',
        }}
      >
        <div className="titleHolder">
          <h3 className="gallery-main-title">
            {selectedItem.name}
          </h3>
        </div>
        <Row>
          <Col span={24} className="gallery-description-content">
            <DescriptionItem content={selectedItem.description}/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <img src={selectedItem.image} alt="selectedimage" className='gallery-drawer-image'/>
          </Col>
        </Row>
      </Drawer>
      </div>
    </div>
  );
}

export default AppGallery;