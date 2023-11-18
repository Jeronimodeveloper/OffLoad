import logoOff from '../assets/logoOff.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
        <h1>BIENVENIDO AL E-COMERCE DE OFFLOAD</h1>
        <h5>Visita la seccion <Link as={Link} to="/products">Shop</Link> para conocer nuestro productos</h5>
        <img src={logoOff} alt="" className='mt-5'></img>
    </div>
  )
}

export default Home