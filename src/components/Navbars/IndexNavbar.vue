<template>
  <div>

    <!-- Navbar -->
    <nav
      class="top-0 fixed z-600 w-full flex flex-wrap items-center justify-between px-2 Nav-py-3 navbar-expand-lg bg-white shadow"
    >
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <router-link to="/">
            <a class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="#pablo">
              <img src="@/assets/img/logo.png" class="h-16" alt="..." />
            </a>
          </router-link>

          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            @click="setNavbarOpen"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div class="lg:flex flex-grow items-center" :class="[navbarOpen ? 'block' : 'hidden']" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li class="flex items-center">
              <router-link to="/index" class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold">Who we are</router-link>
            </li>

            <li class="flex items-center">
              <index-dropdown />
            </li>

            <li class="flex items-center">
              <router-link to="/industries" class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold">Industries</router-link>
              <router-link to="/partners-clients" class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold">Partners & Clients</router-link>
              <router-link to="/products" class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold">Products</router-link>
              <router-link to="/contactus" class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold">contact us</router-link>

              <!-- Use a button (not router-link) to open modal -->
              <button
                type="button"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 ml-3"
                  
              ><!-- @click="openAirPopup" -->
                Calculate Carbon footprint
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   <!-- Carbon Footprint Modal -->
<!-- Popup Overlay -->
<!-- Trigger Button -->
<!-- <button class="open-ai-air-btn" onclick="openAirPopup()">Calculate Air Travel Carbon Footprint</button> -->

<!-- AI Popup Modal -->
<div v-if="showModal" class="air-modal flex">
  <div class="air-modal-content">
  
    <span class="close" @click="closeAirPopup">&times;</span>
    <h2>AI-Based Air Travel Carbon Calculator ✈️</h2>

    <!-- Airport Inputs -->
    <div class="airport-group">
      <label>Departure Airport</label>
      <input type="text" v-model="fromAirport" class="airport-input" placeholder="Search airport..." @input="searchAirport(fromAirport, 'from')" />
      
      <div class="airport-list" v-if="searchResultsFrom.length">
        <div class="airport-item"
             v-for="a in searchResultsFrom"
             :key="a.iata"
             @click="selectAirport(a.iata, 'from')">
          {{ a.iata }} - {{ a.city }} ({{ a.name }})
        </div>
      </div>
    </div>

    <div class="airport-group">
      <label>Arrival Airport</label>
      <input type="text" v-model="toAirport" class="airport-input" placeholder="Search airport..." @input="searchAirport(toAirport, 'to')" />

      <div class="airport-list" v-if="searchResultsTo.length">
        <div class="airport-item"
             v-for="a in searchResultsTo"
             :key="a.iata"
             @click="selectAirport(a.iata, 'to')">
          {{ a.iata }} - {{ a.city }} ({{ a.name }})
        </div>
      </div>
    </div>

    <!-- Trip Type -->
    <label>Trip Type</label>
    <select v-model="tripType">
      <option value="1">One-Way</option>
      <option value="2">Round Trip</option>
    </select>

    <!-- Seat Class -->
    <label>Seat Class</label>
    <select v-model="seatClass">
      <option value="eco">Economy</option>
      <option value="premium">Premium Economy</option>
      <option value="business">Business</option>
      <option value="first">First Class</option>
    </select>

    <!-- SAF -->
    <label>Sustainable Aviation Fuel (SAF %) Reduction</label>
    <input type="range" min="0" max="50" v-model="saf">
    <p>SAF Reduction: {{ saf }}%</p>

    <button class="calculate-btn" @click="calculateAIEmission">Calculate Emission</button>

    <p v-html="aiResult"></p>

  </div>
</div>


  </div>
