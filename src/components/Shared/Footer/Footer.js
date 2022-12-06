import { faEnvelope,  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ background: '#333333', padding: '50px 0' }}>
            <div className="container text-light footer-area">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo} alt="" />
                        <div className='text-Area mt-4'>
                            <p>This is Photoshop's version of Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auci elit.</p>
                            <p ><FontAwesomeIcon style={{marginRight:'10px'}}  icon={faPhoneAlt} /> +387648592568</p>
                            <p><FontAwesomeIcon style={{marginRight:'10px'}} icon={faEnvelope} /> support@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 >About</h3>
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Register</a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3  >Discover</h3>
                    <ul>
                            <li><a href="">Community Blog</a></li>
                            <li><a href="">Tour Guide</a></li>
                            <li><a href="">WishList</a></li>
                            <li><a href="">Gallery</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>Ask Question ?</h3>
                        <form action="">
                            <input placeholder='Your email' className='form-control' type="text" />
                            <textarea placeholder='Your Question.?' name="" id="" className='form-control mt-2' rows="2"></textarea>
                            <button className='btn btn-outline-secondary mt-3'>Send Message</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;