import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from "axios"
import useFetch from '../hooks/useFetch'

function Home() {
    const trendingData = useSelector(state => state.movieo.bannerData)
    const { data : nowPlayingData } = useFetch("/movie/now_playing") 
    const { data : topRatedData } = useFetch("/movie/top_rated") 
    const { data : popularTVData } = useFetch("/tv/popular") 
    const { data : onTheAirData } = useFetch("/tv/on_the_air") 
    
    return (
        <>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
            <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
            <HorizontalScrollCard data={topRatedData} heading={"Top Rated"} media_type={"movie"}/>
            <HorizontalScrollCard data={popularTVData} heading={"Popular TV Shows"} media_type={"tv"}/>
            <HorizontalScrollCard data={onTheAirData} heading={"On The Air"} media_type={"tv"}/>
        </>
    )
}
export default Home