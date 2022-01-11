import React,{useState,useEffect} from 'react';
import PackageImg from '../../../images/package.jpg';
import Package from '../Package/Package';



const Packages = () => {
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch('https://calm-cliffs-11166.herokuapp.com/travels')
        .then(res=>res.json())
        .then(data=>setPackages(data))

    },[])
    return (
        <section className='my-5 pt-5'>
            <div className="container">
                <h1 style={{color:'#333333',fontWeight:'bold',marginBottom:'30px'}} className='text-center text-uppercase'>Our Packages </h1>
                <div className="row">
                    {
                        packages.map(pk=><Package key={pk._id} pk={pk}></Package>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Packages;