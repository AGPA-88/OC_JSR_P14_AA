import React, { useState } from "react";
import './form.css'
import Modal from "agpa-react-modal-library";
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
      const [dateOfBirth, setDateOfBirth] = useState(new Date());
      const [startDate, setStartDate] = useState(new Date());
      const [usState, setUsState] = useState("");
      const [department, setDepartment] = useState("");

      const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal", ]
      
      const statesList = usStates.map(usStateItem => usStateItem.name);
      const departmentList = departments.map(departmentItem => departmentItem);
      const dispatch = useDispatch();

      const handleDropdownState = (selectedOption) => {
        setUsState(selectedOption);
      };
      const handleDropdownDepartment = (selectedOption) => {
        setDepartment(selectedOption);
      };


      
      function saveButton(event) {

        const formInputs = document.querySelectorAll("input");
        let isFormValid = true;

        formInputs.forEach((input) => {
            if (input.value === "") {
              isFormValid = false;
            }
          });
      
          if (!isFormValid) {
            alert("Please fill all inputs");
            return;
          }
          
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

        setModalStatus(true);
        
    }
    
    return (
        <div className="form-container">
            <h1>
                HRnet
            </h1>
            <div>
                <Link to="/employees">
                View Current Employees
                </Link>
            </div>
            <h1>
                Create Employee
            </h1>
        <form>
            <div className="form-input">
                First Name
                <br/>
                <input type="text" name="firstName" id="firstName" value={formData.firstName}/>
            </div>
            <div className="form-input">
                Last Name
                <br/>
                <input type="text" name="lastName" id="lastName" value={formData.lastName}/>
            </div>

            <div className="form-input">
                Date of Birth
                <DatePicker selectedDate={dateOfBirth} setSelectedDate={setDateOfBirth}/>
            </div>
            <div className="form-input">
                Start Date
                <DatePicker selectedDate={startDate} setSelectedDate={setStartDate} />
            </div>

            <div className="adress-container">
                <div className="adress-title">
                    ADDRESS
                </div>
                <div className="form-input">
                    Street
                    <br/>
                    <input type="text" name="street" id="street"/>
                </div>
                <div className="form-input">
                    City
                    <br/>
                    <input type="text" name="city" id="city"/>
                </div>
                <div className="form-input">
                    State
                    <br/>
                    <Dropdown
                        options={statesList}
                        onChange={handleDropdownState}
                        value="States"
                    />
                </div>
                <div className="form-input">
                    Zip Code
                    <br/>
                    <input type="text" name="zip-code" id="zip-code"/>
                </div>
            </div>
            <div className="form-input">
                Department
                <Dropdown
                    options={departmentList}
                    onChange={handleDropdownDepartment}
                    value="Department"
                />
            </div>
        </form>
        <Modal isOpen={modalOpen} setStatus={setModalStatus} modalText="Employee Created!" />
        <br/>
            <div>
                <button type="submit" onClick={(e) => {saveButton(e);}}>SAVE</button>
            </div>
        </div>
    )
}

export default Form;