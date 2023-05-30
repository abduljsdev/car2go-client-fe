import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function PublicElement({ children, name }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('user-token')
    if (token) {
        const currentUser = jwtDecode(token)
        if (((currentUser.account.firstName === '' || currentUser.account.firstName === undefined) && (currentUser.role === 'SELLER'))) {
            useEffect(() => {
                navigate('/create-account')
            }, []);
        } else {
            if (currentUser.role === 'SELLER') {
                navigate('/dashboard')
            }
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