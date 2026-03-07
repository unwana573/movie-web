import React from 'react'

function DetailPage() {
  const params = useState()
  const { data } = useFetch('/${params.explore}/${}')

  
  console.log("params", params)

  const fetchData = async()=>{
    try{

    }catch(error){

    }
  }

  return (
    <div>
      
    </div>
  )
}

export default DetailPage