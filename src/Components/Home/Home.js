import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            
            <h2>Home Component</h2>
            
        </div>
    )
}

export default Home
