import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Employee Data</Link>
         
          
        </div>
      </nav>
    )
}

export default Header
