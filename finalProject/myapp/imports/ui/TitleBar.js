import React from 'react';
import PropTypes from 'prop-types';

// need to export TitleBar class
export default class TitleBar extends React.Component{
  render(){
    return (
      <div id="title">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  moderator: PropTypes.string,
};
