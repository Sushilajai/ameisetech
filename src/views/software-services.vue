<template>
    <div>
        <IndexNavbar />
        <main>
            <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');
          ">
                    <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div class="pr-12">
                                <h1 class="text-white font-semibold text-5xl">
                                    Software Services
                                </h1>
                                <p class="mt-4 text-lg text-blueGray-200">
                                    At AmeiseTech, we deliver innovative, reliable, and scalable software services
                                    tailored to meet your business needs. From ideation to deployment, our expert team
                                    ensures your technology investments create maximum value and long-term success. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                    style="transform: translateZ(0);">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div> -->
            </div>

            <section class="pb-20 bg-blueGray-200 -mt-24">
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
                                    <h6 class="text-xl font-semibold"> Application Development </h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                     We build robust, high-performance applications tailored to your unique workflows and business needs, using modern frameworks and best development practices.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-4/12 px-4 text-center" >
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <i class="fas fa-retweet"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">IT Security & Compliance</h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
In today’s digital landscape, security is not optional — it’s essential. We provide comprehensive protection for your digital assets, whether hosted on-premise, in the cloud, or across distributed networks. Our approach combines rigorous auditing with proactive defense to secure everything from corporate headquarters to global data hubs.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6 w-full md:w-4/12 px-4 text-center" >
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div class="px-4 py-5 flex-auto">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <i class="fas fa-fingerprint"></i>
                                    </div>
                                    <h6 class="text-xl font-semibold">Cloud-Native Application Development </h6>
                                    <p class="mt-2 mb-4 text-blueGray-500">
                                        Develop and modernize applications using cloud-native architectures, microservices, and containerization for improved scalability and performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="flex flex-wrap items-center mt-32" id="ai-implementation">
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto" >
                            <div
                                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i class="fas fa-laptop-code text-xl"></i>
                            </div>
                            <h3 class="text-3xl mb-2 font-semibold leading-normal">
                                AI Implementation
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
Artificial Intelligence is transforming how businesses operate, decide, and grow. At Ameisetech, we help organizations implement practical, scalable AI solutions that drive automation, intelligence, and measurable business outcomes.

Our AI implementations are designed to seamlessly integrate with your existing systems, ensuring improved efficiency, smarter decision-making, and future-ready innovation—without unnecessary complexity.                            </p>
                            <ul class="list-none mt-6">
                                <span
                                    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 MenuDropdown-item">
                                    🔹 What We Offer </span>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span class="text-blueGray-600">
                                            <span class="font-semibold">
                                                AI Strategy & Use-Case Identification
 </span>– We analyze your business processes to identify high-impact AI opportunities and define a clear implementation roadmap aligned with your goals.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span class="text-blueGray-600">
                                            <span class="font-semibold">
                                                Machine Learning & Predictive Analytics
</span> – Leverage data-driven insights with machine learning models that forecast trends, detect anomalies, and support smarter business decisions.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span class="text-blueGray-600">
                                            <span class="font-semibold">
                                                Intelligent Automation
</span> – Automate repetitive and rule-based processes using AI-powered workflows to improve accuracy, speed, and operational efficiency.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span class="text-blueGray-600">
                                            <span class="font-semibold">
                                                Natural Language Processing (NLP)
