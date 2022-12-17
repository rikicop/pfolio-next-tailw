import type { NextPage } from 'next'
//import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'



const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Main />
      <About />
      <Skills />
    </div>
  )
}


export default Home
