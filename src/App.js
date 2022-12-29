
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUserComponent from './components/AddUserComponent';
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeComponent />}/>
        <Route path='/add' element={<AddUserComponent />}/>
      </Routes>
    </>
  );
}

export default App;
