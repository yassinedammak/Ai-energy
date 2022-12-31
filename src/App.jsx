import './index.css'

import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ChooseUsSection/>
      <ReviewsSection/>
    </div>
  )
}

export default App
