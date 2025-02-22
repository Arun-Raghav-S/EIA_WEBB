import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issues with Vite & Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

function MapView() {
  // Center coordinates for our fake truffle farm
  const center = [45.0, 7.0];

  // Fake heat zones (simulate high‑probability truffle areas)
  const heatZones = [
    { id: 1, lat: 45.001, lng: 7.002, radius: 100 },
    { id: 2, lat: 44.998, lng: 7.005, radius: 80 },
    { id: 3, lat: 45.002, lng: 7.010, radius: 120 },
  ];

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>Main Truffle Zone</Popup>
      </Marker>
      {heatZones.map(zone => (
        <Circle
          key={zone.id}
          center={[zone.lat, zone.lng]}
          radius={zone.radius}
          pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.3 }}
        />
      ))}
    </MapContainer>
  );
}

export default MapView;
