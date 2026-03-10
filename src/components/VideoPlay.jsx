import React from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

function VideoPlay({ data, close, media_type }) {

//   if (!data) return null

  const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`)
//   setData(response.data.results) // returns array directly

  console.log("videoData:", videoData)
console.log("video key:", videoData?.results?.[0]?.key)
  return (
    <section className='fixed bg-white/20 top-0 right-0 bottom-0 left-0 z-40 flex justify-center items-center'>
      <div className='bg-black w-full max-h-[80vh] lg:h-[80vh] max-w-5xl aspect-video relative'>

        <button onClick={close} className='absolute right-0 -mt-7 text-3xl text-white'>
          <IoClose />
        </button>

       <iframe 
  src={`https://www.youtube.com/embed/${videoData?.[0]?.key}`}
  className='w-full h-full'
  frameBorder="0"
  allowFullScreen
/>

      </div>
    </section>
  )
}

export default VideoPlay