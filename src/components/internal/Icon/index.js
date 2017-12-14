import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.min.css';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  spin: PropTypes.bool,
};

const defaultProps = {
  className: null,
  size: null,
  spin: false,
};

const Icon = ({ className, name, size, spin }) => (
  <FontAwesome
    className={cx(className)}
    cssModule={faStyles}
    name={name}
    size={size}
    spin={spin}
  />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
