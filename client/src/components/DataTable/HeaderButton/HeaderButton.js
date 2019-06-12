import React from 'react';
import PropTypes from 'prop-types';
import './HeaderButton.scss';

const propTypes = {
  code: PropTypes.string,
  content: PropTypes.string,
  clicked: PropTypes.func,
};

const defaultProps = {
  code: '',
  content: '',
  clicked: () => {},
};

const HeaderButton = ({ code, content, clicked }) => {
  const handleClick = () => {
    clicked(code);
  };
  return (
    <div className='data_column' onClick={() => handleClick()}>
      {content}
    </div>
  );
};

HeaderButton.propTypes = propTypes;
HeaderButton.defaultProps = defaultProps;

export default HeaderButton;
