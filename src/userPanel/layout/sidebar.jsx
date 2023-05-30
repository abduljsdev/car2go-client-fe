import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faLock,
  faRightToBracket,
  faUserGear,
  faSquarePlus,
  faTaxi,
  faTableList,
  faRectangleList,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearUserProfile, setUserProfile } from "../../store/userProfileSlice";
import { getApi } from "../../services/apiCaller.service";

function Sidebar() {
  const [userProfileData, setUserProfileData] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCar = async () => {
      const res = await getApi({ url: `${process.env.REACT_APP_BASE_URL}/user/me` });
      const data = res.data.data;
      setUserProfileData(data)
      dispatch(setUserProfile(res.data.data))
    };
    getCar();
  }, [])

  useEffect(() => {

  }, [])

  function handleLogout() {
    dispatch(logout());
  }
  if (userProfileData.role) {
    return (
      <ul className="sidebar">
        <li
          className="text-center"
          style={{
            backgroundColor: "#181938 ",
            padding: "20px",
          }}
        >
          <img
            src="/images/profile-image.png"
            alt="Profile"
            style={{
              width: "130px",
              height: "130px",
              marginBottom: "20px",
            }}
          />
          <h6 className="fw-bold text-center text-secondary">Ali Haider</h6>
        </li>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink
            to="view-account"
            className={`sidebar-link ${({ isActive }) =>
              isActive ? "active" : undefined}`}
          >
            <FontAwesomeIcon className="me-3" icon={faUserGear} />
            Account
          </NavLink>
        </li>
        {userProfileData.role === 'SELLER' ?
          <li>
            <NavLink
              to="add-car"
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <FontAwesomeIcon className="me-3" icon={faSquarePlus} />
              Add Car
            </NavLink>
          </li>
          : null
        }
        {userProfileData.role === 'SELLER' ?
          <li>
            <NavLink
              to="rented-cars"
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <FontAwesomeIcon className="me-3" icon={faTaxi} />
              Rented Cars
            </NavLink>
          </li>
          : null
        }
        {userProfileData.role === 'SELLER' ?
          <li>
            <NavLink
              to="view-all"
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <FontAwesomeIcon className="me-3" icon={faTableList} />
              All Cars
            </NavLink>
          </li>
          : null
        }
        {userProfileData.role === 'BUYER' ?
          <li>
            <NavLink
              to="booked-cars"
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              <FontAwesomeIcon className="me-3" icon={faRectangleList} />
              Booked Cars
            </NavLink>
          </li>
          : null
        }

        <li>
          <NavLink
            to="update-account"
            className={`sidebar-link ${({ isActive }) =>
              isActive ? "active" : undefined}`}
          >
            <FontAwesomeIcon className="me-3" icon={faGear} />
            Setting
          </NavLink>
        </li>
        <li>
          <NavLink
            to="change-password"
            className={`sidebar-link ${({ isActive }) =>
              isActive ? "active" : undefined}`}
          >
            <FontAwesomeIcon className="me-3" icon={faLock} />
            Security
          </NavLink>
        </li>
        <li>
          <NavLink
            to="account-status"
            className={`sidebar-link ${({ isActive }) =>
              isActive ? "active" : undefined}`}
          >
            <FontAwesomeIcon className="me-3" icon={faCheckDouble} />
            verified
          </NavLink>
        </li>
        <li>
          {userProfileData.role === 'BUYER' ?
            <li>
              <NavLink
                to="../home"
                className={`sidebar-link ${({ isActive }) =>
                  isActive ? "active" : undefined}`
                }
              >
                <FontAwesomeIcon className="me-3" icon={faCheckDouble} />
                Home
              </NavLink>
            </li>
            : null
          }

          <NavLink
            to="/"
            className={`sidebar-link ${({ isActive }) =>
              isActive ? "active" : undefined}`}
            style={{ borderRadius: "0px 0px 5px 5px" }}
            onClick={async () => {
              localStorage.clear();
              handleLogout()
              dispatch(clearUserProfile());
              navigate("/")
            }}>
            <FontAwesomeIcon className="me-3" icon={faRightToBracket} />
            Logout
          </NavLink>
        </li>
      </ul>
    );
  }

}

export default Sidebar;
