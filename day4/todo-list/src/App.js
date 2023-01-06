// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      task: 'Bermain permainan papan',
      description: 'Bermain sama Patrick dan Squidward',
      completed: false,
      deleted: false
    },
    {
      id: 2,
      task: 'Bermain tic tac toe',
      description: 'Bermain melawan Patrick',
      completed: false,
      deleted: false
    },
    {
      id: 3,
      task: 'Minum cokelat panas',
      description: 'Minum cokelat panas sore hari',
      completed: false,
      deleted: false
    },
    {
      id: 4,
      task: 'Menyelesaikan puzzle',
      description: 'Menyelesaikan jigsaw',
      completed: false,
      deleted: false
    },
    {
      id: 5,
      task: 'Menonton TV',
      description: 'Menonton berita Bikini Bottom sama Gary',
      completed: false,
      deleted: false
    },
  ]);

  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask) {
      let copy = [...state];
      copy = [...copy, { id: state.length + 1, task: newTask, description: newDescription, completed: false, deleted: false }];
      setState(copy);
      setNewTask('');
      setNewDescription('');
    }

    return;
  }

  return (
    <div className="App">
      <div className="Todo">
        <h1>Todos</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTask} placeholder="Task" onChange={(e) => setNewTask(e.target.value)} />
          <input type="text" value={newDescription} placeholder="Task description" onChange={(e) => setNewDescription(e.target.value)} />
          <input type="submit" value="Add Task" className="button-7"/>
        </form>

        <table>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
          {state.map((todo) => {
            return (
              <tr>
                <td><span className={`badge ${todo.deleted ? 'badge--danger' : (todo.completed ? 'badge--success' : 'badge--info')}`}>
                  {todo.deleted ? 'deleted' : (todo.completed ? 'completed' : 'on going')}
                </span></td>
                <td>
                  <div className={`task ${todo.deleted ? 'deleted' : (todo.completed ? 'completed' : '')}`}>{todo.task}</div>
                  <div className={`description ${todo.deleted ? 'deleted' : (todo.completed ? 'completed' : '')}`}>{todo.description}</div>
                </td>
                <td>
                  <button className="button-7" style={{backgroundColor: "#2ecc71", marginRight: "10px"}} onClick={() => {
                    const nextState = state.map(a => {
                      if (a.id !== todo.id) return a;
                      return { ...a, completed: !todo.completed }
                    });

                    setState(nextState);
                  }}>
                    {todo.completed ? 'Undone' : 'Done'}
                  </button>
                  <button className="button-7" style={{backgroundColor: "#e74c3c"}} onClick={() => {
                    const nextState = state.map(a => {
                      if (a.id !== todo.id) return a;
                      return { ...a, deleted: !todo.deleted }
                    });

                    setState(nextState);
                  }}>
                    {todo.deleted ? 'Undelete' : 'Delete'}
                  </button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
