import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from './Form';
import List from './List';

const Outer = styled.div`
  text-align: center;
  padding: 5rem;
`;

class Main extends Component {
  renderTodoList = () => {
    return this.props.todo.map(todo => {
      return <List isTodo key={todo.id} todo={todo} />;
    });
  };

  renderCompletedList = () => {
    return this.props.completed.map(list => {
      return <List key={list.id} todo={list} />;
    });
  };

  render() {
    return (
      <Outer>
        <h1>To-Do</h1>
        <div>
          <h2>
            <Link to="/history">Go To History</Link>
          </h2>
        </div>
        <Form label="Add List" type="text" />
        <h1>Todo</h1>
        {this.renderTodoList()}
        <h1>Completed</h1>
        {this.renderCompletedList()}
      </Outer>
    );
  }
}

const mapStateToProps = state => {
  const { todos, completed } = state.todo;

  return {
    todo: todos,
    completed
  };
};

export default connect(mapStateToProps)(Main);
