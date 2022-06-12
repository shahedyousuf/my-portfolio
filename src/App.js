import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutMe' element={<Info />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;
