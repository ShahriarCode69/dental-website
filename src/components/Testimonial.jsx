import React from 'react'

function Testimonial() {
  return (
    <>
      <section class="py-10 bg-blue-50 sm:py-16 lg:py-24" id='testimonial'>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Trusted by <span class="text-blue-600">1.2k+</span> happy patients for exceptional dental care.</h2>
          </div>

          <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-blue-100 rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="src/assets/user.png" alt="" />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">“I had an amazing experience at this clinic. The team was professional, and the treatment was painless. I’m so happy with my new smile!”</p>
                </blockquote>
                <p class="text-base font-semibold tex-tblack mt-9">Rafiq Ahmed</p>
                <p class="mt-1 text-base text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="src/assets/user.png" alt="" />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">"The staff made me feel comfortable from start to finish. My teeth whitening treatment was quick and effective. Highly recommend this!"</p>
                </blockquote>
                <p class="text-base font-semibold tex-tblack mt-9">Mina Rahman</p>
                <p class="mt-1 text-base text-gray-600">Chittagong, Bangladesh</p>
              </div>
            </div>

            <div class="overflow-hidden bg-blue-100 rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="src/assets/user.png" alt="" />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">"After my root canal treatment, I was back to eating comfortably in no time. The entire process was smooth and stress-free. Thank you so much!"</p>
                </blockquote>
                <p class="text-base font-semibold tex-tblack mt-9">Tariq Hasan</p>
                <p class="mt-1 text-base text-gray-600">Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Testimonial