import React, { useState, useEffect } from 'react';
import {Link, } from 'react-router-dom'
const customerData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                            
                        </tr>
                    )
                })

            }
        </>
    )
}
export default customerData;
