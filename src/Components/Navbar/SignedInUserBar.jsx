import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../slices/userSlice";
import { emptyCart } from "../../slices/cartSlice";
import api from "../../services/axios";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../Notification/Notification";
import { Link } from "react-router-dom";

function SignedInUserBar({ loggedUser }) {
  const dispatch = useDispatch();

  const loggedOutuser = async () => {
    api
      .delete("api/v1/users/sign_out")
      .then(() => {
        dispatch(logoutUser());
        dispatch(emptyCart());
        showSuccessNotification("Logged out Succesfully");
      })
      .catch((error) => {
        showErrorNotification(error);
      });
  };

  if (loggedUser?.user) {
    return (
      <>
        <div className="user-font-text text-white">
          {loggedUser.user.full_name}
        </div>
        <div>
          <div>
            <Link to="/user_profile">
              <i className="fa text-white fa-thin fa-user ml-2 person"></i>{" "}
            </Link>{" "}
          
          </div>
        </div>
        <button className="btn text-white" onClick={loggedOutuser}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <div>
          {" "}
          <i className="fa fa-sloid fa-user text-white person" />
        </div>
      </>
    );
  }
}

export default SignedInUserBar;
