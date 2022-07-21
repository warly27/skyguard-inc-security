import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-user-shield"></i>,
    label: <span className='blue'>S</span>,
    title: 'Superior Security & Safety Services',
    content: 'The Company offers armed and unarmed security officers, patrol, intrusion alarm response, investigations, electronic security equipment, closed circuit television, security cameras, and training. We always treat everything seriously. We strictly follow SOP (Standard Operating Protocols) and security best practices.',
  },
  {
    key: '2',
    icon: <i className="fas fa-user-graduate"></i>,
    label: <span className='blue'>K</span>,
    title: 'Knowledgeable and Well-Trained Personnel & Administration',
    content: 'Our security personel are well trained and certified professional. They are trained to handle simple and complex security issues. We are well organized and disciplined company.',
  },
  {
    key: '3',
    icon: <i className="fas fa-chalkboard-teacher"></i>,
    label: <span className='blue'>Y</span>,
    title: 'Yearning for Continuous Improvement and Growth',
    content: 'The company loves continues improvement. We are collabrative and we always think out of the box. We are always updated in new security protocol and security technology that will help us to serve you best.',
  },
]

const AppAbout = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
        <p>Skyguard is a newly established Security Agency having been incorporated last October 18, 2021. 
            The management is composed of a team of competitive, dedicated and highly motivated professionals 
            with skills and competencies in the different fields of expertise and disciplines. We were organized 
            with a common goal of providing the best security service and protection giving our clients peace of mind.
             Our office is located at Unit 11, 4/F Exanne Bldg., One Asia Business Center, San Antonio, Biñan City and 
             operations cover the CALABARZON and NCR Regions.
          </p>
          <p>Currently, we are the Security Service Provider of Enchanted Kingdom, Inc. a world class theme park located at
             Santa Rosa City Laguna. We have been privileged to be vested with trust and confidence by its management, knowing 
             fully our capability and that we can deliver for them.
          </p><br />
          <h1 className='blue'>What we offer?</h1>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.label} - {item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;