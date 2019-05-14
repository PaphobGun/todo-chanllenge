import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import styled from 'styled-components';
import uniqid from 'uniqid';

import { calcTime } from '../utils/calcTime';

const Outer = styled.div`
  margin: 2rem 2rem;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  width: 30%;
  outline: none;
  &:focus {
    border: 2px solid green;
  }
`;

const Form = ({ addList, label, type }) => {
  const [list, setList] = useState('');

  const onSubmitAdd = e => {
    e.preventDefault();

    const newList = {
      id: uniqid(),
      todoList: list,
      action: 'Added to todo',
      lastUpdated: calcTime()
    };

    addList(newList);
    // clear input field
    setList('');
  };

  return (
    <Outer>
      <MyForm onSubmit={onSubmitAdd}>
        <label>{label}</label>
        <Input
          onChange={e => setList(e.target.value)}
          value={list}
          type={type}
        />
      </MyForm>
    </Outer>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(Form);
