import React from 'react';

require('./style.css');

function Ribbon(props) {
  const {
    text,
    backgroundColor,
    textColor,
  } = props;

  const ribbonStyle = {
    backgroundColor,
    color: textColor,
  };
  return (
    <div className="ribbon-wrapper">
      <div className="ribbon" style={ribbonStyle}>{text}</div>
    </div>
  );
}

Ribbon.propTypes = {
  text: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  textColor: React.PropTypes.string,
};

Ribbon.defaultProps = {
  backgroundColor: '#BFDC7A',
  textColor: '#ffffff',
};

export default Ribbon;
