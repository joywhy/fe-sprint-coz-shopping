import './App.css';
import Header from './component/Header';
import Main from './page/Main.js';
import List from './page/List.js';
import Bookmark from './page/Bookmark.js';

import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import axios from 'axios';

import { initState } from './store/productSlice';
import { useSelector,useDispatch } from 'react-redux';

function App() {

 const dispatch = useDispatch();
 const products = useSelector(state=>state.products) //배열형태
//console.log(products);
  useEffect(() => {
    axios
      .get( 'http://cozshopping.codestates-seb.link/api/v1/products/')
      .then((response) => {
        dispatch(initState(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main data={products} />} /> 
        <Route path="/products/list" element={<List data={products} />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
