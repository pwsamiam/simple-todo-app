import React from "react";
//Ladder: TodoContainer.js; TodoList.js; TodoItem.js

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through"
    };

    const { completed, id, title } = this.props.todo;
    //We need to identify which one of the checkboxes is clicked. To do this, we need to 
    //pass along their respective ids through the callback function.
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}

export default TodoItem;
