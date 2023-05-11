import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function PublicElement({ children, name }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('user-token')
    if (token) {
        const currentUser = jwtDecode(token)
        if ((currentUser.account.firstName === '' || currentUser.account.firstName === undefined)) {
            useEffect(() => {
                navigate('/create-account')
            }, []);
        }
        if (currentUser.role === 'SELLER') {
            useEffect(() => {
                navigate('/dashboard')
            }, []);
        }
        if (currentUser.role === 'BUYER') {
            return (
                children
            )
        }
    }
    else {
        return (
            children
        )
    }
}

export default PublicElement