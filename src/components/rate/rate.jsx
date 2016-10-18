import React, { PropTypes, cloneElement } from 'react';

const propTypes = {
  amount: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  click: PropTypes.func,
};

const defaultProps = {
  amount: 5,
  score: 0,
};

function Rank(props) {
  const { score, amount, click } = props;
  const starEle = [];

  let half = false;
  const activeNum = Math.floor(score);
  const remainder = score % 1;
  if (remainder) {
    half = true;
  }

  const handleClick = (i, event) => {
    if (click) {
      click(i + 1);
    }
    event.preventDefault();
    event.stopPropagation();
  };

  let i = 0;

  for (; i < activeNum; i += 1) {
    starEle.push(<i key={i} className="icon i-mediumstar" />);
  }

  if (half) {
    starEle.push(<i key={i} className="icon i-mediumstar-half" />);
    i += 1;
  }

  for (; i < amount; i += 1) {
    starEle.push(<i key={i} className="icon i-mediumstar-empty" />);
  }

  return (
    <div className="rank-stars">
      {
        starEle.map((star, index) => {
          let cloneStar = star;
          if (click) {
            const starClick = handleClick.bind(this, index);
            cloneStar = cloneElement(star, {
              onClick: starClick,
            });
          }
          return (
            cloneStar
          );
        })
      }
    </div>
  );
}

Rank.propTypes = propTypes;
Rank.defaultProps = defaultProps;

export default Rank;

