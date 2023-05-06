import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function ProtectedRoute(props) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
        // eslint-disable-next-line 
    }, [isLoggedIn]);


    return (
        <div>
            {
                isLoggedIn ? props.children : null
            }
        </div>
    )
}

export default ProtectedRoute