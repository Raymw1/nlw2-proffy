import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Picker } from '@react-native-picker/picker';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
};

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [showPickerTime, setShowPickerTime] = useState(false);
  const [time, setTime] = useState(new Date());
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [schedule, setSchedule] = useState('Schedule');
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers.map((teacher: Teacher) => teacher.id));
      }
    })
  }

  function getTime(event: DateTimePickerEvent, selectedTime: Date | undefined) {
    const time = new Date(selectedTime as Date);
    setTime(time);
    setShowPickerTime(false);
    let minutes = String(time.getMinutes());
    minutes = String(minutes).length < 2 ? '0' + minutes : minutes;
    const formattedTime = `${time.getHours()}:${minutes}`;
    setSchedule(formattedTime);
  }

  async function handleFiltersSubmit() {
    if (!subject || !weekDay || !schedule) return;
    loadFavorites();
    const {data} = await api.get('/classes', 
      { 
        params: { 
          subject, 
          week_day: weekDay, 
          time: schedule
        }, 
      });
    setTeachers(data);
    setIsFiltersVisible(false);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title='Available Proffys' 
        headerRight={(
          <BorderlessButton 
            hitSlop={{ top: 50, bottom: 50, right: 50, left: 50 }}
            onPress={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            <Feather name='filter' size={20} color='#FFF' />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <Picker
              selectedValue={subject}
              onValueChange={(value) => setSubject(value)}
              style={styles.input}
            >
              <Picker.Item label='Choose a subject' value='' enabled={false} />
              <Picker.Item label='Linear Algebra' value='Linear Algebra' key='1' />
              <Picker.Item label='Vectors and Matrices' value='Vectors and Matrices' key='2' />
              <Picker.Item label='Text Production' value='Text Production' key='3' />
              <Picker.Item label='Logical Thinking' value='Logical Thinking' key='4' />
              <Picker.Item label='Number Theory' value='Number Theory' key='5' />
              <Picker.Item label='Real Analysis' value='Real Analysis' key='6' />
              <Picker.Item label='Trigonometry' value='Trigonometry' key='7' />
              <Picker.Item label='Complex Numbers' value='Complex Numbers' key='8' />
              <Picker.Item label='Euclidian Geometry' value='Euclidian Geometry' key='9' />
              <Picker.Item label='Financial Education' value='Financial Education' key='10' />
            </Picker>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week day</Text>
                <Picker
                  selectedValue={weekDay}
                  onValueChange={value => setWeekDay(value)}
                  style={styles.input}
                  placeholder='Week day'
                >
                  <Picker.Item label='Week day' value='' enabled={false} />
                  <Picker.Item label='Monday' value='1' key='1' />
                  <Picker.Item label='Tuesday' value='2' key='2' />
                  <Picker.Item label='Wednesday' value='3' key='3' />
                  <Picker.Item label='Thursday' value='4' key='4' />
                  <Picker.Item label='Friday' value='5' key='5' />
                  <Picker.Item label='Saturday' value='6' key='6' />
                  <Picker.Item label='Sunday' value='7' key='7' />
                </Picker>
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Schedule</Text>
                { showPickerTime && <RNDateTimePicker mode='time' value={time} onChange={getTime} /> }
                <RectButton
                  style={styles.input}
                  onPress={() => setShowPickerTime(true)}
                >
                  <Text style={{ color: schedule == 'Schedule' ? '#C1BCCC' : 'black' }}>{schedule}</Text>
                </RectButton>
              </View>
            </View>
            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>Search</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;

