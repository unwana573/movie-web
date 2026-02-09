import React, { useRef } from 'react'
import Card from './Card'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

function HorizontalScrollCard({data = [], heading}) {

    const containerRef = useRef()

    const handleNext  = ()=>{
        containerRef.current.scrollLeft +=  200
    }
    const handlePrev  = ()=>{
        containerRef.current.scrollLeft -=  200
    }
return (
    <div className='container mx-auto pl-13 pr-13 my-10'>    
        <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white'>{heading}</h2>
    
        <div className='relative'>

            <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,210px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all'>
                {
                    data.map((data, index) => {
                        return(
                            <Card key={data.id+"heading"+index} data={data} trending={true} index={index + 1} />
                        )
                    })
                }
            </div>
            <div className='absolute top-0 flex justify-between w-full mt-35'>
                <button onClick={handlePrev} className='bg-white h-full p-1 text-black rounded-full -ml-1 z-10'>
                    <FaCircleArrowLeft />
                </button>
                <button onClick={handleNext} className='bg-white h-full p-1 text-black rounded-full -mr-1 z-10'>
                    <FaCircleArrowRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default HorizontalScrollCard