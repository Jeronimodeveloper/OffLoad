import { Button, Badge} from 'react-bootstrap';
import {useState} from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(0)
const addToCart =()=>{
    alert(`Agregando al carrito ${count} unidades`)
}

return (
    <div>
    <Button variant="light" onClick={() => setCount(count - 1)}>-</Button>
    <Badge bg="danger">{count}</Badge>
    <Button variant="light" onClick={() => setCount(count + 1)}>+</Button>
    <Button variant="dark" onClick={addToCart}>Agregar al carrito</Button>
    </div>
)
}

export default ItemCount