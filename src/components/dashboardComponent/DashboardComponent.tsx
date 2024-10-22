import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DateAndTimePicker from '../dateTimePicker';
import {useEffect, useState} from 'react';
import {Button} from '../button';
import {getData} from '@src/storage/storage';
import {storageKeys} from '@src/constants/storageKeys';
import {useUserLoginContext} from '@src/contexts/LoginContext';
import {useIsFocused} from '@react-navigation/native';
import {
  FlatList,
  GestureHandlerRootView,
  Pressable,
} from 'react-native-gesture-handler';
import {ROUTES} from '@src/constants/Routes';
import EventCard from '../eventCard';

const DashboardComponent = ({navigation}: DashboardScreenProps) => {
  const isFocused = useIsFocused();
  const {loginId} = useUserLoginContext();
  const [eventsArr, setEventsArr] = useState<Events>([]);
  const [summarizedEventsArr, setSummarizedEventsArr] = useState<Events>([]);
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(`${storageKeys.eventData}-${loginId}`);
      setEventsArr(userData || []);
      //console.log(userData);
      setSummarizedEventsArr(
        (userData || [])?.filter((item: EventDetails) => {
          const eventDate = new Date(item.date).setHours(0, 0, 0, 0); // Convert item.date to Date object
          //console.log('Event date', eventDate);
          return (
            eventDate >= new Date(fromDate).setHours(0, 0, 0, 0) &&
            eventDate <= new Date(toDate).setHours(0, 0, 0, 0)
          );
        }),
      );
    };
    fetchUsers();
  }, [isFocused]);

  const [inputs, setInputs] = useState({
    startDate: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
    endDate: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
  });

  let totalAttendees = 0;
  summarizedEventsArr?.forEach(item => {
    totalAttendees = totalAttendees + item?.attendees?.length;
  });

  const handleSubmit = () => {
    const summaryDateRange = {
      startDate: new Date(fromDate).setHours(0, 0, 0, 0),
      endDate: new Date(toDate).setHours(0, 0, 0, 0),
    };


    if (summaryDateRange.startDate > summaryDateRange.endDate) {
      setInputs(currentInputs => ({
        startDate: {
          ...currentInputs.startDate,
          isValid: true,
          errorMessage: '',
        },
        endDate: {
          ...currentInputs.endDate,
          isValid: false,
          errorMessage: "End Date can't be less than starting date",
        },
      }));
      return;
    } else {
      // Clear error messages
      setInputs(currentInputs => ({
        startDate: {
          ...currentInputs.startDate,
          isValid: true,
          errorMessage: '',
        },
        endDate: {
          ...currentInputs.endDate,
          isValid: true,
          errorMessage: '',
        },
      }));
    }

    setSummarizedEventsArr(
      eventsArr?.filter(item => {
        const eventDate = new Date(item.date).setHours(0, 0, 0, 0); // Convert item.date to Date object

        return (
          eventDate >= summaryDateRange.startDate &&
          eventDate <= summaryDateRange.endDate
        );
      }),
    );


  };

  const renderEventCard = ({item}: {item: EventDetails}) => (
    <Pressable>
      <EventCard item={item} />
    </Pressable>
  );

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.pickerContainer}>
          <Text style={styles.headerTitle}>Event Summary</Text>
            <DateAndTimePicker
              label="From"
              invalid={!inputs.startDate.isValid}
              date={fromDate}
              setDate={setFromDate}
              dateOrTime="date"
              required
              minDate={new Date()}
            />
            <DateAndTimePicker
              label="To"
              invalid={!inputs.endDate.isValid}
              date={toDate}
              setDate={setToDate}
              dateOrTime="date"
              required
              minDate={fromDate}
              errorMsg={inputs.endDate.errorMessage}
            />
            <Button label="Show Summary" onPress={handleSubmit} />
          </View>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Upcoming Events</Text>
              <Text style={styles.summaryValue}>
                {summarizedEventsArr?.length}
              </Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Total Attendees</Text>
              <Text style={styles.summaryValue}>{totalAttendees}</Text>
            </View>
          </View>
          <View>
            {summarizedEventsArr?.length ? (
              <Text style={styles.sectionTitle}>Upcoming Events</Text>
            ) : (
              <Text style={styles.emptyInfo}>No events Found</Text>
            )}
          </View>
        </ScrollView>

        <View style={{height: '38%'}}>
          <FlatList
            data={summarizedEventsArr}
            renderItem={renderEventCard}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.eventList}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default DashboardComponent;
