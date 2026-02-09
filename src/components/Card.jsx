import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

function Card({ data, trending, index }) {

    const imageURL = useSelector(state => state.movieo.imageURL)

  return (
    <div className='w-full min-[230px] max-w-57.5 h-80 overflow-hidden rounded relative'>
        <img src={imageURL + data.poster_path} alt={data.title} />
        <div className='absolute top-4 '>
            {
                trending && (
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                        #{index} Trending
                    </div>
                )
            }
        </div>

        <div className='absolute bottom-0 h-14 backdrop-blur-3xl w-full bg-black/50 p-1'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>
                {data?.title || data?.name}
            </h2>
            <div className='text-sm text-neutral-400 flex justify-between items-center'>
                <p>{moment(data?.release_date || data?.first_air_date).format("MMM DD, YYYY")}</p>
                <p className='bg-black px-1 rounded-full text-xs text-white'>Rating : {Number(data.vote_average).toFixed(1) || "N/A"}</p>
            </div>
        </div>
    </div>
  )
}

export default Card