</span> – Implement chatbots, virtual assistants, document processing, and sentiment analysis to enhance customer support and internal operations.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span class="text-blueGray-600">
                                            <span class="font-semibold">
                                                Computer Vision Solutions
 </span> – Enable image and video analysis for monitoring, detection, recognition, and quality control use cases.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i>
                                        <span class="text-blueGray-600">
                                            <span class="font-semibold">
                                                Responsible & Secure AI
 </span> – We ensure AI models are transparent, secure, compliant, and ethically implemented, with a strong focus on data privacy and governance.
                                        </span>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>

                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                                <img alt="..."
                                    src="@/assets/img/AI-Implementation.png"
                                    class="max-w-full rounded-lg shadow-lg" />
                                <!-- <blockquote class="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95" class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current">
                                        </polygon>
                                    </svg>

                                    <ul>

                                        <h4 class="text-xl font-bold text-white">
                                            Benefits of Our Application Development
                                        </h4>
                                        <li class="text-md font-light mt-2 text-white">
                                            Improved customer engagement with intuitive UI/UX
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Scalable solutions
                                            that grow with your business
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Enhanced security with
                                            best industry practices
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Faster time-to-market
                                            with agile development
                                        </li>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Competitive edge
                                            through innovation and modern technologies
                                        </li>
                                    </ul>
                                </blockquote> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative py-20">
                <!-- <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style="transform: translateZ(0);">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div> -->

                <div class="container mx-auto px-4">
                    <div class="items-center flex flex-wrap" id="custom-software-development">
                        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img alt="..." class="max-w-full rounded-lg shadow-lg"
                                src="@/assets/img/custom-software-development.png" />
                        </div>
                        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">
                                <div
                                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i class="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 class="text-3xl font-semibold">Custom Software Development</h3>
                                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    Every business is unique, and so are its challenges. Off-the-shelf solutions often
                                    fail to deliver the flexibility and efficiency that organizations need to stay
                                    ahead. Our Custom Software Development services are designed to build powerful, scalable, and
                                    tailored solutions that perfectly align with your business processes.
                                </p>
                                <ul class="list-none mt-6">
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">
                                                    End-to-End Development
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">
                                                    Enterprise Applications
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Industry-Specific Software Solutions</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Legacy System Modernization</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Integration Services</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Ongoing Support & Maintenance</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-wrap items-center mt-32" id="cloud-solutions-migration">
                        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div
                                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i class="fas fa-laptop-code text-xl"></i></div>
                            <h3 class="text-3xl mb-2 font-semibold leading-normal"> Cloud Solutions & Migration
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> Unlock the power of the cloud with
                                <span class="text-blueGray-700 font-bold">AmeiseTech</span> 
                                We help businesses 
                                <span class="text-blueGray-700 font-bold">migrate, modernize, and manage</span>
                                 their IT infrastructure on secure and scalable cloud platforms. 
                                 Whether you are moving from on-premises systems or optimizing your existing 
                                 cloud setup, our experts ensure a <span class="text-blueGray-700 font-bold">seamless, cost-effective, and future-ready transition.</span>
                            </p>
                            <ul class="list-none mt-6">
                                <span
                                    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400 MenuDropdown-item">
                                    🔹 Our Cloud Services </span>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Cloud Migration </span>
                                            – Smooth transition of applications, data, and workloads with minimal downtime.
                                        </span>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold">Cloud Strategy & Consulting</span> – Tailored cloud adoption roadmap aligned with your business goals. </span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Hybrid & Multi-Cloud Solutions</span> – Flexibility to leverage the best of public and private clouds.</span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Application Modernization</span> – Refactor legacy apps to be cloud-native and high-performing. </span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold"> Cloud Security & Compliance</span> – Protect your data with enterprise-grade security and compliance standards. </span></div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i><span
                                            class="text-blueGray-600"><span class="font-semibold">Managed Cloud Services</span> – Ongoing monitoring, optimization, and support for peak performance.</span></div>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                                <img alt="..."
                                    src="@/assets/img/cloud-migration.png"
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
                    </div>
                    
                </div>


                
            </section>



 <section class="relative py-20">
                <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style="transform: translateZ(0);">
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>

                <div class="container mx-auto px-4">
                    <div class="items-center flex flex-wrap" id="it-security-compliance">
                        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img alt="..." class="max-w-full rounded-lg shadow-lg"
                                src="@/assets/img/it-security-compliance.png" />
                        </div>
                        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">
                                <div
                                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i class="fas fa-rocket text-xl"></i>
                                </div>
                               <h3 class="text-3xl mb-2 font-semibold leading-normal"> IT Security & Compliance
                            </h3>
                            <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> 
                                In today’s digital landscape,<span class="text-blueGray-700 font-bold"> security is not optional</span> — <span class="text-blueGray-700 font-bold">it’s essential</span>.
                                The key areas such as access control, risk management, security policies, and vendor security assessments to ensure adherence to relevant standards and regulations.
                                
                            </p>
                                <ul class="list-none mt-6">
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">
                                                    Architecting secure identity and access frameworks.
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">
Hardening cloud, hybrid, and physical environments.
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">
                                                   Securing mission-critical hubs and remote operations.
