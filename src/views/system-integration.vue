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
                <!-- <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  Legacy Transformation
                </h3> -->
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <!-- <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>
                  Los Angeles, California -->
                </div>
                <div class="mb-2 text-blueGray-600 mt-10 text-left">
                <h3 class="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">What is legacy transformation?</h3>
                 <p class="mb-4 text-lg leading-relaxed text-blueGray-700" style="text-align: left;">
                  Legacy transformation is the strategic process of replacing outdated, inefficient technology with modern, cloud-based systems. Organizations undertake this transition to lower maintenance costs, enhance system performance, and free up IT resources for more value-driven initiatives. By modernizing legacy infrastructure, businesses can improve both customer and employee experiences, gain deeper insights through advanced data analytics, and foster innovation.
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
                  <div class="w-full lg:w-12/12 px-4">
                   <div class="container mx-auto px-4">
                    <div class="items-center flex flex-wrap" id="it-security-compliance">
                        <div class="w-full md:w-4/12 ml-auto mr-auto px-4 rounded-lg shadow-lg">
                            <img alt="..." class="max-w-full"
                                src="@/assets/img/LP_Explainer-Legacy-Transformation-AI.png" />
                                <img alt="..." class="max-w-full"
                                src="@/assets/img/LP_Explainer-Legacy-Transformation-how-it-works.png" />
                        </div>
                        <div class="w-full md:w-8/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">
                                
                               <h3 class="text-3xl mb-2 font-semibold leading-normal"> Why is legacy transformation important?
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-left"> 
                                Legacy transformation has become increasingly critical for organizations across all industries. As technology rapidly evolves, legacy systems – often decades old –become significant barriers to innovation and growth. These outdated systems were designed for a different era of business requirements and technological capabilities, making them ill-suited for today's digital landscape. This is where legacy transformation becomes essential, enabling organizations to replace outdated systems with modern, scalable solutions that drive efficiency, agility, and long-term success.
                            </p>
                               <h3 class="text-3xl mb-2 font-semibold leading-normal"> Benefits of legacy transformation
                            </h3>
                            <ul class="list-none mt-6  text-left">
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Cost Savings</span> – Reducing maintenance and operational costs associated with legacy systems.</span>
                                            </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Improved Performance</span> – Enhancing system speed, reliability, and user experience.</span>
                                            </div>    
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Scalability</span> – Enabling systems to grow and adapt to changing business needs.</span>
                                            </div>  

                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Enhanced Security</span> – Implementing modern security protocols to protect against cyber threats.</span>
                                            </div>      
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Better Integration</span> – Facilitating seamless communication between applications and platforms.</span>
                                            </div>  
                                </li>
                                <li class="py-2">
                                    <div class="flex items  -center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Increased Agility</span> – Allowing faster adaptation to market changes and customer demands.</span>
                                            </div>

                                </li>
                            </ul>
                        </div>
                    </div>


                    <!-- <div class="flex flex-wrap items-center mt-32" id="it-consulting-support">
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div
                                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i class="fas fa-laptop-code text-xl"></i></div>
                            <h3 class="text-3xl mb-2 font-semibold leading-normal"> IT Consulting & Services
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> 
                                Technology should drive your business forward, not hold it back. At <span class="text-blueGray-700 font-bold">AmeiseTech</span>, we provide <span class="text-blueGray-700 font-bold">strategic IT consulting and end-to-end services</span> that help organizations harness technology for growth, efficiency, and innovation.

Our experts partner with you to assess, plan, implement, and manage technology solutions tailored to your unique needs — enabling you to stay competitive in a fast-changing digital world.
                            </p>
                            <ul class="list-none mt-6">
                                <span
                                    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 MenuDropdown-item">
                                    🔹 Our IT Consulting & Services Include </span>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Technology Strategy & Roadmap</span> – Align IT investments with business goals.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold">Infrastructure Consulting </span>– Optimize networks, servers, and cloud environments. </span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Digital Transformation</span> – Modernize legacy systems and adopt next-gen technologies.</span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> System Integration</span> – Ensure seamless communication between applications and platforms. </span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Managed IT Services</span> – Proactive monitoring, support, and maintenance of IT environments. </span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold">Security & Compliance</span> – Safeguard data and ensure regulatory compliance.</span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold">Custom Software Solutions</span> – Tailored software to improve workflows and efficiency.</span></div>
                                </li>
                            </ul>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                                <img alt="..."
                                    src="@/assets/img/it-consulting-support.jpg"
                                    class="w-full align-middle rounded-t-lg">
                                <blockquote class="relative p-8 mb-4"><svg preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                        class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current">
                                        </polygon>
                                    </svg>
                                    <ul>
                                        <h4 class="text-xl font-bold text-white"> Benefits of Cloud Migration
                                            Development </h4>
                                        <li class="text-md font-light mt-2 text-white"> Reduce IT infrastructure costs</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Improve scalability and flexibility</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Enhance performance and reliability</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Strengthen data security</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Accelerate innovation and digital transformation</li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                    </div> -->
                    
                </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-12/12 px-4">
                   <div class="container mx-auto px-4">
                    <div class="items-center flex flex-wrap" id="it-security-compliance">
                        <div class="w-full md:w-8/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">
                               <h3 class="text-3xl mb-2 font-semibold leading-normal text-left"> How does legacy transformation work?
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 text-left"> 
Legacy transformation works by systematically addressing the outdated components of an organization's IT ecosystem and integrating innovative solutions that align with modern technological paradigms. This involves migrating legacy applications and systems to a more flexible, scalable cloud environment – not only enhancing the systems' efficiency but also significantly reducing operational costs.
                            </p>
                               <h3 class="text-3xl mb-2 font-semibold leading-normal text-left"> Benefits of legacy transformation
                            </h3>
                            <ul class="list-none mt-6  text-left">
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-dot-circle text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Increased efficiency:</span> Modern systems streamline processes, reduce downtime, and improve overall operational efficiency.
                                        </span> 
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-dot-circle text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Improved user experiences:</span> Modernized systems deliver better user experiences through intuitive interfaces, faster processing, and omni-channel capabilities.
                                        </span> 
                                    </div>    
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-dot-circle text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">Enhanced agility:</span> Modern, cloud-native platforms enable faster adaptation to market changes and customer needs.
                                        </span>
                                    </div>  
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-dot-circle text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"> 
                                            <span class="font-semibold">
                                              Cost reduction: </span>Retiring old legacy systems quickly and completely lowers ongoing maintenance costs and unlocks IT bandwidth for more strategic initiatives.
                                        </span> 
                                    </div>      
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4 rounded-lg shadow-lg" style="margin-top: 40px;">
                            <img alt="..." class="max-w-full"
                                src="@/assets/img/pega-seo-legacy-app-modernization-carousel.png" />
                            <img alt="..." class="max-w-full"
                            src="@/assets/img/pega-seo-legacy-modernazation-carousel.png" />
                    </div>
                    </div>
                  </div>
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
