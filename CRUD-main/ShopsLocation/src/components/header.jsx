import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    < div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/all'>     <a class="nav-link active" aria-current="page" >All shops</a></Link>
        </li>
        <li class="nav-item">
          <Link to='/add'>   <a class="nav-link" >add shops</a></Link>
        </li>
        <li class="nav-item">
          <Link to='/getshopsnearme'>    <a class="nav-link" >shops near me</a></Link>
        </li> 
       </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
