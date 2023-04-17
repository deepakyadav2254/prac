import { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options, onTest }) => {
  const [value, setValue] = useState(null);

  const divEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (event, option) => {
    console.log(event.target);
    setIsOpen(false);
    setValue(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={(event) => handleOptionClick(event, option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} onClick={handleClick}>
      <div>{value?.label || 'X'}</div>
      <div>{isOpen && renderedOptions}</div>
    </div>
  );
};

export default Dropdown;
