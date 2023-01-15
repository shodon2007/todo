import React, { useState } from 'react';

const App = () => {
    let storage;
    if (localStorage.getItem('list') !== null) {
        storage = localStorage.getItem('list').split(',');
    } else {
        storage = [];
    }

    const [list, setList] = useState(storage);
    let [input, setInput] = useState('');
    return (
        <div className="todo__body">
            <div className="todo__add">
                <input
                    className="todo__input"
                    type="text"
                    placeholder="your todo"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className="todo__button" onClick={() => {
                    if (input != '') {
                        const date = new Date();
                        list.push(input + 'date' + date.getHours() + ':' + date.getMinutes());
                        setList(list);
                        setInput('');
                        localStorage.setItem('list', list);
                    }
                }}>add</button>
            </div>
            <div className="todo__list">
                {list.map((item, index) => {
                    return <div className='todo__item' key={Math.random()}>
                        <div className="item__left">
                            {index}. {item.slice(0, item.lastIndexOf('date'))}
                        </div>
                        <div className="item__right">
                            <div className='item__time'>
                                {item.slice(item.lastIndexOf('date') + 4)}
                            </div>
                            <div className="item__delete">X</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default App;