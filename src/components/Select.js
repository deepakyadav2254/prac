import { useState } from 'react';
const Input = ({ onTest, shift, day, onPopulate }) => {
  const [val, setVal] = useState('X');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onTest(val, shift, day);
  };

  const resetState = () => {
    setVal('X');
  };
  const handleOnChange = (event) => {
    let value = event.target.value;
    setVal(value);
    onTest(value, shift, day, resetState);
  };

  const populateEmpty = () => {
    console.log('populate is app ');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <select onChange={handleOnChange} value={val}>
        <option value='X'>X</option>
        <option value='X1'>X1</option>
        <option value='X2'>X2</option>
        <option value='X3'>X3</option>
        <option value='X4'>X4</option>
        <option value='X5'>X5</option>
        <option value='X6'>X6</option>
        <option value='X7'>X7</option>
      </select>
    </form>
  );
};

export default Input;
