

import Header from './components/banner';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';


const Home = () => {
    return (
        <div className='personal-portfolio-container'>
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
     );
}

export default Home;