import { useState, useEffect } from 'react';
const Dropdown = ({ options, onTest, shift, day }) => {
  const [val, setVal] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (label) => {
    setVal(label);
    setIsOpen(false);
    onTest(val, shift, day);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <div key={option.label} onClick={() => handleOptionClick(option.label)}>
        {option.label}
      </div>
    );
  });

  return (
    <div onClick={handleClick}>
      {val || 'X'}
      {isOpen && renderedOptions}
    </div>
  );
};

export default Dropdown;
