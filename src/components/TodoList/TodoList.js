import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import TodoListItems from './TodoListItems/TodoListItems';

const todoList = props => (
  <View style={styles.container}>
    <View style={styles.fContainer}>
      <Text style={styles.item}>Item:</Text>
      <Text style={styles.quantity}>Quantity:</Text>
    </View>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.listOfItems}
      renderItem={todo => (
        <TodoListItems
          name={todo.item.value}
          id={todo.item.id}
          quantity={todo.item.quantity}
          removeTodo={props.removeTodo}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 3,
    marginTop: 20,
  },
  fContainer: {
    flexDirection: 'row',
  },
  item: {
    marginLeft: 19,
    marginRight: 18,
    width: '55%',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  quantity: {
    width: '20%',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default todoList;
