import { Handle, Position } from '@xyflow/react';

export default function FeederNode({ data }) {
  return (
    <div className="flex flex-col items-center">
      <Handle type="target" position={Position.Top} />

      <svg width="30" height="46" viewBox="-15 -23 30 46">
        {/* the meter circle */}
        <circle cx="0" cy="-14" r="6" stroke="#334155" strokeWidth="2" fill="white" />

        {/* the wire going down */}
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#334155" strokeWidth="2" />

        {/* the arrowhead, pointing down */}
        <path d="M -5 4 L 0 12 L 5 4" stroke="#334155" strokeWidth="2" fill="none" />
      </svg>

      <div className="text-xs font-semibold">{data.label}</div>
      {data.sub && <div className="text-[10px] text-slate-500">{data.sub}</div>}
    </div>
  );
}