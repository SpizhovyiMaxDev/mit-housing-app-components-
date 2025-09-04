import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import canadaGeoJson from "../../data/ca.json";
import "leaflet/dist/leaflet.css";

function CanadaMap() {
  const style = (feature: any) => ({
    fillColor: "#74c476",
    weight: 1,
    color: "black",
    fillOpacity: 0.7,
  });

  return (
    <MapContainer
      center={[56.1304, -106.3468]}
      zoom={4}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON data={canadaGeoJson as any} style={style} />
    </MapContainer>
  );
}

export default CanadaMap;
