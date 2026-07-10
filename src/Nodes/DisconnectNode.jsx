import { Handle, Position } from '@xyflow/react';

export default function DisconnectNode({ data }) {
  return (
    <div className="flex flex-col items-center">
      <Handle type="target" position={Position.Top} />

      <svg width="30" height="50" viewBox="-15 -25 30 50">
        {/* top hinge point */}
        <circle cx="0" cy="-15" r="2.5" fill="#334155" />

        {/* the blade — swings diagonally, showing the switch as OPEN */}
        <line x1="0" y1="-13" x2="10" y2="10" stroke="#334155" strokeWidth="2" />

        {/* bottom hinge point */}
        <circle cx="0" cy="15" r="2.5" fill="#334155" />
      </svg>

      <div className="text-xs font-semibold">{data.label}</div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}