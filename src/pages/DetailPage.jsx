import React from 'react'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DetailPage() {

  const params = useParams()
  const imageURL = useSelector(state => state.movieo.imageURL)

  const { data } = useFetchDetails(`/${params?.media_type}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.media_type}/${params?.id}/credits`)

  console.log("params:", params)
  console.log("cast data:", castData)

  return (
    <div>
      <div className='w-full h-100 relative'>
        <div className='w-full h-full'>
          <img
            src={imageURL + data?.backdrop_path}
            alt=""
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute w-full h-full top-0 bg-linear-to-t from-neutral-900/90 to-transparent '>
        </div>

        <div className=''>
          <div>
            <img
            src={imageURL + data?.poster_path}
            alt=""
            className='h-80 w-60 object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage