import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';


let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}
/*
const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];*/

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
      case COMPLETE_TASK:
          return [...state].map(task => {
            if(task.id === id) {
              task.isCompleted = !task.isCompleted;
            }
            return task;
          });
    default:
      return state;
  }
}

export default tasks;

/* reducer is like an action, a clear function. Clear functions means it has no effects on other elements outside this function scope and returns the same result each time when it is being called with the same set of arguments. Our Reducer function takes 2 arguments. 1 is initial state, 2 is action that works inside function is added construction switch case.   */