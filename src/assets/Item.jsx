import React from "react";
import { Link } from "react-router-dom";


const Item = ({artista,album,precio,stock,img,id}) => {
    return(
        

            <div className="col-md-3 p-4 text-center">
                <div className="card" >
                    <Link to={`/detalle/${id}`}><img className="card-img-top" src={img} alt={album}></img></Link>
                    
                    <div className="card-body">
                        <h5 className="card-title">{artista}</h5>
                        <strong className="card-text">{album}</strong>
                        <p className="card-text">${precio}</p>
                        <p className="card-text">Stock: {stock}</p>
                        <button type="button" className="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>         
            </div> 



        
       
  
                
                       
        
    )

    
}

export default Item;