<template>
  <div class="map-wrapper">
    <div ref="mapEl" class="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for Leaflet marker icons in webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const mapEl = ref(null)
let map = null

const markers = [
  { id: 1, name: "Ahmedabad, India", lat: 23.02579, lng: 72.58727 },
  { id: 2, name: "Delhi, India", lat: 28.65195, lng: 77.23149 },
  { id: 3, name: "Amsterdam, North Holland, Netherlands", lat: 52.37403, lng: 4.88969 },
  { id: 4, name: "Mumbai, Maharashtra, India, symphony IT park in chandivali", lat: 19.07283, lng: 72.88261 },

]
  
onMounted(() => {
  // Create map
  map = L.map(mapEl.value).setView([20, 0], 2)

  // Add OpenStreetMap tiles
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   maxZoom: 19
  // }).addTo(map)

  // Replace the tile layer with this for a clean light map:
// L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//   subdomains: 'abcd',
//   maxZoom: 20
// }).addTo(map)

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 18
  }).addTo(map)


  // Add markers with custom icon for better visibility
  const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  markers.forEach(m => {
    L.marker([m.lat, m.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`<b>${m.name}</b>`)
      .openPopup(); // Optional: open popup by default
  })
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
.map-wrapper {
  width: 100%;
  height: 500px;
  border-radius: 0.5rem;
  overflow: hidden;
}
.map {
  width: 100%;
  height: 100%;
}
</style>