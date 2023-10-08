import React from "react";

class RenderTodo extends React.Component {
    deleteTode = (todoItem) => {
        this.props.deleteTodo(todoItem);
        // console.log(todoItem);
    }

    render() {
        return (
            <div className='content-todo'>
                {this.props.arrTodo.map((item, index) => {
                    return (
                        <p key={item.id}>
                            {index + 1}. {item.title}
                            <button onClick={() => { this.deleteTode(item) }}>Remove</button>
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default RenderTodo;