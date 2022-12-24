
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUserComponent from './components/AddUserComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeComponent />}/>
      <Route path='/add' element={<AddUserComponent />}/>
    </Routes>
  );
}

export default App;
