import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

import { Text, View } from '../components/Themed';
import { Food } from '../models/Food';
import { FoodAmount } from '../models/FoodAmount';
import { RootStackScreenProps } from '../types';
import { RootContext } from '../components/RootContext/RootContext';
import Colors from '../constants/Colors';
import MealList from '../components/MealList/MealList';

export default function MealBuilderScreen({ navigation }: RootStackScreenProps<'MealBuilder'>) {
  const { selectedFood, setSelectedFood, setMeal } = useContext(RootContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mealType, setMealType] = useState('desjejum');
  const [foodList, setFoodList] = useState<FoodAmount[]>([]);
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
    if (selectedFood && !foodList.find( p => p.food.id === selectedFood?.id)) {
      setFoodList([{ food: selectedFood, amount: 1 }, ...foodList]);
      setSelectedFood(null);
    }
  }

  function handleAddFoodAmount(food: Food, amount: number) {
    let list = foodList.slice();
    if (amount < 0)
      list = list.filter(p => food.id !== p.food.id);
    else
      list = list.map( p => food.id === p.food.id ? { amount: amount, food: p.food } : p );
    setFoodList(list);
  }

  function calculateTotalCarbs(): number {
    return foodList.reduce((acc, curr) => acc + curr.amount*curr.food.carbs, 0);
  }

  function handleActions(index: number) {
    if (index === 1 && foodList.length === 0)
      return;
    if (index === 1) {
      setMeal({
        foodList: foodList,
        mealType: mealType
      });
    }
    navigation.goBack();
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
      <MealList 
        foods={foodList}
        onChangeFoodAmount={handleAddFoodAmount}
        onAddFood={() => navigation.navigate('FoodFinder')} />
      <View style={styles.bottomContainer}>
        <View style={styles.carbsContainer}>
          <Text style={styles.carbsText}>Carboidratos Totais</Text>
          <Text style={[styles.carbsText, styles.carbsValue]}>{calculateTotalCarbs()}g</Text>
        </View>
        <ButtonGroup
          buttonContainerStyle={styles.buttonContainer}
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          buttons={['Cancelar','Salvar']}
          onPress={handleActions}/>
      </View>
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
  },
  carbsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  bottomContainer: {
    backgroundColor: '#6C92F4',
  },
  carbsText: {
    width: '50%',
    color: 'white',
    fontSize: 18,
    paddingVertical: 16
  },
  carbsValue: {
    textAlign: 'right',
  },
  buttonContainer: {
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: Colors.backgroundBolus,
    borderColor: Colors.backgroundBolus,
    height: 56,
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
});
