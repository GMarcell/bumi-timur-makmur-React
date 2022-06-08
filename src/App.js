import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Aboutus from './pages/Aboutus'
import Teams from './pages/Teams';
import FloatingBtn from './components/FloatingBtn';
import TermsandCondition from './pages/TermsandCondition';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/terms-conditions' element={<TermsandCondition/>}/>
        <Route path='/teams' element={<Teams/>}/>
      </Routes>
      <FloatingBtn/>
    </Router>
  );
}

export default App;
