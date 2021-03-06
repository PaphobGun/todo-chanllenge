import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editList, delList, toTodoList, toCompleted } from '../actions';
import { calcTime } from '../utils/calcTime';
import { isValid } from '../utils/regExp';
import InputField from './InputField';
import Button from './Button';

const onSubmitEdit = (
  e,
  value,
  todos,
  completeds,
  setEditMode,
  setErr,
  editList,
  todo
) => {
  e.preventDefault();
  const updatedList = {
    ...todo,
    todoList: value,
    action: 'Edited form ' + todo.todoList,
    lastUpdated: calcTime()
  };

  // invalid
  if (!isValid(value)) {
    return setErr('Invalid input, Alphanumeric with no space only');
  }

  // duplicate
  if (todos.filter(todo => todo.todoList === value).length > 0) {
    return setEditMode(false);
  }

  // duplicate
  if (completeds.filter(completed => completed.todoList === value).length > 0) {
    return setErr('This list is already included in Completed-list');
  }

  editList(updatedList);
  setEditMode(false);
  setErr('');
};

const List = ({
  todo,
  isTodo,
  toTodoList,
  toCompleted,
  editList,
  delList,
  todos,
  completeds
}) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo.todoList);
  const [err, setErr] = useState('');

  const changeToTodo = () => {
    const list = {
      ...todo,
      action: 'changed to Todo',
      lastUpdated: calcTime()
    };
    toTodoList(list);
  };

  const changeToCompleted = () => {
    const list = {
      ...todo,
      action: 'changed to Completed',
      lastUpdated: calcTime()
    };
    toCompleted(list);
  };

  const deleteList = () => {
    const deletedList = {
      ...todo,
      action: 'Deleted',
      lastUpdated: calcTime()
    };
    delList(deletedList);
  };

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleOnSubmit = e => {
    onSubmitEdit(
      e,
      value,
      todos,
      completeds,
      setEditMode,
      setErr,
      editList,
      todo
    );
  };

  return (
    <div>
      <h4>{todo.todoList}</h4>
      {isTodo ? (
        <>
          <Button onClickProp={toggleEdit} text="Edit" />
          <Button onClickProp={changeToCompleted} text="Check" />
        </>
      ) : (
        <Button onClickProp={changeToTodo} text="Uncheck" />
      )}
      <Button onClickProp={deleteList} del text="Delete" />
      {editMode ? (
        <form onSubmit={handleOnSubmit}>
          <InputField
            sm="toSm"
            onChangeProp={setValue}
            type="text"
            value={value}
            err={err}
          />
        </form>
      ) : null}
    </div>
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
  { editList, delList, toTodoList, toCompleted }
)(List);
