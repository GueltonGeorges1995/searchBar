'use client'
import React, { useState } from 'react'

export default function Page() {

    const [users, setUsers] = useState([
        {
            name: 'Georges guelton',
            email: 'georges.guelton@gmail.com',
            phone: 908
        },
        {
            name: 'Georges balon',
            email: 'georges.guelton@gmail.com',
            phone: 909
        },
        {
            name: 'Georges pierre',
            email: 'georges.guelton@gmail.com',
            phone: 910
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([])
    const [hasSearched, setHasSearched] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
        setHasSearched(true);
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" name="" id="" placeholder='search' value={inputValue} onChange={handleChange} />
                <button>Search</button>
            </form>
            <ul>
                {!hasSearched ? (
                    users.map((user) => (
                        <li key={user.phone}>
                            {user.name} - {user.email}
                        </li>
                    ))
                ) : (
                    filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                            <li key={user.phone}>
                                {user.name} - {user.email}
                            </li>
                        ))
                    ) : (
                        <li>No users found</li>
                    )
                )}
            </ul>
        </div>
    )
}
