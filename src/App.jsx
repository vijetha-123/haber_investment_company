import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cards from './Components/Cards';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
