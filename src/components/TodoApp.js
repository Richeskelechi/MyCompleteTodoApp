import "../assets/css/TodoApp.css";

function TodoApp(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="inputTodo">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={props.handleChange}
      />
      <span style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </span>
    </div>
  );
}
export default TodoApp;
