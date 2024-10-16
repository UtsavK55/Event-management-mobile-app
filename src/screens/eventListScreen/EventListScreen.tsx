import BaseContainer from '@components/baseContainer';
import CustomHeader from '@components/header';
import {Button} from '@src/components/button';
import EventList from '@src/components/eventList';
import {ROUTES} from '@src/constants/Routes';

const EventListScreen = ({navigation}: EventListScreenProps) => {
  const handleAddEvent = () => {
    navigation.navigate(ROUTES.ADD_EVENT);
  };

  return (
    <BaseContainer>
      <CustomHeader title="Event List" >
        <Button label="+" mode="flat" onPress={handleAddEvent} />
      </CustomHeader>
      <EventList />
    </BaseContainer>
  );
};

export default EventListScreen;
