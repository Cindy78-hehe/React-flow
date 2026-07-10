import { Handle, Position } from '@xyflow/react';

export default function BusbarNode({ data }) {
  return (
    <div className="flex flex-col items-center">
      <svg width="160" height="16" viewBox="-80 -8 160 16">
        <line x1="-76" y1="0" x2="76" y2="0" stroke="#334155" strokeWidth="4" />
      </svg>

      <div className="text-[11px] font-semibold text-slate-600 mt-1">{data.label}</div>

      {/* multiple connection points, since several breakers hang off one busbar */}
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
}