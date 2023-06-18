import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';


import Container from './components/Layout/Container';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass ="min-height">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/company" element={<Company />}/>
          <Route path="/newproject" element={<NewProject />}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
