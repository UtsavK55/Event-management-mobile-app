interface DateTimePickerComponentProps {
  label?: string;
  invalid?: boolean;
  date: Date;
  setDate: Dispatch<SetStateAction<string>>;
  dateOrTime: 'date' | 'time';
  required:boolean;
}

interface AttendeeInfo {
  id: string;
  name: string;
  email: string;
}

interface EventDetails {
  title: string;
  date: Date | null;
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
    onPress: ()=>void;
  }
