import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'


const Essentials = () => {
  return (
    <main className='w-[90%] mx-auto '>
        {/* Heading text */}
           
        <div className="text-center mt-10 w-[90%] mx-auto">
  
  <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[25px] font-medium">FLIGHT ESSENTIALS</h1>
  <p className="lg:text-[13px] md:text-[12px] sm:text-[10px] text-[9px] ">
  Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
  </p>
</div>

                           {/* Buttons */}
<div className="flex justify-center items-center  mt-8 text-white lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]">
  <Link href="/collection"><button className="bg-black rounded-full p-3 px-[50px] ">Shop</button></Link>
</div>



                                  {/* Grid section */}

        <h2 className='lg:text-[27px] md:text-[22px] text-[19px] font-bold my-7'>The Essentials</h2>       

                     {/* Pictures */}

   <div className="flex  md:flex-row flex-col justify-center items-center gap-6">

                  {/* image 1 */}
   <div className="relative max-w-full overflow-hidden">
  <Image
    src="/images/Image10.png"
    alt="image"
    width={440}
    height={540}
    className="w-auto h-auto"
  />
  <div className=" absolute bottom-4 left-4 bg-white hover:bg-slate-300 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-md">
    Men&apos;s
  </div>
</div>

  {/* image 2 */}
  <div className="relative max-w-full overflow-hidden">
  <Image
    src="/images/Image12.png"
    alt="image"
    width={440}
    height={540}
    className="w-auto h-auto"
  />
  <div className=" absolute bottom-4 left-4 bg-white hover:bg-slate-300 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-md">
    Women&apos;s
  </div>
</div>
  {/* image 3 */}
  <div className="relative max-w-full overflow-hidden">
  <Image
    src="/images/Image13.png"
    alt="image"
    width={440}
    height={540}
    className="w-auto h-auto"
  />
  <div className=" absolute bottom-4 left-4 bg-white hover:bg-slate-300 text-black text-sm font-semibold px-4 py-2 rounded-full shadow-md">
    Kid&apos;s
  </div>
</div>
</div>




 

                              {/* text flex section */}
<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 my-11 lg:p-[100px] md:p-[50px] sm:p-[40px] justify-center text-center items-center mx-auto">
  {/* 1st part */}
  <div>
    <h2 className="text-[19px] font-medium">Icons</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Air Force 1</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Huarache</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Air Max 90</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Air Max 95</p>
  </div>

  {/* 2nd part */}
  <div>
    <h2 className="text-[19px] font-medium">Shoes</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">All Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Custom Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Jordan Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Running Shoes</p>
  </div>

  {/* 3rd part */}
  <div>
    <h2 className="text-[19px] font-medium">Clothing</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">All Clothing</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Modest Wear</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Hoodies & Pullovers</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Shirts & Tops</p>
  </div>

  {/* 4th part */}
  <div>
    <h2 className="text-[19px] font-medium">Kid&#39;s</h2>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Infant & Toddler Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Kid&#39;s Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Kid&#39;s Jordan Shoes</p>
    <p className="text-[15px] text-black text-opacity-70 mt-4 font-medium">Kid&#39;s Basketball Shoes</p>
  </div>
</div>



    </main>
  )
}

export default Essentials