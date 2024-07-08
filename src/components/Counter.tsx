import React, {useState} from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount((prevState) => prevState + 1);
    }

    return (
        <div className={cls.button}>
            <h1>{count}</h1>
            <button onClick={inc}>increm</button>
        </div>
    );
};