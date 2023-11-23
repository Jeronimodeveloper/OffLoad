import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function ItemCount({ stock }) {

  const [count, setCount] = useState(1);

  function handleSub() {
    count > 1
      ? setCount(count - 1)
      : toast.error("Debes tener al menos un producto.");
    }
    
  function handleAdd() {
    count < Number(stock)
      ? setCount(count + 1)
      : toast.error(stock + " no hay mas en Stock por el momento.");
    }

  return (
    <div className="d-flex flex-column align-items-center mb-3">
      <div className="border-2 border-grey w-auto d-flex">
        <button
          onClick={() => handleSub()}
          className="border-0 rounded-3 fs-3"
          style={{ width: "2rem" }}
        >
          -
        </button>
        <input
          onChange={(e) => setCount(e.target.value)}
          type="text"
          value={count}
          size={10}
          className="text-center border-0"
        />
        <button
          onClick={() => handleAdd()}
          className="border-0 rounded-3 fs-3"
          style={{ width: "2rem" }}
        >
          +
        </button>
      </div>

      <div>
        <button className="bg-black text-white rounded-3 px-4 py-2 mt-1">
          AGREGAR AL CARRITO
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default ItemCount;