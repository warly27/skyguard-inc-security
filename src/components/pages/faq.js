import React, { useState, useRef } from 'react';

import { Collapse, Button, Modal, Form, Input, Radio, Alert } from 'antd';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const { Panel } = Collapse;
const { TextArea } = Input;

const AppFaq = () => {

  const formsUrl = process.env.REACT_APP_FAQ_LINK
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY
  const recaptchaRef = useRef();
  const [form] = Form.useForm();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recaptchaToken, setReCaptchaToken] = useState();
  const [successAlertVisible, showSuccessAlert] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
    showSuccessAlert(false)
    form.resetFields()
  };

  const closeSuccessAlert = () => {
    showSuccessAlert(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const onFinish = async (values) => {
    console.log(values)
    console.log(recaptchaToken)

    if(recaptchaToken !== undefined){
      try {
        
        const result = await axios({
          method: 'post',
          url: formsUrl,
          data: {
            faq_type: values.faq_type,
            Source:  process.env.REACT_APP_FAQ_EMAIL_SRC,
            message: values.user_faq,
            date: new Date(),
            "g-recaptcha-response": recaptchaToken,
          }
        })
        recaptchaRef.current.reset();
        console.log(result)
      } catch (error) {
        console.log(error)
      }
      setIsModalVisible(false);
      showSuccessAlert(true)

    }
  
  }

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };

  return(
    <div id="faq" className="block faqBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Modal title="FAQ" className='faq-modal' key="submit" visible={isModalVisible}  width={1000} centered onCancel={handleCancel} >
          <Form
            name="normal_login"
            className="login-form"
            form={form} 
            // initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item 
              name="faq_type"
              rules={[
                { 
                  required: true,
                  message: 'Please choose an FAQ type.' 
                }]
              }
            >
              <Radio.Group  buttonStyle="solid">
                <Radio.Button value="Service Related Inquiry">Service Related Inquiry</Radio.Button>
                <Radio.Button value="Job Related Inquiry">Job Related Inquiry</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item 
              name="user_faq"
              rules={[
                { 
                  required: true,
                  message: 'Please enter your question.' 
                }]
              }
            >
              <TextArea placeholder="Questions" />
            </Form.Item>
            <Form.Item
              name="captcha" 
              valuePropName="checked"
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should check if not robot') },
              ]}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="How to apply for a security guard job?" key="1">
            <p>You can apply for a security guard job by sending us your resume in pdf format in the contact form section of the webpage. Please dont forget to put your correct phone number and email address so that we can call you back.</p>
          </Panel>
          <Panel header="How to avail service?" key="2">
            <p>You may send your queries in the contact form section of the webpage. Please dont forget to put your correct phone number and email address so that we can call you back</p>
          </Panel>
          <Panel header="Do you have personal bodyguard?" key="3">
            <p>This is a special service that needs to be disclosed by contacting us via the phone number provided in the webpage.</p>
          </Panel>
          <Panel header="Do you support security cameras and operations?" key="4">
            <p>Yes, please contact us on the phone number provided in the webpage. </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want to ask something?</h3>
          {successAlertVisible ? (
        <Alert message="FAQ is sent successfully! It will be reviewed by the admin and give feedback in 3 days." type="success" showIcon closable afterClose={closeSuccessAlert} />
      ) : null}
          <p>If you have some questions. Please feel free to click the button and send us a message.</p>
          <Button size="large" onClick={showModal}><i className="fas fa-envelope"></i>  Email your question</Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;