export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
export const alphaRegex = /^[A-Za-z]+( [A-Za-z]+)?$/;

export const genderData = [
  {
    id: '1',
    title: 'Male',
  },
  {
    id: '2',
    title: 'Female',
  },
  {
    id: '3',
    title: 'Others',
  },
];

export const sortData = [
  {label: 'Date', value: 'date'},
  {label: 'Attendee Limit', value: 'attendeeCount'},
  {label: 'Alphabetical', value: 'alphabetical'},
];
