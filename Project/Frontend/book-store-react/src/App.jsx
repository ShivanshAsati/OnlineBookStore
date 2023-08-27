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
import {useSelector } from "react-redux";
import Cart from "./components/cart";
import Logout from "./components/logout";
import AddressTemp from "./components/addresstemp";
import MyComponent from "./components/addresstemp";

function App() {

  const token = useSelector((state) => state.auth.token);
  


  return (
    <>
      <Header />
      <Routes>
        
        {token !== null ? (
                    <>
                        <Route exact path="/cart" element={<Cart/>} />
                        <Route exact path="/address" element={<MyComponent/>} />
                        {/* Other routes */}
                    </>
                ) : (
                    <>
                        <Route exact path="/cart" element={<Login/>} />
                        <Route exact path="/address" element={<Login/>} />
                        {/* Other routes */}
                    </>
                )}
                <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<BookGallery />} />
        <Route exact path="/bookDetails" element={<Book />} />
        <Route exact path="/authorDetails" element={<Author />} />
        <Route exact path="/logout" element={<Logout/>}/>
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
