
import './App.css';
// import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes> 
         {/* <Navbar />  */}
          <Route path="/" exact Component={Home}/>
          <Route path="/menu" Component={Menu}/>
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={Contact}/> 
         </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
