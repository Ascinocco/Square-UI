import PropTypes from 'prop-types'; // eslint-disable-line
import React, { Component } from 'react';

import Icon from '../../internal/Icon';
import styles from './Sidebar.css'; // eslint-disable-line

const propTypes = {
  children: PropTypes.element,
};
const defaultProps = {
  children: null,
};

const getContentStyles = hidden => (
  hidden ? styles['sidebar--hide--content'] : styles['sidebar--show--content']
);

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <section>
        <header>
          <button onClick={() => this.toggleSidebar()}>
            <Icon name={'bars'} />
          </button>
        </header>
        <main className={getContentStyles(this.state.hidden)}>
          {this.props.children}
        </main>
      </section>
    );
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
