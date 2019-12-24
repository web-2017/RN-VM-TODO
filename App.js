import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components';
import { MainScreen, TodoScreen } from './src/screens';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ]);
  };

  // Переключения экрана в ручную
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id != id));
  };

  const openTodo = () => {};

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={id => {
        setTodoId(id);
      }}
    />
  );

  if (todoId) {
    content = <TodoScreen />;
  }

  const { container } = styles;
  return (
    <View>
      <Navbar title='Todo App!' />
      <View style={container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
