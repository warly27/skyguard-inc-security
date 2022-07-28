import React from 'react';

import { Button, Modal, Collapse, Row, Col } from 'antd';

const { Panel } = Collapse;

class AppCareer extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleSubmit = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="career" className="block careerBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Career</h2>
            <p>Join us and be part of an elite security services in town.</p>
            <p>We are currently looking for:</p>
            <p>Security Supervisor</p>
            <p>Security Guards</p>
            <p>Encoders</p>
            <Button type="primary" size="large" onClick={this.showModal}>Know More</Button>
          </div>
          {/* <div className="contentHolder">
          </div> */}
          <Modal

            title="Job opennings" key="submit" visible={this.state.visible} width={1000} centered onCancel={this.handleCancel} destroyOnClose = {true}
            
            footer={[
              <Button key="cancel" type="primary"  onClick={this.handleCancel}>
                Cancel
              </Button>,                
              <Button key="submit" type="primary"  onClick={this.handleSubmit}>
                <a href="#contact">Apply</a>
              </Button>]}>

                <Collapse defaultActiveKey={['1']} accordion ghost>
                  <Panel header="Security Supervisor" key="1">
                    <Row gutter={[16, 16]}>
                      <Col span={12}>
                        <p className='jobs'> <strong>Job Description and Responsibilities</strong></p>
                        <p className='jobs'> - Inspect and patrol premises regularly</p>
                        <p className='jobs'> - Authorize entrance of people and vehicles</p>
                        <p className='jobs'> - Report any suspicious behaviors and happenings</p>
                        <p className='jobs'> - Secure all exits, doors and windows</p>
                        <p className='jobs'> - Monitor surveillance cameras</p>
                        <p className='jobs'> - Respond to alarms and react in a timely manner</p>
                        <p className='jobs'> - Provide assistance to people in need</p>
                        <p className='jobs'> - Submit reports of daily surveillance activity</p>
                        <p className='jobs'> - Submit reports of every suspicious action</p>
                        <p className='jobs'> - CAN and MUST handle stress in a professional manner.</p>
                        <p className='jobs'> - Good leadership and communication skills</p>
                      </Col>
                      <Col span={12}>
                        <p className='jobs'> <strong>Requirements</strong></p>
                        <p className='jobs'> - Valid Security License Card</p>
                        <p className='jobs'> - With at least 1 year experience as a guard</p>
                        <p className='jobs'> - With good oral and written communication skills</p>
                        <p className='jobs'> - Can easily understand instructions and work under minimum supervision</p>
                        <p className='jobs'> - Physically fit</p>
                        <p className='jobs'> - Has a friendly and professional demeanor</p>
                        <p className='jobs'><strong>Job Type: </strong> Full time/Permanent</p>
                        <p className='jobs'><strong>Supplemental Pay: </strong> 13th Month Pay</p>
                      </Col>
                    </Row>
                  </Panel>
                  <Panel header="Security Guard" key="2">
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                          <p className='jobs'> <strong>Job Description and Responsibilities</strong></p>
                          <p className='jobs'> - Inspect and patrol premises regularly</p>
                          <p className='jobs'> - Authorize entrance of people and vehicles</p>
                          <p className='jobs'> - Report any suspicious behaviors and happenings</p>
                          <p className='jobs'> - Secure all exits, doors and windows</p>
                          <p className='jobs'> - Monitor surveillance cameras</p>
                          <p className='jobs'> - Respond to alarms and react in a timely manner</p>
                          <p className='jobs'> - Provide assistance to people in need</p>
                          <p className='jobs'> - Submit reports of daily surveillance activity</p>
                          <p className='jobs'> - Submit reports of every suspicious action</p>
                          <p className='jobs'> - CAN and MUST handle stress in a professional manner.</p>
                          <p className='jobs'> - Good leadership and communication skills</p>
                        </Col>
                        <Col span={12}>
                          <p className='jobs'> <strong>Requirements</strong></p>
                          <p className='jobs'> - Valid Security License Card</p>
                          <p className='jobs'> - With at least 1 year experience as a guard</p>
                          <p className='jobs'> - With good oral and written communication skills</p>
                          <p className='jobs'> - Can easily understand instructions and work under minimum supervision</p>
                          <p className='jobs'> - Physically fit</p>
                          <p className='jobs'> - Has a friendly and professional demeanor</p>
                          <p className='jobs'><strong>Job Type: </strong> Full time/Permanent</p>
                          <p className='jobs'><strong>Supplemental Pay: </strong> 13th Month Pay</p>
                        </Col>
                      </Row>
                  </Panel>
                  <Panel header="Encoder" key="3">
                  <Row gutter={[16, 16]}>
                      <Col span={12}>
                        <p className='jobs'> <strong>Job Description and Responsibilities</strong></p>
                        <p className='jobs'> - Inspect and patrol premises regularly</p>
                        <p className='jobs'> - Authorize entrance of people and vehicles</p>
                        <p className='jobs'> - Report any suspicious behaviors and happenings</p>
                        <p className='jobs'> - Secure all exits, doors and windows</p>
                        <p className='jobs'> - Monitor surveillance cameras</p>
                        <p className='jobs'> - Respond to alarms and react in a timely manner</p>
                        <p className='jobs'> - Provide assistance to people in need</p>
                        <p className='jobs'> - Submit reports of daily surveillance activity</p>
                        <p className='jobs'> - Submit reports of every suspicious action</p>
                        <p className='jobs'> - CAN and MUST handle stress in a professional manner.</p>
                        <p className='jobs'> - Good leadership and communication skills</p>
                      </Col>
                      <Col span={12}>
                        <p className='jobs'> <strong>Requirements</strong></p>
                        <p className='jobs'> - Valid Security License Card</p>
                        <p className='jobs'> - With at least 1 year experience as a guard</p>
                        <p className='jobs'> - With good oral and written communication skills</p>
                        <p className='jobs'> - Can easily understand instructions and work under minimum supervision</p>
                        <p className='jobs'> - Physically fit</p>
                        <p className='jobs'> - Has a friendly and professional demeanor</p>
                        <p className='jobs'><strong>Job Type: </strong> Full time/Permanent</p>
                        <p className='jobs'><strong>Supplemental Pay: </strong> 13th Month Pay</p>
                      </Col>
                    </Row>
                  </Panel>
              </Collapse>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppCareer;