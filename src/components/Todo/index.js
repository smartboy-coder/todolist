import './index.css'
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

class Todo extends Component {
    state = { isChecked: false }

    onChecked = () => {
        this.setState(prevState => ({ isChecked: !prevState.isChecked }))
    }



    render() {
        const { id, todoTask,deleteItem } = this.props
        const { isChecked } = this.state
        const checked = isChecked ? "checked" : ""

        const deleteTask = ()=>{
            deleteItem(id)
        }
        return (
            <li className='todo-item-container'>
                <input type='checkbox' className='checkbox-input' id={`chebox-${id}`} onChange={this.onChecked} />
                <div className='label-container'>
                    <label className={`checkbox-label ${checked}`} htmlFor={`chebox-${id}`}>{todoTask}</label>
                    <div className='delete-icon-container' onClick={deleteTask}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                </div>
            </li>
        )
    }
}


export default Todo