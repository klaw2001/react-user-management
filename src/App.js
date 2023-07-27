import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add-user' element={<AddUser/>} />
          <Route path='/user-list' element={<UserList/>} />
          <Route path='/edit-user/:userid' element={<EditUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
