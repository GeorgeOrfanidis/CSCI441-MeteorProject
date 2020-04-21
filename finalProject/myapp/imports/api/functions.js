import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import { v4 as uuidv4 } from 'uuid';

//display comments on the screen
export const RenderAllAvailableComments = function (passed_posts) {//you pass an array of objects
  var output;
  let formattedPosts = passed_posts.map(function(post){

  let formattedComments = post.comments.map(function (element)  {
      var randomKey=uuidv4();
       return <p key={randomKey} class='comment'> {element.commentsContent}</p>;
    });
    return formattedComments;
  });
  return formattedPosts;
};

//display replies on the screen
export const RenderAllAvailableReplies = function (passed_posts) {//you pass an array of objects
  var output;
  let formattedPosts = passed_posts.map(function(post){

  let formattedComments = post.comments.map(function (commentObj)  {
    let formattedReplies = commentObj.replies.map(function (string){
      var randomKey=uuidv4();
       return <p key={randomKey} class='reply'> {string}</p>;
    });
    return formattedReplies;
    });
    return formattedComments;
  });
  return formattedPosts;
};

//displays the replies for each individual comment within a post
function RenderReplies (commentObj) {//you pass a comment object
  let formattedReplies = commentObj.replies.map(function (string){
       return <p key={uuidv4()} className='reply'> {string}</p>;
    });
    return formattedReplies;
    };

///////////////////////////////////////////////////////////////////////////////
        //individualized Functions
//////////////////////////////////////////////////////////////////////////////

//display all the comments for an individual post.
 function RenderComments (passed_document) {//you pass a single document/object.
   let formattedComments = passed_document.comments.map(function (comment)  {
       return (
         <div key={uuidv4()} className= 'commentBox'>
           <p key={uuidv4()} className='comment'> {comment.commentsContent}</p>
           {RenderReplies(comment)}
         </div>
       );
    });
    return formattedComments;
};

//display posts on the screen with all the neccessary information like comments and replies
export function RenderPosts (passed_posts) {//you pass an array of objects
  let formattedPosts = passed_posts.map(function(post){ //post is an individual obj
     return (
        <div key={uuidv4()} className = "postBox">
            <p key={uuidv4()} className='post'> {post.postContent}</p>
            {RenderComments(post)}
        </div>
     );
  });
  return formattedPosts;
};
