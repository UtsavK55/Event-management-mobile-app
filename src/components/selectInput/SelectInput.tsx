import {useState} from 'react';

import {FlatList, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const SelectInput = ({label, data}: SelectInputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState<AttendeeInfo>({
    id: '',
    title: '',
    email: '',
  });
  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };
  const handleSelect = ({item}: AttendeeInfoProps) => {
    setInput(item);
    toggleDropdown();
  };
  const Item = ({item}: AttendeeInfoProps) => (
    <Pressable style={styles.input} onPress={() => handleSelect({item})}>
      <Text style={styles.text}>
        Name: {item?.title} | Email: {item?.email}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.inputContainer}>
     
      <Pressable style={styles.input} onPress={toggleDropdown}>
      <Text style={styles.label}>{label}</Text>
      </Pressable>

      {isVisible && (
        <View style={styles.flatlist}>
          <FlatList
            data={data}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default SelectInput;
