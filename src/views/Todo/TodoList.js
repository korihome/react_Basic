import React from 'react'
import AddTodo from './AddTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoList extends React.Component {
    state = {
        arrTodo: [
            { id: 'todo1', title: 'Stydying' },
            { id: 'todo2', title: 'Sleeping' },
            { id: 'todo3', title: 'Going out' },
        ],
        editTodo: {}
    }

    addTodo = (todoItem) => {
        this.setState({
            arrTodo: [...this.state.arrTodo, todoItem]
        })
    }

    deleteTodo = (todoItem) => {
        let crtArrTodo = this.state.arrTodo;
        crtArrTodo = crtArrTodo.filter(item => {
            return item.id !== todoItem.id
        })
        this.setState({
            arrTodo: crtArrTodo
        })
        toast.success(<div className='toastNofi'>Remove todo complete!</div>)
    }

    handleEditTodo = (todoItem) => {
        this.setState({
            editTodo: todoItem
        })
    }

    handleReWriteTodo = (event) => {
        let crtTodo = {
            id: this.state.editTodo.id,
            title: event.target.value
        }
        this.setState({
            editTodo: crtTodo
        })
    }

    handleSaveTodo = () => {
        let checkSame = false;
        let crtArrTodo = this.state.arrTodo

        if (!this.state.editTodo.title) {
            toast.error(<div className='toastNofi'>Missing title's Todo!</div>)
            return;
        }

        crtArrTodo = crtArrTodo.map((item) => {
            if (item.title === this.state.editTodo.title) {
                checkSame = true
            }
            if (item.id === this.state.editTodo.id) {
                item.title = this.state.editTodo.title;
            }
            return item
        })

        this.setState({
            editTodo: {}
        })

        if (!checkSame) {
            this.setState({
                arrTodo: crtArrTodo,
            })
            toast.success(<div className='toastNofi'>Edit todo complete!</div>)
        }
    }


    render() {
        let isEmpty = Object.keys(this.state.editTodo).length === 0
        return (
            <div className='todoList'>
                <AddTodo
                    addTodo={this.addTodo}
                    IDitemEdit={this.a}
                />

                <div className='content-todo'>
                    {this.state.arrTodo.map((item, index) => {
                        return (
                            <p key={item.id}>
                                {
                                    isEmpty === false && item.id === this.state.editTodo.id ?
                                        <span>
                                            <span>{index + 1}. <input type='text' value={this.state.editTodo.title} onChange={(event) => { this.handleReWriteTodo(event) }} /></span>
                                            <button onClick={() => { this.handleSaveTodo() }}>Save</button>
                                        </span>
                                        :
                                        <span>
                                            <span>{index + 1}. {item.title}</span>
                                            <button onClick={() => { this.handleEditTodo(item) }}>Edit</button>
                                            <button onClick={() => { this.deleteTodo(item) }}>Remove</button>
                                        </span>
                                }
                            </p>
                        )
                    })}
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        )
    }
}

export default TodoList;
