import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { Food } from "../../models/Food";
import { FoodAmount } from "../../models/FoodAmount";

export interface MealListProps {
  foods: FoodAmount[];
  onChangeFoodAmount: (food: Food, amount: number) => void;
  onAddFood: () => void;
}

export default function MealList({ foods, onChangeFoodAmount, onAddFood }: MealListProps) {
  return (
    <FlatList 
      data={foods}
      renderItem={({ item }) => (
        <ListItem bottomDivider>
          <Pressable
            onPress={() => onChangeFoodAmount(item.food, item.amount -0.5)}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            {
            item.amount === 0 ?
              <MaterialIcons name="clear" size={30} color="red"/>
            :
              <MaterialIcons name="remove" size={30} />
            }
          </Pressable>
          <ListItem.Content >
            <ListItem.Title>{ item.food.name }</ListItem.Title>
            <ListItem.Subtitle>{ `${item.amount} ${item.food.measure} - ${item.amount * item.food.carbs}g carbs` }</ListItem.Subtitle>
          </ListItem.Content>
          <Pressable
            onPress={() => onChangeFoodAmount(item.food, item.amount +0.5)}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <MaterialIcons name="add" size={30}/>
          </Pressable>
        </ListItem>
      )}
      keyExtractor={(f, i) => `${(f.food.id ? f.food.id : i)}`}
      ListFooterComponent={
        <ListItem onPress={() => onAddFood()}>
          <ListItem.Title>Adicionar Alimento</ListItem.Title>
        </ListItem>
      }
      style={{
        paddingHorizontal: 8,
      }}
      />
  );
}