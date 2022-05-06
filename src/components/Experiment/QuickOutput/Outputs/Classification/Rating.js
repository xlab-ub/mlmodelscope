import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import Icon from "../../../../Icon/Icon";
import "./Rating.scss";

export default class Rating extends BEMComponent {
  static defaultProps = {
    className: "rating"
  }

  constructor(props) {
    super(props);

    this.state = {
      ratings: [
        {
          title: "Correct",
          element: "correct",
          icon: "check",
          checked: false
        },
        {
          title: "Incorrect",
          element: "incorrect",
          icon: "x",
          checked: false
        }
      ]
    };

    this.modifiers = {
      correct: {
        checked: (state, index) => state.ratings[index].checked
      },
      incorrect: {
        checked: (state, index) => state.ratings[index].checked
      }
    }
  }

  render() {


    return (
      <div className={this.block()}>
        {
          this.getBody()
        }
      </div>
    )
  }

  getBody = () => {
    const isChecked = this.state.ratings.some(rating => rating.checked);

    if (isChecked)
      return <div onClick={this.unCheckRating}>I be done got checked yall!!!!</div>

    return (
      <>
        <div className={this.element('title')}>Rate the prediction of this model and image</div>
        <div className={this.element('buttons')} role="radiogroup">
          {
            this.state.ratings.map(this.makeRadioButton)
          }
        </div>
      </>
    )
  }

  makeRadioButton = (rating, index) => {
    const tabIndex = rating.checked ? 0 : (this.state.ratings.some(r => r.checked) || index > 0) ? -1 : 0;

    return (
      <div key={index} className={this.element(rating.element, index)} role="radio" aria-checked={rating.checked}
           tabIndex={tabIndex} onClick={() => this.clickRating(index)}>
        <Icon icon={rating.icon}/>
        <span>{rating.title}</span>
      </div>
    )
  }

  unCheckRating = () => {
    let ratings = this.state.ratings.map(rating => ({...rating, checked: false}));
    this.setState({ratings});
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
