import React from 'react';

export function ConceptDoc() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">AI-Driven Laboratory Workflow Optimization System</h1>
      <p className="text-slate-500 mb-8 text-lg border-b pb-6">Technical Concept Document for Genetic Testing Laboratory</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          SYSTEM GOALS & SCOPE
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Optimize scheduling</strong> across all lab stages: sample receiving, extraction, library prep, sequencing, bioinformatics, variant interpretation, and reporting.</li>
          <li><strong>Minimize TAT</strong> (Turnaround Time) while maximizing equipment utilization and staff productivity.</li>
          <li><strong>Handle variable test types:</strong> germline WES/WGS, somatic panels, carrier screening, and chromosomal microarray.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          DATA SOURCES & FEATURE ENGINEERING
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Historical LIMS data:</strong> test type, volume, TAT achieved, failed runs, re-runs.</li>
          <li><strong>Equipment data:</strong> instrument logs, maintenance schedules, uptime/downtime history.</li>
          <li><strong>Staff data:</strong> shift schedules, operator skill mapping (anonymized).</li>
          <li><strong>External factors:</strong> sample courier delivery patterns, urgent/STAT order frequency.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
          CORE AI/ML MODELS
        </h2>
        <div className="space-y-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
            <h3 className="font-medium text-slate-900 mb-2">a. TAT Prediction Model</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li><strong>Input:</strong> test type, sample count, current lab load, equipment availability.</li>
              <li><strong>Output:</strong> predicted TAT per sample/batch.</li>
              <li><strong>Algorithm:</strong> Gradient Boosting or LSTM for time-series lab load patterns.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
            <h3 className="font-medium text-slate-900 mb-2">b. Machine Utilization Forecasting</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Predict upcoming bottlenecks (e.g., sequencer queue congestion).</li>
              <li>Suggest optimal batch grouping to reduce idle time.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
            <h3 className="font-medium text-slate-900 mb-2">c. Intelligent Scheduling Engine</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Constraint-based optimization (OR-Tools or reinforcement learning).</li>
              <li>Prioritize STAT samples while minimizing disruption to routine batch workflow.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
            <h3 className="font-medium text-slate-900 mb-2">d. Anomaly Detection</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Flag deviations from predicted timelines in real time.</li>
              <li>Identify recurring bottleneck patterns (e.g., Monday morning extraction backlog).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
          DASHBOARD & DECISION SUPPORT INTERFACE
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Lab manager view:</strong> daily load forecast, machine utilization heatmap, TAT risk alerts.</li>
          <li><strong>Technician view:</strong> prioritized work queue, next recommended action.</li>
          <li><strong>Report-level view:</strong> predicted report-ready time per patient.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
          INTEGRATION REQUIREMENTS
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>LIMS integration:</strong> (e.g., SoftLab, Orchard, custom LIMS) via HL7/FHIR or REST API.</li>
          <li><strong>Instrument API/data feeds:</strong> from sequencers (e.g., Illumina BaseSpace), liquid handlers (e.g., Hamilton, Tecan), extraction robots.</li>
          <li><strong>Hospital/clinic order management system:</strong> for incoming test request data.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
          EXPECTED OUTCOMES & KPIs
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-emerald-100 bg-emerald-50 p-4 rounded-xl">
            <div className="text-emerald-700 font-semibold text-lg mb-1">↓ 25%</div>
            <div className="text-sm text-emerald-900">Target reduction in average TAT</div>
          </div>
          <div className="border border-emerald-100 bg-emerald-50 p-4 rounded-xl">
            <div className="text-emerald-700 font-semibold text-lg mb-1">↑ 15%</div>
            <div className="text-sm text-emerald-900">Target improvement in machine utilization rate</div>
          </div>
          <div className="border border-emerald-100 bg-emerald-50 p-4 rounded-xl">
            <div className="text-emerald-700 font-semibold text-lg mb-1">↓ 12 hrs</div>
            <div className="text-sm text-emerald-900">Reduction in manual scheduling effort (per week)</div>
          </div>
          <div className="border border-emerald-100 bg-emerald-50 p-4 rounded-xl">
            <div className="text-emerald-700 font-semibold text-lg mb-1">↓ 40%</div>
            <div className="text-sm text-emerald-900">Decrease in re-run rate due to poor batch planning</div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
          IMPLEMENTATION PLAN
        </h2>
        <div className="relative border-l-2 border-slate-200 ml-3 pl-6 space-y-6">
          <div>
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] mt-1.5"></div>
            <h3 className="font-semibold text-slate-900">Phase 1 (Months 1-2): Data audit and pipeline setup</h3>
            <p className="text-sm text-slate-600 mt-1">Establish secure connections to LIMS and instrument APIs. Cleanse historical data.</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] mt-1.5"></div>
            <h3 className="font-semibold text-slate-900">Phase 2 (Months 3-4): Model training on historical data</h3>
            <p className="text-sm text-slate-600 mt-1">Train TAT prediction and machine utilization models. Validate against holdout sets.</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] mt-1.5"></div>
            <h3 className="font-semibold text-slate-900">Phase 3 (Month 5): Shadow mode deployment</h3>
            <p className="text-sm text-slate-600 mt-1">AI suggests schedules and predicts TATs alongside current manual processes. Humans evaluate AI decisions without executing them.</p>
          </div>
          <div>
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] mt-1.5"></div>
            <h3 className="font-semibold text-slate-900">Phase 4 (Month 6+): Active optimization with human oversight</h3>
            <p className="text-sm text-slate-600 mt-1">System actively routes samples and creates batches. Lab managers review and approve/override daily plans.</p>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
          WORKED EXAMPLE: 50 Urgent WES Samples on a Monday Morning
        </h2>
        <p className="text-indigo-800 mb-4"><strong>Scenario:</strong> At 8:00 AM on Monday, a courier delivers 50 STAT Whole Exome Sequencing (WES) samples from the NICU, alongside the routine load of 200 standard samples.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
            <h4 className="font-semibold text-indigo-900 mb-1">1. Anomaly Detection & Ingestion</h4>
            <p className="text-sm text-slate-700">The LIMS logs the 50 STAT samples. The Anomaly Detection model instantly flags a +400% spike in STAT volume compared to the Monday morning baseline. An alert is sent to the Lab Manager Dashboard.</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
            <h4 className="font-semibold text-indigo-900 mb-1">2. TAT Prediction Model</h4>
            <p className="text-sm text-slate-700">The model calculates that processing these 50 samples through the standard queue will result in a 72-hour TAT, violating the 48-hour NICU SLA. It predicts that extraction and library prep will be the primary bottlenecks.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
            <h4 className="font-semibold text-indigo-900 mb-1">3. Machine Utilization Forecasting</h4>
            <p className="text-sm text-slate-700">The forecaster checks the NovaSeq 6000 schedule. It identifies a routine 200-sample run scheduled for 2:00 PM. It notes that Liquid Handler B is currently idle but scheduled for maintenance at 10:00 AM.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
            <h4 className="font-semibold text-indigo-900 mb-1">4. Intelligent Scheduling Engine (The Solution)</h4>
            <p className="text-sm text-slate-700">The OR-Tools engine generates a revised schedule in seconds:</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
              <li><strong>Action 1:</strong> Re-routes the 50 STAT samples immediately to Liquid Handler B, postponing its maintenance to Tuesday (maintenance constraint allows a 24h window).</li>
              <li><strong>Action 2:</strong> Pauses extraction of 50 non-urgent carrier screening samples to free up Technician Sarah (who has WES certification).</li>
              <li><strong>Action 3:</strong> Reconfigures the 2:00 PM NovaSeq run to include the 50 STAT samples + 150 routine samples, pushing 50 routine samples to the overnight run.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
            <h4 className="font-semibold text-indigo-900 mb-1">5. Dashboard & Decision Support</h4>
            <p className="text-sm text-slate-700">The Lab Manager sees the proposed schedule on the dashboard with a "Green" SLA compliance indicator. They click "Approve." Technician Sarah's tablet updates her Work Queue, instructing her to load the 50 STAT samples onto Liquid Handler B immediately.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
