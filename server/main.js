import { Meteor } from 'meteor/meteor';

// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import '/imports/startup/server/fixtures.js';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import '/imports/api';

// This will give you Server Side Rendering from FlowRouter SSR.
import '/imports/startup/routes.jsx';
