import tasksIcon from '../../assets/11.png'

import  revenueIcon from '../../assets/12.png'
import clientsIcon from '../../assets/13.png'
import casesIcon from '../../assets/solar_calendar-bold.png'
const stats = [
  {
    label: 'Active Cases',
    value: '42',
    change: '+12% from last month',
    trend: 'up',
    color: 'text-blue-600',
    badgeColor: 'bg-blue-50 text-blue-700',
    icon: casesIcon,
  },
  {
    label: 'Pending Tasks',
    value: '17',
    change: '4% from last week',
    trend: 'down',
    color: 'text-amber-600',
    badgeColor: 'bg-amber-50 text-amber-700',
    icon: tasksIcon,
  },
  {
    label: 'Revenue',
    value: '28,250',
    change: '+12% from last month',
    trend: 'up',
    color: 'text-emerald-600',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    icon: revenueIcon,
  },
  {
    label: 'Total Clients',
    value: '87',
    change: '+12% from last month',
    trend: 'up',
    color: 'text-violet-600',
    badgeColor: 'bg-violet-50 text-violet-700',
    icon: clientsIcon,
  },
]

function TrendIcon({ trend }) {
  if (trend === 'down') {
    return (
      <span className="mr-1 text-[11px] font-semibold text-red-500">↓</span>
    )
  }
  return (
    <span className="mr-1 text-[11px] font-semibold text-emerald-600">↑</span>
  )
}

function StatsRow() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <article
          key={item.label}
          className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${item.badgeColor.split(' ').at(0)}`}
            >
              <img src={item.icon} alt={item.label} className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              <div className="text-xs font-medium text-slate-500">{item.label}</div>
              <div className="text-xl font-semibold text-slate-900">{item.value}</div>
            </div>
          </div>
          <div className="flex items-center text-xs">
            <TrendIcon trend={item.trend} />
            <span className="font-medium text-emerald-600">{item.change}</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default StatsRow
