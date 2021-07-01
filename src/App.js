import TimeOfDay from "./components/TimeOfDay";
import Container from "./components/Container";
import TodoApp from "./components/TodoApp";
import TodoData from "./database/Tododata";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      console.log(prevState);
      console.log(updatedTodos);
      return {
        todos: updatedTodos,
      };
    });
  }
  render() {
    let Todo = this.state.todos.map((item) => {
      return (
        <TodoApp
          key={item.id}
          item={item}
          handleChange={() => this.handleChange(item.id)}
        />
      );
    });
    return (
      <Container>
        <TimeOfDay />
        {Todo}
      </Container>
    );
  }
}

export default App;
