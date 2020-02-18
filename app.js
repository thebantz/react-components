// var TodoList = props => {
//   var onListItemClick = event => {
//     console.log("I got clicked");
//   };
//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// };

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <TodoList todos={["Cucumbers", "Tomato", "Greek Yoghurt"]} />
//   </div>
// );

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {}
//     // this.state.todos = ["Cucumbers", "Tomato", "Greek Yoghurt"];
//   }
//   render() {
//     return <li>{this.props.todo}</li>;
//   }
// }

var groceryItems = ["Cucumbers", "Tomato", "Greek Yoghurt"];
// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
var TodoList = props => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {groceryItems.map(todo => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  </div>
);

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      ponder: false,
      done: false,
      todos: groceryItems
    };
  }
  hover() {}

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseDown() {
    this.setState(
      {
        ponder: !this.state.ponder
      },
      state => {
        console.log("MOUSE STATE:", this.state);
      }
    );
  }

  // add hover functionality using this: https://reactjs.org/docs/handling-events.html
  // consider onMouseEnter, onMouseLeave

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? "line-through" : "none",
      fontWeight: this.state.ponder ? "bold" : "normal"
    };

    return (
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseOver={this.onMouseDown.bind(this)}
        onMouseLeave={this.onMouseDown.bind(this)}
      >
        {this.props.todo}
      </li>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("app"));
