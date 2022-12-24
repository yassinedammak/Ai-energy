import './ChooseUsSection.scss'

import { AiOutlineBarChart as Chart } from 'react-icons/ai'
import { RiComputerLine as Service } from 'react-icons/ri'
import { MdSupportAgent as Support} from 'react-icons/md'
import { FaPeopleCarry as Community } from 'react-icons/fa'

const ChooseUsSection = () => {
  return (
    <div className="chooseUsSection">
      <div className="sectionTitle">
        Why Choose Us
      </div>
      <div className="reasonCards">
        <div className="card">
          <div className="cardSymbol">
            <Chart size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            Management & Marketing
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Service size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            High Quality Service
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Community size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            A Strong, Growing Community
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </div>
        </div>
        <div className="card">
          <div className="cardSymbol">
            <Support size={'100px'} color={'rgb(127, 127, 127)'}/>
          </div>
          <div className="cardTitle">
            24/7 Customer Service
          </div>
          <div className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChooseUsSection
