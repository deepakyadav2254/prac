import Table from '../components/Table';
import Dropdown from './Dropdown';
import { useState } from 'react';

function TablePage() {
  const options = [
    { label: 'X1', value: 'x1', days: [] },
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

  const dataLoad = [
    {
      name: 'X1',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
    {
      name: 'X2',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
    {
      name: 'X3',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
    {
      name: 'X4',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
    {
      name: 'X5',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
    {
      name: 'X6',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
    {
      name: 'X7',
      days: { monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0 },
    },
  ];

  const [staffData, setStaffData] = useState(dataLoad);

  const onTest = (info) => {
    console.log(info);
  };

  return (
    <div>
      <Table data={data} headers={headers}>
        <Dropdown options={options} />
      </Table>
      <br />
      <Table
        data={dataLoad}
        headers={headers}
        firstHeader={'Staff Member'}
        lastHeader={'Totals'}
      ></Table>
    </div>
  );
}

export default TablePage;
