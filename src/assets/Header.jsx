import React from "react";
import Logo from "./images/logo.jpg"
import CartWidget from "./CartWidget";

const Header = ()=>{
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} width="100"/>      MIA RECORDS</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Rock&Pop</a></li>
            <li><a className="dropdown-item" href="#">Jazz</a></li>
            <li><a className="dropdown-item" href="#">Funk/Soul</a></li>
            <li><a className="dropdown-item" href="#">Reggae/Ska</a></li>
            <li><a className="dropdown-item" href="#">Metal</a></li>
            <li><a className="dropdown-item" href="#">Punk/Hardcore</a></li>
            <li><a className="dropdown-item" href="#">Rap/Hip Hop</a></li>
            <li><a className="dropdown-item" href="#">Bandas de Sonido</a></li>
            <li><a className="dropdown-item" href="#">Blues</a></li>
            <li><a className="dropdown-item" href="#">World Music</a></li>
            <li><a className="dropdown-item" href="#">Otros</a></li>
          </ul>
        </li>
        <a className="nav-link" href="#">Box Sets</a>
        <a className="nav-link" href="#">Novedades</a>
        <a className="nav-link" href="#">Noticias</a>
        <a className="nav-link" href="#">Mi cuenta</a>
        <a href=""><CartWidget/></a>
        
      </div>
    </div>
  </div>
  <div className="container-fluid">
  <div></div>
    <form className="d-flex " role="search">
      <input className ="form-control me-2" type="search" placeholder="Buscar Disco" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Buscar </button>
    </form>
  </div>
  

</nav>

        </div>
    )
}
export	default Header;