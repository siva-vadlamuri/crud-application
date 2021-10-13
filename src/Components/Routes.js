import React from 'react';
import {Route} from 'react-router-dom';
import About from './About/About';
import AddEmployee from './Employee/AddEmployee';
import EditEmployee from './Employee/EditEmployee';
import ListOfEmployees from './Employee/ListOfEmployees';
import Home from './Home/Home';


function Routes() {
    return (
        // localhost:3000/about
        <div>
            {/* <Route path="/" exact component={Home}/> 
            <Route path="/about" exact component={About}/>  */}
            <Route path="/" exact component={ListOfEmployees}/>
            <Route path="/edit" exact component={EditEmployee}/>
            <Route path="/addEmployee" exact component={AddEmployee}/>

        </div>
    )
}

export default Routes
