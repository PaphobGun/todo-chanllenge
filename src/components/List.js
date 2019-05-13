import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  editList,
  toggleList,
  delList,
  toTodoList,
  toCompleted
} from '../actions';

class List extends Component {
  state = {
    editMode: false,
    value: ''
  };

  componentDidMount = () => {
    this.setState({
      value: this.props.todo.todoList
    });
  };

  //   toggleTodoComplete = () => {
  //     this.props.toggleList(this.props.todo);
  //   };

  changeToTodo = () => {
    const list = {
      ...this.props.todo,
      action: 'changed to Todo'
    };
    this.props.toTodoList(list);
  };

  changeToCompleted = () => {
    const list = {
      ...this.props.todo,
      action: 'changed to Completed'
    };
    this.props.toCompleted(list);
  };

  deleteList = () => {
    const deletedList = {
      ...this.props.todo,
      action: this.props.todo.todoList + ' is Deleted'
    };
    this.props.delList(deletedList);
  };

  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const updatedList = {
      id: this.props.todo.id,
      todoList: this.state.value,
      action: 'edited form ' + this.props.todo.todoList,
      lastUpdated: this.props.todo.lastUpdated
    };

    this.props.editList(updatedList);
  };

  render() {
    return (
      <div>
        <h4>{this.props.todo.todoList}</h4>
        {this.props.isTodo ? (
          <button onClick={this.toggleEdit}>Edit</button>
        ) : null}
        <button onClick={this.deleteList}>Delete</button>
        {this.props.isTodo ? (
          <button onClick={this.changeToCompleted}>check</button>
        ) : (
          <button onClick={this.changeToTodo}>uncheck</button>
        )}
        {this.state.editMode ? (
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              type="text"
              value={this.state.value}
            />
          </form>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { editList, toggleList, delList, toTodoList, toCompleted }
)(List);
