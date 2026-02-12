import icon1 from '../../assets/1.png';
import icon2 from '../../assets/2.png';
import icon3 from '../../assets/3.png';
import icon4 from '../../assets/4.png';
import icon5 from '../../assets/5.png';
import icon6 from '../../assets/6.png';


const actions = [
  { label: 'Check Calendar', icon: icon6 },
  { label: 'Manage Cases', icon: icon1 },
  { label: 'Check Docs', icon: icon2 },
  { label: 'All Tools', icon: icon3 },
  { label: 'Raise Tickets', icon: icon4 },
  { label: 'Take Notes', icon: icon5 },
]

function QuickActionsRow() {
  return (
    <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-5   text-xs font-medium text-slate-800 shadow-sm hover:border-blue-300 hover:shadow-md"
        >
          <span className="flex items-center justify-center rounded-full">
            <img src={action.icon} alt={action.label} className="h-9 w-9" />
          </span>
          <span>{action.label}</span>
        </button>
      ))}
    </section>
  )
}

export default QuickActionsRow
