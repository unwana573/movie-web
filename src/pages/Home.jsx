import React from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

function Home() {

    const trendingData = useSelector(state => state.movieo.bannerData)

    return (
        <>
            <BannerHome />

            <div className='container mx-auto pl-13 pr-13 my-10'>    
                <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white'>Trending Show</h2>
                <div className='grid grid-cols-[repeat(auto-fit,210px)] gap-6'>
                    {
                        trendingData.map((data, index) => {
                            return(
                                <Card key={data.id} data={data} trending={true} index={index + 1} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Home