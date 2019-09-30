import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  Platform,
} from 'react-native';

const InputField = props => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');
  const onChangeTodoHandler = todo => {
    setEnteredTodo(todo);
  };

  const onChangeQuantityHandler = quantity => {
    setEnteredQuantity(quantity);
  };

  const addGoalHandler = () => {
    const temp = enteredTodo.trim().toLowerCase();
    temp.replace(/\s{2,}/g, ' ');
    const temp2 = enteredQuantity.trim().toLowerCase();
    temp2.replace(/\s{2,}/g, ' ');

    if (temp !== '' && temp2 !== '') {
      props.addTodo({
        name: temp,
        quantity: temp2,
      });
      setEnteredTodo('');
      setEnteredQuantity('');
      Keyboard.dismiss();
    } else {
      alert('Cannot leave blank');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputTodo}
          placeholder="Add Item"
          value={enteredTodo}
          onChangeText={onChangeTodoHandler}
          autoFocus={true}
          onSubmitEditing={addGoalHandler}
        />
        <TextInput
          style={styles.inputQuantity}
          placeholder="Quantity"
          value={enteredQuantity}
          onChangeText={onChangeQuantityHandler}
          onSubmitEditing={addGoalHandler}
          keyboardType={'numeric'}
          maxLength={7}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flexDirection: 'row',
    marginBottom: 15,
  },
  inputArea: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 25 : 15,
  },
  inputTodo: {
    borderBottomColor: '#1E90FF',
    borderBottomWidth: 1,
    marginLeft: 20,
    width: '55%',
  },
  inputQuantity: {
    borderBottomColor: '#1E90FF',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 5,
    width: '20%',
  },
});

export default InputField;
