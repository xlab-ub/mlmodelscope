import React, {Component} from 'react';
import "./HomePage.scss";
import Button from "../Buttons/Button";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page__fun-gradient" />
        <div className="home-page__content-container">
          <h1 className="home-page__title">Discover and compare state-of-the-art machine learning models</h1>
          <hr className="home-page__divider" />
          <h2 className="home-page__subtitle">
            MLModelScope is an open source platform for evaluating and profiling machine learning models to help
            app builders, data scientists, and system developers discover, compare and optimize models, frameworks and systems.
          </h2>
          <Button content="Browse model library" link={"/models"} isPrimary={false} isSmall={false}/>
        </div>
      </div>
    )
  }
}
