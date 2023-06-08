import { useState } from 'react';
import './App.css';
import  { About } from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import Portfolio from './components/Portfolio';
import useMediaQuery from './hooks/useMediaQuery'
import { useEffect } from 'react';
import { SidebarNavDots } from './components/SidebarNavDots';

function App() {

  //using state to identify the current page the user is browser
  const [currentPage, setCurrentPage] = useState('home')

  //using custom hook to determine if screen size is above or below 1060px
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  //determining if navbar is at top of page or not.
  const [topOfPage, setTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setTopOfPage(true) : setTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
 
  return (
    <div className="App bg-deep-blue">
      <Navbar 
        topOfPage={topOfPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {aboveMediumScreens && (
          <SidebarNavDots 
            currentPage={currentPage}
            setCurrentPage= {setCurrentPage}
          />)
        }
      </div>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export { App }
