import React, { useState } from "react";
import './form.css'

function Form () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });

      function saveButton(event) {
        console.log("Input First Name -> " + document.getElementById('firstName').value, "Input Last Name -> " + document.getElementById('lastName').value);
        console.log("Input Street -> " + document.getElementById('street').value, "Input City -> " + document.getElementById('city').value, "Input Zip Code -> " + document.getElementById('zip-code').value);
        // console.log("FORM DATA " + formData.firstName, "FORM DATA " + formData.lastName);
        event.preventDefault();
    }

    return (
        <div className="form-container">
        <form>
            <div>
                First Name
                <input type="text" name="firstName" id="firstName" value={formData.firstName}/>
            </div>
            <div>
                Last Name
                <input type="text" name="lastName" id="lastName" value={formData.lastName}/>
            </div>
            <div className="adress-container">
                ADDRESS
            <div>
                Street
                <input type="text" name="street" id="street"/>
            </div>
            <div>
                City
                <input type="text" name="city" id="city"/>
            </div>
            <div>
                Zip Code
                <input type="text" name="zip-code" id="zip-code"/>
            </div>
            </div>
        </form>
            <div>
                <button type="submit" onClick={saveButton}>SAVE</button>
            </div>
        </div>
    )
}

export default Form;