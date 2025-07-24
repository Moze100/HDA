import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// You'll need to get your Mapbox access token from https://account.mapbox.com/
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

interface MapboxMapProps {
  className?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // HDA Company Limited coordinates in Mbeya, Tanzania
  // Approximate coordinates for Mbeya city center
  const lng = 33.4625; // Longitude for Mbeya
  const lat = -8.9094; // Latitude for Mbeya
  const zoom = 14;

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    
    if (!mapContainer.current) return;

    // Check if token is available
    if (!MAPBOX_TOKEN) {
      console.error('Mapbox access token is not configured. Please add VITE_MAPBOX_ACCESS_TOKEN to your .env file.');
      return;
    }
    // Set the access token
    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker for HDA Company Limited
    const marker = new mapboxgl.Marker({
      color: '#EAB308', // Yellow color matching the theme
      scale: 1.2
    })
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 10px; font-family: system-ui;">
              <h3 style="margin: 0 0 8px 0; color: #1e293b; font-weight: bold;">HDA Company Limited</h3>
              <p style="margin: 0 0 4px 0; color: #475569; font-size: 14px;">Street: Maendeleo</p>
              <p style="margin: 0 0 4px 0; color: #475569; font-size: 14px;">Ward: Iyunga</p>
              <p style="margin: 0 0 4px 0; color: #475569; font-size: 14px;">Jasma Cash & Carry building</p>
              <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">Mbeya, Tanzania</p>
              <p style="margin: 0; color: #059669; font-size: 14px; font-weight: 500;">📞 +255753392262</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Show popup by default
    marker.getPopup().addTo(map.current);

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-96 rounded-lg ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
};

export default MapboxMap;
