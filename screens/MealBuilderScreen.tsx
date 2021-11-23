import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { Text, View } from '../components/Themed';
import { Food } from '../models/Food';
import { RootStackScreenProps } from '../types';
import { RootContext } from '../components/RootContext/RootContext';

export default function MealBuilderScreen({ navigation }: RootStackScreenProps<'MealBuilder'>) {
  const { selectedFood, setSelectedFood } = useContext(RootContext);
  const [food, setFood] = useState<Food>();

  useEffect(() => {
    getFood();
  });

  function getFood() {
    if (selectedFood != null) {
      setFood(selectedFood);
      setSelectedFood(null);
    }
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
