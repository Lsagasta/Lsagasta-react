import React from "react";


const Item = ({artista,album,precio,stock,img}) => {
    return(
        

            <div className="col-md-3 p-4 text-center">
                <div className="card" >
                    <img className="card-img-top" src={img} alt={album}></img>
                    <div className="card-body">
                        <h5 className="card-title">{artista}</h5>
                        <strong className="card-text">{album}</strong>
                        <p className="card-text">${precio}</p>
                        <p className="card-text">Stock: {stock}</p>
                        <button type="button" class="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>         
            </div> 



        
       
  
                
                       
        
    )

    
}

export default Item;