import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../../Notification/Notification";
import api from "../../services/axios";
import "./SignUpModal.css";
import { loggedInUser } from '../../slices/userSlice'; 
import { useDispatch } from "react-redux";

const initialValues = {
  first_name: "",
  last_name: "",
  phone_no: "",
  country: "",
  email: "",
  password: "",
  password_confirmation: "",
};

function SignUpModal({ show, handleModal }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone_no: Yup.string().required("Phone Number is required"),
    country: Yup.string().required("Country Name is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
      password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values) => {
    api.post("api/v1/users", {
        user: values,
      })
      .then((response) => {
        var data = response.data.status
        showSuccessNotification(data.message);
        dispatch(loggedInUser(data.data))
        handleModal(false, "signUp")
      })
      .catch((error) => {
        showErrorNotification(error);
      });
  };

  return (
    <>
      <Modal show={show} onHide={() => handleModal(false, "signUp")}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-secondary">SIGN UP ON PLATFORM</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="row">
                <div className="form-group mb-2 col-lg-6">
                  <label htmlFor="first_name">First Name</label>
                  <Field
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group mb-2 col-lg-6">
                  <label htmlFor="last_name">Last Name</label>
                  <Field
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="row">
                <div className="form-group mb-2 col-lg-6">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="text"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-2 col-lg-6">
                  <label htmlFor="password_confirmation">
                    Comfirm Password
                  </label>
                  <Field
                    type="text"
                    id="password_confirmation"
                    name="password_confirmation"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password_confirmation"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group mb-2 col-lg-6">
                  <label htmlFor="phone_no">Phone Number</label>
                  <Field
                    type="text"
                    id="phone_no"
                    name="phone_no"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phone_no"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group mb-2 col-lg-6">
                  <label htmlFor="country">Country Name</label>
                  <Field
                    type="text"
                    id="country"
                    name="country"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModal;
