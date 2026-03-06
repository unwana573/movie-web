import React, { use } from 'react'
import { useParams } from 'react-router-dom'

function ExplorePage() {
    const params = useParams()
    const [pageNo, setPageNo] = useState(1)
    const [data, setData] = useState([])

    console.log("params:", params.explore)

    const fetchData = async () => {
        try{
            const response = axios.get(`/discover/${params.explore}`, {
                params : {
                    page : pageNo
                }
            })
            setPageNo((prev)=>{
                return[
                    ...prev,
                    ...response.data.result
                ]
            })
        }catch(error){
            console.log("Error fetching data:", error)
        }
    }

    useEffect(() => {
        fetchData()
    })
    return (
        <div>ExplorePage</div>
    )
}

export default ExplorePage