import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Entry } from "../../models/Entry";
import { Text, View } from "../Themed";
import ValueView from "../ValueView/ValueView";

export interface HistoryItemProps {
  entry: Entry;
}

export default function HistoryItem({ entry }: HistoryItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{ `${entry.timestamp.getHours()}:${entry.timestamp.getMinutes()}`}</Text>
      </View>
      <ValueView type="glucose" size="small" value={entry.glucose} />
      <ValueView type="bolus" size="small" value={entry.insulin_bc + entry.insulin_br} />
      <ValueView type="carbs" size="small" value={entry.meal_carbs} />
      <Text style={styles.meal}>{entry.meal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: 'transparent',
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 4,    
  },

  timeContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.backgroundTime,
    justifyContent: "center",
  },

  time: {
    maxWidth: '100%',
    color: 'white',
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
  },

  meal: {
    width: "20%"
  }
});
