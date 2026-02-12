import dashboardIcon from '../../assets/Dashboard.png'
import cat11 from '../../assets/cat11.png'
import cat2 from '../../assets/cat2.png'
import cat3 from '../../assets/cat3.png'
import cat4 from '../../assets/cat4.png'
import cat5 from '../../assets/cat5.png'
import cat6 from '../../assets/cat6.png'
import cat7 from '../../assets/cat7.png'

function Sidebar() {
  const items = [
    { label: 'Dashboard', icon: dashboardIcon },
    
    { label: 'Category 2', icon: cat11 },
    { label: 'Category 3', icon: cat2 },
    { label: 'Category 4', icon: cat3 },
    { label: 'Category 5', icon: cat4 },
    { label: 'Category 6', icon: cat5 },
    { label: 'Category 7', icon: cat6 },
    { label: 'Category 8', icon: cat7 },
  ]

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-slate-950 rounded-br-2xl rounded-tr-2xl text-slate-100 flex-col ">
      <div className="px-6 pt-10  pl-20 flex items-center ">
        <img src="src/assets/logo.png" alt="Suitup Logo" className="w-18 h-11"/>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1 text-sm">
        {items.map((item, index) => {
          const isActive = index === 0
          return (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                  isActive ? 'bg-blue-500/80 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                <img src={item.icon} alt={item.label} className="h-4 w-4" />
              </span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="px-5 py-4 border-t border-slate-800 text-xs text-slate-400">
        © 2026 Suitup
      </div>
    </aside>
  )
}

export default Sidebar
