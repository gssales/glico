import * as React from 'react';
import { Button, Dimensions, StyleSheet } from 'react-native';

import { Text, View, Chart } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import LastEntryView from '../components/LastEntryView/LastEntryView';
import History from '../components/History/History';
import { FAB } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olá, João</Text>
      </View>
      <Chart
        data={{
          labels: ["00:00", "06:00", "12:00", "18:00", "00:00"],
          datasets: [
            {
              data: [
                Math.random() * 50 + 125,
                Math.random() * 50 + 125,
                Math.random() * 50 + 125,
                Math.random() * 50 + 125,
                Math.random() * 50 + 125,
                Math.random() * 50 + 125
              ],
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={180}
        bezier
      />
      <LastEntryView />
      <History />
      <FAB 
        color={'#1BB55C'} 
        placement='right' 
        title={<MaterialIcons name="add" color="#fff" size={30}/>}
        onPress={() => navigation.navigate('EditEntry')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: Colors.blue,
    padding: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
