import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgImage} style={styles.content} resizeMode='contain'>
        <Text style={styles.title}>Do you want to be a Proffy?</Text>
        <Text style={styles.description}>First of all, you have to register as a Proofy on our WEB platform.</Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={() => navigation.goBack()}>
        <Text style={styles.okButtonText}>All right!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;

