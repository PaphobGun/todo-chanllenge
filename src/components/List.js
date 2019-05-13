import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editList, delList, toTodoList, toCompleted } from '../actions';
import { calcTime } from '../utils/calcTime';
class List extends Component {
  state = {
    editMode: false,
    value: this.props.todo.todoList
  };

  changeToTodo = () => {
    const list = {
      ...this.props.todo,
      action: 'changed to Todo',
      lastUpdated: calcTime()
    };
    this.props.toTodoList(list);
  };

  changeToCompleted = () => {
    const list = {
      ...this.props.todo,
      action: 'changed to Completed',
      lastUpdated: calcTime()
    };
    this.props.toCompleted(list);
  };

  deleteList = () => {
    const deletedList = {
      ...this.props.todo,
      action: this.props.todo.todoList + ' is Deleted',
      lastUpdated: calcTime()
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

  onSubmitEdit = e => {
    e.preventDefault();
    const updatedList = {
      ...this.props.todo,
      todoList: this.state.value,
      action: 'Edited form ' + this.props.todo.todoList,
      lastUpdated: calcTime()
    };

    this.props.editList(updatedList);
  };

  render() {
    return (
      <div>
        <h4>{this.props.todo.todoList}</h4>
        {this.props.isTodo ? (
          <>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={this.changeToCompleted}>check</button>
          </>
        ) : (
          <button onClick={this.changeToTodo}>uncheck</button>
        )}
        <button onClick={this.deleteList}>Delete</button>
        {this.state.editMode ? (
          <form onSubmit={this.onSubmitEdit}>
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
  { editList, delList, toTodoList, toCompleted }
)(List);
