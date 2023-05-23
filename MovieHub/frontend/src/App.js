import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AddMovies from './components/AddMovies';
import Movies from './components/Movies';
import UpdateMovie from './components/UpdateMovie';
import DeleteMovie from './components/DeleteMovie';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/update" element={<UpdateMovie />} />
          <Route path="/delete" element={<DeleteMovie />} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          <Route path="/signup" element={<h1>Signup Component</h1>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
