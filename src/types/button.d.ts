import {ViewStyle} from 'react-native';

declare global {
  interface ButtonProps {
    label: string;
    onPress: () => void;
    mode?: 'default' | 'flat';
    style?: ViewStyle;
  }
}
