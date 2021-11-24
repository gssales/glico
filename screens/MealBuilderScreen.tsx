import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import { Text, View } from '../components/Themed';
import { Food } from '../models/Food';
import { RootStackScreenProps } from '../types';
import { RootContext } from '../components/RootContext/RootContext';
import Colors from '../constants/Colors';

export default function MealBuilderScreen({ navigation }: RootStackScreenProps<'MealBuilder'>) {
  const { selectedFood, setSelectedFood } = useContext(RootContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mealType, setMealType] = useState('desjejum');
  const [food, setFood] = useState<Food>();
  const items = [
    { label: 'Desjejum', value: 'desjejum' },
    { label: 'Almoço', value: 'almoço' },
    { label: 'Lanche', value: 'lanche' },
    { label: 'Jantar', value: 'jantar' },
    { label: 'Ceia', value: 'ceia' },
  ];

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
      <DropDownPicker 
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        open={openDropdown}
        setOpen={setOpenDropdown}
        items={items}
        value={mealType}
        setValue={setMealType} />
      <Text>Meal Builder</Text>
      { food && <Text>{food.name}</Text>}
      <Button title="food list" onPress={() => navigation.navigate('FoodFinder')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.background2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  dropdown: {
    backgroundColor: Colors.background2,
  }
});
