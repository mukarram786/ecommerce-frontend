import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import UserProfile from "./Components/Profile/UserProfile";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Order from "./Components/Order";
import OrderItems from "./Components/OrderItems";
import { isAuthenticated } from "./services/auth";
import ProtectedRoute from "./routes/ProtectedRoute";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


function App() {
  const isAuthenticatedUser = isAuthenticated();

  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user_profile"
            element={
              <ProtectedRoute
                element={<UserProfile />}
                redirectTo="/"
                isAuthenticated={isAuthenticatedUser}
              />
            }
          />
          <Route
            path="/products/:categoryId/:categoryName"
            element={
              <ProtectedRoute
                element={<ProductDetails />}
                redirectTo="/"
                isAuthenticated={isAuthenticatedUser}
              />
            }
          />
          <Route
            path="/user-cart"
            element={
              <ProtectedRoute
                element={<Cart />}
                redirectTo="/"
                isAuthenticated={isAuthenticatedUser}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute
                element={<Checkout />}
                redirectTo="/"
                isAuthenticated={isAuthenticatedUser}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                element={<Order />}
                redirectTo="/"
                isAuthenticated={isAuthenticatedUser}
              />
            }
          />
          <Route
            path="/order-items/:orderId"
            element={
              <ProtectedRoute
                element={<OrderItems />}
                redirectTo="/"
                isAuthenticated={isAuthenticatedUser}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
