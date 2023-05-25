import Home from './components/Home';  
import About from './components/about';
import LoginPage from './components/loginpage';
import Products from './components/products';
import SignUpPage from './components/signuppage';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return(
    <>
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products"element={<Products/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<SignUpPage/>}/>
        </Routes>
      </Router>
      </>
  )
}

export default App;
