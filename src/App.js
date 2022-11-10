import './App.css';
import {Button} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login'
import Register from './components/Register'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Protected from './components/Protected';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/add' 
             element={<Protected Cmp={AddProduct} />} />
           <Route path='/update' 
             element={<Protected Cmp={UpdateProduct} />} />
         </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;