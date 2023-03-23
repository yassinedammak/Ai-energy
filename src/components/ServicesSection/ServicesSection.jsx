import { useEffect, useRef } from "react"
import './ServicesSection.scss'

const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
          Services
        </div>
        <div className="mottoSubtitle">
        Our services focus on helping industrial factories reduce their energy consumption and promote sustainable practices through the use of our machine learning model.<br/> We offer customized solutions to meet the specific needs of each client, whether it be predicting energy consumption, identifying areas for improvement, or developing energy management strategies. Our model is constantly updated and refined to provide accurate and reliable predictions, allowing factories to optimize their energy usage and reduce waste. In addition, we provide ongoing support and training to ensure our clients can effectively implement our technology and achieve their energy goals.<br/> We are committed to helping our clients achieve greater efficiency, reduce costs, and minimize their environmental impact.
        </div>
        <div className="serviceButtons">
          <button>Learn More</button>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='src\images\aiSolar.jpg' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
    </section>
  )
}

export default ServicesSection
