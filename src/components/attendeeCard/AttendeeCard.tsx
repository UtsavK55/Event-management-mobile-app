import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import AddNewAttendeeModal from '../addNewAttendeeModal';

const AttendeeCard = ({
  item,
  currentAttendeeArr,
  setCurrentAttendeeArr,
}: AttendeeCardProps) => {

  const [isAttendeeModalVisible, setIsAttendeeModalVisible] = useState(false);

  const handleEditAttendee = () => {
    setIsAttendeeModalVisible(!isAttendeeModalVisible);
  };

  const handleRemoveAttendee = (id: string) => {
    Alert.alert(
      'Delete Attendee',
      'Are you sure you want to delete this attendee',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setCurrentAttendeeArr((prevAttendee: AttendeeInfo[]) =>
              prevAttendee.filter(item => item.id !== id),
            );
          },
        },
      ],
    );

    // }
  };

  return (
    <View style={styles.attendeeItem}>
      <View>
        <Text style={styles.attendeeName}>{item.title}</Text>
        <Text style={styles.attendeeEmail}>{item.email}</Text>
      </View>
      <View style={styles.attendeeActions}>
        <TouchableOpacity
          onPress={handleEditAttendee}
          style={styles.actionButton}>
          <Ionicons name="create-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
        <AddNewAttendeeModal
          label="Edit Attendee"
          edit
          attendee={item}
          setCurrentAttendeeArr={setCurrentAttendeeArr}
          isNewAttendeeModalVisible={isAttendeeModalVisible}
          setIsNewAttendeeModalVisible={setIsAttendeeModalVisible}
        />
        <TouchableOpacity
          onPress={() => handleRemoveAttendee(item.id)}
          style={styles.actionButton}>
          <Ionicons name="trash-outline" size={24} color="#FF3B30" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AttendeeCard;
