import React from "react";
import './form.css'

function Form () {
    return (
        <div className="form-container">
        <form>
            <div>
                First Name
                <input type="text" name="firstName" id="firstName"/>
            </div>
            <div>
                Last Name
                <input type="text" name="lastName" id="lastName"/>
            </div>
            <div>
                <button type="submit" onClick={saveButton}>SAVE</button>
            </div>
        </form>
        </div>
    )
    function saveButton(event) {
        console.log("Input First Name -> " + document.getElementById('firstName').value, "Input Last Name -> " + document.getElementById('lastName').value)
        event.preventDefault();
    }
}

export default Form;