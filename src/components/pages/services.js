import React from 'react';
import { Button } from 'antd';
// import { Carousel, Button } from 'antd';
// import image1 from '../../assets/images/cctv.webp';
import image2 from '../../assets/images/uniform_guard.webp';
// import image3 from '../../assets/images/security_trainings.webp';

const items = [
  {
    key: '1',
    title: 'Guard in Uniform',
    sub_title: 'Manpower',
    content: 'Protect your business and people. Our security guards are profesional, highly trained and certified to handle security issues and protocols.',
    image: image2,
    sub_content_1: "- 1 yr locked in period.",
    sub_content_2: "- 7x24 Operations",
    sub_content_3: "- App to monitor security on duty with respecr to location",
  },
  // {
  //   key: '2',
  //   title: 'Security camera installation, operation and support',
  //   sub_title: 'Surveillance and Monitors',
  //   content: 'Watch your assets, people and operations. Install our cameras and avail our service maintenance and operations.',
  //   image: image1,
  //   sub_content_1: "- 1 yr locked in period.",
  //   sub_content_2: "- 7x24 Operations",
  //   sub_content_3: "- Free installations and trainings on how to use the system.",
  // },
  // {
  //   key: '3',
  //   title: 'Security training',
  //   sub_title: 'Security skills',
  //   content: 'Equip you and your security personel with skills and knowledge in proper handling of any security and emergency situations. We offer the following training:',
  //   image: image3,
  //   sub_content_1: "- Root casue Analysis and Investigation How to",
  //   sub_content_2: "- Emergency and Disaster Response Training",
  //   sub_content_3: "- Pandemic handling training",
  // },
]

const AppService = () => {
  return (
    <div id="service" className="block serviceBlock">
      <div className="titleHolder">
        <h2>Services offered</h2>
        <p>We can collaborate on any service that your business needs.</p>
      </div>
      {/* <Carousel> */}
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <h5>{item.sub_title}</h5>
                <p>{item.content}</p>
                <p>{item.sub_content_1}</p>
                <p>{item.sub_content_2}</p>
                <img className='service-img' alt="images" src={item.image}></img>
                <div className="btnHolder">
                <Button type="primary" size="large"><a href="#contact">Contact Us</a></Button>
                </div>
              </div>
            </div>  
          );
        })}
      {/* </Carousel> */}
    </div>
  );
}

export default AppService;