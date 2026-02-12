

import Sidebar from './components/layout/Sidebar.jsx'
import Header from './components/layout/Header.jsx'
import StatsRow from './components/dashboard/StatsRow.jsx'
import QuickActionsRow from './components/dashboard/QuickActionsRow.jsx'
import TasksPanel from './components/dashboard/TasksPanel.jsx'
import CaseNotifications from './components/dashboard/CaseNotifications.jsx'
import ScheduleCard from './components/dashboard/ScheduleCard.jsx'
import MessagesPanel from './components/dashboard/MessagesPanel.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Header />

          <main className="flex-1 px-4 pb-6 pt-4 md:px-6 lg:px-8">
            <div className="space-y-5">
              <StatsRow />
              <QuickActionsRow />

              <div className="grid gap-5 xl:grid-cols-12">
                <div className="xl:col-span-7">
                  <TasksPanel />
                </div>
                <div className="flex flex-col gap-5 xl:col-span-5">
                  <div className='flex flex-col gap-5 xl:flex-row'>
                <div className="space-y-5 xl:col-span-3">
                  <CaseNotifications />
                </div>
                <div className="xl:col-span-2">
                  <ScheduleCard />
                </div>
                </div>
                <div className="xl:col-span-12">
                  <MessagesPanel />
                </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
