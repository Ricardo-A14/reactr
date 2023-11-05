
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Products from '../Pages/Products';

import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/reactr" element={<Home />} />
          <Route path="/reactr/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
