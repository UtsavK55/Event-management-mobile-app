import {viewStyles} from '@src/theme/ViewStyles';
import {View} from 'react-native';

const BaseContainer = ({children}: {children: React.ReactNode}) => {
  return <View style={viewStyles.view}>{children}</View>;
};

export default BaseContainer;
