import React, { useState, useEffect } from 'react';
import api from '../../../services/axios';
import { useSelector } from 'react-redux';
import {showSuccessNotification, showErrorNotification} from '../../../Notification/Notification'
import './UserProfile.css';

function UserProfile() {
  const initialUserData = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone_no: "",
    postal_code: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    api.get(`api/v1/users/${4}/user_profile`)
      .then((response) => {
        const userDataFromAPI = response.data;
        setUserData(userDataFromAPI);
      })
      .catch((error) => {
        showErrorNotification(response.error)
      });
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  // Function to update the user profile
  const updateUserProfile = async() => {
    api
    .patch(`api/v1/users/${4}/update_profile`, {user: userData})
    .then((response) => {
      const updatedUserData = response.data;
      setUserData(updatedUserData);
      showSuccessNotification("Profile has been updated successfully")
    })
    .catch((error) => {
      showErrorNotification(response.error)
      console.error('Error updating user profile:', error);
    });
  };

  return (
    <div className="container mt-4 profile">
      <div className="card profile-card">
        <div className="card-header">
          <h1 className="text-center">Profile</h1>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                value={userData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                value={userData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <textarea
                className="form-control"
                id="address"
                value={userData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone_no"
                value={userData.phone_no}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postalCode" className="form-label">
                Postal Code:
              </label>
              <input
                type="text"
                className="form-control"
                id="postal_code"
                value={userData.postal_code || ""}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={updateUserProfile}
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
