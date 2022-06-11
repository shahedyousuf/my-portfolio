import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
