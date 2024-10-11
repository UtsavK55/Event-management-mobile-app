import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
      borderRadius: 4,
      padding: 8,
      backgroundColor: 'yellow'
    },
    flat: {
      backgroundColor: 'transparent',
    },
    buttonText: {
      color: 'black',
      textAlign: 'center',
    },
    flatText: {
      color: 'blue'
    },
    pressed: {
      opacity: 0.75,
      backgroundColor: 'green',
      borderRadius: 4,
    },
  });