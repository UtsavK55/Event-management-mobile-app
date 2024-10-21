import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {colors} from '@theme/ColorStyles';
import {styles} from './styles';
import {useSortFilterContext} from '@src/contexts/SortFilterContext';
import {formatDate, formatTime} from '@src/helpers/helper';

const EventCard = ({item}: {item: EventDetails}) => {
  const {
    sortPreference,
    setSortPreference,
    use24HourClock,
    setUse24HourClock,
    dateFormat,
    setDateFormat,
  } = useSortFilterContext();
  //console.log(dateFormat);

  return (
    <View style={styles.eventCard}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <View style={styles.eventDetail}>
        <Icon name="calendar" size={colors.iconSize} color={colors.iconColor} />
        <Text style={styles.eventDetailText}>
          {formatDate(item.date, dateFormat)} at{' '}
          {formatTime(item.date, use24HourClock)}
        </Text>
      </View>
      <View style={styles.eventDetail}>
        <Icon name="users" size={colors.iconSize} color={colors.iconColor} />
        <Text style={styles.eventDetailText}>
          {item.attendeeLimit} attendees
        </Text>
      </View>
      <View style={styles.eventDetail}>
        <Icon name="map-pin" size={colors.iconSize} color={colors.iconColor} />
        <Text style={styles.eventDetailText}>{item.location}</Text>
      </View>
    </View>
  );
};

export default EventCard;
