import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getApi } from '../../../services/apiCaller.service';



function ViewAccount() {
    const token = localStorage.getItem('user-token')
    const currentUser = jwtDecode(token);
    const id = currentUser.id;
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/user/${id}` });
            setUser(res.data.data);
        };


        getUser();
        // eslint-disable-next-line
    }, [])
    if (user.firstName) {
        return (
            <>
                <Row className='mt-5 px-2'>
                    <Col col={12}>
                        <div className="divider-line">
                            <span>
                                Account Information
                            </span>
                        </div>
                    </Col>
                </Row>
                <Table className='mt-5'>
                    <tbody>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>First Name </td>
                            <td className='py-4'>{user.account.firstName}</td>
                        </tr>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>last Name </td>
                            <td className='py-4'>{user.account.lastName}</td>
                        </tr>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>Email</td>
                            <td className='py-4'>{user.email}</td>
                        </tr>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>Phone</td>
                            <td className='py-4'>{user.account.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>Date Of Birth</td>
                            <td className='py-4'>{user.account.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>CNIC Number</td>
                            <td className='py-4'>{user.account.cnicNumber}</td>
                        </tr>
                        <tr>
                            <td className='py-4 ps-4 fw-bold'>Address</td>
                            <td className='py-4'>{`${user.account.street} ${user.account.city}`}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default ViewAccount;