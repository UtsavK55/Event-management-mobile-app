import {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
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

const EventList = () => {

  const {loginId} = useUserLoginContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [eventsArr, setEventsArr] = useState<Events>([]);
  const [summarizedEventsArr, setSummarizedEventsArr] = useState<Events>([]);
  const [sortVisible, setSortVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortSelected, setSortSelected] = useState<DropdownProps>({
    label: 'Date',
    value: 'date',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getData(`${storageKeys.eventData}-${loginId}`);
      setEventsArr(userData);
      setSummarizedEventsArr(userData);
    };

    fetchUsers();
  }, []);

  const sortedEvents = sortEvents(summarizedEventsArr, sortSelected);

  const SearchedEvents = searchEvents(sortedEvents, searchTerm);

  const renderEventCard = ({item}: {item: EventDetails}) => (
    <EventCard item={item} />
  );

  const onItemPress = (item: {label: string; value: any}) => {
    setSortSelected(item);
    setSortVisible(false);
  };

  const dropdownItem = ({item}: {item: DropdownProps}) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Upcoming Events</Text>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={colors.iconSize}
            color={colors.iconColor}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events..."
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
                Sort By {sortSelected && sortSelected.label}
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
