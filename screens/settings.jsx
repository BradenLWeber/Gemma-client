import React, { useState, useRef, createRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

const Settings = (props) => {

  const [userPhotoList, setUserPhotoList] = useState({ default: require('../assets/defaultAvatar.png') })
  const [username, setUsername] = useState('FuriousFive5');
  const [GPS, setGPS] = useState(true);

  const nameInputRef = createRef();

  const handleSettingsSave = () => {
    props.navigator.navigate('Map');
  }
  const handlePicture = () => {

  }

  return (
    <View style={styles.settingsView}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <TouchableOpacity onPress={handlePicture}>
        <View style={styles.photoSetting}>
          <Image source={userPhotoList[props.userPhoto]} style={styles.userImage} />
        </View>
        <Text style={styles.imageText}>Click to Edit Photo</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.nameInput}>
          <Text style={styles.nameLabel}>USER DISPLAYED NAME</Text>
          <TextInput
            style={styles.nameInputText}
            onChangeText={(username) => setUsername(username)}
            placeholder={username}
            returnKeyType="next"
            onSubmitEditing={() =>
              nameInputRef.current &&
              nameInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.nameInput}>
        <Text style={styles.nameLabel}>PIN COLOR</Text>
        <View style={styles.colorPicker}>
          <TouchableOpacity style={styles.colorDot1}></TouchableOpacity>
          <TouchableOpacity style={styles.colorDot2}></TouchableOpacity>
          <TouchableOpacity style={styles.colorDot3}></TouchableOpacity>
          <TouchableOpacity style={styles.colorDot4}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.gpsWrapper}>
        <Text style={styles.nameLabel}>GPS ON/OFF</Text>
        <Switch
          trackColor={{ false: 'gray', true: '#6CC071' }}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => setGPS(value)}
          value={GPS}
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
        />
      </View>
      <TouchableOpacity onPress={handleSettingsSave} style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View >
  )
};

const styles = StyleSheet.create({
  settingsView: {
    flexDirection: 'column',
    padding: 10,
  },
  settingsTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 50,
    color: '#201E3C',
    backgroundColor: '#6CC071',
    paddingLeft: 10,
  },
  photoSetting: {
    paddingTop: 20,
    alignItems: 'center',
  },
  userImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#201E3C',
  },
  imageText: {
    color: '#201E3C',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  nameInput: {
    paddingTop: 20,
  },
  nameLabel: {
    color: '#201E3C',
    fontSize: 14,
  },
  nameInputText: {
    fontSize: 20,
  },
  colorPicker: {
    flexDirection: 'row',
  },
  colorDot1: {
    fontSize: 40,
    backgroundColor: '#201E3C',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  colorDot2: {
    fontSize: 40,
    backgroundColor: '#6CC071',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  colorDot3: {
    fontSize: 40,
    backgroundColor: '#97CCEE',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  colorDot4: {
    fontSize: 40,
    backgroundColor: '#F9D01E',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  gpsWrapper: {
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  gpsToggle: {
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#6CC071",
    width: 90,
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
  },
  saveText: {
    fontSize: 20,
  },
});

export default Settings;