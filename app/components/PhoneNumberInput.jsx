'use client';

import React from 'react';

// The component now accepts `value` and `onChange` from its parent.
const PhoneNumberInput = ({ value, onChange }) => {
  
  // This handler will now be used for the `onChange` event.
  const handleChange = (e) => {
    // 1. Get the raw input value.
    const rawValue = e.target.value;
    
    // 2. Sanitize the value to allow only numbers.
    const sanitizedValue = rawValue.replace(/[^0-9]/g, '');

    // 3. Call the `onChange` function passed down from the parent (`ContactPage`)
    //    with the new, sanitized value. This updates the parent's state.
    if (onChange) {
      onChange(sanitizedValue);
    }
  };

  return (
    <div className="lg:w-1/2">
      <div className="border-b pb-5">
        <input
          // Using type="tel" is better for semantics and mobile keyboards.
          type="tel" 
          placeholder="Phone Number" // Updated placeholder for consistency
          className="outline-none border-none w-full"
          maxLength={10}
          // The input's displayed value is now controlled by the parent's state.
          value={value} 
          // Use the standard React `onChange` event.
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
