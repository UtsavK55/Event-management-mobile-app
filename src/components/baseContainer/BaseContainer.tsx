import {SafeAreaView} from 'react-native-safe-area-context';

import {viewStyles} from '@theme/ViewStyles';

const BaseContainer = ({children}: {children: React.ReactNode}) => {
  return <SafeAreaView style={viewStyles.view}>{children}</SafeAreaView>;
};

export default BaseContainer;
