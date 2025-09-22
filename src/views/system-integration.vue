<template>
  <div>
    <index-navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
           :style="`background-image: url('${backgroundImage}');`"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      :src="team2"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  Legacy Transformation
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <!-- <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>
                  Los Angeles, California -->
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                 <p class="mb-4 text-lg leading-relaxed text-blueGray-700" style="text-align: left;">
                   The ever changing and fast evolving IT infrastructure needs and with the developing “as a Service” offerings legacy and complex platforms that require niche and outdated skills to develop, requires longer period of development and deployment of changes. Cost associated in continuing with this legacy is high which is driving enterprises to Legacy Transformation

Legacy Transformation or Digital Transformation today is a key initiative that every company must adopt the process of restructuring and modernizing their operational systems to ensure the investments done in the systems are giving continuous returns. The legacy transformation needs an infused effort to redesign both infrastructure and application landscape.

CMS IT helps derive early benefits of legacy transformation and get better value with fast migration and delivery with the new improved functionality that are aligned to the business KPI, realigned business processes.

Legacy transformation projects are an uphill task that are challenged by many risk starting from identifying current and future business needs, defining the approach that defines the probability of reuse of the current structures and services, replacing or refactoring the construct of services. The key is to define the risk that comes in various forms and its mitigation services as this are the critical pointers. CMS IT helps in defining the investments that are required to be done in the legacy transformation. This also helps derive the ROI & TCO of the project.


                 </p>
                </div>
                <div class="mb-2 text-blueGray-600">
                  <!-- <i
                    class="fas fa-university mr-2 text-lg text-blueGray-400"
                  ></i>
                  University of Computer Science -->
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <!-- <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a
                      href="javascript:void(0)"
                      class="font-normal text-emerald-500"
                    >
                      Show more
                    </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import team2 from "@/assets/img/Legacy.png";

import backgroundImage from "@/assets/img/system-integration-solutions.png";
export default {
  data() {
    return {
      team2,
      backgroundImage,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
