import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Footer from '../components/Footer'

function SearchPage() {
  const location = useLocation()
  const [data, setData] = useState([])
  const [page, setPage] = useState([])
  const navigate = useNavigate()

  const query = new URLSearchParams(location.search).get('query') || ""

  console.log("location.search:", location.search)
console.log("query value:", query)

  const fetchData = async () => {
    try {
      const query = new URLSearchParams(location.search).get('query')
      if (!query) return

      const response = await axios.get(`/search/multi`, {
        params: {
          query: query,
          page: 1
        }
      })

      setData(response.data.results || []) 
    } catch (error) {
      console.log("Error fetching data:", error)
    }
  }

  useEffect(() => {
    setPage(1)
    setData([]) 
    fetchData()
  }, [location.search])

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight - 100) {
        setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    fetchData()
  },[page])

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  },[])

  return (
  <>
    <div className='py-16 px-16'>

    <div className='lg:hidden my-2 sticky top-17.5 z-30'>
      <input 
        type="text" 
        placeholder='Search here....'
        onChange={(e)=> navigate(`/search?query=${e.target.value}`)}
        value={query}
        className='px-4 text-lg w-full h-13 bg-white rounded-full text-neutral-900'
      />
    </div>

      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-2xl font-semibold my-3'>
          Search Results
        </h3>

        {data.length === 0 ? (
          <p className='text-gray-400 ml-5'>No results found.</p>
        ) : (
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
            {data.map((searchData) => (
              <Card
                data={searchData}
                key={searchData.id + "search"}
                media_type={searchData.media_type}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  <Footer />
  </>
  )
}

export default SearchPage