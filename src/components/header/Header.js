import React from 'react'
import './Header.css'
import Logo from '../../images/logo.jpg'

export const Header = () => (
  
  <div className="row header">
   <div className="col-4 logo">
     <img src={Logo} alt="logo"/>
   </div>
   <div className="col-4 menu">
     <div><p>NOVEDADES</p></div>
     <div><p>SERVICIOS</p></div>
     <div><p>PRODUCTOS</p></div>
     <div><p>CLIENTES</p></div>
   </div>
   <div className="col-4 contact">
    <p>CONTACTO</p>
   </div>
  </div>
)