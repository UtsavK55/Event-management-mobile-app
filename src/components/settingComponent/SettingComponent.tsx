import React, {useEffect, useState} from 'react';
import {View, Text, Switch, TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles';
import CustomModal from '../customModal';
import {FlatList} from 'react-native-gesture-handler';
import {sortData} from '@src/constants/constant';
import {useSortFilterContext} from '@src/contexts/SortFilterContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getData, storeData} from '@src/storage/storage';
import {storageKeys} from '@src/constants/storageKeys';
import {useUserLoginContext} from '@src/contexts/LoginContext';
import { colors } from '@src/theme/ColorStyles';

const SettingComponent = ({navigation}: ProfileScreenProps) => {
  const {
    sortPreference,
    setSortPreference,
    filterUpcoming,
    setFilterUpcoming,
    use24HourClock,
    setUse24HourClock,
    dateFormat,
    setDateFormat,
  } = useSortFilterContext();

  //   const [filterUpcoming, setFilterUpcoming] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [isDateFormatVisible, setIsDateFormatVisible] = useState(false);
  const {loginId} = useUserLoginContext();
  const [eventsArr, setEventsArr] = useState<Events>([]);
  const [attendeeArr, setAttendeeArr] = useState<AttendeeInfo[]>([]);
  const fetchUsers = async () => {
    const userData = await getData(`${storageKeys.eventData}-${loginId}`);
    const attendeeData = await getData(storageKeys.attendeeData);
    setEventsArr(userData || []);
    setAttendeeArr(attendeeData || []);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const resetAllData = () => {
    Alert.alert(
      'Reset All Event and Attendee Data',
      'Are you sure you want to reset all data? This action cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setEventsArr(() => {
              const updatedEvents: Events = [];
              storeData(updatedEvents, `${storageKeys.eventData}-${loginId}`);
              return updatedEvents;
            });
            setAttendeeArr(() => {
              const updatedAttendee: AttendeeInfo[] = [];
              storeData(updatedAttendee, storageKeys.attendeeData);
              return updatedAttendee;
            });
            navigation.goBack();
          },
        },
      ],
    );
  };

  const onSortItemPress = (item: {label: string; value: any}) => {
    setSortPreference(item);
    setSortVisible(false);
  };
  const onDateFormatPress = (item: {label: string; value: any}) => {
    setDateFormat(item);
    setIsDateFormatVisible(false);
  };

  const dropdownSortItem = ({item}: {item: DropdownProps}) => (
    <TouchableOpacity style={styles.item} onPress={() => onSortItemPress(item)}>
      <Text style={{color: colors.textPrimary}}>{item.label}</Text>
    </TouchableOpacity>
  );
  const dropdownDateItem = ({item}: {item: DropdownProps}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onDateFormatPress(item)}>
      <Text style={{color: colors.textPrimary}}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Management</Text>
          <TouchableOpacity style={styles.resetButton} onPress={resetAllData}>
            <Text style={styles.resetButtonText}>Reset All Data</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Preferences</Text>
          <View style={styles.preference}>
            {/* <Text style={{color: colors.textPrimary}}>Default Sort Order:</Text> */}
            {/* <View style={styles.buttonContainer}> */}
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
                renderItem={dropdownSortItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </CustomModal>
            {/* </View> */}
            {/* <Picker
            selectedValue={sortPreference}
            style={styles.picker}
            onValueChange={(itemValue) => setSortPreference(itemValue)}
          >
            <Picker.Item label="By Date" value="date" />
            <Picker.Item label="By Attendee Count" value="attendees" />
            <Picker.Item label="Alphabetically" value="alphabetical" />
          </Picker> */}
          </View>
          {/* <View style={styles.preference}>
            <Text style={{color: colors.textPrimary}}>
              Show only upcoming events (next 7 days)
            </Text>
            <Switch value={filterUpcoming} onValueChange={setFilterUpcoming} />
          </View> */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date & Time Preferences</Text>
          <View style={styles.preference}>
            <Text style={{color: colors.textPrimary}}>Use 24-hour clock</Text>
            <Switch value={use24HourClock} onValueChange={setUse24HourClock} />
          </View>
          <View style={styles.preference}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsDateFormatVisible(!isDateFormatVisible)}>
              <Text style={styles.buttonText}>
                Date Format: {' '}
                <Text style={styles.sortSelect}>
                  {dateFormat && dateFormat.label}
                </Text>
              </Text>
            </TouchableOpacity>

            <CustomModal
              visible={isDateFormatVisible}
              setVisible={setIsDateFormatVisible}>
              <Text style={styles.modalTitle}>Sort By</Text>
              <FlatList
                data={[
                  {label: 'DD/MM/YY', value: 'DD/MM/YY'},
                  {label: 'MM/DD/YY', value: 'MM/DD/YY'},
                ]}
                renderItem={dropdownDateItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </CustomModal>
            {/* <Picker
            selectedValue={dateFormat}
            style={styles.picker}
            onValueChange={(itemValue) => setDateFormat(itemValue)}
          >
            <Picker.Item label="MM/DD/YYYY" value="MM/DD/YYYY" />
            <Picker.Item label="DD/MM/YYYY" value="DD/MM/YYYY" />
            <Picker.Item label="YYYY-MM-DD" value="YYYY-MM-DD" />
          </Picker> */}
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default SettingComponent;
