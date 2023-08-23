import { Route,Routes } from 'react-router-dom';
import BookGallery from './components/book';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<BookGallery/>} />
    </Routes>
  );
}

export default App;
