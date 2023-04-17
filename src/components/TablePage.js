import Table from '../components/Table';
import Dropdown from './Dropdown';
import { useState } from 'react';

let someData = [
  {
    name: 'X1',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
  {
    name: 'X2',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
  {
    name: 'X3',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
  {
    name: 'X4',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
  {
    name: 'X5',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
  {
    name: 'X6',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
  {
    name: 'X7',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
  },
];

function TablePage() {
  const [staffData, setStaffData] = useState(someData);
  const options = [
    { label: 'X1', value: 'x1' },
    { label: 'X2', value: 'x2' },
    { label: 'X3', value: 'x3' },
    { label: 'X4', value: 'x4' },
    { label: 'X5', value: 'x5' },
    { label: 'X6', value: 'x6' },
    { label: 'X7', value: 'x7' },
  ];
  const data = [
    { name: 'Morning UpStairs' },
    { name: 'Morning Down Stairs' },
    { name: 'Morning Parking Lot' },
    { name: 'Lunch A' },
    { name: 'Lunch B' },
    { name: 'Lunch C' },
    { name: 'Lunch D' },
    { name: 'Afternoon Up Stairs' },
    { name: 'Afternoon Down Stairs' },
    { name: 'Afternoon Parking Lot' },
  ];

  const headers = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const onTest = (val, shift, day) => {
    if (val && shift && day) {
      someData = someData.map((element) => {
        if (element.name === val) {
          element.shiftType.push(shift);
          element.days[day] = element.days[day] + 1;
          return element;
        }
        return element;
      });

      setStaffData([...someData]);
    }
  };

  return (
    <div>
      <Table
        data={data}
        headers={headers}
        options={options}
        onTest={onTest}
      ></Table>
      <br />
      <Table
        data={someData}
        headers={headers}
        firstHeader={'Staff Member'}
        lastHeader={'Totals'}
      ></Table>
    </div>
  );
}

export default TablePage;
