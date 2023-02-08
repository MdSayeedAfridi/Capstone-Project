
import './App.css';
import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"





function App() {
  return (
    <>
        <div className="App">
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/booking" element={<BookingPage />} />
          </Routes>
          <Nav />
          <Main />
          <Footer />
    </Router>
        </div>
    </>
  );
}

export default App;
