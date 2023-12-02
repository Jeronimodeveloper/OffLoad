import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import { CartContext } from './context/CartContext'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path="/products" element={<ItemListContainer/>} />
              <Route path='/category/:catname' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
