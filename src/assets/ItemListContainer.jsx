import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { discos } from "./Discos";
import { useParams } from "react-router-dom";




export const ItemListContainer = () =>{

const [items,setItems] = useState([]);

const {categoriaId} = useParams ();

useEffect(()=>{
    const promesa =new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(discos);
            
        },1000 );
    });

    if (categoriaId) {

        promesa.then(respuesta => setItems(respuesta.filter(discos => discos.cat === categoriaId)));

    } else{promesa.then((respuesta)=>{
        setItems(respuesta);
    
    })}

    
},[categoriaId]);
   
    return (
       <div className="container">
        <ItemList items ={items}/>
       </div>
    )
}
export default ItemListContainer;