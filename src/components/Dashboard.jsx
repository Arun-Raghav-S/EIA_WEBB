import MapView from './Mapview';
import AnalyticsPanel from './AnalyticsPanel';
import TaskManagement from './TaskManagement';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <section style={{ marginBottom: '20px' }}>
        <h2>Main Map View</h2>
        <MapView />
      </section>
      <section style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2>Analytics Panel</h2>
          <AnalyticsPanel />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Task Management</h2>
          <TaskManagement />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
