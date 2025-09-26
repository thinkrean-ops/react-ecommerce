

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Rootlayout from "./layouts/Rootlayout"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProductsDetail from "./pages/ProductsDetail"



function App() {
  return (

<BrowserRouter>

<Routes>
  <Route path="/" element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/products" element= {<Products/>}></Route>
    <Route path="/contact" element= {<Contact/>}></Route>
    <Route path="/about" element= {<About/>}></Route>
    <Route path="/product/:id" element= {<ProductsDetail/>}></Route>

  </Route>
</Routes>
</BrowserRouter>


  )
}

export default App