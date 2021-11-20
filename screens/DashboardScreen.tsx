import * as React from 'react';
import { Button, Dimensions, StyleSheet } from 'react-native';

import { Text, View, Chart } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import LastEntryView from '../components/LastEntryView/LastEntryView';

export default function DashboardScreen({ navigation }: RootTabScreenProps<'Dashboard'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, João</Text>
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
        height={220}
        bezier
      />
      <LastEntryView />
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
