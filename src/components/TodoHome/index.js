import { Component } from 'react'
import Todo from '../Todo'

import './index.css'

const todos = [
    { id: 1, task: "Learn Html" },
    { id: 2, task: "Learn css" },
    { id: 3, task: "Learn js" }
]



class TodoHome extends Component {
    state = { todoList: todos, id: 3, inputTask: "" }

    onChangeInputTask = (event) => {
        this.setState({ inputTask: event.target.value })
    }

    addTask = () => {
        const { id, inputTask } = this.state
        if (inputTask === "") {
            alert("Please Enter the task")
        }
        else {
            const todoItem = { id: id + 1, task: inputTask }
            console.log(todoItem)
            this.setState(prevState => ({ todoList: [...prevState.todoList, todoItem], id: prevState.id + 1, inputTask: "" }))
        }

    }

    deleteItem = (id) => {
        const { todoList } = this.state
        const updatedList = todoList.filter(eachItem => (
            eachItem.id !== id
        ))
        this.setState({ todoList: updatedList })

    }

    renderNoTasksLeft = () => (
        <div className='noTasks-container'>
            <p className='noTasks-heading'>No Tasks Left</p>
        </div>
    )

    render() {
        const { inputTask, todoList } = this.state
        console.log(todoList.length)

        return (
            <div className='container'>
                <div className='box'>
                    <h1 className="todos-heading">Todos</h1>
                    <h1 className="create-task-heading">
                        Create <span className="create-task-heading-subpart">Task</span>
                    </h1>
                    <input type="text" className="todo-user-input" placeholder="What needs to be done?" onChange={this.onChangeInputTask} value={inputTask} />
                    <button className="add-todo-button" onClick={this.addTask}>Add</button>
                    <h1 className="todo-items-heading">
                        My <span className="todo-items-heading-subpart">Tasks</span>
                    </h1>
                    <ul className="todo-items-container">
                        {
                            todoList.length === 0 ? this.renderNoTasksLeft() : (
                                todoList.map(eachItem => (
                                    <Todo key={eachItem.id} id={eachItem.id} todoTask={eachItem.task} deleteItem={this.deleteItem} />
                                ))
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoHome