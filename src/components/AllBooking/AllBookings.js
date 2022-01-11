import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const AllBookings = () => {
    const [allBooking, setAllBooking] = useState([])

    useEffect(() => {
        fetch('https://calm-cliffs-11166.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure cancel the booking')
        if (confirm) {
            fetch(`https://calm-cliffs-11166.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
                .then(result => {
                    alert('Your booking has cancelled')
                    const remain = allBooking.filter(booking => booking._id !== id)
                    setAllBooking(remain)
                })
        }

    }
    return (
        <div className='my-5 py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <h1 className='text-center mt-2 mb-4 text-danger'>All Bookings</h1>
                        <table class="table">
                            <thead className='table-secondary'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Booking</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBooking.map((booking, index) =>
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{booking.username}</td>
                                            <td>{booking.email}</td>
                                            <td>{booking.countryName}</td>
                                            <td>{booking.date}</td>
                                            <td>{booking.address}</td>
                                            <td><span onClick={() => handleDelete(booking._id)} style={{ fontSize: '20px', color: 'red' }}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span></td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBookings;