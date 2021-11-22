import * as React from 'react';
import { StyleSheet, Platform, Button } from 'react-native';

import { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function EditEntryScreen({ navigation }: RootStackScreenProps<'EditEntry'>) {

  const [date, setDate] = useState(new Date(Date.now()))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('Empty')

  function onChange(event: any, selectedDate: Date) {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios');
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/1' + tempDate.getFullYear()
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
    setText(fTime + ' ' + fDate)
    console.log(fTime + ' ' + fDate)
  }

  function showMode(currentMode: string) {
    setShow(true)
    setMode(currentMode)
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Hora e Data</Text>
        <Button title="Hora" onPress={() => showMode('time')} />
        <Button title="Data" onPress={() => showMode('date')} />
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange} />
        )}
      </View>


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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px',
    gap: '30px'
  }
});
