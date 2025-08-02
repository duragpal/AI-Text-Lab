import React from 'react'
import Templates from '@/app/(data)/Templates'
import { ArrowRight } from 'lucide-react'
function FeatureSection() {
  return (
    <div className='m-4 p-3 max-w-7xl mx-auto'>
        <div className='justify-center items-center flex flex-col gap-4 p-10'>
        <h2 className='text-blue-600 tracking-tight font-bold text-xl'>GET STARTED FOR FREE</h2>
<h1 className='font-bold text-black text-3xl tracking-tight'>Unleash AI Power to Craft Stunning Content Instantly</h1>
<p className='text-neutral-400 max-w-3xl text-center'>Built for creators, marketers, and dreamers who move fast.  
Turn your thoughts into content that clicks with zero hassle and zero cost.</p>
        </div>
        <div>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Templates.slice(0,16).map((tool, index) => (
        <div
          key={index}
          className=" flex flex-col justify-center item-center text-center bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-all border hover:border-blue-500 cursor-pointer"
        >
          <img  src={tool.icon} alt={tool.name} className="w-10 h-10 mb-3 mx-auto" />
          <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
          <p className="text-sm text-gray-600">{tool.desc}</p>
        </div>
      ))}
    </div>
        </div>
        <div className="text-center mt-2">
  <a
    href="sign-in"
    className=" font-medium  flex justify-center items-center rounded-lg  max-w-[15rem] mx-auto bg-[#3635C9] text-white"
  >
    <div className='flex items-center justify-center'>
    <h2 className='mr-2 text-white'>View All Tools </h2>
    <ArrowRight size={16}/>
    </div>
  </a>
</div>
    </div>
  )
}

export default FeatureSection;