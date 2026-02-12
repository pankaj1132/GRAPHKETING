const tasks = [
  {
    id: 1,
    initials: 'JP',
    name: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    due: 'Nov 15, 2025',
    status: 'Corporate',
    statusColor: 'bg-sky-100 text-sky-700',
  },
  {
    id: 2,
    initials: 'JP',
    name: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    due: 'Nov 15, 2025',
    status: 'Personal Injury',
    statusColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 3,
    initials: 'JP',
    name: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    due: 'Nov 15, 2025',
    status: 'Estate Planning',
    statusColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 4,
    initials: 'JP',
    name: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    due: 'Nov 15, 2025',
    status: 'Estate Planning',
    statusColor: 'bg-violet-100 text-violet-700',
  },
  {
    id: 5,
    initials: 'JP',
    name: 'Jefferson Partners LLC v. Astro Corp',
    description: 'Contract dispute regarding software licensing agreement',
    assignedTo: 'Sarah Johnson',
    due: 'Nov 15, 2025',
    status: 'Corporate',
    statusColor: 'bg-sky-100 text-sky-700',
  },
]

function TasksPanel() {
  return (
    <section className="rounded-2xl border border-sky-200 bg-white px-5 py-4 shadow-sm">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Your Tasks</h2>
        <button
          type="button"
          className="text-[11px] font-semibold text-blue-600 hover:underline"
        >
          View All Cases
        </button>
      </header>

      <div className="space-y-3">
        {tasks.map((task) => (
          <article
            key={task.id}
            className="flex items-start justify-between rounded-xl px-1 py-2"
          >
            <div className="flex flex-1 items-start gap-3">
              <div
                className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${task.statusColor}`}
              >
                {task.initials}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">{task.name}</h3>
                <p className="text-[11px] text-slate-500">{task.description}</p>
                <p className="text-[11px] text-slate-500">
                  Assigned to:{' '}
                  <span className="font-semibold text-slate-900">{task.assignedTo}</span>
                  {'  '}·{'  '}Due:{' '}
                  <span className="font-semibold text-slate-900">{task.due}</span>
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col items-end gap-2 text-right">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium ${task.statusColor}`}
              >
                {task.status}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 text-right">
        <button
          type="button"
          className="text-[11px] font-semibold text-blue-600 hover:underline"
        >
          View All Cases
        </button>
      </div>
    </section>
  )
}

export default TasksPanel
