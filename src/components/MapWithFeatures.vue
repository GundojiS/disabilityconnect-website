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
  <div class="text-center mt-3">
    <h1 class="text-2xl font-bold">Find communities near you</h1>
    <p class="mt-2 text-gray-600">Zoom out to find trusted communities across Australia</p>
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
    { name: 'Parramatta Inclusion Hub', coords: [-33.8178, 151.0035] },
    { name: 'Western Sydney Mobility Centre', coords: [-33.8144, 150.9981] },
    { name: 'Northern Beaches Access Hub', coords: [-33.7526, 151.2844] },
    { name: 'South Sydney Assistive Tech Centre', coords: [-33.9665, 151.092] },
  ]

  // Melbourne CBD markers
  const melbourneMarkers = [
    { name: 'Melbourne Mobility Centre', coords: [-37.8136, 144.9631] },
    { name: 'Accessible Tech Support', coords: [-37.8152, 144.9655] },
    { name: 'Hearing Help Hub', coords: [-37.811, 144.97] },
    { name: 'Dandenong Access Centre', coords: [-37.9877, 145.2152] },
    { name: 'Northern Melbourne Support Hub', coords: [-37.6879, 145.023] },
    { name: 'Geelong Inclusive Services', coords: [-38.1499, 144.3617] },
    { name: 'Eastern Suburbs Community Access', coords: [-37.8185, 145.1521] },
  ]

  // Brisbane CBD markers
  const brisbaneMarkers = [
    { name: 'Brisbane Access Centre', coords: [-27.4698, 153.0251] },
    { name: 'Hearing & Vision Support QLD', coords: [-27.4705, 153.0234] },
    { name: 'Inclusive Living Hub', coords: [-27.4679, 153.0273] },
  ]

  // Perth CBD markers
  const perthMarkers = [
    { name: 'Perth Accessibility Centre', coords: [-31.9523, 115.8613] },
    { name: 'Mobility WA Support Hub', coords: [-31.9505, 115.8591] },
    { name: 'Hearing Help Perth', coords: [-31.9548, 115.8575] },
  ]

  // Adelaide CBD markers
  const adelaideMarkers = [
    { name: 'Accessible Services SA', coords: [-34.9285, 138.6007] },
    { name: 'Vision & Hearing Support Adelaide', coords: [-34.9278, 138.6021] },
    { name: 'Adelaide Inclusion Centre', coords: [-34.9302, 138.6013] },
  ]

  // Canberra CBD markers
  const canberraMarkers = [
    { name: 'Canberra Community Access Hub', coords: [-35.2809, 149.13] },
    { name: 'ACT Mobility Services', coords: [-35.282, 149.1287] },
    { name: 'Inclusive Tech Centre Canberra', coords: [-35.2795, 149.1312] },
  ]

  // Hobart CBD markers
  const hobartMarkers = [
    { name: 'Hobart Accessibility Hub', coords: [-42.8821, 147.3272] },
    { name: 'Vision & Hearing Support Hobart', coords: [-42.8805, 147.3298] },
    { name: 'Inclusive Tasmania Services', coords: [-42.8842, 147.3245] },
  ]

  const regionalMarkers = [
    // New South Wales
    { name: 'Wagga Wagga Community Access Hub', coords: [-35.108, 147.3676] },
    { name: 'Tamworth Inclusive Living Centre', coords: [-31.0905, 150.929] },

    // Victoria
    { name: 'Bendigo Accessibility Support', coords: [-36.757, 144.2794] },
    { name: 'Ballarat Vision & Hearing Hub', coords: [-37.5622, 143.8503] },

    // Queensland
    { name: 'Toowoomba Mobility Centre', coords: [-27.5606, 151.9539] },
    { name: 'Rockhampton Access Services', coords: [-23.3781, 150.506] },

    // Western Australia
    { name: 'Bunbury Inclusive Support', coords: [-33.3271, 115.6414] },
    { name: 'Geraldton Regional Access Hub', coords: [-28.7773, 114.6145] },

    // South Australia
    { name: 'Mount Gambier Accessibility Centre', coords: [-37.8291, 140.7825] },

    // Tasmania
    { name: 'Launceston Assistive Services', coords: [-41.4388, 147.1347] },

    // Northern Territory
    { name: 'Alice Springs Community Hub', coords: [-23.698, 133.8807] },

    // ACT (outside of Canberra)
    { name: 'Tuggeranong Access Point', coords: [-35.4169, 149.0675] },
  ]

  // Add all accessibility service markers
  const allMarkers = [
    ...sydneyMarkers,
    ...melbourneMarkers,
    ...brisbaneMarkers,
    ...perthMarkers,
    ...adelaideMarkers,
    ...canberraMarkers,
    ...hobartMarkers,
    ...regionalMarkers,
  ]
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
