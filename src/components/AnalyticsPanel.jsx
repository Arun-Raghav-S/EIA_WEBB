import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function AnalyticsPanel() {
  // Fake yield trends data for a line chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Yield (kg)',
        data: [20, 35, 40, 30, 50, 45],
        borderColor: 'blue',
        backgroundColor: 'rgba(173, 216, 230, 0.5)',
        fill: true,
      },
    ],
  };

  // Fake environmental sensor data for a bar chart
  const barData = {
    labels: ['Soil pH', 'Moisture (%)', 'Temperature (°C)'],
    datasets: [
      {
        label: 'Sensor Data',
        data: [6.5, 30, 22],
        backgroundColor: ['green', 'orange', 'red'],
      },
    ],
  };

  return (
    <div>
      <h3>Yield Trends</h3>
      <Line data={lineData} />
      <h3 style={{ marginTop: '20px' }}>Environmental Sensor Data</h3>
      <Bar data={barData} />
    </div>
  );
}

export default AnalyticsPanel;
