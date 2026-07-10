import { useCallback } from 'react';
import CircuitBreakerNode from './Nodes/CircuitBreakerNode';
import TransformerNode from './Nodes/TransformerNode';
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
};
const initialNodes = [
  { id: 'n1', type: 'breaker', position: { x: 0, y: 0 }, data: { label: 'CB-1' } },
  { id: 'n2', type: 'transformer', position: { x: 0, y: 150 }, data: { label: 'T-1' } },
];

const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2' },
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