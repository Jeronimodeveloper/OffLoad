import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from './components/Contact'

const App = () => {


  return (
    <>
      <BrowserRouter>

      <NavBar />

      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path='/category/:category' element={<ItemListContainer/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />
      <Route path='/contact' element={<Contact/>} />
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
