import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker({selectedDate, setSelectedDate}) {

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <ReactDatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
}

export default MyDatePicker;