import './App.css';
import useMediaQuery from './hooks/useMediaQuery'
import { useState } from 'react';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { SidebarNavDots } from './components/SidebarNavDots';
import { RainbowLineBreak } from './components/RainbowLineBreak';
import { motion } from 'framer-motion';

function App() {

  //using state to identify the current page the user is browser
  const [currentPage, setCurrentPage] = useState('home')

  //using custom hook to determine if screen size is above or below 1060px
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")
 
  return (
    <div className="App bg-deep-blue">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />

      {/* sidebar navigation dots */}
      <div className="w-5/6 lg:w-4/6 mx-auto md:h-full">
        {aboveMediumScreens && (
          <SidebarNavDots 
            currentPage={currentPage}
            setCurrentPage= {setCurrentPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setCurrentPage("home")}
        >
          <Home setCurrentPage={setCurrentPage}/>
        </motion.div>
      </div>

      <RainbowLineBreak/>
      
      <div className="md:w-5/6 lg:w-3/5 w-full mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setCurrentPage("skills")}
        >
          <Skills/>
        </motion.div>
      </div>
      
      <RainbowLineBreak/>
      
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setCurrentPage("projects")}
        >
          <Portfolio/>
        </motion.div>
      </div>      
      
      <RainbowLineBreak/>
      
      <div className="w-5/6 lg:w-3/5 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setCurrentPage("contact")}
        >
          <Contact/>
        </motion.div>
      </div>
      
      <Footer/>
    </div>
  );
}

export { App }
