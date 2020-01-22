import React from 'react'

import UsersList from '../components/UsersList.jsx'

const Users = () => {
    const USERS = [
        {
        id: 'ul',
        name: 'Max Schwarz',
        image: 'http://www.pexels.com/photo/couple-wearing-blue-denim-jacket-3344281/',
        placeCount: 2
    }
]

    return <UsersList items={USERS} />
};

export default Users;