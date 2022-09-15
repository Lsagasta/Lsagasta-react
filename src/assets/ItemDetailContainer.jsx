import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { discos } from "./Discos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";




const ItemDetailContainer=()=>{

    const[item,setItem] = useState({})

    const {detalleId} =useParams(); 


    useEffect(()=>{
        const getProduct = new Promise (resolve =>{
               
                setTimeout (() =>{
                    resolve(discos);
                },2500);
                });

        getProduct.then (res => setItem (res));

    },[])

    return(
        <div> <ItemDetail item = {item}/></div>
    );




};

export default ItemDetailContainer;