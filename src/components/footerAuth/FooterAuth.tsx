import {Text, View} from 'react-native';

import {Button} from '@components/button';
import styles from './styles';

const FooterAuth = ({
  text,
  buttonLabel,
  onPressLogin,
}: FooterAuthProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button mode="flat" label={buttonLabel} onPress={onPressLogin} />
    </View>
  );
};

export default FooterAuth;
