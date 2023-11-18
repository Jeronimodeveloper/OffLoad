import logoOff from '../assets/logoOff.png'

function Home() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
        <h1>BIENVENIDO AL E-COMERCE DE OFFLOAD</h1>
        <h5>Visita la seccion Shop para conocer nuestro productos</h5>
        <img src={logoOff} alt="" className='mt-5'></img>
    </div>
  )
}

export default Home
