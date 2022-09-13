import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { discos } from "./Discos";
import ItemDetail from "./ItemDetail";




const ItemDetailContainer=()=>{

    const[item,setItem] = useState({})

    useEffect(()=>{
        const getProduct = () =>
            new Promise ((res,rej) =>{
                const disco = discos.find ((disc)=>disc.id === 4) 
                setTimeout (() =>{
                    res(disco) 
                },2500)

                } 
            );

            getProduct ()
            .then((info)=>{
                setItem(info)
            })
            .catch((error)=>{
                console.log (error)
            })

    },[])

    return(
        <div> <ItemDetail item = {item}/></div>
    );




};

export default ItemDetailContainer;