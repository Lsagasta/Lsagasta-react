import React from "react";
import tapa1 from '../assets/images/TapasDiscos/ModernClics.webp'
import tapa2 from '../assets/images/TapasDiscos/DarkSide.png'

const Card = () => {
    return(
        <div className="container ">
            <div className="row ">
            <div className="card col-md-3 ">
        <img src={tapa1} alt="Tapa Clics Modernos " />
        <div className="card-body">
            <h4 className="card-title">Charly Garcia - Clics Modernos</h4>
            <p className="card-text">Reedición - Vinilo de (180 GRS)</p></div>   
            </div>

            <div className="card col-md-3 ">
        <img src={tapa2} alt="Tapa Dark Side of the Moon" />
        <div className="card-body">
            <h4 className="card-title">Pink Floyd - The dark Side of the Moon</h4>
            <p className="card-text">Reedición - Vinilo de (180 GRS)</p> 
            </div>   
            </div>



        </div>
          
    </div>
    )

    
}

export default Card;