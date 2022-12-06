import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner-area'>
            <div className="dark-overlay ">
                <div className='container text-area'>
                    <h1>Travel With Us </h1>
                    <h2 >For The Best Deal</h2>
                    <Link to="/about"  className='btn btn-outline-warning m-4 px-4'>About Us</Link>
                    <Link to="/contact" className='btn btn-outline-light  px-4'>Contact Us</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;