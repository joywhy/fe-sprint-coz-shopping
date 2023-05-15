import './App.css';
import Header from './component/Header';
import Main from './page/Main.js';
import List from './page/List.js';
import Bookmark from './page/Bookmark.js';

import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import axios from 'axios';
function App() {
  const [cardData, setCardData] = useState([]);
  

  useEffect(() => {
    axios
      .get( 'http://cozshopping.codestates-seb.link/api/v1/products/')
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => console.log(error));

  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main data={cardData} />} />
        <Route path="/products/list" element={<List />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
