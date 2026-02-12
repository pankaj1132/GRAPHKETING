import chat1 from '../../assets/chat1.png'
import chat2 from '../../assets/chat2.png'

const messages = [
  {
    id: 1,
    from: 'Anurag',
    preview:
      'Hi, Hope you are doing well, this is to update you that I have finished first installment of payment. Please proceed with the task as discussed.',
    toneColor: 'bg-sky-50 border-sky-100',
    icon: chat1,
  },
  {
    id: 2,
    from: 'Rahul',
    preview:
      'Hi, Hope you are doing well, this is to update you that I have finished first installment of payment. Please proceed with the task as discussed.',
    toneColor: 'bg-amber-50 border-amber-100',
    icon: chat2,
  },
]

function MessagesPanel() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <header className=" flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Message | Payment Update</h2>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200"
          >
            ◀
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            ▶
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-100"
          >
            ···
          </button>
        </div>
      </header>

      <div className="space-y-4 text-xs">
        {messages.map((msg, index) => (
          <article
            key={msg.id}
            className={`rounded-xl px-4 py-2 text-[11px] `}
          >
            <div className="flex items-center gap-2">
            
              <img src={msg.icon} alt={msg.from} className="h-4 w-4" />
              <p
                className="text-[11px] font-semibold"
              >
                Message from {msg.from}
              </p>
            </div>
            <p className={`mt-1 p-3 rounded-2xl text-[11px] leading-relaxed  ${msg.toneColor} text-slate-600`}>{msg.preview}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MessagesPanel
