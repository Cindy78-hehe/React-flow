import { useCallback } from 'react';
import CircuitBreakerNode from './Nodes/CircuitBreakerNode';
import TransformerNode from './Nodes/TransformerNode';
import DisconnectNode from './Nodes/DisconnectNode';
import BusbarNode from './Nodes/BusbarNode';
import FeederNode from './Nodes/FeederNode';
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';
import { useState } from 'react';

const nodeTypes = {
  breaker: CircuitBreakerNode,
  transformer: TransformerNode,
  disconnected: DisconnectNode,
  busbar: BusbarNode,
  feeder: FeederNode,
};
const initialNodes = [
  { id: 'n1', type: 'breaker', position: { x: 0, y: 0 }, data: { label: 'CB-1' } },
  { id: 'n2', type: 'transformer', position: { x: 0, y: 150 }, data: { label: 'T-1' } },
  { id: 'n3', type: 'disconnected', position: { x: 0, y: 300 }, data: { label: 'DS-1' } },
  { id: 'n4', type: 'busbar', position: { x: 200, y: 150 }, data: { label: 'Busbar-1' } },
  { id: 'n5', type: 'feeder', position: { x: 200, y: 300 }, data: { label: 'Feeder-1' } },
];

const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2' },
  { id: 'n2-n3', source: 'n2', target: 'n3' },
  { id: 'n2-n4', source: 'n2', target: 'n4' },
];

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}