import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";

export interface HistoryDayProps {
  date: Date;
}

export default function HistoryDay({ date }: HistoryDayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundBolus,
    padding: 4, 
    paddingStart: 8,   
  },
  date: {
    color: 'white',
    fontSize: 18,
  }
});