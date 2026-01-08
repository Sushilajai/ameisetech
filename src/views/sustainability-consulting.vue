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
                    style="background-color: white;"
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
                  Sustainability and ESG Consulting Services

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
                  Our Sustainability Consulting services help organizations integrate sustainable practices into their operations, ensuring long-term environmental and social responsibility. We provide expert guidance on sustainability strategy development, stakeholder engagement, and impact assessment. Our team works closely with clients to identify opportunities for reducing environmental footprints, enhancing resource efficiency, and promoting sustainable growth. By leveraging industry best practices and innovative solutions, we empower businesses to achieve their sustainability goals while driving positive change in their communities.


                 </p>
                 <p class="mb-4 text-lg leading-relaxed text-blueGray-700" style="text-align: left;">
                  Our ESG Consulting services assist organizations in navigating the complex landscape of Environmental, Social, and Governance (ESG) criteria. We help clients develop robust ESG frameworks, conduct materiality assessments, and implement effective reporting mechanisms. Our consultants provide insights on regulatory compliance, risk management, and stakeholder communication, enabling businesses to enhance their ESG performance and reputation. Through our tailored approach, we support organizations in aligning their operations with global sustainability standards and investor expectations.
                 </p>
                 <div class="flex flex-wrap justify-center items-center" >
           <img alt="..." class="max-w-full rounded-lg shadow-lg mx-auto"
                                src="@/assets/img/ESG-Consulting.webp" style="width: 400px; height: 400px;"/>
                              

              </div>
              <h4 class="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mt-10 mb-2">
                Approach
                </h4>
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700" style="text-align: left;">
                  We take a collaborative and customized approach to sustainability and ESG consulting, tailoring our services to meet the unique needs of each client. Our process includes:
                </p>
                <h4 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mt-4 mb-2">
                  Services
                </h4>
                <div class="mb-2 text-blueGray-600">
                  <ul class="list-disc list-inside text-lg leading-relaxed text-blueGray-700" style="text-align: left;">
                    <li class="">🔹Sustainability Strategy Development</li>
                    <li class="">🔹ESG Framework Design and Implementation</li>
                    <li class="">🔹Stakeholder Engagement and Communication</li>
                    <li class="">🔹Impact Assessment and Reporting</li>
                    <li class="">🔹Regulatory Compliance and Risk Management</li>
                  </ul>
                </div>
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

import team2 from "@/assets/img/sustan.png";

import backgroundImage from "@/assets/img/green-energy-sustainable.jpg";
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
