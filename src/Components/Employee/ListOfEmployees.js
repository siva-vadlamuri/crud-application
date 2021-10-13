// import axios from 'axios'
import EmployeeAPI from '../../_apis/api';
import React,{useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import {v4} from 'uuid';



function ListOfEmployees() {
    const [employees,setEmployees] = useState([{}])

    const getTheEmployeesData = async()=>{
        const {data} =  await EmployeeAPI.get('/employees/');
        console.log(data.data);
        setEmployees(data.data);
    }

    const sendTheUpdateData = async(payload,id,employeeData)=>{

        const response = await EmployeeAPI.put(`/employees/${id}`,payload)
        console.log(response);
//  We need iterate throught the State if we find the id is same then we will update the data
        // setEmployees(
        //     employees.map((employee)=>{
        //         // 124 == 124
        //         return employee.id == id ? {...employeeData} : employee
        //     })
        // )
    }

    // Update Employee
    const updateEmployeeHandler = (employeeData)=>{
        
        const {name,email,address,phone} = employeeData;
        const {id} = employeeData
        const payload = {
              name,
              email,
              address,
              phone
        }
        sendTheUpdateData(payload,id,employeeData)
        
    }

    // Delete Employee
    const deleteTheEmploye = async (id)=>{
      const response = await EmployeeAPI.delete(`/employees/${id}`);

      console.log(response);
      if(response.status==200){
                                    
        const filteredEmployes = employees.filter((employee)=>employee.id!=id)
        // console.log(filteredEmployes);
          setEmployees(filteredEmployes);
      }
    }


    // add Employeee
    const addEmployee = async(employee)=>{
       
        //  Creating Unique Id
        const payload = {
            id : v4(),
            ...employee
        }
        const response = await EmployeeAPI.post('/postEmploye',payload);
        console.log(response);
    }

    useEffect(()=>{
        getTheEmployeesData();
    },[])
    return (
        <div>
            <h2 className="text-center">List Of Employees</h2>
            <div className="container mt-5">
                <div className="d-flex justify-content-end">
                    <Link to={{
                      pathname: '/addEmployee',
                      onPost : addEmployee
                    }}>
                    <button className="btn btn-primary mb-2">Add Employee</button>
                    </Link>
                </div>
                <table className="table border  stripped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.length>0 && employees.map((employee)=>(
                                <tr key={employee.id}>
                                    <td>{employee.id} </td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <Link to={{
                                            pathname : '/edit',
                                            state : employee,
                                            onUpdate : updateEmployeeHandler
                                        }}>
                                        <button className="btn btn-info">Edit</button>
                                        </Link>
                                        <button className="btn btn-danger mx-2" onClick={()=>deleteTheEmploye(employee.id)}>Delete</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListOfEmployees
