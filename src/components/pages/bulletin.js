import React, { useState, useRef } from 'react'
import { Form, Input, Button, Checkbox, Radio, Alert, Upload } from 'antd';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AppBulletin = () => {

    const formsUrl = process.env.REACT_APP_CONTACT_LINK
    const [form] = Form.useForm();

    const [recaptchaToken, setReCaptchaToken] = useState();
    const [serviceType, setServiceType] = useState('job');
    const [successAlertVisible, showSuccessAlert] = useState(false)
    const [errorAlertVisible, showErrorAlert] = useState(false)
    const [ fileName, setFileName ] = useState()
    
    const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY
    const recaptchaRef = useRef();

    const [base64, setBase64] = useState("");

    const onLoad = (fileString) => {
        // console.log(fileString)
        setBase64(fileString);
        console.log("BASE 64: " +base64);
    };

    const getBase64 = (file, callback) => {
        let reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(file.size);
            if(file.size / 1024 / 1024 < 2) {
                onLoad(reader.result)
                showErrorAlert(false)
            } else { 
                showErrorAlert(true)
            }
        };
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
        return e;
        }
        return e?.fileList;
    };

    const handleChange = (info) => {
        console.log(info)
        if (info.file.status === 'error') {
            showErrorAlert(false)
            return;
        } else {

            getBase64(info.file.originFileObj, (url) => {
                console.log(info.file.originFileObj)
                setFileName(info.file.originFileObj.name)
            });
        }
    };

    const closeSuccessAlert = () => {
        showSuccessAlert(false)
        showErrorAlert(false)
    }

  
    const onFinish = async (values) => {

        console.log(values)
        console.log(recaptchaToken)
        console.log(base64)

        if(recaptchaToken !== undefined){
            try {
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
            setFileName()
            showSuccessAlert(true)
        }
    
    }

    const updateRecaptchaToken = (token) => {
        setReCaptchaToken(token);
    };

    const selectServiceType = (value) => {
        // console.log("VALUE: "+value.target.value)
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
                    <Radio.Button value="service">Service </Radio.Button>
                    <Radio.Button value="job" >Job </Radio.Button>
                    <Radio.Button value="inquiry" >Inquiry</Radio.Button>
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
                    <Input placeholder="Please enter your Full Name:" />
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
                    <Input placeholder="Please enter your Email Address:"/>
                </Form.Item>
                <Form.Item
                    name="telephone"
                >
                    <Input placeholder="Please enter your Telephone/Mobile Phone:" />
                </Form.Item>
                <Form.Item
                    name="subject"
                >
                    <Input placeholder="Position applying for or service inquiring for:" />
                </Form.Item>
                <Form.Item
                    name="message"
                >
                    <TextArea placeholder="Message" />
                </Form.Item>
                {serviceType!=='job' && serviceType!=='inquiry'?null:
                <Form.Item 
                    // name="attachment"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[
                        {
                            required: true,
                            message: 'Please select a pdf attachement.',
                        },
                    ]}
                >
                    {errorAlertVisible ? (
                        <Alert message="Image must smaller than 2MB!" className='error-message' type="error"  />
                    ) : null} <br />
                    <Upload 
                        accept= '.jpeg,.png,.jpg,.dng, .pdf, .docx, .doc'
                        showUploadList={false}
                        onChange={handleChange}
                    >
                        <Button icon={<UploadOutlined />}>Click to Upload Resume</Button>
                        {fileName ? (
                                <span> &nbsp; &nbsp;{fileName}</span>
                            ) : (null)
                        }
                    </Upload>
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
                {errorAlertVisible === false ? (
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit
                    </Button>
                </Form.Item>): null}
                </Form>
            </div>
        </div>  
    );
}
export default AppBulletin;