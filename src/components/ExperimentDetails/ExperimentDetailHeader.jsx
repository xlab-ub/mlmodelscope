import React from 'react';

const defaultProps = {
  title: 'Model comparison',
};

export default function ExperimentDetailHeader(givenProps) {
  const props = { ...defaultProps, ...givenProps };

  return (
    <div className="experiment-detail-header">
      <h1 className="experiment-detail-header__title">{props.title}</h1>

      <p className={"experiment-detail-header__subtitle"}>{props.subtitle}</p>
    </div>
  );
}
