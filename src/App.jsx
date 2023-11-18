import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from './components/Contact'
import Home from './components/Home'

const App = () => {


  return (
    <>
      <BrowserRouter>

      <NavBar />

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/products" element={<ItemListContainer/>} />
      <Route path='/category/:category' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/contact' element={<Contact/>} />
      
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
