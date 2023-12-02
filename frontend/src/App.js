import { Routes, Route } from 'react-router-dom';
import './App.css';	


import Home from './Home';
import FastSpots from './projects/fastspots';
import TodoList from './projects/todolist';
import SnowDino from './projects/snowdino';
import PlaySnowDino from './projects/playdino';

function App() {

   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/fastspotsProject" element={<FastSpots />} />
         <Route path="/todolistProject" element={<TodoList />} />
         <Route path="/snowdinoProject" element={<SnowDino />} />
         <Route path='/playSnowDino' element={<PlaySnowDino/>} />
      </Routes>
   );
}
export default App;
    
