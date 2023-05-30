import React from 'react';
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
import ProductDetail from './components/productDetail/ProductDetail';



function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/product/:productKey' element={<ProductDetail> </ProductDetail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
