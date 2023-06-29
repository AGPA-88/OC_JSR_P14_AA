import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownComponent = ({ options, onChange, value }) => {
  const handleDropdownChange = (selectedOption) => {
    if (onChange) {
      onChange(selectedOption.value);
    }
  };

  return (
    <Dropdown
      options={options}
      onChange={handleDropdownChange}
      value={value}
      placeholder="Select an option"
    />
  );
};

export default DropdownComponent;
