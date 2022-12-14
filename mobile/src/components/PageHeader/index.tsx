import React, { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/AppStack';

import styles from './styles';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

type StackLandingProps = StackNavigationProp<RootStackParamList, 'Landing'>

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const navigation = useNavigation<StackLandingProps>();

  function handleGoBack() {
    navigation.navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoImg} resizeMode='contain' />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
}

export default PageHeader;
