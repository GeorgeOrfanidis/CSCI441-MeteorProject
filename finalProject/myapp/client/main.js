import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {TableWithPosts} from './../imports/api/posts.js';
import App from './../imports/ui/App.js';

//configure the sign up option
  Accounts.ui.config({
    passwordSignupFields:"USERNAME_ONLY"
  });

 Meteor.startup(() =>  {

   // Tracker tracks queries and reruns code when queries change
   Tracker.autorun(() => {

     let allPostsInDB = TableWithPosts.find({/*emty so get all posts */},{sort: {time: -1}}).fetch();
     let title = 'My App';
     let userId = Meteor.userId(); //takes the id of the currently logged in user
                                  //if no user is logged in NULL is returned

     ReactDOM.render(<App
         passedPropTitle={title}
         passedPropModerator={'newman'}
         passedPropAllPosts={allPostsInDB}
         passedUserInfo={userId}
       />, document.getElementById('content'));

   });

 });
