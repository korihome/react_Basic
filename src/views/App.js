import logo from './logo.svg';
import './App.scss';
// import MyComponents from './Example/MyComponents';
import TodoList from './Todo/TodoList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>
                    Simple ToDoList by React JS
                </h3>
                {/* <MyComponents /> */}
                <TodoList />
            </header>
        </div>
    );
}

export default App;
