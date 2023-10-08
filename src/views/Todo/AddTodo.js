import React from 'react'

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

    handleComfirm = () => {
        let todoItem = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        if (!this.state.title) {
            alert("Missing requier params!")
            return;
        }

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