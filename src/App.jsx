import { useState } from 'react';
import './App.css';
import  { About } from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import Portfolio from './components/Portfolio';
import useMediaQuery from './hooks/useMediaQuery'
import { SidebarNavDots } from './components/SidebarNavDots';

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
      <div className="w-5/6 mx-auto md:h-full">
        {aboveMediumScreens && (
          <SidebarNavDots 
            currentPage={currentPage}
            setCurrentPage= {setCurrentPage}
          />)
        }
      </div>
      <Home setCurrentPage={setCurrentPage}/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export { App }
