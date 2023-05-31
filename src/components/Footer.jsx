import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask} from '../store/tasksSlice';

function Footer() {
  const tasks = useSelector((state) => state.tasks);
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const incompleteTasksCount = tasks.length - completedTasksCount;

  const dispatch = useDispatch();

  const clearCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.completed);
    completedTasks.forEach((task) => {
      dispatch(deleteTask({ id: task.id }));
    });
  };



  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{incompleteTasksCount}</strong> items left
      </span>

      <button className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>

    </footer>
  );
}

export default Footer;


