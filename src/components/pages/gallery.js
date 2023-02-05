import React, { useState } from 'react';
import { ProfileTwoTone } from '@ant-design/icons';

import image1 from '../../assets/images/permit-granted.png';
import image2 from '../../assets/images/the-skyguard.png';
import image3 from '../../assets/images/the-role-model.png';
import image4 from '../../assets/images/ready-to-serve.png';
import image5 from '../../assets/images/bomb-training.jpg';
import training1 from '../../assets/images/training-1.jpg';
import training2 from '../../assets/images/training-2.jpg';
import training3 from '../../assets/images/training-3.jpg';
import training4 from '../../assets/images/training-4.jpg';
import training5 from '../../assets/images/training-5.jpg';
import training6 from '../../assets/images/training-6.jpg';
import inspection1 from '../../assets/images/interview-2.jpg';
import inspection2 from '../../assets/images/interview-1.jpg';
import inspection3 from '../../assets/images/interview-3.jpg';
import inspection4 from '../../assets/images/interview-4.jpg';
import inspection5 from '../../assets/images/interview-5.jpg';
import inspection6 from '../../assets/images/interview-7.jpg';
import inspection8 from '../../assets/images/officer-1.jpg';
import inspection9 from '../../assets/images/officer-2.jpg';
import ntc_rlm1 from '../../assets/images/rlm-seminar-1.jpg';
import ntc_rlm2 from '../../assets/images/rlm-seminar-2.jpg';
import ntc_rlm3 from '../../assets/images/rlm-seminar-3.jpg';
import ntc_rlm4 from '../../assets/images/rlm-seminar-4.jpg';
import ntc_rlm5 from '../../assets/images/rlm-seminar-5.jpg';
import ntc_rlm6 from '../../assets/images/rlm-seminar-6.jpg';
import ntc_rlm7 from '../../assets/images/rlm-seminar-7.jpg';
import ntc_rlm9 from '../../assets/images/rlm-seminar-9.jpg';
import ntc_rlm10 from '../../assets/images/rlm-seminar-10.jpg';
import bombsquad1 from '../../assets/images/bomb-squad-1.jpg';
import bombsquad2 from '../../assets/images/bomb-squad-2.jpg';
import bombsquad3 from '../../assets/images/bomb-squad-3.jpg';
import bombsquad4 from '../../assets/images/bomb-squad-4.jpg';
import bombsquad5 from '../../assets/images/bomb-squad-5.jpg';
import bombsquad6 from '../../assets/images/bomb-squad-6.jpg';


import { Card, Row, Col, Divider, Drawer, List, Avatar, Space, Button, Image } from 'antd';
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
  const [show, showMorePics] = useState(false);

  const showDrawer = (event, value) => {
    setVisible(true);
    setSelectedItem(value)
    
  };

  const showMoreGallery = () => {
    showMorePics(true);
  }

  const onClose = () => {
    setVisible(false);
    showMorePics(false);
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
              label: "",
            },
            {
              id: 2,
              name: 'We are skyguard',
              description:"Last April 21, 2022, the SKYGUARD secured an office at UNIT 11 4/F EXANNE BLDG., ONE ASIA BUSINESS CENTER SAN ANTONIO, BIÑAN CITY, 4024",
              subtitle: "We are proud",
              image: image2,
              label: "",
            },
            {
              id: 3,
              name: 'The Role Model',
              description:"Presenting our officer that role models are security personnel. Acheiving all the certifications needed to train and become competitive in security servoce industriy.",
              subtitle: "We are above standard",
              image: image3,
              label: "",
            },
            {
              id: 4,
              name: 'Ready to serve',
              description:"Last 2020, SKYGUARD is just a partner of a security agency. Now, SKYGUARD has his own indetity and entity to serve every businesses that needs security services.",
              subtitle: "We are always ready",
              image: image4,
              label: "",
            },
            {
              id: 5,
              name: 'Bomb Safety Seminar w/ PECU',
              description:"Last 2022, SKYGUARD securities undergone bomb training handling with PECU.",
              subtitle: "We undergone bomb training program",
              image: image5,
              label: "seminar",
            },
            {
              id: 6,
              name: 'The Bomb Squad',
              description:"Last 2022, SKYGUARD securities partnered with Bomb Squad Philippines.",
              subtitle: "We have partnered with Bomb Squad",
              image: bombsquad1,
              label: "squad",
            },
            {
              id: 7,
              name: 'RCSU Inspection',
              description:"Last 2022, SKYGUARD securities passed RCSU Inspection.",
              subtitle: "We have passed RCSU Inspection",
              image: inspection1,
              label: "inspection",
            },
            {
              id: 8,
              name: 'NTC RLM Seminar',
              description:"Last 2022, SKYGUARD securities undergone NTC RLM Seminar.",
              subtitle: "We have undergone NTC RLM Seminar",
              image: ntc_rlm1,
              label: "ntc",
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
      <Drawer
        title="Gallery Description"
        className='gallery-ant-drawer-title'
        width="auto"
        onClose={onClose}
        open={visible}
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
            {
              selectedItem?.label === ""? <img src={selectedItem.image} alt="selectedimage" className='gallery-drawer-image'/> 
              :selectedItem?.label === "seminar"?
                <Row gutter={[16, 24]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={training1}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={training2}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={training3}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={training4}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} height={250} className='gallery-img' alt="images" src={training5}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={training6}/></div>
                </Col>
              </Row>
              : selectedItem?.label === "inspection"?
              <Row gutter={[16, 24]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection2}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection3}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection4}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection5}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection6}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection8}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={inspection9}/></div>
                </Col>
              </Row>
                : selectedItem?.label === "ntc"?
                <Row gutter={[16, 24]}>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm2}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm3}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm4}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm5}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm6}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm7}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm9}/></div>
                  </Col>
                  <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                    <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={ntc_rlm10}/></div>
                  </Col>
                </Row>
              : selectedItem?.label === "squad"?
              <Row gutter={[16, 24]}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={bombsquad2}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={bombsquad3}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={bombsquad4}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={bombsquad5}/></div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={bombsquad6}/></div>
                </Col>
                {/* <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
                  <div className='img-gallery'><Image width={350} className='gallery-img' alt="images" src={training6}/></div>
                </Col> */}
              </Row>               
              : []
            }
            
          </Col>
        </Row>
      </Drawer>
      {/* <div className="btnHolder">
        <Button size="large" onClick={showMoreGallery}><i className="fas fa-desktop"></i> &nbsp;More on Gallery</Button>
      </div>
      <Drawer
        title="More Galleries"
        className='gallery-ant-drawer-title'
        width="auto"
        onClose={onClose}
        visible={show}
        bodyStyle={{
          paddingBottom: 80,
          textAlign: 'center',
        }}
      >
        
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className='img-gallery'><img className='gallery-img' alt="images" src={training1}></img></div>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className='img-gallery'><img className='gallery-img' alt="images" src={training2}></img></div>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className='img-gallery'><img className='gallery-img' alt="images" src={training3}></img></div>
          </Col>
        </Row>
      </Drawer> */}
      </div>

    </div>
  );
}

export default AppGallery;