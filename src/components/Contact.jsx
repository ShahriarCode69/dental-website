import React from 'react'

function Contact() {
  return (
    <>
      <section class="py-10 bg-white-50 sm:py-16 lg:py-24" id='contact'>
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-left sm:text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get Full Access to Premium Dental Care</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">We provide expert dental services with a focus on comfort, care, and results. Our team is dedicated to making your visit a pleasant and stress-free experience. From routine checkups to advanced treatments, we have you covered.</p>
          </div>

          <div class="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
            <div class="flex items-start">
              <svg class="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div class="ml-4">
                <h3 class="text-xl font-semibold text-black">130+ Treatments</h3>
                <p class="mt-1.5 text-base text-gray-600">Tailored to your needs</p>
              </div>
            </div>

            <div class="flex items-start">
              <svg class="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div class="ml-4">
                <h3 class="text-xl font-semibold text-black">14 Specialized Services</h3>
                <p class="mt-1.5 text-base text-gray-600">Get the care you deserve</p>
              </div>
            </div>

            <div class="flex items-start">
              <svg class="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div class="ml-4">
                <h3 class="text-xl font-semibold text-black">Easy Booking</h3>
                <p class="mt-1.5 text-base text-gray-600">Book your appointment with ease</p>
              </div>
            </div>
          </div>

          <form action="#" method="POST" class="max-w-xl mx-auto mt-12">
            <div class="sm:p-2 sm:bg-blue-100 sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600">
              <div class="flex flex-col items-start sm:flex-row sm:justify-center">
                <div class="flex-1 w-full min-w-0">
                  <div class="relative text-gray-400 focus-within:text-blue-600">
                    <label for="email" class="sr-only"></label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-blue-600"
                      required=""
                    />
                  </div>
                </div>

                <button type="submit" class="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                  Get instant booking
                  <svg class="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Contact