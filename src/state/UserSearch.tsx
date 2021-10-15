import React, { useState } from 'react'

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 22 },
    {name: 'Michael', age: 23 }
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');

    const onClick = () => {};

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
        </div>
    )
};

export default UserSearch;