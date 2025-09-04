import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import canadaGeoJson from "../../data/ca.json";
import "leaflet/dist/leaflet.css";

function CanadaMap() {
  const defaultStyles = {
    fillColor: "#74c476",
    weight: 1,
    color: "black",
    fillOpacity: 0.7,
  };

  const hoverStyles = {
    fillColor: "#D16D5A",
    weight: 1,
    color: "black",
    fillOpacity: 0.7,
  };

  function handleEachFeature(feature: any, layer: any) {
    layer.setStyle(defaultStyles);
    layer.on("mouseover", () => {
      layer.setStyle(hoverStyles);
      layer.bringToFront();
      console.log(feature.properties.name);

      /*
          "type": "Feature", 
      "properties": {
        "source": "https://simplemaps.com", 
        "id": "CANL", 
        "name": "Newfoundland and Labrador"
      }, 
      "id": 10
      */
    });
    layer.on("mouseout", () => layer.setStyle(defaultStyles));
  }

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
      <GeoJSON data={canadaGeoJson as any} onEachFeature={handleEachFeature} />
    </MapContainer>
  );
}

export default CanadaMap;
