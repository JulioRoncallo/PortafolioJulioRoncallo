
import './styles/reset.css'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Experience from './views/Experience'
import Projects from './views/Projects'
import Contact from './views/Contact'
import Certificates from './views/Certificates';

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/certificates' element={<Certificates/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
