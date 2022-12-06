import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe-area mt-5  poppins-font'>
            <div className="dark-overlay-subscribe">
                <div className="container text-center pt-lg-5 pt-sm-1 text-white">
                    <h1 style={{ marginTop: '80px', fontWeight: 'bold' }}>TRAVEL FAR ENOUGH, YOU MEET YOURSELF</h1>
                    <p className='lead my-4'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br /> lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <button className='btn btn-danger'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;