</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">24/7 monitoring with automated threat response.
</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Ensuring compliance with national security norms.
</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Implementing resilient disaster recovery strategies.</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="flex items-center">
                                            <div>
                                                <span
                                                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 text-blueGray-500 mr-3">
                                                    <i class="far fa-paper-plane"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4 class="text-blueGray-500">Protecting data across all connected endpoints.</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-wrap items-center mt-32" id="it-consulting-services">
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
                                    src="@/assets/img/it-consulting-support.png"
                                    class="w-full align-middle rounded-t-lg">
                                <blockquote class="relative p-8 mb-4"><svg preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                        class="absolute left-0 w-full block h-95-px -top-94-px">
                                        <polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current">
                                        </polygon>
                                    </svg>
                                    <ul>
                                        <h4 class="text-xl font-bold text-white"> Benefits of IT Consulting & Services </h4>
                                        <li class="text-md font-light mt-2 text-white"> <i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Strategic Technology Alignment</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Cost Optimization & Efficiency</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Access to Expert Knowledge</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Improved Security & Compliance</li>
                                        <li class="text-md font-light mt-2 text-white"><i
                                                class="fas fa-dot-circle text-green-500 mr-2"></i>Scalability & Future Readiness</li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    
                </div>


                
            </section>


            <section class="pt-20 pb-48">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center text-center mb-24">
                        <div class="w-full lg:w-6/12 px-4">
                            <h2 class="text-4xl font-semibold">Research & Focus</h2>
                            <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                                Our R&D initiatives are designed to anticipate industry challenges, discover new possibilities, and deliver solutions that make technology smarter, safer, and more sustainable
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
                            <div class="px-6">
                                <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" style="width: 50%;"/>
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Powering sustainable AI</h5>
                                    <p class="mt-1 text-sm text-blueGray-400 font-semibold">
                                        Our focus on sustainable AI ensures that innovation goes hand-in-hand with responsibility
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
                            <div class="px-6">
                                <img alt="..." :src="team2" class="shadow-lg rounded-full mx-auto max-w-120-px" style="width: 50%;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">AI Agents</h5>
                                    <p class="mt-1 text-sm text-blueGray-400 font-semibold">
                                        think, decide, and act autonomously. At AmeiseTech
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
                            <div class="px-6">
                                <img alt="..." :src="team3" class="shadow-lg rounded-full mx-auto max-w-120-px" style="width: 50%;"/>
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">AI-Powered Threat Detection</h5>
                                    <p class="mt-1 text-sm text-blueGray-400 font-semibold">
                                        24/7 security operations to predict, detect, and neutralize threats.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
                            <div class="px-6">
                                <img alt="..." :src="team4" class="shadow-lg rounded-full mx-auto max-w-120-px" style="width: 50%;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Reinvention Real with Generative AI</h5>
                                    <p class="mt-1 text-sm text-blueGray-400 font-semibold">
                                        reinvent how they work, innovate, and grow with Gen AI
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" style="width: 20%;">
                            <div class="px-6">
                                <img alt="..." :src="team5" class="shadow-lg rounded-full mx-auto max-w-120-px" style="width: 50%;" />
                                <div class="pt-6 text-center">
                                    <h5 class="text-xl font-bold">Human-AI Interaction </h5>
                                    <p class="mt-1 text-sm text-blueGray-400 font-semibold">
                                        Natural and Intuitive Interfaces: Moving beyond text and voice to include gesture, gaze, and brain-computer interfaces (BCI) for interacting with AI.
                                    </p>
                                   
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

import team1 from "@/assets/img/sustainable-activewear.png";
import team2 from "@/assets/img/ai-integration.png";
import team3 from "@/assets/img/threat-detection.png";
import team4 from "@/assets/img/artificial-intelligence.png";
import team5 from "@/assets/img/robotic-hand.png";

export default {
    data() {
        return {
            team1,
            team2,
            team3,
            team4,
            team5,
        };
    },
    components: {
        IndexNavbar,
        FooterComponent,
    },
};
</script>
