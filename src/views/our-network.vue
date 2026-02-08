<template>
  <div>
    <IndexNavbar />
    <main>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4" style="margin-top: 50px;">
          <div class="flex flex-wrap justify-center text-center" >
            <div class="w-full lg:w-12/12">
              <h2 class="text-4xl font-semibold">Partners</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500 text-left" style="margin-bottom: 1rem;">
                At AmeiseTech, we are proud to collaborate with visionary companies and industry leaders. These partnerships allow us to deliver innovative, robust solutions to our shared clients.             
               </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
              <div class="px-6">
                <div class="logo-circle mx-auto shadow-lg">
                <img
                  alt="..."
                  :src="partner1"
                  class="logo-img shadow-lg rounded-full mx-auto max-w-120-px"
                />
              </div>
                <div class="pt-6 text-center">
                  <h5 class="text-ml font-bold">Ab-ovo</h5>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
              <div class="px-6">
                <div class="logo-circle mx-auto shadow-lg">
                <img
                  alt="..."
                  :src="partner2"
                  class=" logo-img shadow-lg rounded-full mx-auto max-w-120-px" 
                />
                </div>
                <div class="pt-6 text-center">
                  <h5 class="text-ml font-bold">Sterlite Technologies Limited</h5>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
              <div class="px-6">
                <div class="logo-circle mx-auto shadow-lg">
                <img
                  alt="..."
                  :src="partner3"
                  class=" logo-img shadow-lg rounded-full mx-auto max-w-120-px" 
                />
                </div>
                <div class="pt-6 text-center">
                  <h5 class="text-ml font-bold">Tera Software</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4" style="margin-top: 50px;">
          <div class="flex flex-wrap justify-center text-center"  style="margin-bottom: 1rem;">
            <div class="w-full lg:w-12/12">
              <h2 class="text-4xl font-semibold">Clients</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500 text-left">
We are proud to serve a diverse portfolio of clients across infrastructure, logistics, manufacturing, public sector, and sustainability-focused organizations. Our client relationships are built on trust, transparency, and measurable outcomes.              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
           <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
              <div class="px-6">
                <div class="logo-circle mx-auto shadow-lg">
                <img
                  alt="..."
                  :src="partner1"
                  class="logo-img shadow-lg rounded-full mx-auto max-w-120-px"
                />
              </div>
                <div class="pt-6 text-center">
                  <h5 class="text-ml font-bold">Ab-ovo</h5>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
              <div class="px-6">
                <div class="logo-circle mx-auto shadow-lg">
                <img
                  alt="..."
                  :src="client1"
                  class=" logo-img shadow-lg rounded-full mx-auto max-w-120-px" 
                />
                </div>
                <div class="pt-6 text-center">
                  <h5 class="text-ml font-bold">JNPA</h5>
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

import partner1 from "@/assets/img/PPR0001023_1colored.png";
import partner2 from "@/assets/img/sterlite technologies limited.jpg";
import partner3 from "@/assets/img/teralogo.png";
import client1 from "@/assets/img/my-logo.png";
import client2 from "@/assets/img/jnpt1.png";
import client3 from "@/assets/img/jnpa-logo.png";

export default {
  data() {
    return {
      partner1,
      partner2,
      partner3,
      client1,
      client2,
      client3,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
<style scoped>
  .logo-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* IMPORTANT */
}
.logo-circle:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  background-color: #eaeaea;
}

.logo-img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}
.pt-6 {
    padding-top: 0.5rem;
}
</style>