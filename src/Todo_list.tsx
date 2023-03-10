import React from 'react';

const TodoList = () => {
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/>
                <span>HTML & CSS</span>
                </li>
                <li><input type="checkbox" checked={true}/>
                    <span>JS</span>
                </li>
                <li><input type="checkbox"/>
                    <span>React</span>
                </li>
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