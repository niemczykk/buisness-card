import './App.css';
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Welcome from './components/Welcome'
import Hobbies from './components/Hobbies'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Hobbies />
      <Experience />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
