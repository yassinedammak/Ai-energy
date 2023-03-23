import { useRef, useState } from "react"
import './ReviewsSection.scss'

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="reviewSectionTitle">
         Founders
        </div>
        <div className="reviewSectionSubtitle">
          Have a look at the founders of the project <br/>
          ENSI (national school of comupter science) students .
        </div>
      </div>
      <div className="allReviews">
        <div className="review">
          <div className="profilePic">
            <img src="src\images\336631725_1418684698963542_2657579525992746435_n.jpg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Wassim Chouchen
            </div>
            <div className="reviewerLocation">
             Tunisia , ElJem
            </div>
            <div className="reviewerReview">
              <em></em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="src\images\334900381_607916724174396_49577400954995830_n.jpg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Yassine Dammak
            </div>
            <div className="reviewerLocation">
              Tunisia ,Sfax
            </div>
            <div className="reviewerReview">
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="src\images\334910887_1085411069528004_2366165994054918406_n.jpg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Oumayma mallouli
            </div>
            <div className="reviewerLocation">
            Tunisia ,Sfax            </div>
            <div className="reviewerReview">
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="src\images\337323045_917822695932631_3612323856518680898_n.jpg" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Ghassen farjallah
            </div>
            <div className="reviewerLocation">
            Tunisia ,Sfax            </div>
            <div className="reviewerReview">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
