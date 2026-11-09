import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import TaskDetail from './components/TaskDetail.jsx'
import About from './components/About.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-orange-950)] dark:bg-orange-950">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
