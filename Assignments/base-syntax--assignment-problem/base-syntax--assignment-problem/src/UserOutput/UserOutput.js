import React from 'react';
import './UserOutput.css';

const UserOutput = (user) => {

    return (
        <div className="uUser">
            <p>Username: </p>
            <p>{user.name}</p>
        </div>
    )
};

export default UserOutput;