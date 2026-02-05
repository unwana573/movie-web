import React from 'react'
import { useSelector } from 'react-redux'

function BannerHome() {
    const bannerData = useSelector(state => state.movieo.bannerData)
    const imageURL = useSelector(state => state.movieo.imageURL)
    console.log("Banner Home",bannerData);
return (
    <div>
        <div>
            {
                bannerData.map((data, index) => {
                    return(
                        <div>
                            <img src={imageURL+data.backdrop_path} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BannerHome