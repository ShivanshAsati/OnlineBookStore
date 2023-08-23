import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import BookGallery from './components/book';
import Book from './components/bookDetails';
import Author from './components/authorDetails';

function App() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <Routes>
          <Route exact path="/" element = {<BookGallery/>} />
          <Route exact path='/bookDetails' element = {<Book/>} />
          <Route exact path='/authorDetails' element = {<Author/>}/>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
