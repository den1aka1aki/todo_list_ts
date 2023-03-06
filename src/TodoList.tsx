import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type Propstype = {
    title: string
    tasks: Array<TaskType>
}
const TodoList = (props: Propstype) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => {alert(t.id)}}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;
