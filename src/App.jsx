import React from 'react'
import Header from './Component/Header'
import GenreMovieList from './Component/GenreMovieList'
import Slider from './Component/Slider'
import ProductionHouse from "./component/ProductionHouse"

function App() {
  return (
    <div>
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
    
    </div>
  )
}

export default App