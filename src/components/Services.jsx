import React from 'react'

function Section() {
  return (
    <>
      <section class="py-10 bg-blue-50 sm:py-16 lg:py-24" id='services'>
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Dental Services</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Our clinic offers expert dental care, from routine checkups to advanced treatments. We ensure a comfortable and personalized experience for every patient.</p>
          </div>

          <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-blue-100 rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src="/src/assets/dental.png" alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Teeth Whitening</p>
                  </div>
                  <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-gray-600 mt-7">Brighten your smile with professional whitening treatments that remove stains and discoloration for a radiant look.</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src="/src/assets/dental.png" alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Dental Implants</p>
                  </div>
                </div>
                <p class="text-base leading-relaxed text-gray-600 mt-7">A permanent solution for missing teeth, dental implants restore function and appearance with natural-looking replacements.</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src="/src/assets/dental.png" alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Tooth Extraction</p>
                  </div>
                  <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-gray-600 mt-7">Safe and painless removal of damaged or impacted teeth, including wisdom teeth, to maintain oral health.</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src="/src/assets/dental.png" alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Laser Dentistry</p>
                  </div>
                  <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-gray-600 mt-7">Advanced, minimally invasive treatments using laser technology for gum reshaping, cavity removal, and other procedures.</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src="/src/assets/dental.png" alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Cosmetic Dentistry</p>
                  </div>
                  <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-gray-600 mt-7">Enhance the appearance of your teeth with veneers, bonding, and other cosmetic treatments for a flawless smile.</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded shadow">
              <div class="p-8">
                <div class="flex items-center">
                  <img class="flex-shrink-0 w-12 h-auto" src="/src/assets/dental.png" alt="" />
                  <div class="ml-5 mr-auto">
                    <p class="text-xl font-semibold text-black">Pediatric Dentistry</p>
                  </div>
                  <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p class="text-base leading-relaxed text-gray-600 mt-7">Gentle and specialized dental care for children, ensuring healthy development and positive oral habits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-10 bg-blue-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How We Work?</h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">We ensure a smooth and comfortable dental care experience with a simple three-step process</p>
          </div>

          <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 border-2 border-blue-500 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Consultation & Examination</h3>
                <p class="mt-4 text-base text-gray-600">We start with a thorough checkup to assess your oral health, discuss concerns, and recommend the best treatment plan.</p>
              </div>

              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 border-2 border-blue-500 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Personalized Treatment</h3>
                <p class="mt-4 text-base text-gray-600">Our expert team provides gentle and effective care, using advanced techniques to ensure a pain-free and stress-free experience.</p>
              </div>

              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 border-2 border-blue-500 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Aftercare & Support</h3>
                <p class="mt-4 text-base text-gray-600">We guide you on maintaining long-lasting oral health with post-treatment care, regular checkups, and personalized dental advice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section