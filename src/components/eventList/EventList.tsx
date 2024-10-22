import {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {getData} from '@storage/storage';
import {storageKeys} from '@constants/storageKeys';
import {useUserLoginContext} from '@contexts/LoginContext';
import EventFilter from '@components/eventFilter/EventFilter';
import EventCard from '@components/eventCard/EventCard';
import CustomModal from '@components/customModal/CustomModal';
import {sortData} from '@constants/constant';
import {searchEvents, sortEvents} from '@helpers/helper';

import {colors} from '@theme/ColorStyles';
import {styles} from './styles';
import {ROUTES} from '@src/constants/Routes';
import {useIsFocused} from '@react-navigation/native';
import {Button} from '../button';
import {useSortFilterContext} from '@src/contexts/SortFilterContext';

const EventList = ({navigation}: EventStackScreenProps) => {
  const {
    sortPreference,
    setSortPreference,
    use24HourClock,
    setUse24HourClock,
    dateFormat,
    setDateFormat,
  } = useSortFilterContext();
  const isFocused = useIsFocused();
  const {loginId} = useUserLoginContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [eventsArr, setEventsArr] = useState<Events>([]);
  const [summarizedEventsArr, setSummarizedEventsArr] = useState<Events>([]);
  const [sortVisible, setSortVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  // const [sortSelected, setSortSelected] = useState<DropdownProps>({
  //   label: 'Date',
  //   value: 'date',
  // });

  const fetchUsers = async () => {
    const userData = await getData(`${storageKeys.eventData}-${loginId}`);
    setEventsArr(userData);
    setSummarizedEventsArr(userData);
  };

  useEffect(() => {
    fetchUsers();
  }, [isFocused]);

  const sortedEvents = sortEvents(summarizedEventsArr, sortPreference);

  const SearchedEvents = searchEvents(sortedEvents, searchTerm);

  const renderEventCard = ({item}: {item: EventDetails}) => (
    <Pressable
      onPress={() =>
        navigation.navigate(ROUTES.EVENT_DETAILS, {eventId: item.id})
      }>
      <EventCard item={item} />
    </Pressable>
  );

  const onItemPress = (item: {label: string; value: any}) => {
    setSortPreference(item);
    setSortVisible(false);
  };

  const dropdownItem = ({item}: {item: DropdownProps}) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{color: colors.textPrimary}}>{item.label}</Text>
    </TouchableOpacity>
  );
  const handleAddEvent = () => {
    navigation.navigate(ROUTES.ADD_EVENT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Events</Text>
          <TouchableOpacity
            style={{
              marginHorizontal: 8,
              marginVertical: 4,
              borderRadius:8
            }}
            onPress={handleAddEvent}>
            <Icon
              name="plus"
              size={16}
              color={'white'}
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 8,
                paddingVertical: 6,
                borderRadius: 6,
              }}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={colors.iconSize}
            color={colors.iconColor}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events by name..."
            placeholderTextColor={'gray'}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>

        <View style={styles.filterSortContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSortVisible(!sortVisible)}>
              <Text style={styles.buttonText}>
                Sort By :{' '}
                <Text style={styles.sortSelect}>
                  {sortPreference && sortPreference.label}
                </Text>
              </Text>
            </TouchableOpacity>

            <CustomModal visible={sortVisible} setVisible={setSortVisible}>
              <Text style={styles.modalTitle}>Sort By</Text>
              <FlatList
                data={sortData}
                renderItem={dropdownItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </CustomModal>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setFilterVisible(!filterVisible)}>
              <Text style={styles.buttonText}>Filter</Text>
            </TouchableOpacity>
            <CustomModal visible={filterVisible} setVisible={setFilterVisible}>
              <Text style={styles.modalTitle}>Filter By</Text>
              <EventFilter
                eventsArr={eventsArr}
                summarizedEventsArr={summarizedEventsArr}
                setSummarizedEventsArr={setSummarizedEventsArr}
                visible={filterVisible}
                setVisible={setFilterVisible}
              />
            </CustomModal>
          </View>
        </View>
      </View>
      {!SearchedEvents?.length && (
        <Text style={{textAlign: 'center', marginTop: 20}}>
          No events found
        </Text>
      )}
      <FlatList
        data={SearchedEvents}
        renderItem={renderEventCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.eventList}
      />
    </View>
  );
};

export default EventList;
