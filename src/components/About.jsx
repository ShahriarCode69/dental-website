import React from 'react'

function About() {
  return (
    <>
      <section class="py-15 bg-blue-50 sm:py-20 lg:py-30" id='about'>
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="pr-12 sm:pr-0">
              <div class="relative max-w-xs mb-12">
                <img class="object-bottom rounded-md" src="https://images.unsplash.com/photo-1663182120513-9effe46f79f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />

                <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
            </div>

            <div>
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[3.4rem]">Brighten Smiles with Care.</h2>
              <p class="mt-4 text-base leading-relaxed text-gray-600">We provide gentle and professional dental care to keep your smile healthy and bright. Our expert team ensures a comfortable and stress-free experience for every patient.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About