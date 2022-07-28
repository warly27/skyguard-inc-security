import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'SKYGUARD SECURITY AGENCY INC.',
    sub_title: 'MISSION',
    content: 'At SKYGUARD, our MISSION is to take pride in providing superior, extraordinaire security, safety services and protection with integrity to all our clients and customers for total satisfaction and peace of mind.',
  },
  {
    key: '2',
    title: 'SKYGUARD SECURITY AGENCY INC.',
    sub_title: 'VISION',
    content: 'To be at par with the top security agencies in the country, providing quality services through continuous investment in equipment and well-trained personnel that is committed to excellence to ensure the security and protection of every client’s life and property.',
  },
  {
    key: '3',
    title: 'SKYGUARD SECURITY AGENCY INC.',
    sub_title: 'CORE VALUES',
    content: 'INTEGRITY, RELIABILITY, ACCOUNTABILITY, PROACTIVITY, RESILIENCE.',
  },
]

const AppMain = () => {
  return (
    <div id="main" className="mainBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <h5>{item.sub_title}</h5>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button size="large"><i className="fas fa-desktop"></i> <a href="/#about">Learn More</a></Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppMain;