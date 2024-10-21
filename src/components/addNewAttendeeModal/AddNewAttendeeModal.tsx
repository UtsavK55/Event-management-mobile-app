import {Text, View} from 'react-native';
import CustomModal from '../customModal';
import {Input} from '../input';
import {useEffect, useState} from 'react';
import {styles} from './styles';
import {Button} from '../button';
import {generateId, validateInput} from '@src/helpers/helper';
import {alphaRegex, emailRegex} from '@src/constants/constant';
import {storageKeys} from '@src/constants/storageKeys';
import {getData, storeData} from '@src/storage/storage';
import {emptyAttendeeForm} from '@src/constants/formConstants';
import {useIsFocused} from '@react-navigation/native';

const AddNewAttendeeModal = ({
  label,
  attendee,
  add,
  edit,
  setCurrentAttendeeArr,
  isNewAttendeeModalVisible,
  setIsNewAttendeeModalVisible,
  setIsAttendeeModalVisible,
}: AddNewAttendeeModalProps) => {

  const isFocused = useIsFocused();
  const [attendeeInput, setAttendeeInput] = useState({
    title: {value: "" , isValid: true, errorMessage: ''},
    email: {value: "", isValid: true, errorMessage: ''},
  });
  const [attendeeArr, setAttendeeArr] = useState<AttendeeInfo[]>([]);

  useEffect(() => {
    if(attendee)
    setAttendeeInput({email: {value: attendee.email, errorMessage: "", isValid: true}, title: {value: attendee.title, errorMessage: "", isValid: true}, })
  }, [attendee])

  useEffect(() => {
    const fetchUsers = async () => {
      const attendeeData = await getData(storageKeys.attendeeData);
      setAttendeeArr(attendeeData || []);
    };

    fetchUsers();
  }, [isFocused]);

  const handleInputChange = (inputIdentifier: string, enteredValue: string) => {
    setAttendeeInput(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const handleSubmit = () => {
    const attendeeData = {
      id: attendee?.id || generateId(),
      title: attendeeInput.title.value,
      email: attendeeInput.email.value,
    };

    const titleError = validateInput(
      attendeeData.title,
      alphaRegex,
      'Name is required.',
      'Invalid name. Only alphabets allowed.',
    );

    const emailError = validateInput(
      attendeeData.email,
      emailRegex,
      'Email is required.',
      'Please enter a valid email.',
    );

    if (titleError || emailError) {
      setAttendeeInput(currentInputs => ({
        ...currentInputs,
        title: {
          value: currentInputs.title.value,
          isValid: !titleError,
          errorMessage: titleError,
        },
        email: {
          value: currentInputs.email.value,
          isValid: !emailError,
          errorMessage: emailError,
        },
      }));
      return;
    }

    setAttendeeArr(prevAttendees => {
      const updatedAttendees = attendee
        ? prevAttendees.map(existingAttendee =>
            existingAttendee.id === attendee.id
              ? attendeeData
              : existingAttendee,
          )
        : [...(prevAttendees || []), attendeeData];

      storeData(updatedAttendees, storageKeys.attendeeData);
      return updatedAttendees;
    });

    {
      edit &&
        attendee &&
        setCurrentAttendeeArr((prevAttendees: AttendeeInfo[]) => {
          const updatedAttendees = prevAttendees.map(existingAttendee =>
            existingAttendee.id === attendee.id
              ? attendeeData
              : existingAttendee,
          );

          return updatedAttendees;
        });
    }

    {
      add &&
        setCurrentAttendeeArr((prevAttendees: AttendeeInfo[]) => {
          const updatedAttendees = [...(prevAttendees || []), attendeeData];
          setIsAttendeeModalVisible(false);
          return updatedAttendees;
        });
    }

    setAttendeeInput(emptyAttendeeForm);
    setIsNewAttendeeModalVisible(!isNewAttendeeModalVisible);
  };

  return (
    <CustomModal
      visible={isNewAttendeeModalVisible}
      setVisible={setIsNewAttendeeModalVisible}>
      <Text style={styles.modalTitle}>{label}</Text>
      <Input
        label="Name"
        invalid={!attendeeInput.title.isValid}
        onChangeText={(value: string) => handleInputChange('title', value)}
        value={attendeeInput.title.value}
        required
        errorMessage={attendeeInput.title.errorMessage}
      />
      <Input
        label="Email"
        invalid={!attendeeInput.email.isValid}
        onChangeText={(value: string) => handleInputChange('email', value)}
        value={attendeeInput.email.value}
        textInputConfig={{
          keyboardType: 'email-address',
          autoCapitalize: 'none',
        }}
        required
        errorMessage={attendeeInput.email.errorMessage}
      />
      <View style={styles.buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </CustomModal>
  );
};

export default AddNewAttendeeModal;
