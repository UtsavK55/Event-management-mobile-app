import BaseContainer from '@components/baseContainer';
import CustomHeader from '@components/header';
import EventForm from '@components/eventForm/EventForm';

const AddEvent = ({route, navigation}: AddEventScreenProps) => {

  return (
    <BaseContainer>
      <CustomHeader
        title={ route?.params?.event ? 'Edit Event' : 'Add Event'}
        onBackPress={() => navigation.goBack()}
      />
      <EventForm event={route?.params?.event} navigation={navigation} />
    </BaseContainer>
  );
};

export default AddEvent;
