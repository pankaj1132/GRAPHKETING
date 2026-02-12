import profile from '../../assets/profile.png'
import setting from '../../assets/setting.png'
import clock from '../../assets/clock.png'
import stop from '../../assets/stop-start.png'

import notification from '../../assets/notification.png'
function Header() {
  return (
    <header className="flex items-center justify-between gap-4 bg-[#F3F4F6] px-6 py-4">
      <div className="space-y-1">
        <h1 className=" opacity-100 font-bold text-[20px] leading-[100%] tracking-normal font-['Roboto_Flex'] text-[rgba(0,0,0,1)]
">Dashboard</h1>
        <p className="text-xs text-slate-500">
         Hi, Praneesh. What are your plans for today?
        </p>
      </div>

      <div className="flex flex-1 max-w-xl items-center">
        <div className="flex items-center gap-1 rounded-xl bg-white px-4 py-3 text-[10px] font-medium text-white shadow-sm w-full">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.167 3.333a5.833 5.833 0 104.105 9.938l2.929 2.93a.833.833 0 001.179-1.179l-2.93-2.929A5.833 5.833 0 009.167 3.333zM5 9.167a4.167 4.167 0 118.333 0A4.167 4.167 0 015 9.167z"
              fill="currentColor"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs">
        <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-1.5 text-[10px] font-medium text-white shadow-sm ">
          <img src={clock} alt="" className="h-6" />
          <div className="space-y-0">
            <div className="text-[10px] text-slate-500">Time Tracker</div>
            <div className="text-sm font-semibold text-blue-700">08:40:10</div>
          </div>
          
        </div>
        <div className=" rounded-xl bg-white px-4 py-3 text-[13px] font-medium text-white shadow-sm ">
            <img src={stop} alt="stop-start" className="h-6 " />
          </div>

        <button
          type="button"
          className="rounded-xl bg-[#E0E0E0] px-4 py-3.5 text-[14px] font-medium text-black shadow-sm "
        >
         + Invite Team Member
        </button>

        <button
          type="button"
          className="rounded-xl bg-blue-700 px-4 py-3.5 text-[13px] font-medium text-white shadow-sm "
        >
          + Register New Client
        </button>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
        >
          <img src={notification} alt="notification" 
          className="h-7 w-6 p-1"/>
        </button>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
        >
        <img src={setting} alt="setting" className="h-7 w-6 p-1" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full ">
          <img
            src={profile}
            alt="User Avatar"
            
          />
        </div>
      </div>
    </header>
  )
}

export default Header
