import React from 'react';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
          <div id='addTopic'>
            <AddTopics user={this.props.passedUserInfo}/>
          </div>
          <div id='renderPosts'>
            <TopicList passed_posts={this.props.passedPropAllPosts}/>
          </div>
      </>
    )
  }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired,
  passedUserInfo:PropTypes.string,
};
