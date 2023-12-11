import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Home from './components/Home'
import CheckOut from './components/CheckOut'


const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/products" element={<ItemListContainer/>} />
                <Route path='/category/:categoria' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<CheckOut/>} />
              </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App