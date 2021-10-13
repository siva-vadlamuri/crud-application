import React, { useState } from "react";
import { useHistory } from "react-router";

function EditEmployee({ location }) {
    const history = useHistory();
  // console.log(location.state);
  const state = location.state;
  console.log(location);
  // What ever data we getting that we will store in state

  const [employeeUpdate, setEmployeUpdate] = useState({
    id: state.id,
    name: state.name,
    email: state.email,
    address: state.address,
    phone: state.phone,
  });
  const handleChange = (e)=>{
      const {name,value} = e.target;
      setEmployeUpdate({...employeeUpdate,[name]:value})
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
      location.onUpdate(employeeUpdate);
      history.push('/')
  }
  return (
    <div>
      <div className="container mt-2">
        <div>
          <form onSubmit={handleSubmit}>
              <label className="form-label" for="id">Id</label>
            <input
              type="text"
              className="form-control mb-1"
              name="id"
              value={employeeUpdate.id}
              readOnly={true}
              
            />
            <label className="form-label" for="name">Name</label>
            <input
              type="text"
              className="form-control mb-1"
              name="name"
              value={employeeUpdate.name}
              onChange={handleChange}
            />
            <label className="form-label" for="email">Email</label>
            <input
              type="email"
              className="form-control mb-1"
              value={employeeUpdate.email}
              name="email"
              onChange={handleChange}
            />
            <label className="form-label" for="address">Address</label>
            <input
              type="text"
              className="form-control mb-1"
              value={employeeUpdate.address}
              name="address"
              onChange={handleChange}
            />
            <label className="form-label" for="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control my-2"
              value={employeeUpdate.phone}
              name="phone"
              onChange={handleChange}
            />
            <button type="submit" className="btn-info">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
