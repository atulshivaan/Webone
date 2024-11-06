
import './App.css'
import FeatureSection from './component/FeatureSection'
import Footer from './component/Footer'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import Price from './component/Price'
import Testimonial from './component/Testimonial'
import WorkFlow from './component/WorkFlow'

function App() {


  return (
    <>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <WorkFlow/>
      <Price/>
      <Testimonial/>
      <Footer/>
     </div>
    </>
  )
}

export default App
