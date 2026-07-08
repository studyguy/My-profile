import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContactFooter from './components/ContactFooter'

const Aurora = lazy(() => import('./components/Aurora'))
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-6 h-6 border-2 border-teal-400/30 border-t-teal-400 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative">
      {/* Aurora Background — lazy loaded WebGL */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Suspense fallback={null}>
          <Aurora
            colorStops={['#2dd4bf', '#a78bfa', '#0d9488']}
            blend={0.4}
            amplitude={0.8}
            speed={0.3}
          />
        </Suspense>
      </div>

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
        <Route
          path="/experience/:slug"
          element={
            <Suspense fallback={<Loading />}>
              <ExperienceDetail />
            </Suspense>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <Suspense fallback={<Loading />}>
              <ProjectDetail />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}
