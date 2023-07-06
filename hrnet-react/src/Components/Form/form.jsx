import React, { useState } from "react";
import './form.css'
import Modal from "../Modal/modal";
import DatePicker from "../Library/Date Picker/datePicker"
import Dropdown from "../Library/Dropdown/dropdown"
import { usStates } from "../../static/us_states";
import { addEmployee } from '../../store/redux.js';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function Form () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });

      const [modalOpen, setModalStatus] = useState(false);
      const [dateOfBirth, setDateOfBirth] = useState("");
      const [startDate, setStartDate] = useState("");
      const [usState, setUsState] = useState("");
      const [department, setDepartment] = useState("");

      const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal", ]
      
      const statesList = usStates.map(usStateItem => usStateItem.name);
      const departmentList = departments.map(departmentItem => departmentItem);
      const dispatch = useDispatch();

      const handleDropdownState = (selectedOption) => {
        console.log('Selected option:', selectedOption);
        setUsState(selectedOption);
      };
      const handleDropdownDepartment = (selectedOption) => {
        console.log('Selected option:', selectedOption);
        setDepartment(selectedOption);
      };

      
      function saveButton(event) {
        console.log("Input First Name -> " + formData.firstName, "Input Last Name -> " + formData.lastName);
        console.log("Input Street -> " + document.getElementById('street').value, "Input City -> " + document.getElementById('city').value, "Input Zip Code -> " + document.getElementById('zip-code').value);
        console.log("DOB -> " + dateOfBirth, "SD -> " + startDate);
        console.log("US State Selected -> " + usState,  "Department Selected -> " + department);
        event.preventDefault();
        
        dispatch(addEmployee({
            firstName: document.querySelector('#firstName').value,
            lastName: document.querySelector('#lastName').value,
            dateOfBirth: dateOfBirth.toLocaleDateString("fr"),
            startDate: startDate.toLocaleDateString("fr"),
            department: department,
            street: document.querySelector('#street').value,
            city: document.querySelector('#city').value,
            zipCode: document.querySelector('#zip-code').value,
            usState: usState,
            
        }));
        
    }
    
    return (
        <div className="form-container">
            <div>
                <Link to="/employees">
                View Current Employees
                </Link>
            </div>
        <form>
            <div className="form-input">
                First Name
                <input type="text" name="firstName" id="firstName" value={formData.firstName}/>
            </div>
            <div className="form-input">
                Last Name
                <input type="text" name="lastName" id="lastName" value={formData.lastName}/>
            </div>

            <div className="form-input">
                Date of Birth:
                <DatePicker selectedDate={dateOfBirth} setSelectedDate={setDateOfBirth}/>
            </div>
            <div className="form-input">
                Start Date:
                <DatePicker selectedDate={startDate} setSelectedDate={setStartDate} />
            </div>

            <div className="adress-container">
                ADDRESS
                <div className="form-input">
                    Street
                    <input type="text" name="street" id="street"/>
                </div>
                <div className="form-input">
                    City
                    <input type="text" name="city" id="city"/>
                </div>
                <div className="form-input">
                    <Dropdown
                        options={statesList}
                        onChange={handleDropdownState}
                        value="States"
                    />
                </div>
                <div className="form-input">
                    Zip Code
                    <input type="text" name="zip-code" id="zip-code"/>
                </div>
            </div>
            <div className="form-input">
                <Dropdown
                    options={departmentList}
                    onChange={handleDropdownDepartment}
                    value="Department"
                />
            </div>
        </form>
        <Modal isOpen={modalOpen} setStatus={setModalStatus} modalText="New Employee Saved !" />
            <div>
                <button type="submit" onClick={(e) => {saveButton(e); setModalStatus(true);}}>SAVE</button>
            </div>
        </div>
    )
}

export default Form;