import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Food } from '../models/Food';
import FoodService from '../services/foodService';
import { RootStackScreenProps } from '../types';

export default function FoodFinderScreen({ navigation }: RootStackScreenProps<'FoodFinder'>) {
  const foodService = new FoodService();
  const [foods, setFoods] = useState<Food[]>();
  
  useEffect(() => {
    getFoods();
  }, []);

  async function getFoods() {
    const foods: Food[] = await foodService.getAll();
    setFoods(foods);
  }

  return (
    <View style={styles.container}>
      <Text>Food Finder</Text>
      { foods?.map( (f, i) => 
        <Text key={ f.id ? f.id : i }>{f.name}</Text>
      ) }
    </View>
  );
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
