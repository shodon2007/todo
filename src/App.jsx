import React from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import styles from './App.module.scss';

const App = () => {
    return <div className={styles.app}>
        <TodoForm />
        <TodoList />
    </div>
};

export default App;