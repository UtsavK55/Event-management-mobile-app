import BaseContainer from '@src/components/baseContainer';
import CustomHeader from '@src/components/header';
import SettingComponent from '@src/components/settingComponent/SettingComponent';
import {Text} from 'react-native';

const Setting = ({navigation}: ProfileScreenProps) => {
  return (
    <BaseContainer>
      <CustomHeader title="Settings" onBackPress={() => navigation.goBack()} />
      <SettingComponent navigation={navigation} />
    </BaseContainer>
  );
};

export default Setting;
