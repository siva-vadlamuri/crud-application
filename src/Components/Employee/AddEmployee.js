import React, { useState } from "react";
import { useHistory } from "react-router";


function AddEmployee({ location }) {
    const history = useHistory();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e)=>{
      const {name,value} = e.target;
      setEmployee({...employee,[name]:value});
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(employee);
      location.onPost(employee);
      history.push('/')
  }
  return (
    <div>
      <div className="container">
        <div className="pt-3">
          <h2>Add An Employee</h2>
        </div>

        <div>
          <form className="p-4" onSubmit={handleSubmit}>
            <label className="form-label" for="name">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-1"
              name="name"
              onChange={handleChange}
              value={employee.name}
            />
            <label className="form-label" for="name">
              Email
            </label>
            <input
              type="email"
              className="form-control mb-1"
              name="email"
              onChange={handleChange}
              value={employee.email}
            />
            <label className="form-label" for="name">
              Address
            </label>
            <input
              type="text"
              className="form-control mb-1"
              name="address"
              onChange={handleChange}
              value={employee.address}
            />
            <label className="form-label" for="name">
              Phone
            </label>
            <input
              type="tel"
              className="form-control mb-1"
              name="phone"
              onChange={handleChange}
              value={employee.phone}
            />
            <button className="btn btn-primary px-2">Add Employee</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
