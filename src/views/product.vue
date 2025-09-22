<template>
  <div>
    <IndexNavbar />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  This is a simple example of a Landing Page you can build using
                  Vue Notus. It features multiple CSS components based on the
                  Tailwind CSS design system.
                </p>
              </div>
            </div>
          </div>
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
      </div>

       <section class="pb-20 bg-blueGray-200 -mt-24">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap">
                       
                    </div>

                    <div class="flex flex-wrap items-center mt-32" id="web-application-development">
                       
                    <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div style="background-color: #a89f1e;"
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                                <img alt="..."
                                    src="@/assets/img/hrms.webp"
                                    class="w-full align-middle rounded-t-lg" />
                                <blockquote class="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon style="    color: rgb(168 159 30);" points="-30,95 583,95 583,65" class="text-emerald-500 fill-current">
                                        </polygon>
                                    </svg>

                                    <ul>

                                        <h4 class="text-xl font-bold text-white">
                                            HRMS
                                        </h4>
                                        <span style="color: white;">we provide a smart and intuitive HRMS solution that helps organizations manage their human resources efficiently and effectively</span>
                                        <li class="text-md font-light mt-2 text-white">
                                            <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Automate repetitive HR tasks
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Stay aligned with labor laws and regulations
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Transparent and user-friendly processes.
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Analytics for workforce planning and management.
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Flexible solution for startups, SMEs, and enterprises.
                                        </li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div style="background-color: #e85c4a;"
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                                <img alt="..."
                                    src="@/assets/img/project-management.jpg"
                                    class="w-full align-middle rounded-t-lg" />
                                <blockquote class="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon style="color: #e85c4a;" points="-30,95 583,95 583,65" class="text-emerald-500 fill-current">
                                        </polygon>
                                    </svg>

                                    <ul>

                                        <h4 class="text-xl font-bold text-white">
                                            Project Planner 
                                        </h4>
                                        <span style="color: white;">we provide a smart and intuitive Project Planner solution that helps organizations plan, track, and execute projects with efficiency and transparency</span>
                                        <li class="text-md font-light mt-2 text-white">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                            Improved customer engagement with intuitive UI/UX
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-paper-plane text-green-500 mr-2"></i>
                                            Scalable solutions that grow with your business
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-paper-plane text-green-500 mr-2"></i>
                                            Enhanced security with best industry practices
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-paper-plane text-green-500 mr-2"></i>
                                            Faster time-to-market with agile development
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-paper-plane text-green-500 mr-2"></i>Competitive edge
                                            through innovation and modern technologies
                                        </li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                                <img alt="..."
                                    src="@/assets/img/Air-offset.jpg"
                                    class="w-full align-middle rounded-t-lg" />
                                <blockquote class="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current">
                                        </polygon>
                                    </svg>

                                    <ul>

                                        <h4 class="text-xl font-bold text-white">
                                            Air Travel emission calculator
                                        </h4>
                                        <li class="text-md font-light mt-2 text-white">
                                            <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Accurate carbon footprint calculations for air travel
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                User-friendly interface for easy navigation
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Emission reduction strategies for airlines and travelers
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>
                                                Integration with other sustainability tools and platforms
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Flexible solution
                                            for startups, SMEs, and enterprises.
                                        </li>
                                    </ul>
                                </blockquote>
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

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
