import image23 from '../../assets/23.png';
import image24 from '../../assets/24.png';

const events = [
  {
    id: 1,
    time: '2:00 PM - 3:30 PM',
    title: 'Team Meeting',
    description: 'New-Trademark Filing | 3 Other team members',
    color: 'bg-blue-100 text-blue-600',
    icon: image23,
  },
  {
    id: 2,
    time: '5:00 PM - 6:30 PM',
    title: 'Submission of Assignment',
    description: 'New-Trademark Filing | 3 Other team members',
    color: 'bg-emerald-100 text-emerald-600',
    icon: image24,
  },
]

function ScheduleCard() {
  return (
    <section className=" border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">15 Dec, Monday</h2>
        <div className="flex gap-2 text-xs text-slate-400">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
          >
            ‹
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            ›
          </button>
        </div>
      </header>

      <div className="space-y-3 text-xs">
        {events.map((event) => (
          <article key={event.id} className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-800">{event.time}</p>
            <div className="flex items-start gap-2">
             <img src={event.icon} alt="" className='w-6 h-6 mt-1' />
              <div>
                <p className="text-[13px] font-semibold text-slate-900">{event.title}</p>
                <p className="text-[11px] text-slate-500">{event.description}</p>
              </div>
            </div>
          </article>
        ))}

        <button
          type="button"
          className="mt-2 text-[11px] font-semibold text-blue-600 hover:underline"
        >
          See More
        </button>
      </div>
    </section>
  )
}

export default ScheduleCard
