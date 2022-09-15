import React from "react";
import Logo from "./images/logo.jpg"
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Header = ()=>{
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand col-3" to='/'><img src={Logo} width="100"/>      MIA RECORDS</NavLink>
    <div className="col-1"></div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
      <li className="nav-item dropdown">
         
         
        </li>
        <NavLink className="nav-link" to='categoria/nacional'>Nacionales</NavLink>
        <NavLink className="nav-link" to='categoria/importado'>Importados</NavLink>
        {/* <NavLink className="nav-link" to='/'>Noticias</NavLink>
        <NavLink className="nav-link" to='/'>Mi cuenta</NavLink> */}
        <NavLink href=""><CartWidget/></NavLink>
        
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