import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

export const ItemListContainer = () =>{
  
const [items,setItems] = useState([]);
useEffect(()=>{

    const discos = [
        {
          id: 1,
          artista: "Camila Moreno",
          album: "Pangea",
          precio: 5400,
          stock: 5,
          img: "https://http2.mlstatic.com/D_NQ_NP_684137-MLC49052926068_022022-O.webp",
        },
        {
          id: 2,
          artista: "Luis Alberto Spinetta",
          album: "Artaud",
          precio: 4500,
          stock: 6,
          img: "https://http2.mlstatic.com/D_NQ_NP_613148-MLA49874171529_052022-W.webp",
        },
        {
          id: 3,
          artista: "Rosario Bléfari",
          album: "Sector Apagado",
          precio: 6000,
          stock: 9,
          img: "https://http2.mlstatic.com/D_NQ_NP_873750-MLA49053979459_022022-O.webp",
        },
        {
          id: 4,
          artista: "John Frusciante",
          album: "Pbx Funicular Intaglio Zone",
          precio: 11200,
          stock: 3,
          img: "https://http2.mlstatic.com/D_NQ_NP_784343-MLA29556568799_032019-O.webp",
        },
        {
          id: 5,
          artista: "Los Natas",
          album: "Ciudad De Brahman ",
          precio: 5200,
          stock: 7,
          img: "https://http2.mlstatic.com/D_NQ_NP_948422-MLA44568755952_012021-V.webp",
        },
        {
          id: 6,
          artista: "Rosalia",
          album: "Motomami",
          precio: 1200,
          stock: 7,
          img: "https://http2.mlstatic.com/D_NQ_NP_944370-MLA51445587705_092022-O.webp",
        },
        {
          id: 7,
          artista: "Sr Tomate",
          album: "Augurio",
          precio: 5400,
          stock: 2,
          img: "https://http2.mlstatic.com/D_NQ_NP_702055-MLA27460121783_052018-O.webp",
        },
        {
          id: 8,
          artista: "Sumo",
          album: "After Chabon",
          precio: 6400,
          stock: 9,
          img: "https://http2.mlstatic.com/D_NQ_NP_843799-MLA27494294531_062018-O.webp",
        },
        {
          id: 9,
          artista: "Massacre",
          album: "El Mamút",
          precio: 7000,
          stock: 5,
          img: "https://http2.mlstatic.com/D_NQ_NP_860761-MLA50214771903_062022-O.webp",
        },
        {
          id: 10,
          artista: "Los Espiritus",
          album: "Gratitud",
          precio: 5500,
          stock: 3,
          img: "https://http2.mlstatic.com/D_NQ_NP_805064-MLA51386907900_092022-O.webp",
        },
      ];
      
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