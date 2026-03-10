/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { WorkQueue } from './components/WorkQueue';
import { ConceptDoc } from './components/ConceptDoc';
import { LayoutDashboard, ListTodo, FileText, FlaskConical } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'queue' | 'doc'>('doc');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <FlaskConical className="w-5 h-5" />
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">LabFlow AI</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => setActiveTab('doc')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors",
              activeTab === 'doc' 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <FileText className="w-5 h-5" />
            System Concept
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors",
              activeTab === 'dashboard' 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <LayoutDashboard className="w-5 h-5" />
            Manager Dashboard
          </button>
          <button
            onClick={() => setActiveTab('queue')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors",
              activeTab === 'queue' 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <ListTodo className="w-5 h-5" />
            Technician Queue
          </button>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-900">Dr. Jane Doe</span>
              <span className="text-xs text-slate-500">Lab Director</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'queue' && <WorkQueue />}
          {activeTab === 'doc' && <ConceptDoc />}
        </div>
      </div>
    </div>
  );
}

