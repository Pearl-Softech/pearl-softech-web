import Hero from '../components/Hero'
import "../styles/Home.css"
import Service from '../components/Service'
import Value from '../components/Value'

const Home = () => {
  return (
    <div className="home-container">
        <Hero />
        <Service />
        <Value />
    </div>
  )
}

export default Home