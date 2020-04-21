import React from 'react';
import {TableWithPosts} from './../api/posts.js';
import PropTypes from 'prop-types';


export default class RenderPost extends React.Component{

  render(){
    return (
      <>
    <div id='individualPost'>
        <div key={this.props.post_prop_obj._id} id='stylePost'>
          {this.props.post_prop_obj.topic}
        </div>
        <div id="likesSection">
            <button onClick={() => {  // anonymous arrow function
              TableWithPosts.update({_id: this.props.post_prop_obj._id}, {$inc: {likes: 1}})
            }}>Like</button>
            {'  '}
            <button onClick={() => {
              TableWithPosts.update({_id: this.props.post_prop_obj._id}, {$inc: {dislikes: 1}})
            }}>Dislike</button>
            <div id='likesDislikes'>
                Likes:{this.props.post_prop_obj.likes} {' | '}
                Dislikes:{this.props.post_prop_obj.dislikes} {''}
            </div>
        </div>
      </div>

      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
