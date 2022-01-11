import React from 'react';
import Banner from '../../images/aboutbanner.jpg'
const About = () => {
    return (
        <div className=' py-5'>
            <img style={{height:'400px' ,width:'100%'}}  src={Banner} alt="" />
            <div className="container">
                <h1 className='text-center my-4'>About us</h1>
                <p className='pb-5'>GoTravel is a full-service Outbound Tour Operator in Bangladesh. The founder of GoTravel is a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers or clients and become the best travel agency in Bangladesh, focusing on creating friendship and a long-lasting relationship with our beloved clients. In the year 2013, we decided to create a tour company by the name GoTravel to specialize in the receptive tourism market and to achieve the title of the best tours and travel company in Bangladesh. In this regard, we have contracts and alliances with most of the hotels, tourist organizations & companies in most of the countries around the world that help us provide the best quality service to our clients. Therefore, we investigate every single detail of your trip, to ensure each sector has all the ingredients to satisfy our clients and help us become the best tour operator in Bangladesh. We can proudly talk of the following achievements:</p>
                
            </div>
        </div>
    );
};

export default About;