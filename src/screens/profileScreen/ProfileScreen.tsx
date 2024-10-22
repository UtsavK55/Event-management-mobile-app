import BaseContainer from '@src/components/baseContainer';
import CustomHeader from '@src/components/header';
import Profile from '@src/components/profile';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  return (
    <BaseContainer>
      <CustomHeader title="Profile" />
      <Profile navigation = {navigation} />
    </BaseContainer>
  );
};

export default ProfileScreen;
