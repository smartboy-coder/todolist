import { Component } from 'react'
import Todo from '../Todo'

import './index.css'

const todos = [
    { id: 1, task: "Learn Html" },
    { id: 2, task: "Learn css" },
    { id: 3, task: "Learn js" }
]

class TodoHome extends Component {
    state = { todoList: todos, input: "", id: todos.slice(-1)[0].id }

    onChangeInput = (event) => {
        this.setState({ input: event.target.value })
    }

    addTask = () => {
        const { input, id } = this.state
        if (input === '') {
            alert("Please Enter the task to add")
        }
        else {
            const todoItem = { id: id + 1, task: input }
            this.setState(prevState => ({ todoList: [...prevState.todoList, todoItem], id: prevState.id + 1, input: "" }))
        }

    }

    deleteItem = (id) => {
        const { todoList } = this.state
        const updatedList = todoList.filter(eachItem => (
            eachItem.id !== id
        ))
        this.setState({ todoList: updatedList })
    }

    render() {
        const { todoList, input } = this.state

        console.log(todoList)
        return (
            <div className='container'>
                <div className='box'>
                    <h1 className="todos-heading">Todos</h1>
                    <h1 className="create-task-heading">
                        Create <span className="create-task-heading-subpart">Task</span>
                    </h1>
                    <input type="text" id="todoUserInput" className="todo-user-input" placeholder="What needs to be done?" onChange={this.onChangeInput} value={input} />
                    <button className="add-todo-button" id="addTodoButton" onClick={this.addTask}>Add</button>
                    <h1 className="todo-items-heading">
                        My <span className="todo-items-heading-subpart">Tasks</span>
                    </h1>
                    <ul className="todo-items-container" id="todoItemsContainer">
                        {todoList.map(eachItem => (
                            <Todo key={eachItem.id} id={eachItem.id} todoTask={eachItem.task} deleteItem={this.deleteItem} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoHome