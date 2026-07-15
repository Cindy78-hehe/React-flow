import { Handle, Position } from '@xyflow/react';

export default function BusbarNode({ data }) {
  return (
    <div className="flex flex-row items-center">
      <div className="text-[11px] font-semibold text-slate-600 mt-1">{data.label}

      </div>
      <div className="relative">
        {/* multiple connection points, since several breakers hang off one busbar */}
      <Handle type="target" position={Position.Left} id="left" style={{ top: 10 }}  />
      <Handle type="source" position={Position.Right} id="right"  style={{ top: 10 }} />
      <svg width="160" height="60" viewBox="-80 -8 160 60">
         <circle cx="-76" cy="0" r="4" fill="#334155" />
        <line x1="-76" y1="0" x2="76" y2="0" stroke="#334155" strokeWidth="4" />
        <circle cx="76" cy="0" r="4" fill="#334155" />
        <line x1="0" y1="0" x2="0" y2="50" stroke="#334155" strokeWidth="2" />
        
         <circle cx="0" cy="50" r="4" fill="#334155" />
      </svg>

      

      
      
      
    </div>
    </div>
  );
}