
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, ErrorMessage, Form } from 'formik'; 
import * as Yup from 'yup';
import { loggedInUser } from '../../slices/userSlice'; 
import {showSuccessNotification, showErrorNotification} from '../../Notification/Notification'
import {useDispatch} from 'react-redux'
import api from '../../services/axios';

const initialValues = {
  username: '',
  password: '',
};

function LoginModal({ show, handleModal }) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await api.post('api/v1/users/sign_in', {
        user: {
          email: values.username,
          password: values.password,
        }
      });

      dispatch(loggedInUser(response.data))
      handleModal(false, 'login')
      showSuccessNotification("You are logged in successfully")
    } catch (error) {
      showErrorNotification("something went wrong")
    }
  };

  return (
    <>
      <Modal show={show} onHide={() => handleModal(false, 'login')}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form> {/* Use Form component here */}
              <div className="form-group mb-3">
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="form-control"
                />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="mt-3 d-flex">
                <div className="align-right">
                  <button className="mr-3 btn bg-secondary text-white" type="submit">
                    Submit
                  </button>
                </div>
                <div className="ml-5">
                  <button
                    className="mr-3 btn bg-danger text-white"
                    onClick={() => handleModal(false, 'login')}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
