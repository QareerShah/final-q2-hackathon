import React from 'react'
import Hero from './Hero'
import Featured from './Featured'
import Flight from './Flight'
import Essentials from './Essentials'
import { SingleCarousel } from './SingleCarousel'
import Carousal2 from './Geer'

const Home = () => {
  return (
    <div>
      <Hero />
      <SingleCarousel />
      <Featured />
      <Carousal2 />
      <Flight />
      <Essentials />
    </div>
  )
}

export default Home