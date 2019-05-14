import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editList, delList, toTodoList, toCompleted } from '../actions';
import { calcTime } from '../utils/calcTime';
import Button from './Button';

const List = ({ todo, isTodo, toTodoList, toCompleted, editList, delList }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo.todoList);

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

  const onSubmitEdit = e => {
    e.preventDefault();
    const updatedList = {
      ...todo,
      todoList: value,
      action: 'Edited form ' + todo.todoList,
      lastUpdated: calcTime()
    };

    editList(updatedList);
    setEditMode(false);
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
        <form onSubmit={onSubmitEdit}>
          <input
            onChange={e => setValue(e.target.value)}
            type="text"
            value={value}
          />
        </form>
      ) : null}
    </div>
  );
};

export default connect(
  null,
  { editList, delList, toTodoList, toCompleted }
)(List);
