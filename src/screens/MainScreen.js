import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { AddTodo, Todo } from '../components';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
