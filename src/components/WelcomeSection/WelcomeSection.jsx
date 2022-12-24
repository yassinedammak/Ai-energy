import './WelcomeSection.scss'

const WelcomeSection = () => {
  return (
    <div className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
          Changing the Future, for the Better.
        </div>
        <div className="mottoSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="welcomeButtons">
          <button>Learn More</button>
          <button>Watch Intro Video</button>
        </div>
      </div>
      <div className="welcomeImage">
        <img src='../src/images/welcome_image.png' width={576} height={360}/>
      </div>
    </div>
  )
}

export default WelcomeSection
