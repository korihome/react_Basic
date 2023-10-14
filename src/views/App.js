import './App.scss';
import logo from './logo.svg';
import MyComponents from './Example/MyComponents';
import TodoList from './Todo/TodoList';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<TodoList />} />
                        <Route path="/about" element={<MyComponents />} />
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
