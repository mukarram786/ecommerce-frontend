import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import OptionBar from './Components/OptionBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './Components/Profile/UserProfile';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';




function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Navbar />
        <OptionBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/products/:categoryId/:categoryName" element={<ProductDetails />} />
          <Route path="/user-cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
