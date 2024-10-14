import {Text, View} from 'react-native';

import {Button} from '@components/button';
import styles from './styles';

const Footer = ({
  text,
  buttonLabel,
  onPressLogin,
}: AlreadySignedUpProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button mode="flat" onPress={onPressLogin}>
        {buttonLabel}
      </Button>
    </View>
  );
};

export default Footer;
