import calendarIcon from '../../assets/1.png'

const notifications = [
  {
    id: 1,
    title: 'New Task Assigned',
    client: 'Client Name',
    date: '12 June 2024',
    due: 'Sat, 25 June',
  },
  {
    id: 2,
    title: 'New Task Assigned',
    client: 'Client Name',
    date: '12 June 2024',
    due: 'Sat, 25 June',
  },
]

function CaseNotifications() {
  return (
    <section className=" border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Case Notifications</h2>
       
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-slate-500 hover:bg-slate-100"
        >
          ···
        </button>
        
      </header>
       

      <div className="space-y-4 text-xs">
        {notifications.map((item) => (
          <article
            key={item.id}
            className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <div className="mb-1 flex items-start justify-between">
              <div>
                <h3 className="text-[13px] font-semibold text-blue-600">{item.title}</h3>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {item.client} | Assigned at: <span className="font-medium text-slate-600">{item.date}</span>
                </p>
              </div>
              <button
                type="button"
                className="ml-2 mt-1 text-lg leading-none text-slate-400 hover:text-slate-600"
              >
                ···
              </button>
            </div>
            <p className="mt-1 flex items-center gap-2 text-[11px] text-slate-600">
              <span className="inline-flex h-5 w-5 items-center justify-center ">
                <img src= "src/assets/bx_calendar.png"alt="calendar" className="h-3 w-3" />
              </span>
              {item.due}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CaseNotifications
