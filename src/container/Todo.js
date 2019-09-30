import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Layout from '../hoc/Layout';
import InputField from '../components/InputField/InputField';
import TodoList from '../components/TodoList/TodoList';
import API from '../api/api';

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [userDataS, setUserDataS] = useState();

  const addingTodoHandler = enteredObj => {
    const valuesArray = todoItems.map(a => a.value);
    valuesArray.includes(enteredObj.value)
      ? alert('You already have that in your list')
      : setTodoItems([
          ...todoItems,
          {
            id: Math.random().toString(),
            value: enteredObj.name,
            quantity: enteredObj.quantity,
          },
        ]);
  };

  const removeTodoHandler = todoId => {
    setTodoItems(currentTodo => {
      return currentTodo.filter(todo => todo.id !== todoId);
    });
  };

  // useEffect(() => {
  //   API.get('/todos').then(res => {
  //     const response = res.data;
  //     //Set into state in the todolist
  //   });
  // }, []);
  // console.log(userDataS);

  return (
    <View style={styles.container}>
      <Layout>
        <InputField style={styles.inputArea} addTodo={addingTodoHandler} />
        <TodoList listOfItems={todoItems} removeTodo={removeTodoHandler} />
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 45 : 0,
  },
  inputArea: {
    marginBottom: 30,
  },
});

export default Todo;
