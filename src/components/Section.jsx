import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

function Section() {


    const todos = useSelector((state)=>{
		return state.tasks;
	});



  return (
    <section class="main">
    <input class="toggle-all" type="checkbox" />
    <label for="toggle-all">
        Mark all as complete
    </label>

    <ul class="todo-list">

        {todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
    </ul>
    
</section>
  )
}

export default Section     


