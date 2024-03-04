import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <TodoList/>
    </div>
  );
}

export default App;
