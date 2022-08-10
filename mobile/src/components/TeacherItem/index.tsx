import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://github.com/Raymw1.png' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rayan Wilbert</Text>
          <Text style={styles.subject}>Linear Algebra</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. {'\n'} 
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/hour {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            { /* <Image source={heartOutlineIcon} /> */ }
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
