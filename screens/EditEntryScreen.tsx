import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { TextInputMask } from 'react-native-masked-text';
import moment from 'moment';
import { Picker } from '@react-native-picker/picker';
import { RootContext } from '../components/RootContext/RootContext';
const getCurrentDate = () => {

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + '/' + month + '/' + year;//format: dd-mm-yyyy;
}

export default function EditEntryScreen({ navigation }: RootStackScreenProps<'EditEntry'>) {

  const [time, setTime] = React.useState<string>(moment().format("HH:mm"))
  const [date, setDate] = React.useState<string>(getCurrentDate().toString())
  const [glicose, setGlicose] = React.useState<string>('0')
  const [carbohydrates, setCarbohydrates] = React.useState<string>(calculateTotalCarbs().toString())
  const [mealSelected, setMealSelected] = React.useState<string>('')
  const [insulinMeal, setInsulinMeal] = React.useState<string>('0')
  const [insulinCorrection, setInsulinCorrection] = React.useState<string>('0')
  const [notes, setNotes] = React.useState<string>('')
  const [tags, setTags] = React.useState<string>('')
  const { meal } = React.useContext(RootContext)

  function calculateTotalCarbs(): number {
    if (meal) {
      return meal?.foodList.reduce((acc, curr) => acc + curr.amount * curr.food.carbs, 0);
    }
    return 0
  }

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Text>Hora e Data</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'HH:mm'
          }}
          style={styles.input}
          onChangeText={setTime}
          value={time}
          keyboardType="numeric"
        />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          style={styles.input}
          onChangeText={setDate}
          value={date}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <Text>Glicemia</Text>
        <View style={styles.end}>
          <TextInput
            style={styles.input}
            value={glicose}
            onChangeText={setGlicose}
            keyboardType="numeric"
          />
          <Text> mg/Dl</Text>
        </View>
      </View>

      <View style={styles.row}>

        <View style={styles.containerColumn}>
          <View style={styles.flexRow}>
            <Text>Carboidratos</Text>
            <View style={styles.end}>
              <TextInput
                style={styles.input}
                value={carbohydrates}
                onChangeText={setCarbohydrates}
                keyboardType="numeric"
              />
              <Text> g</Text>
            </View>
          </View>

          <View style={styles.flexRow}>

            <Picker
              style={{
                height: 32,
                width: 150
              }}
              selectedValue={mealSelected}
              onValueChange={(itemValue, itemIndex) => setMealSelected(itemValue)
              }>
              <Picker.Item label="Desjejum" value="desjejum" />
              <Picker.Item label="Almoço" value="almoço" />
              <Picker.Item label="Lanche" value="lanche" />
              <Picker.Item label="Jantar" value="janta" />
              <Picker.Item label="Ceia" value="ceia" />
            </Picker>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 150,
                height: 35,
                backgroundColor: '#1A73E9',
                borderRadius: 50,
              }}
              onPress={() => navigation.navigate('MealBuilder')}
            >
              <Text
                style={styles.editMealButtonText}>
                EDITAR REFEIÇÃO
              </Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>

      <View style={styles.row}>
        <View style={styles.containerColumn}>
          <Text>Insulina</Text>

          <View style={styles.flexRow}>
            <View>
              <Text>Dose (refeição)</Text>
              <Text>carbs:ratio</Text>
            </View>

            <View style={styles.end}>
              <TextInput
                style={styles.input}
                value={insulinMeal}
                onChangeText={setInsulinMeal}
                keyboardType="numeric"
              />
              <Text> U</Text>
            </View>
          </View>

          <View style={styles.flexRow}>
            <View>
              <Text>Dose (correção)</Text>
              <Text>(Glicemia - Meta): Sensibilidade</Text>
            </View>

            <View style={styles.end}>
              <TextInput
                style={styles.input}
                value={insulinCorrection}
                onChangeText={setInsulinCorrection}
                keyboardType="numeric"
              />
              <Text> U</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.containerColumn}>
          <Text>Observações</Text>
          <TextInput
            style={{
              padding: 5,
              borderColor: 'rgba(0, 0, 0, 0.2)',
              borderWidth: 1,
              borderRadius: 5,
              width: '100%',
              textAlign: 'center'
            }}
            value={notes}
            onChangeText={setNotes}
            multiline={true}
            numberOfLines={4}

          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.containerColumn}>
          <Text>Tags</Text>
          <TextInput
            style={{
              padding: 5,
              borderColor: 'rgba(0, 0, 0, 0.2)',
              borderWidth: 1,
              borderRadius: 5,
              width: '100%',
              textAlign: 'center'
            }}
            value={tags}
            onChangeText={setTags}
            multiline={true}
            numberOfLines={2}
            placeholder="(Arroz) (Resfriado)"
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    paddingHorizontal: '5%',
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  input: {
    padding: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    width: '25%',
    textAlign: 'center'
  },
  end: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 10
  },
  editMealButton: {
    borderRadius: 50,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  editMealButtonText: {
    color: 'white',
  }
});
