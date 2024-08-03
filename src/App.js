import './App.css';
import Cart from './components/Cart/Cart';
import Explore from './components/Explore';
import Header from './components/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Review from './components/Review';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/SignIn/Register';
import TyreMain from './components/TyreMain/TyreMain';
import BodyMain from './components/BodyMain/BodyMain';
import FilterDisplay from './components/BodyMain/BodyMain';
import Login from './components/SignIn/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<FilterDisplay />} />
          <Route path='/tyrepage' element={<TyreMain />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          </Routes>
        
        
     
      </Router>
    </div>
  );
}

export default App;
