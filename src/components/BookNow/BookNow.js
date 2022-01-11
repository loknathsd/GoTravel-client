import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './BookNow.css'
import { ContextUser } from '../../App'


const BookNow = () => {
    const [user, setUser] = useContext(ContextUser)
    const [packageDetail, setPackageDetail] = useState({})
    const { id } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://calm-cliffs-11166.herokuapp.com/detailById/${id}`)
            .then(res => res.json())
            .then(data => setPackageDetail(data))
    }, [])


    const onSubmit = data => {
        fetch('https://calm-cliffs-11166.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                console.log(result)
                alert('Your booking successful')
                reset()
            })

    }

    return (
        <div className='pt-5 mt-5 book-area'>
            <div className="container">
               <div className="row">
               <div className='col-md-6 mx-auto shadow bg-light rounded p-5 mt-3'>
                    <h3 className='text-center mb-4 text-danger'>Booking information</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control my-3" defaultValue={user.name} {...register("username")} />

                        <input defaultValue={user.email} className="form-control my-3" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}

                        <input defaultValue={packageDetail.name} className="form-control my-3" {...register("countryName", { required: true })} />
                        {errors.countryName && <span>This field is required</span>}

                        <input defaultValue={new Date().toDateString('dd/MM/yyyy')} className="form-control my-3" {...register("date", { required: true })} />
                        {errors.date && <span>This field is required</span>}

                        <input placeholder='Phone number' className="form-control my-3" {...register("phone", { required: true })} />
                        {errors.phone && <span>This field is required</span>}

                        <input placeholder='Your address' className="form-control my-3" {...register("address", { required: true })} />
                        {errors.address && <span>This field is required</span>}

                        <button className='btn btn-danger form-control' type="submit" >Confirm</button>
                    </form>
                </div>
               </div>
            </div>
        </div>
    );
};

export default BookNow;