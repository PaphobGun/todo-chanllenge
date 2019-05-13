import {
  ADD_LIST,
  EDIT_LIST,
  TOGGLE_LIST,
  DEL_LIST,
  CLEAR_LOGS,
  TO_TODO,
  TO_COMPLETED
} from '../actions/type';

const initialState = {
  todos: [],
  logs: [],
  completed: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        logs: [...state.logs, action.payload]
      };
    // case TOGGLE_LIST:
    //   return {
    //     ...state,
    //     todos: state.todos.filter(todo => {
    //       return todo.id !== action.payload.id;
    //     })
    //   };
    case DEL_LIST:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload.id;
        }),
        completed: state.completed.filter(list => {
          return list.id !== action.payload.id;
        }),
        logs: [...state.logs, action.payload]
      };
    case EDIT_LIST:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload.id ? (todo = action.payload) : todo;
        }),
        logs: [...state.logs, action.payload]
      };
    case CLEAR_LOGS:
      return { ...state, logs: [] };
    case TO_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        completed: state.completed.filter(list => {
          return list.id !== action.payload.id;
        }),
        logs: [...state.logs, action.payload]
      };
    case TO_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload.id;
        }),
        completed: [...state.completed, action.payload],
        logs: [...state.logs, action.payload]
      };
    default:
      return state;
  }
};
