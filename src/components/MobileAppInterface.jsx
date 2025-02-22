
function MobileAppInterface() {
  // A simple simulation of a mobile UI for on-site truffle detection
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '400px',
        margin: '40px auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2>Truffle Identifier</h2>
      <p>
        <strong>Current Location:</strong> Zone A
      </p>
      <p>
        <strong>Nearby Hotspots:</strong> 3 detected
      </p>
      <button style={{ padding: '10px 20px', marginBottom: '10px' }}>Mark as Harvested</button>
      <div style={{ marginTop: '20px' }}>
        <h3>Harvest Data</h3>
        <ul>
          <li>Weight: 2.5 kg</li>
          <li>Quality: Premium</li>
          <li>Photo: [Image Placeholder]</li>
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button style={{ width: '100%', padding: '10px' }}>Navigate to Next Hotspot</button>
      </div>
    </div>
  );
}

export default MobileAppInterface;
