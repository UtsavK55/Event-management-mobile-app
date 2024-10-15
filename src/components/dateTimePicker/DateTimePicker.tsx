import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './styles';

const DateAndTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({
  label,
  invalid,
  date,
  setDate,
  dateOrTime,
  required,
}) => {

  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (mode === 'date') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    } else {
      const currentTime = selectedDate || date;
      const updatedDate = new Date(date);
      updatedDate.setHours(currentTime.getHours());
      updatedDate.setMinutes(currentTime.getMinutes());
      setDate(updatedDate);
    }
    setShow(false);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

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
            {dateOrTime === 'date'
              ? date.toLocaleDateString()
              : date.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
          </Text>
        </TouchableOpacity>

        {show && mode === dateOrTime && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={dateOrTime}
            is24Hour={false}
            onChange={onChange}
            display="spinner"
          />
        )}
      </View>
    </View>
  );
};

export default DateAndTimePickerComponent;
