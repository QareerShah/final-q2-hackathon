import Essentials from "./components/Essentials"
import Featured from "./components/Featured"
import Flight from "./components/Flight"
import Carousal2 from "./components/Geer"
import Hero from "./components/Hero"
import { SingleCarousel } from "./components/SingleCarousel"

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