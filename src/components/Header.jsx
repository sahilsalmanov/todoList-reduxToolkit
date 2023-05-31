import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';


function Header() {


  const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};


  function enter(event) {
   if(event.key === 'Enter') {
    onSubmit(event)
   }
  }

  return (
    <header class="header">
    <h1>todos</h1>
    <form>
			<input onChange={(e) => setValue(e.target.value)} class="new-todo" placeholder="What needs to be done?" autoFocus value={value}
				onKeyPress={enter} />
    </form>
</header>
  )
}

export default Header

