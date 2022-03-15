 
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Info from './pages/Info';
import Nav from './pages/Nav';
import Dashboard from './pages/Dashboard';
//Child Parent Component.
import Parent from './pages/Parent';
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'
import UrlId from  './Components/UrlId'
//imporing for react router
import {BrowserRouter as Router,Routes,Navigate,Route,useNavigate,useLocation } from 'react-router-dom';


function App() {
  return (
    <>
       <Router>
       <Nav />
       <Routes>
       <Route path="/" element={<Info />} />
         <Route path="/About" element={<About />} />
         <Route path="/AboutUs" element={<Navigate replace={true} to="/About" />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="parent" element={<Parent />}>
           <Route path="child1" element={<Child1 />} >
             <Route path=':urlId' element={<UrlId />}/>
           </Route>
           <Route path="child2" element={<Child2 />}>
             <Route path=':urlId' element={<UrlId />}/> 
            </Route>
         </Route>

       </Routes>
     </Router>
     </>
  );
}

export default App;
