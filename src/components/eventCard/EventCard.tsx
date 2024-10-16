import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {colors} from '@theme/ColorStyles';
import {styles} from './styles';

const EventCard = ({item}: {item: EventDetails}) => (

  <View style={styles.eventCard}>
    <Text style={styles.eventTitle}>{item.title}</Text>
    <View style={styles.eventDetail}>
      <Icon name="calendar" size={colors.iconSize} color={colors.iconColor} />
      <Text style={styles.eventDetailText}>
        {new Date(item.date).toLocaleDateString()} at{' '}
        {new Date(item.date).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
    <View style={styles.eventDetail}>
      <Icon name="users" size={colors.iconSize} color={colors.iconColor} />
      <Text style={styles.eventDetailText}>{item.attendeeLimit} attendees</Text>
    </View>
    <View style={styles.eventDetail}>
      <Icon name="map-pin" size={colors.iconSize} color={colors.iconColor} />
      <Text style={styles.eventDetailText}>{item.location}</Text>
    </View>
  </View>
);

export default EventCard;
