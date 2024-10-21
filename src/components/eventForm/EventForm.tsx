import {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Button} from '@components/button';
import DateAndTimePicker from '@components/dateTimePicker';
import {Input} from '@components/input';
import {alphaRegex} from '@constants/constant';
import {storageKeys} from '@constants/storageKeys';
import {useUserLoginContext} from '@contexts/LoginContext';
import {generateId, searchEvents, validateInput} from '@helpers/helper';
import {emptyEventForm} from '@constants/formConstants';
import {getData, storeData} from '@storage/storage';

import {styles} from './styles';
import SelectInput from '../selectInput';
import CustomModal from '../customModal';
import {colors} from '@src/theme/ColorStyles';
import AttendeeCard from '../attendeeCard';
import AddNewAttendeeModal from '../addNewAttendeeModal';
import {useIsFocused} from '@react-navigation/native';
import {ROUTES} from '@src/constants/Routes';

const EventForm = ({
  event,
  navigation,
}: {
  event?: EventDetails;
  navigation: AddEventScreenProps;
}) => {
  //console.log(event?.date, new Date());
  const isFocused = useIsFocused();
  const {loginId} = useUserLoginContext();

  const [inputs, setInputs] = useState({
    title: {value: event?.title || '', isValid: true, errorMessage: ''},
    description: {
      value: event?.description || '',
      isValid: true,
      errorMessage: '',
    },
    attendeeLimit: {
      value: event?.attendeeLimit ? String(event?.attendeeLimit) : '',
      isValid: true,
      errorMessage: '',
    },
    location: {value: event?.location || '', isValid: true, errorMessage: ''},
  });

  const [date, setDate] = useState<Date>(event?.date || new Date());

  const [eventsArr, setEventsArr] = useState<Events>([]);
  const [isAttendeeModalVisible, setIsAttendeeModalVisible] = useState(false);
  const [isNewAttendeeModalVisible, setIsNewAttendeeModalVisible] =
    useState(false);
  const [allAttendeeArr, setAllAttendeeArr] = useState<AttendeeInfo[]>([]);
  const [currentAttendeeArr, setCurrentAttendeeArr] = useState<AttendeeInfo[]>(
    event?.attendees || [],
  );

  const fetchUsers = async () => {
    const userData = await getData(`${storageKeys.eventData}-${loginId}`);
    setEventsArr(userData || []);
  };
  useEffect(() => {
    fetchUsers();
  }, [isFocused]);

  const fetchAttendee = async () => {
    const attendeeData = await getData(storageKeys.attendeeData);
    setAllAttendeeArr(attendeeData || []);
  };

  useEffect(() => {
    fetchAttendee();
  }, [currentAttendeeArr]);

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
      id: event?.id || generateId(),
      title: inputs.title.value,
      date: date,
      description: inputs.description.value,
      attendeeLimit: Number(inputs.attendeeLimit.value),
      location: inputs.location.value,
      attendees: currentAttendeeArr,
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

    if (currentAttendeeArr.length < eventData.attendeeLimit) {
      Alert.alert('No. of attendees added should be equal to attendee limit ');
    } else {
      setEventsArr(prevEvents => {
        const updatedEvents = event
          ? prevEvents.map(existingEvent =>
              existingEvent.id === event.id ? eventData : existingEvent,
            )
          : [...(prevEvents || []), eventData];

        storeData(updatedEvents, `${storageKeys.eventData}-${loginId}`);
        return updatedEvents;
      });

      setInputs(emptyEventForm);
      setDate(new Date());
      setCurrentAttendeeArr([]);
      navigation.goBack();
      //console.log(eventsArr);
    }
  };
  const [searchTerm, setSearchTerm] = useState('');

  const onItemPress = (item: AttendeeInfo) => {
    setCurrentAttendeeArr(prevAttendee => {
      const updatedAttendees = [...(prevAttendee || []), item];
      return updatedAttendees;
    });
    setIsAttendeeModalVisible(false);
  };

  const dropdownItem = ({item}: {item: AttendeeInfo}) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{color: colors.textPrimary}}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderAttendeeCard = ({item}: {item: AttendeeInfo}) => (
    <AttendeeCard
      item={item}
      currentAttendeeArr={currentAttendeeArr}
      setCurrentAttendeeArr={setCurrentAttendeeArr}
    />
  );

  const dropdownAttendeeArr = allAttendeeArr.filter(
    attendee1 =>
      !currentAttendeeArr.some(attendee2 => attendee1.id === attendee2.id),
  );

  const searchedArr = dropdownAttendeeArr?.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <View style={{position: 'relative'}}>
      <View style={styles.container}>
        <ScrollView>
          <Input
            label="Title"
            invalid={!inputs.title.isValid}
            onChangeText={(value: string) => handleInputChange('title', value)}
            value={inputs.title.value}
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
            minDate={new Date()}
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
            required
            errorMessage={inputs.attendeeLimit.errorMessage}
          />
          <Input
            label="Location"
            invalid={!inputs.location.isValid}
            onChangeText={(value: string) =>
              handleInputChange('location', value)
            }
            value={inputs.location.value}
            required
            errorMessage={inputs.location.errorMessage}
          />
          <View style={{marginHorizontal: 32, flexDirection: 'row'}}>
            <Text style={styles.label}>Attendees:</Text>
            {currentAttendeeArr.length < Number(inputs.attendeeLimit.value) && (
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  setIsAttendeeModalVisible(!isAttendeeModalVisible)
                }>
                <Icon
                  name="plus"
                  size={16}
                  color={'white'}
                  style={{
                    backgroundColor: colors.primary,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 6,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>

          <CustomModal
            visible={isAttendeeModalVisible}
            setVisible={setIsAttendeeModalVisible}>
            <Text style={styles.modalTitle}>Select Attendee</Text>
            <View style={styles.searchContainer}>
              <Icon
                name="search"
                size={colors.iconSize}
                color={colors.iconColor}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Attendee..."
                placeholderTextColor={'black'}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
            <View>
              {searchedArr.length ? (
                <FlatList
                  data={searchedArr}
                  renderItem={dropdownItem}
                  keyExtractor={item => item.id}
                />
              ) : (
                <Text style={{textAlign: 'center', color: 'gray'}}>
                  No attendee found
                </Text>
              )}
            </View>
            <Text
              style={{
                color: colors.textSecondary,
                fontSize: 16,
                marginVertical: 10,
                textAlign: 'center',
              }}>
              OR
            </Text>
            <Button
              label="Add New Attendee"
              onPress={() =>
                setIsNewAttendeeModalVisible(!isNewAttendeeModalVisible)
              }
            />
            <AddNewAttendeeModal
              label="Add New Attendee"
              add
              setCurrentAttendeeArr={setCurrentAttendeeArr}
              isNewAttendeeModalVisible={isNewAttendeeModalVisible}
              setIsNewAttendeeModalVisible={setIsNewAttendeeModalVisible}
              setIsAttendeeModalVisible={setIsAttendeeModalVisible}
            />
          </CustomModal>
          {/* <View style={styles.container}> */}
        </ScrollView>
        {/* <Text style={styles.label}>Attendees Added</Text> */}

        <View style={{height: '30%'}}>
          <FlatList
            data={currentAttendeeArr}
            renderItem={renderAttendeeCard}
            keyExtractor={(item, index) => item.id + index}
            contentContainerStyle={styles.listContainer}
            style={{
              maxHeight: '70%',
              // marginBottom: 5,
            }}
          />
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 14, alignSelf: 'center'}}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default EventForm;
