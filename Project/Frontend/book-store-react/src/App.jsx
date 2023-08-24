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

function App() {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <Header />

      {/* <div className="container"> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<BookGallery />} />
        <Route exact path="/bookDetails" element={<Book />} />
        <Route exact path="/authorDetails" element={<Author />} />
      </Routes>
      {/* </div> */}
      <ToastContainer />

      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
