import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { addFormData, clearAddFormData } from "../../store/bookingFormSlice";
import { unClickBtn } from "../../store/autoClickSlice";
import jwtDecode from "jwt-decode";
import "./common.css";
import { logoutUser } from "../../store/userSlice";
import { clearUserProfile } from "../../store/userProfileSlice";



function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const token = localStorage.getItem('user-token');
  let accountData;
  if (token) {
    const currentUser = jwtDecode(token);
    accountData = currentUser.account;
  }

  const accountHandle = () => {
    accountData.firstName === '' ? navigate('/create-account') : navigate('/dashboard')
  }

  const profileHandle = () => {
    accountData.firstName === '' ? navigate('/create-account') : navigate('/dashboard')
  }

  function logoutHandle() {
    localStorage.clear();
    dispatch(logout());
    dispatch(logoutUser());
    dispatch(addFormData({}));
    dispatch(clearUserProfile());

    dispatch(unClickBtn());
    navigate("/home")
  }


  return (
    // F0E3CA
    // D58BDD
    // EAAC7F
    //EEECDA
    <div className="fixed-top" style={{ backgroundColor: '#EEECDA' }}>
      <Navbar className="navbar  h-100 py-4" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="/images/logo.png" width="200px" alt="Header not found" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 mx-auto my-lg-0 "
              style={{ maxHeight: "100px", }}
              navbarScroll
            >
              <Link to="/"></Link>
              <Link to="home" className="header-link">
                Home
              </Link>
              <Link to="about" className="header-link">
                About
              </Link>
              <Link to="vehicles" className="header-link">
                vehicles
              </Link>
              <Link to="blog" className="header-link">
                Blog
              </Link>
              <Link to="contact-us" className="header-link">
                Contact Us
              </Link>
              {isLoggedIn ? (
                <a onClick={accountHandle} className="header-link ls-3" style={{ cursor: "pointer" }}>
                  Account
                </a>
              ) : (
                <>
                  <Link to="login" className="header-link ls-3">
                    Login
                  </Link>
                  <Link to="sign-up" className="header-link ls-3">
                    SignUp
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          <div className="ls-2">
            {isLoggedIn ? (
              <Nav className="me-5">
                <NavDropdown title={<img src="/images/profile-image.png" /* Replace with your user avatar image */ height="30" />} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={profileHandle}>Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <>
                <Link to="login" className="login-sign-up">
                  Login
                </Link>
                <Link to="sign-up" className="login-sign-up me-5">
                  SignUp
                </Link>
              </>
            )}
          </div>




        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
