import React from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'

function Home() {

    const trendingData = useSelector(state => state.movieo.bannerData)

    

    return (
        <>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading={"Trending"}/>
        </>
    )
}
export default Home