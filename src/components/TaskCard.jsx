import { Link } from 'react-router-dom'

function TaskCard({ id, name, isCompleted, onToggleCompleted}) {
  return (
    <article className="border border-amber-50 rounded-xl p-4 flex flex-col gap-1.5 bg-amber-50 font-merriweather">
      <div className="flex items-center gap-3">
        <label className={`flex items-center justify-center ${isCompleted ? 'is-active' : ''}`}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggleCompleted(id)}
            className="flex items-center"
          />
        </label>

        <h3 className="text-amber-950 font-merriweather ">
          <Link to={`/task/${id}`}>{name}</Link>
        </h3>

      </div>

    </article>
  )
}


export default TaskCard
