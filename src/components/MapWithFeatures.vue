<!-- <template>
  <div id="map" style="height: 400px"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([-33.8688, 151.2093], 13) // Example: Sydney

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  // Feature 1: Marker
  L.marker([-33.8688, 151.2093]).addTo(map).bindPopup('Sydney City Center').openPopup()

  // Feature 2: Circle
  L.circle([-33.87, 151.22], {
    color: 'blue',
    fillColor: '#3f51b5',
    fillOpacity: 0.4,
    radius: 500,
  })
    .addTo(map)
    .bindPopup('500m Radius')
})
</script>

<style scoped>
#map {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
}
</style> -->

<template>
  <div class="text-center mt-5">
    <h1 class="text-2xl font-bold">Interactive Map with Features</h1>
    <p class="mt-2 text-gray-600">Click anywhere on the map to drop a marker.</p>
  </div>
  <div
    id="map"
    class="w-full h-[500px] rounded shadow-lg mx-auto mt-4"
    style="width: 85%; max-width: 1000px"
  ></div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// 🛠 Fix broken marker icons when deployed
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

onMounted(() => {
  const map = L.map('map').setView([-33.8688, 151.2093], 5) // Defaults to Sydney

  // Load map tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  // Sydney CBD markers
  const sydneyMarkers = [
    { name: 'Accessible Clinic - George St', coords: [-33.8731, 151.2065] },
    { name: 'Sydney Hearing Center', coords: [-33.8708, 151.2093] },
    { name: 'Vision Support Sydney', coords: [-33.8675, 151.207] },
  ]

  // Melbourne CBD markers
  const melbourneMarkers = [
    { name: 'Melbourne Mobility Centre', coords: [-37.8136, 144.9631] },
    { name: 'Accessible Tech Support', coords: [-37.8152, 144.9655] },
    { name: 'Hearing Help Hub', coords: [-37.811, 144.97] },
  ]

  // Add all accessibility service markers
  const allMarkers = [...sydneyMarkers, ...melbourneMarkers]
  allMarkers.forEach((location) => {
    L.marker(location.coords).addTo(map).bindPopup(location.name)
  })

  // Try to locate the user's position
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude
        const userLng = position.coords.longitude
        const userCoords = [userLat, userLng]

        // Set map view to user's location, zoomed out to see possible service markers
        map.setView(userCoords, 11)

        // Add user location marker
        L.marker(userCoords).addTo(map).bindPopup('Current location').openPopup()
      },
      () => {
        console.warn('Geolocation permission denied or unavailable.')
      },
    )
  } else {
    console.warn('Geolocation not supported by this browser.')
  }
})
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
