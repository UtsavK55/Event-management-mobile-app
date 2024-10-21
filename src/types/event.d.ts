interface DateTimePickerComponentProps {
  label?: string;
  invalid?: boolean;
  date: Date;
  setDate: Dispatch<SetStateAction<string>>;
  dateOrTime: 'date' | 'time';
  required?: boolean;
  minDate?: Date;
  errorMsg?: string;
}

interface AttendeeInfo {
  id: string;
  title: string;
  email: string;
}

interface EventDetails {
  title: string;
  date: Date;
  description: string;
  attendeeLimit: number;
  location: string;
  attendees: AttendeeInfo[];
  id: string;
  status: string;
}

type Events = EventDetails[];

interface EventCardProps {
  event: EventDetails;
  onPress: () => void;
}

interface CustomModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

interface EventFilterProps {
  eventsArr: Events;
  summarizedEventsArr: Events;
  setSummarizedEventsArr: Dispatch<SetStateAction<Events>>;
  visible?: boolean;
  setVisible?: Dispatch<SetStateAction<boolean>>;
}
interface sortFilterContextType {
  sortPreference: {label: string; value: string};
  setSortPreference: React.Dispatch<
    React.SetStateAction<{label: string; value: string}>
  >;
  filterUpcoming: boolean;
  setFilterUpcoming: React.Dispatch<React.SetStateAction<boolean>>;
  use24HourClock: boolean;
  setUse24HourClock: React.Dispatch<React.SetStateAction<boolean>>;
  dateFormat: {label: string; value: string};
  setDateFormat: React.Dispatch<
    React.SetStateAction<{label: string; value: string}>
  >;
}
