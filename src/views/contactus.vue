<template>
  <div>
    <IndexNavbar />
    <main>

      <!-- HEADER SECTION -->
      <section class="pb-20 relative block bg-blueGray-800">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Drop Us A Line</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                You can reach us via email or phone. We are available from
                Monday to Friday, 9am to 6pm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT FORM SECTION -->
      <section class="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">

              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div class="flex-auto p-5 lg:p-10">

                  <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Complete this form and we will get back to you in 24 hours.
                  </p>

                  <!-- FULL NAME -->
                  <div class="relative w-full mb-3 mt-8">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Full Name
                    </label>
                    <input v-model="form.fullName" type="text"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name" />
                  </div>

                  <!-- EMAIL -->
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input v-model="form.email" type="email"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email" />
                  </div>

                  <!-- PHONE -->
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Phone
                    </label>
                    <input v-model="form.phone" type="tel"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Phone Number" />
                  </div>

                  <!-- ORGANIZATION -->
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Name of Organization
                    </label>
                    <input v-model="form.organization" type="text"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Name of Organization" />
                  </div>

                  <!-- DESIGNATION -->
                  <div class="relative w/full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Designation
                    </label>
                    <input v-model="form.designation" type="text"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Designation" />
                  </div>

                  <!-- SECTOR (DROPDOWN) -->
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Select Sector
                    </label>
                    <select v-model="form.sector"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                      <option value="">Select Sector</option>
                      <option>Manufacturing</option>
                      <option>Transport</option>
                      <option>Technology</option>
                      <option>Energy</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <!-- MESSAGE -->
                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Message
                    </label>
                    <textarea v-model="form.message" rows="4"
                      class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."></textarea>
                  </div>

                  <!-- SUBMIT BUTTON -->
                  <div class="text-center mt-6">
                    <button @click="submitForm"
                      class="bg-blueGray-800 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg transition-all duration-150">
                      Send Message
                    </button>
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

export default {
  components: { IndexNavbar, FooterComponent },

  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        designation: "",
        sector: "",
        message: "",
      },
    };
  },

  methods: {
    submitForm() {
      // BASIC FRONTEND VALIDATION
      if (!this.form.fullName || !this.form.email || !this.form.phone) {
        alert("Please fill required fields.");
        return;
      }

      // PRINT RESULT (you can connect API here)
      console.log("Form Data Submitted:", this.form);

      // TODO: SEND TO BACKEND
      // axios.post("https://your-api-url/contact", this.form)

      alert("Your message has been submitted!");
      
      // Reset form
      this.form = {
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        designation: "",
        sector: "",
        message: "",
      };
    },
  },
};
</script>
