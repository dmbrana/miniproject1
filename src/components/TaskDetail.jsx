import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

async function fetchTask(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  const data = await response.json().catch(() => null) 
  if (!data) return null
  return {
    id: data.id,
    name: data.title,
    completed: data.completed,
    
  }
}

function TaskDetail() {
  const { id } = useParams() 

  const { data: task, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['task', id], 
    queryFn: () => fetchTask(id),
    staleTime: 60_000,
    retry: false,
  })

  return (
    <main className="flex flex-col  gap-4 p-10 text-amber-50 font-merriweather">
      <Link to="/" className="hover:underline">Back to Task List</Link>
      {isLoading && <p>Loading tasks...</p>}
      {isError && (
        <p role="alert">Something went wrong loading this task. Please try again.</p>
      )}
      
      {isSuccess && !task && <p>Task not found.</p>}
      {task && (
        <article className="border border-amber-50 rounded-xl p-4 bg-amber-50 font-merriweather text-amber-950 w-full flex flex-col items-start p-10 text-left">
          <h1 className="text-2xl font-bold">Task: {task.name}</h1>
          <p>Status: {task.completed ? "Completed" : "Pending"}</p>
        </article>
      )}
    </main>
  )
}

export default TaskDetail
