import React from 'react'
import { Carousel, Button } from 'antd';

import image1 from '../../assets/images/the-role-model.png';
import image2 from '../../assets/images/training-1.jpg';
import image3 from '../../assets/images/bomb-training.jpg';
import image4 from '../../assets/images/officer-1.jpg';


const AppBulletin = () => {

    const testClick = () => {
        alert ("hello")
    }

    const data = [
        {
            id: 1,
            image: { image1 },
            title: 'Title1',
            description: 'Description1'
        },
        {
            id: 2,
            image: { image2 },
            title: 'Title2',
            description: 'Description2'
        },
        {
            id: 3,
            image: { image3 },
            title: 'Title3',
            description: 'Description3'
        },
        {
            id: 4,
            image: { image4 },
            title: 'Title4',
            description: 'Description4'
        }
    ]
    return (
       <div id='bulletin'>
            <div className="titleHolder">
                <h2>Bulletin Board</h2>
            </div>
            <Carousel autoplay dotPosition='top'>
                { data.map(d => {
                    return (
                        <div className='carousel-items' key={d.id}>
                            <div className='leftside-items'>
                                <img src={d.image} style={{width:'100%', height:'400px', objectFit: 'contain'}}/>
                            </div>
                            <div className='rightside-items'>
                                <h2 className='blue'>{d.title}</h2>
                                <p>{d.description}</p>
                                <Button type="primary" size="large" onClick={testClick}>Know More</Button>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
       </div>
    );
}
export default AppBulletin;