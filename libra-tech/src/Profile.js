import React from 'react';
import { useAuth } from './AuthProvider';

function Profile() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Profile</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.emri} {user.mbiemri}</p>
            <p>Gender: {user.klientiGjinia}</p>
            <p>City: {user.klientiQyteti}</p>
            <p>Role: {user.roli}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
