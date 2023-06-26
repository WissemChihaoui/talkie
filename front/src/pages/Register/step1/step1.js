import React, { useState } from "react";

const Step1 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="input">Enter Something:</label>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Step1;
