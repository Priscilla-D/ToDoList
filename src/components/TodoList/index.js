// == Import npm
import React from 'react';

import './TodoList.scss';
import tasks from 'src/data/tasks';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      inputField: '',
      todos: [],
      tasks: tasks,
    };
  }

  onChange(event) {
    event.preventDefault();
    this.setState({
      inputField: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();
    if (this.state.inputField !== '') {
      this.setState({
        inputField: '',
        todos: [...this.state.todos, this.state.inputField],
      });
    }
  }

  deleteTodo(todo) {
    const array = this.state.todos;
    const index = array.indexOf(todo);
    array.splice(index, 1);
    this.setState({
      todos: array,
    });
  }

  renderTodos() {
    return this.state.todos.map((todo) => (
      <div className="task-label" key={todo}>
        - {todo} <button className="delete" type="button" onClick={this.deleteTodo.bind(this, todo)}>Supprimer</button>
      </div>
    ));
  }

  renderTasks() {
    return this.state.tasks.map((task) => (
      <div className="task-display" key={task}>
        <p className="task-label"> - {task.label}</p><p>&#x2714;</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="tasks">
        <h1 className="title">- To do list -</h1>
        <form className="form-addTask">
          <input
            className="input-addTask"
            value={this.state.inputField}
            type="text"
            placeholder="Nouvelle tâche"
            onChange={this.onChange.bind(this)}
          />
          <button className="btn" type="submit" onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>
        <div className="result">
          {this.renderTodos()}
        </div>
        <div className="result">
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}

export default TodoList;
