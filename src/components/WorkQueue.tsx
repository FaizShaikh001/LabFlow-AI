import React from 'react';
import { Play, Pause, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const queueData = [
  { id: 'B-8842', type: 'WES (STAT)', samples: 50, stage: 'Extraction', assignedTo: 'Sarah J.', status: 'urgent', sla: '42h remaining', action: 'Load on Hamilton 1' },
  { id: 'B-8841', type: 'Somatic Panel', samples: 24, stage: 'Library Prep', assignedTo: 'Mike T.', status: 'active', sla: '3 days', action: 'In Progress' },
  { id: 'B-8840', type: 'Carrier Screen', samples: 96, stage: 'Extraction', assignedTo: 'Unassigned', status: 'paused', sla: '6 days', action: 'Paused for STAT' },
  { id: 'B-8839', type: 'WGS', samples: 12, stage: 'Sequencing', assignedTo: 'Auto', status: 'active', sla: '5 days', action: 'NovaSeq 1 Running' },
  { id: 'B-8838', type: 'Microarray', samples: 48, stage: 'Sample Prep', assignedTo: 'Elena R.', status: 'pending', sla: '4 days', action: 'Start at 11:00' },
];

export function WorkQueue() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Technician Work Queue</h1>
          <p className="text-slate-500">AI-Prioritized tasks for current shift</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            Shift: 08:00 - 16:00
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-medium">
              <tr>
                <th className="px-6 py-4">Batch ID</th>
                <th className="px-6 py-4">Test Type</th>
                <th className="px-6 py-4">Stage</th>
                <th className="px-6 py-4">Assigned</th>
                <th className="px-6 py-4">SLA Status</th>
                <th className="px-6 py-4">Recommended Action</th>
                <th className="px-6 py-4 text-right">Controls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {queueData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {item.status === 'urgent' && <AlertCircle className="w-4 h-4 text-amber-500" />}
                      <span className={item.status === 'urgent' ? 'font-semibold text-amber-700' : 'text-slate-700'}>
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{item.samples} spls</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{item.stage}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                        {item.assignedTo !== 'Auto' && item.assignedTo !== 'Unassigned' ? item.assignedTo.charAt(0) : '-'}
                      </div>
                      <span className="text-slate-700">{item.assignedTo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      item.status === 'urgent' ? 'bg-amber-100 text-amber-800' :
                      'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.sla}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-900">{item.action}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {item.status === 'paused' ? (
                        <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="Resume">
                          <Play className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors" title="Pause">
                          <Pause className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" title="Complete Stage">
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
