import { StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import Dialog from "react-native-dialog";

const AlertBox = () => {
  const [visible, setVisible] = useState(true);

  //   const showDialog = () => {
  //     setVisible(true);
  //   };

  const handleNoBtn = () => {
    setVisible(false);
  };

  const handleYesBtn = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };
  return (
    <View>
      <Dialog.Container visible={true}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>Do you want to Checkput?</Dialog.Description>
        <Dialog.Button label="No" onPress={handleNoBtn} />
        <Dialog.Button label="Yes" onPress={handleYesBtn} />
      </Dialog.Container>
    </View>
  );
};

export default AlertBox;

const styles = StyleSheet.create({});
