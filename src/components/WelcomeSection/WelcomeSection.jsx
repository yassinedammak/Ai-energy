import { useEffect, useRef } from 'react'
import './WelcomeSection.scss'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
          Changing the Future, for the Better.
        </div>
        <div className="mottoSubtitle">
        Wasting energy has become an obsession that threatens most of the profit
        </div>
        <div className="welcomeButtons">
          <button>Learn More</button>
          <button>Watch Intro Video</button>
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='src\images\AI-1-1024x684.jpg' 
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
