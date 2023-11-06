import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './Components/Profile/UserProfile';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Order from './Components/Order';




function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/products/:categoryId/:categoryName" element={<ProductDetails />} />
          <Route path="/user-cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
