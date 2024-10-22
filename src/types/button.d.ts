import {ViewStyle} from 'react-native';

declare global {
  interface ButtonProps {
    label: string | React.ReactNode;
    onPress: () => void;
    mode?: 'default' | 'flat';
    style?: ViewStyle;
  }
}
