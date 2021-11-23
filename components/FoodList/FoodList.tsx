import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { Food } from "../../models/Food";

export interface FoodListProps {
  foods: Food[];
}

export default function FoodList({ foods }: FoodListProps) {
  return (
    <FlatList 
      data={foods}
      renderItem={({ item }) => (
        <ListItem bottomDivider>
          <ListItem.Title>{ item.name }</ListItem.Title>
        </ListItem>
      )}
      keyExtractor={(f, i) => `${(f.id ? f.id : i)}`}
      style={{
        width: '100%',
      }}
      />
  );
}
