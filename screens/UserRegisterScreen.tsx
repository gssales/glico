import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function UserRegisterScreen({ navigation }: RootStackScreenProps<'UserRegister'>) {

  const [name, setName] = React.useState('')
  const [weigth, setWeigth] = React.useState('')
  const [height, setHeight] = React.useState('')
  const [birthDate, setBirthDate] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [diabetesType, setDiabetesType] = React.useState('')
  const [glicoseGoalMin, setGlicoseGoalMin] = React.useState<number>(70)
  const [glicoseGoalMax, setGlicoseGoalMax] = React.useState<number>(140)
  const [insulinDose, setInsulinDose] = React.useState('0')
  const [insulinSensibility, setInsulinSensibility] = React.useState('0')

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Text>Nome</Text>
        <TextInput
          style={styles.inputLonger}
          value={name}
          onChangeText={setName}
          placeholder="Nome"
        />
      </View>

      <View style={styles.row}>
        <Text>Peso</Text>
        <TextInput
          style={styles.input}
          value={weigth}
          onChangeText={setWeigth}
          placeholder="Kg"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <Text>Altura</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholder="Metros"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.row}>
        <Text>Data de Nascimento</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          style={styles.inputLonger}
          onChangeText={setBirthDate}
          value={birthDate}
          keyboardType="numeric"
          placeholder='DD/MM/YYYY'
        />
      </View>

      <View style={styles.row}>
        <Text>Sexo</Text>
        <Picker
          style={{
            height: 32,
            width: 150
          }}
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)
          }>
          <Picker.Item label="Feminino" value="feminino" />
          <Picker.Item label="Masculino" value="masculino" />
        </Picker>
      </View>

      <View style={styles.row}>
        <Text>Tipo de Diabetes</Text>
        <Picker
          style={{
            height: 32,
            width: 150
          }}
          selectedValue={diabetesType}
          onValueChange={(itemValue, itemIndex) => setDiabetesType(itemValue)
          }>
          <Picker.Item label="Diabetes I" value="1" />
          <Picker.Item label="Diabetes II" value="2" />
        </Picker>
      </View>

      <View style={styles.row}>
        <View style={styles.containerColumn}>

          <Text>Meta de Glicose (mg/dL)</Text>

          <RangeSlider min={0} max={200}
            fromValueOnChange={value => setGlicoseGoalMin(value)}
            toValueOnChange={value => setGlicoseGoalMax(value)}
            initialFromValue={70}
            initialToValue={140}
            styleSize="small"
          />
          <View style={styles.rowNoBorder}>
            <Text>Glicose Mínima: {glicoseGoalMin}</Text>
            <Text>Glicose Máxima: {glicoseGoalMax}</Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.containerColumn}>

          <Text>Razão de Carboidrato</Text>

          <View style={styles.row}>
            <Text>Peso</Text>
            <Text>Insulina (U)</Text>
            <Text>Carboidrato (g)</Text>
          </View>

          <View style={styles.row}>
            <Text>{weigth === '' ? "0" : weigth} Kg</Text>
            <Text>1:</Text>
            <TextInput
              style={styles.input}
              value={insulinDose}
              onChangeText={setInsulinDose}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <Text>Fator de sensibilidade à insulina</Text>
            <TextInput
              style={styles.input}
              value={insulinSensibility}
              onChangeText={setInsulinSensibility}
              keyboardType="numeric"
            />
          </View>
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
  rowNoBorder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    padding: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    width: '25%',
    textAlign: 'center'
  },
  inputLonger: {
    padding: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    width: '50%',
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
