import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'
import useFetch from '../../hook/useFetch'

const Home = () => {

  const {data,loading}=useFetch("/movie/popular")
  
  return (
    <div className='homePage'>
      <HeroBanner />
    </div>
  )
}

export default Home