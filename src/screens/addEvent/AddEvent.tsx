import BaseContainer from '@components/baseContainer';
import CustomHeader from '@components/header';
import EventForm from '@components/eventForm/EventForm';

const AddEvent = ({navigation}: AddEventScreenProps) => {
  return (
    <BaseContainer>
      <CustomHeader title="Add Event" onBackPress={() => navigation.goBack()} />
      <EventForm />
    </BaseContainer>
  );
};

export default AddEvent;
