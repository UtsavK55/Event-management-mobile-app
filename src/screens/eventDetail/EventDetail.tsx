import BaseContainer from '@src/components/baseContainer';
import EventDetailComponent from '@src/components/eventDetailComponent';
import CustomHeader from '@src/components/header';
import {storageKeys} from '@src/constants/storageKeys';
import {useUserLoginContext} from '@src/contexts/LoginContext';
import {getData} from '@src/storage/storage';
import {useEffect, useState} from 'react';
import {Text} from 'react-native';

const EventDetail = ({route, navigation}: EventStackScreenProps) => {
  const {eventId} = route.params;
  
  return (
    <BaseContainer>
      <CustomHeader
        title="Event Details"
        onBackPress={() => navigation.goBack()}
      />
      <EventDetailComponent navigation={navigation} eventId={eventId} />
    </BaseContainer>
  );
};
export default EventDetail;
