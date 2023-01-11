import './Home.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewTask,
  changeCompletTask,
  changeDeleteTask,
  selectTodos
} from '../store/todoSlice';

export default function Home() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => json.slice(0, 10))
      .then((data) => {
        for (let todo of data) {
          dispatch(addNewTask({ task: todo.title, description: todo.title }))
        }
      })
  }, [])

  return (
    <div className="Home">
      <div className="Todo">
        <h1>Todos</h1>
        <div>
          <input className="input-todo" type="text" value={newTask} placeholder="Task" onChange={(e) => setNewTask(e.target.value)} />
          <input className="input-todo" type="text" value={newDescription} placeholder="Task description" onChange={(e) => setNewDescription(e.target.value)} />
          <button className="button-7" onClick={() => {
            dispatch(addNewTask({ task: newTask, description: newDescription }));
            setNewTask('');
            setNewDescription('');
          }
          }>Add Task</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td><span className={`badge ${todo.deleted ? 'badge--danger' : (todo.completed ? 'badge--success' : 'badge--info')}`}>
                    {todo.deleted ? 'deleted' : (todo.completed ? 'completed' : 'on going')}
                  </span></td>
                  <td>
                    <div className={`task ${todo.deleted ? 'deleted' : (todo.completed ? 'completed' : '')}`}>{todo.task}</div>
                    <div className={`description ${todo.deleted ? 'deleted' : (todo.completed ? 'completed' : '')}`}>{todo.description}</div>
                  </td>
                  <td>
                    <button className="button-7" style={{ backgroundColor: "#2ecc71", marginRight: "10px" }} onClick={() => dispatch(changeCompletTask(todo.id))}>
                      {todo.completed ? 'Undone' : 'Done'}
                    </button>
                    <button className="button-7" style={{ backgroundColor: "#e74c3c" }} onClick={() => dispatch(changeDeleteTask(todo.id))}>
                      {todo.deleted ? 'Undelete' : 'Delete'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
