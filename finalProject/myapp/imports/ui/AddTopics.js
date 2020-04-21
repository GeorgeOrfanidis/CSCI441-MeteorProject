import React from 'react';
import {TableWithPosts} from './../api/posts.js';
import PropTypes from 'prop-types';

export default class AddTopics extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = ''; // clear input box
      TableWithPosts.insert({
        topic: newTopic,
        likes: 0,
        dislikes: 0,
        time: new Date(),
      });

    };
  }

 addPost(){
   if (this.props.user){
     return(
     <form onSubmit={this.processFormData.bind(this)}>
        <input type='text' name='formInputNameAttribute' placeholder='Write what you are thinking ... ' id="textArea"/>
        <button id='postButton'>Post</button>
      </form>
    )
   }
   else{
     return(
       (<div className='mssg'>Sign In/Sign Up to post something</div>)
    )
    }
 }


  render(){
    return (
      <div>
        {this.addPost()}
      </div>
    );
  }
};
AddTopics.propTypes = {
  user: PropTypes.string,
};
