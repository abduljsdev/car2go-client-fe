import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function AccountElement({ children, name }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('user-token')
    const currentUser = jwtDecode(token);

    let ChildeName = name
    if ((currentUser.account.firstName === '' || currentUser.account.firstName === undefined) && ChildeName === 'account') {
        return (
            children
        )
    }

    else {
        useEffect(() => {
            return navigate('/dashboard');
        }, []);
    }
}

export default AccountElement