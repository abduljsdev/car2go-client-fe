import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import './style/theme.css'
import "./App.css";
import "./style/common.css";
import "./style/util.css";
import { Route, Routes } from "react-router-dom";
import ThemeLayout from "./layout";
import PanelLayout from "./userPanel/layout";
import SignUp from './auth/signUp';
import Login from './auth/login';
import ForgetPassword from './auth/forgetPassword';
import ProtectedRoute from "./auth/protectedRoute";
import CreateAccount from "./userPanel/common/account/create";
import UnProtectedRoute from "./auth/unProtectedRoute";
import AccountUnProtectedElement from "./auth/accountUnProtected";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ThemeLayout />} />
        <Route path="dashboard/*" element={
          <ProtectedRoute>
            <PanelLayout />
          </ProtectedRoute>
        } />
        <Route path="sign-up" element={<SignUp />} />

        <Route path="Login" element={
          <UnProtectedRoute><Login /></UnProtectedRoute>
        } />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="/create-account" element={
          <ProtectedRoute>
            <AccountUnProtectedElement name="account">
              <CreateAccount />
            </AccountUnProtectedElement>
          </ProtectedRoute>
        } />
      </Routes>
    </>

  );
}

export default App;
