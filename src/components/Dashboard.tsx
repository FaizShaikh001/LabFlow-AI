import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, LineChart, Line
} from 'recharts';
import { AlertTriangle, CheckCircle2, Clock, Activity, Server, Users } from 'lucide-react';

const utilizationData = [
  { name: 'NovaSeq 1', utilization: 85, idle: 10, maintenance: 5 },
  { name: 'NovaSeq 2', utilization: 92, idle: 8, maintenance: 0 },
  { name: 'MiSeq A', utilization: 45, idle: 55, maintenance: 0 },
  { name: 'Hamilton 1', utilization: 78, idle: 22, maintenance: 0 },
  { name: 'Tecan Evo', utilization: 10, idle: 0, maintenance: 90 },
];

const loadForecastData = [
  { time: '08:00', routine: 120, stat: 10, capacity: 200 },
  { time: '10:00', routine: 180, stat: 60, capacity: 200 }, // The 50 STAT influx
  { time: '12:00', routine: 150, stat: 55, capacity: 200 },
  { time: '14:00', routine: 190, stat: 20, capacity: 200 },
  { time: '16:00', routine: 140, stat: 15, capacity: 200 },
  { time: '18:00', routine: 90, stat: 5, capacity: 200 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Lab Manager Dashboard</h1>
          <p className="text-slate-500">Real-time workflow optimization and forecasting</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200">
            <CheckCircle2 className="w-4 h-4" />
            System Optimal
          </div>
          <div className="text-sm text-slate-500">Last updated: Just now</div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">↓ 12% vs avg</span>
          </div>
          <div className="text-slate-500 text-sm font-medium mb-1">Avg TAT (WES)</div>
          <div className="text-2xl font-bold text-slate-900">42.5 hrs</div>
        </div>
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Server className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">↑ 8% vs avg</span>
          </div>
          <div className="text-slate-500 text-sm font-medium mb-1">Machine Utilization</div>
          <div className="text-2xl font-bold text-slate-900">76%</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">3 active</span>
          </div>
          <div className="text-slate-500 text-sm font-medium mb-1">STAT Samples</div>
          <div className="text-2xl font-bold text-slate-900">62</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-full">Shift 1</span>
          </div>
          <div className="text-slate-500 text-sm font-medium mb-1">Active Staff</div>
          <div className="text-2xl font-bold text-slate-900">14</div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-4">
        <div className="mt-0.5">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-amber-800 font-semibold mb-1">TAT Risk Alert: Monday Morning STAT Influx</h3>
          <p className="text-amber-700 text-sm mb-3">
            Anomaly detected: 50 STAT WES samples arrived at 8:00 AM. Routine processing will violate 48h SLA.
          </p>
          <div className="bg-white/60 p-3 rounded-lg border border-amber-100/50">
            <div className="text-sm font-medium text-slate-900 mb-2">AI Recommended Action:</div>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              <li>Re-route 50 STAT samples to Liquid Handler B (postpone maintenance).</li>
              <li>Pause extraction of 50 non-urgent carrier screening samples.</li>
              <li>Reconfigure 2:00 PM NovaSeq run to include STAT samples.</li>
            </ul>
            <div className="mt-3 flex gap-2">
              <button className="px-4 py-1.5 bg-amber-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-amber-700 transition-colors">
                Approve & Execute Plan
              </button>
              <button className="px-4 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-lg shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
                Modify Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Load Forecast */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Daily Load Forecast</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={loadForecastData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRoutine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorStat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Area type="monotone" dataKey="routine" name="Routine Samples" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorRoutine)" />
                <Area type="monotone" dataKey="stat" name="STAT Samples" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorStat)" />
                <Line type="step" dataKey="capacity" name="Max Capacity" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Machine Utilization */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Current Machine Utilization</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={utilizationData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 500}} width={80} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Bar dataKey="utilization" name="Active (%)" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="idle" name="Idle (%)" stackId="a" fill="#cbd5e1" radius={[0, 0, 0, 0]} />
                <Bar dataKey="maintenance" name="Maintenance (%)" stackId="a" fill="#f43f5e" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
