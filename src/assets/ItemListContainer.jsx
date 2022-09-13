import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { discos } from "./Discos";




export const ItemListContainer = () =>{

const [items,setItems] = useState([]);
useEffect(()=>{

    
      
    const promesa =new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(discos);
            
        },2000 );
    });
    promesa.then((respuesta)=>{
        setItems(respuesta);
    
    })
},[]);
   
    return (
       <div className="container">
        <ItemList items ={items}/>
       </div>
    )
}
export default ItemListContainer;