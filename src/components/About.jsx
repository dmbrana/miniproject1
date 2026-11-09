import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="flex flex-col  gap-4 p-10 text-amber-50 font-merriweather">
      <h1 className="p-10 text-2xl font-bold">ABOUT</h1>
      <p className="text-left">A Task Tracking App</p>
      <p className="text-left">Manage your daily tasks using this holiday themed task tracking app.</p>
      <Link to="/" className="p-10 hover:underline">Back to Task List</Link>
    </main>
  )
}

export default About
