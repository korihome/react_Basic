import React from 'react'
import AddTodo from './AddTodo';
import RenderTodo from './RenderTodo';

class TodoList extends React.Component {
    state = {
        arrTodo: [
            { id: 'todo1', title: 'Stydying' },
            { id: 'todo2', title: 'Sleeping' },
            { id: 'todo3', title: 'Going out' },
        ]
    }

    addTodo = (todoItem) => {
        console.log(todoItem);
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
    }

    render() {
        return (
            <>
                <AddTodo addTodo={this.addTodo} />
                <RenderTodo arrTodo={this.state.arrTodo} deleteTodo={this.deleteTodo} />
            </>
        )
    }
}

export default TodoList;
