import './App.css';	

import Header from './components/banner';
import About from './components/about';
import Projects from './components/projects';


function App() {

   return (
      <div className='app-container'>
         <Header />
         <About />
         <Projects />
      </div>
   );
}
export default App;
    
