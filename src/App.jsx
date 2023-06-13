import React from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import styles from './App.module.scss';
import { useStore } from 'react-redux';

const App = () => {
    const store = useStore();

    function updateLocalStorage() {
        localStorage.clear();
        localStorage.setItem('todo', JSON.stringify(store.getState().todos));
    }

    store.subscribe(updateLocalStorage);

    return <div className={styles.app}>
        <TodoForm />
        <TodoList />
    </div>
};

export default App;