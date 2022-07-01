import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'
const FetchData = () => {
    const [users, setUsers] = useState()
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
        console.log(users);
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <ul className='users'>
            {/* {users.map((user) => {
                const { id, login } = user;
                return <li key={user.id}>
                        <h2>{user.login}</h2>
                    </li>
            })} */}
            </ul>
        </div>
    )
}

export default FetchData