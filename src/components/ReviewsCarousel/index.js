// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  prevSlide = () => {
    const {id} = this.state
    let uniqueId = id
    if (id > 0) {
      uniqueId = id - 1
    }
    this.setState({id: uniqueId})
  }

  nextSlide = () => {
    const {id} = this.state
    let uniqueId = id
    if (id < 3) {
      uniqueId = id + 1
    }
    this.setState({id: uniqueId})
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="image" />
          <div className="arrowContainer">
            <button
              type="button"
              className="button left-arrow"
              onClick={this.prevSlide}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt=" left arrow"
              />
            </button>

            <p className="name">{username}</p>
            <button
              type="button"
              className="button right-arrow"
              onClick={this.nextSlide}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt=" right arrow"
              />
            </button>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
