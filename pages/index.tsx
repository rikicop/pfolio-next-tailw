import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'



const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero/>
      <Hero/>

    </div>
  )
}


export default Home
