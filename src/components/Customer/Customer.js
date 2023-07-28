import React, { useState, useEffect } from 'react';

import './Customer.css'
import CustomerData from './CustomerData.js'
const Customer = (props) => {
    const [customer, setCustomer] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(people => setCustomer(people))
    }, [])
    console.log(customer)
    return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <CustomerData users={customer}></CustomerData>
                </tbody>
            </table>
        </div>
    );
};

export default Customer;