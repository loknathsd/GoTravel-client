import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div style={{fontFamily:'poppins'}} className='my-5 py-5 '>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className='text-center'>Please fill out this form to contact us</h3>
                        <hr />
                        <form className='mt-5'>
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <label htmlFor="">Name</label>
                                    <input className='form-control' placeholder='Your Name' type="text" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="">Email</label>
                                    <input className='form-control' placeholder='Email' type="email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Phone Number</label>
                                    <input className='form-control' placeholder='Phone number' type="number" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Subject</label>
                                    <input className='form-control' placeholder='Subject*' type="text" />
                                </div>
                            </div>
                            <label >Message</label>
                            <textarea placeholder='Message*' className='form-control' rows="4"></textarea>
                            <button className='btn btn-outline-danger my-4'>Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4 ">
                        <h2 className='ml-5 mb-5'>Get In Touch</h2>
                        <div className='ml-5 '>
                            <h5>address: 11/234 Main Street. Kingstown</h5>
                            <h5>phone: +00-000-0000</h5>
                            <h5>email: gotravel@gmail.com</h5>
                        </div>
                        <div className='ml-5 social-icons mt-5'>
                            <Link to=""  ><FontAwesomeIcon  icon={faFacebook}></FontAwesomeIcon></Link>
                            <Link to="" ><FontAwesomeIcon  icon={faTwitter}></FontAwesomeIcon></Link>
                            <Link to="" ><FontAwesomeIcon  icon={faYoutube}></FontAwesomeIcon></Link>
                            <Link to="" ><FontAwesomeIcon  icon={faLinkedin}></FontAwesomeIcon></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;