import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />
      <Text style={styles.title}>
        You're welcome, {'\n'}
        <Text style={styles.titleBold}>What are you searching for?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]} activeOpacity={0.7}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </TouchableOpacity>
         <TouchableOpacity style={[styles.button, styles.buttonSecondary]} activeOpacity={0.7}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        285 connections yet!! {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;

