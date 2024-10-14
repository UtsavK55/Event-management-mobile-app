
import {ViewStyles} from '@src/theme/ViewStyles';
import { View } from 'react-native';

const BaseContainer = ({children}: {children: React.ReactNode}) => {
  return <View style={ViewStyles.View}>{children}</View>;
};

export default BaseContainer;
