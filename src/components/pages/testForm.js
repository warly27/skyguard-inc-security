import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// };

 const onLoad = (fileString) => {
    console.log(fileString)
    // setBase64(fileString);
    // console.log(base64);
  };

  const getBase64 = (file, callback) => {
    let reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(file);
      onLoad(reader.result);
      
    };
  };

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'  || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/pdf';
  console.log(file)

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

const AppTestForm = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [ fileName, setFileName ] = useState()

  const handleChange = (info) => {
      console.log(info)
    if (info.file.status === 'uploading' && info.file.status === 'error') {
      setLoading(true);
      return;
    } else {

    // if (info.file.status === 'error') {
      // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
    //     console.log(info.file.originFileObj)
    //     setFileName(info.file.originFileObj.name)
    //     setImageUrl(url);
    //   });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
        {fileName ? (
        <span>{fileName}</span>
      ) : (
        null
      )}
    </Upload>
    
  );
};

export default AppTestForm;