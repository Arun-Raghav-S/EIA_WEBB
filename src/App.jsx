import { useState } from 'react';
import Dashboard from './components/Dashboard';
import MobileAppInterface from './components/MobileAppInterface';

function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        <h1>TruffleTech MVP</h1>
        <nav>
          <button onClick={() => setView('dashboard')}>Dashboard</button>
          <button onClick={() => setView('mobile')}>Mobile App</button>
        </nav>
      </header>
      <main>
        {view === 'dashboard' ? <Dashboard /> : <MobileAppInterface />}
      </main>
    </div>
  );
}

export default App;
