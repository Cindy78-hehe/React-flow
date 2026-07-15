import { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';

import Sidebar from './Sidebar';
import CircuitBreakerNode from './nodes/CircuitBreakerNode';
import TransformerNode from './nodes/TransformerNode';
import DisconnectNode from './nodes/DisconnectNode';
import BusbarNode from './nodes/BusbarNode';
import FeederNode from './nodes/FeederNode';

const nodeTypes = {
  breaker: CircuitBreakerNode,
  transformer: TransformerNode,
  disconnect: DisconnectNode,
  busbar: BusbarNode,
  feeder: FeederNode,
};

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const wrapperRef = useRef(null);

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

 
  function onDragOver(event) {
    event.preventDefault(); // <-- same line as before: "yes, dropping is allowed here"
  }

  function onDrop(event) {
    event.preventDefault();

    const type = event.dataTransfer.getData('text/plain'); // <-- unpack the bag
    if (!type || !reactFlowInstance) return;

    const bounds = wrapperRef.current.getBoundingClientRect();
    const position = reactFlowInstance.screenToFlowPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });

    const newNode = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: { label: type.toUpperCase() },
    };

    setNodes((current) => [...current, newNode]);
  }

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Sidebar />

      <div
        ref={wrapperRef}
        style={{ flex: 1 }}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={{
    style:{ strokeWidth: 3, stroke: '#1d293a' },
  }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}