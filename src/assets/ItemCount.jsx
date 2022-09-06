import React,{useState} from "react";

const ItemCount = () =>{

    const [count, setCount] = useState(1);

    const decrease = () =>{
        setCount (count - 1);
    }

    const increase = () =>{
        setCount (count + 1);
    }



    return(<div className=" container counter">
    <button onClick={decrease}>-</button>
    <span>{count}</span>

    <button onClick={increase}>+</button>
    <div><button>Agregar al Carrito</button></div>

</div>)
}

export default ItemCount;