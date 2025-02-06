import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Featured = () => {
  return (
    <main className='mt-7 w-[90%] mx-auto '>
        <h2 className='lg:text-[27px] md:text-[22px] text-[19px] font-bold'>Featured</h2>

        <div className='mt-6'>
            <Image src="/images/Image3.png" alt='featured-img' width={1344} height={700}/>
        </div>



     {/* Heading Text */}
     <div className="text-center mt-10 w-[90%] mx-auto">
        <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[25px] font-medium capitalize">
          Step into what feels good
        </h1>
        <p className="lg:text-[13px] md:text-[12px] sm:text-[10px] text-[9px]">
        Cause everyone should know the feeling of running in that perfect pair.
        </p>
        {/* button */}
       <Link href="/new-feature"> <button
  className="bg-black text-white rounded-full py-3 px-6 min-w-[200px] sm:min-w-[120px] text-center whitespace-nowrap mt-8 lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]"
>
  Find Your Shoe
</button></Link>

      </div>
      

    </main>
  )
}

export default Featured