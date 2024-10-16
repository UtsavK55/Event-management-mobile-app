import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';

import {styles} from './styles';

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  visible,
  setVisible,
}) => {

  const closeModal = () => {
    setVisible(false);
  };
  
  return (
    <View>
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {children}
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomModal;
