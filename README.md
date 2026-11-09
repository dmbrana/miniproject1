## Task Tracking App

This is a simple task tracking app with a holiday theme to help manage tasks in a fun, inspiring way. 

## Route 1: Tasks (Task List Dashboard)
This route shows a list of tasks.
<img width="1742" height="848" alt="Image" src="https://github.com/user-attachments/assets/b46161bb-0e6a-4a70-a65d-b30825139416" />

## Route 2: Task Details
This route shows the details of the tasks that you clicked on.
<img width="1767" height="858" alt="Image" src="https://github.com/user-attachments/assets/2f9a3fb6-ba6e-41f8-bcc0-5e5e16ee0b6b" />

## Route 3: About
This route shows what the app is about.
<img width="1763" height="854" alt="Image" src="https://github.com/user-attachments/assets/197bb96e-02b7-4675-a1ba-b0cd8b9ef56e" />

## Public API Used
For the tasks listed in the dashboard, the information was taken from: https://jsonplaceholder.typicode.com/todos

## How TanStack Query is used

```
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
```

## Technology Stack

Front End: React, TanStack Query, Tailwind CSS
State Management & Fetching: TanStack Query (React Query)
Tooling: Vite, Eslint

## Running it

```
npm install
npm run dev
```
