import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      Alert.alert('Названия обязательно для заполнения');
    }
  };

  const { block, inputError, input } = styles;

  return (
    <View style={block}>
      <TextInput
        style={isEmpty ? input : inputError}
        placeholder={
          isEmpty ? 'Введите название дела...' : 'Обязательно заполнить'
        }
        onChangeText={setValue}
        value={value}
        autoFocus={true}
        autoCorrect={false}
        placeholderTextColor='red'
      />
      <Button title='Добавить' onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  },
  inputError: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'red'
  }
});
