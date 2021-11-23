import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import History from '../components/History/History';

import { Chart, Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function HistoryScreen({ navigation }: RootTabScreenProps<'History'>) {
  return (
    <View style={styles.container}>
      <View style={styles.spacing}/>
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
      <History />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  spacing: {
    height: 40,
    backgroundColor: Colors.backgroundBolus,
  },
});
