import React from "react";
import Item from "./Item";

export const ItemList = ({items}) =>{
    console.log(items)
   
    return (
       <div className="row">
        {items.map  (item =><Item id ={item.id} artista={item.artista} album={item.album} precio ={item.precio} img = {item.img} stock = {item.stock} />)}
       </div>
    )
}
export default ItemList;