import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Routes from './Components/Routes'
import './App.css'

function App() {
    return (
        <div className="App">
            {/* <h2>App is working</h2> */}
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    )
}

export default App
