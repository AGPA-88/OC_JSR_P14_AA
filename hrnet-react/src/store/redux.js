import { createSlice, configureStore } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: [
        
    ],
    reducers: {
        addEmployee:(state, action)=>{
            state.push({firstName : action.payload.firstName,
            lastName : action.payload.lastName,
            startDate : action.payload.startDate,
            department :action.payload.department,
            dateOfBirth : action.payload.dateOfBirth,
            street : action.payload.street,
            city :action.payload.city,
            usState :action.payload.usState,
            zipCode : action.payload.zipCode,})
            return state
        }              
    }
});

export const { addEmployee } = employeeSlice.actions;

export const store = configureStore({
    reducer: {
        employees: employeeSlice.reducer
    }
});
