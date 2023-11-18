import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'

const App = () => {


  return (
    <>
      <BrowserRouter>

      <NavBar />

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/products" element={<ItemListContainer/>} />
      <Route path='/category/:catname' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
