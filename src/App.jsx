import { useEffect, useState } from 'react'
import { FetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import pageNotFound from './pages/404/pageNotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchResult from './pages/searchResult/searchResult'
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    GetApiConfiguration()
  }, [])
  const  GetApiConfiguration= () => {

    FetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res, "res")
        dispatch(getApiConfiguration(res))
      })
  }

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path='*' element={<pageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
