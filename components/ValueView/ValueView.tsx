import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";

export interface ValueViewProps {
  value: number;
  type: 'glucose' | 'bolus' | 'carbs';
  size?: 'small' | 'medium' | 'big';
}

export default function ValueView({ value, type, size = 'medium' }: ValueViewProps) {
  const measure = {
    'glucose': 'mg/dL',
    'bolus': 'Unid.',
    'carbs': 'g',
  };
  const title = {
    'glucose': 'Glicemia',
    'bolus': 'Bolus',
    'carbs': 'Carbs',
  };
  return (
    <View 
      style={[ 
        styles.container, 
        styles[`container_${size}`], 
        styles[type] 
      ]}>
      <Text 
        style={[
          styles.value, 
          styles[`value_${size}`]
        ]}>
        {Math.round(value*10)/10}
      </Text>
      <Text 
        style={[
          styles.measure, 
          styles[`measure_${size}`] 
        ]}>
        {measure[type]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  glucose: {
    backgroundColor: Colors.backgroundGlucose,
  },
  bolus: {
    backgroundColor: Colors.backgroundBolus,
  },
  carbs: {
    backgroundColor: Colors.backgroundCarbs,
  },

  container: {
    justifyContent: "center",
  },
  container_small: {
    width: 48,
    height: 48,
    borderRadius: 16,
  },
  container_medium: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  container_big: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  
  value: {
    color: 'white',
    maxWidth: '100%',
    fontWeight: 'bold',
    textAlign: "center",
  },
  value_small: {
    fontSize: 22,
    lineHeight: 22,
  },
  value_medium: {
    fontSize: 24,
  },
  value_big: {
    fontSize: 28,
  },

  measure: {
    color: 'white',
    maxWidth: '100%',
    textAlign: "center",
  },
  measure_small: {
    fontSize: 14,
    lineHeight: 14
  },
  measure_medium: {
    fontSize: 14,
    lineHeight: 14
  },
  measure_big: {
    fontSize: 14,
    lineHeight: 14
  },
})