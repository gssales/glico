import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';

import { Text, View } from '../components/Themed';
import { Food } from '../models/Food';
import { RootStackScreenProps } from '../types';

export default function MealBuilderScreen({ navigation }: RootStackScreenProps<'MealBuilder'>) {
  const [food, setFood] = useState<Food>();

  useEffect(() => {
    getFood();
  });

  async function getFood() {
    const foodJson = await AsyncStorage.getItem('selected_food');
    if (foodJson !== null)
      setFood(JSON.parse(foodJson));
  }

  return (
    <View style={styles.container}>
      <Text>Meal Builder</Text>
      { food && <Text>{food.name}</Text>}
      <Button title="food list" onPress={() => navigation.navigate('FoodFinder')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
