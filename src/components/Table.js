import { useState } from 'react';

function Table({ data, headers, children, firstHeader, lastHeader }) {
  const renderedRows = data.map((day) => {
    return (
      <tr className='border-b' key={day.name}>
        <td className='p-3'>{day.name}</td>

        {headers.map((el, index) => {
          return <td key={index}>{children}</td>;
        })}
      </tr>
    );
  });

  const renderedHeaders = headers.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          <th>{firstHeader}</th>
          {renderedHeaders}
          <th>{lastHeader}</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
