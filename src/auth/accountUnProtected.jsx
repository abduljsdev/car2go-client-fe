import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode';

function AccountUnProtectedElement({ children, name }) {
    const token = localStorage.getItem('user-token')
    const currentUser = jwtDecode(token);
    let ChildeName = name
    if (currentUser.account.firstName === '' && ChildeName === 'account') {
        return (
            children
        )
    }
}

export default AccountUnProtectedElement;