import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import { ContextUser } from '../../App';

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([])
    const [user, setUser] = useContext(ContextUser);
    console.log(setUser)

    useEffect(() => {
        fetch('https://go-travel-server-production.up.railway.app/myBookings?email=' + user.email)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure cancel the booking')
        if (confirm) {
            fetch(`https://go-travel-server-production.up.railway.app/delete/${id}`, {
                method: 'DELETE'
            })
                .then(result => {
                    alert('Your booking has cancelled')
                    const remain = myBookings.filter(booking => booking._id !== id)
                    setMyBookings(remain)
                })
        }
    }
    return (
        <div className='my-5 py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info mb-4'>My Bookings</h1>
                        <div className="table-responsive">
                            <table className="table">
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
                                        myBookings.map((booking, index) =>
                                            <tr key={index}>
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
        </div>
    );
};

export default MyBookings;