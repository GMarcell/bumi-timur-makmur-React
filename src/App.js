import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Product from './pages/Product'
import Aboutus from './pages/Aboutus'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
