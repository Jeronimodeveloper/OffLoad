import { Button, Badge} from 'react-bootstrap';
import {useState} from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(0)
const addToCart =()=>{
    alert(`Agregando al carrito ${count} unidades`)
}

return (
    <div className="d-flex flex-column align-items-center">
        <div>
            <Button variant="light" onClick={() => setCount(count - 1)}>-</Button>
            <Badge bg="primary">{count}</Badge>
            <Button variant="light" onClick={() => setCount(count + 1)}>+</Button>
        </div>
        <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button>
    </div>
)
}

export default ItemCount