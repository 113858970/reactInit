
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const ButtonType = {
  primary: 'primary',
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
};



const ButtonSize = {
  large: 'lg',
  small: 'sm',
};

const propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'circle-outline']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  loading: PropTypes.bool,
  prefix: PropTypes.string,
  className: PropTypes.string,
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

function Button(props) {
  const { type, shape, size, loading, prefix, className, htmlType } = props;
  const handleClick = (e) => {
    props.onClick(e);
  };
  const prefixCls = prefix || 'btn';
  const sizeCls = ButtonSize[size] || '';
  const classes = classNames({
    [prefixCls]: true,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-loading`]: loading,
    className,
  });
  return (
    <button
      type={htmlType || 'button'}
      className={classes}
      onClick={handleClick}
    >{props.children}</button>
  );
}

Button.propTypes = propTypes;

export default Button;
export { ButtonType, ButtonSize };
