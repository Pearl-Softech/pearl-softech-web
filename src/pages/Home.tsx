import Hero from '../components/Hero'
import "../styles/Home.css"
import Service from '../components/Service'
import Value from '../components/Value'
import AboutComponent from '../components/AboutComponent'
import TeamComponent from '../components/TeamComponent'

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Hero />
            <AboutComponent />
            <TeamComponent />
            <Service />
            <Value />
        </div>
    )
}

export default Home