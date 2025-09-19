'use client';

import React from 'react';

const PhoneNumberInput = () => {
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <div className="lg:w-1/3">
      <div className="border-b pb-5">
        <input
          type="text"
          placeholder="Phone Number (Optional)"
          className="outline-none border-none w-full"
          maxLength={10}
          onInput={handleInput}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
