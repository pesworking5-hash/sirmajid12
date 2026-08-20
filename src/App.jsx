import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Collaborators from './pages/Collaborators';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';
import Students from './pages/Students';
import Awards from './pages/Awards';
import Insights from './pages/Insights';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'research':
        return <Research />;
      case 'teaching':
        return <Teaching />;
      case 'projects':
        return <Projects />;
      case 'collaborators':
        return <Collaborators />;
      case 'publications':
        return <Publications />;
      case 'students':
        return <Students />;
      case 'awards':
        return <Awards />;
      case 'insights':
        return <Insights />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand" onClick={() => handleNavClick('home')}>
            <h1>Dr. Abdul Majid</h1>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a onClick={() => handleNavClick('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
            <li><a onClick={() => handleNavClick('about')} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
            <li><a onClick={() => handleNavClick('research')} className={currentPage === 'research' ? 'active' : ''}>Research</a></li>
            <li><a onClick={() => handleNavClick('teaching')} className={currentPage === 'teaching' ? 'active' : ''}>Teaching</a></li>
            <li><a onClick={() => handleNavClick('projects')} className={currentPage === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a onClick={() => handleNavClick('collaborators')} className={currentPage === 'collaborators' ? 'active' : ''}>Collaborators</a></li>
            <li><a onClick={() => handleNavClick('publications')} className={currentPage === 'publications' ? 'active' : ''}>Publications</a></li>
            <li><a onClick={() => handleNavClick('students')} className={currentPage === 'students' ? 'active' : ''}>Students</a></li>
            <li><a onClick={() => handleNavClick('awards')} className={currentPage === 'awards' ? 'active' : ''}>Awards</a></li>
            <li><a onClick={() => handleNavClick('insights')} className={currentPage === 'insights' ? 'active' : ''}>Insights</a></li>
            <li><a onClick={() => handleNavClick('events')} className={currentPage === 'events' ? 'active' : ''}>Events</a></li>
            <li><a onClick={() => handleNavClick('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Dr. Abdul Majid. Department of Computer and Information Sciences, PIEAS.</p>
          <p>Pakistan Institute of Engineering and Applied Sciences, Islamabad</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
