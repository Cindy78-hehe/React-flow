const PALETTE_ITEMS = [
  { type: 'breaker', label: 'Circuit Breaker' },
  { type: 'transformer', label: 'Transformer' },
  { type: 'disconnect', label: 'Disconnect Switch' },
  { type: 'busbar', label: 'Busbar' },
  { type: 'feeder', label: 'Feeder' },
];

export default function Sidebar() {
  function onDragStart(event, nodeType) {
    event.dataTransfer.setData('text/plain', nodeType);
  }

  return (
    <aside style={{ width: 180, borderRight: '1px solid #ddd', padding: 12 }}>
      {PALETTE_ITEMS.map((item) => (
        <div
          key={item.type}
          draggable
          onDragStart={(event) => onDragStart(event, item.type)}
          style={{
            border: '1px solid #ccc',
            borderRadius: 6,
            padding: '8px 10px',
            marginBottom: 8,
            cursor: 'grab',
            background: 'white',
          }}
        >
          {item.label}
        </div>
      ))}
    </aside>
  );
}