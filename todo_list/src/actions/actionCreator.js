import { ADD_TASK } from '../constants';

export const addTast = (id, text, isCompleted) => ({  /*action is a function that takes certain parameters and returns new object created from these arguments. to this function we give the tests ide, text and isCompleted. And we always show type of action ADD_TASK pn top*/
  type: 'ADD_TASK',
  id,
  text,
  isCompleted
});