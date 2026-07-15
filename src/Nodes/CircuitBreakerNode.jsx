import { Handle, Position } from '@xyflow/react';

export default function CircuitBreakerNode({ data }) {
  return (
   <div className="flex flex-row items-center gap-2">

  {/* Label */}
  <div className="text-xs font-semibold whitespace-nowrap">
    {data.label}
  </div>

  {/* Symbol container */}
  <div className="relative">
    <Handle type="target" position={Position.Top} style = {{ top: 5 }}/>
     <Handle type="source" position={Position.Bottom} style = {{ bottom: 5 }}/>
    

    <svg width="36" height="36" viewBox="-18 -18 36 36">
      <rect
        x="-9"
        y="-9"
        width="18"
        height="18"
        stroke="#334155"
        strokeWidth="2"
        fill="white"
      />
      <line x1="-9" y1="-9" x2="9" y2="9" stroke="#334155" strokeWidth="2" />
      <line x1="9" y1="-9" x2="-9" y2="9" stroke="#334155" strokeWidth="2" />
    </svg>

</div>
     
    </div>
  );
}