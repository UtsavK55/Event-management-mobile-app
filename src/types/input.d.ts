import {TextStyle, ViewStyle} from 'react-native';

declare global {
  interface InputProps {
    label: string;
    invalid?: boolean;
    style?: TextStyle | ViewStyle;
    textInputConfig?: {};
  }

  interface ItemProps {
    title: string;
  }

  interface RadioButtonProps {
    radioOption: string;
    setRadioOption: Dispatch<SetStateAction<string>>;
    data: {id: string; title: string}[];
    label: string;
  }
}
