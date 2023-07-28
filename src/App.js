import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import Shop from './components/shop/Shop'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Review from './components/Review/Review';
import NotFound from './components/not found/NotFound';
import ProductDetail from './components/productDetail/ProductDetail'
import Customer from './components/Customer/Customer'
import LoginUi from './components/loginView/LoginUi';
import Registration from './components/Registration/Registration';



export const UserContext = createContext()

function App() {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/customer' element={<Customer></Customer>}></Route>
          <Route path='/login' element={<LoginUi></LoginUi>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route >
          <Route path='/product/:productKey' element={<ProductDetail> </ProductDetail>}></Route>
        

          
        </Routes>
      </BrowserRouter>
    </UserContext.Provider >
  );
}

export default App;
