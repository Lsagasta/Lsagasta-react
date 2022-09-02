import React from "react";

export const ItemListContainer = (props) =>{
    console.log(props)
    return (
       <h1 className="text-center">{props.greeting}</h1>
    )
}
export default ItemListContainer;