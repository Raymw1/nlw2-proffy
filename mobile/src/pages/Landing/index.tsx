import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/AppStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StudyTabsList } from '../../routes/StudyTabs';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

type ScreenProps = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'GiveClasses'>,
  BottomTabNavigationProp<StudyTabsList>
>

function Landing() {
  const navigation = useNavigation<ScreenProps>();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then(response => {
      setTotalConnections(response.data.total);
    })
  }, []);
 

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyPage() {
    navigation.navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />
      <Text style={styles.title}>
        You're welcome, {'\n'}
        <Text style={styles.titleBold}>What are you searching for?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPage}
        >
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
        {totalConnections} connections yet!! {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;

