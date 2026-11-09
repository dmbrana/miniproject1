import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import TaskCard from './TaskCard.jsx'

const PUBLIC_API_URL = 'https://jsonplaceholder.typicode.com/todos'

const FORCE = 'slow'

function normaliseApiTask(apiTask) {
  return {
    id: apiTask.id,
    name: apiTask.title,
    completed: apiTask.completed

  }
}

async function fetchTasks() {
  if (FORCE === 'slow') await new Promise((resolve) => setTimeout(resolve, 3000))
  if (FORCE === 'error') throw new Error('Forced error')
  const response = await fetch(PUBLIC_API_URL)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const data = await response.json()
  return FORCE === 'empty' ? [] : data.map(normaliseApiTask)
}

function TaskList() {
  const [completed, setCompleted] = useState([])

  const { data: tasks = [], isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 60_000,
    retry: false, 
  })

  function toggleCompleted(id) {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  if (isLoading) return <p>Loading tasks...</p>
  if (isError) {
    return <p role="alert">Something went wrong loading tasks. Please try again.</p>
  }
  if (tasks.length === 0) return <p>No tasks yet.</p>

  return (
  
      
    <section className="w-full max-w-4xl mx-auto p-6 bg-red-900 dark:bg-red-900 rounded-xl shadow-sm font-merriweather">
      <div className="flex items-left justify-between border-b border-amber-50  pb-4 mb-6 bg-red-90">
        <p className="text-amber-50">Completed: <span className="text-amber-50 dark:text-amber-50">{completed.length}</span></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 bg-red-90">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            isCompleted={completed.includes(task.id)}
            onToggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </section>

  )
}

export default TaskList

