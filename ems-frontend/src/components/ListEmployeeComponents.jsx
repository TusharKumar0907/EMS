import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../service/EmployeeService';
import { useNavigate } from 'react-router';

const ListEmployeeComponents = () => {
    
    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((respone) => {
            setEmployees(respone.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    function addNewEmployee() {
      navigator('/add-employee');
    }

    function updateEmployee(id) {
      navigator(`/update-employee/${id}`);
    }

    function removeEmployee(id) {
      deleteEmployee(id).then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      });
    }

    return (
    <div className="container mt-4">
      <h2 className="mb-4">List of Employees</h2>
      <button type="button" className="btn btn-secondary mb-2" onClick= { addNewEmployee } >Add Employee</button>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button type="button" className="btn btn-secondary mb-2 me-2" onClick= { () => updateEmployee(employee.id) } >Update</button>
                <button type="button" className="btn btn-secondary mb-2" onClick= { () => removeEmployee(employee.id) } >Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

export default ListEmployeeComponents;
