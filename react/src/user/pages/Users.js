import React from 'react'

import UsersList from '../components/UsersList'

import img from '../../img/Earth.jpg'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            image: img,
            name: 'Christian Rodriguez',
            places: 1,
        }
    ]

    return (
        <UsersList items={USERS}/>
    )
}

export default Users