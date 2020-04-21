import {Meteor} from 'meteor/meteor';
  // Meteor import allows us access to Meteor.startup which waits for the server
  // to finish processing everything before the code inside of startup is run
import {TableWithPosts} from './../imports/api/posts.js';
  // this gives us access to the UserPosts object so we can interact with the DB

Meteor.startup(() => {



});
