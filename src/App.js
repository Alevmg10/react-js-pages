import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
     <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
     
     </div>
    </Router>
  );
}

export default App;
