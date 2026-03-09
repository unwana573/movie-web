import React from 'react'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import moment from 'moment'

function DetailPage() {

  const params = useParams()
  const imageURL = useSelector(state => state.movieo.imageURL)

  const { data } = useFetchDetails(`/${params?.media_type}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.media_type}/${params?.id}/credits`)

  console.log("params:", params)
  console.log("cast data:", castData)

  const duration = (Number(data?.runtime)/60).toFixed(1).split(".").join(",") 
  return (
    <>
      <div>
        <div className='w-full h-100 relative'>
          <div className='w-full h-full hidden lg:block'>
            <img
              src={imageURL + data?.backdrop_path}
              alt=""
              className='h-full w-full object-cover'
            />
          </div>
          <div className='absolute w-full h-full top-0 bg-linear-to-t from-neutral-900/90 to-transparent '>
          </div>

          <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
            <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit '>
              <img
              src={imageURL + data?.poster_path}
              alt=""
              className='h-80 w-60 object-cover rounded-2xl'
              />
            </div>

            <div>
              <h2 className='text-2xl font-bold text-white'>
                {data?.title || data?.name}
              </h2>
              <p className='text-neutral-400'>{data?.tagline}</p>

              <div className='flex items-center my-3 gap-3'>
                <p>
                  Rating :   {Number(data?.vote_average).toFixed(1)}
                </p>
                <span>|</span>
                <p>
                  View : {Number(data?.vote_count).toFixed(1)}
                </p>
                <span>|</span>
                <p>
                  Duration : {duration[0]}h {duration[1]}m
                </p>
              </div>

                <div>
                  <div>
                    <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
                    <p>{data?.overview}</p>

                    <div className='flex items-center gap-3 my-3 text-center'>
                      <p>
                        Status : {data?.status}
                      </p>
                      <span>|</span>
                      <p>
                        Release date : {moment(data?.release_date).format("MMMM Do YYYY")}
                      </p>
                      <span>|</span>
                      <p>
                        Revenue : {Number(data?.revenue)}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
  </>
  )
}

export default DetailPage