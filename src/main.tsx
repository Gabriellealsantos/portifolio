import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Curriculum from './routes/PortifolioHome/Curriculum/index.tsx'
import Home from './routes/PortifolioHome/Home/index.tsx'
import Project from './routes/PortifolioHome/Project/index.tsx'
import PortifolioHome from './routes/PortifolioHome/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortifolioHome />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="curriculum" element={<Curriculum />} />
        <Route path="project" element={<Project/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
