// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from "./components/Footer"
import Navbar1 from './components/Navbar1';
import "./components/style.css"
// import Navbar from 'react-bootstrap/Navbar'  
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Navbar1></Navbar1> */}
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
