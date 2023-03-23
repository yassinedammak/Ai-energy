import { useEffect, useRef } from 'react'
import './AboutSection.scss'

const AboutSection = () => {
  const aboutImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='src\images\dammak.yessin_image_releated_with_electrical_energy_theme_and_a_fa498f81-58f9-427f-9286-e895e5f06e36.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
          About Us
        </div>
        <div className="body">
        We are a group of passionate students who have developed a state-of-the-art machine learning model that predicts energy consumption for factories. Our mission is to reduce wasteful energy consumption and promote sustainable practices in the industrial sector through the use of our innovative technology.<br/><br/>

Our team is made up of individuals from diverse backgrounds, all dedicated to creating a more sustainable future. We have expertise in machine learning, data analysis, and energy management. We are committed to providing our clients with the best possible solutions to their energy needs.<br/><br/>

Thank you for considering our model to help you reduce your energy consumption and minimize your environmental impact. We look forward to working with you to achieve a greener future.
        </div>
        <div className="button">
          <button>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
