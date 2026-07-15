import { Handle, Position } from '@xyflow/react';

export default function TransformerNode({ data }) {
  return (
    <div className="flex flex-row items-center">

      <div className = "relative">
      <Handle type="target" position={Position.Top} style={{ left: 15, top: 10 }} />

      <svg width="44" height="60" viewBox="-22 -30 44 60">
        {/* two overlapping circles = the standard transformer symbol */}
        <circle cx="0" cy="-8" r="12" stroke="#334155" strokeWidth="2" fill="white" />
        <circle cx="0" cy="8" r="12" stroke="#334155" strokeWidth="2" fill="white" />
      </svg>

      <div className="text-xs font-semibold">{data.label}</div>
      {data.sub && <div className="text-[10px] text-slate-500">{data.sub}</div>}

      <Handle type="source" position={Position.Bottom} style={{ left: 15, bottom: 25 }} />
    </div>
    </div>
  );
}