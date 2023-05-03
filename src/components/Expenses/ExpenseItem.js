import { useState } from 'react';

import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const [title, setTittle] = useState(props.title)


    const clickHandler = () => {
        setTittle('yolo')
    }

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    );
};

export default ExpenseItem;