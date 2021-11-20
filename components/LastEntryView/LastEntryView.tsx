import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import ValueView from "../ValueView/ValueView";


export default function LastEntryView() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <ValueView type="bolus" value={10.1}/>
        <Text style={styles.text}>Bolus</Text>
      </View>
      <View style={styles.section}>
        <ValueView type="glucose" value={123} size="big"/>
        <Text style={styles.text}>Glicemia</Text>
      </View>
      <View style={styles.section}>
        <ValueView type="carbs" value={101}/>
        <Text style={styles.text}>Carbs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    backgroundColor: Colors.blue,
    paddingVertical: 12,
    minHeight: 114,
  },
  section: {
    backgroundColor: 'transparent',
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: 'white',
  }
})