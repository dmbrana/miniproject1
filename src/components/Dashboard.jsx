import { Link } from 'react-router-dom'
import TaskList from './TaskList.jsx'

function Dashboard() {
  return (
  <main className="max-w-240 text-amber-50 text-left ">
   
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-amber-50 p-4">
      <div>
        <h1 className="text-3xl font-bodoni">Task List Dashboard</h1>
        <p className="text-sm opacity-80 font-merriweather">A simple task tracking app for your daily needs</p>
      </div>

      <nav className="flex gap-2">
        <Link to="/" className="hover:underline font-merriweather">Tasks</Link> 
        <span>|</span> 
        <Link to="/about" className="hover:underline font-merriweather">About</Link>
      </nav>
    </header>
    <TaskList />
  </main> 
);


}

export default Dashboard
