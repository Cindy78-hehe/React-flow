import { Handle, Position } from '@xyflow/react';

export default function CircuitBreakerNode({ data }) {
  return (
    <div className="flex flex-col items-center">
      {/* connection point on top, for a wire coming in */}
      <Handle type="target" position={Position.Top} />

      {/* the actual symbol: a square with an X inside, like a real breaker */}
      <svg width="36" height="36" viewBox="-18 -18 36 36">
        <rect x="-9" y="-9" width="18" height="18" stroke="#334155" strokeWidth="2" fill="white" />
        <line x1="-9" y1="-9" x2="9" y2="9" stroke="#334155" strokeWidth="2" />
        <line x1="9" y1="-9" x2="-9" y2="9" stroke="#334155" strokeWidth="2" />
      </svg>

      <div className="text-xs font-semibold">{data.label}</div>

      {/* connection point on bottom, for a wire going out */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}