import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './employee.css'

  function EmployeePage() {
    const employees = useSelector((state) => state.employees);

    const columns = useMemo(
        () => [
        { header: 'First Name', accessorKey: 'firstName', size: 100},
        { header: 'Last Name', accessorKey: 'lastName', size: 100 },
        { header: 'Starting Date', accessorKey: 'startDate', size: 70 },
        { header: 'Department', accessorKey: 'department', size: 100 },
        { header: 'Date of Birth', accessorKey: 'dateOfBirth', size: 70 },
        { header: 'Street', accessorKey: 'street', size: 150 },
        { header: 'City', accessorKey: 'city', size: 150 },
        { header: 'US State', accessorKey: 'usState', size: 150 },
        { header: 'Zip Code', accessorKey: 'zipCode', size: 50 }
    ],
    [],);

    let keyIndex = 0;
    const data = employees.map(employee => {
        return {
            ...employee,
            key: keyIndex++
        };
    });

    return (
    <div className='table-page'>
        <h1>
            Current Employees
        </h1>

            <MaterialReactTable
                columns={columns}
                data={data}
                title= ""
            />

        <div className='home-link'>
                <Link to="/">
                    Home
                </Link>
            </div>
    </div>
    
    )
}
      

export default EmployeePage;