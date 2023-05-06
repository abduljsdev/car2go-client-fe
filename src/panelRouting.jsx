import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/common/pageNotFound";
import BookedCars from "./userPanel/buyer/bookedCar";
import ViewAccount from "./userPanel/common/account/view";
import AddCar from "./userPanel/seller/addCar";
import RentedCar from "./userPanel/seller/rentedCar";
import ViewAllCars from "./userPanel/seller/viewAllCars";
import UpdateAccount from './userPanel/common/setting/updateAccount';
import ChangePassword from "./userPanel/common/security/changePassword";
import AccountStatus from './userPanel/common/status/index';
import ProtectedRoute from "./auth/protectedRoute";
import UserElement from "./auth/userProtected";
import EditCar from "./userPanel/seller/editCar";
import ViewCar from "./userPanel/seller/viewCar";

function PanelRouting() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <ViewAccount />
        </ProtectedRoute>
      } />
      <Route path="view-account" element={
        <ProtectedRoute>
          <ViewAccount />
        </ProtectedRoute>
      } />
      <Route path="add-car" element={
        <ProtectedRoute>
          <UserElement name='seller'>
            <AddCar />
          </UserElement>
        </ProtectedRoute>
      } />
      <Route path="edit-car/:id" element={
        <ProtectedRoute>
          <UserElement name='seller'>
            <EditCar />
          </UserElement>
        </ProtectedRoute>
      } />
      <Route path="rented-cars" element={
        <ProtectedRoute>
          <UserElement name='seller'>
            <RentedCar />
          </UserElement>
        </ProtectedRoute>
      } />
      <Route path="view-all" element={
        <ProtectedRoute>
          <UserElement name='seller'>
            <ViewAllCars />
          </UserElement>
        </ProtectedRoute>
      } />
      <Route path="view-car/:id" element={
        <ProtectedRoute>
          <UserElement name='seller'>
            <ViewCar />
          </UserElement>
        </ProtectedRoute>
      } />
      <Route path="booked-cars" element={
        <ProtectedRoute>
          <UserElement name='buyer'>
            <BookedCars />
          </UserElement>
        </ProtectedRoute>
      } />
      <Route path="update-account" element={
        <ProtectedRoute>
          <UpdateAccount />
        </ProtectedRoute>
      } />
      <Route path="change-password" element={
        <ProtectedRoute>
          <ChangePassword />
        </ProtectedRoute>

      } />
      <Route path="account-status" element={
        <ProtectedRoute>
          <AccountStatus />
        </ProtectedRoute>

      } />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}


export default PanelRouting;
