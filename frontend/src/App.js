import { Routes, Route } from 'react-router-dom';
import './App.css';	


import Home from './Home';
import ProjectGroup from './projects/projectsGroup';
import FastSpots from './projects/fastspots';
import TodoList from './projects/todolist';
import Navigation from './components/navigation';

function App() {

   return (
      <div>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fastspotsProject" element={<FastSpots />} />
            <Route path="/todolistProject" element={<TodoList />} />
            <Route path="/smallProjects" element={<ProjectGroup />} />
         </Routes>
      </div>
   );
}
export default App;
    
