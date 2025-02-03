import React, { useEffect, useState } from 'react';
import { getEmployee, updateEmployee } from '../service/EmployeeService';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

const UpdateEmployeeComponents = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const userData = {firstName, lastName, email};

    console.log(userData);
    updateEmployee(id, userData).then((respone)=>{
    console.log(respone.data);
    navigate('/employees');
    });

    };

    useEffect(() => {
        getEmployee(id)
            .then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.error("Error fetching employee:", error);
            });
    }, [id]); 
    

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh', backgroundColor: '#f4f4f9' }}>
      <div className="card" style={{ width: '600px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Update Employee</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <h5>First Name</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <h5>Last Name</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <h5>Email</h5>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-secondary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponents;