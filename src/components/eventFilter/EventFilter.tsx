import {useState} from 'react';
import {ScrollView, View} from 'react-native';

import Button from '@components/button/Button';
import DateAndTimePickerComponent from '@components/dateTimePicker/DateTimePicker';

import {styles} from './styles';

const EventFilter = ({
  eventsArr,
  summarizedEventsArr,
  setSummarizedEventsArr,
  visible,
  setVisible,
}: EventFilterProps) => {
  
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());

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
      eventsArr.filter(item => {
        const eventDate = new Date(item.date).setHours(0, 0, 0, 0);
        return (
          eventDate >= summaryDateRange.startDate &&
          eventDate <= summaryDateRange.endDate
        );
      }),
    );
    setVisible(!visible);
  };

  return (
    <ScrollView>
      <View style={styles.pickerContainer}>
        <DateAndTimePickerComponent
          label="From"
          invalid={!inputs.startDate.isValid}
          date={fromDate}
          setDate={setFromDate}
          dateOrTime="date"
          required
        />
        <DateAndTimePickerComponent
          label="To"
          invalid={!inputs.endDate.isValid}
          date={toDate}
          setDate={setToDate}
          dateOrTime="date"
          required
          errorMsg={inputs.endDate.errorMessage}
        />
        <Button label="Apply Filter" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default EventFilter;
