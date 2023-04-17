import { useState } from 'react';
import Dropdown from './Dropdown';
function Table({ data, headers, firstHeader, lastHeader, options, onTest }) {
  const renderedRows = data.map((shift) => {
    let total = 0;
    return (
      <tr className='border-b' key={shift.name}>
        <td className='p-3'>{shift.name}</td>

        {headers.map((el, index) => {
          return (
            <td key={index}>
              {options ? (
                <Dropdown
                  options={options}
                  shift={shift.name}
                  day={el}
                  onTest={onTest}
                />
              ) : (
                <div>{shift.days[el]}</div>
              )}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeaders = headers.map((header, index) => {
    return <td key={index}>{header}</td>;
  });
  return (
    <table>
      <tbody>
        <tr>
          <td>{firstHeader}</td>
          {renderedHeaders}
          <td>{lastHeader}</td>
        </tr>

        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table;
