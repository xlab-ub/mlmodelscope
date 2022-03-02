import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import Icon from "../../../../Icon/Icon";

export default class Rating extends BEMComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratings: [
        {
          title: "Correct",
          element: "correct",
          checked: false
        },
        {
          title: "Incorrect",
          element: "incorrect",
          checked: false
        }
      ]
    };
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('title')}>Rate the prediction of this model and image</div>
        <div className={this.element('buttons')} role="radiogroup">
          {
            this.state.ratings.map(this.makeRadioButton)
          }
        </div>
      </div>
    )
  }

  makeRadioButton = (rating, index) => {
    const tabIndex = rating.checked ? 0 : (this.state.ratings.some(r => r.checked) || index > 0) ? -1 : 0;

    return (
      <div key={index} className={this.element(rating.element)} role="radio" aria-checked={rating.checked} tabIndex={tabIndex} onClick={() => this.clickRating(index)}>
        <Icon />
        <span>{rating.title}</span>
      </div>
    )
  }

  clickRating = (clickedIndex) => {
    let ratings = this.state.ratings.map((rating, index) => {
      return {
        ...rating,
        checked: clickedIndex === index
      }
    });

    this.setState({
      ratings
    });
  }
}
