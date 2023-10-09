import React from 'react'
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    static index = 0;

    state = {
        title: ''
    }

    handleTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    Notification = () => {

    }

    handleComfirm = () => {
        let todoItem = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        if (!this.state.title) {
            toast.error(<div className='toastNofi'>Missing title's Todo!</div>)
            return;
        }

        toast.success(<div className='toastNofi'>Add new Todo complete</div>)
        this.props.addTodo(todoItem)
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div>
                <div className='add-todo'>
                    <input value={this.state.title} type='text' onChange={(event) => { this.handleTodo(event) }} />
                    <button onClick={() => { this.handleComfirm() }}>add</button>
                </div>
            </div>
        )
    }
}

export default AddTodo;