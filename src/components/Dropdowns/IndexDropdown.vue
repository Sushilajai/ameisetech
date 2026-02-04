<template>
  <div>
    <a
      class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      What we do
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-600 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <!-- <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        Admin Layout
      </span>
      <router-link
        to="/admin/dashboard"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Dashboard
      </router-link>
      <router-link
        to="/admin/settings"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Settings
      </router-link>
      <router-link
        to="/admin/tables"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Tables
      </router-link>
      <router-link
        to="/admin/maps"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Maps
      </router-link> -->
      <!-- <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" /> -->
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 MenuDropdown-item" 
      >
        Services
      </span>
      <router-link 
        to="/contract-design#contract-design-feasibility"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Contract Design
      </router-link>
      
      
      <router-link
        to="/contract-design#operation-maintenance"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Operation & Maintenance
      </router-link>
      <router-link
        to="/contract-design#financial-modelling"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Financial Modelling
      </router-link>
      <router-link
        to="/contract-design#smart-infrastructure-services"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Smart Infrastructure Services
      </router-link>
      <router-link
        to="/contract-design#design-engineering-services"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Design & Engineering Services
      </router-link>
      <router-link
        to="/sustainability-consulting"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Sustainability Consulting
      </router-link>
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 MenuDropdown-item"
      >
        System Integration
      </span>
      <router-link
        to="/Services#battery-2nd-life-solution"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Battery 2nd Life Solution
      </router-link>
      <router-link
        to="/Services#smart-cities"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Smart Cities
      </router-link>
      <router-link
        to="/Services#digital-twin"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Digital Twin
      </router-link>
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 MenuDropdown-item"
      >
        Software Services
      </span>
      <router-link
        to="/software-services#ai-implementation"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        AI Implementation
      </router-link>
      <router-link
        to="/software-services#custom-software-development"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Custom Software Development
      </router-link>
      <router-link
        to="/software-services#cloud-solutions-migration"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Cloud Solutions & Migration 
      </router-link>
      <router-link
        to="/software-services#it-security-compliance"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        IT Security & Compliance
      </router-link>
      <router-link
        to="/software-services#it-consulting-services"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        IT Consulting & Services
      </router-link>
      <router-link
        to="/systems-integration"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        Legacy Transformation
      </router-link>
      <router-link
        to="/devops-integration"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 align-height"
      >
        DevOps Implementation Services
      </router-link>
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },

  methods: {
    toggleDropdown(event) {
      event.preventDefault();
      this.dropdownPopoverShow = !this.dropdownPopoverShow;

      if (this.dropdownPopoverShow) {
        createPopper(
          this.$refs.btnDropdownRef,
          this.$refs.popoverDropdownRef,
          { placement: "bottom-start" }
        );
      }
    },

    handleClickOutside(event) {
      const btn = this.$refs.btnDropdownRef;
      const menu = this.$refs.popoverDropdownRef;

      // If dropdown closed already → do nothing
      if (!this.dropdownPopoverShow) return;

      // If clicked inside button OR inside dropdown → do nothing
      if (btn.contains(event.target) || menu.contains(event.target)) {
        return;
      }

      // Otherwise → close dropdown
      this.dropdownPopoverShow = false;
    }
  },
  watch: {
  "$route.hash"(hash) {
    if (!hash) return;

    this.$nextTick(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.setAttribute("tabindex", "-1");
        el.scrollIntoView({ behavior: "smooth" });
        el.focus({ preventScroll: true });
      }
      else {
      // No hash? Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    });
  }
},
};
</script>
<style scoped>
  .leaflet-top, .leaflet-bottom {
    z-index: 0 !important;
}
  </style>
<!-- <style scoped>
  /* Navbar container */
.navbar,
header,
.top-nav {
  position: relative;
  z-index: 5000;
}

/* Your Popper dropdown */
.menu-dropdown,
.popover-dropdown,
[ref="popoverDropdownRef"] {
  z-index: 6000 !important;
}

/* 🔽 Push Leaflet map behind UI */
.leaflet-container {
  z-index: 1 !important;
}

.leaflet-pane,
.leaflet-top,
.leaflet-bottom {
  z-index: 1 !important;
}

/* 🔼 Keep navbar + dropdown above */
header,
.navbar,
.top-nav {
  position: relative;
  z-index: 5000;
}

  </style> -->