</template>
<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  components: { IndexDropdown },

  data() {
    return {
      navbarOpen: false,

      fromAirport: "",
      toAirport: "",
      tripType: 1,
      seatClass: "eco",
      saf: 0,

      airports: [
        { iata: "DEL", name: "Indira Gandhi Intl", city: "Delhi", country: "India", lat: 28.5562, lon: 77.1000 },
        { iata: "BOM", name: "Chhatrapati Shivaji Intl", city: "Mumbai", country: "India", lat: 19.0896, lon: 72.8656 },
        { iata: "BLR", name: "Kempegowda Intl", city: "Bangalore", country: "India", lat: 13.1986, lon: 77.7066 },
        { iata: "MAA", name: "Chennai Intl", city: "Chennai", country: "India", lat: 12.9900, lon: 80.1693 },
        { iata: "HYD", name: "Rajiv Gandhi Intl", city: "Hyderabad", country: "India", lat: 17.2403, lon: 78.4294 },
        { iata: "CCU", name: "Kolkata Intl", city: "Kolkata", country: "India", lat: 22.6547, lon: 88.4467 },
        { iata: "DXB", name: "Dubai Intl", city: "Dubai", country: "UAE", lat: 25.2532, lon: 55.3657 },
        { iata: "LHR", name: "Heathrow", city: "London", country: "UK", lat: 51.4700, lon: -0.4543 },
        { iata: "JFK", name: "John F Kennedy Intl", city: "New York", country: "USA", lat: 40.6413, lon: -73.7781 },
        { iata: "SIN", name: "Changi", city: "Singapore", country: "Singapore", lat: 1.3644, lon: 103.9915 }
      ],

      searchResultsFrom: [],
      searchResultsTo: [],

      showModal: false,
      aiResult: "",
    };

  },
  methods: {
    setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen;
    },

    /** OPEN & CLOSE MODAL **/
    openAirPopup() {
      this.showModal = true;
    },
    closeAirPopup() {
      this.showModal = false;
    },

    /** AUTOCOMPLETE **/
    searchAirport(query, type) {
      if (!query.trim()) {
        if (type === "from") this.searchResultsFrom = [];
        else this.searchResultsTo = [];
        return;
      }

      const results = this.airports
        .filter(a =>
          a.iata.toLowerCase().includes(query.toLowerCase()) ||
          a.name.toLowerCase().includes(query.toLowerCase()) ||
          a.city.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 10);

      if (type === "from") this.searchResultsFrom = results;
      else this.searchResultsTo = results;
    },

    selectAirport(code, type) {
      if (type === "from") {
        this.fromAirport = code;
        this.searchResultsFrom = [];
      } else {
        this.toAirport = code;
        this.searchResultsTo = [];
      }
    },

    /** DISTANCE CALC **/
    calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI/180;
      const dLon = (lon2 - lon1) * Math.PI/180;
      const a =
        Math.sin(dLat/2) ** 2 +
        Math.cos(lat1 * Math.PI/180) *
        Math.cos(lat2 * Math.PI/180) *
        Math.sin(dLon/2) ** 2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    },

    /** SIMPLE AIRCRAFT PREDICTOR **/
    predictAircraft(distance) {
      if (distance < 1500) return "Airbus A320 / Boeing 737";
      if (distance < 4500) return "Boeing 787 / Airbus A330";
      return "Boeing 777 / Airbus A350";
    },

    /** MAIN AI EMISSION CALCULATOR **/
    calculateAIEmission() {
      const from = this.airports.find(a => a.iata === this.fromAirport);
      const to = this.airports.find(a => a.iata === this.toAirport);

      if (!from || !to) {
        this.aiResult = "❌ Please select valid airports.";
        return;
      }

      const distance = this.calculateDistance(from.lat, from.lon, to.lat, to.lon);

      const aircraft = this.predictAircraft(distance);

      const seatMultiplier = {
        eco: 1,
        premium: 1.3,
        business: 2,
        first: 3
      }[this.seatClass];

      const baseEF = 0.115; // kg CO2/km
      const RFI = 1.9;

      let emission = distance * baseEF * seatMultiplier * RFI;
      emission *= this.tripType;
      emission *= (1 - this.saf / 100);

      this.aiResult = `
        Distance: ${distance.toFixed(0)} km<br>
        Aircraft: ${aircraft}<br>
        Total CO₂e: ${emission.toFixed(2)} kg
      `;
    },
    
  }
};

window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
.air-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  display: flex;           /* <— IMPORTANT FIX */
  justify-content: center;
  align-items: center;
  /* z-index: 9999; */
}


.air-modal-content {
  background: white;
  width: 380px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.25);
  animation: popupFade 0.3s ease;
}

.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.air-modal-content input,
.air-modal-content select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.calculate-btn {
  background: #2b8a3e;
  padding: 10px 12px;
  color: white;
  width: 100%;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.airport-group {
  position: relative;
  margin-bottom: 20px;
}

.airport-input {
  width: 100%;
}

.airport-list {
  position: absolute;
  background: #fff;
  width: 100%;
  max-height: 220px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: block;
  /* z-index: 10000; */
}

.airport-item {
  padding: 8px 10px;
  cursor: pointer;
}

.airport-item:hover {
  background: #f1f1f1;
}

@keyframes popupFade {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}


</style>
