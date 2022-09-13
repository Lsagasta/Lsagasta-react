import React from "react";

const ItemDetail = ({item}) =>{
    return(
     <div>
                    <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={item.img} className="img-fluid rounded-start" alt={item.artista}/>
                </div>
                <div className="col-md-8">  
                <div className="card-body">
                    <h5 className="card-title">{item.artista}</h5>
                    <p className="card-text">{item.album}</p>
                   
                    <div className="embed-responsive embed-responsive-16by9">
                     <iframe className="embed-responsive-item" src={item.video} allowfullscreen></iframe>
                    </div>
                    <p className="card-text"><small className="text-muted">{item.desc}</small></p>
                </div>
                </div>
            </div>
            </div>
     </div>
    )
}

export default ItemDetail;