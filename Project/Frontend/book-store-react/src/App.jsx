import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookGallery from "./components/book";
import Book from "./components/bookDetails";
import Author from "./components/authorDetails";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/style.css";
import Login from "./components/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Faq from "./components/faq";
import AboutUs from "./components/aboutUs";
import PaymentHelp from "./components/paymentHelp";
import ContactUs from "./components/contactUs";
import Registration from "./components/registration";
// import {useSelector } from "react-redux";
import Cart from "./components/cart";
import Logout from "./components/logout";

function App() {

  const token = useSelector((state) => state.auth.token);
  


  return (
    <>
      <Header />
      <Routes>
        
        {token !== null ? (
                    <>
                        <Route exact path="/cart" element={<Cart/>} />
                        {/* Other routes */}
                    </>
                ) : (
                    <>
                        <Route exact path="/cart" element={<Login/>} />
                        {/* Other routes */}
                    </>
                )}
                <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<BookGallery />} />
        <Route exact path="/bookDetails" element={<Book />} />
        <Route exact path="/authorDetails" element={<Author />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/paymentHelp" element={<PaymentHelp />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/login/signup" element={<Registration />} />
        <Route exact path="/logout" element={<Logout/>}/>
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;