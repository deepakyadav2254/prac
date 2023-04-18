import Table from '../components/Table';
import { useState } from 'react';

let someData = [
  {
    name: 'X1',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
  },
  {
    name: 'X2',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
  },
  {
    name: 'X3',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
  },
  {
    name: 'X4',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
  },
  {
    name: 'X5',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
  },
  {
    name: 'X6',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
  },
  {
    name: 'X7',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
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

  const getTotal = (obj) => {
    let total = 0;
    for (let item in obj) {
      total = total + obj[item];
    }
    console.log(total);
    return total;
  };

  const onTest = (val, shift, day) => {
    console.log(val, shift, day);
    if (val && shift && day) {
      someData = someData.map((element) => {
        if (element.name === val) {
          element.shiftType.push(shift);
          element.days[day] = element.days[day] + 1;
          element.totals = getTotal(element.days);
          return element;
        }
        return element;
      });

      const index = someData.findIndex((el) => {
        return el.name === val;
      });

      setStaffData((prev) => {
        const arr = [...prev];
        arr[index] = {
          ...prev[index],
          shiftType: [...prev[index].shiftType, ...someData[index].shiftType],
          days: { ...prev[index].days, ...someData[index].days },
          totals: someData[index].totals,
        };
        return arr;
      });
    }
  };

  console.log(staffData);
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
        data={staffData}
        headers={headers}
        firstHeader={'Staff Member'}
        lastHeader={'Totals'}
      ></Table>
    </div>
  );
}

export default TablePage;
