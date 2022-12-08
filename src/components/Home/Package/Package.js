import { faClock } from '@fortawesome/free-regular-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';


const Package = ({pk}) => {
    const{name,des,image,price,days,_id}=pk;

    const history = useHistory();

    const handleBookNow=(id)=>{
         history.push(`/packageDetail/${id}`)
    }
    return (
        <div className='col-md-4 my-3'>
            <div style={{height:'600px',width:'350px'}}  className="card text-center">
                <div style={{fontFamily:'poppins'}} className="card-body">
                    <img className='img-fluid' src={image} alt="" />
                    <h2 className='my-3'>{name}</h2>
                    <p style={{fontSize:'18px'}} className='text-secondary text-left'>{des}</p>
                    <div className='d-flex justify-content-between mx-2 my-3'>
                    <h4 className='text-info'>$ {price}</h4>
                    <h5><FontAwesomeIcon style={{color:'aqua'}}  icon={faClock} /> {days}days</h5>
                    </div>
                    <button onClick={()=>handleBookNow(_id)} className='btn btn-danger  '>Booking</button>  
                </div>
            </div>
            
        </div>
    );
};

export default Package;