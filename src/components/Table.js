import Select from './Select';

function Table({
  data,
  headers,
  firstHeader,
  lastHeader,
  options,
  onTest,
  onPopulate,
}) {
  const renderedRows = data.map((shift) => {
    return (
      <tr className='border-b' key={shift.name}>
        <td className='p-3'>{shift.name}</td>

        {headers.map((header, index) => {
          return (
            <td key={index}>
              {options ? (
                <Select
                  shift={shift.name}
                  day={header}
                  onTest={onTest}
                  onPopulate={onPopulate}
                />
              ) : (
                <div>{shift.days[header]}</div>
              )}
            </td>
          );
        })}
        <td>{shift.totals}</td>
      </tr>
    );
  });

  // const renderedRows = data.map((shift) => {
  //   return (
  //     <tr className='border-b' key={shift.name}>
  //       <td className='p-3'>{shift.name}</td>

  //       {headers.map((el, index) => {
  //         return (
  //           <td key={el}>
  //             <Input shift={shift.name} day={el} onTest={onTest} />
  //           </td>
  //         );
  //       })}
  //     </tr>
  //   );
  // });

  const renderedHeaders = headers.map((header, index) => {
    return <th key={index}>{header}</th>;
  });
  return (
    <table>
      <tbody>
        <tr>
          <th>{firstHeader}</th>
          {renderedHeaders}
          <th>{lastHeader}</th>
        </tr>
        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table;
