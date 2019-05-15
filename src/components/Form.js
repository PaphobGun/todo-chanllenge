import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import styled from 'styled-components';
import uniqid from 'uniqid';

import InputField from './InputField';
import { calcTime } from '../utils/calcTime';
import { isValid } from '../utils/regExp';

const Outer = styled.div`
  margin: 2rem 2rem;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = ({ addList, todos, completeds }) => {
  const [list, setList] = useState('');
  const [err, setErr] = useState('');

  const onSubmitAdd = e => {
    e.preventDefault();

    const newList = {
      id: uniqid(),
      todoList: list,
      action: 'Added to todo',
      lastUpdated: calcTime()
    };

    // invalid
    if (!isValid(list)) {
      return setErr('Invalid input, Alphanumeric with no space only');
    }

    // duplicate
    if (todos.filter(todo => todo.todoList === list).length > 0) {
      return setErr('This list is already included in Todo-list');
    }

    // duplicate
    if (
      completeds.filter(completed => completed.todoList === list).length > 0
    ) {
      return setErr('This list is already included in Completed-list');
    }

    addList(newList);
    setList('');
    setErr('');
  };

  return (
    <Outer>
      <MyForm onSubmit={onSubmitAdd}>
        <InputField
          label="Add List"
          onChangeProp={setList}
          value={list}
          type="text"
          err={err}
        />
      </MyForm>
    </Outer>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    completeds: state.todo.completed
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(Form);
