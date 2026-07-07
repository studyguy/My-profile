import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactFooter from './components/ContactFooter'
import ExperienceDetail from './pages/ExperienceDetail'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <ContactFooter />
            </>
          }
        />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}
