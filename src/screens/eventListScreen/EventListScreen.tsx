import BaseContainer from '@components/baseContainer';
import CustomHeader from '@components/header';
import {Button} from '@src/components/button';
import EventList from '@src/components/eventList';
import {ROUTES} from '@src/constants/Routes';
import {colors} from '@src/theme/ColorStyles';
import Icon from 'react-native-vector-icons/Feather';

const EventListScreen = ({navigation}: EventStackScreenProps) => {
  const handleAddEvent = () => {
    navigation.navigate(ROUTES.ADD_EVENT);
  };

  return (
    <BaseContainer>
      <EventList navigation={navigation} />
    </BaseContainer>
  );
};

export default EventListScreen;
