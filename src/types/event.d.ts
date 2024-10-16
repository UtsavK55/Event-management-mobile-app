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
  name: string;
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
