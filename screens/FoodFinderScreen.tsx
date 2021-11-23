import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import FoodList from '../components/FoodList/FoodList';

import { Text, View } from '../components/Themed';
import { Food } from '../models/Food';
import FoodService from '../services/foodService';
import { RootStackScreenProps } from '../types';
import { RootContext } from '../components/RootContext/RootContext';

export default function FoodFinderScreen({ navigation }: RootStackScreenProps<'FoodFinder'>) {
  const { setSelectedFood } = useContext(RootContext);
  const foodService = new FoodService();
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    getFoods();
  }, []);

  async function getFoods() {
    let foods: Food[];
    if (searchTerm.length > 0)
      foods = await foodService.search(searchTerm);
    else
      foods = await foodService.getAll();

    setFoods(foods);
  }

  function handleOnFoodClick(f: Food) {
    setSelectedFood(f);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Pesquisar Alimento"
          onChangeText={ t => setSearchTerm(t) }/>
        <Button
          containerStyle={styles.button}
          title="Pesquisar"
          onPress={ () => getFoods() }/>
      </View>
      <FoodList foods={foods} onFoodClick={handleOnFoodClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
  },
  inputContainer: {
    width: '70%',
  },
  button: {
    width: '30%',
  }
});
