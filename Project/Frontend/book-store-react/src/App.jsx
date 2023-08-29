import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import BookGallery from "./components/book";
import Book from "./components/bookDetails";
import Author from "./components/authorDetails";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/style.css";
import Login from "./components/login";
import Faq from "./components/faq";
import AboutUs from "./components/aboutUs";
import PaymentHelp from "./components/paymentHelp";
import ContactUs from "./components/contactUs";
import Register from "./components/register";
import Cart from "./components/cart";
import Logout from "./components/logout";
import MyProfile from "./components/profile";
import Order from "./components/order";
import Address from "./components/address";
import Dashboard from "./components/dashboard";
import BestSelling from "./components/bestselling";
import CarouselBooks from "./components/carouselBooks";
import Test from "./components/test";

function App() {

  const token = useSelector((state) => state.auth.token);
  console.log(token)

  return (
    <>
      <Header />
      <Routes>
        
        {token !== null ? (
                    <>
                        <Route exact path="/userProfile" element={<MyProfile/>}/>
                        <Route exact path="/cart" element={<Cart/>} />
                        <Route exact path="/address" element={<Address/>} />
                        {/* Other routes */}
                    </>
                ) : (
                    <>  
                        <Route exact path="/userProfile" element={<Login/>}/>
                        <Route exact path="/cart" element={<Login/>} />
                        <Route exact path="/address" element={<Login/>} />
                        {/* Other routes */}
                    </>
                )}

        <Route exact path="/test" element={<Test />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/carouselBooks" element={<CarouselBooks />} />
        <Route exact path="/bestSelling" element={<BestSelling />} />
        <Route exact path="/signup" element={<Register />}/>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/allBooks" element={<BookGallery />} />
        <Route exact path="/bookDetails" element={<Book />} />
        <Route exact path="/authorDetails" element={<Author />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/paymentHelp" element={<PaymentHelp />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/order" element={<Order/>}></Route>
        
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;