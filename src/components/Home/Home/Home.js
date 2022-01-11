
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Packages from '../Packages/Packages';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div> 
            <Banner></Banner>
            <Packages></Packages>
            <ChooseUs></ChooseUs>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;