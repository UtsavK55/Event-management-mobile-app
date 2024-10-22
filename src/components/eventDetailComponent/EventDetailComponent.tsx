import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import AddNewAttendeeModal from '../addNewAttendeeModal';
import {FlatList} from 'react-native-gesture-handler';
import AttendeeCard from '../attendeeCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getData, storeData} from '@src/storage/storage';
import {storageKeys} from '@src/constants/storageKeys';
import {useUserLoginContext} from '@src/contexts/LoginContext';
import {ROUTES} from '@src/constants/Routes';
import {useIsFocused} from '@react-navigation/native';
import {formatDate, formatTime} from '@src/helpers/helper';
import {useSortFilterContext} from '@src/contexts/SortFilterContext';
import { colors } from '@src/theme/ColorStyles';

const EventDetailComponent = ({
  eventId,
  navigation,
}: {
  eventId: string;
  navigation: EventStackScreenProps;
}) => {
  const {use24HourClock, dateFormat} = useSortFilterContext();
  const isFocused = useIsFocused();
  const {loginId} = useUserLoginContext();
  const [eventsArr, setEventsArr] = useState<Events>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(`${storageKeys.eventData}-${loginId}`);
      setEventsArr(userData);
    };

    fetchUsers();
  }, [isFocused]);
  const event = eventsArr.find(event => event.id === eventId) as EventDetails;

  const [isAttendeeModalVisible, setIsAttendeeModalVisible] = useState(false);
  const [currentAttendeeArr, setCurrentAttendeeArr] = useState<AttendeeInfo[]>(
    event?.attendees,
  );

 
  const handleRemoveAttendee = (id: string) => {
    Alert.alert('Delete event', 'Are you sure you want to delete this event', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          navigation.goBack();
          setEventsArr(prevEvents => {
            const updatedEvents = prevEvents.filter(item => item.id !== id);
            storeData(updatedEvents, `${storageKeys.eventData}-${loginId}`);
            return updatedEvents;
          });
        },
      },
    ]);
  };

  const renderAttendeeCard = ({item}: {item: AttendeeInfo}) => (
    <View style={styles.attendeeItem}>
      <View>
        <Text style={styles.attendeeName}>{item.title}</Text>
        <Text style={styles.attendeeEmail}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.attendeeItem}>
          <Text style={styles.title}>{event?.title}</Text>
          <View style={styles.attendeeActions}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ROUTES.ADD_EVENT, {event: event})
              }
              style={styles.actionButton}>
              <Ionicons name="create-outline" size={24} color="#007AFF" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleRemoveAttendee(event.id)}
              style={styles.actionButton}>
              <Ionicons name="trash-outline" size={24} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{color: colors.textPrimary, marginTop: 10, fontWeight: 'bold'}}>
          Description:
        </Text>
        <Text style={{color: 'gray', marginBottom: 10}}>
          {event?.description}
        </Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Ionicons name="calendar-outline" size={24} color="#333" />
            <Text style={styles.detailText}>
              {event?.date && formatDate(event?.date, dateFormat)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="time-outline" size={24} color="#333" />
            <Text style={styles.detailText}>
              {event?.date && formatTime(new Date(event?.date), use24HourClock)}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="people-outline" size={24} color="#333" />
            <Text style={styles.detailText}>
              {event?.attendees.length} Attendees
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={24} color="#333" />
            <Text style={styles.detailText}>{event?.location}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Attendees</Text>
        <FlatList
          data={event?.attendees}
          renderItem={renderAttendeeCard}
          keyExtractor={item => item.id}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default EventDetailComponent;
