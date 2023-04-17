import { useState, useEffect } from 'react';
const Dropdown = ({ options, onTest, shift, day }) => {
  const [val, setVal] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);

  const handleOptionClick = (label) => {
    onTest(val, shift, day);
    setVal(label);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderedOptions = options?.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option.label)}>{option.label}</div>
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
