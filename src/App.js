// import logo from './logo.svg';
// import './App.css';
import DrawerAppBar from "./Components/navbar";
import Products from "./Components/Products";
import Tablet from "./Pages/Tablet";
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element='App.js'></Route>
      <Route path='/Tablet' element='Tablet.js'></Route>
      <Route path='/' element='App.js'></Route>
      <Route path='/' element='App.js'></Route>
      <Route path='/' element='App.js'></Route>
      <Route path='/' element='App.js'></Route>
      </Routes></BrowserRouter>
 <DrawerAppBar/>
 <Products/>
 </div>
  );
}

export default App;
