import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const PackageDetail = () => {
    const [ packageDetail,setPackageDetail] = useState({})
    
    const { id } = useParams(); 
    const history = useHistory()

    useEffect(()=>{
        fetch(`https://go-travel.onrender.com/detailById/${id}`)
        .then(res=>res.json())
        .then(data=>setPackageDetail(data))
    },[])

    const handleBookButton = (id)=>{
      history.push(`/bookNow/${id}`)
    }
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                     <h1 style={{color:'Hotpink'}}>{packageDetail.name}</h1>
                     <p className='my-3'>{packageDetail.des}</p>
                    <div className='my-4'>
                    <h5 >TRAVEL STYLE : <span className='text-danger'>ACTIVE</span></h5>
                     <h5>SERVICE LEVEL :<span className='text-danger'>STANDARD</span></h5>
                     <h5>TRIP TYPE : <span className='text-danger'>SMALL GROUP</span></h5>
                    </div>
                     <h4>Price: ${packageDetail.price}</h4>
                      <p className='text-info'>{packageDetail.days} days</p> 
                      <button onClick={()=>handleBookButton(packageDetail._id)} className='btn btn-danger mb-5'>Book Now</button>
                    </div>

                    <div className="col-md-6 my-5">
                        <img src={packageDetail.image} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;