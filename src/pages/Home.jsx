import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from "axios"

function Home() {

    const trendingData = useSelector(state => state.movieo.bannerData)
    const [nowPlayingData, setNowPlayingData] =useState([])
    
    const fetchNowPlaying = async()=>{
        try{
            const response = await axios.get("/movie/now_playing")
            setNowPlayingData(response.data.results)
        }catch(error){
            
        }
    }

    useEffect(()=>{
        fetchNowPlaying()
    },[])

    return (
        <>
            <BannerHome />
            <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>
            <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"}/>
        </>
    )
}
export default Home