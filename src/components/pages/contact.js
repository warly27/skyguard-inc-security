import React, { useState, useRef } from 'react'
import { Form, Input, Button, Checkbox, Radio, message, Alert } from 'antd';
import Map from '../common/map'
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const { TextArea } = Input;
const props = {
  name: 'file',
  action: process.env.REACT_APP_RECAPTCHA_LINK,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AppContact = () => {

  const formsUrl = process.env.REACT_APP_CONTACT_LINK
  const [form] = Form.useForm();

  const [recaptchaToken, setReCaptchaToken] = useState();
  const [serviceType, setServiceType] = useState('job');
  const [successAlertVisible, showSuccessAlert] = useState(false)

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY
  const recaptchaRef = useRef();

  const [base64, setBase64] = useState("");

  const closeSuccessAlert = () => {
    showSuccessAlert(false)
  }
  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    console.log(file)
  };

  const onLoad = (fileString) => {
    console.log(fileString)
    setBase64(fileString);
    console.log(base64);
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(file);
      onLoad(reader.result);
      
    };
  };
  
  const onFinish = async (values) => {
    console.log(values)
    console.log(props)
    console.log(recaptchaToken)
    console.log(base64);

    if(recaptchaToken !== undefined){
      try {
        
        // const result = await axios.post(formsUrl, config)
        const result = await axios({
          method: 'post',
          url: formsUrl,
          data: {
            message_type: values.message_type,
            Source:  values.email,
            message: values.message,
            full_name: values.full_name,
            subject: values.subject,
            base64Data: base64,
            file_name: values.full_name+"-Resume",
            date: new Date(),
            "g-recaptcha-response": recaptchaToken,
          }
        })
        recaptchaRef.current.reset();
        console.log(result)
      } catch (error) {
        console.log(error)
      }
      form.resetFields()
      showSuccessAlert(true)
    }
    
  }

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };

  const selectServiceType = (value) => {
    console.log("VALUE: "+value.target.value)
    showSuccessAlert(false)
    setServiceType(value.target.value)
  }
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          {successAlertVisible ? (
        <Alert message="Application is sent successfully! Our admin support will give you a call. Please give us a call in case we didn't call you back after 3 days." type="success" showIcon closable afterClose={closeSuccessAlert} />
      ) : null}
        </div>
        <Form
          name="normal_login"
          className="login-form"
          form={form} 
          // initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item 
            name="message_type"
              rules={[
                { 
                  required: true,
                  message: 'Please choose a message type.' 
                }]
              }
          >
            <Radio.Group initialValues='job' buttonStyle="solid" onChange={selectServiceType}>
              <Radio.Button value="service">Service Applicant</Radio.Button>
              <Radio.Button value="job" >Job Applicant</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="full_name"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          {serviceType!=='job'?null:
          <Form.Item 
            name="attachment"
            rules={[
              {
                required: true,
                message: 'Please select a pdf attachement.',
              },
            ]}
          >
            {/* <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload Resume</Button>
            </Upload> */}
            {/* <label htmlFor="upload">
              <UploadOutlined id='upload-icon'/>
            </label> */}
            <Input type="file" id="upload"  accept="application/pdf" onChange={onChange} />
            {/* {base64? <Button icon={<UploadOutlined onClick={handleSubmit} />}>Click to Upload Resume</Button> : null} */}
          </Form.Item>}
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
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
       <Map />
      </div>
      
    </div>  
  );
}

export default AppContact;