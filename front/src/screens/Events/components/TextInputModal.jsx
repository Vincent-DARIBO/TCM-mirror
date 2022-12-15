import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import Input from '../../profile/components/Input';
import Title from '../../profile/components/Title';
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import {layout} from '../../../shared/styles';
import {green, white} from '../../../constants/colors';
import Button from '../../../components/Button';

export default function TextInputModal({
  modalVisible,
  setModalVisible,
  name,
  setName,
  description,
  setDescription,
  address,
  setAddress,
}) {
  const [index, setIndex] = React.useState(0);
  const bottomSheetRef = React.useRef(null);

  // variables
  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback(
    index => {
      setIndex(index);
    },
    [index, setIndex],
  );

  // renders
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
        alignItems: 'center',
      }}>
      <Button title="press" onPress={() => bottomSheetRef.current.expand()} />
      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        detached
        style={{width: '80%'}}
        bottomInset={Dimensions.get('window').height / 3}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Pressable onPress={() => bottomSheetRef.current.close()}>
            <Text>Awesome 🎉</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
  //   return (
  //     <Modal visible={modalVisible}>
  //       <Pressable
  //         onPress={() => setModalVisible(false)}
  //         style={{...layout.center, backgroundColor: 'gray', flex: 1}}>
  //         <View style={styles.modalContent}>
  //           <Title text={selectedDay.dateString} />
  //           <Input
  //             placeholder="Nom"
  //             value={name}
  //             onChangeText={setName}
  //             icon={
  //               <MaterialCommunityIcons
  //                 name="note-outline"
  //                 size={20}
  //                 style={styles.icon}
  //               />
  //             }
  //             style={{...styles.input, borderRadius: 0}}
  //           />
  //           <Input
  //             placeholder="Description"
  //             value={description}
  //             onChangeText={setDescription}
  //             mutiline
  //             maxLength={150}
  //             icon={
  //               <MaterialCommunityIcons
  //                 name="note-outline"
  //                 size={20}
  //                 style={styles.icon}
  //               />
  //             }
  //             style={{...styles.input, borderRadius: 0}}
  //             styleInput={{height: 130}}
  //           />
  //           <View
  //             style={{
  //               ...styles.radius,
  //               backgroundColor: white,
  //             }}>
  //             <Feather
  //               name="search"
  //               size={20}
  //               style={{opacity: 0.7, marginLeft: 15}}
  //             />
  //             <TextInput
  //               placeholder="Trouver une adresse"
  //               value={address}
  //               onChangeText={setAddress}
  //               style={{...styles.inputSize}}
  //             />
  //           </View>
  //           <Button
  //             title="valider"
  //             onPress={() => console.log('pressed')}
  //             style={styles.button}
  //           />
  //         </View>
  //       </Pressable>
  //     </Modal>
  //   );
}

const styles = StyleSheet.create({
  modalContent: {
    ...layout.center,
    backgroundColor: white,
    borderRadius: 20,
    padding: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
    opacity: 0.7,
  },
  button: {
    backgroundColor: green,
    marginTop: 50,
  },
  inputSize: {
    width: 295,
    height: 50,
    paddingLeft: 20,
  },
});
