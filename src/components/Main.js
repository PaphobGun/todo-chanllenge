import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from './Form';
import List from './List';

const Outer = styled.div`
  text-align: center;
  padding: 5rem;
`;

const HeadTodo = styled.h1`
  margin-bottom: 1rem;
`;

const Type = styled.div`
  margin-bottom: 1rem;
  ${props => props.mt && 'margin-top: 1.5rem;'}
  font-size: 2rem;
`;

const LinkToHistory = styled(Link)`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  text-decoration: none;
`;

const Main = ({ todo, completed }) => {
  const renderTodoList = () => {
    return todo.map(todo => {
      return <List isTodo key={todo.id} todo={todo} />;
    });
  };

  const renderCompletedList = () => {
    return completed.map(list => {
      return <List key={list.id} todo={list} />;
    });
  };

  return (
    <Outer>
      <HeadTodo>To-Do</HeadTodo>
      <div>
        <h2>
          <LinkToHistory to="/history">Go To History</LinkToHistory>
        </h2>
      </div>
      <Form label="Add List" type="text" />
      <Type>Todo</Type>
      {renderTodoList()}
      <Type mt>Completed</Type>
      {renderCompletedList()}
    </Outer>
  );
};

const mapStateToProps = state => {
  const { todos, completed } = state.todo;

  return {
    todo: todos,
    completed
  };
};

export default connect(mapStateToProps)(Main);
