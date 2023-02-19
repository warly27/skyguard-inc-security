import React from 'react'
import { Carousel, Button, Modal } from 'antd';
import { useState } from 'react';


const AppBulletin = () => {

    const [visible, setVisible] = useState(false);

    const handleOK = () => {
        setVisible(false)
    }

    const data = [
        {
            id: 1,
            title: 'Title1',
            description: 'Description1',
            img: require('../../assets/images/the-role-model.png')
        },
        {
            id: 2,
            title: 'Title2',
            description: 'Description2',
            img: require('../../assets/images/training-1.jpg')
        },
        {
            id: 3,
            title: 'Title3',
            description: 'Description3',
            img: require('../../assets/images/bomb-training.jpg')
        },
        {
            id: 4,
            title: 'Title4',
            description: 'Description4',
            img: require('../../assets/images/officer-1.jpg')
        }
    ]

    const [selectedImage, setSelectedImage] = useState({});

    const handleClick = (d) => {
        setVisible(true)
        setSelectedImage(d)
    }

    return (
       <div id='bulletin' className=''>
            <div>
                <div className="titleHolder">
                    <h2>Bulletin Board</h2>
                </div>
                <Carousel autoplay dotPosition='top'>
                    { data.map(d => {
                        return (
                            <div className='carousel-items' key={d.id}>
                                <div className='leftside-items'>
                                    <img src={ d.img } style={{width:'100%', height:'400px', objectFit: 'contain'}}/>
                                </div>
                                <div className='rightside-items'>
                                    <h2 className='blue'>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <Button type="primary" size="large" onClick={() => handleClick(d)}>Know More</Button>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <Modal 
                open={ visible } 
                destroyOnClose={true} 
                onOk={ handleOK }
                title={selectedImage.title} 
                onCancel={handleOK}
                width='70%'
            >
                        <div key={selectedImage.id}>
                            <img src={ selectedImage.img } style={{width:'100%', height:'auto', objectFit: 'contain'}}/>
                            <p>{selectedImage.description}</p>
                        </div>

            </Modal>            
       </div>
    );
}
export default AppBulletin;