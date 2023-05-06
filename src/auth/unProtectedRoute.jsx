import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function UnProtectedRoute(props) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (userToken) {
            setIsLoggedIn(true);
            return navigate('/');
        }
        setIsLoggedIn(false);
    }
    useEffect(() => {
        checkUserToken();
        // eslint-disable-next-line 
    }, [isLoggedIn]);


    return (
        <div>
            {
                isLoggedIn ? null : props.children
            }
        </div>
    )
}

export default UnProtectedRoute