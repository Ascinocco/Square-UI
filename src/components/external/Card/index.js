import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './Card.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  onClick: PropTypes.func,
  raised: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: null,
  href: null,
  openInNewTab: false,
  onClick: null,
  raised: false,
};

const getTarget = openInNewTab => (
  openInNewTab ? '_blank' : null
);

const getCardClassName = (className, raised) => (
  cx(
    styles.card,
    raised ? styles['card--raised'] : styles['card--border'],
    className,
  )
);

const renderAnchorContainer = (cardClassName, children, href, openInNewTab) => (
  <a
    className={cx(styles['card--anchor'], cardClassName)}
    href={href}
    target={getTarget(openInNewTab)}
  >
    {children}
  </a>
);

const renderRoleButtonContainer = (cardClassName, children, onClick) => (
  <div
    className={cx(cardClassName, styles['card--button'])}
    role={'button'}
    tabIndex={0}
    onClick={() => onClick()}
    onKeyPress={() => {}}
  >
    {children}
  </div>
);

const renderCardContainer = (cardClassName, children) => (
  <div className={cardClassName}>
    {children}
  </div>
);

const renderCardMarkup = (cardClassName, children, href, onClick, openInNewTab) => {
  if (href) return renderAnchorContainer(cardClassName, children, href, openInNewTab);
  if (onClick) return renderRoleButtonContainer(cardClassName, children, onClick);
  return renderCardContainer(cardClassName, children);
};

const Card = ({ children, className, href, onClick, openInNewTab, raised }) => {
  const cardClassName = getCardClassName(className, raised);
  return renderCardMarkup(cardClassName, children, href, onClick, openInNewTab);
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
