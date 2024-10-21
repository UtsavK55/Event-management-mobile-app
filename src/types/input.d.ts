import {TextStyle, ViewStyle} from 'react-native';

declare global {
  interface InputProps {
    label: string;
    invalid?: boolean;
    style?: TextStyle | ViewStyle;
    value: string;
    onChangeText: (value: string) => void;
    textInputConfig?: {};
    required?: boolean;
    errorMessage?: string;
  }

  interface AttendeeInfoProps {
    item: AttendeeInfo;
  }

  interface RadioButtonProps {
    radioOption: string;
    setRadioOption: Dispatch<SetStateAction<string>>;
    data: {id: string; title: string}[];
    label: string;
  }

  interface DropdownProps {
    label: string;
    value: string;
  }

  interface SelectInputProps {
    label: string;
    data: AttendeeInfo[];
    attendeeLimit?: number;
  }
}
