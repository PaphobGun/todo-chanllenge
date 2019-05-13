import {
  ADD_LIST,
  EDIT_LIST,
  CLEAR_LOGS,
  DEL_LIST,
  TO_TODO,
  TO_COMPLETED
} from './type';

export const addList = list => {
  return {
    type: ADD_LIST,
    payload: list
  };
};

// export const toggleList = list => {
//   return {
//     type: TOGGLE_LIST,
//     payload: list
//   };
// };

export const editList = list => {
  return {
    type: EDIT_LIST,
    payload: list
  };
};

export const delList = list => {
  return {
    type: DEL_LIST,
    payload: list
  };
};

export const clearLogs = () => {
  return { type: CLEAR_LOGS };
};

export const toTodoList = list => {
  return {
    type: TO_TODO,
    payload: list
  };
};

export const toCompleted = list => {
  return {
    type: TO_COMPLETED,
    payload: list
  };
};
