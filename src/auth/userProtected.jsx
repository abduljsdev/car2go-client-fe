import jwtDecode from 'jwt-decode';
import React from 'react'



function UserElement({ children, name }) {

    const token = localStorage.getItem('user-token')
    const currentUser = jwtDecode(token);
    let ChildeName = name
    if (currentUser.role === 'SELLER' && ChildeName === 'seller') {
        return (
            children
        )
    }
    if (currentUser.role === 'BUYER' && ChildeName === 'buyer') {
        return (
            children
        )
    }
    else {
        return <><p>You do not have access to this page</p></>
    }
}

export default UserElement