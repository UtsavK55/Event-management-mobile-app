export const generateId = () =>
  `${Date.now()}_${Math.random().toString(36).slice(2, 5)}`;

export const logoImg = require('@assets/logo.png');

export const validateInput = (
  value: string,
  regex: RegExp,
  requiredMessage: string,
  invalidMessage: string,
) => {
  if (!value.trim()) return requiredMessage;
  if (!regex.test(value)) return invalidMessage;
  return '';
};

export const sortEvents = (
  summarizedEventsArr: Events,
  sortSelected: DropdownProps,
) => {
  return summarizedEventsArr?.sort((prevEvent, nextEvent) => {
    if (sortSelected.value === 'date') {
      if (prevEvent.date === null && nextEvent.date === null) return 0;
      if (prevEvent.date === null) return 1;
      if (nextEvent.date === null) return -1;

      return (
        new Date(prevEvent.date).getTime() - new Date(nextEvent.date).getTime()
      );
    } else if (sortSelected.value === 'attendeeCount') {
      return prevEvent.attendeeLimit - nextEvent.attendeeLimit;
    } else {
      return prevEvent.title.localeCompare(nextEvent.title);
    }
  });
};

export const searchEvents = (arr: Events, searchTerm: string) => {
  return arr?.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};

export const formatDate = (dateString: Date, dateFormat: DropdownProps) => {
  //console.log(dateString);
  // Create a new Date object from the dateString
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  // Define the options for formatting
  const options = {year: 'numeric', month: 'short', day: 'numeric'};

  let formattedDate;

  // Format based on the dateFormat parameter
  if (dateFormat.value === 'DD/MM/YY') {
    formattedDate = `${date.getDate()} ${date.toLocaleString('default', {
      month: 'short',
    })}, ${date.getFullYear()}`;
  } else if (dateFormat.value === 'MM/DD/YY') {
    formattedDate = `${date.toLocaleString('default', {
      month: 'short',
    })} ${date.getDate()}, ${date.getFullYear()}`;
  } else {
    throw new Error("Invalid date format. Use 'DD/MM/YY' or 'MM/DD/YY'.");
  }

  return formattedDate;
};

export const formatTime = (
  dateString: Date,
  use24HourClock: boolean,
): string => {
  if (!dateString) return 'N/A'; // Handle null date

  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  if (!use24HourClock) {
    hours = hours % 12; // Convert 0-23 hour format to 0-11
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${hours}:${formattedMinutes} ${ampm}`;
  } else {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
};
