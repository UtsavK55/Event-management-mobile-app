import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Modal} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import CustomModal from '@components/customModal/CustomModal';

import {styles} from './styles';
import {formatDate, formatTime} from '@src/helpers/helper';
import {useSortFilterContext} from '@src/contexts/SortFilterContext';

const DateAndTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({
  label,
  invalid,
  date,
  setDate,
  dateOrTime,
  required,
  minDate,
  errorMsg,
}) => {
  const {
    sortPreference,
    setSortPreference,
    use24HourClock,
    setUse24HourClock,
    dateFormat,
    setDateFormat,
  } = useSortFilterContext();
  //console.log(new Date(date));
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      if (mode === 'date') {
        setDate(currentDate);
      } else {
        const updatedDate = new Date(date);
        updatedDate.setHours(currentDate.getHours());
        updatedDate.setMinutes(currentDate.getMinutes());
        setDate(updatedDate);
      }
    }
    setShow(false);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const currentDate = formatDate(date, dateFormat);
  const currentTime = formatTime(date, use24HourClock);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
        {required && <Text style={styles.invalidLabel}> *</Text>}
      </Text>
      <View>
        <TouchableOpacity
          style={styles.picker}
          onPress={() => showMode(dateOrTime)}>
          <Text style={styles.inputText}>
            {dateOrTime === 'date' ? currentDate : currentTime}
          </Text>
        </TouchableOpacity>

        {/* <CustomModal visible={show} setVisible={setShow}> */}
        {show && mode === dateOrTime && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            mode={dateOrTime}
            is24Hour={false}
            onChange={onChange}
            display="spinner"
            minimumDate={minDate}
          />
        )}
        {/* </CustomModal> */}
      </View>
      {invalid && <Text style={styles.invalidLabel}>{errorMsg}</Text>}
    </View>
  );
};

export default DateAndTimePickerComponent;
