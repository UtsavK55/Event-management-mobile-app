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
  return summarizedEventsArr.sort((prevEvent, nextEvent) => {
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
  return arr.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
