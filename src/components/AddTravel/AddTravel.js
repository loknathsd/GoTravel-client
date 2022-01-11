import React from 'react';
import './AddTravel.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddTravel = () => {
    const [imageURL,setImageURL]= useState(null)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleFile = e => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '27857de30973670589e3e40a5817902c')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res.data.data.display_url)
                setImageURL(res.data.data.display_url)
            })
            .catch(err => console.log(err));
    }

    const onSubmit = data => {
        const travelData = {
            name: data.name,
            des: data.description,
            price: data.price,
            days: data.days,
            image: imageURL

        }
       fetch('https://calm-cliffs-11166.herokuapp.com/addTravel',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body: JSON.stringify(travelData)
       })
       .then(result=>{
           alert('You are successfully added travel')
           reset();
       })
    }

    return (
        <div className='py-5 add-travel '>
            <div className='container my-5 pt-5'>
               <div className="row">
               <div className='col-md-6 mx-auto bg-white py-4 px-5 rounded mb-5'>
                    <h2 className='mb-4 text-center text-info'>You can add Travel</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control my-3' placeholder='Country Name'  {...register("name")} />

                        <textarea className='form-control my-3' placeholder='Description' {...register("description", { required: true })} />
                        {errors.descriptionRequired && <span>This field is required</span>}

                        <input onChange={handleFile} className='form-control my-2' placeholder='Upload Image' type="file" />

                        <input className='form-control my-3' placeholder='Price'  {...register("price")} />

                        <input className='form-control my-3' placeholder='Days'  {...register("days")} /> <br />

                        <input className='btn btn-danger form-control ' type="submit" />
                    </form>
                </div>
               </div>
            </div>
        </div>
    );
};

export default AddTravel;