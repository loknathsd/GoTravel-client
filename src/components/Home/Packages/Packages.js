import React,{useState,useEffect} from 'react';
import Package from '../Package/Package';
import { Loader } from 'rsuite';    

const Packages = () => {
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch('https://go-travel.onrender.com/travels')
        .then(res=>res.json())
        .then(data=>setPackages(data));
    },[])
    return (
        <section className='my-5 pt-5'>
            <div className="container">
                <h1 style={{color:'#333333',fontWeight:'bold',marginBottom:'30px'}} className='text-center text-uppercase'>Our Packages </h1>
                <div className="row">
                    {
                       packages.length>0 ? packages.map(pk=><Package key={pk._id} pk={pk}></Package>) : <h1 style={{marginLeft:'500px'}}>Loading....</h1>
                    }
                </div>
            </div>
        </section>
    );
};

export default Packages;