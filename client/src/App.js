import './App.css';
import Header from './component/Header';
import Main from './page/Main.js';
import List from './page/List.js';
import Bookmark from './page/Bookmark.js';

import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<List />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>

    </div>
  );
}

export default App;
