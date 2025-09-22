<template>
    <div>
        <index-navbar />
        <main class="profile-page">
            <section class="relative block h-500-px">
                <div class="absolute top-0 w-full h-full bg-center bg-cover"
                    :style="`background-image: url('${backgroundImage}');`">
                    <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                    style="transform: translateZ(0);">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section class="relative py-16 bg-blueGray-200">
                <div class="container mx-auto px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div class="relative">
                                        <img alt="..." :src="team2"
                                            class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">

                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">

                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    DevOps Implementation Services
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <!-- <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>
                  Los Angeles, California -->
                                </div>
                                <div class="container mx-auto px-4">
                                    <div class="flex flex-wrap">
                                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                            <div
                                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div class="px-4 py-5 flex-auto">
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                                        <i class="fas fa-award"></i>
                                                    </div>
                                                    <h6 class="text-xl font-semibold"> Culture </h6>
                                                    <p class="mt-2 mb-4 text-blueGray-500"> There is a culture of shared
                                                        responsibility.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                            <div
                                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div class="px-4 py-5 flex-auto">
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                                        <i class="fas fa-leaf"></i>
                                                    </div>
                                                    <h6 class="text-xl font-semibold">Lean Principles
                                                    </h6>
                                                    <p class="mt-2 mb-4 text-blueGray-500"> Team members can visualize
                                                        work in progress, limit batch sizes, and manage queue lengths.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                            <div
                                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div class="px-4 py-5 flex-auto">
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blueGray-600">
                                                        <i class="fas fa-cogs"></i>
                                                    </div>
                                                    <h6 class="text-xl font-semibold">Automation
                                                    </h6>
                                                    <p class="mt-2 mb-4 text-blueGray-500"> Team members seek ways to
                                                        automate as many tasks as possible and are comfortable with the
                                                        idea of continuous delivery.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                            <div
                                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div class="px-4 py-5 flex-auto">
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500">
                                                        <i class="fas fa-folder-open"></i>
                                                    </div>
                                                    <h6 class="text-xl font-semibold">Sharing
                                                    </h6>
                                                    <p class="mt-2 mb-4 text-blueGray-500"> Easy-to-navigate channels
                                                        allow teams in both development and operations to communicate.
                                                        It is incredibly important to eliminate any silos that exist
                                                        between development teams responsible for disparate functions.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                            <div
                                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div class="px-4 py-5 flex-auto">
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                                                        <i class="fas fa-cogs"></i>
                                                    </div>
                                                    <h6 class="text-xl font-semibold">Measurement
                                                    </h6>
                                                    <p class="mt-2 mb-4 text-blueGray-500"> Data is constantly being
                                                        collected, and there is also technology that can provide
                                                        visibility into all this data and the systems that house it.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <p class="mb-4 text-lg leading-relaxed text-blueGray-700" style="text-align: left;">

                                    CMS IT’s approach to DevOps implementation starts with the culture of agile
                                    practice, followed by Continuous Integration – Continuous Development followed by
                                    Site reliability best practices. CMS IT handles the complete DevOps Lifecycle which
                                    includes Code, Build, Test, Package, Release, Configure and Monitor.
                                </p>
                                <div class="w-full lg:w-9/12 px-4">
                                    <div class="items-center flex flex-wrap">
                                        <div class="w-full md:w-12/12 ml-auto px-12 md:px-4">
                                            <div class="md:pr-12">
                                                <img alt="..." class="max-w-full rounded-lg"
                                                    style="height: auto; width: 100%; margin: 125px;" :src="devopsimg">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <h3 class="text-xl font-semibold">CMS IT DevOps Implementation has the following Goals
                                    and Approaches

                                </h3>
                            </div>
                            <div class="container mx-auto px-4">
                                <div class="items-center flex flex-wrap" id="it-security-compliance">
                                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4"><img alt="..."
                                            class="max-w-full rounded-lg "
                                            src="@/assets/img/Image-DevOps-Pages-1.jpg" style="margin: 50px;"></div>
                                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                                        <img alt="..."
                                            class="max-w-full rounded-lg "
                                            src="@/assets/img/Image-DevOps-Pages-2.jpg" style="margin: -50px;"></div>

                                </div>
                            </div>
                            <h3 class="text-xl font-semibold text-center">CMS IT focusses on all three aspects of the IT enterprise of an organization to complete the implementation of DevOps.</h3>
                            
                                <h3 class="text-xl font-semibold text-left">Continuous Delivery</h3>
<p class="mb-4 text-lg leading-relaxed text-blueGray-700" >The risks associated with a release have significantly decreased, and the release process has become more reliable. With Continuous Del, the deployment process and scripts are tested repeatedly before deployment to production. So, most errors in the deployment process and scripts have already been discovered. With more frequent releases, the number of code changes in each release decreases. This makes finding and fixing any problems that do occur easier, reducing the time in which they have an impact.
</p>
                                <h3 class="text-xl font-semibold text-left">Continuous Integration</h3>
<p class="mb-4 text-lg leading-relaxed text-blueGray-700" >Developers frequently commit code to the main branch, and automated tests run to ensure that the code is always in a releasable state. This practice helps to identify integration issues early and improves the overall quality of the software.
</p>
<h3 class="text-xl font-semibold text-left">Site Reliability</h3>
<ul class="mb-4 text-lg leading-relaxed text-blueGray-700" >
    <li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           System availability and mission readiness analysis and related reliability and maintenance requirement allocation
</li>
    <li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           Functional system failure analysis and derived requirements specification
</li>
    <li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           Inherent (system) Design Reliability Analysis and derived requirements specification for both Hardware and Software design
</li>
<li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           System Diagnostics design
</li>
<li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           Fault tolerant systems (e.g. by redundancy)
</li>
<li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           Predictive and preventive maintenance (e.g. reliability cantered maintenance)
</li>
<li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           Human factors / Human interaction / Human errors
</li>
<li class="text-md font-light mt-2 ">
                                           <i class="fas fa-paper-plane text-green-500 mr-2"></i>
                                           Manufacturing- and Assembly induced failures (effect on the detected “0hour Quality” and reliability)
</li>
</ul>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <div class="items-center flex flex-wrap">
                                            <div class="w-full md:w-12/12 ml-auto px-12 md:px-4">
                                                <div class="md:pr-12">

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

import team2 from "@/assets/img/devops-eight-infinity.jpg";

import backgroundImage from "@/assets/img/DevOps-Implementation-Services-1.jpg";
import devopsimg from "@/assets/img/Devops-4.jpg";
export default {
    data() {
        return {
            team2,
            backgroundImage,
            devopsimg
        };
    },
    components: {
        IndexNavbar,
        FooterComponent,
    },
};
</script>
