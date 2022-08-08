import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/AppStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

type ScreenProps = StackNavigationProp<RootStackParamList, 'GiveClasses'>

function Landing() {
  const navigation = useNavigation<ScreenProps>();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />
      <Text style={styles.title}>
        You're welcome, {'\n'}
        <Text style={styles.titleBold}>What are you searching for?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]} 
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        285 connections yet!! {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;

