import Table from '../components/Table';
import { useState } from 'react';
import Button from './Button';
import '../styles.css';

let someData = [
  {
    name: 'X1',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
  },
  {
    name: 'X2',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
  },
  {
    name: 'X3',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
  },
  {
    name: 'X4',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
  },
  {
    name: 'X5',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
  },
  {
    name: 'X6',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
  },
  {
    name: 'X7',
    days: { Monday: 0, Tuesday: 0, Wednesday: 0, Thursday: 0, Friday: 0 },
    shiftType: [],
    totals: 0,
    placesMorning: [],
    placesAfternoon: [],
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
    return total;
  };

  const checkConsecutiveLunches = (shift, day, element) => {
    const arr = element.shiftType;
    let flag = 0;
    if (shift.includes('Lunch')) {
      if (arr.length === 0) {
        arr.push({ shiftName: shift, shiftDay: day });
        return true;
      } else if (arr.length > 0) {
        arr.forEach((element) => {
          let shiftFromArray = element;
          if (shiftFromArray.shiftDay === day) {
            const lastCharacterExistingEl =
              shiftFromArray.shiftName.split(' ')[1];
            const lastCharacterCurrent = shift.split(' ')[1];

            let val1 = lastCharacterExistingEl.charCodeAt(0);
            let val2 = lastCharacterCurrent.charCodeAt(0);
            let diff1 = Math.abs(val1 - val2);
            let diff2 = Math.abs(val2 - val1);

            if (diff1 === 1 || diff2 === 1) {
              console.log('stop');
              flag = 1;
              alert(
                'Cannot select consecutive lunches for same day for same worker!'
              );
              return false;
            } else {
              arr.push({ shiftName: shift, shiftDay: day });
              flag = 2;
              return true;
            }
          }
        });

        if (flag === 1) {
          return false;
        }
        if (flag === 2) {
          return true;
        }
        arr.push({ shiftName: shift, shiftDay: day });
        return true;
      }
      return true;
    }
    return true;
  };

  const checkTwoShiftsPerDay = (element, day) => {
    const daysObj = element.days;
    if (daysObj[day] >= 2) {
      alert('Not more than 2 shifts in a day for w worker.');
      return false;
    } else {
      return true;
    }
  };

  const checkShiftsPerWeek = (element) => {
    const total = element.totals;
    if (total >= 7) {
      alert('A staff member cannot have more than 7 shifts per week.');
      return false;
    } else {
      return true;
    }
  };

  const checkPlacesAtOnce = (shift, day, element) => {
    const morningArr = element.placesMorning;
    const afternoonArr = element.placesAfternoon;
    let morningFlag = 0;
    let afternoonFlag = 0;
    if (shift.includes('Lunch')) {
      return true;
    }
    if (shift.includes('Morning')) {
      if (morningArr.length === 0) {
        morningArr.push({ shiftname: shift, shiftDay: day });
        return true;
      } else if (morningArr.length > 0) {
        morningArr.forEach((element) => {
          if (element.shiftDay === day) {
            morningFlag = 0;
            alert(
              'A staff member cannot be selected to be in two places at once.'
            );
            return false;
          } else {
            morningArr.push({ shiftname: shift, shiftDay: day });
            morningFlag = 1;
            return true;
          }
        });
      }
    }
    if (shift.includes('Afternoon')) {
      if (afternoonArr.length === 0) {
        afternoonArr.push({ shiftname: shift, shiftDay: day });
        return true;
      } else if (afternoonArr.length > 0) {
        afternoonArr.forEach((element) => {
          if (element.shiftDay === day) {
            afternoonFlag = 0;
            alert(
              'A staff member cannot be selected to be in two places at once.'
            );
            return false;
          } else {
            afternoonArr.push({ shiftname: shift, shiftDay: day });
            afternoonFlag = 1;
            return true;
          }
        });
      }
    }

    if (morningFlag === 1 || afternoonFlag === 1) {
      return true;
    } else if (morningFlag === 0 || afternoonFlag === 0) {
      return false;
    }
  };

  const onTest = (val, shift, day, resetState) => {
    let checkLunches;
    let checkDayShifts;
    let checkWeekShifts;
    let checkPlaces;
    if (val && shift && day) {
      someData = someData.map((element) => {
        if (element.name === val) {
          checkLunches = checkConsecutiveLunches(shift, day, element);
          checkDayShifts = checkTwoShiftsPerDay(element, day);
          checkWeekShifts = checkShiftsPerWeek(element);
          checkPlaces = checkPlacesAtOnce(shift, day, element);
          if (
            !checkLunches ||
            !checkDayShifts ||
            !checkWeekShifts ||
            !checkPlaces
          ) {
            resetState();
          }
          if (
            checkLunches &&
            checkDayShifts &&
            checkWeekShifts &&
            checkPlaces
          ) {
            element.days[day] = element.days[day] + 1;
            element.totals = getTotal(element.days);
          }
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
          days: { ...prev[index].days, ...someData[index].days },
          totals: someData[index].totals,
        };
        return arr;
      });
    }
  };

  const handlePopulateClick = () => {};

  return (
    <div>
      <Table
        data={data}
        headers={headers}
        options={options}
        onTest={onTest}
        onPopulate={handlePopulateClick}
      ></Table>
      <br />
      <Table
        data={staffData}
        headers={headers}
        firstHeader={'Staff Member'}
        lastHeader={'Totals'}
      ></Table>
      <Button onClick={handlePopulateClick}>Populate</Button>
      <Button>Clear</Button>
    </div>
  );
}

export default TablePage;
