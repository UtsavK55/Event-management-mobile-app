import {ViewStyle} from 'react-native';

declare global {
  interface ButtonProps {
    children: React.ReactNode;
    onPress?: () => void;
    mode?: 'default' | 'flat';
    style?: ViewStyle;
  }
}
