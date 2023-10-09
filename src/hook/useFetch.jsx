import React, { useEffect, useState } from 'react'
import { FetchDataFromApi } from '../utils/api'



const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(null)
    const [error,setError]=useState(null)


    useEffect(()=>{
        setLoading("Loading ....")
        setData(null)
        setError(null)
        FetchDataFromApi(url)
        .then((res)=>{
            setData(res)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err)
            setLoading(false)
        })

    },[url])
    return {data,loading,error}
  


}


export default useFetch