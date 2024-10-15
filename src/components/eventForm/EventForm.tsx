import {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';

import {Button} from '@components/button';
import DateAndTimePicker from '@components/dateTimePicker';
import {Input} from '@components/input';
import {alphaRegex} from '@constants/constant';
import {storageKeys} from '@constants/storageKeys';
import {useUserLoginContext} from '@contexts/LoginContext';
import {generateId, validateInput} from '@helpers/helper';
import {emptyEventForm} from '@constants/formConstants';
import {getData, storeData} from '@storage/storage';

import {styles} from './styles';

const EventForm = () => {

  const {loginId} = useUserLoginContext();

  const [inputs, setInputs] = useState(emptyEventForm);

  const [date, setDate] = useState<Date>(new Date());

  const [eventsArr, setEventsArr] = useState<Events>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(`${storageKeys.eventData}-${loginId}`);
      setEventsArr(userData);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (inputIdentifier: string, enteredValue: string) => {
    setInputs(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const handleSubmit = () => {
    const eventData = {
      id: generateId(),
      title: inputs.title.value,
      date: date,
      description: inputs.description.value,
      attendeeLimit: Number(inputs.attendeeLimit.value),
      location: inputs.location.value,
      attendees: [],
      status: 'new',
    };

    const titleError = validateInput(
      eventData.title,
      alphaRegex,
      'Title is required.',
      'Invalid title. Only alphabets allowed.',
    );

    const attendeeLimitError =
      !eventData.attendeeLimit || eventData.attendeeLimit <= 1
        ? 'Attendee limit is required and must be greater than 1.'
        : '';

    const descriptionError = validateInput(
      eventData.description,
      alphaRegex,
      'Description is required.',
      'Invalid description. Only alphabets allowed.',
    );

    const locationError = validateInput(
      eventData.location,
      alphaRegex,
      'Location is required.',
      'Invalid location. Only alphabets allowed.',
    );

    if (titleError || attendeeLimitError || descriptionError || locationError) {
      setInputs(currentInputs => ({
        ...currentInputs,
        title: {
          value: currentInputs.title.value,
          isValid: !titleError,
          errorMessage: titleError,
        },
        attendeeLimit: {
          value: currentInputs.attendeeLimit.value,
          isValid: !attendeeLimitError,
          errorMessage: attendeeLimitError,
        },
        description: {
          value: currentInputs.description.value,
          isValid: !descriptionError,
          errorMessage: descriptionError,
        },
        location: {
          value: currentInputs.location.value,
          isValid: !locationError,
          errorMessage: locationError,
        },
      }));
      return;
    }

    setEventsArr(prevEvents => {
      const updatedEvents = [...prevEvents, eventData];
      storeData(updatedEvents, `${storageKeys.eventData}-${loginId}`);
      return updatedEvents;
    });

    setInputs(emptyEventForm);
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Input
          label="Title"
          invalid={!inputs.title.isValid}
          onChangeText={(value: string) => handleInputChange('title', value)}
          value={inputs.title.value}
          textInputConfig={{
            keyboardType: 'default',
          }}
          required
          errorMessage={inputs.title.errorMessage}
        />
        <DateAndTimePicker
          label="Select Date"
          invalid={false}
          date={date}
          setDate={setDate}
          dateOrTime="date"
          required
        />
        <DateAndTimePicker
          label="Select Time"
          invalid={false}
          date={date}
          setDate={setDate}
          dateOrTime="time"
          required
        />
        <Input
          label="Description"
          invalid={!inputs.description.isValid}
          onChangeText={(value: string) =>
            handleInputChange('description', value)
          }
          value={inputs.description.value}
          textInputConfig={{
            keyboardType: 'numeric',
            multiline: true,
          }}
          required
          errorMessage={inputs.description.errorMessage}
        />

        <Input
          label="Attendee Limit"
          invalid={!inputs.attendeeLimit.isValid}
          onChangeText={(value: string) =>
            handleInputChange('attendeeLimit', value)
          }
          value={inputs.attendeeLimit.value}
          textInputConfig={{
            keyboardType: 'default',
          }}
          required
          errorMessage={inputs.attendeeLimit.errorMessage}
        />
        <Input
          label="Location"
          invalid={!inputs.location.isValid}
          onChangeText={(value: string) => handleInputChange('location', value)}
          value={inputs.location.value}
          textInputConfig={{
            keyboardType: 'default',
          }}
          required
          errorMessage={inputs.location.errorMessage}
        />
      </ScrollView>
      <Button mode="default" label="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default EventForm;
