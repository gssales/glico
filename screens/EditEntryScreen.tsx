import * as React from 'react';
import { StyleSheet } from 'react-native';

import { useState,useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

const DEFAULT_ENTRY_FORM = {
  time: '',
  date: '',
  blood_glucose: '',
  carbohydrates: '',
  meal_type: '',
  insulin_meal_dose: '',
  insulin_correction_dose: '',
  observations: '',
  tags: ''
}

export default function EditEntryScreen({ navigation }: RootStackScreenProps<'EditEntry'>) {

  const [formInputEntry, setFormInputEntry] = useState(DEFAULT_ENTRY_FORM)

  useEffect(() => {
    const hour = new Date().getDate()
    const minutes = new Date().getMinutes()
    const current_time = `${hour + 1}:${minutes}`
    const target = 'time'
    setFormInputEntry(currentValues => ({
      ...currentValues,
      [target]: current_time,
    }))
  })

  return (
    <View style={styles.container}>
      <div>
        <Text>Hora e Data</Text>
        <Text>{hour + 1} : {minutes}</Text>
      </div>

      <Text>Glicemia</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
