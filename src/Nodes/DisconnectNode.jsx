import { Handle, Position } from '@xyflow/react';

export default function DisconnectNode({ data }) {
  return (
    <div className=" flex flex-row items-center">

      {/* Label */}
      <div className="absolute -top-6 text-xs font-semibold whitespace-nowrap">
        {data.label}
      </div>

      {/* Top Handle */}
      <div className = "relative">
      <Handle type="target" position={Position.Bottom} style = {{  bottom: 15, left: 20}} />

      {/* Disconnect Switch Symbol */}
      <svg width="30" height="50" viewBox="-15 -25 30 50">
        {/* Top hinge */}
        <circle cx="0" cy="-15" r="4" fill="#334155" />

        {/* Open blade */}
        <line x1="0" y1="-13" x2="10" y2="10" stroke="#334155" strokeWidth="2"
        />

        {/* Bottom hinge */}
        <circle cx="10" cy="10" r="4" fill="#334155" />
      </svg>

      

    </div>
    </div>
  );
}